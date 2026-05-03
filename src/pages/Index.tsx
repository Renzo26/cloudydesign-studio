import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Grid3x3 } from "lucide-react";
import { slides } from "@/components/slides";
import { useIsMobile } from "@/hooks/use-mobile";

const useScale = (ref: React.RefObject<HTMLDivElement>, portrait: boolean) => {
  useEffect(() => {
    const apply = () => {
      const el = ref.current;
      if (!el) return;
      const { width, height } = el.getBoundingClientRect();
      const scale = portrait
        ? width / 1920
        : Math.min(width / 1920, height / 1080);
      el.style.setProperty("--slide-scale", String(scale));
      const frame = el.querySelector(".slide-frame") as HTMLDivElement | null;
      if (frame && portrait) {
        frame.style.height = `${1080 * scale}px`;
        frame.style.width = `${1920 * scale}px`;
      } else if (frame) {
        frame.style.height = "";
        frame.style.width = "";
      }
    };
    apply();
    const ro = new ResizeObserver(apply);
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, [ref, portrait]);
};

const Stage = ({ children, portrait = false }: { children: React.ReactNode; portrait?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  useScale(ref, portrait);
  return (
    <div ref={ref} className={`slide-stage ${portrait ? "is-portrait" : ""}`}>
      <div className="slide-frame">{children}</div>
    </div>
  );
};

const Index = () => {
  const [idx, setIdx] = useState(0);
  const [grid, setGrid] = useState(false);
  const [fs, setFs] = useState(false);
  const total = slides.length;
  const isMobile = useIsMobile();

  const next = () => setIdx((i) => Math.min(i + 1, total - 1));
  const prev = () => setIdx((i) => Math.max(i - 1, 0));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") { setGrid(false); if (document.fullscreenElement) document.exitFullscreen(); }
      if (e.key.toLowerCase() === "g") setGrid((g) => !g);
      if (e.key === "F5" || e.key.toLowerCase() === "f") {
        e.preventDefault();
        document.documentElement.requestFullscreen().catch(() => {});
      }
    };
    const onFs = () => setFs(!!document.fullscreenElement);
    window.addEventListener("keydown", onKey);
    document.addEventListener("fullscreenchange", onFs);
    return () => { window.removeEventListener("keydown", onKey); document.removeEventListener("fullscreenchange", onFs); };
  }, []);

  const Current = slides[idx];

  return (
    <main className="h-[100dvh] w-screen bg-[hsl(var(--brand-deep))] flex flex-col overflow-hidden">
      {/* Top bar */}
      <header className="h-12 sm:h-14 border-b border-border/60 px-3 sm:px-6 flex items-center justify-between bg-[hsl(var(--brand-navy))]/60 backdrop-blur z-20">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-2 h-2 rounded-full bg-primary glow-blue shrink-0" />
          <span className="font-display font-semibold text-sm sm:text-base truncate">CloudySolutions</span>
          <span className="hidden md:inline text-xs font-mono text-muted-foreground ml-3">Apresentação Institucional</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <button onClick={() => setGrid((g) => !g)} className="px-2 sm:px-3 py-1.5 rounded-md hover:bg-secondary text-sm flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Grid3x3 className="w-4 h-4" /> <span className="hidden sm:inline">Slides</span>
          </button>
          <button onClick={() => fs ? document.exitFullscreen() : document.documentElement.requestFullscreen()}
            className="px-2 sm:px-3 py-1.5 rounded-md bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm flex items-center gap-2 font-medium hover:opacity-90 transition-opacity">
            {fs ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            <span className="hidden sm:inline">Apresentar</span>
          </button>
        </div>
      </header>

      {/* Stage */}
      <div
        className="flex-1 relative touch-pan-y"
        onTouchStart={(e) => { (e.currentTarget as any)._tx = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          const sx = (e.currentTarget as any)._tx;
          if (sx == null) return;
          const dx = e.changedTouches[0].clientX - sx;
          if (Math.abs(dx) > 50) (dx < 0 ? next() : prev());
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Stage>
              <Current i={idx + 1} t={total} />
            </Stage>
          </motion.div>
        </AnimatePresence>

        {/* Nav */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1 sm:gap-2 glass rounded-full px-2 sm:px-3 py-1.5 sm:py-2 z-10">
          <button onClick={prev} disabled={idx === 0} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full hover:bg-secondary flex items-center justify-center disabled:opacity-30 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="px-2 sm:px-4 font-mono text-xs sm:text-sm tabular-nums">
            <span className="text-foreground">{String(idx + 1).padStart(2, "0")}</span>
            <span className="text-muted-foreground"> / {String(total).padStart(2, "0")}</span>
          </div>
          <button onClick={next} disabled={idx === total - 1} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full hover:bg-secondary flex items-center justify-center disabled:opacity-30 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Progress */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-border">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent"
            animate={{ width: `${((idx + 1) / total) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      {/* Grid overlay */}
      <AnimatePresence>
        {grid && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[hsl(var(--brand-deep))]/95 backdrop-blur-xl z-50 overflow-auto p-4 sm:p-8 md:p-12"
            onClick={() => setGrid(false)}
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-6 sm:mb-10 gap-4">
                <h2 className="font-display text-xl sm:text-3xl font-semibold">Todos os slides</h2>
                <div className="hidden sm:block text-sm text-muted-foreground font-mono">ESC para fechar · G para alternar</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {slides.map((S, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setIdx(i); setGrid(false); }}
                    className="group relative aspect-video rounded-xl overflow-hidden border border-border hover:border-primary transition-all"
                  >
                    <div className="absolute inset-0">
                      <Stage><S i={i + 1} t={total} /></Stage>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between">
                      <span className="font-mono text-xs text-foreground">{String(i + 1).padStart(2, "0")}</span>
                      {idx === i && <span className="text-xs font-mono text-primary">● atual</span>}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Index;

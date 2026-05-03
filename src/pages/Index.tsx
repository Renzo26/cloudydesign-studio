import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Grid3x3 } from "lucide-react";
import { slides } from "@/components/slides";

const useScale = (ref: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const apply = () => {
      const el = ref.current;
      if (!el) return;
      const { width, height } = el.getBoundingClientRect();
      const scale = Math.min(width / 1920, height / 1080);
      el.style.setProperty("--slide-scale", String(scale));
    };
    apply();
    const ro = new ResizeObserver(apply);
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, [ref]);
};

const Stage = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  useScale(ref);
  return (
    <div ref={ref} className="slide-stage">
      <div className="slide-frame">{children}</div>
    </div>
  );
};

const Index = () => {
  const [idx, setIdx] = useState(0);
  const [grid, setGrid] = useState(false);
  const [fs, setFs] = useState(false);
  const total = slides.length;

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
    <main className="h-screen w-screen bg-[hsl(var(--brand-deep))] flex flex-col">
      {/* Top bar */}
      <header className="h-14 border-b border-border/60 px-6 flex items-center justify-between bg-[hsl(var(--brand-navy))]/60 backdrop-blur z-20">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-primary glow-blue" />
          <span className="font-display font-semibold">CloudySolutions</span>
          <span className="text-xs font-mono text-muted-foreground ml-3">Apresentação Institucional</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setGrid((g) => !g)} className="px-3 py-1.5 rounded-md hover:bg-secondary text-sm flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Grid3x3 className="w-4 h-4" /> Slides
          </button>
          <button onClick={() => fs ? document.exitFullscreen() : document.documentElement.requestFullscreen()}
            className="px-3 py-1.5 rounded-md bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm flex items-center gap-2 font-medium hover:opacity-90 transition-opacity">
            {fs ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            Apresentar
          </button>
        </div>
      </header>

      {/* Stage */}
      <div className="flex-1 relative">
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
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 glass rounded-full px-3 py-2 z-10">
          <button onClick={prev} disabled={idx === 0} className="w-9 h-9 rounded-full hover:bg-secondary flex items-center justify-center disabled:opacity-30 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="px-4 font-mono text-sm tabular-nums">
            <span className="text-foreground">{String(idx + 1).padStart(2, "0")}</span>
            <span className="text-muted-foreground"> / {String(total).padStart(2, "0")}</span>
          </div>
          <button onClick={next} disabled={idx === total - 1} className="w-9 h-9 rounded-full hover:bg-secondary flex items-center justify-center disabled:opacity-30 transition-colors">
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
            className="fixed inset-0 bg-[hsl(var(--brand-deep))]/95 backdrop-blur-xl z-50 overflow-auto p-12"
            onClick={() => setGrid(false)}
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-10">
                <h2 className="font-display text-3xl font-semibold">Todos os slides</h2>
                <div className="text-sm text-muted-foreground font-mono">ESC para fechar · G para alternar</div>
              </div>
              <div className="grid grid-cols-3 gap-6">
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

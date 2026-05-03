import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  index: number;
  total: number;
  label?: string;
  variant?: "default" | "hero" | "dark";
}

export const SlideLayout = ({ children, index, total, label, variant = "default" }: Props) => {
  const bg =
    variant === "hero"
      ? "bg-[var(--gradient-hero)]"
      : variant === "dark"
      ? "bg-[hsl(var(--brand-deep))]"
      : "bg-[hsl(var(--brand-navy))]";

  return (
    <div className={`relative w-full h-full overflow-hidden ${bg}`}>
      {/* Ambient orbs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] orb pointer-events-none" />
      <div className="absolute -bottom-60 -left-40 w-[700px] h-[700px] rounded-full bg-accent/10 blur-[140px] orb pointer-events-none" style={{ animationDelay: "3s" }} />
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Header */}
      <div className="absolute top-12 left-16 right-16 flex items-center justify-between z-10">
        <div className="flex items-center gap-3 text-sm font-mono text-muted-foreground">
          <div className="w-2 h-2 rounded-full bg-primary glow-blue" />
          CloudySolutions
        </div>
        <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground tracking-widest uppercase">
          {label && <span>{label}</span>}
          <span className="text-foreground/60">
            {String(index).padStart(2, "0")} <span className="text-muted-foreground/50">/ {String(total).padStart(2, "0")}</span>
          </span>
        </div>
      </div>

      {/* Content */}
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 px-32 pt-40 pb-24 flex flex-col"
      >
        {children}
      </motion.div>

      {/* Footer */}
      <div className="absolute bottom-10 left-16 right-16 flex items-center justify-between text-xs font-mono text-muted-foreground/60 z-10">
        <span>cloudysolutions.com</span>
        <span>Automação · IA · Sistemas</span>
      </div>
    </div>
  );
};

export const SlideTitle = ({ kicker, title, sub }: { kicker?: string; title: string; sub?: string }) => (
  <div className="mb-12">
    {kicker && (
      <div className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-5 flex items-center gap-3">
        <span className="w-10 h-px bg-primary" /> {kicker}
      </div>
    )}
    <h2 className="font-display text-7xl font-semibold leading-[1.05] tracking-tight text-gradient max-w-5xl">
      {title}
    </h2>
    {sub && <p className="text-2xl text-muted-foreground mt-6 max-w-4xl leading-relaxed">{sub}</p>}
  </div>
);

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { HeroScene } from '@/three/HeroScene'

const ease = [0.22, 1, 0.36, 1] as const

function fade(delay = 0, y = 32) {
  return {
    initial:    { opacity: 0, y },
    animate:    { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay, ease },
  }
}


export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ height: '100svh', minHeight: '100vh' }}
    >
      {/* ── 3D Scene (background) ── */}
      <HeroScene />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Radial vignette at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 10%, hsl(224 70% 4% / 0.65) 100%)',
        }}
      />

      {/* Center text legibility mask */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 60% at 50% 48%, hsl(224 70% 4% / 0.55) 0%, transparent 100%)',
        }}
      />

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, hsl(224 70% 4%))',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto pt-28 md:pt-32 pb-24">

        {/* Kicker badge */}
        <motion.div
          {...fade(0.3)}
          className="inline-flex items-center gap-3 mb-10"
        >
          <span className="w-8 h-px bg-gradient-to-r from-transparent to-brand-cyan" />
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-brand-cyan/80 px-4 py-1.5 rounded-full border border-brand-cyan/20 bg-brand-cyan/5">
            Automação · IA · Sistemas
          </span>
          <span className="w-8 h-px bg-gradient-to-l from-transparent to-brand-cyan" />
        </motion.div>

        {/* Headline */}
        <div className="mb-6">
          {(['Operação', 'Inteligente.', 'Resultados', 'Reais.'] as const).map((word, i) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, y: 50, skewY: 3 }}
              animate={{ opacity: 1, y: 0, skewY: 0 }}
              transition={{ duration: 0.9, delay: 0.4 + i * 0.14, ease }}
              className={`block font-display font-bold leading-[1.05] tracking-tighter ${
                i % 2 === 0 ? 'text-gradient' : 'text-gradient-brand'
              }`}
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)' }}
            >
              {word}
            </motion.div>
          ))}
        </div>

        {/* Sub */}
        <motion.p
          {...fade(1.0, 20)}
          className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-12"
        >
          Automação, IA e sistemas sob medida para empresas que querem operar
          melhor e crescer com eficiência real.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fade(1.15, 16)} className="flex flex-wrap gap-4 justify-center">
          <a href="#servicos" className="btn-primary">
            Explorar Serviços <ArrowRight size={16} />
          </a>
          <a href="#projetos" className="btn-outline">
            Ver Projetos
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.7 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase text-white/25">scroll</span>
        <ChevronDown size={16} className="text-white/25 animate-bounce-subtle" />
      </motion.div>
    </section>
  )
}

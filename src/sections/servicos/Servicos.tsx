import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { servicos } from '@/data'

const ease = [0.22, 1, 0.36, 1] as const

function ServicoCard({ icon: Icon, title, description, tags, index }: {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
  index: number
}) {
  const card = useRef<HTMLDivElement>(null)

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = card.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = (e.clientX - left) / width
    const y = (e.clientY - top) / height
    el.style.setProperty('--rx', `${(y - 0.5) * -10}deg`)
    el.style.setProperty('--ry', `${(x - 0.5) * 10}deg`)
    el.style.setProperty('--glow-x', `${x * 100}%`)
    el.style.setProperty('--glow-y', `${y * 100}%`)
  }

  function onLeave() {
    const el = card.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <motion.div
      ref={card}
      className="glass tilt-card rounded-2xl p-7 relative overflow-hidden group cursor-default"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.05 + index * 0.1, ease }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="card-spotlight" />

      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className="relative z-10 mb-5">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue/25 to-brand-cyan/15 flex items-center justify-center group-hover:from-brand-blue/40 group-hover:to-brand-cyan/30 transition-all duration-300">
          <Icon size={20} className="text-brand-cyan" />
        </div>
      </div>

      {/* Title + arrow */}
      <div className="relative z-10 flex items-start justify-between mb-3">
        <h3 className="font-display font-bold text-lg text-white leading-tight pr-4">{title}</h3>
        <ArrowUpRight
          size={16}
          className="text-white/20 group-hover:text-brand-cyan flex-shrink-0 mt-0.5 transition-all duration-300 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"
        />
      </div>

      <p className="relative z-10 text-white/50 text-sm leading-relaxed mb-5">{description}</p>

      <div className="relative z-10 flex flex-wrap gap-1.5">
        {tags.map(t => (
          <span
            key={t}
            className="font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/35 group-hover:border-brand-cyan/25 group-hover:text-white/55 transition-all duration-300"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export function Servicos() {
  return (
    <section id="servicos" className="relative py-32 overflow-hidden">
      <div className="gradient-line absolute top-0 left-0 right-0" />

      <div className="orb animate-aurora-2"
        style={{ width: 700, height: 500, background: 'hsl(195 100% 65% / 0.07)', top: '20%', left: '-15%', filter: 'blur(130px)' }}
      />

      {/* Decorative number */}
      <div
        className="absolute left-6 top-12 font-display font-extrabold select-none pointer-events-none leading-none"
        style={{ fontSize: 'clamp(8rem, 20vw, 18rem)', color: 'hsl(217 100% 60% / 0.04)', letterSpacing: '-0.05em' }}
      >
        02
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.div className="section-kicker"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            02 — Serviços
          </motion.div>

          <motion.h2
            className="font-display text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            O que a{' '}
            <span className="text-gradient-brand">CloudySolutions</span>{' '}
            entrega
          </motion.h2>

          <motion.p
            className="text-white/50 text-lg"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            Cinco frentes técnicas com foco em impacto mensurável.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map((s, i) => (
            <ServicoCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

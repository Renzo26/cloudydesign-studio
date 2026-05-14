import { Suspense } from 'react'
import { motion } from 'framer-motion'
import { stackCategorias } from '@/data'
import { TechOrbit } from '@/three/TechOrbit'

const ease = [0.22, 1, 0.36, 1] as const

export function StackTecnico() {
  return (
    <section id="stack" className="relative py-32 overflow-hidden">
      <div className="gradient-line absolute top-0 left-0 right-0" />

      <div className="orb animate-aurora-2"
        style={{ width: 600, height: 600, background: 'hsl(195 100% 65% / 0.07)', bottom: '-5%', right: '-8%', filter: 'blur(130px)' }}
      />

      {/* Decorative number */}
      <div
        className="absolute left-6 top-12 font-display font-extrabold select-none pointer-events-none leading-none"
        style={{ fontSize: 'clamp(8rem, 20vw, 18rem)', color: 'hsl(217 100% 60% / 0.04)', letterSpacing: '-0.05em' }}
      >
        04
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
            04 — Stack Técnico
          </motion.div>

          <motion.h2
            className="font-display text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            Tecnologias que{' '}
            <span className="text-gradient-brand">dominamos</span>
          </motion.h2>

          <motion.p
            className="text-white/50 text-lg"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            Ferramentas escolhidas por maturidade, comunidade e resultados comprovados.
          </motion.p>
        </div>

        {/* Main layout: 3D orbit + categories */}
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* 3D Tech Orbit */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
          >
            <div className="glass rounded-3xl p-4 overflow-hidden">
              <Suspense fallback={
                <div className="w-[300px] h-[300px] flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-2 border-brand-cyan/40 border-t-brand-cyan animate-spin" />
                </div>
              }>
                <TechOrbit size={300} />
              </Suspense>
              <p className="font-mono text-[9px] uppercase tracking-widest text-white/25 text-center mt-3 pb-1">
                Ecossistema Tecnológico
              </p>
            </div>
          </motion.div>

          {/* Category cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stackCategorias.map((cat, i) => (
              <motion.div
                key={cat.name}
                className="glass glass-hover rounded-2xl p-5 group"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.08 + i * 0.09, ease }}
              >
                {/* Accent bar */}
                <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan mb-4 group-hover:w-full transition-all duration-500" />

                <div className="font-display font-bold text-sm text-white mb-3">{cat.name}</div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, j) => (
                    <motion.span
                      key={item}
                      className="font-mono text-[10px] uppercase tracking-wider text-white/50 hover:text-brand-cyan transition-colors duration-200 cursor-default"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.08 + j * 0.04 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

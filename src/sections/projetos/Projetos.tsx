import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { projetos } from '@/data'

const ease = [0.22, 1, 0.36, 1] as const

const decNums = ['01', '02', '03', '04']

export function Projetos() {
  return (
    <section id="projetos" className="relative py-32 overflow-hidden">
      <div className="gradient-line absolute top-0 left-0 right-0" />

      <div className="orb animate-aurora"
        style={{ width: 600, height: 600, background: 'hsl(217 100% 60% / 0.08)', top: '10%', right: '-10%', filter: 'blur(120px)' }}
      />

      {/* Decorative number */}
      <div
        className="absolute right-6 top-12 font-display font-extrabold select-none pointer-events-none leading-none"
        style={{ fontSize: 'clamp(8rem, 20vw, 18rem)', color: 'hsl(217 100% 60% / 0.04)', letterSpacing: '-0.05em' }}
      >
        03
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
            03 — Projetos
          </motion.div>

          <motion.h2
            className="font-display text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            Casos entregues com{' '}
            <span className="text-gradient-brand">resultados reais</span>
          </motion.h2>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projetos.map((p, i) => (
            <motion.div
              key={p.title}
              className="glass rounded-2xl p-7 relative overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.05 + i * 0.12, ease }}
              whileHover={{ y: -4 }}
            >
              {/* Large decorative number */}
              <div
                className="absolute right-5 bottom-4 font-display font-extrabold select-none pointer-events-none leading-none"
                style={{ fontSize: '7rem', color: 'hsl(217 100% 60% / 0.06)', letterSpacing: '-0.05em' }}
              >
                {decNums[i]}
              </div>

              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Category badge */}
                <span className="tag mb-4 inline-block">{p.category}</span>

                <h3 className="font-display font-bold text-xl text-white mb-1">{p.title}</h3>
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/35 mb-4">{p.client}</div>

                <p className="text-white/55 text-sm leading-relaxed mb-5">{p.description}</p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.techs.map(t => (
                    <span key={t} className="font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-cyan/70">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Result */}
                <div className="flex items-center gap-2.5 pt-4 border-t border-white/[0.06]">
                  <CheckCircle2 size={14} className="text-brand-cyan flex-shrink-0" />
                  <span className="text-sm font-medium text-white/70">{p.result}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { diferenciais } from '@/data'

const ease = [0.22, 1, 0.36, 1] as const

export function Diferenciais() {
  return (
    <section id="diferenciais" className="relative py-32 overflow-hidden">
      <div className="gradient-line absolute top-0 left-0 right-0" />

      <div className="orb animate-aurora"
        style={{ width: 500, height: 500, background: 'hsl(217 100% 60% / 0.09)', top: '20%', left: '-8%', filter: 'blur(120px)' }}
      />

      {/* Decorative number */}
      <div
        className="absolute right-6 top-12 font-display font-extrabold select-none pointer-events-none leading-none"
        style={{ fontSize: 'clamp(8rem, 20vw, 18rem)', color: 'hsl(217 100% 60% / 0.04)', letterSpacing: '-0.05em' }}
      >
        05
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left — header */}
          <div className="lg:sticky lg:top-28">
            <motion.div className="section-kicker"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              05 — Diferenciais
            </motion.div>

            <motion.h2
              className="font-display text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
            >
              Por que escolher a{' '}
              <span className="text-gradient-brand">CloudySolutions</span>?
            </motion.h2>

            <motion.p
              className="text-white/50 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
            >
              Não somos mais uma consultoria. Somos um parceiro técnico
              comprometido com os seus resultados de ponta a ponta.
            </motion.p>

            {/* Decorative element */}
            <motion.div
              className="mt-12 hidden lg:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="w-20 h-20 rounded-2xl border border-brand-cyan/20 bg-brand-cyan/5 flex items-center justify-center">
                <div className="w-10 h-10 rounded-xl border border-brand-blue/30 bg-brand-blue/10 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — list */}
          <div className="flex flex-col gap-4">
            {diferenciais.map((d, i) => (
              <motion.div
                key={d.title}
                className="glass rounded-2xl p-6 relative overflow-hidden group cursor-default"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.06 + i * 0.09, ease }}
                whileHover={{ x: 4 }}
              >
                {/* Left accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-blue to-brand-cyan scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-top rounded-full" />

                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                <div className="relative z-10 flex items-start gap-5">
                  <span className="font-mono text-xs text-brand-cyan/40 flex-shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="font-display font-bold text-white mb-1.5 group-hover:text-gradient-brand transition-all duration-300">
                      {d.title}
                    </div>
                    <div className="text-white/45 text-sm leading-relaxed">{d.description}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

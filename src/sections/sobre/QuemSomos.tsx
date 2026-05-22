import { motion } from 'framer-motion'
import { Zap, Target, ShieldCheck } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const


const highlights = [
  { icon: Zap,         title: 'Velocidade com qualidade',   desc: 'Entregamos rápido sem abrir mão da robustez técnica.' },
  { icon: Target,      title: 'Foco em ROI mensurável',     desc: 'Cada projeto tem métricas claras de retorno desde o início.' },
  { icon: ShieldCheck, title: 'Comprometimento total',      desc: 'Não sumimos após a entrega — evoluímos junto com o negócio.' },
]


export function QuemSomos() {
  return (
    <section id="sobre" className="relative py-32 overflow-hidden" style={{ background: '#f8faff' }}>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

      {/* Faint orb */}
      <div className="orb" style={{ width: 600, height: 600, background: 'hsl(217 100% 60% / 0.05)', top: '-20%', right: '-10%', filter: 'blur(140px)' }} />

      {/* Decorative "01" */}
      <div
        className="absolute right-6 top-8 font-display font-extrabold select-none pointer-events-none leading-none"
        style={{ fontSize: 'clamp(8rem, 20vw, 18rem)', color: 'hsl(217 100% 30% / 0.04)', letterSpacing: '-0.05em' }}
      >
        01
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Top: headline + copy ─────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">

          {/* Left */}
          <div>
            <motion.div
              className="section-kicker"
              style={{ color: 'hsl(217 100% 45%)' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              01 — Quem Somos
            </motion.div>

            <motion.h2
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.05]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
            >
              Uma equipe técnica focada em{' '}
              <span className="text-gradient-brand">resultados reais</span>
            </motion.h2>
          </div>

          {/* Right */}
          <div className="lg:pt-16">
            <motion.p
              className="text-slate-600 text-lg leading-relaxed mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
            >
              A CloudySolutions nasceu da frustração com projetos de tecnologia que prometem
              muito e entregam pouco. Somos especialistas em automação, IA e desenvolvimento
              de sistemas — e só assinamos projetos onde enxergamos valor real.
            </motion.p>

            <motion.p
              className="text-slate-600 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.28, ease }}
            >
              Não somos uma agência genérica. Somos um time técnico que diagnostica,
              constrói e entrega — com comprometimento total com o resultado do cliente.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35, ease }}
            >
              {['Automação', 'IA Aplicada', 'Backend', 'Integrações', 'Analytics'].map(t => (
                <span key={t} className="font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-slate-300 text-slate-500 bg-white">
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── Highlights ───────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((h, i) => {
            const Icon = h.icon
            return (
              <motion.div
                key={h.title}
                className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-100"
                style={{ boxShadow: '0 2px 16px rgba(30,64,175,0.05)' }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue/15 to-brand-cyan/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={18} className="text-brand-blue" />
                </div>
                <div>
                  <div className="font-display font-bold text-slate-900 text-sm mb-1">{h.title}</div>
                  <div className="text-slate-500 text-sm leading-relaxed">{h.desc}</div>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

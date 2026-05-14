import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { stats } from '@/data'

const ease = [0.22, 1, 0.36, 1] as const

function useCounter(target: number, duration = 1800) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration)
            const eased = 1 - Math.pow(1 - p, 4)
            setValue(Math.round(eased * target))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { value, ref }
}

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { value: count, ref } = useCounter(value)
  return (
    <div ref={ref} className="text-center">
      <div className="stat-number text-5xl md:text-6xl mb-2">
        {count}{suffix}
      </div>
      <div className="font-mono text-[11px] uppercase tracking-widest text-white/40">{label}</div>
    </div>
  )
}

export function QuemSomos() {
  return (
    <section id="sobre" className="relative py-32 overflow-hidden">
      <div className="gradient-line absolute top-0 left-0 right-0" />

      {/* Background orbs */}
      <div className="orb animate-aurora"
        style={{ width: 500, height: 500, background: 'hsl(217 100% 60% / 0.08)', top: '-10%', right: '-5%', filter: 'blur(120px)' }}
      />
      <div className="orb animate-aurora-2"
        style={{ width: 400, height: 400, background: 'hsl(195 100% 65% / 0.07)', bottom: '0%', left: '-8%', filter: 'blur(110px)' }}
      />

      {/* Decorative number */}
      <div
        className="absolute right-6 top-12 font-display font-extrabold select-none pointer-events-none leading-none"
        style={{ fontSize: 'clamp(8rem, 20vw, 18rem)', color: 'hsl(217 100% 60% / 0.04)', letterSpacing: '-0.05em' }}
      >
        01
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left — text */}
          <div>
            <motion.div className="section-kicker"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              01 — Quem Somos
            </motion.div>

            <motion.h2
              className="font-display text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
            >
              Uma equipe técnica focada em{' '}
              <span className="text-gradient-brand">resultados reais</span>
            </motion.h2>

            <motion.p
              className="text-white/55 text-lg leading-relaxed mb-6"
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
              className="text-white/55 text-lg leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.28, ease }}
            >
              Não somos uma agência genérica. Somos um time técnico que diagnostica,
              constrói e entrega — com comprometimento total com o resultado do cliente.
            </motion.p>

            {/* Value tags */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35, ease }}
            >
              {['Automação', 'IA Aplicada', 'Backend', 'Integrações', 'Analytics'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </motion.div>
          </div>

          {/* Right — stats */}
          <div className="glass rounded-3xl p-10 md:p-14">
            <div className="grid grid-cols-1 gap-10">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease }}
                >
                  <AnimatedStat value={s.value} suffix={s.suffix} label={s.label} />
                  {i < stats.length - 1 && (
                    <div className="gradient-line mt-10" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

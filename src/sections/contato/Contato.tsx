import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { PhoneChat } from '@/components/PhoneChat'

const ease = [0.22, 1, 0.36, 1] as const
const WA_LINK = 'https://wa.me/5511948643920?text=' + encodeURIComponent('Olá! Vim pelo site e gostaria de conversar sobre um projeto.')

export function Contato() {
  return (
    <section id="contato" className="relative py-32 overflow-hidden">
      <div className="gradient-line absolute top-0 left-0 right-0" />

      <div className="orb animate-aurora"
        style={{ width: 600, height: 400, background: 'hsl(217 100% 60% / 0.09)', top: '-10%', left: '20%', filter: 'blur(120px)' }}
      />
      <div className="orb animate-aurora-2"
        style={{ width: 400, height: 400, background: 'hsl(195 100% 65% / 0.08)', bottom: '0%', right: '10%', filter: 'blur(100px)' }}
      />

      {/* Decorative number */}
      <div
        className="absolute left-6 bottom-16 font-display font-extrabold select-none pointer-events-none leading-none"
        style={{ fontSize: 'clamp(8rem, 20vw, 18rem)', color: 'hsl(217 100% 60% / 0.04)', letterSpacing: '-0.05em' }}
      >
        05
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — CTA */}
          <div>
            <motion.div className="section-kicker"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              05 — Contato
            </motion.div>

            <motion.h2
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
            >
              Pronto para{' '}
              <span className="text-gradient-brand">transformar</span>{' '}
              sua operação?
            </motion.h2>

            <motion.p
              className="text-white/55 text-lg leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
            >
              Vamos identificar juntos onde a CloudySolutions pode gerar mais
              impacto no seu negócio. Agende um diagnóstico inicial sem compromisso.
            </motion.p>

            {/* WhatsApp CTA */}
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl font-semibold text-base transition-all duration-300"
              style={{ background: '#25D366', color: '#fff', boxShadow: '0 8px 32px rgba(37,211,102,0.35)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(37,211,102,0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </motion.a>
          </div>

          {/* Right — Phone mockup */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.2, ease }}
          >
            <PhoneChat />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Mail, Phone, Globe, Linkedin, ArrowRight, Send } from 'lucide-react'
import { contato } from '@/data'

const ease = [0.22, 1, 0.36, 1] as const

const contatoLinks = [
  { icon: Mail,     label: 'E-mail',   value: contato.email,    href: `mailto:${contato.email}` },
  { icon: Phone,    label: 'Telefone', value: contato.telefone, href: `tel:${contato.telefone.replace(/\D/g, '')}` },
  { icon: Globe,    label: 'Site',     value: contato.site,     href: '#' },
  { icon: Linkedin, label: 'LinkedIn', value: contato.linkedin, href: '#' },
]

export function Contato() {
  return (
    <section id="contato" className="relative py-32 overflow-hidden">
      <div className="gradient-line absolute top-0 left-0 right-0" />

      {/* Aurora bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, hsl(217 100% 60% / 0.12) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 100%, hsl(195 100% 65% / 0.1) 0%, transparent 70%)',
        }}
      />

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
        06
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — CTA */}
          <div>
            <motion.div className="section-kicker"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              06 — Contato
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

            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contatoLinks.map((c, i) => {
                const Icon = c.icon
                return (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    className="glass glass-hover rounded-2xl p-5 flex items-center gap-4 group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.09, ease }}
                    whileHover={{ y: -3 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue/25 to-brand-cyan/15 flex items-center justify-center flex-shrink-0 group-hover:from-brand-blue/40 group-hover:to-brand-cyan/30 transition-all duration-300">
                      <Icon size={16} className="text-brand-cyan" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-white/35 mb-1">{c.label}</div>
                      <div className="text-sm text-white/75 truncate group-hover:text-white transition-colors duration-200">{c.value}</div>
                    </div>
                    <ArrowRight size={14} className="text-white/20 group-hover:text-brand-cyan ml-auto flex-shrink-0 transition-all duration-200 -translate-x-1 group-hover:translate-x-0" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Right — Form */}
          <motion.div
            className="glass rounded-3xl p-8 md:p-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.15, ease }}
          >
            <div className="font-mono text-xs text-brand-cyan uppercase tracking-widest mb-6">
              Diagnóstico Inicial — Gratuito
            </div>
            <h3 className="font-display font-bold text-2xl mb-8">
              Vamos conversar sobre o seu negócio
            </h3>

            <form className="space-y-5" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2">Nome</label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-brand-cyan/50 focus:bg-white/[0.06] transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2">Empresa</label>
                  <input
                    type="text"
                    placeholder="Nome da empresa"
                    className="w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-brand-cyan/50 focus:bg-white/[0.06] transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2">E-mail</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-brand-cyan/50 focus:bg-white/[0.06] transition-all duration-200"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2">Como podemos ajudar?</label>
                <textarea
                  rows={4}
                  placeholder="Descreva seu desafio ou o que gostaria de automatizar..."
                  className="w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-brand-cyan/50 focus:bg-white/[0.06] transition-all duration-200 resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center text-sm">
                Enviar mensagem <Send size={14} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Expand, X } from 'lucide-react'
import { projetos } from '@/data'

const ease = [0.22, 1, 0.36, 1] as const

function Lightbox({ src, title, onClose }: { src: string; title: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        {/* Image container */}
        <motion.div
          className="relative z-10 max-w-6xl w-full"
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease }}
          onClick={e => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <span className="font-mono text-xs uppercase tracking-widest">Fechar</span>
            <X size={18} />
          </button>

          {/* Image */}
          <img
            src={src}
            alt={title}
            className="w-full rounded-2xl shadow-2xl"
            style={{ maxHeight: '85vh', objectFit: 'contain' }}
          />

          {/* Title */}
          <p className="text-center font-mono text-xs uppercase tracking-widest text-white/40 mt-4">{title}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export function Projetos() {
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null)

  return (
    <section id="projetos" className="relative py-32 overflow-hidden" style={{ background: '#eef2ff' }}>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/25 to-transparent" />
      <div className="orb" style={{ width: 500, height: 500, background: 'hsl(217 100% 60% / 0.05)', top: '10%', right: '-10%', filter: 'blur(140px)' }} />

      {/* Decorative number */}
      <div
        className="absolute right-6 top-12 font-display font-extrabold select-none pointer-events-none leading-none"
        style={{ fontSize: 'clamp(8rem, 20vw, 18rem)', color: 'hsl(217 100% 30% / 0.05)', letterSpacing: '-0.05em' }}
      >
        03
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.div
            className="section-kicker"
            style={{ color: 'hsl(217 100% 45%)' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            03 — Projetos
          </motion.div>

          <motion.h2
            className="font-display text-4xl md:text-5xl font-bold mb-4 text-slate-900"
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
              className="group rounded-2xl overflow-hidden bg-white"
              style={{ border: '1px solid #dde6ff', boxShadow: '0 4px 24px rgba(30,64,175,0.07)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.05 + i * 0.12, ease }}
              whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(30,64,175,0.13)' }}
            >
              {/* Image — clicável */}
              <div
                className="relative overflow-hidden cursor-zoom-in"
                style={{ height: 220 }}
                onClick={() => setLightbox({ src: p.image, title: p.title })}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-blue-100 text-blue-600 shadow-sm">
                    {p.category}
                  </span>
                </div>

                {/* Expand button — aparece no hover */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow-sm text-slate-700 text-xs font-medium">
                    <Expand size={12} />
                    Ver foto
                  </div>
                </div>

                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-blue to-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="font-display font-bold text-xl text-slate-900 mb-1">{p.title}</h3>
                <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-4">{p.client}</div>

                <p className="text-slate-600 text-sm leading-relaxed mb-5">{p.description}</p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.techs.map(t => (
                    <span key={t} className="font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-500">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Result */}
                <div className="flex items-center gap-2.5 pt-4 border-t border-slate-100">
                  <CheckCircle2 size={14} className="text-brand-cyan flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{p.result}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  )
}

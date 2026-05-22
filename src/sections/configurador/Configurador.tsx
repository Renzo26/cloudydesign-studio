import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Workflow, Bot, BarChart3, Code2, Plug, Building2, Building,
  Landmark, Clock, CalendarDays, Telescope, ArrowRight, Phone, MessageCircle, CheckCircle2,
} from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

/* ── Data ──────────────────────────────────────────────────── */
const steps = [
  {
    id: 'desafio',
    question: 'Qual é o maior desafio da sua empresa hoje?',
    hint: 'Escolha quantos quiser',
    multi: true,
    options: [
      { id: 'automacao',    icon: Workflow,   label: 'Processos manuais e repetitivos' },
      { id: 'ia',           icon: Bot,        label: 'Quero usar IA no meu negócio' },
      { id: 'dados',        icon: BarChart3,  label: 'Falta visibilidade sobre os dados' },
      { id: 'sistema',      icon: Code2,      label: 'Sistema legado ou desatualizado' },
      { id: 'integracao',   icon: Plug,       label: 'Ferramentas que não se conversam' },
    ],
  },
  {
    id: 'porte',
    question: 'Qual é o porte da sua empresa?',
    hint: 'Escolha uma opção',
    multi: false,
    options: [
      { id: 'pequena',  icon: Building2,  label: 'Pequena (até 20 pessoas)' },
      { id: 'media',    icon: Building,   label: 'Média (21 – 200 pessoas)' },
      { id: 'grande',   icon: Landmark,   label: 'Grande (200+ pessoas)' },
    ],
  },
  {
    id: 'prazo',
    question: 'Qual o prazo esperado para a solução?',
    hint: 'Escolha uma opção',
    multi: false,
    options: [
      { id: 'urgente',    icon: Clock,        label: 'Urgente — preciso logo' },
      { id: 'planejado',  icon: CalendarDays, label: 'Nos próximos 1 – 3 meses' },
      { id: 'futuro',     icon: Telescope,    label: 'Estou explorando possibilidades' },
    ],
  },
]

/* ── Result copy ───────────────────────────────────────────── */
function buildResult(answers: Record<string, string[]>) {
  const desafios = answers.desafio ?? []
  const prazo    = (answers.prazo ?? [])[0] ?? 'planejado'

  const labels: Record<string, string> = {
    automacao:  'automação de processos',
    ia:         'soluções com IA',
    dados:      'dashboards e analytics',
    sistema:    'sistemas customizados',
    integracao: 'integrações e APIs',
  }

  const desafioText = desafios
    .map(d => labels[d])
    .filter(Boolean)
    .join(', ') || 'transformação digital'

  const urgencia: Record<string, string> = {
    urgente:   'Com o prazo que você indicou, podemos montar um diagnóstico rápido e já ter um plano em mãos em até 48h.',
    planejado: 'Perfeito — com esse horizonte temos tempo para estruturar uma solução robusta e sem pressa.',
    futuro:    'Ótimo momento para explorar! Uma conversa inicial já clareia muito o caminho.',
  }

  return {
    titulo: `Detectamos oportunidade em ${desafioText}.`,
    texto: urgencia[prazo],
    whatsMsg: encodeURIComponent(
      `Olá! Acabei de preencher o configurador do site da CloudySolutions e tenho interesse em ${desafioText}. Podemos conversar?`
    ),
  }
}

/* ── Option chip ───────────────────────────────────────────── */
function OptionChip({
  icon: Icon, label, selected, onClick,
}: { icon: React.ElementType; label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`
        relative group flex items-center gap-3 px-5 py-4 rounded-2xl border text-left
        transition-all duration-300 cursor-pointer
        ${selected
          ? 'border-brand-blue/50 bg-brand-blue/8 text-slate-900'
          : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-brand-blue/30 hover:bg-blue-50/60 hover:text-slate-800'
        }
      `}
    >
      {selected && (
        <motion.div
          layoutId={undefined}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-3 right-3"
        >
          <CheckCircle2 size={14} className="text-brand-cyan" />
        </motion.div>
      )}
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
        selected ? 'bg-brand-blue/15' : 'bg-slate-100 group-hover:bg-blue-50'
      }`}>
        <Icon size={17} className={selected ? 'text-brand-blue' : 'text-slate-400 group-hover:text-brand-blue/60'} />
      </div>
      <span className="font-medium text-sm leading-snug">{label}</span>
    </button>
  )
}

/* ── Progress bar ──────────────────────────────────────────── */
function ProgressBar({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex gap-2 mb-10">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="h-1 flex-1 rounded-full overflow-hidden bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan"
            initial={{ width: 0 }}
            animate={{ width: i <= step ? '100%' : '0%' }}
            transition={{ duration: 0.45, ease }}
          />
        </div>
      ))}
    </div>
  )
}

/* ── Result card ───────────────────────────────────────────── */
function ResultCard({
  answers, onReset,
}: { answers: Record<string, string[]>; onReset: () => void }) {
  const { titulo, texto, whatsMsg } = buildResult(answers)
  const phone = '5511948643920'

  return (
    <motion.div
      key="result"
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      transition={{ duration: 0.6, ease }}
      className="flex flex-col items-center text-center"
    >
      {/* Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="w-20 h-20 rounded-3xl bg-gradient-to-br from-brand-blue/40 to-brand-cyan/30 flex items-center justify-center mb-8 border border-brand-cyan/20"
      >
        <CheckCircle2 size={36} className="text-brand-cyan" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease }}
        className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand-cyan/70 mb-4"
      >
        Análise concluída
      </motion.p>

      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38, duration: 0.6, ease }}
        className="font-display font-bold text-2xl md:text-3xl text-slate-900 mb-4 max-w-lg"
      >
        {titulo}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.46, duration: 0.6, ease }}
        className="text-slate-600 text-base leading-relaxed max-w-md mb-10"
      >
        {texto} Vamos conversar sem compromisso e entender se faz sentido avançar juntos.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.54, duration: 0.6, ease }}
        className="flex flex-col sm:flex-row gap-4 w-full max-w-sm"
      >
        <a
          href="#contato"
          className="btn-primary flex-1 justify-center gap-2"
        >
          <Phone size={16} />
          Agendar call grátis
        </a>
        <a
          href={`https://wa.me/${phone}?text=${whatsMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm
            bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366]
            hover:bg-[#25D366]/25 hover:border-[#25D366]/50 transition-all duration-300"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        onClick={onReset}
        className="mt-8 font-mono text-[11px] uppercase tracking-widest text-slate-300 hover:text-slate-500 transition-colors"
      >
        Recomeçar
      </motion.button>
    </motion.div>
  )
}

/* ── Main component ────────────────────────────────────────── */
export function Configurador() {
  const [stepIdx, setStepIdx] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [done, setDone] = useState(false)
  const [direction, setDirection] = useState(1)

  const step = steps[stepIdx]

  function toggle(optionId: string) {
    setAnswers(prev => {
      const current = prev[step.id] ?? []
      if (step.multi) {
        return {
          ...prev,
          [step.id]: current.includes(optionId)
            ? current.filter(x => x !== optionId)
            : [...current, optionId],
        }
      }
      return { ...prev, [step.id]: [optionId] }
    })
  }

  function next() {
    if (stepIdx < steps.length - 1) {
      setDirection(1)
      setStepIdx(i => i + 1)
    } else {
      setDone(true)
    }
  }

  function back() {
    if (stepIdx > 0) {
      setDirection(-1)
      setStepIdx(i => i - 1)
    }
  }

  function reset() {
    setAnswers({})
    setStepIdx(0)
    setDone(false)
    setDirection(1)
  }

  const selected = answers[step?.id] ?? []
  const canNext = selected.length > 0

  const variants = {
    enter:  (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit:   (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  }

  return (
    <section id="configurador" className="relative py-32 overflow-hidden" style={{ background: '#f8faff' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/25 to-transparent" />

      {/* Faint orbs */}
      <div className="orb" style={{ width: 500, height: 500, background: 'hsl(217 100% 60% / 0.05)', top: '0%', right: '-10%', filter: 'blur(140px)' }} />
      <div className="orb" style={{ width: 400, height: 400, background: 'hsl(195 100% 65% / 0.04)', bottom: '5%', left: '-8%', filter: 'blur(130px)' }} />

      {/* Decorative number */}
      <div
        className="absolute left-6 top-12 font-display font-extrabold select-none pointer-events-none leading-none"
        style={{ fontSize: 'clamp(8rem, 20vw, 18rem)', color: 'hsl(217 100% 30% / 0.04)', letterSpacing: '-0.05em' }}
      >
        04
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div className="section-kicker justify-center" style={{ color: 'hsl(217 100% 45%)' }}
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            04 — Configurador
          </motion.div>

          <motion.h2
            className="font-display text-4xl md:text-5xl font-bold mb-4 text-slate-900"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            Qual solução faz sentido{' '}
            <span className="text-gradient-brand">para você?</span>
          </motion.h2>

          <motion.p
            className="text-slate-500 text-lg"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            Responda 3 perguntas e receba uma recomendação personalizada.
          </motion.p>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="rounded-3xl p-8 md:p-14 min-h-[480px] flex flex-col"
          style={{ background: 'white', border: '1px solid #dde6ff', boxShadow: '0 8px 40px rgba(30,64,175,0.08)' }}
        >
          {!done && <ProgressBar step={stepIdx} total={steps.length} />}

          <div className="flex-1 flex flex-col">
            <AnimatePresence mode="wait" custom={direction}>
              {done ? (
                <ResultCard key="result" answers={answers} onReset={reset} />
              ) : (
                <motion.div
                  key={stepIdx}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease }}
                  className="flex flex-col flex-1"
                >
                  {/* Question */}
                  <div className="mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-brand-blue/70">
                      Passo {stepIdx + 1} de {steps.length}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-slate-900 mb-1">
                    {step.question}
                  </h3>
                  <p className="font-mono text-[11px] text-slate-400 uppercase tracking-widest mb-8">
                    {step.hint}
                  </p>

                  {/* Options */}
                  <div className={`grid gap-3 mb-auto ${step.options.length > 3 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                    {step.options.map(opt => (
                      <OptionChip
                        key={opt.id}
                        icon={opt.icon}
                        label={opt.label}
                        selected={selected.includes(opt.id)}
                        onClick={() => toggle(opt.id)}
                      />
                    ))}
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-10">
                    <button
                      onClick={back}
                      className={`font-mono text-[11px] uppercase tracking-widest transition-colors ${
                        stepIdx === 0 ? 'text-slate-200 cursor-default' : 'text-slate-400 hover:text-slate-700'
                      }`}
                      disabled={stepIdx === 0}
                    >
                      ← Voltar
                    </button>

                    <button
                      onClick={next}
                      disabled={!canNext}
                      className={`flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                        canNext
                          ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-lg shadow-brand-blue/25 hover:shadow-brand-blue/40 hover:scale-[1.02]'
                          : 'bg-slate-100 text-slate-300 cursor-not-allowed'
                      }`}
                    >
                      {stepIdx < steps.length - 1 ? 'Próximo' : 'Ver resultado'}
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

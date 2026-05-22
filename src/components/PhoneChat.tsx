import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCheck } from 'lucide-react'

type Sender = 'client' | 'bot'

interface Msg { id: number; from: Sender; text: string }

const MESSAGES: Msg[] = [
  { id: 1, from: 'client', text: 'Olá gostaria de fazer um agendamento para amanhã às 14' },
  { id: 2, from: 'bot',    text: 'Olá, seja bem vindo/a! 👋 Vou fazer seu agendamento, qual seu nome completo?' },
  { id: 3, from: 'client', text: 'Arthur Renzo' },
  { id: 4, from: 'bot',    text: 'Seu agendamento está feito para amanhã às 14 ✅ Obrigado pela preferência!' },
]

// [typingAt, messageAt] in ms from start
const SCHEDULE = [
  [700,  2100],
  [2800, 4700],
  [5300, 6400],
  [7100, 9000],
] as const

const LOOP_AT = 13000

function TypingDots({ green }: { green?: boolean }) {
  return (
    <div className="flex items-center gap-1 px-3 py-2.5">
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${green ? 'bg-white/80' : 'bg-white/50'}`}
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
          transition={{ duration: 0.75, delay: i * 0.15, repeat: Infinity }}
        />
      ))}
    </div>
  )
}

export function PhoneChat() {
  const [msgs, setMsgs]     = useState<Msg[]>([])
  const [typing, setTyping] = useState<Sender | null>(null)
  const [started, setStarted] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const wrapRef   = useRef<HTMLDivElement>(null)
  const timers    = useRef<ReturnType<typeof setTimeout>[]>([])

  function scrollBottom() {
    requestAnimationFrame(() => {
      if (scrollRef.current)
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    })
  }

  function run() {
    setMsgs([])
    setTyping(null)
    timers.current.forEach(clearTimeout)
    timers.current = []

    SCHEDULE.forEach(([typingAt, messageAt], i) => {
      const msg = MESSAGES[i]
      timers.current.push(setTimeout(() => { setTyping(msg.from); scrollBottom() }, typingAt))
      timers.current.push(setTimeout(() => {
        setTyping(null)
        setMsgs(prev => [...prev, msg])
        scrollBottom()
      }, messageAt))
    })

    timers.current.push(setTimeout(run, LOOP_AT))
  }

  // Start when scrolled into view (once)
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true)
        run()
        obs.disconnect()
      }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => { obs.disconnect(); timers.current.forEach(clearTimeout) }
  }, []) // eslint-disable-line

  useEffect(scrollBottom, [msgs, typing])

  return (
    <div ref={wrapRef} className="flex flex-col items-center">
      {/* Phone shell */}
      <div
        className="relative rounded-[40px] overflow-hidden shadow-2xl shadow-black/70"
        style={{
          width: 270,
          border: '6px solid rgba(255,255,255,0.08)',
          background: '#060f1e',
        }}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 pb-1 bg-[#0b1a30]">
          <span className="text-white text-[11px] font-semibold tracking-tight">16:34</span>
          {/* Notch */}
          <div className="w-14 h-3.5 bg-black rounded-full" />
          <div className="flex items-center gap-1.5">
            {/* Signal bars */}
            <div className="flex items-end gap-px h-3">
              {[30, 50, 70, 100].map((h, i) => (
                <div key={i} className="w-[3px] rounded-sm bg-white" style={{ height: `${h}%` }} />
              ))}
            </div>
            {/* Battery */}
            <div className="flex items-center ml-0.5">
              <div className="w-5 h-2.5 rounded-[3px] border border-white/50 relative flex items-center pl-0.5">
                <div className="h-1.5 w-[70%] rounded-sm bg-white" />
              </div>
              <div className="w-[3px] h-1.5 rounded-r-sm bg-white/50 ml-px" />
            </div>
          </div>
        </div>

        {/* Chat header */}
        <div className="flex items-center gap-2.5 px-4 py-2.5 bg-[#0b1a30] border-b border-white/[0.06]">
          <div className="relative flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center text-white font-bold text-xs">
              C
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-[#0b1a30]" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1">
              <span className="text-white text-[12px] font-semibold truncate">CloudySolutions</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="#00d4ff" className="flex-shrink-0">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <span className="text-[#25D366] text-[10px]">online</span>
          </div>
        </div>

        {/* Messages area */}
        <div
          ref={scrollRef}
          className="flex flex-col gap-2 px-3 py-4 overflow-y-auto"
          style={{ height: 310, scrollbarWidth: 'none', background: '#071120' }}
        >
          <AnimatePresence initial={false}>
            {msgs.map(msg => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.28 }}
                className={`flex ${msg.from === 'client' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[78%] px-3 py-2 text-[11.5px] leading-relaxed ${
                    msg.from === 'client'
                      ? 'bg-[#25D366] text-white rounded-2xl rounded-br-sm'
                      : 'bg-[#162236] text-white/90 rounded-2xl rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                  {msg.from === 'client' && (
                    <CheckCheck size={10} className="inline ml-1.5 opacity-70 -translate-y-px" />
                  )}
                </div>
              </motion.div>
            ))}

            {typing && (
              <motion.div
                key="typing"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.22 }}
                className={`flex ${typing === 'client' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`rounded-2xl ${
                  typing === 'client'
                    ? 'bg-[#25D366]/80 rounded-br-sm'
                    : 'bg-[#162236] rounded-bl-sm'
                }`}>
                  <TypingDots green={typing === 'client'} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Input bar */}
        <div className="flex items-center gap-2 px-3 py-2.5 bg-[#0b1a30] border-t border-white/[0.06]">
          <div className="flex-1 bg-white/[0.07] rounded-full px-3.5 py-1.5">
            <span className="text-white/25 text-[11px]">Mensagem</span>
          </div>
          <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
              <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
            </svg>
          </div>
        </div>

        {/* Home indicator */}
        <div className="flex justify-center py-2 bg-[#0b1a30]">
          <div className="w-20 h-1 rounded-full bg-white/15" />
        </div>
      </div>

      {/* Caption */}
      <div className="flex items-center gap-1.5 mt-5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
        <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">
          Atendimento direto pelo WhatsApp
        </span>
      </div>
    </div>
  )
}

import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          deep:  'hsl(224 70% 4%)',
          navy:  'hsl(224 64% 8%)',
          blue:  'hsl(217 100% 60%)',
          cyan:  'hsl(195 100% 65%)',
          ice:   'hsl(210 100% 88%)',
          muted: 'hsl(215 25% 55%)',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans:    ['DM Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        aurora:        { '0%,100%': { transform: 'translate(0,0) rotate(0deg) scale(1)' }, '25%': { transform: 'translate(5%,-7%) rotate(90deg) scale(1.08)' }, '50%': { transform: 'translate(-4%,5%) rotate(180deg) scale(0.93)' }, '75%': { transform: 'translate(7%,3%) rotate(270deg) scale(1.05)' } },
        'aurora-2':    { '0%,100%': { transform: 'translate(0,0) rotate(0deg) scale(1)' }, '33%': { transform: 'translate(-6%,4%) rotate(120deg) scale(1.1)' }, '66%': { transform: 'translate(4%,-6%) rotate(240deg) scale(0.92)' } },
        float:         { '0%,100%': { transform: 'translateY(0) scale(1)' }, '50%': { transform: 'translateY(-18px) scale(1.02)' } },
        shimmer:       { '0%': { backgroundPosition: '-200% center' }, '100%': { backgroundPosition: '200% center' } },
        'pulse-glow':  { '0%,100%': { opacity: '0.4' }, '50%': { opacity: '0.75' } },
        'bounce-subtle': { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(7px)' } },
        'spin-slow':   { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        aurora:          'aurora 28s ease-in-out infinite',
        'aurora-2':      'aurora-2 22s ease-in-out infinite',
        float:           'float 9s ease-in-out infinite',
        shimmer:         'shimmer 2.5s linear infinite',
        'pulse-glow':    'pulse-glow 3s ease-in-out infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'spin-slow':     'spin-slow 20s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config

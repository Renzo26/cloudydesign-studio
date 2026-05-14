import { Logo } from './Logo'
import { contato } from '@/data'
import { Mail, Phone } from 'lucide-react'

const navLinks = ['Sobre', 'Serviços', 'Projetos', 'Stack', 'Diferenciais', 'Contato']

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] pt-16 pb-10 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, hsl(217 100% 60% / 0.06) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Logo size={36} className="mb-4" />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Automação, IA e sistemas customizados para empresas que querem operar melhor.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-5">Navegação</div>
            <ul className="flex flex-col gap-3">
              {navLinks.map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-5">Contato</div>
            <div className="flex flex-col gap-3">
              <a href={`mailto:${contato.email}`} className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors duration-200">
                <Mail size={13} className="text-brand-cyan" />
                {contato.email}
              </a>
              <a href={`tel:${contato.telefone.replace(/\D/g, '')}`} className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors duration-200">
                <Phone size={13} className="text-brand-cyan" />
                {contato.telefone}
              </a>
            </div>
          </div>
        </div>

        <div className="gradient-line mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-white/25 uppercase tracking-widest">
            © {new Date().getFullYear()} CloudySolutions. Todos os direitos reservados.
          </p>
          <p className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
            Built with React · Three.js · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}

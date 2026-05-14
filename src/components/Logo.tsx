interface LogoProps {
  size?: number
  withText?: boolean
  className?: string
}

export function Logo({ size = 32, withText = true, className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width={size} height={size * 0.75} viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lg3d" x1="0" y1="0" x2="40" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="hsl(195 100% 65%)" />
            <stop offset="100%" stopColor="hsl(217 100% 60%)" />
          </linearGradient>
        </defs>
        <path
          d="M32 20a6 6 0 000-12 6 6 0 00-11.6-2A5 5 0 008 11a5 5 0 000 10h24z"
          fill="url(#lg3d)"
          opacity="0.95"
        />
        <circle cx="15" cy="26" r="2.5" fill="url(#lg3d)" opacity="0.7" />
      </svg>
      {withText && (
        <span className="font-display font-bold text-white tracking-tight" style={{ fontSize: size * 0.5 }}>
          Cloudy<span className="text-gradient-brand">Solutions</span>
        </span>
      )}
    </div>
  )
}

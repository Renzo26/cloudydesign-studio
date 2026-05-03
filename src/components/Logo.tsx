export const Logo = ({ size = 48, withText = true }: { size?: number; withText?: boolean }) => (
  <div className="flex items-center gap-3">
    <svg width={size} height={size * 0.8} viewBox="0 0 64 52" fill="none">
      <defs>
        <linearGradient id="cloudGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(195 100% 70%)" />
          <stop offset="100%" stopColor="hsl(217 100% 55%)" />
        </linearGradient>
      </defs>
      <path
        d="M48 32c0-8.8-7.2-16-16-16-7 0-13 4.5-15.2 10.7C11.6 27.5 7 32.2 7 38c0 6.1 4.9 11 11 11h28c5.5 0 10-4.5 10-10 0-4.5-3-8.4-7-9.7"
        stroke="url(#cloudGrad)"
        strokeWidth="3.5"
        strokeLinejoin="round"
        fill="hsl(224 64% 9% / 0.4)"
      />
    </svg>
    {withText && (
      <div className="font-display font-semibold leading-none" style={{ fontSize: size * 0.42 }}>
        <div>Cloudy</div>
        <div>Solutions</div>
      </div>
    )}
  </div>
);

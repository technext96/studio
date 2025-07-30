import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center group" prefetch={false}>
      <svg width="160" height="40" viewBox="0 0 160 40" className="h-7 w-auto">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'hsl(225, 100%, 30%)', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: 'hsl(190, 100%, 45%)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(180, 80%, 60%)', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        {/* Tech */}
        <text
          x="0"
          y="30"
          fontFamily="var(--font-space-grotesk), sans-serif"
          fontSize="30"
          fontWeight="bold"
          fill="hsl(var(--foreground))"
          className="transition-opacity duration-300 group-hover:opacity-80"
        >
          Tech
        </text>
        
        {/* N */}
        <text
          x="68"
          y="30"
          fontFamily="var(--font-space-grotesk), sans-serif"
          fontSize="30"
          fontWeight="bold"
          fill="url(#logoGradient)"
          className="transition-opacity duration-300 group-hover:opacity-80"
        >
          N
        </text>
        
        {/* Little circuit on N */}
        <circle cx="84" cy="8" r="2" fill="hsl(190, 100%, 45%)" />
        <circle cx="90" cy="8" r="1.5" fill="hsl(190, 100%, 45%)" />
        <line x1="85" y1="8" x2="89" y2="8" stroke="hsl(190, 100%, 45%)" strokeWidth="1" />

        {/* ext */}
        <text
          x="90"
          y="30"
          fontFamily="var(--font-space-grotesk), sans-serif"
          fontSize="30"
          fontWeight="bold"
          fill="url(#logoGradient)"
          className="transition-opacity duration-300 group-hover:opacity-80"
        >
          ext
        </text>

        {/* Particles */}
        <circle cx="88" cy="18" r="0.8" fill="url(#logoGradient)" opacity="0.8" />
        <circle cx="95" cy="14" r="0.6" fill="url(#logoGradient)" opacity="0.7" />
        <circle cx="103" cy="12" r="0.8" fill="url(#logoGradient)" opacity="0.9" />
        <circle cx="112" cy="15" r="0.7" fill="url(#logoGradient)" opacity="0.8" />
        <circle cx="120" cy="18" r="0.6" fill="url(#logoGradient)" opacity="0.7" />
        <circle cx="128" cy="22" r="0.8" fill="url(#logoGradient)" opacity="0.9" />
        <circle cx="135" cy="25" r="0.7" fill="url(#logoGradient)" opacity="0.8" />

        {/* Arrow on t */}
        <path d="M149 18 l-3 -3 M149 18 l-3 3" stroke="hsl(180, 80%, 60%)" strokeWidth="2" fill="none" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
         <line x1="149" y1="18" x2="149" y2="8" stroke="hsl(180, 80%, 60%)" strokeWidth="2" className="transition-transform duration-300 group-hover:-translate-y-1" />
      </svg>
    </Link>
  );
};

export default Logo;


const Logo = () => {
  return (
    <div className="flex items-center group">
      <svg
        viewBox="0 0 130 32"
        className="h-7 w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="-100%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))">
               <animate attributeName="stop-color" values="hsl(var(--primary));hsl(190 95% 40%);hsl(var(--primary))" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="hsl(190 95% 40%)">
               <animate attributeName="stop-color" values="hsl(190 95% 40%);hsl(var(--primary));hsl(190 95% 40%)" dur="4s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        <text
          x="0"
          y="24"
          fontFamily="var(--font-space-grotesk), sans-serif"
          fontSize="26"
          fontWeight="bold"
          fill="hsl(var(--foreground))"
        >
          Tech
        </text>
        <text
          x="60"
          y="24"
          fontFamily="var(--font-space-grotesk), sans-serif"
          fontSize="26"
          fontWeight="bold"
          fill="url(#logoGradient)"
        >
          Next
        </text>
         <path d="M64 5 L64 15 L74 5 L74 15" stroke="url(#logoGradient)" strokeWidth="2.5" />

      </svg>
    </div>
  );
};

export default Logo;

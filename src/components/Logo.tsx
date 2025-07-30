
const Logo = () => {
  return (
    <div className="flex items-center group">
      <svg
        width="130"
        height="32"
        viewBox="0 0 130 32"
        className="h-8 w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(190 95% 40%)" />
          </linearGradient>
        </defs>
        <text
          x="0"
          y="24"
          fontFamily="var(--font-space-grotesk), sans-serif"
          fontSize="28"
          fontWeight="bold"
          fill="hsl(var(--foreground))"
        >
          Tech
        </text>
        <text
          x="64"
          y="24"
          fontFamily="var(--font-space-grotesk), sans-serif"
          fontSize="28"
          fontWeight="bold"
          fill="url(#logoGradient)"
        >
          Next
        </text>
         <path d="M68 5 L68 15 L78 5 L78 15" stroke="url(#logoGradient)" strokeWidth="2.5" />

      </svg>
    </div>
  );
};

export default Logo;

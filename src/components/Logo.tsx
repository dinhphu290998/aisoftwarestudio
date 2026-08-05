export function Logo() {
  return (
    <div className="flex items-center gap-4">
      {/* Abstract 'A' SVG Logo matching the uploaded style */}
      <svg
        width="48"
        height="48"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_15px_rgba(0,210,255,0.5)]"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f2fe" />
            <stop offset="100%" stopColor="#4facfe" />
          </linearGradient>
          <linearGradient id="logo-gradient-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00c6fb" />
            <stop offset="100%" stopColor="#005bea" />
          </linearGradient>
        </defs>

        {/* Outer A shape */}
        <path
          d="M50 15 L15 85 H25 L50 35 L75 85 H85 L50 15Z"
          fill="url(#logo-gradient-dark)"
        />
        
        {/* Inner circuit lines */}
        <path
          d="M50 35 L35 65 H65 L50 35Z"
          fill="none"
          stroke="url(#logo-gradient)"
          strokeWidth="3"
        />
        
        {/* Connection paths */}
        <path d="M50 15 L40 45 L25 60" fill="none" stroke="url(#logo-gradient)" strokeWidth="2.5" />
        <path d="M40 45 L65 55 L75 85" fill="none" stroke="url(#logo-gradient)" strokeWidth="2.5" />
        <path d="M35 65 Q50 75 65 65" fill="none" stroke="url(#logo-gradient)" strokeWidth="2.5" />

        {/* Nodes (Dots) */}
        <circle cx="50" cy="15" r="4" fill="#00f2fe" />
        <circle cx="40" cy="45" r="3.5" fill="#00f2fe" />
        <circle cx="25" cy="60" r="3.5" fill="#00f2fe" />
        <circle cx="65" cy="55" r="3.5" fill="#00f2fe" />
        <circle cx="35" cy="65" r="3.5" fill="#00f2fe" />
        <circle cx="65" cy="65" r="3.5" fill="#00f2fe" />
      </svg>

      {/* Text Group */}
      <div className="flex items-center gap-2">
        <span className="text-4xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-[#4facfe] to-[#005bea]">
          AI
        </span>
        <div className="flex flex-col justify-center leading-[1.1]">
          <span className="text-[13px] font-bold tracking-[0.2em] text-white">SOFTWARE</span>
          <span className="text-[14px] font-light tracking-[0.2em] text-white">STUDIO</span>
        </div>
      </div>
    </div>
  );
}

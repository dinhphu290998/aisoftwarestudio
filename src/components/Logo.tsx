export function Logo() {
  return (
    <div className="flex items-center gap-4">
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

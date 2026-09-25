"use client";

import { useEffect, useRef } from "react";

export function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;
    
    // Lerp factor for smoothness (0.15 provides a nice, buttery trail)
    const ease = 0.15;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      
      // Snapping immediately on first movement to avoid the ball flying in from the corner
      if (currentX === -1000) {
        currentX = targetX;
        currentY = targetY;
      }
    };

    const animate = () => {
      // Linear interpolation
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      if (containerRef.current) {
        // Update CSS variables directly to avoid React state re-renders (much faster)
        containerRef.current.style.setProperty('--mouse-x', `${currentX}px`);
        containerRef.current.style.setProperty('--mouse-y', `${currentY}px`);
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#050505]"
    >
      
      {/* Base Grid (Faint) */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Highlighted Grid (Revealed by cursor via mask) */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(129, 140, 248, 0.8) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(129, 140, 248, 0.8) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          WebkitMaskImage: `radial-gradient(400px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), black, transparent)`,
          maskImage: `radial-gradient(400px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), black, transparent)`,
          filter: 'drop-shadow(0 0 6px rgba(99, 102, 241, 0.8)) drop-shadow(0 0 2px rgba(255, 255, 255, 0.5))'
        }}
      />
      
      {/* Glowing Ball at Cursor */}
      <div 
        className="absolute top-0 left-0 rounded-full pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          transform: 'translate(calc(var(--mouse-x, -1000px) - 250px), calc(var(--mouse-y, -1000px) - 250px))',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.7) 0%, rgba(168, 85, 247, 0.4) 25%, transparent 60%)',
          filter: 'blur(40px)',
          mixBlendMode: 'screen',
          willChange: 'transform' // Hardware acceleration
        }}
      />
      
      {/* Additional ambient blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[150px]" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-emerald-600/5 blur-[150px]" />
      
      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-80" />
    </div>
  );
}

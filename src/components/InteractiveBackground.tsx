"use client";

import { useEffect, useRef, useState } from "react";

export function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position from -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      
      setMousePosition({ 
        x: e.clientX, 
        y: e.clientY 
      });

      if (containerRef.current) {
        // Translate for parallax
        containerRef.current.style.setProperty('--mouse-x', `${-x * 30}px`);
        containerRef.current.style.setProperty('--mouse-y', `${-y * 30}px`);
        // Rotate for 3D tilt
        containerRef.current.style.setProperty('--rotate-y', `${x * 10}deg`);
        containerRef.current.style.setProperty('--rotate-x', `${-y * 10}deg`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#050505]"
      style={{ perspective: "1000px" }}
    >
      {/* 3D Moving Grid */}
      <div 
        className="absolute inset-[-50%] w-[200%] h-[200%] opacity-30 transition-transform duration-100 ease-out"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transformStyle: "preserve-3d",
          transform: `
            translate(var(--mouse-x, 0), var(--mouse-y, 0)) 
            rotateX(var(--rotate-x, 0)) 
            rotateY(var(--rotate-y, 0))
          `
        }}
      >
        {/* Glow directly on the grid surface following mouse */}
        <div 
           className="absolute inset-0 transition-opacity duration-150"
           style={{
             background: `radial-gradient(800px circle at calc(25% + ${mousePosition.x}px) calc(25% + ${mousePosition.y}px), rgba(99, 102, 241, 0.25), transparent 60%)`,
             transform: 'translateZ(1px)' // Keeps it slightly above grid
           }}
        />
      </div>
      
      {/* Additional ambient blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[150px]" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-emerald-600/5 blur-[150px]" />
      
      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-80" />
    </div>
  );
}

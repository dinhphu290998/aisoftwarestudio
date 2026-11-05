"use client";

import React, { useEffect, useRef } from "react";

export function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run mouse cursor spotlight on devices with fine pointer (mouse)
    const hasPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasPointer) return;

    let rafId: number | null = null;
    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;
    let isMoving = false;
    let idleTimeout: NodeJS.Timeout | null = null;

    const ease = 0.18;

    const updatePosition = () => {
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      
      currentX += dx * ease;
      currentY += dy * ease;

      if (containerRef.current) {
        containerRef.current.style.setProperty("--mouse-x", `${Math.round(currentX)}px`);
        containerRef.current.style.setProperty("--mouse-y", `${Math.round(currentY)}px`);
      }

      // If close enough to target, stop animating to save CPU/GPU cycles
      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        rafId = requestAnimationFrame(updatePosition);
      } else {
        rafId = null;
        isMoving = false;
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (currentX === -1000) {
        currentX = targetX;
        currentY = targetY;
      }

      if (!isMoving) {
        isMoving = true;
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(updatePosition);
      }

      if (idleTimeout) clearTimeout(idleTimeout);
      idleTimeout = setTimeout(() => {
        isMoving = false;
      }, 150);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (rafId) cancelAnimationFrame(rafId);
      if (idleTimeout) clearTimeout(idleTimeout);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#050505] select-none"
      aria-hidden="true"
    >
      {/* Base Cyber Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />
      
      {/* High-speed Cursor Spotlight Glow (GPU accelerated without heavy filter) */}
      <div 
        className="hidden md:block absolute top-0 left-0 rounded-full pointer-events-none will-change-transform"
        style={{
          width: "480px",
          height: "480px",
          transform: "translate3d(calc(var(--mouse-x, -1000px) - 240px), calc(var(--mouse-y, -1000px) - 240px), 0)",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.28) 0%, rgba(168, 85, 247, 0.15) 35%, transparent 70%)",
          mixBlendMode: "screen",
        }}
      />
      
      {/* Ambient Atmospheric Orbs (smooth CSS compositing) */}
      <div 
        className="absolute top-[-15%] left-[-10%] w-[550px] h-[550px] rounded-full bg-blue-600/[0.08] blur-[120px] will-change-transform" 
      />
      <div 
        className="absolute bottom-[-15%] right-[-10%] w-[550px] h-[550px] rounded-full bg-purple-600/[0.08] blur-[120px] will-change-transform" 
      />
      <div 
        className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-emerald-600/[0.04] blur-[140px] will-change-transform" 
      />
      
      {/* Edge Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050505_90%)] opacity-90" />
    </div>
  );
}

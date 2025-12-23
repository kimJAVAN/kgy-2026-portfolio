"use client";

import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('a') || target.closest('.cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500 transition-transform duration-100 ease-out"
        style={{ 
          left: `${mousePos.x}px`, 
          top: `${mousePos.y}px` 
        }}
      />
      <div
        className={`pointer-events-none fixed z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-green-500/50 transition-all duration-300 ease-out ${
          isHovering ? 'h-14 w-14 bg-green-500/15 scale-110' : 'h-9 w-9 scale-100'
        }`}
        style={{ 
          left: `${mousePos.x}px`, 
          top: `${mousePos.y}px`,
          transition: 'left 0.1s ease-out, top 0.1s ease-out, width 0.3s, height 0.3s, background-color 0.3s, transform 0.3s'
        }}
      />
    </>
  );
};
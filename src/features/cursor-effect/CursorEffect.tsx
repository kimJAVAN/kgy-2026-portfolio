'use client';

import { useEffect, useState } from 'react';

export const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Add trail
      const newTrail = { x: e.clientX, y: e.clientY, id: Date.now() };
      setTrails((prev) => [...prev.slice(-10), newTrail]);

      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null
      );
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Cursor Trail */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="fixed pointer-events-none z-[9999] mix-blend-screen"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            width: '8px',
            height: '8px',
            background: `rgba(16, 185, 129, ${0.8 - index * 0.08})`,
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.3s ease-out',
            opacity: 1 - index * 0.1,
          }}
        />
      ))}

      {/* Main Cursor */}
      <div
        className="fixed pointer-events-none z-[10000] mix-blend-difference transition-transform duration-150"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div
          className={`w-8 h-8 border-2 border-emerald-400 rounded-full transition-all duration-200 ${
            isPointer ? 'bg-emerald-400/20' : 'bg-transparent'
          }`}
        />
      </div>

      {/* Inner Cursor Dot */}
      <div
        className="fixed pointer-events-none z-[10000] mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-1 h-1 bg-emerald-400 rounded-full" />
      </div>
    </>
  );
};
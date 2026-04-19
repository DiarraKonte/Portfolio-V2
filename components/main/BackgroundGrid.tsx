'use client';
import React, { useEffect, useState } from 'react';

const BackgroundGrid = () => {
  const [mouse, setMouse] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0" style={{ background: '#0d1117' }} />

      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #30363d 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.5,
        }}
      />

      {/* Mouse-reveal blue grid */}
      <div
        className="absolute inset-0 transition-opacity duration-200"
        style={{
          backgroundImage: `
            linear-gradient(#58a6ff15 1px, transparent 1px),
            linear-gradient(90deg, #58a6ff15 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px',
          maskImage: `radial-gradient(280px circle at ${mouse.x}px ${mouse.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(280px circle at ${mouse.x}px ${mouse.y}px, black, transparent)`,
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, #0d1117 100%)',
        }}
      />
    </div>
  );
};

export default BackgroundGrid;

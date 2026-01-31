'use client';

import React, { useEffect, useState } from 'react';

const BackgroundGrid = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Fond de base Slate-950 */}
            <div className="absolute inset-0 bg-slate-950" />

            {/* Grille de base (Très discrète, presque invisible) */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Spotlight Coloré (Lueur diffuse) */}
            <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.03), transparent 60%)`
                }}
            />

            {/* Grille Révélée (Plus nette au survol) */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(99, 102, 241, 0.2) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(99, 102, 241, 0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                    maskImage: `radial-gradient(250px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
                    WebkitMaskImage: `radial-gradient(250px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
                }}
            />

            {/* Vignette pour adoucir les bords de l'écran */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/80 pointer-events-none" />
        </div>
    );
};

export default BackgroundGrid;

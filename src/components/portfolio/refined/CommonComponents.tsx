import React from 'react';

export const FloatingCube = ({ className = "", delay = 0 }) => (
    <div
        className={`absolute w-8 h-8 border border-purple-400/30 transform rotate-45 animate-pulse ${className}`}
        style={{
            animationDelay: `${delay}ms`,
            background: 'linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(168, 85, 247, 0.1))'
        }}
    />
);

export const TechGrid = ({ className = "" }) => (
    <div className={`absolute ${className}`}>
        <div className="grid grid-cols-3 gap-2 opacity-20">
            {Array.from({ length: 9 }).map((_, i) => (
                <div
                    key={i}
                    className="w-3 h-3 border border-purple-400/50 animate-pulse"
                    style={{ animationDelay: `${i * 100}ms` }}
                />
            ))}
        </div>
    </div>
);

export const CircuitPath = ({ className = "" }) => (
    <svg className={`absolute ${className}`} viewBox="0 0 100 100" width="100" height="100">
        <path
            d="M10,10 L90,10 L90,50 L50,50 L50,90 L10,90 Z"
            fill="none"
            stroke="rgba(147, 51, 234, 0.3)"
            strokeWidth="1"
            className="animate-pulse"
        />
        <circle cx="10" cy="10" r="2" fill="rgb(168, 85, 247)" className="animate-ping" />
        <circle cx="90" cy="10" r="2" fill="rgb(168, 85, 247)" className="animate-ping" style={{ animationDelay: '0.5s' }} />
        <circle cx="50" cy="50" r="2" fill="rgb(168, 85, 247)" className="animate-ping" style={{ animationDelay: '1s' }} />
    </svg>
);

export const SectionTitle = ({ children, subtitle, gradientText }: { children: React.ReactNode, subtitle?: string, gradientText?: string }) => (
    <div className="text-center mb-16 scroll-animate">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {children} {gradientText && <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{gradientText}</span>}
        </h2>
        {subtitle && <p className="text-xl text-white/70 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
);

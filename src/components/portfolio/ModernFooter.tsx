import React, { useEffect, useRef } from 'react';
import { Github, Mail, Heart } from 'lucide-react';
import { createParticleSystem, initScrollAnimations } from '../../utils/animations';

export const Footer = () => {
  const footerContainerRef = useRef(null);
  
  useEffect(() => {
    // Initialize scroll animations
    const cleanup = initScrollAnimations();
    
    // Add particle system to the background
    if (footerContainerRef.current) {
      createParticleSystem(footerContainerRef.current, 15);
    }
    
    return () => {
      cleanup();
    };
  }, []);
  
  return (
  <footer className="bg-gray-900 border-t border-purple-500/20 relative overflow-hidden">
    {/* Background Elements with 3D tech shapes */}
    <div ref={footerContainerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Circuit paths with animated ping effect */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M10,50 C10,30 30,10 50,10 C70,10 90,30 90,50" className="circuit-path" />
          <circle cx="10" cy="50" r="2" className="circuit-node ping-circle" />
          <circle cx="50" cy="10" r="2" className="circuit-node ping-circle" style={{animationDelay: '1s'}} />
          <circle cx="90" cy="50" r="2" className="circuit-node ping-circle" style={{animationDelay: '2s'}} />
        </svg>
      </div>
      
      <div className="absolute bottom-10 right-10 w-24 h-24 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M20,80 L50,20 L80,80 Z" className="circuit-path" />
          <circle cx="20" cy="80" r="2" className="circuit-node ping-circle" />
          <circle cx="50" cy="20" r="2" className="circuit-node ping-circle" style={{animationDelay: '1.5s'}} />
          <circle cx="80" cy="80" r="2" className="circuit-node ping-circle" style={{animationDelay: '0.8s'}} />
        </svg>
      </div>
      
      {/* 3D Tech shapes */}
      <div className="absolute top-1/4 left-1/4 tech-shape tech-shape-cube scroll-animate" style={{width: '40px', height: '40px', opacity: 0.2}}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="tech-shape-face"></div>
        ))}
      </div>
      
      <div className="absolute bottom-1/4 right-1/4 tech-shape tech-shape-sphere scroll-animate" style={{width: '30px', height: '30px', opacity: 0.2, animationDelay: '0.5s'}}>
        <div className="tech-shape-core"></div>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="tech-shape-ring" style={{transform: `rotateX(${i * 60}deg)`}}></div>
        ))}
      </div>
    </div>

    <div className="container mx-auto px-6 py-12 relative z-10">
      <div className="text-center">
        <div className="mb-8 scroll-animate">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Rimsha Sherwani
          </h3>
          <p className="text-white/70">Frontend Developer & React.JS Specialist</p>
        </div>

        <div className="flex justify-center gap-6 mb-8 scroll-animate" style={{transitionDelay: '200ms'}}>
          <a
            href="https://github.com/RimshaKhanSherwani"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-all hover:scale-110 group relative"
          >
            {/* Orbiting border effect */}
            <div className="absolute inset-0 border border-purple-300/30 rounded-full animate-orbit"></div>
            <Github className="h-5 w-5 text-purple-400 group-hover:text-white transition-colors" />
          </a>
          <a
            href="mailto:rimshasherwani@gmail.com"
            className="p-3 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-all hover:scale-110 group relative"
          >
            {/* Orbiting border effect */}
            <div className="absolute inset-0 border border-purple-300/30 rounded-full animate-orbit" style={{animationDelay: '0.5s'}}></div>
            <Mail className="h-5 w-5 text-purple-400 group-hover:text-white transition-colors" />
          </a>
        </div>

        <div className="mb-8 scroll-animate" style={{transitionDelay: '300ms'}}>
          <p className="text-white/70 mb-2">
            <a href="mailto:rimshasherwani@gmail.com" className="hover:text-purple-400 transition-colors">
              rimshasherwani@gmail.com
            </a>
          </p>
          <p className="text-white/70">
            <a href="tel:+923010501661" className="hover:text-purple-400 transition-colors">
              +92 301 0501661
            </a>
          </p>
        </div>

        <div className="w-24 h-px bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8 scroll-animate" style={{transitionDelay: '400ms'}} />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-white/70 scroll-animate" style={{transitionDelay: '500ms'}}>
          <p>© 2024 Rimsha Sherwani. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
            <span>using React & TypeScript</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
};

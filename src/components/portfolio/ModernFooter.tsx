import React, { useEffect, useRef } from 'react';
import { Github, Mail, Heart } from 'lucide-react';
import { createParticleSystem, initScrollAnimations } from '../../utils/animations';
import { portfolioData } from '../../data/portfolioData';

export const Footer = () => {
  const footerContainerRef = useRef(null);
  const { personalInfo } = portfolioData;

  useEffect(() => {
    const cleanup = initScrollAnimations();
    if (footerContainerRef.current) {
      createParticleSystem(footerContainerRef.current, 15);
    }
    return () => cleanup();
  }, []);

  return (
    <footer className="bg-gray-900 border-t border-purple-500/20 relative overflow-hidden">
      <div ref={footerContainerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M10,50 C10,30 30,10 50,10 C70,10 90,30 90,50" className="circuit-path" />
            <circle cx="10" cy="50" r="2" className="circuit-node ping-circle" />
            <circle cx="50" cy="10" r="2" className="circuit-node ping-circle" style={{ animationDelay: '1s' }} />
            <circle cx="90" cy="50" r="2" className="circuit-node ping-circle" style={{ animationDelay: '2s' }} />
          </svg>
        </div>

        <div className="absolute bottom-10 right-10 w-24 h-24 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M20,80 L50,20 L80,80 Z" className="circuit-path" />
            <circle cx="20" cy="80" r="2" className="circuit-node ping-circle" />
            <circle cx="50" cy="20" r="2" className="circuit-node ping-circle" style={{ animationDelay: '1.5s' }} />
            <circle cx="80" cy="80" r="2" className="circuit-node ping-circle" style={{ animationDelay: '0.8s' }} />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="text-center">
          <div className="mb-8 scroll-animate">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-white/70">{personalInfo.title}</p>
          </div>

          <div className="flex justify-center gap-6 mb-8 scroll-animate" style={{ transitionDelay: '200ms' }}>
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-all hover:scale-110 group relative"
            >
              <div className="absolute inset-0 border border-purple-300/30 rounded-full animate-orbit"></div>
              <Github className="h-5 w-5 text-purple-400 group-hover:text-white transition-colors" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-all hover:scale-110 group relative"
            >
              <div className="absolute inset-0 border border-purple-300/30 rounded-full animate-orbit" style={{ animationDelay: '0.5s' }}></div>
              <Mail className="h-5 w-5 text-purple-400 group-hover:text-white transition-colors" />
            </a>
          </div>

          <div className="mb-8 scroll-animate" style={{ transitionDelay: '300ms' }}>
            <p className="text-white/70 mb-2 font-medium">
              <a href={`mailto:${personalInfo.email}`} className="hover:text-purple-400 transition-colors uppercase">
                {personalInfo.email}
              </a>
            </p>
          </div>

          <div className="w-24 h-px bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8 scroll-animate" style={{ transitionDelay: '400ms' }} />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-white/70 scroll-animate" style={{ transitionDelay: '500ms' }}>
            <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
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

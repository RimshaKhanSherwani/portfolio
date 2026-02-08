import React, { useRef, useEffect } from 'react';
import { ExternalLink, Mail, Github } from 'lucide-react';
import { createParticleSystem } from '../../../utils/animations';
import { portfolioData } from '../../../data/portfolioData';

export const Hero = ({ heroRef, scrollToSection }: { heroRef: React.RefObject<any>, scrollToSection: (id: string) => void }) => {
    useEffect(() => {
        if (heroRef.current) {
            createParticleSystem(heroRef.current, 30);
        }
    }, [heroRef]);

    const { personalInfo } = portfolioData;

    return (
        <section id="hero" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
            {/* 3D Tech Shapes */}
            <div className="tech-shape tech-shape-cube absolute top-1/4 left-1/4 w-16 h-16 opacity-30"></div>
            <div className="tech-shape tech-shape-pyramid absolute top-1/3 right-1/4 w-20 h-20 opacity-20"></div>
            <div className="tech-shape tech-shape-prism absolute bottom-1/4 left-1/3 w-14 h-14 opacity-20"></div>
            <div className="tech-shape tech-shape-sphere absolute top-1/2 right-1/3 w-12 h-12 opacity-20"></div>

            <div className="minimal-container relative z-10 px-6">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="mb-8 inline-block scroll-animate">
                        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 relative">
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-4xl font-bold text-white">
                                {personalInfo.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className="absolute inset-0 rounded-full border border-purple-400/30 animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute inset-0 rounded-full border border-pink-400/20 animate-[spin_15s_linear_infinite_reverse]"></div>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight scroll-animate text-white">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{personalInfo.name.split(' ')[0]}</span> {personalInfo.name.split(' ').slice(1).join(' ')}
                    </h1>

                    <p className="text-xl md:text-2xl text-purple-300 mb-4 font-medium scroll-animate">
                        {personalInfo.title}
                    </p>

                    <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed scroll-animate">
                        {portfolioData.summary.split('. ')[0]}.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 scroll-animate">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="px-8 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 transition-all transform flex items-center gap-2 shadow-lg shadow-purple-500/20"
                        >
                            View My Work <ExternalLink className="h-5 w-5" />
                        </button>

                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-3 text-lg font-semibold rounded-lg border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all flex items-center gap-2"
                        >
                            Get In Touch <Mail className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="flex justify-center gap-6 scroll-animate">
                        {personalInfo.contactInfo.filter(c => c.label !== 'Email' && c.label !== 'Location').map((contact, idx) => (
                            <a key={idx} href={contact.href} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-all hover:scale-110">
                                {contact.icon && <contact.icon className="h-6 w-6 text-purple-400" />}
                            </a>
                        ))}
                        <a href={`mailto:${personalInfo.email}`} className="p-3 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-all hover:scale-110">
                            <Mail className="h-6 w-6 text-purple-400" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center cursor-pointer" onClick={() => scrollToSection('about')}>
                    <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2" />
                </div>
            </div>
        </section>
    );
};

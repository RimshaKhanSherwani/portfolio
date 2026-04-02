import React, { useEffect, useRef } from 'react';
import { portfolioData } from '../../../data/portfolioData';
import { animateTextReveal } from '../../../utils/animations';
import { CircuitPath, SectionTitle } from './CommonComponents';

export const About = ({ aboutRef }: { aboutRef: React.RefObject<any> }) => {
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            animateTextReveal(Array.from(textRef.current.children) as HTMLElement[]);
        }
    }, []);

    return (
        <section id="about" ref={aboutRef} className="py-24 bg-gray-900 relative overflow-hidden">
            <div className="tech-shape tech-shape-prism absolute top-10 left-10 w-16 h-16 opacity-20"></div>
            <div className="tech-shape tech-shape-sphere absolute bottom-10 right-10 w-20 h-20 opacity-20"></div>

            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle gradientText="Me">About</SectionTitle>

                <div className="max-w-7xl mx-auto">
                    <div className="bg-purple-500/5 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8 md:p-12 scroll-animate shadow-2xl text-center">
                        <h3 className="text-2xl font-bold mb-6 text-purple-400">Professional Summary</h3>
                        <div ref={textRef} className="space-y-4">
                            <p className="text-xl text-white/90 leading-relaxed font-light mx-auto text-justify">
                                {portfolioData.summary}
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                            {[
                                { label: 'Experience', value: '3+ Years' },
                                { label: 'Projects', value: '5+' },
                                { label: 'Performance', value: '+30%' },
                            ].map((stat, i) => (
                                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
                                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-sm text-purple-400 font-medium uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <CircuitPath className="top-1/4 right-0 opacity-20" />
            <CircuitPath className="bottom-1/4 left-0 opacity-20 rotate-180" />
        </section>
    );
};

import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../../../data/portfolioData';
import { SectionTitle } from './CommonComponents';

export const Experience = ({ experienceRef }: { experienceRef: React.RefObject<any> }) => {
    return (
        <section id="experience" ref={experienceRef} className="py-24 bg-gray-900/50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle gradientText="Experience">Work</SectionTitle>

                <div className="max-w-4xl mx-auto space-y-12">
                    {portfolioData.experience.map((exp, index) => (
                        <div
                            key={index}
                            className="relative pl-8 md:pl-0 scroll-animate group"
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {/* Timeline Connector */}
                            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent md:-translate-x-px hidden md:block" />

                            <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="md:w-1/2" />

                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 md:-translate-x-2 z-20 shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-125 transition-transform" />

                                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-purple-500/40 transition-all hover:bg-white/10 group shadow-xl">
                                        <div className="flex items-center gap-2 text-purple-400 text-sm font-bold uppercase tracking-wider mb-2">
                                            <Calendar className="h-4 w-4" />
                                            {exp.duration}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors uppercase">{exp.role}</h3>
                                        <div className="flex items-center gap-2 text-white/60 mb-4 font-medium italic">
                                            <Briefcase className="h-4 w-4" />
                                            {exp.company}
                                        </div>

                                        <ul className="space-y-3 mb-6">
                                            {exp.highlights.map((highlight, hIdx) => (
                                                <li key={hIdx} className="text-white/70 text-sm leading-relaxed flex items-start gap-2">
                                                    <span className="text-purple-500 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-500" />
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech, tIdx) => (
                                                <span key={tIdx} className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../../../data/portfolioData';
import { SectionTitle } from './CommonComponents';

export const Experience = ({ experienceRef }: { experienceRef: React.RefObject<any> }) => {
    return (
        <section id="experience" ref={experienceRef} className="py-24 bg-gray-900/50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle gradientText="Experience">Work</SectionTitle>

                <div className="max-w-7xl mx-auto space-y-12">
                    {portfolioData.experience.map((exp, index) => (
                        <div
                            key={index}
                            className="relative pl-12 scroll-animate group"
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {/* Vertical Timeline Line */}
                            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent" />

                            {/* Timeline Dot */}
                            <div className="absolute left-[20px] top-10 w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-20 shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-125 transition-transform" />

                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl hover:border-purple-500/40 transition-all hover:bg-white/10 group shadow-xl">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors uppercase tracking-tight">{exp.role}</h3>
                                        <div className="flex items-center gap-2 text-purple-300 font-semibold text-lg italic">
                                            <Briefcase className="h-5 w-5" />
                                            {exp.company}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-purple-400 text-sm font-bold uppercase tracking-[0.2em] bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
                                        <Calendar className="h-4 w-4" />
                                        {exp.duration}
                                    </div>
                                </div>

                                <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4 mb-8">
                                    {exp.highlights.map((highlight, hIdx) => (
                                        <li key={hIdx} className="text-white/70 text-base leading-relaxed flex items-start gap-3">
                                            <span className="text-purple-500 mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.4)]" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-3 pt-6 border-t border-white/5">
                                    {exp.technologies.map((tech, tIdx) => (
                                        <span key={tIdx} className="px-4 py-1.5 text-xs font-bold rounded-lg bg-gray-800 text-purple-300 border border-purple-500/20 uppercase tracking-wider">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

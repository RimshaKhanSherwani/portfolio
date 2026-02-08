import React from 'react';
import { portfolioData } from '../../../data/portfolioData';
import { SectionTitle } from './CommonComponents';
import { GraduationCap, Award, Heart } from 'lucide-react';

export const EducationAwards = () => {
    return (
        <section id="education" className="py-24 bg-gray-900 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto space-y-32">
                    {/* Education */}
                    <div className="scroll-animate w-full">
                        <SectionTitle gradientText="Journey">Educational</SectionTitle>
                        <div className="space-y-12">
                            {portfolioData.education.map((edu, idx) => (
                                <div key={idx} className="relative pl-12 border-l-2 border-purple-500/30">
                                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)]" />
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                        <h3 className="text-2xl font-bold text-white uppercase tracking-tight">{edu.degree}</h3>
                                        <div className="flex items-center gap-2 text-purple-400 font-bold bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20 text-sm">
                                            <GraduationCap className="h-5 w-5" />
                                            {edu.institution}
                                        </div>
                                    </div>
                                    <p className="text-white/60 text-lg mb-6 max-w-3xl">{edu.details}</p>
                                    <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl text-lg italic text-white/80 leading-relaxed shadow-lg">
                                        "{edu.note}"
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Awards & volunteering */}
                    <div className="scroll-animate w-full" style={{ transitionDelay: '200ms' }}>
                        <SectionTitle gradientText="Awards">Milestones &</SectionTitle>
                        <div className="grid gap-10">
                            {portfolioData.awards.map((award, idx) => (
                                <div key={idx} className="p-10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-[2.5rem] flex flex-col md:flex-row gap-10 hover:border-purple-500/40 transition-all group shadow-xl">
                                    <div className="flex-shrink-0 w-20 h-20 rounded-3xl bg-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Award className="h-10 w-10 text-pink-400" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                            <h3 className="text-2xl font-bold text-white uppercase tracking-tight group-hover:text-pink-400 transition-colors uppercase">{award.title}</h3>
                                            <span className="text-pink-400 font-bold text-sm uppercase tracking-widest bg-pink-500/10 px-4 py-2 rounded-full border border-pink-500/20">
                                                {award.institution}
                                            </span>
                                        </div>
                                        <p className="text-white/70 text-lg leading-relaxed">{award.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-32 scroll-animate w-full">
                    <SectionTitle gradientText="Service">Community</SectionTitle>
                    <div className="grid md:grid-cols-2 gap-8">
                        {portfolioData.volunteering.map((v, idx) => (
                            <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-purple-500/30 transition-all">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1 uppercase">{v.role}</h3>
                                        <p className="text-purple-400 font-medium">{v.organization}</p>
                                    </div>
                                    <span className="text-xs font-bold text-white/40 bg-white/5 px-3 py-1 rounded-full">{v.duration}</span>
                                </div>
                                <p className="text-white/60 text-sm leading-relaxed">{v.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

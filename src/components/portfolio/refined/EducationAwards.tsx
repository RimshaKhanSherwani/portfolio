import React from 'react';
import { portfolioData } from '../../../data/portfolioData';
import { SectionTitle } from './CommonComponents';
import { GraduationCap, Award, Heart } from 'lucide-react';

export const EducationAwards = () => {
    return (
        <section id="education" className="py-24 bg-gray-900 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Education */}
                    <div className="scroll-animate">
                        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
                            <GraduationCap className="h-8 w-8 text-purple-400" />
                            Education
                        </h2>
                        <div className="space-y-8">
                            {portfolioData.education.map((edu, idx) => (
                                <div key={idx} className="relative pl-8 border-l border-purple-500/30">
                                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                                    <h3 className="text-xl font-bold text-white mb-2 uppercase">{edu.degree}</h3>
                                    <p className="text-purple-400 font-medium mb-1">{edu.institution}</p>
                                    <p className="text-white/60 text-sm mb-4">{edu.details}</p>
                                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-sm italic text-white/70">
                                        "{edu.note}"
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Awards & volunteering */}
                    <div className="scroll-animate" style={{ transitionDelay: '200ms' }}>
                        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
                            <Award className="h-8 w-8 text-pink-400" />
                            Achievements
                        </h2>
                        <div className="grid gap-6">
                            {portfolioData.awards.map((award, idx) => (
                                <div key={idx} className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                                        <Award className="h-6 w-6 text-pink-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1 uppercase">{award.title}</h3>
                                        <p className="text-pink-400 text-sm mb-2">{award.institution}</p>
                                        <p className="text-white/60 text-sm leading-relaxed">{award.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Volunteering */}
                <div className="mt-20 scroll-animate">
                    <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4 justify-center">
                        <Heart className="h-8 w-8 text-red-500" />
                        Volunteering
                    </h2>
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

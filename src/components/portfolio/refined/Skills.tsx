import React from 'react';
import { portfolioData } from '../../../data/portfolioData';
import { SectionTitle, TechGrid } from './CommonComponents';
import { Code2, Database, Brain, Layers, Settings } from 'lucide-react';

export const Skills = () => {
    const { skills } = portfolioData;

    const skillGroups = [
        { title: "Languages", icon: Code2, items: skills.languages },
        { title: "Frontend", icon: Layers, items: skills.frontend },
        { title: "State & Data", icon: Database, items: skills.stateData },
        { title: "Backend & Tools", icon: Settings, items: skills.backendTools },
        { title: "DevOps & AI", icon: Brain, items: skills.devOpsAI }
    ];

    return (
        <section id="skills" className="py-24 bg-gray-900/50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle gradientText="Stack">Technical</SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillGroups.map((group, index) => (
                        <div
                            key={index}
                            className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-purple-500/30 transition-all group scroll-animate"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                                    <group.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white uppercase">{group.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {group.items.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-800 text-white/70 border border-white/5 hover:border-purple-500/50 hover:text-purple-400 transition-all cursor-default uppercase tracking-tight"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <TechGrid className="top-20 right-10" />
            <TechGrid className="bottom-20 left-10" />
        </section>
    );
};

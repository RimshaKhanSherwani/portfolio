import React from 'react';
import { portfolioData } from '../../../data/portfolioData';
import { SectionTitle, TechGrid } from './CommonComponents';
import {
    Brain,
    Users,
    Globe,
    Lightbulb,
    Handshake,
    Mic2,
    RefreshCw,
    Ear,
    Sparkles,
    ShieldCheck,
    Clock
} from 'lucide-react';

const softSkillMapping = [
    { name: "Problem Solving", icon: Brain, description: "Analytical approach to complex technical challenges." },
    { name: "Leadership", icon: Rocket, description: "Leading teams and mentoring junior developers." },
    { name: "Cross-Cultural Collaboration", icon: Globe, description: "Working effectively with global distributed teams." },
    { name: "Critical Thinking", icon: Lightbulb, description: "Evaluating solutions with a long-term perspective." },
    { name: "Negotiation", icon: Handshake, description: "Balancing technical debt and business requirements." },
    { name: "Public Speaking", icon: Mic2, description: "Presenting technical concepts to stakeholders." },
    { name: "Adaptability", icon: RefreshCw, description: "Thriving in fast-paced, evolving environments." },
    { name: "Active Listening", icon: Ear, description: "Understanding client needs and team feedback." },
    { name: "Innovation", icon: Sparkles, description: "Continuously improving processes and workflows." },
    { name: "Responsibility", icon: ShieldCheck, description: "Ownership of deliverables and production stability." },
    { name: "Team & Time Mgmt", icon: Clock, description: "Prioritizing tasks and ensuring timely delivery." }
];

// Fallback for Rocket since it wasn't in my initial plan but used in mapping
import { Rocket } from 'lucide-react';

export const SoftSkills = () => {
    const { softSkills } = portfolioData.skills;

    return (
        <section id="soft-skills" className="py-24 bg-gray-900 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle gradientText="Capabilities">Professional</SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {softSkillMapping.map((skill, index) => (
                        <div
                            key={index}
                            className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] hover:border-purple-500/40 transition-all group scroll-animate shadow-xl hover:-translate-y-1"
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                    <skill.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white uppercase tracking-tight leading-tight">
                                    {skill.name}
                                </h3>
                            </div>
                            <p className="text-white/50 text-sm leading-relaxed font-medium">
                                {skill.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <TechGrid className="top-10 left-10 opacity-10" />
            <TechGrid className="bottom-10 right-10 opacity-10" />
        </section>
    );
};

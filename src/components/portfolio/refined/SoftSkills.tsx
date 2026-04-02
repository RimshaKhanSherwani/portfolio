import {
    Clock,
    Globe,
    Handshake,
    RefreshCw,
    Users
} from 'lucide-react';
import { portfolioData } from '../../../data/portfolioData';
import { SectionTitle, TechGrid } from './CommonComponents';

const softSkillMapping = [
  {
    name: "Team Empowerment",
    icon: Users,
    description: "Ability to guide, motivate, and inspire teams to achieve goals efficiently."
  },
  {
    name: "Cross-Cultural Collaboration",
    icon: Globe,
    description: "Experience working effectively with diverse teams across different cultures and regions."
  },
  {
    name: "Negotiation",
    icon: Handshake,
    description: "Skilled in reaching mutually beneficial agreements through clear communication and strategy."
  },
  {
    name: "Adaptability",
    icon: RefreshCw,
    description: "Quickly adjusts to changing environments, technologies, and project requirements."
  },
  {
    name: "Team & Time Management",
    icon: Clock,
    description: "Efficiently manages time and collaborates with teams to meet deadlines and deliver results."
  }
];

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

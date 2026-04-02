import { Cpu, Layout } from 'lucide-react';
import React, { useState } from 'react';
import { portfolioData } from '../../../data/portfolioData';
import { SectionTitle } from './CommonComponents';

import healthTrackerImg from '../../../assets/Health/00.png';
import mobiguardImg from '../../../assets/Mobiguard/00.png';
import mt3Img from '../../../assets/mt3/mt301.png';
import serviceHubImg from '../../../assets/serviceHub/serviceHub01.png';
import workspaceImg from '../../../assets/workspace/workspace01.png';

const projectImageMap: Record<string, string> = {
    workspace: workspaceImg,
    servicehub: serviceHubImg,
    getmt3: mt3Img,
    mobiguard: mobiguardImg,
    healthtrack: healthTrackerImg
};

export const Projects = ({ projectsRef }: { projectsRef: React.RefObject<any> }) => {
    const [activeCategory, setActiveCategory] = useState('All');

    const allTechnologies = Array.from(new Set(portfolioData.projects.flatMap(p => p.technologies)));

    return (
        <section id="projects" ref={projectsRef} className="py-24 bg-gray-900 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle gradientText="Projects">Featured</SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full scroll-animate shadow-2xl"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                                {projectImageMap[project.id] ? (
                                    <img
                                        src={projectImageMap[project.id]}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-100 transition-transform duration-700"
                                    />
                                ) : (
                                    <Layout className="w-16 h-16 text-purple-400 opacity-40 group-hover:scale-110 transition-transform duration-500" />
                                )}
                                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors duration-500" />
                                <div className="absolute top-4 right-4 bg-purple-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter shadow-lg">
                                    Project
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2 uppercase h-14">
                                    {project.title}
                                </h3>
                                <p className="text-white/60 text-sm mb-6 line-clamp-3 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mb-6 flex-1">
                                    <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <Cpu className="h-3 w-3" /> Core Tech
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 5).map((tech, i) => (
                                            <span key={i} className="text-[10px] font-bold px-2 py-1 rounded-md bg-white/5 text-white/50 border border-white/10 uppercase">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 5 && (
                                            <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                                +{project.technologies.length - 5}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                                    <div className="flex -space-x-2">
                                        {project.technologies.slice(0, 3).map((_, i) => (
                                            <div key={i} className="w-6 h-6 rounded-full bg-purple-500 border-2 border-gray-900 flex items-center justify-center text-[8px] font-bold text-white uppercase">
                                                {project.technologies[i][0]}
                                            </div>
                                        ))}
                                    </div>
                                    {/* <button className="text-purple-400 hover:text-pink-400 flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest transition-colors group/btn">
                                        Case Study <ExternalLink className="h-3 w-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

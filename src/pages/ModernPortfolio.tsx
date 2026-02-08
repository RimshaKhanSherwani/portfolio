import React, { useEffect, useRef, useState } from 'react';
import { Mail, Github, Menu, X } from 'lucide-react';
import { Hero } from '../components/portfolio/refined/Hero';
import { About } from '../components/portfolio/refined/About';
import { Experience } from '../components/portfolio/refined/Experience';
import { Projects } from '../components/portfolio/refined/Projects';
import { Skills } from '../components/portfolio/refined/Skills';
import { SoftSkills } from '../components/portfolio/refined/SoftSkills';
import { EducationAwards } from '../components/portfolio/refined/EducationAwards';
import { Contact } from '../components/portfolio/refined/Contact';
import { Footer } from '../components/portfolio/ModernFooter';
import { initScrollAnimations } from '../utils/animations';
import { portfolioData } from '../data/portfolioData';
import '../styles/tech-animations.css';
import ProfilePic from "../assets/pic.jpeg";

const ModernPortfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            const sections = [
                { id: 'hero', ref: heroRef },
                { id: 'about', ref: aboutRef },
                { id: 'experience', ref: experienceRef },
                { id: 'projects', ref: projectsRef },
                { id: 'skills', ref: { current: document.getElementById('skills') } },
                { id: 'soft-skills', ref: { current: document.getElementById('soft-skills') } },
                { id: 'education', ref: { current: document.getElementById('education') } },
                { id: 'contact', ref: contactRef }
            ];

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section.ref.current && section.ref.current.offsetTop <= scrollPosition) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        const cleanupScrollAnimations = initScrollAnimations();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cleanupScrollAnimations();
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Message sent! Thank you for reaching out.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const Navigation = () => (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-purple-500/20">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 cursor-pointer" onClick={() => scrollToSection('hero')}>
                        <img
                            src={ProfilePic}
                            alt="Rimsha Sherwani"
                            className="rounded-full shadow-lg object-cover w-[40px] h-[40px] border border-purple-500/30"
                        />
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Rimsha.
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {['About', 'Experience', 'Projects', 'Skills', 'Soft-Skills', 'Education', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-purple-400 relative py-2 ${activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-white/70'
                                    }`}
                            >
                                {item}
                                {activeSection === item.toLowerCase() && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-3">
                            <a href={`https://${portfolioData.personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-colors border border-purple-500/20">
                                <Github className="h-4 w-4 text-purple-400" />
                            </a>
                            <a href={`mailto:${portfolioData.personalInfo.email}`} className="p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-colors border border-purple-500/20">
                                <Mail className="h-4 w-4 text-purple-400" />
                            </a>
                        </div>

                        <button
                            className="md:hidden p-2 text-white bg-purple-500/10 rounded-lg border border-purple-500/20"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-purple-500/20">
                        <div className="flex flex-col space-y-4 pt-4">
                            {['About', 'Experience', 'Projects', 'Skills', 'Soft-Skills', 'Education', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="text-left text-sm font-bold uppercase tracking-widest text-white/70 hover:text-purple-400 transition-colors"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );

    return (
        <div className="min-h-screen bg-gray-900 selection:bg-purple-500 selection:text-white">
            <Navigation />
            <Hero heroRef={heroRef} scrollToSection={scrollToSection} />
            <About aboutRef={aboutRef} />
            <Experience experienceRef={experienceRef} />
            <Projects projectsRef={projectsRef} />
            <Skills />
            <SoftSkills />
            <EducationAwards />
            <Contact
                contactRef={contactRef}
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
            />
            <Footer />
        </div>
    );
};

export default ModernPortfolio;

import React, { useEffect, useRef, useState } from 'react';
import { Mail, Github, ExternalLink, Download, Menu, X } from 'lucide-react';
import { AboutSection, ExperienceSection } from '../components/portfolio/ModernSections';
import { ProjectsSection, ContactSection } from '../components/portfolio/ModernProjectsContact';
import { Footer } from '../components/portfolio/ModernFooter';
import { initScrollAnimations, createParticleSystem } from '../utils/animations';
import '../styles/tech-animations.css';

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

  // Effect to update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      const sections = [
        { id: 'hero', ref: heroRef },
        { id: 'about', ref: aboutRef },
        { id: 'experience', ref: experienceRef },
        { id: 'projects', ref: projectsRef },
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
    
    // Initialize scroll-based animations
    const cleanupScrollAnimations = initScrollAnimations();
    
    // Add particle system to hero section
    if (heroRef.current) {
      createParticleSystem(heroRef.current, 30);
    }
    
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
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
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Rimsha Sherwani
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-purple-400 relative ${
                  activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-white/70'
                }`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <div className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              <a href="https://github.com/RimshaKhanSherwani" className="p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors">
                <Github className="h-4 w-4 text-purple-400" />
              </a>
              <a href="mailto:rimshasherwani@gmail.com" className="p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors">
                <Mail className="h-4 w-4 text-purple-400" />
              </a>
              <a href="/" className="px-3 py-1 rounded-lg border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-colors text-xs">
                Original Portfolio
              </a>
            </div>
            
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-purple-500/20">
            <div className="flex flex-col space-y-4 pt-4">
              {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className="text-left text-sm font-medium text-white/70 hover:text-purple-400 transition-colors"
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

  // We've moved the animation components to the tech-animations.css file
  // and are using the DOM-based approach for better performance

  const HeroSection = () => (
    <section id="hero" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* 3D Tech Shapes - More sophisticated and minimal */}
      <div className="tech-shape tech-shape-cube absolute top-1/4 left-1/4 w-16 h-16"></div>
      <div className="tech-shape tech-shape-pyramid absolute top-1/3 right-1/4 w-20 h-20"></div>
      <div className="tech-shape tech-shape-prism absolute bottom-1/4 left-1/3 w-14 h-14"></div>
      <div className="tech-shape tech-shape-sphere absolute top-1/2 right-1/3 w-12 h-12"></div>
      
      {/* Circuit Paths - More minimal and aesthetic */}
      <svg className="circuit-path absolute top-1/2 left-10" width="150" height="150" viewBox="0 0 100 100">
        <path d="M10,10 Q30,50 10,90 T90,50 T10,10" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="1" fill="none" />
        <circle cx="10" cy="10" r="2" fill="rgba(168, 85, 247, 0.8)" className="animate-ping" />
        <circle cx="10" cy="90" r="2" fill="rgba(168, 85, 247, 0.8)" className="animate-ping" style={{ animationDelay: '0.5s' }} />
        <circle cx="90" cy="50" r="2" fill="rgba(168, 85, 247, 0.8)" className="animate-ping" style={{ animationDelay: '1s' }} />
      </svg>
      
      <svg className="circuit-path absolute top-1/4 right-10" width="200" height="200" viewBox="0 0 100 100">
        <path d="M10,50 C20,10 80,10 90,50 S20,90 10,50" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="1" fill="none" />
        <circle cx="10" cy="50" r="2" fill="rgba(168, 85, 247, 0.8)" className="animate-ping" />
        <circle cx="90" cy="50" r="2" fill="rgba(168, 85, 247, 0.8)" className="animate-ping" style={{ animationDelay: '0.7s' }} />
      </svg>

      {/* Tech Grid - More subtle */}
      <div className="tech-grid absolute top-20 right-20">
        <div className="grid grid-cols-3 gap-3 opacity-30">
          {Array.from({ length: 9 }).map((_, i) => (
            <div 
              key={i} 
              className="tech-grid-item"
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>
      </div>

      <div className="minimal-container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 inline-block scroll-animate">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-4xl font-bold text-white">
                RS
              </div>
              {/* Subtle orbit effect */}
              <div className="absolute inset-0 rounded-full border border-purple-400/30 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-0 rounded-full border border-pink-400/20 animate-[spin_15s_linear_infinite_reverse]"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight scroll-animate scroll-animate-delay-1">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Rimsha</span>{" "}
            <span className="text-white">Sherwani</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-300 mb-4 font-medium scroll-animate scroll-animate-delay-2">
            Frontend Developer & React.JS Specialist
          </p>
          
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed scroll-animate scroll-animate-delay-3">
            Crafting exceptional user experiences with modern web technologies. 
            Specialized in React, TypeScript, and building scalable frontend solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 scroll-animate scroll-animate-delay-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="minimal-card bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all transform hover:scale-105 flex items-center gap-2"
            >
              View My Work
              <ExternalLink className="h-5 w-5" />
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="minimal-card border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all flex items-center gap-2"
            >
              Get In Touch
              <Mail className="h-5 w-5" />
            </button>
          </div>

          <div className="flex justify-center gap-6 scroll-animate scroll-animate-delay-5">
            <a href="https://github.com/RimshaKhanSherwani" className="p-3 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-all hover:scale-110">
              <Github className="h-6 w-6 text-purple-400" />
            </a>
            <a href="mailto:rimshasherwani@gmail.com" className="p-3 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-all hover:scale-110">
              <Mail className="h-6 w-6 text-purple-400" />
            </a>
            <button className="p-3 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-all hover:scale-110">
              <Download className="h-6 w-6 text-purple-400" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
  
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <HeroSection />
      <AboutSection aboutRef={aboutRef} />
      <ExperienceSection experienceRef={experienceRef} />
      <ProjectsSection projectsRef={projectsRef} />
      <ContactSection 
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

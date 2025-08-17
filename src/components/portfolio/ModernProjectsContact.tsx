import React, { useState, useEffect, useRef } from 'react';
import { Github, Mail, ExternalLink, Code, Database, Smartphone, MapPin, Phone, Send } from 'lucide-react';
import { FloatingCube, TechGrid, CircuitPath } from './ModernSections';
import { animateTechStack, createParticleSystem, initScrollAnimations } from '../../utils/animations';

export const ProjectsSection = ({ projectsRef }) => {
  const projectsContainerRef = useRef(null);
  const techStackRef = useRef(null);
  
  useEffect(() => {
    // Initialize scroll animations
    const cleanup = initScrollAnimations();
    
    // Add particle system to the background
    if (projectsContainerRef.current) {
      createParticleSystem(projectsContainerRef.current, 30);
    }
    
    // Animate tech stack items when they come into view
    if (techStackRef.current) {
      const techItems = techStackRef.current.querySelectorAll('.tech-item');
      animateTechStack(techItems);
    }
    
    return () => {
      cleanup();
    };
  }, []);
  
  const projectsData = [
    {
      id: 1,
      title: "EquipHub - Hardware Management System",
      description: "A comprehensive hardware management and data centralization system designed to streamline device tracking, maintenance, asset lifecycle management, and schedule management for organizations.",
      technologies: ["React", "Material UI", "Tailwind CSS", "Express.JS", "MongoDB", "Redux"],
      category: "Full Stack",
      icon: Database,
      features: [
        "Real-time device tracking and monitoring",
        "Automated maintenance scheduling",
        "Asset lifecycle management",
        "Comprehensive reporting dashboard",
        "Multi-user role management"
      ]
    },
    {
      id: 2,
      title: "letsChat - Real-Time Messaging App",
      description: "A modern real-time messaging application built with React and TypeScript, featuring private/group messaging, typing indicators, and responsive design for seamless communication.",
      technologies: ["React", "TypeScript", "WebSocket", "Socket.IO", "Tailwind CSS", "Node.JS"],
      category: "Real-time App",
      icon: Smartphone,
      features: [
        "Real-time private and group messaging",
        "Typing indicators and online status",
        "Responsive design for all devices",
        "Message history and persistence",
        "User authentication and profiles"
      ]
    },
    {
      id: 3,
      title: "tau-lead - MRP Management System",
      description: "An advanced Manufacturing Resource Planning (MRP) software designed for manufacturing businesses, offering SAP-like functionality while maintaining modularity, user-friendliness, and cost-effectiveness.",
      technologies: ["React.JS", "Ant Design", "Node/Express.JS", "SQL", "MongoDB"],
      category: "Enterprise",
      icon: Code,
      features: [
        "Production planning and scheduling",
        "Inventory and resource management",
        "Real-time analytics and reporting",
        "Multi-location support",
        "Integration capabilities"
      ]
    }
  ];

  const [selectedProject, setSelectedProject] = useState(projectsData[0]);

  return (
    <section id="projects" ref={projectsRef} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements with 3D tech shapes */}
      <div ref={projectsContainerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Circuit paths with animated ping effect */}
        <div className="absolute top-10 right-10 w-40 h-40 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M10,30 L40,30 L40,70 L70,70 L70,40 L90,40" className="circuit-path" />
            <circle cx="90" cy="40" r="2" className="circuit-node ping-circle" />
            <circle cx="40" cy="30" r="2" className="circuit-node ping-circle" style={{animationDelay: '1s'}} />
            <circle cx="40" cy="70" r="2" className="circuit-node ping-circle" style={{animationDelay: '2s'}} />
          </svg>
        </div>
        
        <div className="absolute bottom-20 left-20 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M20,20 L80,20 L80,80 L20,80 Z" className="circuit-path" />
            <circle cx="20" cy="20" r="2" className="circuit-node ping-circle" />
            <circle cx="80" cy="80" r="2" className="circuit-node ping-circle" style={{animationDelay: '1.5s'}} />
          </svg>
        </div>
        
        {/* 3D Tech shapes */}
        <div className="absolute top-1/4 right-1/4 tech-shape tech-shape-cube scroll-animate" style={{width: '60px', height: '60px', transform: 'rotate(15deg)'}}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="tech-shape-face"></div>
          ))}
        </div>
        
        <div className="absolute bottom-1/3 left-1/3 tech-shape tech-shape-pyramid scroll-animate" style={{width: '50px', height: '50px', animationDelay: '0.5s'}}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="tech-shape-face"></div>
          ))}
        </div>
        
        <div className="absolute top-2/3 right-1/3 tech-shape tech-shape-sphere scroll-animate" style={{width: '40px', height: '40px', animationDelay: '1s'}}>
          <div className="tech-shape-core"></div>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="tech-shape-ring" style={{transform: `rotateX(${i * 60}deg)`}}></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Showcasing my expertise through innovative solutions and technical excellence
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectsData.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`px-6 py-3 rounded-lg transition-all ${
                selectedProject.id === project.id
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
              }`}
            >
              {project.title.split(" - ")[0]}
            </button>
          ))}
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-purple-500/5 backdrop-blur-lg border border-purple-500/20 rounded-xl p-8 h-full scroll-animate" style={{transitionDelay: '200ms'}}>
              {/* Circuit path background for project card */}
              <div className="absolute top-4 right-4 w-24 h-24 opacity-10 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M10,10 L90,10 L90,90 L10,90 Z M30,30 L70,30 L70,70 L30,70 Z" className="circuit-path" />
                  <circle cx="10" cy="10" r="2" className="circuit-node ping-circle" />
                  <circle cx="90" cy="90" r="2" className="circuit-node ping-circle" style={{animationDelay: '1s'}} />
                </svg>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center relative">
                  {/* Orbiting border effect */}
                  <div className="absolute inset-0 border border-purple-300/30 rounded-lg animate-orbit"></div>
                  {React.createElement(selectedProject.icon, { className: "h-6 w-6 text-white" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <p className="text-purple-400">{selectedProject.category}</p>
                </div>
              </div>

              <p className="text-white/70 mb-6 scroll-animate" style={{transitionDelay: '300ms'}}>
                {selectedProject.description}
              </p>

              <div className="mb-6 scroll-animate" style={{transitionDelay: '400ms'}}>
                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 scroll-animate" style={{transitionDelay: `${500 + index * 100}ms`}}>
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3 scroll-animate" style={{transitionDelay: '600ms'}}>Technologies</h4>
                <div className="flex flex-wrap gap-2" ref={techStackRef}>
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-400 tech-item"
                      style={{transitionDelay: `${700 + index * 80}ms`}}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-purple-500/5 backdrop-blur-lg border border-purple-500/20 rounded-xl p-8 flex flex-col scroll-animate" style={{transitionDelay: '300ms'}}>
              {/* 3D tech shape in the corner */}
              <div className="absolute top-4 left-4 tech-shape tech-shape-prism" style={{width: '40px', height: '40px', opacity: 0.2}}>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="tech-shape-face"></div>
                ))}
              </div>
              
              <div className="flex-1">
                <div className="aspect-video rounded-lg bg-gray-800 mb-6 overflow-hidden relative scroll-animate" style={{transitionDelay: '400ms'}}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/30 text-lg">Project Preview</div>
                  </div>
                  {/* Circuit path overlay */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M10,50 L30,30 L70,30 L90,50 L70,70 L30,70 Z" className="circuit-path" />
                      <circle cx="10" cy="50" r="2" className="circuit-node ping-circle" />
                      <circle cx="90" cy="50" r="2" className="circuit-node ping-circle" style={{animationDelay: '1.5s'}} />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>

                <div className="space-y-4 scroll-animate" style={{transitionDelay: '500ms'}}>
                  <div className="h-4 bg-gray-800 rounded-full w-full"></div>
                  <div className="h-4 bg-gray-800 rounded-full w-3/4"></div>
                  <div className="h-4 bg-gray-800 rounded-full w-5/6"></div>
                </div>
              </div>

              <div className="mt-8 flex gap-4 scroll-animate" style={{transitionDelay: '600ms'}}>
                <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                  <Github className="h-4 w-4" />
                  View Code
                </button>
                <button className="flex-1 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white py-3 rounded-lg transition-all flex items-center justify-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContactSection = ({ contactRef, formData, handleInputChange, handleSubmit }) => {
  const formRef = useRef(null);
  const contactContainerRef = useRef(null);
  
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rimshasherwani@gmail.com',
      href: 'mailto:rimshasherwani@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Rawalpindi, Pakistan',
      href: 'https://maps.google.com/?q=Rawalpindi,Pakistan'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'RimshaKhanSherwani',
      href: 'https://github.com/RimshaKhanSherwani'
    }
  ];
  
  useEffect(() => {
    // Initialize scroll animations
    const cleanup = initScrollAnimations();
    
    // Add particle system to the background
    if (contactContainerRef.current) {
      createParticleSystem(contactContainerRef.current, 25);
    }
    
    return () => {
      cleanup();
    };
  }, []);
  
  // Contact info is defined above

  return (
    <section id="contact" ref={contactRef} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements with 3D tech shapes */}
      <div ref={contactContainerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Circuit paths with animated ping effect */}
        <div className="absolute top-10 left-10 w-40 h-40 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M10,10 L90,10 L90,90 L10,90 Z" className="circuit-path" />
            <path d="M30,30 L70,30 L70,70 L30,70 Z" className="circuit-path" style={{animationDelay: '0.5s'}} />
            <circle cx="10" cy="10" r="2" className="circuit-node ping-circle" />
            <circle cx="90" cy="90" r="2" className="circuit-node ping-circle" style={{animationDelay: '1s'}} />
            <circle cx="30" cy="30" r="2" className="circuit-node ping-circle" style={{animationDelay: '1.5s'}} />
          </svg>
        </div>
        
        <div className="absolute bottom-20 right-20 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M20,50 C20,20 80,20 80,50 C80,80 20,80 20,50 Z" className="circuit-path" />
            <circle cx="20" cy="50" r="2" className="circuit-node ping-circle" />
            <circle cx="80" cy="50" r="2" className="circuit-node ping-circle" style={{animationDelay: '1.2s'}} />
          </svg>
        </div>
        
        {/* 3D Tech shapes */}
        <div className="absolute top-1/3 left-1/4 tech-shape tech-shape-sphere scroll-animate" style={{width: '50px', height: '50px'}}>
          <div className="tech-shape-core"></div>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="tech-shape-ring" style={{transform: `rotateX(${i * 60}deg)`}}></div>
          ))}
        </div>
        
        <div className="absolute bottom-1/4 right-1/3 tech-shape tech-shape-pyramid scroll-animate" style={{width: '40px', height: '40px', animationDelay: '0.7s'}}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="tech-shape-face"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">Let's Connect</h3>
              <p className="text-white/70 leading-relaxed mb-8">
                Ready to collaborate on your next project? Let's discuss how we can work together.
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a 
                  href={contact.href}
                  key={index} 
                  className="bg-purple-500/5 backdrop-blur-lg border border-purple-500/20 rounded-xl p-4 flex items-center gap-4 group hover:border-purple-400 transition-all scroll-animate" 
                  style={{transitionDelay: `${200 + index * 100}ms`}}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center relative">
                    {/* Orbiting border effect */}
                    <div className="absolute inset-0 border border-purple-300/30 rounded-lg animate-orbit"></div>
                    {React.createElement(contact.icon, { className: "h-6 w-6 text-white" })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm text-purple-400">{contact.label}</h3>
                    <p className="text-white font-medium">
                      {contact.value}
                    </p>
                  </div>
                  {contact.href.startsWith('http') && (
                    <ExternalLink className="h-4 w-4 text-white/70 group-hover:text-purple-400 transition-colors ml-auto" />
                  )}
                </a>
              ))}
            </div>

            <div className="bg-purple-500/5 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 scroll-animate" style={{transitionDelay: '500ms'}}>
              {/* Circuit path background */}
              <div className="absolute top-4 right-4 w-20 h-20 opacity-10 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M20,20 C20,50 80,50 80,80" className="circuit-path" />
                  <circle cx="20" cy="20" r="2" className="circuit-node ping-circle" />
                  <circle cx="80" cy="80" r="2" className="circuit-node ping-circle" style={{animationDelay: '1.2s'}} />
                </svg>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse" />
                <p className="text-white font-medium">Available for opportunities</p>
              </div>
              <p className="text-white/70 text-sm mt-2">
                Open to work and interesting projects
              </p>
            </div>
          </div>

          <div>
            <div className="bg-purple-500/5 backdrop-blur-lg border border-purple-500/20 rounded-xl p-8 scroll-animate" style={{transitionDelay: '300ms'}}>
              {/* 3D tech shape in the corner */}
              <div className="absolute top-4 right-4 tech-shape tech-shape-cube" style={{width: '30px', height: '30px', opacity: 0.2}}>
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="tech-shape-face"></div>
                ))}
              </div>
              
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">Send a Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="scroll-animate" style={{transitionDelay: '400ms'}}>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                    required
                  />
                </div>

                <div className="scroll-animate" style={{transitionDelay: '500ms'}}>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                    required
                  />
                </div>

                <div className="scroll-animate" style={{transitionDelay: '600ms'}}>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello!"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all resize-none"
                    required
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 scroll-animate"
                  style={{transitionDelay: '700ms'}}
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

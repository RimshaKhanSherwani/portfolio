import React, { useState, useEffect, useRef } from 'react';
import { Github, Mail, ExternalLink, Code, Database, Smartphone, MapPin, Phone, Send } from 'lucide-react';
import { animateTechStack, createParticleSystem, initScrollAnimations } from '../../utils/animations';

// Import project images
import workspace01 from '../../assets/workspace/workspace01.png';
import workspace02 from '../../assets/workspace/workspace02.png';
import workspace03 from '../../assets/workspace/workspace03.png';
import serviceHub01 from '../../assets/serviceHub/serviceHub01.png';
import serviceHub02 from '../../assets/serviceHub/serviceHub02.png';
import serviceHub03 from '../../assets/serviceHub/serviceHub03.png';
import mt301 from '../../assets/mt3/mt301.png';
import mt302 from '../../assets/mt3/mt302.png';
import mt303 from '../../assets/mt3/mt303.png';
import taulead01 from '../../assets/taulead/taulead01.png';
import taulead02 from '../../assets/taulead/taulead02.png';
import taulead03 from '../../assets/taulead/taulead03.png';

// Image mapping objects for each project
const projectImages = {
  // Main images (image 1)
  mainImages: {
    1: workspace01,
    2: serviceHub01,
    3: mt301,
    4: taulead01
  },
  // Secondary images (image 2)
  secondaryImages: {
    1: workspace02,
    2: serviceHub02,
    3: mt302,
    4: taulead02
  },
  // Tertiary images (image 3)
  tertiaryImages: {
    1: workspace03,
    2: serviceHub03,
    3: mt303,
    4: taulead03
  }
};

const getProjectImage = (imageType, projectId) => {
  const imageMap = projectImages[imageType];
  return imageMap[projectId] || Object.values(imageMap)[0];
};

export const ProjectsSection = ({ projectsRef }) => {
  const projectsContainerRef = useRef(null);
  const techStackRef = useRef(null);

  useEffect(() => {
    const cleanup = initScrollAnimations();

    if (projectsContainerRef.current) {
      createParticleSystem(projectsContainerRef.current, 30);
    }

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
      title: "Workspace - HR portal System",
      description: "A comprehensive HR portal system designed to streamline Human Resource Management (HRM) processes, offering features for employee management, leave tracking, attendance/checkout management.",
      technologies: ["React", "Material UI", "Tailwind CSS", "Express.JS", "MongoDB", "Redux"],
      category: "Full Stack",
      icon: Database,
      features: [
        "Employee management",
        "TimeOff management",
        "Attendance/checkout management",
      ]
    },
    {
      id: 2,
      title: "ServiceHub - IT Service Management System",
      description: "A comprehensive IT service management system designed to streamline device tracking, maintenance, asset lifecycle management, and schedule management for organizations.",
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
      id: 3,
      title: "GetMt3 - Customer Ordering Management System",
      description: "A customer ordering management system built with React and TypeScript, offering a seamless ordering customized product experience for customers with 3D editing and 3D preview features.",
      technologies: ["React", "TypeScript", "WebSocket", "Socket.IO", "Tailwind CSS", "Node.JS"],
      category: "Real-time App",
      icon: Smartphone,
      features: [
        "Customized product experience",
        "3D editing and preview features",
        "Real-time ordering and payment processing",
        "User authentication and profiles"
      ]
    },
    {
      id: 4,
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

  const [selectedProject, setSelectedProject] = useState(projectsData[3]);

  return (
    <section id="projects" ref={projectsRef} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements with 3D tech shapes */}
      <div ref={projectsContainerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Circuit paths with animated ping effect */}
        <div className="absolute top-10 right-10 w-40 h-40 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M10,30 L40,30 L40,70 L70,70 L70,40 L90,40" className="circuit-path" />
            <circle cx="90" cy="40" r="2" className="circuit-node ping-circle" />
            <circle cx="40" cy="30" r="2" className="circuit-node ping-circle" style={{ animationDelay: '1s' }} />
            <circle cx="40" cy="70" r="2" className="circuit-node ping-circle" style={{ animationDelay: '2s' }} />
          </svg>
        </div>

        <div className="absolute bottom-20 left-20 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M20,20 L80,20 L80,80 L20,80 Z" className="circuit-path" />
            <circle cx="20" cy="20" r="2" className="circuit-node ping-circle" />
            <circle cx="80" cy="80" r="2" className="circuit-node ping-circle" style={{ animationDelay: '1.5s' }} />
          </svg>
        </div>

        {/* 3D Tech shapes */}
        <div className="absolute top-1/4 right-1/4 tech-shape tech-shape-cube scroll-animate" style={{ width: '60px', height: '60px', transform: 'rotate(15deg)' }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="tech-shape-face"></div>
          ))}
        </div>

        <div className="absolute bottom-1/3 left-1/3 tech-shape tech-shape-pyramid scroll-animate" style={{ width: '50px', height: '50px', animationDelay: '0.5s' }}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="tech-shape-face"></div>
          ))}
        </div>

        <div className="absolute top-2/3 right-1/3 tech-shape tech-shape-sphere scroll-animate" style={{ width: '40px', height: '40px', animationDelay: '1s' }}>
          <div className="tech-shape-core"></div>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="tech-shape-ring" style={{ transform: `rotateX(${i * 60}deg)` }}></div>
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
              className={`px-6 py-3 rounded-lg transition-all ${selectedProject.id === project.id
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                : "border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                }`}
            >
              {project.title.split(" - ")[0]}
            </button>
          ))}
        </div>

        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            <div className="md:w-2/5 bg-purple-500/5 backdrop-blur-lg border border-purple-500/20 rounded-xl p-8 flex flex-col scroll-animate" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-2xl font-bold mb-2 text-white">{selectedProject?.title}</h3>
              <div className="text-purple-300 mb-2">{selectedProject?.category}</div>
              <p className="text-gray-300 mb-6">{selectedProject?.description}</p>

              <h4 className="text-lg font-semibold mb-3 text-white">Key Features</h4>
              <div className="space-y-2 mb-6">
                {selectedProject?.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-purple-400 mr-2">•</div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <h4 className="text-lg font-semibold mb-3 text-white">Technologies</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject?.technologies.map((tech, index) => (
                  <span key={index} className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:w-3/5 bg-purple-500/5 backdrop-blur-lg border border-purple-500/20 rounded-xl p-8 flex flex-col scroll-animate" style={{ transitionDelay: '300ms' }}>
              {/* 3D tech shape in the corner */}
              <div className="absolute top-4 left-4 tech-shape tech-shape-prism" style={{ width: '40px', height: '40px', opacity: 0.2 }}>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="tech-shape-face"></div>
                ))}
              </div>

              <div className="flex-1 relative" style={{ minHeight: '300px' }}>
                {/* Project Images - Dynamic based on selected project */}
                {selectedProject && (
                  <div className="relative h-full">
                    {/* Main large image - positioned at the bottom left */}
                    <div className="absolute bottom-24 left-0 w-[65%] h-[60%] z-20 rounded-lg overflow-hidden shadow-lg">
                      <div className="w-full h-full object-cover bg-white/5 backdrop-blur-lg rounded-lg stretch">
                        <img
                          src={getProjectImage('mainImages', selectedProject.id)}
                          alt={`${selectedProject.title} Project Screenshot 1`}
                          className="w-full h-full object-fill"
                        />
                      </div>
                    </div>

                    {/* Top right image - positioned at the top right */}
                    <div className="absolute top-0 right-0 w-[60%] h-[45%] z-10 rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={getProjectImage('secondaryImages', selectedProject.id)}
                        alt={`${selectedProject.title} Project Screenshot 2`}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>

                    {/* Bottom right image - positioned at the bottom right */}
                    <div className="absolute bottom-0 right-0 w-[60%] h-[45%] z-10 rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={getProjectImage('tertiaryImages', selectedProject.id)}
                        alt={`${selectedProject.title} Project Screenshot 3`}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  </div>
                )}

                {/* Circuit path overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M10,50 L30,30 L70,30 L90,50 L70,70 L30,70 Z" className="circuit-path" />
                    <circle cx="10" cy="50" r="2" className="circuit-node ping-circle" />
                    <circle cx="90" cy="50" r="2" className="circuit-node ping-circle" style={{ animationDelay: '1.5s' }} />
                  </svg>
                </div>
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
            <path d="M30,30 L70,30 L70,70 L30,70 Z" className="circuit-path" style={{ animationDelay: '0.5s' }} />
            <circle cx="10" cy="10" r="2" className="circuit-node ping-circle" />
            <circle cx="90" cy="90" r="2" className="circuit-node ping-circle" style={{ animationDelay: '1s' }} />
            <circle cx="30" cy="30" r="2" className="circuit-node ping-circle" style={{ animationDelay: '1.5s' }} />
          </svg>
        </div>

        <div className="absolute bottom-20 right-20 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M20,50 C20,20 80,20 80,50 C80,80 20,80 20,50 Z" className="circuit-path" />
            <circle cx="20" cy="50" r="2" className="circuit-node ping-circle" />
            <circle cx="80" cy="50" r="2" className="circuit-node ping-circle" style={{ animationDelay: '1.2s' }} />
          </svg>
        </div>

        {/* 3D Tech shapes */}
        <div className="absolute top-1/3 left-1/4 tech-shape tech-shape-sphere scroll-animate" style={{ width: '50px', height: '50px' }}>
          <div className="tech-shape-core"></div>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="tech-shape-ring" style={{ transform: `rotateX(${i * 60}deg)` }}></div>
          ))}
        </div>

        <div className="absolute bottom-1/4 right-1/3 tech-shape tech-shape-pyramid scroll-animate" style={{ width: '40px', height: '40px', animationDelay: '0.7s' }}>
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

        <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
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
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
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

            <div className="bg-purple-500/5 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 scroll-animate" style={{ transitionDelay: '500ms' }}>
              {/* Circuit path background */}
              <div className="absolute top-4 right-4 w-20 h-20 opacity-10 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M20,20 C20,50 80,50 80,80" className="circuit-path" />
                  <circle cx="20" cy="20" r="2" className="circuit-node ping-circle" />
                  <circle cx="80" cy="80" r="2" className="circuit-node ping-circle" style={{ animationDelay: '1.2s' }} />
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

          {/* <div>
            <div className="bg-purple-500/5 backdrop-blur-lg border border-purple-500/20 rounded-xl p-8 scroll-animate" style={{ transitionDelay: '300ms' }}>
              <div className="absolute top-4 right-4 tech-shape tech-shape-cube" style={{ width: '30px', height: '30px', opacity: 0.2 }}>
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="tech-shape-face"></div>
                ))}
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-purple-400">Send a Message</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="scroll-animate" style={{ transitionDelay: '400ms' }}>
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

                <div className="scroll-animate" style={{ transitionDelay: '500ms' }}>
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

                <div className="scroll-animate" style={{ transitionDelay: '600ms' }}>
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
                  style={{ transitionDelay: '700ms' }}
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div> */}


        </div>
      </div>
    </section>
  );
};

import React, { useEffect, useRef } from 'react';
import { Code, Users, Lightbulb, Target, Calendar, MapPin, Briefcase } from 'lucide-react';
import { animateTextReveal, animateTechStack } from '../../utils/animations';

// Reusable animation components
export const FloatingCube = ({ className = "", delay = 0 }) => (
  <div 
    className={`absolute w-8 h-8 border border-purple-400/30 transform rotate-45 animate-pulse ${className}`}
    style={{ 
      animationDelay: `${delay}ms`,
      background: 'linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(168, 85, 247, 0.1))'
    }}
  />
);

export const TechGrid = ({ className = "" }) => (
  <div className={`absolute ${className}`}>
    <div className="grid grid-cols-3 gap-2 opacity-20">
      {Array.from({ length: 9 }).map((_, i) => (
        <div 
          key={i} 
          className="w-3 h-3 border border-purple-400/50 animate-pulse"
          style={{ animationDelay: `${i * 100}ms` }}
        />
      ))}
    </div>
  </div>
);

export const CircuitPath = ({ className = "" }) => (
  <svg className={`absolute ${className}`} viewBox="0 0 100 100" width="100" height="100">
    <path
      d="M10,10 L90,10 L90,50 L50,50 L50,90 L10,90 Z"
      fill="none"
      stroke="rgba(147, 51, 234, 0.3)"
      strokeWidth="1"
      className="animate-pulse"
    />
    <circle cx="10" cy="10" r="2" fill="rgb(168, 85, 247)" className="animate-ping" />
    <circle cx="90" cy="10" r="2" fill="rgb(168, 85, 247)" className="animate-ping" style={{ animationDelay: '0.5s' }} />
    <circle cx="50" cy="50" r="2" fill="rgb(168, 85, 247)" className="animate-ping" style={{ animationDelay: '1s' }} />
  </svg>
);

export const AboutSection = ({ aboutRef }) => {
  const textRevealRef = useRef(null);
  const techStackRef = useRef(null);
  
  useEffect(() => {
    // Initialize text reveal animation
    if (textRevealRef.current) {
      animateTextReveal(textRevealRef.current);
    }
    
    // Initialize tech stack animation
    if (techStackRef.current) {
      animateTechStack(techStackRef.current);
    }
  }, []);
  
  const skills = [
    { category: "Frontend", items: ["React.JS", "TypeScript", "JavaScript", "HTML5", "CSS3"] },
    { category: "Styling", items: ["Tailwind CSS", "CSS-in-JS", "Styled Components"] },
    { category: "Libraries", items: ["Ant Design", "Material UI", "Storybook"] },
    { category: "State Management", items: ["Redux", "Jotai", "Recoil", "Context API"] },
    { category: "Backend", items: ["Node.js", "Express.js", "GraphQL"] },
    { category: "Database", items: ["MongoDB", "MySQL"] },
    { category: "Tools", items: ["GitHub", "React Testing Library", "Netlify"] }
  ];

  const highlights = [
    { icon: Code, title: "3+ Years Experience", description: "Building modern, responsive web applications" },
    { icon: Users, title: "Team Collaboration", description: "Cross-team collaboration and agile practices" },
    { icon: Lightbulb, title: "Problem Solver", description: "Transforming complex designs into intuitive UX" },
    { icon: Target, title: "Performance Focused", description: "High-performance, scalable frontend solutions" }
  ];

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* 3D Tech Shapes */}
      <div className="tech-shape tech-shape-prism absolute top-10 left-10 w-16 h-16 opacity-40"></div>
      <div className="tech-shape tech-shape-sphere absolute bottom-10 right-10 w-20 h-20 opacity-30"></div>
      
      {/* Circuit Path */}
      <svg className="circuit-path absolute top-1/4 right-1/5" width="200" height="200" viewBox="0 0 100 100">
        <path d="M10,10 Q50,20 90,10 T50,90 T10,10" stroke="rgba(147, 51, 234, 0.2)" strokeWidth="1" fill="none" />
        <circle cx="10" cy="10" r="2" fill="rgba(168, 85, 247, 0.6)" className="animate-ping" />
        <circle cx="90" cy="10" r="2" fill="rgba(168, 85, 247, 0.6)" className="animate-ping" style={{ animationDelay: '0.8s' }} />
        <circle cx="50" cy="90" r="2" fill="rgba(168, 85, 247, 0.6)" className="animate-ping" style={{ animationDelay: '1.6s' }} />
      </svg>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto" ref={textRevealRef}>
            A passionate frontend developer dedicated to creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="minimal-card bg-purple-500/5 backdrop-blur-lg border border-purple-500/20 rounded-xl p-8 scroll-animate">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">My Journey</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Motivated and adaptable Frontend Developer with strong experience in building 
                modern web applications using React.js and TypeScript. Passionate about creating 
                intuitive user interfaces and delivering exceptional user experiences.
              </p>
              <p className="text-white/70 leading-relaxed">
                I specialize in developing responsive, high-performance web applications with 
                clean, maintainable code. My approach combines technical expertise with creative 
                problem-solving to deliver solutions that exceed expectations.
              </p>
              
              {/* Subtle tech shape in the background */}
              <div className="tech-shape tech-shape-cube absolute bottom-4 right-4 w-10 h-10 opacity-20"></div>
            </div>

            <div className="minimal-card bg-purple-500/5 backdrop-blur-lg border border-purple-500/20 rounded-xl p-8 scroll-animate scroll-animate-delay-1 relative">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Personal Info</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Date of Birth</p>
                    <p className="text-white">May 15, 1995</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Location</p>
                    <p className="text-white">New York, USA</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Employment</p>
                    <p className="text-white">Available for hire</p>
                  </div>
                </div>
              </div>
              
              {/* Circuit path in the background */}
              <svg className="circuit-path absolute bottom-2 right-2 opacity-20" width="100" height="100" viewBox="0 0 100 100">
                <path d="M10,10 L90,10 L90,90 L10,90 Z" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="1" fill="none" />
                <circle cx="10" cy="10" r="2" fill="rgba(168, 85, 247, 0.6)" className="animate-ping" />
                <circle cx="90" cy="90" r="2" fill="rgba(168, 85, 247, 0.6)" className="animate-ping" style={{ animationDelay: '1s' }} />
              </svg>
            </div>
          </div>

          <div>
            <div className="minimal-card bg-purple-500/5 backdrop-blur-lg border border-purple-500/20 rounded-xl p-8 h-full scroll-animate scroll-animate-delay-2 relative">
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">Skills & Expertise</h3>
              
              <div className="space-y-6" ref={techStackRef}>
                {skills.map((skillGroup, groupIndex) => (
                  <div key={skillGroup.category} className="tech-stack-group" style={{ animationDelay: `${groupIndex * 200}ms` }}>
                    <h4 className="text-lg font-medium text-white mb-3">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span 
                          key={skill}
                          className="tech-stack-item bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 px-3 py-1 rounded-full text-sm hover:scale-105 transition-transform"
                          style={{ animationDelay: `${groupIndex * 200 + skillIndex * 100}ms` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Tech grid in the background */}
              <div className="tech-grid absolute bottom-4 right-4 opacity-20">
                <div className="grid grid-cols-3 gap-1">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="tech-grid-item w-2 h-2"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-purple-400 scroll-animate">Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div 
                  key={highlight.title} 
                  className="minimal-card bg-purple-500/5 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 flex flex-col items-center text-center scroll-animate relative overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Tech shape in the background */}
                  <div className={`tech-shape tech-shape-${index % 2 === 0 ? 'cube' : 'prism'} absolute ${index % 2 === 0 ? 'top-2 right-2' : 'bottom-2 left-2'} w-8 h-8 opacity-10`}></div>
                  
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 relative">
                    <Icon className="h-8 w-8 text-white" />
                    {/* Subtle orbit effect */}
                    <div className="absolute inset-0 rounded-full border border-purple-400/20 animate-[spin_10s_linear_infinite]"></div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-white">{highlight.title}</h4>
                  <p className="text-white/70">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export const ExperienceSection = ({ experienceRef }) => {
  const timelineRef = useRef(null);
  const projectsRef = useRef(null);
  
  useEffect(() => {
    // Initialize scroll animations for timeline items
    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    if (timelineItems) {
      timelineItems.forEach((item, index) => {
        const delay = index * 200;
        item.style.transitionDelay = `${delay}ms`;
        item.classList.add('scroll-animate');
      });
    }
    
    // Initialize scroll animations for project cards
    const projectCards = projectsRef.current?.querySelectorAll('.project-card');
    if (projectCards) {
      projectCards.forEach((card, index) => {
        const delay = index * 150;
        card.style.transitionDelay = `${delay}ms`;
        card.classList.add('scroll-animate');
      });
    }
  }, []);
  
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "EmbraceIT Pvt Ltd",
      duration: "Jan 2022 - Present",
      location: "Remote",
      type: "Full-time",
      achievements: [
        "Led the frontend development of an HR management portal used by 500+ employees",
        "Improved application performance by 40% through code optimization and lazy loading",
        "Mentored junior developers and conducted code reviews to ensure quality standards",
        "Implemented CI/CD pipelines that reduced deployment time by 60%"
      ],
      technologies: ["React", "TypeScript", "Redux", "Material UI", "Jest", "GitHub Actions"]
    },
    {
      title: "Frontend Developer",
      company: "TechSolutions Inc.",
      duration: "Mar 2020 - Dec 2021",
      location: "Islamabad, Pakistan",
      type: "Full-time",
      achievements: [
        "Developed responsive web applications for clients in finance and healthcare sectors",
        "Created reusable component libraries that increased development speed by 30%",
        "Collaborated with UX designers to implement pixel-perfect interfaces",
        "Integrated RESTful APIs and GraphQL endpoints for data fetching"
      ],
      technologies: ["React", "JavaScript", "CSS3", "SASS", "RESTful APIs", "Git"]
    },
    {
      title: "Web Development Intern",
      company: "Digital Crafters",
      duration: "Jun 2019 - Sep 2019",
      location: "Islamabad, Pakistan",
      type: "Internship",
      achievements: [
        "Assisted in developing landing pages for marketing campaigns",
        "Learned modern frontend development practices in a professional environment",
        "Contributed to the company's internal dashboard project"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"]
    }
  ];

  const projects = [
    {
      title: "HR Management Portal",
      description: "A comprehensive HR portal with employee profiles, attendance tracking, and performance reviews",
      technologies: ["React", "TypeScript", "Redux", "Material UI"]
    },
    {
      title: "E-commerce Dashboard",
      description: "Admin dashboard for managing products, orders, and customer data with analytics",
      technologies: ["React", "JavaScript", "Chart.js", "Styled Components"]
    },
    {
      title: "Healthcare Appointment System",
      description: "Patient appointment scheduling and management system with doctor availability",
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    }
  ];

  return (
    <section id="experience" ref={experienceRef} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* 3D Tech Shapes */}
      <div className="tech-shape tech-shape-pyramid absolute top-20 right-20 w-16 h-16 opacity-30"></div>
      <div className="tech-shape tech-shape-sphere absolute bottom-40 left-20 w-12 h-12 opacity-20"></div>
      
      {/* Circuit Path */}
      <svg className="circuit-path absolute top-1/3 right-10" width="200" height="200" viewBox="0 0 100 100">
        <path d="M10,10 Q50,50 10,90 T90,50 T10,10" stroke="rgba(147, 51, 234, 0.2)" strokeWidth="1" fill="none" />
        <circle cx="10" cy="10" r="2" fill="rgba(168, 85, 247, 0.6)" className="animate-ping" />
        <circle cx="10" cy="90" r="2" fill="rgba(168, 85, 247, 0.6)" className="animate-ping" style={{ animationDelay: '1.2s' }} />
        <circle cx="90" cy="50" r="2" fill="rgba(168, 85, 247, 0.6)" className="animate-ping" style={{ animationDelay: '2.4s' }} />
      </svg>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Work <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            My professional journey and career highlights
          </p>
        </div>

        <div className="mb-20" ref={timelineRef}>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.title} className="timeline-item minimal-card bg-purple-500/5 backdrop-blur-lg border border-purple-500/20 rounded-xl p-8 relative">
                {/* Vertical timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-[2.5rem] top-[5.5rem] bottom-[-3rem] w-0.5 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
                )}
                
                <div className="mb-6">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mt-1 relative z-10">
                      <Briefcase className="h-5 w-5 text-white" />
                      {/* Subtle orbit effect */}
                      <div className="absolute inset-0 rounded-full border border-purple-400/20 animate-[spin_15s_linear_infinite]"></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                      <p className="text-lg font-medium text-purple-400">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-white/70 mb-4 ml-13">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                    <span className="border border-purple-400 text-purple-400 px-2 py-1 rounded text-xs">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="ml-13">
                  <div className="mb-6">
                    <h5 className="font-semibold mb-3 text-white">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-white/70 flex items-start gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-3 text-white">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={tech}
                          className="tech-stack-item bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 px-3 py-1 rounded-full text-sm hover:scale-105 transition-transform"
                          style={{ animationDelay: `${techIndex * 100}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Tech shape in the background */}
                <div className={`tech-shape tech-shape-${index % 2 === 0 ? 'cube' : 'prism'} absolute ${index % 2 === 0 ? 'bottom-4 right-4' : 'top-4 right-4'} w-10 h-10 opacity-10`}></div>
              </div>
            ))}
          </div>
        </div>

        <div ref={projectsRef}>
          <h3 className="text-2xl font-semibold mb-8 text-center text-purple-400 scroll-animate">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title} 
                className="project-card minimal-card bg-purple-500/5 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 h-full flex flex-col relative overflow-hidden"
              >
                {/* Circuit path in the background */}
                <svg className="circuit-path absolute top-2 right-2 opacity-10" width="60" height="60" viewBox="0 0 100 100">
                  <path d="M10,10 L90,10 L90,90 L10,90 Z" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="1" fill="none" />
                  <circle cx="10" cy="10" r="2" fill="rgba(168, 85, 247, 0.6)" className="animate-ping" />
                </svg>
                
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-3 text-purple-400">{project.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">{project.description}</p>
                </div>
                
                <div>
                  <h5 className="font-medium mb-2 text-sm text-white">Technologies:</h5>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={tech}
                        className="tech-stack-item border border-purple-400/30 text-purple-300 px-2 py-1 rounded text-xs hover:bg-purple-400/10 transition-colors"
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

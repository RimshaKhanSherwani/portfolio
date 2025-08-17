import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Front End Developer (Full time Job)",
    company: "EmbraceIT Pvt Ltd",
    location: "Gulberg Greens, Islamabad",
    duration: "April 2024 - 2025",
    type: "Full-time",
    achievements: [
      "Developed a front-end of an HR portal using Recoil with Relay for state and data management within React, TypeScript and Styled-components for dynamic styling.",
      "Implemented Ant Design components to deliver a professional and consistent interface. Utilised Storybook to design, test, and refine UI components, ensuring functional accuracy and design consistency.",
      "Integrated AntV Plots for statistics for an interactive, and user-friendly user experience.",
      "Integrated GraphQL for efficient data fetching and React Testing Library for components & template level test cases."
    ],
    technologies: ["React", "TypeScript", "Recoil", "Relay", "Ant Design", "Storybook", "GraphQL", "AntV Plots"]
  },
  {
    title: "Front End Developer (Internship)",
    company: "EmbraceIT Pvt Ltd", 
    location: "Gulberg Greens, Islamabad",
    duration: "May 2023 - Jan 2024",
    type: "Internship",
    achievements: [
      "Developed a tau-lead software project during the internship, collaborated via GitHub with leads to follow agile practices, conduct code reviews, and ensure industry-standard developed softwares for future exciting and market-driven softwares"
    ],
    technologies: ["React", "JavaScript", "GitHub", "Agile"]
  }
];

const projects = [
  {
    title: "EquipHub - Hardware Management System",
    description: "Developed a hardware management and data centralisation system to streamline device tracking, maintenance, asset lifecycle management and schedule managment.",
    technologies: ["React", "Material UI", "Tailwind", "Express.JS", "MongoDB", "Redux"]
  },
  {
    title: "letsChat - Real-Time Messaging Application", 
    description: "Developed a real-time chat app using React, TypeScript, WebSocket (Socket.IO), with simply tailwind for UI with features like private/group messaging, typing indicators, and responsive design.",
    technologies: ["React", "TypeScript", "WebSocket", "Socket.IO", "Tailwind", "Node.JS"]
  },
  {
    title: "tau-lead - Manufacturing Resource Pipeline Management System",
    description: "Developed Tau Lead, an MRP-based software for management of manufacturing businesses processes, with essential features to manage resources similar to SAP while remaining modular-less, user-friendly, and cost-effective.",
    technologies: ["React.JS", "Ant Design", "Node/Express.JS", "SQL", "MongoDB"]
  }
];

export const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My journey in frontend development and the projects I've contributed to
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8 text-center gradient-text">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className={`glass-card hover-lift border-0 shadow-lg transition-all duration-500 ${isVisible ? 'animate-slide-in-left' : ''}`} style={{ animationDelay: `${index * 200}ms` }}>
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mt-1">
                            <Briefcase className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                            <p className="text-lg font-medium gradient-text">{exp.company}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ml-13">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                          <Badge variant="outline" className="border-primary text-primary">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="ml-13">
                      <div className="mb-6">
                        <h5 className="font-semibold mb-3">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-muted-foreground flex items-start gap-2">
                              <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-3">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge 
                              key={tech}
                              variant="secondary" 
                              className="bg-gradient-to-r from-primary-light to-secondary-light text-primary-dark border-0 hover:scale-105 transition-transform"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
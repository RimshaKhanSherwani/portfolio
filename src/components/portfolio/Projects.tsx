import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code, Database, Smartphone } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "EquipHub - Hardware Management System",
    description: "A comprehensive hardware management and data centralization system designed to streamline device tracking, maintenance, asset lifecycle management, and schedule management for organizations.",
    longDescription: "EquipHub revolutionizes hardware asset management by providing a centralized platform for tracking devices throughout their lifecycle. The system includes features for maintenance scheduling, real-time status monitoring, and comprehensive reporting.",
    technologies: ["React", "Material UI", "Tailwind CSS", "Express.JS", "MongoDB", "Redux"],
    category: "Full Stack",
    icon: Database,
    features: [
      "Real-time device tracking and monitoring",
      "Automated maintenance scheduling",
      "Asset lifecycle management",
      "Comprehensive reporting dashboard",
      "Multi-user role management"
    ],
    image: "/api/placeholder/600/400"
  },
  {
    id: 2,
    title: "letsChat - Real-Time Messaging App",
    description: "A modern real-time messaging application built with React and TypeScript, featuring private/group messaging, typing indicators, and responsive design for seamless communication.",
    longDescription: "letsChat provides a seamless messaging experience with real-time communication capabilities. Built with modern web technologies, it offers both private and group messaging with intuitive user interface.",
    technologies: ["React", "TypeScript", "WebSocket", "Socket.IO", "Tailwind CSS", "Node.JS"],
    category: "Real-time App",
    icon: Smartphone,
    features: [
      "Real-time private and group messaging",
      "Typing indicators and online status",
      "Responsive design for all devices",
      "Message history and persistence",
      "User authentication and profiles"
    ],
    image: "/api/placeholder/600/400"
  },
  {
    id: 3,
    title: "tau-lead - MRP Management System",
    description: "An advanced Manufacturing Resource Planning (MRP) software designed for manufacturing businesses, offering SAP-like functionality while maintaining modularity, user-friendliness, and cost-effectiveness.",
    longDescription: "tau-lead is a comprehensive MRP solution that helps manufacturing businesses manage their resources efficiently. It provides essential features for production planning, inventory management, and resource allocation.",
    technologies: ["React.JS", "Ant Design", "Node/Express.JS", "SQL", "MongoDB"],
    category: "Enterprise",
    icon: Code,
    features: [
      "Production planning and scheduling",
      "Inventory and resource management",
      "Real-time analytics and reporting",
      "Multi-location support",
      "Integration capabilities"
    ],
    image: "/api/placeholder/600/400"
  }
];

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);
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
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing my expertise through innovative solutions and technical excellence
            </p>
          </div>

          {/* Project Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projectsData.map((project, index) => (
              <Button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                variant={selectedProject.id === project.id ? "default" : "outline"}
                className={`px-6 py-3 transition-all duration-300 ${
                  selectedProject.id === project.id
                    ? "bg-gradient-to-r from-primary to-secondary text-white border-0 shadow-lg"
                    : "border-primary text-primary hover:bg-primary hover:text-white"
                } hover-lift`}
              >
                {project.title.split(" - ")[0]}
              </Button>
            ))}
          </div>

          {/* Featured Project Display */}
          <div className="mb-16">
            <Card className={`glass-card border-0 shadow-xl overflow-hidden transition-all duration-500 ${isVisible ? 'animate-scale-in' : ''}`}>
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center h-64 lg:h-auto">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <selectedProject.icon className="h-12 w-12 text-white" />
                    </div>
                    <Badge className="bg-gradient-to-r from-primary-light to-secondary-light text-primary-dark border-0">
                      {selectedProject.category}
                    </Badge>
                  </div>
                </div>

                {/* Project Details */}
                <CardContent className="p-8 lg:p-12">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 gradient-text">
                    {selectedProject.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {selectedProject.longDescription}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="text-muted-foreground flex items-start gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
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

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary text-white border-0 hover-lift">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white hover-lift">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* All Projects Grid */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center gradient-text">All Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.map((project, index) => {
                const Icon = project.icon;
                return (
                  <Card 
                    key={project.id} 
                    className={`glass-card hover-lift border-0 shadow-lg h-full cursor-pointer transition-all duration-500 group ${isVisible ? 'animate-slide-in-left' : ''}`}
                    style={{ animationDelay: `${index * 150}ms` }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {project.title.split(" - ")[0]}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge 
                            key={tech}
                            variant="outline" 
                            className="text-xs border-primary/30 text-primary"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
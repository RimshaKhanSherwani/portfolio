import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Mail, ExternalLink, Download } from "lucide-react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-accent/30 to-secondary-light/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl animate-pulse-soft"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Profile Image */}
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary p-1 animate-scale-in">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-4xl font-bold gradient-text">
                RS
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Rimsha</span>{" "}
              <span className="text-foreground">Sherwani</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
              Frontend Developer & React.JS Specialist
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Crafting exceptional user experiences with modern web technologies. 
              Specialized in React, TypeScript, and building scalable frontend solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary text-white border-0 px-8 py-3 text-lg font-semibold hover-lift shadow-lg"
              >
                View My Work
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg font-semibold hover-lift"
              >
                Get In Touch
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex justify-center gap-6">
              <a 
                href="https://github.com/RimshaKhanSherwani" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover-lift transition-all duration-300 hover:scale-110"
              >
                <Github className="h-6 w-6 text-foreground" />
              </a>
              <a 
                href="mailto:rimshasherwani@gmail.com"
                className="p-3 rounded-full glass-card hover-lift transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-6 w-6 text-foreground" />
              </a>
              <button className="p-3 rounded-full glass-card hover-lift transition-all duration-300 hover:scale-110">
                <Download className="h-6 w-6 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-primary to-secondary rounded-full mt-2 animate-pulse-soft"></div>
        </div>
      </div>
    </section>
  );
};
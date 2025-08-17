import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Lightbulb, Target } from "lucide-react";

const skills = [
  { category: "Frontend", items: ["React.JS", "TypeScript", "JavaScript (ES6)", "HTML5", "CSS3"] },
  { category: "Styling", items: ["Tailwind CSS", "CSS-in-JS", "Styled Components", "Responsive Design"] },
  { category: "Libraries", items: ["Ant Design", "Material UI", "Fabric.JS", "AntV Plot", "Storybook"] },
  { category: "State Management", items: ["Redux", "Jotai", "Recoil", "Context API"] },
  { category: "Backend", items: ["Node.js", "Express.js", "RESTful APIs", "GraphQL"] },
  { category: "Database", items: ["MongoDB", "MySQL"] },
  { category: "Tools", items: ["GitHub", "React Testing Library", "Netlify"] }
];

const highlights = [
  {
    icon: Code,
    title: "3+ Years Experience",
    description: "Building modern, responsive web applications with clean, maintainable code"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Experienced in cross-team collaboration and agile development practices"
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Passionate about transforming complex designs into intuitive user experiences"
  },
  {
    icon: Target,
    title: "Performance Focused",
    description: "Committed to delivering high-performance, scalable frontend solutions"
  }
];

export const About = () => {
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
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate frontend developer dedicated to creating exceptional digital experiences
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Description */}
            <div className="space-y-6">
              <Card className="glass-card hover-lift border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 gradient-text">My Journey</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Motivated and adaptable Frontend Developer with strong experience in building 
                    user-focused web applications and enterprise interfaces. I excel at transforming 
                    designs into responsive, high-performance components while maintaining clean, 
                    scalable code.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Currently working as a Frontend Developer at EmbraceIT Pvt Ltd, where I've 
                    developed HR portals, customer management systems, and real-time applications. 
                    I'm passionate about continuous learning and applying modern development practices 
                    to deliver intuitive user experiences.
                  </p>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="glass-card hover-lift border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 gradient-text">Education</h3>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Bachelor of Science in Software Engineering</h4>
                    <p className="text-muted-foreground">Riphah International University - Gulberg Greens, Islamabad</p>
                    <p className="text-sm text-muted-foreground">Jan 2020 - Dec 2024 | GPA: 3.85/4.00</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skillGroup, index) => (
                  <Card key={skillGroup.category} className={`glass-card hover-lift border-0 shadow-lg transition-all duration-500 ${isVisible ? 'animate-slide-in-right' : ''}`} style={{ animationDelay: `${index * 100}ms` }}>
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-primary mb-3">{skillGroup.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <Badge 
                            key={skill}
                            variant="secondary" 
                            className="bg-gradient-to-r from-primary-light to-secondary-light text-primary-dark border-0 hover:scale-105 transition-transform"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={highlight.title} className={`glass-card hover-lift border-0 shadow-lg text-center transition-all duration-500 ${isVisible ? 'animate-scale-in' : ''}`} style={{ animationDelay: `${(index + 1) * 150}ms` }}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
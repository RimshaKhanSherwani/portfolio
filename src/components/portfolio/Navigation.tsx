import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Mail } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
          >
            Rimsha Sherwani
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors hover:text-primary relative ${
                  activeSection === item.href.substring(1) 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <div className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Social Links & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Social Links - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://github.com/RimshaKhanSherwani"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass-card hover-lift transition-all duration-300 hover:scale-110"
              >
                <Github className="h-4 w-4 text-foreground" />
              </a>
              <a
                href="mailto:rimshasherwani@gmail.com"
                className="p-2 rounded-full glass-card hover-lift transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-4 w-4 text-foreground" />
              </a>
              <a
                href="/modern"
                className="px-3 py-1 rounded-lg glass-card hover-lift transition-all duration-300 text-xs font-medium"
              >
                Modern Portfolio
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.href.substring(1) 
                      ? 'text-primary' 
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <a
                  href="https://github.com/RimshaKhanSherwani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass-card hover-lift transition-all duration-300"
                >
                  <Github className="h-4 w-4 text-foreground" />
                </a>
                <a
                  href="mailto:rimshasherwani@gmail.com"
                  className="p-2 rounded-full glass-card hover-lift transition-all duration-300"
                >
                  <Mail className="h-4 w-4 text-foreground" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
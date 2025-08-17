import { Github, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary/5 to-secondary/5 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-2">Rimsha Sherwani</h3>
            <p className="text-muted-foreground">Frontend Developer & React.JS Specialist</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/RimshaKhanSherwani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover-lift transition-all duration-300 hover:scale-110 group"
            >
              <Github className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:rimshasherwani@gmail.com"
              className="p-3 rounded-full glass-card hover-lift transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="mb-8">
            <p className="text-muted-foreground mb-2">
              <a href="mailto:rimshasherwani@gmail.com" className="hover:text-primary transition-colors">
                rimshasherwani@gmail.com
              </a>
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-muted-foreground">
            <p>© 2024 Rimsha Sherwani. All rights reserved.</p>
            <div className="flex items-center gap-1">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using React & TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
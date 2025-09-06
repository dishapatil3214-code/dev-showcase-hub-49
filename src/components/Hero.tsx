import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center gradient-hero">
      <div className="container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm bg-white/20 text-white border-white/30 hover:bg-white/30">
            Computer Science Student
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Disha Patil
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
            Passionate web developer creating innovative solutions with modern technologies. 
            Experienced in building responsive web applications and AI-driven platforms.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-white/90">
              <MapPin size={18} />
              <span>Nagpur, Maharashtra</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Mail size={18} />
              <span>patildisha215@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Phone size={18} />
              <span>+91 7620661326</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              onClick={() => scrollToSection("projects")}
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-elegant px-8 py-3"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <a 
              href="#" 
              className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-smooth"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-smooth"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
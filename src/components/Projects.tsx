import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SecondHand",
      description: "A fully functional e-commerce website for buying and selling second-hand treasures. Built 100% using AI - no coding required. Promotes sustainability through reuse.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      category: "E-commerce",
      featured: true
    },
    {
      title: "Essentia",
      description: "A beautifully designed e-commerce website for discovering premium perfumes. Built entirely with AI - no code involved. Elegant and luxurious user experience.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      category: "E-commerce",
      featured: true
    },
    {
      title: "AI Image Generator",
      description: "A responsive website for generating images using AI. Built entirely with AI tools - no manual coding. Demonstrates the power of modern AI development.",
      technologies: ["CSS", "React", "JavaScript"],
      category: "AI Tool"
    },
    {
      title: "Maybelline Clone",
      description: "Built a web page replicating Maybelline using HTML and CSS. Designed layouts compatible with desktop using CSS Grid and Flexbox.",
      technologies: ["HTML", "CSS", "CSS Grid", "Flexbox"],
      category: "Clone"
    },
    {
      title: "Dribbble Clone",
      description: "CSS Grid and Flexbox-based layout for mobile and desktop. Responsive design implementation showcasing modern CSS techniques.",
      technologies: ["CSS Grid", "Flexbox", "CSS"],
      category: "Clone"
    },
    {
      title: "Zomato Clone",
      description: "Replicated Zomato's UI with responsive design. Clean and modern interface built with HTML, CSS, and Bootstrap framework.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      category: "Clone"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "E-commerce": "bg-green-100 text-green-800",
      "AI Tool": "bg-purple-100 text-purple-800",
      "Clone": "bg-blue-100 text-blue-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my web development journey, from traditional coding to AI-powered creation
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className={`gradient-card shadow-card hover:shadow-hover transition-smooth group cursor-pointer ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getCategoryColor(project.category)}>
                      {project.category}
                    </Badge>
                    {project.featured && (
                      <Badge variant="default" className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="text-xs px-2 py-1 bg-accent text-accent-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Priyadarshini College of Engineering, Nagpur",
      duration: "2023 – 2027",
      status: "Currently Pursuing",
      description: "Focused on software development, algorithms, and modern web technologies"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Kendriya Vidyalaya CRPF",
      duration: "2022 – 2023",
      status: "Completed",
      description: "Strong foundation in mathematics and computer science"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "St. Xavier's High School",
      duration: "2020 – 2021",
      status: "Completed",
      description: "Excellent academic performance with focus on STEM subjects"
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Education
            </h2>
            <p className="text-xl text-muted-foreground">
              Building a strong foundation in computer science and engineering
            </p>
          </div>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <Card 
                key={index} 
                className="gradient-card shadow-card hover:shadow-hover transition-smooth"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-start gap-4 mb-4 md:mb-0">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <GraduationCap size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-muted-foreground font-medium">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <Badge 
                        variant={edu.status === "Currently Pursuing" ? "default" : "secondary"}
                        className="px-3 py-1"
                      >
                        {edu.status}
                      </Badge>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{edu.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
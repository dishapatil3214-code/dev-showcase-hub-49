import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's create something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="gradient-card shadow-card hover:shadow-hover transition-smooth">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and collaborations. Whether you have a project in mind or just want to chat 
                  about technology, feel free to reach out!
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/50">
                    <div className="p-2 rounded-full bg-primary text-primary-foreground">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">patildisha215@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/50">
                    <div className="p-2 rounded-full bg-primary text-primary-foreground">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">+91 7620661326</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/50">
                    <div className="p-2 rounded-full bg-primary text-primary-foreground">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">Nagpur, Maharashtra</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-8">
                  <Button 
                    className="flex items-center gap-2 flex-1 bg-primary hover:bg-primary-hover text-primary-foreground"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 flex-1"
                  >
                    <Github size={18} />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card hover:shadow-hover transition-smooth">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Current Status
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <Badge variant="default" className="mb-3 px-3 py-1">
                      Available for Opportunities
                    </Badge>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm currently open to internships, freelance projects, and full-time 
                      opportunities in web development. Particularly interested in React, 
                      TypeScript, and AI-integrated applications.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-lg bg-gradient-accent border border-border">
                    <h4 className="font-semibold text-foreground mb-2">
                      What I'm Looking For
                    </h4>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li>• Frontend Developer Internships</li>
                      <li>• React/TypeScript Projects</li>
                      <li>• AI/ML Integration Opportunities</li>
                      <li>• Open Source Collaborations</li>
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full flex items-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground"
                  >
                    <Send size={18} />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
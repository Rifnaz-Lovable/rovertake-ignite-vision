import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Product Engineering",
      description: "Built a scalable e-commerce platform handling 10K+ daily transactions with advanced analytics and personalization features.",
      image: "/api/placeholder/600/400",
      results: ["300% increase in conversions", "99.9% uptime", "50% faster load times"],
      tech: ["React", "Node.js", "AWS", "PostgreSQL"]
    },
    {
      title: "Digital Banking App",
      category: "Digital Transformation",
      description: "Modernized legacy banking systems with a mobile-first approach and enhanced security protocols.",
      image: "/api/placeholder/600/400",
      results: ["2M+ active users", "40% cost reduction", "5-star app store rating"],
      tech: ["React Native", ".NET Core", "Azure", "MongoDB"]
    },
    {
      title: "SaaS Marketing Platform",
      category: "Growth Marketing",
      description: "Developed a comprehensive marketing automation platform with AI-powered insights and campaign optimization.",
      image: "/api/placeholder/600/400",
      results: ["500% ROI improvement", "80% time savings", "95% client retention"],
      tech: ["Vue.js", "Python", "TensorFlow", "Redis"]
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-accent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence and achieve remarkable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={project.title} className="group overflow-hidden hover:shadow-elegant transition-all duration-500 border-border/50 hover:border-accent/20 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="aspect-video bg-gradient-hero relative overflow-hidden">
                <div className="absolute inset-0 bg-navy/80 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <ExternalLink className="h-8 w-8 text-accent" />
                    </div>
                    <p className="text-sm opacity-75">{project.category}</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="ghost" className="group/btn text-accent hover:text-accent p-0">
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-up">
          <Button variant="hero" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
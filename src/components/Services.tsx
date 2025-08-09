import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  Code, 
  TrendingUp, 
  Palette, 
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Modernize your business processes and technology stack to stay competitive in the digital age.",
      features: ["Cloud Migration", "Process Automation", "Legacy System Modernization", "Digital Strategy"]
    },
    {
      icon: Code,
      title: "Product Engineering",
      description: "Build scalable, high-performance applications with cutting-edge technologies and best practices.",
      features: ["Web Applications", "Mobile Apps", "API Development", "DevOps & Infrastructure"]
    },
    {
      icon: TrendingUp,
      title: "Growth Marketing",
      description: "Drive sustainable growth with data-driven marketing strategies and performance optimization.",
      features: ["SEO & SEM", "Content Marketing", "Analytics & Insights", "Conversion Optimization"]
    },
    {
      icon: Palette,
      title: "Creative Strategy",
      description: "Create compelling brand experiences that resonate with your audience and drive engagement.",
      features: ["Brand Identity", "UI/UX Design", "Visual Strategy", "Content Creation"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={service.title} className="group hover:shadow-elegant transition-all duration-500 border-border/50 hover:border-accent/20 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="group/btn text-accent hover:text-accent">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
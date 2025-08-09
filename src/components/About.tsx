import { Button } from "@/components/ui/button";
import { Check, Users, Lightbulb, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We believe in building lasting relationships through transparency and collaboration."
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Every project is measured by its impact on your business goals and growth metrics."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-accent">Rovertake</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Founded with a vision to bridge the gap between innovative technology and business success, 
              Rovertake is your fresh digital innovation partner ready to tackle ambitious projects 
              with cutting-edge solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is simple: to help businesses innovate, transform, and grow through 
              strategic digital solutions that deliver measurable results. We combine the latest 
              technologies with creative problem-solving to build solutions that not only work 
              but excel in today's competitive digital landscape.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Fresh perspectives on digital challenges",
                "Latest technologies and modern frameworks",
                "Dedicated team of skilled developers and designers",
                "Agile development approach for faster delivery"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg">
                Meet Our Team
              </Button>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-8 animate-slide-in-left">
            <h3 className="text-2xl font-bold text-foreground mb-8">Why We're Different</h3>
            {values.map((value, index) => (
              <div key={value.title} className="flex space-x-4 p-6 rounded-lg bg-card shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="p-3 rounded-lg bg-accent/10">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
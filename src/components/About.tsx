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
              Rovertake has emerged as a trusted digital innovation partner for ambitious companies 
              worldwide.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is simple: to help businesses innovate, transform, and grow through 
              strategic digital solutions that deliver measurable results. We combine technical 
              expertise with business acumen to create solutions that not only work but thrive 
              in the competitive digital landscape.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "5+ years of industry experience",
                "50+ successful projects delivered",
                "Expert team of developers, designers, and strategists",
                "Proven track record with Fortune 500 companies"
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
            <h3 className="text-2xl font-bold text-foreground mb-8">Our Core Values</h3>
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
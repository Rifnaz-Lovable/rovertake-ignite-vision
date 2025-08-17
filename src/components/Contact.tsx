import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  Send
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your digital presence? Let's discuss your project and explore how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-elegant border-border/50 animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">Start Your Project</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                  <Input placeholder="John" className="border-border/50 focus:border-accent" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                  <Input placeholder="Doe" className="border-border/50 focus:border-accent" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <Input type="email" placeholder="john@company.com" className="border-border/50 focus:border-accent" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Company</label>
                <Input placeholder="Your Company" className="border-border/50 focus:border-accent" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Project Type</label>
                <select className="w-full p-3 border border-border/50 rounded-md focus:outline-none focus:border-accent bg-background text-foreground">
                  <option>Digital Transformation</option>
                  <option>Product Engineering</option>
                  <option>Growth Marketing</option>
                  <option>Creative Strategy</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us about your project..." 
                  className="min-h-[120px] border-border/50 focus:border-accent resize-none"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full group">
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking to transform your business digitally or need expert guidance on your next project, 
                we're here to help. Reach out to us through any of the channels below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">info@rovertake.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground">+94 71 7100072</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Colombo • Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border/50">
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/rovertake/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors duration-300 group">
                  <Linkedin className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://x.com/_rovertake" className="p-3 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors duration-300 group">
                  <Twitter className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="p-3 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors duration-300 group">
                  <Github className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Founder CTA */}
            <Card className="bg-gradient-hero text-white border-0">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-2">Meet Our Founder</h4>
                <p className="text-gray-300 mb-4">
                  Connect directly with Rifnaz, our CEO and founder, to discuss your vision and explore partnership opportunities.
                </p>
                <Button variant="outline-hero" size="sm" asChild>
                  <a href="https://www.rifnaz.com" target="_blank" rel="noopener noreferrer">
                    Visit rifnaz.com
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

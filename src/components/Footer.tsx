import { Linkedin, Twitter, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "Digital Transformation", href: "#" },
    { name: "Product Engineering", href: "#" },
    { name: "Growth Marketing", href: "#" },
    { name: "Creative Strategy", href: "#" }
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/9acd67ad-b7fb-48a1-9263-6ae46770d2c8.png" 
              alt="Rovertake" 
              className="h-10 w-auto mb-6"
            />
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Your trusted partner for digital innovation, transformation, and growth. 
              We help businesses thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.rifnaz.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-accent/20 transition-colors duration-300 group">
                <Linkedin className="h-5 w-5 text-white group-hover:text-accent transition-colors" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-accent/20 transition-colors duration-300 group">
                <Twitter className="h-5 w-5 text-white group-hover:text-accent transition-colors" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-accent/20 transition-colors duration-300 group">
                <Github className="h-5 w-5 text-white group-hover:text-accent transition-colors" />
              </a>
              <a href="mailto:hello@rovertake.com" className="p-2 rounded-lg bg-white/10 hover:bg-accent/20 transition-colors duration-300 group">
                <Mail className="h-5 w-5 text-white group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-accent transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href} 
                    className="text-gray-300 hover:text-accent transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Rovertake. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Responsive */}
          <div className="flex items-center">
            {/* Desktop Logo */}
            <img 
              src="/lovable-uploads/9acd67ad-b7fb-48a1-9263-6ae46770d2c8.png" 
              alt="Rovertake" 
              className="h-8 w-auto hidden sm:block"
            />
            {/* Mobile Logo - R icon */}
            <img 
              src="/lovable-uploads/bbe63455-6c62-4947-9938-8e4e8826d509.png" 
              alt="Rovertake" 
              className="h-8 w-8 sm:hidden"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button variant="hero" size="lg">
              Start a Project
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="hero" size="lg" className="w-full">
                Start a Project
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
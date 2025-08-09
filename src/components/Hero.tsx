import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-brand-pink blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-accent blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-navy-light blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Company Name */}
          <div className="mb-8 animate-scale-in">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-2 tracking-tight">
              <span className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">Rover</span>
              <span className="text-transparent bg-gradient-to-r from-accent to-brand-pink-light bg-clip-text">take</span>
            </h1>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 animate-slide-in-left">
            <Sparkles className="h-5 w-5 text-accent" />
            <span className="text-lg font-medium">Digital Innovation Partner</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8 animate-fade-in-up">
            We Build Digital Solutions That 
            <span className="text-transparent bg-gradient-to-r from-accent to-brand-pink-light bg-clip-text">
              {" "}Actually Work
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Fresh perspectives, cutting-edge technology, and relentless focus on results. 
            We're here to turn your digital vision into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up">
            <Button variant="hero" size="xl" className="group">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-hero" size="xl">
              See What We Do
            </Button>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto animate-fade-in-up">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-gray-400 text-sm">Commitment to Quality</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Available for Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">Fast</div>
              <div className="text-gray-400 text-sm">Delivery & Results</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
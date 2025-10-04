import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/rasoi-track-logo.png";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  const scrollToDemo = () => {
    document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/5" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <img 
            src={logo} 
            alt="Rasoi Track Logo" 
            className="w-32 h-32 md:w-40 md:h-40 animate-fade-in"
          />
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-5xl leading-tight animate-fade-in">
            The All-In-One Restaurant POS to Put Your Operations on the{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Fast Track
            </span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl animate-fade-in">
            From billing and table management to real-time inventory tracking, 
            Rasoi Track is the simple, powerful solution to manage and grow your restaurant.
          </p>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-gradient-hero hover:opacity-90 transition-opacity text-lg px-8 py-6 rounded-xl shadow-lg animate-fade-in group"
            onClick={scrollToDemo}
          >
            Request a Free Demo
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          {/* Dashboard Image */}
          <div className="w-full max-w-5xl mt-12 animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <img 
                src={heroDashboard} 
                alt="Rasoi Track Dashboard on Tablet" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

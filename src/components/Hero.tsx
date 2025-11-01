// src/components/Hero.tsx

import { Button } from "@/components/ui/button"; //
import { ArrowRight } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg"; //

const Hero = () => {
  const scrollToDemo = () => {
    document
      .getElementById("demo-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/5" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-in fade-in duration-1000" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-in fade-in duration-1000" />

      <div className="container relative z-10 px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-5xl leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
            The All-In-One Restaurant POS to Put Your Operations on the{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Fast Track
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            From billing and table management to real-time inventory tracking,
            Rasoi Track is the simple, powerful solution to manage and grow your
            restaurant.
          </p>

          {/* CTA Button */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button
              size="lg"
              className="bg-gradient-hero hover:opacity-90 transition-opacity text-lg px-8 py-6 rounded-xl shadow-lg group"
              onClick={scrollToDemo}
            >
              Request a Free Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="w-full max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 px-4 py-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40 shadow-md">
              <div className="flex items-center gap-2 text-sm md:text-base font-medium">
                <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center shadow-sm">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <span className="text-foreground">Zomato & Swiggy Integration</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base font-medium">
                <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center shadow-sm">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <span className="text-foreground">Powerful Split Billing</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base font-medium">
                <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center shadow-sm">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <span className="text-foreground">Deep Item Customization</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base font-medium">
                <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center shadow-sm">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-foreground">Real-time Inventory</span>
              </div>
            </div>
          </div>

          {/* Dashboard Image */}
          <div className="w-full max-w-5xl mt-12 animate-in fade-in zoom-in-95 duration-700 delay-400">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <img
                src={heroDashboard}
                alt="Rasoi Track Dashboard on Tablet"
                className="w-full h-auto"
              />{" "}
              {/* */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

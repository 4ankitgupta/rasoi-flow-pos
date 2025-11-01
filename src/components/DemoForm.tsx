import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";

const DemoForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    restaurantName: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.restaurantName || !formData.phone || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to request a demo.",
        variant: "destructive",
      });
      return;
    }

    // Show success message
    toast({
      title: "Demo Request Received! 🎉",
      description: "Our team will contact you within 24 hours to schedule your personalized demo.",
    });

    // Reset form
    setFormData({
      name: "",
      restaurantName: "",
      phone: "",
      email: "",
    });
  };

  return (
    <section id="demo-section" className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
        <Card className="p-6 sm:p-8 md:p-12 shadow-2xl border-border/50 bg-gradient-card">
          <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-hero mb-3 sm:mb-4">
              <Sparkles className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Ready to{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Streamline Your Restaurant?
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              See for yourself how Rasoi Track can save you time, reduce costs, and boost your sales. 
              Schedule a personalized, no-obligation demo today.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-11 sm:h-12 text-base"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="restaurantName">Restaurant Name *</Label>
                <Input
                  id="restaurantName"
                  placeholder="The Food Place"
                  value={formData.restaurantName}
                  onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                  required
                  className="h-11 sm:h-12 text-base"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-11 sm:h-12 text-base"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@restaurant.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-11 sm:h-12 text-base"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              size="lg"
              className="w-full bg-gradient-hero hover:opacity-90 transition-opacity text-base sm:text-lg py-5 sm:py-6 rounded-xl shadow-lg min-h-[48px]"
            >
              Get My Free Demo
            </Button>
            
            <p className="text-xs sm:text-sm text-center text-muted-foreground px-4">
              No credit card required. No commitment. Just a friendly conversation about how we can help your restaurant.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default DemoForm;

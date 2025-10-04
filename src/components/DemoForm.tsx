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
    <section id="demo-section" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container max-w-4xl">
        <Card className="p-8 md:p-12 shadow-2xl border-border/50">
          <div className="text-center space-y-4 mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero mb-4">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Ready to{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Streamline Your Restaurant?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See for yourself how Rasoi Track can save you time, reduce costs, and boost your sales. 
              Schedule a personalized, no-obligation demo today.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
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
                  className="h-12"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12"
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
                  className="h-12"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              size="lg"
              className="w-full bg-gradient-hero hover:opacity-90 transition-opacity text-lg py-6 rounded-xl shadow-lg"
            >
              Get My Free Demo
            </Button>
            
            <p className="text-sm text-center text-muted-foreground">
              No credit card required. No commitment. Just a friendly conversation about how we can help your restaurant.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default DemoForm;

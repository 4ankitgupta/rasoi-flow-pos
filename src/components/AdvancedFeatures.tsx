import { Building2, ShoppingCart, Heart, FileBarChart } from "lucide-react";

const advancedFeatures = [
  {
    icon: Building2,
    title: "Multi-Outlet Management",
    description: "Manage multiple locations from one centralized dashboard",
  },
  {
    icon: ShoppingCart,
    title: "Zomato & Swiggy Integration",
    description: "All online orders appear directly in your POS and KDS. No more manual entry, no more mistakes.",
  },
  {
    icon: Heart,
    title: "CRM & Loyalty",
    description: "Save customer phone numbers, view order history, and run loyalty point programs to keep your regulars coming back.",
  },
  {
    icon: FileBarChart,
    title: "Recipe & Fraud Reports",
    description: "Track recipe-level inventory (e.g., 150g chicken per dish) and stop wastage. Get daily void/cancellation reports with manager approval to prevent theft.",
  },
];

const AdvancedFeatures = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            A System Built for{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Real-World Chaos
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We handle the tough problems so you can focus on your food and your guests. These aren't "add-ons"—they are core features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {advancedFeatures.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-card border border-border/60 shadow-md hover:shadow-lg hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold leading-snug">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;

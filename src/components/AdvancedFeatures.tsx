import { Building2, ShoppingCart, Heart, LineChart } from "lucide-react";

const advancedFeatures = [
  {
    icon: Building2,
    title: "Multi-Outlet Management",
  },
  {
    icon: ShoppingCart,
    title: "Online Ordering Integration",
  },
  {
    icon: Heart,
    title: "Customer Loyalty & CRM",
  },
  {
    icon: LineChart,
    title: "Advanced Analytics & Dashboards",
  },
];

const AdvancedFeatures = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            A System That{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Grows With Your Business
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for today, ready for tomorrow. Our upcoming advanced features ensure we're your long-term partner.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {advancedFeatures.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl hover:bg-card transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <p className="text-sm md:text-base font-medium leading-snug">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;

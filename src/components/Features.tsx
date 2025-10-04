import { Card } from "@/components/ui/card";
import { Receipt, Menu, Package, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: Receipt,
    title: "Effortless Billing & Order Management",
    description: "Create bills, manage tables, and process payments in seconds. Never miss an order.",
  },
  {
    icon: Menu,
    title: "Dynamic Menu Management",
    description: "Easily add, edit, and categorize your menu items and variations. Update prices instantly.",
  },
  {
    icon: Package,
    title: "Smart Inventory Tracking",
    description: "Track key ingredients tied to your menu items. Get low-stock alerts so you never run out.",
  },
  {
    icon: TrendingUp,
    title: "Insightful Sales Reports",
    description: "Get a clear view of your business with daily sales reports and see your top-selling items at a glance.",
  },
  {
    icon: Users,
    title: "Defined Staff Roles",
    description: "Secure and specific access for your entire team: Admin, Cashier, Waiter, and Chef.",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Everything You Need,{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              All in One Place
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed specifically for restaurant operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 lg:p-8 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-gradient-card"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import { Settings, Play, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Settings,
    number: "01",
    title: "Setup Your Restaurant",
    description:
      "We help you quickly configure your menu, tables, and inventory.",
  },
  {
    icon: Play,
    number: "02",
    title: "Start Taking Orders",
    description:
      "Your staff can begin using our intuitive interface immediately with minimal training.",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Track & Grow",
    description:
      "Use powerful data and reports to make smarter decisions and increase profits.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container">
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Get Up and Running in{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            From setup to success, we make it easy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center space-y-4 group animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary via-primary/50 to-accent -z-10 group-hover:via-primary transition-all duration-500" />
              )}

              {/* Icon container */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl sm:rounded-2xl bg-gradient-hero flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <step.icon className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent flex items-center justify-center font-bold text-white text-base sm:text-lg shadow-md">
                  {step.number}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4 sm:mt-6">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xs px-2 sm:px-0">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Check,
  ChefHat,
  ClipboardList,
  CreditCard,
  UserCog,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type RoleSlide = {
  persona: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
  metrics: {
    label: string;
    value: string;
  }[];
};

const roleSlides: RoleSlide[] = [
  {
    persona: "Manager",
    title: "Command the floor with live visibility",
    description:
      "Track covers, tables, and order ageing in real time. Push menu updates and shift notes to every station without leaving your desk.",
    icon: UserCog,
    highlights: [
      "Approval queue for voids, discounts, and complimentary items with an audit trail",
      "Live control center combining tables, kitchen tickets, and revenue variance",
      "Shift handover summaries auto-delivered to the next manager and frontline teams",
    ],
    metrics: [
      { label: "Primary screen", value: "Manager dashboard" },
      { label: "Key outcome", value: "Zero blind spots" },
    ],
  },
  {
    persona: "Waiter",
    title: "Serve faster, upsell smarter",
    description:
      "Handheld ordering keeps service moving while the system surfaces the next-best actions for every guest interaction.",
    icon: ClipboardList,
    highlights: [
      "Course-wise firing with instant kitchen status and run-list updates",
      "Guest-specific upsell nudges based on combos, stock, and order history",
      "Smart reminders when dishes are plated or follow-ups are overdue",
    ],
    metrics: [
      { label: "Device", value: "Phone or tablet" },
      { label: "Impact", value: "+18% faster table turns" },
    ],
  },
  {
    persona: "Chef",
    title: "Low-noise kitchen coordination",
    description:
      "A Kitchen Display System keeps prep prioritized, highlights allergies, and removes paper tickets from the pass.",
    icon: ChefHat,
    highlights: [
      "Automatic course sequencing with colour-coded timers per station",
      "Instant reroutes when items are out of stock or delayed",
      "Special instructions and allergies pinned to the top of every ticket",
    ],
    metrics: [
      { label: "Views", value: "Expo & station KDS" },
      { label: "Goal", value: "Consistent plating time" },
    ],
  },
  {
    persona: "Cashier",
    title: "Billing that never slows the queue",
    description:
      "Handle dine-in, take-away, and delivery orders from one screen with built-in guardrails for approvals and settlement.",
    icon: CreditCard,
    highlights: [
      "Split bills, tips, and payment adjustments in two taps",
      "Auto-sync loyalty, UPI, and card settlements at close of shift",
      "Variance alerts fire before shift closure to prevent revenue leakage",
    ],
    metrics: [
      { label: "Modes", value: "Counter & kiosk" },
      { label: "Guardrail", value: "Fraud-proof approvals" },
    ],
  },
  {
    persona: "AI Assistant",
    title: "Predict issues before they hit service",
    description:
      "Rasoi AI studies your sales, inventory, and guest feedback to nudge the right team member at the right time.",
    icon: Bot,
    highlights: [
      "Low-stock forecasts tied to live menu velocity and purchase cycles",
      "Auto-generated staffing suggestions for upcoming shifts",
      "Nightly performance summaries sent to email or WhatsApp",
    ],
    metrics: [
      { label: "Alerts", value: "Manager, chef, cashier" },
      { label: "Time saved", value: "4+ hrs every week" },
    ],
  },
];

const Features = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const handleSelect = () =>
      setCurrentSlide(carouselApi.selectedScrollSnap());

    handleSelect();
    carouselApi.on("select", handleSelect);

    return () => {
      carouselApi.off("select", handleSelect);
    };
  }, [carouselApi]);

  return (
    <section id="features" className="py-20 px-4 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Everything You Need,{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              All in One Place
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow the journey each role takes inside the Rasoi POS and see how
            the system keeps everyone in sync.
          </p>
        </div>

        <Carousel
          className="relative"
          setApi={setCarouselApi}
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent className="-ml-0">
            {roleSlides.map((slide, index) => {
              const Icon = slide.icon;

              return (
                <CarouselItem key={slide.persona} className="pt-1">
                  <Card
                    data-active={currentSlide === index}
                    className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/95 p-8 md:p-10 shadow-lg transition-all duration-700 ease-out data-[active=true]:scale-[1.01] data-[active=true]:shadow-xl data-[active=true]:ring-1 data-[active=true]:ring-primary/40"
                  >
                    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                      <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full bg-gradient-hero opacity-20 blur-3xl transition-all duration-700 ease-out group-data-[active=true]:opacity-55 animate-[spin_18s_linear_infinite]" />
                      <div className="absolute left-1/2 bottom-[-140px] h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,160,110,0.4),transparent_65%)] opacity-0 blur-3xl transition-all duration-700 ease-out group-data-[active=true]:opacity-45 animate-[spin_26s_linear_infinite]" />
                      <div className="absolute right-8 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,198,164,0.55),transparent_70%)] opacity-0 blur-2xl transition-all duration-700 ease-out group-data-[active=true]:opacity-60 animate-pulse" />
                    </div>

                    <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                      <div className="space-y-6 lg:flex-1">
                        <div
                          className="flex items-center gap-4 opacity-0 translate-y-3 transition-all duration-500 group-data-[active=true]:opacity-100 group-data-[active=true]:translate-y-0"
                          style={{ transitionDelay: "80ms" }}
                        >
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero shadow-md">
                            <Icon className="h-7 w-7 text-white" />
                          </div>
                          <div>
                            <Badge
                              variant="secondary"
                              className="uppercase tracking-[0.28em] text-xs"
                            >
                              {slide.persona}
                            </Badge>
                            <h3 className="mt-3 text-2xl md:text-3xl font-semibold">
                              {slide.title}
                            </h3>
                          </div>
                        </div>

                        <p
                          className="text-base md:text-lg text-muted-foreground max-w-2xl opacity-0 translate-y-2 transition-all duration-500 group-data-[active=true]:opacity-100 group-data-[active=true]:translate-y-0"
                          style={{ transitionDelay: "160ms" }}
                        >
                          {slide.description}
                        </p>

                        <ul className="grid gap-4 md:grid-cols-2">
                          {slide.highlights.map((highlight, highlightIndex) => (
                            <li
                              key={highlight}
                              className="flex items-start gap-3 rounded-xl border border-border/60 bg-background/70 p-4 shadow-sm opacity-0 translate-y-4 transition-all duration-500 group-data-[active=true]:border-primary/60 group-data-[active=true]:bg-primary/5 group-data-[active=true]:shadow-lg group-data-[active=true]:opacity-100 group-data-[active=true]:translate-y-0"
                              style={{
                                transitionDelay: `${
                                  220 + highlightIndex * 90
                                }ms`,
                              }}
                            >
                              <Check className="mt-1 h-5 w-5 text-primary" />
                              <span className="text-sm md:text-base leading-relaxed text-foreground">
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="lg:w-60 xl:w-72 space-y-4">
                        <h4
                          className="text-sm font-semibold uppercase tracking-wider text-muted-foreground opacity-0 translate-y-2 transition-all duration-500 group-data-[active=true]:opacity-100 group-data-[active=true]:translate-y-0"
                          style={{ transitionDelay: "260ms" }}
                        >
                          Snapshot
                        </h4>
                        <div className="space-y-4">
                          {slide.metrics.map((metric, metricIndex) => (
                            <div
                              key={`${slide.persona}-${metric.label}`}
                              className="rounded-2xl border border-dashed border-border/60 bg-background/80 p-5 opacity-0 translate-y-4 transition-all duration-500 group-data-[active=true]:border-primary/50 group-data-[active=true]:bg-primary/5 group-data-[active=true]:shadow-lg group-data-[active=true]:opacity-100 group-data-[active=true]:translate-y-0"
                              style={{
                                transitionDelay: `${340 + metricIndex * 120}ms`,
                              }}
                            >
                              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                                {metric.label}
                              </p>
                              <p className="mt-2 text-base font-medium text-foreground">
                                {metric.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselPrevious
            variant="secondary"
            className="hidden md:flex left-4 top-1/2 -translate-y-1/2 border-none bg-background/80 shadow-lg backdrop-blur data-[disabled=true]:opacity-30"
          />
          <CarouselNext
            variant="secondary"
            className="hidden md:flex right-4 top-1/2 -translate-y-1/2 border-none bg-background/80 shadow-lg backdrop-blur data-[disabled=true]:opacity-30"
          />
        </Carousel>

        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-background shadow-sm">
              ↔︎
            </span>
            <span>
              Drag, swipe, or use the arrows to explore each role in the POS
              journey.
            </span>
          </div>

          <div className="flex items-center gap-3">
            {roleSlides.map((slide, index) => (
              <button
                key={`dot-${slide.persona}`}
                type="button"
                onClick={() => carouselApi?.scrollTo(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  currentSlide === index
                    ? "w-10 bg-primary"
                    : "w-2 bg-muted-foreground/30"
                )}
                aria-label={`Go to ${slide.persona} slide`}
              />
            ))}
          </div>

          <p className="text-xs text-muted-foreground">
            *Impact metrics are averages from early pilot locations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;

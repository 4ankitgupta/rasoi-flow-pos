import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import AdvancedFeatures from "@/components/AdvancedFeatures";
import DemoForm from "@/components/DemoForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <AdvancedFeatures />
      <DemoForm />
      <Footer />
    </main>
  );
};

export default Index;

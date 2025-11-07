
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AdvantagesSection } from "@/components/AdvantagesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-yellow/5 to-brand-petrol/5">
      <Navigation />
      <HeroSection />
      <AdvantagesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;


import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AdvantagesSection } from "@/components/AdvantagesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <Navigation />
      <HeroSection />
      <AdvantagesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;

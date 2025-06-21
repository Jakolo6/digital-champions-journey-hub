
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ModuleCards } from "@/components/ModuleCards";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ScrollConnector } from "@/components/ScrollConnector";
import { SectionDivider } from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <ScrollConnector />
      
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        
        <SectionDivider variant="wave" />
        
        <ModuleCards />
        
        <SectionDivider variant="curve" flip />
        
        <TestimonialsSection />
        
        <SectionDivider variant="angle" />
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;

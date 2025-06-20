
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { JourneyMap } from "@/components/JourneyMap";
import { ModuleCards } from "@/components/ModuleCards";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CommunitySection } from "@/components/CommunitySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <Navigation />
      <HeroSection />
      <JourneyMap />
      <ModuleCards />
      <TestimonialsSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;

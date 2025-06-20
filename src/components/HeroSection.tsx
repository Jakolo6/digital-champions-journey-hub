
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowRight, Star } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-orange-500/10"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              <Star className="h-3 w-3 mr-1" />
              Arvato Supply Chain Solutions
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Digital Champions
              <span className="block text-blue-600">Program</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Embark on your digital transformation journey. Master supply chain innovation, 
              earn badges, and become a Digital Champion through our interactive learning experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                <Play className="h-5 w-5 mr-2" />
                Start Your Journey
              </Button>
              
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-2">
                Explore Modules
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-600">
              <div className="flex items-center">
                <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                6 Core Modules
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 bg-orange-500 rounded-full mr-2"></div>
                130+ Credits Available
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                AI-Powered Learning
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4 flex items-center justify-center">
                <Play className="h-16 w-16 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Welcome to Digital Champions</h3>
              <p className="text-gray-600 text-sm">Start your learning journey today</p>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white rounded-full h-16 w-16 flex items-center justify-center font-bold text-lg shadow-lg animate-pulse">
              NEW
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

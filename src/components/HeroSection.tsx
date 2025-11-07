
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/10 to-brand-petrol/10"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge className="mb-4 bg-brand-yellow/20 text-brand-petrol hover:bg-brand-yellow/30">
              <Star className="h-3 w-3 mr-1" />
              AI Leadership Excellence
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI Leadership
              <span className="block text-brand-petrol">Learning Platform</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Empower leaders with AI capabilities. Master artificial intelligence, drive innovation, 
              and transform your leadership approach through our comprehensive learning platform.
            </p>
            
            <div className="flex justify-center lg:justify-start">
              <Link to="/learning-journey">
                <Button size="lg" className="bg-brand-petrol hover:bg-brand-petrol-dark text-white text-lg px-8 py-3 border-2">
                  Start Your AI Journey
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-600">
              <div className="flex items-center">
                <div className="h-2 w-2 bg-brand-petrol rounded-full mr-2"></div>
                Comprehensive AI Modules
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 bg-brand-yellow rounded-full mr-2"></div>
                Leadership Development
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 bg-brand-orange rounded-full mr-2"></div>
                Practical Applications
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full rounded-xl"
                  src="https://share.synthesia.io/embeds/videos/ffc943d2-e58b-4c54-8a83-f57a8b7149ab"
                  title="Digital Champions Program Welcome Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="font-semibold text-gray-900 mt-4 mb-2">Welcome to AI Leadership</h3>
              <p className="text-gray-600 text-sm">Transform your leadership with AI</p>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-brand-yellow text-gray-900 rounded-full h-16 w-16 flex items-center justify-center font-bold text-lg shadow-lg animate-pulse">
              NEW
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

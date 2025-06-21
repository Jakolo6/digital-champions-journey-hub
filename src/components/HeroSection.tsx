
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              <Star className="h-3 w-3 mr-1" />
              Arvato Supply Chain Solutions
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Digital Champions
              <span className="block text-blue-400">Program</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl drop-shadow-md">
              Embark on your digital transformation journey. Master supply chain innovation, 
              earn badges, and become a Digital Champion through our interactive learning experience.
            </p>
            
            <div className="flex justify-center lg:justify-start">
              <Link to="/learning-journey">
                <Button 
                  size="lg" 
                  className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-3 border-2 border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -top-full bg-gradient-to-b from-transparent via-white/20 to-transparent transform group-hover:animate-pulse group-hover:translate-y-full transition-transform duration-700"></div>
                  
                  <span className="relative z-10">Explore Learning Journey</span>
                  <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-blue-200">
              <div className="flex items-center">
                <div className="h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                6 Core Modules
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 bg-orange-400 rounded-full mr-2 animate-pulse"></div>
                130+ Credits Available
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                AI-Powered Learning
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300 border border-white/20">
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
              <h3 className="font-semibold text-white mt-4 mb-2">Welcome to Digital Champions</h3>
              <p className="text-blue-200 text-sm">Start your learning journey today</p>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full h-16 w-16 flex items-center justify-center font-bold text-lg shadow-lg animate-pulse">
              NEW
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

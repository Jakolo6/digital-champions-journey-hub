import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BrainCircuit, DatabaseZap, Rocket, Factory } from "lucide-react";
import { Link } from "react-router-dom";
import { modules } from "@/lib/moduleData";

const LearningJourneyPage = () => {
  const moduleIcons = [BrainCircuit, DatabaseZap, Rocket, Factory];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Space Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0">
          {/* Animated stars */}
          <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-60 left-1/3 w-0.5 h-0.5 bg-purple-300 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 right-20 w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-60 left-16 w-0.5 h-0.5 bg-pink-300 rounded-full animate-pulse delay-300"></div>
        </div>
      </div>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            The Path to a Digital Future
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Participants become the architects of a connected, data-driven, and resilient logistics world. 
            The journey begins with self-reflection, leads through empowerment by technology and innovation – 
            and ends in a concrete field of application and impact: the future of logistics.
          </p>
        </div>
      </section>

      {/* Galactic Journey Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Central Energy Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 opacity-60 hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 animate-pulse blur-sm"></div>
          </div>
          
          {/* Journey Stations */}
          <div className="space-y-16">
            {modules.map((module, index) => {
              const IconComponent = moduleIcons[index];
              return (
                <div key={module.id} className={`relative flex items-center group ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  {/* Interactive Image Milestone Marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden lg:block">
                    <div className="relative w-28 h-28 transition-all duration-300 group-hover:scale-110">
                      {/* Glowing border effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse blur-md"></div>
                      
                      {/* Image container */}
                      <div className="relative w-28 h-28 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full p-1 shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                        <div className="w-full h-full rounded-full overflow-hidden bg-black/20">
                          <img 
                            src={module.image} 
                            alt={module.title}
                            className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </div>
                      
                      {/* Module number overlay */}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white/30">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  
                  {/* Futuristic Station Card */}
                  <div className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:pr-20' : 'lg:pl-20'
                  }`}>
                    <Card className="group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden border border-white/10 bg-black/40 backdrop-blur-lg">
                      {/* Background Image with enhanced opacity on hover */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                        style={{ backgroundImage: `url(${module.image})` }}
                      ></div>
                      
                      {/* Glassmorphism Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm"></div>
                      
                      {/* Glowing Border Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                      
                      <CardHeader className="pb-4 relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div className="lg:hidden w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-white text-sm border-2 border-white/20">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <div className="flex items-center gap-2">
                            <IconComponent className="h-6 w-6 text-cyan-400 group-hover:text-purple-400 group-hover:animate-pulse transition-colors duration-300" />
                            <div className="text-sm text-gray-400">
                              Module {index + 1}
                            </div>
                          </div>
                        </div>
                        <CardTitle className="text-2xl bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                          {module.title}
                        </CardTitle>
                        <CardDescription className="text-gray-300 text-base">
                          {module.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="pt-0 relative z-10">
                        <div className="space-y-4">
                          <div className="text-sm text-gray-400">
                            <div className="flex items-center mb-2">
                              <div className="h-2 w-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
                              {module.sessions.length} Sessions Available
                            </div>
                          </div>
                          
                          <Link to={`/modules/${module.id}`}>
                            <Button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 border border-cyan-400/30 text-white font-semibold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                              View Module Details
                              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Destination Section - Bright Future */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-red-400/20 border-t border-yellow-400/30">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 via-orange-600/10 to-pink-600/10"></div>
        <div className="absolute inset-0">
          {/* Bright destination particles */}
          <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-orange-400 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse delay-700"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
            Your Destination: Become a Future Explorer
          </h2>
          <p className="text-xl mb-8 leading-relaxed text-gray-200">
            Complete your transformation into a Digital Champion. Master the skills, 
            earn the credentials, and lead the future of logistics innovation.
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold text-lg px-12 py-4 rounded-full shadow-2xl shadow-yellow-500/30 hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105 border-2 border-yellow-400/50">
              Start Your Journey Today
              <ArrowRight className="h-6 w-6 ml-3" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LearningJourneyPage;

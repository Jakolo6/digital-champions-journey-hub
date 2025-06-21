
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { modules } from "@/lib/moduleData";

const LearningJourneyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Path to a Digital Future
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Participants become the architects of a connected, data-driven, and resilient logistics world. 
            The journey begins with self-reflection, leads through empowerment by technology and innovation – 
            and ends in a concrete field of application and impact: the future of logistics.
          </p>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-orange-400 to-green-400 opacity-30 hidden lg:block"></div>
          
          {/* Journey Stations */}
          <div className="space-y-16">
            {modules.map((module, index) => (
              <div key={module.id} className={`relative flex items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Station Number Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden lg:block">
                  <div className="w-12 h-12 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center font-bold text-blue-600 shadow-lg">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                
                {/* Station Card */}
                <div className={`w-full lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'
                }`}>
                  <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="lg:hidden w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white text-sm">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className="text-sm text-gray-500">
                          Module {index + 1}
                        </div>
                      </div>
                      <CardTitle className="text-2xl text-blue-600">
                        {module.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-base">
                        {module.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        <div className="text-sm text-gray-600">
                          <div className="flex items-center mb-2">
                            <BookOpen className="h-4 w-4 mr-2" />
                            {module.sessions.length} Sessions Available
                          </div>
                        </div>
                        
                        <Link to={`/modules/${module.id}`}>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">
                            View Module Details
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destination Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Destination: Become a Future Explorer
          </h2>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            Complete your transformation into a Digital Champion. Master the skills, 
            earn the credentials, and lead the future of logistics innovation.
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              Start Your Journey Today
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LearningJourneyPage;

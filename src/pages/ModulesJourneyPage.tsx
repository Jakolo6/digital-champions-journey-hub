
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const ModulesJourneyPage = () => {
  const journeySteps = [
    {
      id: "1",
      title: "Digital Mind",
      description: "Discover the Future: An Introduction to Digital Transformation",
      moduleTitle: "FUTURE EXPLORER",
      color: "bg-blue-500",
      href: "/modules/1"
    },
    {
      id: "2", 
      title: "IT Excellence",
      description: "Mastering Technology: Integrating modern technologies to drive change",
      moduleTitle: "DIGITAL & AI ENABLER",
      color: "bg-green-500",
      href: "/modules/2"
    },
    {
      id: "3",
      title: "Digital Acceleration", 
      description: "Putting Visions into Action: Agile methods and innovation approaches",
      moduleTitle: "INNOVATION PILOT",
      color: "bg-orange-500",
      href: "/modules/3"
    },
    {
      id: "4",
      title: "Future Warehouse",
      description: "Revolutionizing Digital Logistics: Leveraging innovative technologies",
      moduleTitle: "LOGISTICS LEADER", 
      color: "bg-purple-500",
      href: "/modules/4"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <Navigation />
      
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Learning Journey
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed">
                Participants become the architects of a connected, data-driven, and resilient logistics world. 
                The journey begins with self-reflection, leads through empowerment by technology and innovation – 
                and ends in a concrete field of application and impact: the future of logistics.
              </p>
            </div>
          </div>

          {/* Journey Path */}
          <div className="relative">
            {/* Desktop View - Horizontal Path */}
            <div className="hidden md:block">
              <div className="flex justify-between items-center mb-8">
                {journeySteps.map((step, index) => (
                  <div key={step.id} className="flex flex-col items-center relative flex-1">
                    <Link to={step.href} className="group">
                      <Card className="w-64 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                        <CardHeader className="text-center pb-4">
                          <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                            <span className="text-white font-bold text-xl">{step.id}</span>
                          </div>
                          <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                            {step.title}
                          </CardTitle>
                          <div className="text-sm font-medium text-gray-500 mb-2">
                            {step.moduleTitle}
                          </div>
                        </CardHeader>
                        <CardContent className="text-center pt-0">
                          <CardDescription className="text-sm">
                            {step.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </Link>
                    
                    {/* Connection Arrow */}
                    {index < journeySteps.length - 1 && (
                      <div className="absolute top-20 -right-8 text-gray-400">
                        <ArrowRight className="h-8 w-8" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile View - Vertical Path */}
            <div className="md:hidden space-y-6">
              {journeySteps.map((step, index) => (
                <div key={step.id} className="relative">
                  <Link to={step.href}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <span className="text-white font-bold">{step.id}</span>
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-1">
                              {step.title}
                            </CardTitle>
                            <div className="text-sm font-medium text-gray-500">
                              {step.moduleTitle}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <CardDescription>
                          {step.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                  
                  {/* Connection Line for Mobile */}
                  {index < journeySteps.length - 1 && (
                    <div className="flex justify-center py-4">
                      <div className="w-px h-8 bg-gray-300"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Final Achievement Section */}
            <div className="mt-16">
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
                <CardContent className="text-center p-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Become a Future Explorer
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Complete all modules to earn your Digital Champions certification and join 
                    the elite group of Future Explorers shaping the logistics industry.
                  </p>
                  <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                    Start Your Journey
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ModulesJourneyPage;

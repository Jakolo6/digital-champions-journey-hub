import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, GraduationCap, Lightbulb, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { modules } from "@/lib/moduleData";

const LearningJourneyPage = () => {
  const moduleIcons = [Users, GraduationCap, Lightbulb, MessageSquare];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-gradient-to-br from-brand-yellow/5 via-white to-brand-petrol/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-yellow/10 via-transparent to-transparent"></div>
      </div>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-petrol mb-6">
            Your AI Leadership Journey
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Transform into an AI-enabled leader through structured learning modules. 
            The journey begins with AI fundamentals, progresses through strategic applications, 
            and culminates in practical implementation and organizational transformation.
          </p>
        </div>
      </section>

      {/* Horizontal Journey Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Journey Modules - Horizontal */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => {
              const IconComponent = moduleIcons[index];
              return (
                <div key={module.id} className="relative group">
                  {/* Connecting Line */}
                  {index < modules.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-3 w-6 h-0.5 bg-gray-300 z-0"></div>
                  )}
                  
                  {/* Module Card */}
                  <div className="w-full relative z-10">
                    <Card className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden border border-gray-200 bg-white hover:border-brand-petrol">
                      {/* Module Image */}
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <img 
                          src={module.image} 
                          alt={module.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Module number badge */}
                        <div className="absolute top-4 left-4 w-14 h-14 bg-brand-yellow rounded-full flex items-center justify-center text-gray-900 text-2xl font-bold shadow-lg border-4 border-white">
                          {index + 1}
                        </div>
                      </div>
                      
                      <CardHeader className="pb-3 pt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <IconComponent className="h-5 w-5 text-brand-petrol" />
                          <div className="text-xs font-semibold text-brand-orange uppercase tracking-wide">
                            Module {index + 1}
                          </div>
                        </div>
                        <CardTitle className="text-lg text-brand-petrol font-bold mb-3 leading-tight">
                          {module.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-sm leading-relaxed">
                          {module.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="pt-0 pb-4">
                        <div className="space-y-3">
                          <div className="flex items-center text-sm text-gray-600">
                            <div className="h-1.5 w-1.5 bg-brand-yellow rounded-full mr-2"></div>
                            <span>{module.sessions.length} Sessions</span>
                          </div>
                          
                          <Link to={`/modules/${module.id}`}>
                            <Button className="w-full bg-brand-petrol hover:bg-brand-petrol-dark text-white font-semibold py-2.5 transition-all duration-200">
                              View Details
                              <ArrowRight className="h-4 w-4 ml-2" />
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

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-brand-yellow/10 to-brand-petrol/10 border-t-4 border-brand-yellow">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-petrol">
            Ready to Lead with AI?
          </h2>
          <p className="text-xl mb-8 leading-relaxed text-gray-700">
            Complete your transformation into an AI-enabled leader. Master the skills, 
            earn credentials, and drive innovation in your organization.
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-brand-yellow hover:bg-brand-yellow-dark text-brand-petrol font-bold text-lg px-12 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
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

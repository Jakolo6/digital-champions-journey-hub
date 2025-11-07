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
            Your AI Leadership Path
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Navigate through four transformative stages of AI leadership development. 
            From foundational skills to community building, each step builds your capability 
            to lead and innovate with artificial intelligence.
          </p>
        </div>
      </section>

      {/* Innovative Path Layout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Flowing Path Design */}
          <div className="relative">
            {/* Curved Path Line - Desktop */}
            <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none" style={{height: '600px'}}>
              <path
                d="M 50 120 Q 300 80, 350 120 T 650 120 Q 900 80, 950 120"
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8,8"
                opacity="0.4"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor: '#FBB809', stopOpacity: 1}} />
                  <stop offset="50%" style={{stopColor: '#006680', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#E17A10', stopOpacity: 1}} />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Module Cards with Staggered Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {modules.map((module, index) => {
              const IconComponent = moduleIcons[index];
              // Stagger cards vertically for visual flow
              const staggerClass = index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-16';
              
              return (
                <div key={module.id} className={`relative group ${staggerClass}`}>
                  {/* Animated Connector Dots */}
                  {index < modules.length - 1 && (
                    <div className="hidden lg:flex absolute top-28 -right-4 items-center gap-1 z-0">
                      <div className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-petrol/50 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-1 h-1 rounded-full bg-brand-orange/30 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  )}
                  
                  {/* Module Card */}
                  <div className="w-full relative z-10 transform transition-all duration-500 hover:scale-105">
                    <Card className="group hover:shadow-2xl transition-all duration-500 relative overflow-hidden border-2 border-transparent bg-white hover:border-brand-yellow shadow-lg">
                      {/* Module Image with Overlay */}
                      <div className="relative h-52 overflow-hidden">
                        <img 
                          src={module.image} 
                          alt={module.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-petrol/80 via-brand-petrol/40 to-transparent"></div>
                        
                        {/* Floating Module Number */}
                        <div className="absolute -top-3 -left-3 w-16 h-16 bg-gradient-to-br from-brand-yellow to-brand-orange rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-2xl border-4 border-white transform group-hover:rotate-12 transition-transform duration-300">
                          {index + 1}
                        </div>
                        
                        {/* Step Indicator */}
                        <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-brand-petrol">
                          STEP {index + 1}
                        </div>
                      </div>
                      
                      <CardHeader className="pb-3 pt-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="p-2 bg-brand-yellow/10 rounded-lg">
                            <IconComponent className="h-5 w-5 text-brand-petrol" />
                          </div>
                        </div>
                        <CardTitle className="text-xl text-brand-petrol font-bold mb-3 leading-tight group-hover:text-brand-orange transition-colors duration-300">
                          {module.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                          {module.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="pt-0 pb-5">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center text-gray-600">
                              <div className="h-2 w-2 bg-brand-yellow rounded-full mr-2 animate-pulse"></div>
                              <span className="font-medium">{module.sessions.length} Sessions</span>
                            </div>
                            <div className="text-brand-orange font-semibold text-xs uppercase tracking-wider">
                              {index === 0 ? 'Start Here' : index === modules.length - 1 ? 'Final Step' : 'Continue'}
                            </div>
                          </div>
                          
                          <Link to={`/modules/${module.id}`}>
                            <Button className="w-full bg-gradient-to-r from-brand-petrol to-brand-petrol-dark hover:from-brand-yellow hover:to-brand-orange hover:text-brand-petrol text-white font-bold py-3 transition-all duration-300 shadow-md hover:shadow-xl group">
                              Explore This Step
                              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-petrol via-brand-petrol-dark to-black opacity-95"></div>
        <div className="absolute inset-0">
          {/* Animated background elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-brand-yellow/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-brand-orange/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-brand-yellow/20 backdrop-blur-sm rounded-full border border-brand-yellow/30">
            <span className="text-brand-yellow font-semibold text-sm uppercase tracking-wider">Begin Your Transformation</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Ready to Lead the AI Revolution?
          </h2>
          <p className="text-xl mb-10 leading-relaxed text-gray-200 max-w-2xl mx-auto">
            Join forward-thinking leaders who are shaping the future with AI. 
            Your path to AI leadership mastery starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/register">
              <Button size="lg" className="bg-gradient-to-r from-brand-yellow to-brand-orange hover:from-brand-orange hover:to-brand-yellow text-brand-petrol font-bold text-lg px-10 py-6 shadow-2xl hover:shadow-brand-yellow/50 transition-all duration-300 transform hover:scale-105 group">
                Begin Your Path
                <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
            <Link to="/learning-journey">
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-10 py-6 backdrop-blur-sm transition-all duration-300">
                Explore All Steps
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-yellow mb-2">4</div>
              <div className="text-sm text-gray-300">Learning Steps</div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-3xl font-bold text-brand-yellow mb-2">20+</div>
              <div className="text-sm text-gray-300">Expert Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-yellow mb-2">∞</div>
              <div className="text-sm text-gray-300">Possibilities</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LearningJourneyPage;

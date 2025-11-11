
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, Users, Trophy, Play, GraduationCap, Database, Code, Scale, Lightbulb, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { modules } from "@/lib/moduleData";

export const ModuleCards = () => {
  // 6 AI Learning Modules for Commerzbank Leaders
  const moduleDisplayData = [
    {
      id: "1",
      title: "AI Grundlagen & Nutzung",
      description: "Foundation knowledge of AI technologies and their practical application in banking leadership",
      duration: "4 hours",
      participants: 342,
      progress: 75,
      credits: 30,
      status: "current",
      color: "from-brand-navy to-brand-navy-dark",
      icon: GraduationCap,
      moduleData: modules.find(m => m.id === "1")
    },
    {
      id: "2",
      title: "AI Datenkompetenz",
      description: "Data literacy and governance for strategic decision-making in AI-driven banking",
      duration: "3.5 hours",
      participants: 298,
      progress: 60,
      credits: 28,
      status: "current",
      color: "from-brand-gold to-brand-gold-dark",
      icon: Database,
      moduleData: modules.find(m => m.id === "2")
    },
    {
      id: "3",
      title: "AI Entwicklung & Implementierung",
      description: "Leading AI development projects and implementing scalable solutions across the organization",
      duration: "5 hours",
      participants: 256,
      progress: 40,
      credits: 35,
      status: "current",
      color: "from-brand-turquoise to-brand-turquoise-dark",
      icon: Code,
      moduleData: modules.find(m => m.id === "3")
    },
    {
      id: "4",
      title: "AI Ethik & Regulierung",
      description: "Ethical frameworks, regulatory compliance, and responsible AI governance in financial services",
      duration: "4 hours",
      participants: 312,
      progress: 30,
      credits: 32,
      status: "current",
      color: "from-teal-600 to-teal-800",
      icon: Scale,
      moduleData: modules.find(m => m.id === "4")
    },
    {
      id: "5",
      title: "AI Transformations- & Change Management",
      description: "Leading organizational change and cultural transformation in the age of AI",
      duration: "4.5 hours",
      participants: 287,
      progress: 20,
      credits: 33,
      status: "current",
      color: "from-sky-500 to-sky-700",
      icon: Lightbulb,
      moduleData: modules.find(m => m.id === "5")
    },
    {
      id: "6",
      title: "Bewertung von AI Geschäftsmodellen & Leadership",
      description: "Strategic evaluation of AI business models and executive leadership in digital banking",
      duration: "5 hours",
      participants: 245,
      progress: 15,
      credits: 40,
      status: "current",
      color: "from-emerald-700 to-emerald-900",
      icon: TrendingUp,
      moduleData: modules.find(m => m.id === "6")
    }
  ];

  return (
    <section id="modules" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            AI Learning Modules Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Six comprehensive modules designed to empower AI leadership in banking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moduleDisplayData.map((module) => {
            const IconComponent = module.icon;
            return (
              <Link key={module.id} to={`/modules/${module.id}`}>
                <Card 
                  className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-2 hover:border-brand-gold overflow-hidden"
                >
                  {/* Module Color Header */}
                  <div className={`h-2 bg-gradient-to-r ${module.color}`}></div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      {/* Module Icon */}
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${module.color} flex items-center justify-center shadow-lg`}>
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      
                      {/* Circular Progress Indicator */}
                      <div className="relative w-16 h-16">
                        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#e5e7eb"
                            strokeWidth="8"
                            fill="none"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#C8A73F"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={`${module.progress * 2.51} 251`}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-bold text-brand-navy">{module.progress}%</span>
                        </div>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-brand-navy group-hover:text-brand-gold transition-colors mb-2">
                      {module.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm">
                      {module.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {/* Module Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-600 pb-3 border-b border-gray-200">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-brand-navy" />
                          {module.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1 text-brand-navy" />
                          {module.participants} leaders
                        </div>
                      </div>
                      
                      {/* Credits Badge */}
                      <div className="flex items-center justify-center">
                        <div className="flex items-center text-sm font-semibold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
                          <Trophy className="h-4 w-4 mr-1" />
                          {module.credits} credits
                        </div>
                      </div>
                      
                      {/* Action Button */}
                      <Button 
                        className="w-full bg-brand-navy hover:bg-brand-navy-light text-white font-semibold"
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Enter Module
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

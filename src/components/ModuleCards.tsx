
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, Users, Trophy, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { modules } from "@/lib/moduleData";

export const ModuleCards = () => {
  // Create display data that matches the original structure but uses new module data
  const moduleDisplayData = [
    {
      id: "1",
      title: "FUTURE EXPLORER",
      description: "Discover the Future: An Introduction to Digital Transformation and Essential Soft Skills to Prepare for Change",
      duration: "3 hours",
      participants: 1247,
      progress: 100,
      credits: 25,
      status: "completed",
      moduleData: modules.find(m => m.id === "1")
    },
    {
      id: "2",
      title: "DIGITAL & AI ENABLER",
      description: "Mastering Technology: Integrating modern technologies to drive change and scale solutions",
      duration: "4 hours",
      participants: 892,
      progress: 100,
      credits: 30,
      status: "completed",
      moduleData: modules.find(m => m.id === "2")
    },
    {
      id: "3",
      title: "INNOVATION PILOT",
      description: "Putting Visions into Action: Agile methods and innovation approaches to actively shape digital transformation",
      duration: "3.5 hours",
      participants: 756,
      progress: 60,
      credits: 35,
      status: "current",
      moduleData: modules.find(m => m.id === "3")
    },
    {
      id: "4",
      title: "LOGISTICS LEADER",
      description: "Revolutionizing Digital Logistics: Leveraging innovative technologies to optimize processes and position Arvato as a pioneer",
      duration: "4.5 hours",
      participants: 543,
      progress: 0,
      credits: 40,
      status: "locked",
      moduleData: modules.find(m => m.id === "4")
    }
  ];

  return (
    <section id="modules" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Core Learning Modules
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto drop-shadow-md">
            Progress through four comprehensive modules designed to transform your digital expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {moduleDisplayData.map((module) => (
            <Link key={module.id} to={`/modules/${module.id}`}>
              <Card 
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer backdrop-blur-sm border-white/20 relative overflow-hidden ${
                  module.status === 'current' 
                    ? 'ring-2 ring-blue-400 bg-blue-950/40 shadow-blue-500/25' 
                    : 'bg-slate-800/40 hover:bg-slate-700/60'
                }`}
                style={{
                  boxShadow: 'none',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  card.style.boxShadow = '0 25px 50px -12px rgba(59, 130, 246, 0.5), 0 0 0 1px rgba(59, 130, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.boxShadow = module.status === 'current' 
                    ? '0 10px 25px -5px rgba(59, 130, 246, 0.25)' 
                    : 'none';
                }}
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-right">
                      <div className="flex items-center text-sm text-blue-300 mb-1">
                        <Trophy className="h-4 w-4 mr-1" />
                        {module.credits} credits
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors duration-300">
                    {module.title}
                  </CardTitle>
                  <CardDescription className="text-blue-200">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0 relative z-10">
                  <div className="space-y-4">
                    {/* Progress Bar */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-blue-200">Progress</span>
                        <span className="text-sm font-medium text-blue-400">{module.progress}%</span>
                      </div>
                      <Progress value={module.progress} className="h-2 bg-slate-700" />
                    </div>
                    
                    {/* Module Stats */}
                    <div className="flex items-center justify-between text-sm text-blue-300">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {module.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {module.participants} enrolled
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <Button 
                      className={`w-full transition-all duration-300 ${
                        module.status === 'completed' 
                          ? 'bg-green-600 hover:bg-green-700 shadow-green-500/25'
                          : module.status === 'current'
                          ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/25'
                          : 'bg-gray-600 hover:bg-gray-700'
                      }`}
                      disabled={module.status === 'locked'}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      {module.status === 'completed' ? 'Review Module' : 
                       module.status === 'current' ? 'Continue Learning' : 
                       'Unlock Module'}
                    </Button>
                    
                    {module.status === 'locked' && (
                      <p className="text-xs text-center text-blue-400 mt-2">
                        Complete previous modules to unlock
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

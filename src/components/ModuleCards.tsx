
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, Users, Trophy, Play } from "lucide-react";

export const ModuleCards = () => {
  const modules = [
    {
      id: 1,
      title: "Digital Fundamentals",
      description: "Build your foundation in digital transformation and supply chain innovation",
      duration: "2 hours",
      participants: 1247,
      progress: 100,
      credits: 15,
      status: "completed",
      level: "Essential"
    },
    {
      id: 2,
      title: "Data Analytics Mastery",
      description: "Learn to harness data for strategic decision-making and operational excellence",
      duration: "3 hours",
      participants: 892,
      progress: 100,
      credits: 20,
      status: "completed",
      level: "Essential"
    },
    {
      id: 3,
      title: "Process Optimization",
      description: "Streamline operations using digital tools and methodologies",
      duration: "2.5 hours",
      participants: 756,
      progress: 60,
      credits: 25,
      status: "current",
      level: "Essential"
    },
    {
      id: 4,
      title: "AI & Automation",
      description: "Explore artificial intelligence applications in supply chain management",
      duration: "4 hours",
      participants: 543,
      progress: 0,
      credits: 30,
      status: "locked",
      level: "Deep Dive"
    },
    {
      id: 5,
      title: "Sustainability Technology",
      description: "Green technologies and sustainable practices for modern supply chains",
      duration: "3 hours",
      participants: 421,
      progress: 0,
      credits: 25,
      status: "locked",
      level: "Deep Dive"
    },
    {
      id: 6,
      title: "Future Explorer",
      description: "Cutting-edge innovations and emerging trends shaping the industry",
      duration: "5 hours",
      participants: 234,
      progress: 0,
      credits: 40,
      status: "locked",
      level: "Bonus"
    }
  ];

  return (
    <section id="modules" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Core Learning Modules
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Progress through six comprehensive modules designed to transform your digital expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <Card 
              key={module.id} 
              className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                module.status === 'current' ? 'ring-2 ring-blue-500 bg-blue-50' : ''
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge 
                    className={`${
                      module.level === 'Essential' 
                        ? 'bg-blue-100 text-blue-800'
                        : module.level === 'Deep Dive'
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}
                  >
                    {module.level}
                  </Badge>
                  
                  <div className="text-right">
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <Trophy className="h-4 w-4 mr-1" />
                      {module.credits} credits
                    </div>
                  </div>
                </div>
                
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {module.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {module.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Progress</span>
                      <span className="text-sm font-medium text-blue-600">{module.progress}%</span>
                    </div>
                    <Progress value={module.progress} className="h-2" />
                  </div>
                  
                  {/* Module Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-600">
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
                    className={`w-full ${
                      module.status === 'completed' 
                        ? 'bg-green-600 hover:bg-green-700'
                        : module.status === 'current'
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-gray-400 hover:bg-gray-500'
                    }`}
                    disabled={module.status === 'locked'}
                  >
                    <Play className="h-4 w-4 mr-2" />
                    {module.status === 'completed' ? 'Review Module' : 
                     module.status === 'current' ? 'Continue Learning' : 
                     'Unlock Module'}
                  </Button>
                  
                  {module.status === 'locked' && (
                    <p className="text-xs text-center text-gray-500 mt-2">
                      Complete previous modules to unlock
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

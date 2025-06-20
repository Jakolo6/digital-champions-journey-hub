
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { MapPin, CheckCircle, Lock, Star } from "lucide-react";

export const JourneyMap = () => {
  const [selectedStation, setSelectedStation] = useState(null);

  const stations = [
    {
      id: 1,
      title: "Digital Fundamentals",
      type: "Essential",
      status: "completed",
      credits: 15,
      position: { x: 20, y: 30 },
      description: "Master the basics of digital transformation in supply chain"
    },
    {
      id: 2,
      title: "Data Analytics",
      type: "Essential",
      status: "completed",
      credits: 20,
      position: { x: 35, y: 20 },
      description: "Unlock the power of data-driven decision making"
    },
    {
      id: 3,
      title: "Process Optimization",
      type: "Essential", 
      status: "current",
      credits: 25,
      position: { x: 50, y: 40 },
      description: "Streamline operations with digital tools"
    },
    {
      id: 4,
      title: "AI & Automation",
      type: "Deep Dive",
      status: "locked",
      credits: 30,
      position: { x: 65, y: 25 },
      description: "Explore artificial intelligence applications"
    },
    {
      id: 5,
      title: "Sustainability Tech",
      type: "Deep Dive",
      status: "locked",
      credits: 25,
      position: { x: 80, y: 35 },
      description: "Green technologies for sustainable supply chains"
    },
    {
      id: 6,
      title: "Future Explorer",
      type: "Bonus",
      status: "locked",
      credits: 40,
      position: { x: 90, y: 50 },
      description: "Cutting-edge innovations and emerging trends"
    }
  ];

  const totalCredits = 155;
  const earnedCredits = 35;
  const progressPercentage = (earnedCredits / totalCredits) * 100;

  return (
    <section id="journey" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Learning Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Navigate through your personalized learning path. Complete stations to unlock new challenges and earn badges.
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-green-50 border-2">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Journey Progress</h3>
                <p className="text-gray-600">Keep going! You're making great progress.</p>
              </div>
              
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{earnedCredits}</div>
                  <div className="text-sm text-gray-600">Credits Earned</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">2/6</div>
                  <div className="text-sm text-gray-600">Stations Complete</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                <span className="text-sm font-medium text-blue-600">{Math.round(progressPercentage)}%</span>
              </div>
              <Progress value={progressPercentage} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Interactive Journey Map */}
        <Card className="mb-8">
          <CardContent className="p-0">
            <div className="relative h-96 bg-gradient-to-br from-blue-100 via-green-50 to-orange-50 rounded-lg overflow-hidden">
              {/* Path Line */}
              <svg className="absolute inset-0 w-full h-full">
                <path
                  d="M 80 120 Q 200 80 320 160 Q 440 100 560 200 Q 680 120 800 240"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                  fill="none"
                  className="animate-pulse"
                />
              </svg>

              {/* Journey Stations */}
              {stations.map((station) => (
                <div
                  key={station.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-110 ${
                    selectedStation === station.id ? 'scale-110 z-10' : 'z-0'
                  }`}
                  style={{
                    left: `${station.position.x}%`,
                    top: `${station.position.y}%`
                  }}
                  onClick={() => setSelectedStation(selectedStation === station.id ? null : station.id)}
                >
                  <div className={`relative w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                    station.status === 'completed' 
                      ? 'bg-green-500 text-white' 
                      : station.status === 'current'
                      ? 'bg-blue-500 text-white animate-pulse'
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    {station.status === 'completed' ? (
                      <CheckCircle className="h-8 w-8" />
                    ) : station.status === 'current' ? (
                      <MapPin className="h-8 w-8" />
                    ) : (
                      <Lock className="h-8 w-8" />
                    )}
                  </div>
                  
                  <Badge 
                    className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs ${
                      station.type === 'Essential' 
                        ? 'bg-blue-100 text-blue-800'
                        : station.type === 'Deep Dive'
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}
                  >
                    {station.type}
                  </Badge>
                </div>
              ))}
            </div>

            {/* Station Details */}
            {selectedStation && (
              <div className="p-6 border-t bg-gray-50">
                {(() => {
                  const station = stations.find(s => s.id === selectedStation);
                  return (
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{station.title}</h4>
                        <p className="text-gray-600 mb-2">{station.description}</p>
                        <div className="flex items-center gap-4">
                          <Badge variant="secondary">{station.credits} Credits</Badge>
                          <Badge 
                            className={
                              station.status === 'completed' 
                                ? 'bg-green-100 text-green-800'
                                : station.status === 'current'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-800'
                            }
                          >
                            {station.status === 'completed' ? 'Completed' : 
                             station.status === 'current' ? 'In Progress' : 'Locked'}
                          </Badge>
                        </div>
                      </div>
                      
                      <Button 
                        className={
                          station.status === 'completed' 
                            ? 'bg-green-600 hover:bg-green-700'
                            : station.status === 'current'
                            ? 'bg-blue-600 hover:bg-blue-700'
                            : 'bg-gray-400 cursor-not-allowed'
                        }
                        disabled={station.status === 'locked'}
                      >
                        {station.status === 'completed' ? 'Review' : 
                         station.status === 'current' ? 'Continue' : 'Locked'}
                      </Button>
                    </div>
                  );
                })()}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

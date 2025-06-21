
import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { BrainCircuit, DatabaseZap, Rocket, Factory, CheckCircle2, Circle, PlayCircle, Calendar, Video, ExternalLink } from "lucide-react";
import { modules, Module, Session, SelfLearningItem } from "@/lib/moduleData";

const ModuleDetailPage = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  
  const module = modules.find(m => m.id === moduleId);
  
  // Local state for tracking self-learning items completion
  const [selfLearningItems, setSelfLearningItems] = useState<SelfLearningItem[]>(
    module?.selfLearningItems || []
  );
  
  if (!module) {
    return <Navigate to="/dashboard" replace />;
  }

  const getModuleIcon = (moduleId: string) => {
    switch (moduleId) {
      case '1': return BrainCircuit;
      case '2': return DatabaseZap;
      case '3': return Rocket;
      case '4': return Factory;
      default: return BrainCircuit;
    }
  };

  const IconComponent = getModuleIcon(moduleId!);

  const getFormatIcon = (format: Session['format']) => {
    switch (format) {
      case 'Lecture':
      case 'Modulhandbuch':
        return <BrainCircuit className="h-5 w-5" />;
      case 'Seminar':
      case 'Workshop':
        return <DatabaseZap className="h-5 w-5" />;
      default:
        return <BrainCircuit className="h-5 w-5" />;
    }
  };

  const getStatusColor = (type: Session['type']) => {
    return type === 'Essential' ? 'bg-blue-500' : 'bg-orange-500';
  };

  // Mock progress data - in real app this would come from user progress
  const getSessionStatus = (sessionId: string) => {
    // Mock logic: first 2 sessions completed, 3rd current, rest locked
    const sessionIndex = module.sessions.findIndex(s => s.id === sessionId);
    if (sessionIndex < 2) return 'completed';
    if (sessionIndex === 2) return 'current';
    return 'locked';
  };

  const completedSessions = module.sessions.filter(s => getSessionStatus(s.id) === 'completed').length;
  const totalSessions = module.sessions.length;
  const progressPercentage = (completedSessions / totalSessions) * 100;

  const essentialSessions = module.sessions.filter(session => session.type === 'Essential');
  const deepDiveSessions = module.sessions.filter(session => session.type === 'Deep Dive');

  const toggleSelfLearningItem = (index: number) => {
    setSelfLearningItems(prev => 
      prev.map((item, i) => 
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Navigation />
      
      {/* Module Header */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <IconComponent className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              {module.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {module.description}
            </p>
          </div>

          {/* Module Progress Section */}
          <Card className="mb-8 shadow-lg">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Module Progress</h3>
                <p className="text-gray-600">Progress: {completedSessions} of {totalSessions} sessions completed</p>
              </div>
              
              <div className="mb-6">
                <Progress value={progressPercentage} className="h-3" />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm font-medium text-gray-600">Overall Progress</span>
                  <span className="text-sm font-medium text-blue-600">{Math.round(progressPercentage)}%</span>
                </div>
              </div>

              {/* Horizontal Progress Path */}
              <div className="relative">
                <div className="flex justify-between items-center mb-4 overflow-x-auto">
                  {module.sessions.map((session, index) => {
                    const status = getSessionStatus(session.id);
                    return (
                      <div key={session.id} className="flex flex-col items-center relative min-w-0 flex-1">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all border-2 ${
                          status === 'completed' 
                            ? 'bg-green-500 text-white border-green-400 shadow-lg' 
                            : status === 'current'
                            ? 'bg-blue-500 text-white border-blue-400 shadow-lg'
                            : 'bg-gray-200 text-gray-500 border-gray-300'
                        }`}>
                          {status === 'completed' ? (
                            <CheckCircle2 className="h-5 w-5" />
                          ) : status === 'current' ? (
                            <PlayCircle className="h-5 w-5" />
                          ) : (
                            <Circle className="h-5 w-5" />
                          )}
                        </div>
                        <span className="text-xs text-center text-gray-600 max-w-20 leading-tight truncate">
                          {session.title}
                        </span>
                        
                        {/* Connection Line */}
                        {index < module.sessions.length - 1 && (
                          <div className="absolute top-5 left-10 w-full h-0.5 bg-gray-300 -z-10" style={{
                            width: 'calc(100% - 2.5rem)'
                          }}></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sessions Timeline */}
          <div className="space-y-8">
            {/* Essential Sessions */}
            {essentialSessions.length > 0 && (
              <div>
                <div className="flex items-center mb-6">
                  <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">
                    Essential Sessions
                  </Badge>
                  <div className="flex-1 h-px bg-blue-200 ml-4"></div>
                </div>
                
                <div className="space-y-4">
                  {essentialSessions.map((session, index) => (
                    <Card key={session.id} className="hover:shadow-lg transition-all duration-300 border border-gray-200">
                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-4">
                          <div className="flex flex-col items-center">
                            <div className={`w-3 h-3 rounded-full shadow-sm ${getStatusColor(session.type)}`}></div>
                            {index < essentialSessions.length - 1 && (
                              <div className="w-px h-16 bg-blue-200 mt-2"></div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              {getFormatIcon(session.format)}
                              <Badge variant="outline" className="text-xs">
                                {session.format}
                              </Badge>
                            </div>
                            
                            <CardTitle className="text-lg mb-2 text-gray-900">
                              {session.title}
                            </CardTitle>
                            
                            <div className="text-sm text-gray-600 mb-2">
                              <strong>Speakers:</strong> {session.speakers.join(', ')}
                            </div>
                            
                            <CardDescription className="mb-4 text-gray-700">
                              {session.description}
                            </CardDescription>

                            {/* Session Actions */}
                            <div className="flex flex-col gap-3">
                              {session.nextLiveSessionDate && (
                                <div className="flex items-center gap-2 text-sm text-blue-700 bg-blue-50 px-3 py-2 rounded-md border border-blue-200">
                                  <Calendar className="h-4 w-4" />
                                  <span><strong>Next Live Session:</strong> {session.nextLiveSessionDate}</span>
                                </div>
                              )}
                              
                              {session.sessionRecordingUrl && (
                                <Button 
                                  variant="outline" 
                                  className="w-fit"
                                  onClick={() => window.open(session.sessionRecordingUrl, '_blank')}
                                >
                                  <Video className="h-4 w-4 mr-2" />
                                  Watch Recording
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Deep Dive Sessions */}
            {deepDiveSessions.length > 0 && (
              <div>
                <div className="flex items-center mb-6">
                  <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
                    Deep Dive Sessions
                  </Badge>
                  <div className="flex-1 h-px bg-orange-200 ml-4"></div>
                </div>
                
                <div className="space-y-4">
                  {deepDiveSessions.map((session, index) => (
                    <Card key={session.id} className="hover:shadow-lg transition-all duration-300 border border-gray-200">
                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-4">
                          <div className="flex flex-col items-center">
                            <div className={`w-3 h-3 rounded-full shadow-sm ${getStatusColor(session.type)}`}></div>
                            {index < deepDiveSessions.length - 1 && (
                              <div className="w-px h-16 bg-orange-200 mt-2"></div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              {getFormatIcon(session.format)}
                              <Badge variant="outline" className="text-xs">
                                {session.format}
                              </Badge>
                            </div>
                            
                            <CardTitle className="text-lg mb-2 text-gray-900">
                              {session.title}
                            </CardTitle>
                            
                            <div className="text-sm text-gray-600 mb-2">
                              <strong>Speakers:</strong> {session.speakers.join(', ')}
                            </div>
                            
                            <CardDescription className="mb-4 text-gray-700">
                              {session.description}
                            </CardDescription>

                            {/* Session Actions */}
                            <div className="flex flex-col gap-3">
                              {session.nextLiveSessionDate && (
                                <div className="flex items-center gap-2 text-sm text-blue-700 bg-blue-50 px-3 py-2 rounded-md border border-blue-200">
                                  <Calendar className="h-4 w-4" />
                                  <span><strong>Next Live Session:</strong> {session.nextLiveSessionDate}</span>
                                </div>
                              )}
                              
                              {session.sessionRecordingUrl && (
                                <Button 
                                  variant="outline" 
                                  className="w-fit"
                                  onClick={() => window.open(session.sessionRecordingUrl, '_blank')}
                                >
                                  <Video className="h-4 w-4 mr-2" />
                                  Watch Recording
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Self-Learning Resources Section */}
          {selfLearningItems && selfLearningItems.length > 0 && (
            <Card className="mt-8 shadow-lg border border-green-200">
              <CardHeader>
                <CardTitle className="text-2xl text-green-700">Additional Self-Learning Resources</CardTitle>
                <CardDescription className="text-gray-600">
                  Enhance your learning journey with these recommended courses and materials.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {selfLearningItems.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-colors">
                      <Checkbox
                        id={`item-${index}`}
                        checked={item.completed}
                        onCheckedChange={() => toggleSelfLearningItem(index)}
                        className="border-green-500 data-[state=checked]:bg-green-500"
                      />
                      <div className="flex-1">
                        <label 
                          htmlFor={`item-${index}`}
                          className={`font-medium cursor-pointer transition-colors ${
                            item.completed 
                              ? 'text-green-600 line-through' 
                              : 'text-gray-900 hover:text-green-700'
                          }`}
                        >
                          {item.title}
                        </label>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-green-600 hover:text-green-700 hover:bg-green-100"
                        onClick={() => window.open(item.url, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Open
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ModuleDetailPage;

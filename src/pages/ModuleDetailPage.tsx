
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
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Futuristic animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0">
          {/* Animated stars */}
          <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-60 left-1/3 w-0.5 h-0.5 bg-purple-300 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 right-20 w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-700"></div>
        </div>
      </div>
      
      <Navigation />
      
      {/* Module Header */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                <IconComponent className="h-10 w-10 text-white" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-pulse blur-md opacity-60"></div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent [text-shadow:_0_0_30px_rgb(147_51_234_/_50%)]">
              {module.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {module.description}
            </p>
          </div>

          {/* Module Progress Section */}
          <Card className="mb-8 bg-black/40 backdrop-blur-lg border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-lg"></div>
            <CardContent className="p-6 relative z-10">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-cyan-300 mb-2 [text-shadow:_0_0_20px_rgb(6_182_212_/_50%)]">Module Progress</h3>
                <p className="text-gray-300">Progress: {completedSessions} of {totalSessions} sessions completed</p>
              </div>
              
              <div className="mb-6">
                <Progress value={progressPercentage} className="h-3 bg-gray-700/50" />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm font-medium text-gray-300">Overall Progress</span>
                  <span className="text-sm font-medium text-cyan-400">{Math.round(progressPercentage)}%</span>
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
                            ? 'bg-green-500 text-white border-green-400 shadow-lg shadow-green-500/50' 
                            : status === 'current'
                            ? 'bg-cyan-500 text-white border-cyan-400 shadow-lg shadow-cyan-500/50'
                            : 'bg-gray-700 text-gray-400 border-gray-600'
                        }`}>
                          {status === 'completed' ? (
                            <CheckCircle2 className="h-5 w-5" />
                          ) : status === 'current' ? (
                            <PlayCircle className="h-5 w-5" />
                          ) : (
                            <Circle className="h-5 w-5" />
                          )}
                        </div>
                        <span className="text-xs text-center text-gray-300 max-w-20 leading-tight truncate">
                          {session.title}
                        </span>
                        
                        {/* Glowing Connection Line */}
                        {index < module.sessions.length - 1 && (
                          <div className="absolute top-5 left-10 w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-purple-500/50 -z-10 animate-pulse" style={{
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
                  <Badge className="bg-blue-500/20 text-blue-300 text-lg px-4 py-2 border border-blue-500/50 backdrop-blur-sm">
                    Essential Sessions
                  </Badge>
                  <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent ml-4"></div>
                </div>
                
                <div className="space-y-4">
                  {essentialSessions.map((session, index) => (
                    <Card key={session.id} className="hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-2 bg-black/40 backdrop-blur-lg border border-white/10">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-lg"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-xl rounded-lg"></div>
                      
                      <CardHeader className="pb-4 relative z-10">
                        <div className="flex items-start gap-4">
                          <div className="flex flex-col items-center">
                            <div className={`w-3 h-3 rounded-full shadow-lg ${getStatusColor(session.type)} shadow-blue-500/50`}></div>
                            {index < essentialSessions.length - 1 && (
                              <div className="w-px h-16 bg-gradient-to-b from-blue-500/50 to-transparent mt-2"></div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              {getFormatIcon(session.format)}
                              <Badge variant="outline" className="text-xs border-cyan-500/50 text-cyan-300">
                                {session.format}
                              </Badge>
                            </div>
                            
                            <CardTitle className="text-lg mb-2 text-cyan-300">
                              {session.title}
                            </CardTitle>
                            
                            <div className="text-sm text-gray-400 mb-2">
                              <strong>Speakers:</strong> {session.speakers.join(', ')}
                            </div>
                            
                            <CardDescription className="mb-4 text-gray-300">
                              {session.description}
                            </CardDescription>

                            {/* Session Actions */}
                            <div className="flex flex-col gap-3">
                              {session.nextLiveSessionDate && (
                                <div className="flex items-center gap-2 text-sm text-cyan-400 bg-cyan-500/10 px-3 py-2 rounded-md border border-cyan-500/30">
                                  <Calendar className="h-4 w-4" />
                                  <span><strong>Next Live Session:</strong> {session.nextLiveSessionDate}</span>
                                </div>
                              )}
                              
                              {session.sessionRecordingUrl && (
                                <Button 
                                  variant="outline" 
                                  className="w-fit bg-purple-500/10 border-purple-500/50 text-purple-300 hover:bg-purple-500/20"
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
                  <Badge className="bg-orange-500/20 text-orange-300 text-lg px-4 py-2 border border-orange-500/50 backdrop-blur-sm">
                    Deep Dive Sessions
                  </Badge>
                  <div className="flex-1 h-px bg-gradient-to-r from-orange-500/50 to-transparent ml-4"></div>
                </div>
                
                <div className="space-y-4">
                  {deepDiveSessions.map((session, index) => (
                    <Card key={session.id} className="hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 transform hover:-translate-y-2 bg-black/40 backdrop-blur-lg border border-white/10">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-lg"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-xl rounded-lg"></div>
                      
                      <CardHeader className="pb-4 relative z-10">
                        <div className="flex items-start gap-4">
                          <div className="flex flex-col items-center">
                            <div className={`w-3 h-3 rounded-full shadow-lg ${getStatusColor(session.type)} shadow-orange-500/50`}></div>
                            {index < deepDiveSessions.length - 1 && (
                              <div className="w-px h-16 bg-gradient-to-b from-orange-500/50 to-transparent mt-2"></div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              {getFormatIcon(session.format)}
                              <Badge variant="outline" className="text-xs border-orange-500/50 text-orange-300">
                                {session.format}
                              </Badge>
                            </div>
                            
                            <CardTitle className="text-lg mb-2 text-orange-300">
                              {session.title}
                            </CardTitle>
                            
                            <div className="text-sm text-gray-400 mb-2">
                              <strong>Speakers:</strong> {session.speakers.join(', ')}
                            </div>
                            
                            <CardDescription className="mb-4 text-gray-300">
                              {session.description}
                            </CardDescription>

                            {/* Session Actions */}
                            <div className="flex flex-col gap-3">
                              {session.nextLiveSessionDate && (
                                <div className="flex items-center gap-2 text-sm text-cyan-400 bg-cyan-500/10 px-3 py-2 rounded-md border border-cyan-500/30">
                                  <Calendar className="h-4 w-4" />
                                  <span><strong>Next Live Session:</strong> {session.nextLiveSessionDate}</span>
                                </div>
                              )}
                              
                              {session.sessionRecordingUrl && (
                                <Button 
                                  variant="outline" 
                                  className="w-fit bg-purple-500/10 border-purple-500/50 text-purple-300 hover:bg-purple-500/20"
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
            <Card className="mt-8 bg-black/40 backdrop-blur-lg border border-green-500/30 shadow-2xl shadow-green-500/20">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-lg"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl text-green-300 [text-shadow:_0_0_20px_rgb(34_197_94_/_50%)]">Additional Self-Learning Resources</CardTitle>
                <CardDescription className="text-gray-300">
                  Enhance your learning journey with these recommended courses and materials.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  {selfLearningItems.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                      <Checkbox
                        id={`item-${index}`}
                        checked={item.completed}
                        onCheckedChange={() => toggleSelfLearningItem(index)}
                        className="border-green-500/50 data-[state=checked]:bg-green-500"
                      />
                      <div className="flex-1">
                        <label 
                          htmlFor={`item-${index}`}
                          className={`font-medium cursor-pointer transition-colors ${
                            item.completed 
                              ? 'text-green-400 line-through' 
                              : 'text-cyan-300 hover:text-cyan-200'
                          }`}
                        >
                          {item.title}
                        </label>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-purple-300 hover:text-purple-200 hover:bg-purple-500/10"
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


import { useParams, Navigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Presentation, Users } from "lucide-react";
import { modules, Module, Session } from "@/lib/moduleData";

const ModuleDetailPage = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  
  const module = modules.find(m => m.id === moduleId);
  
  if (!module) {
    return <Navigate to="/dashboard" replace />;
  }

  const getFormatIcon = (format: Session['format']) => {
    switch (format) {
      case 'Lecture':
      case 'Modulhandbuch':
        return <Presentation className="h-5 w-5" />;
      case 'Seminar':
      case 'Workshop':
        return <Users className="h-5 w-5" />;
      default:
        return <Presentation className="h-5 w-5" />;
    }
  };

  const getStatusColor = (type: Session['type']) => {
    return type === 'Essential' ? 'bg-blue-500' : 'bg-orange-500';
  };

  const essentialSessions = module.sessions.filter(session => session.type === 'Essential');
  const deepDiveSessions = module.sessions.filter(session => session.type === 'Deep Dive');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <Navigation />
      
      {/* Module Header */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {module.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {module.description}
            </p>
          </div>

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
                    <Card key={session.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-4">
                          <div className="flex flex-col items-center">
                            <div className={`w-3 h-3 rounded-full ${getStatusColor(session.type)}`}></div>
                            {index < essentialSessions.length - 1 && (
                              <div className="w-px h-16 bg-gray-200 mt-2"></div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              {getFormatIcon(session.format)}
                              <Badge variant="outline" className="text-xs">
                                {session.format}
                              </Badge>
                            </div>
                            
                            <CardTitle className="text-lg mb-2">
                              {session.title}
                            </CardTitle>
                            
                            <div className="text-sm text-gray-600 mb-2">
                              <strong>Speakers:</strong> {session.speakers.join(', ')}
                            </div>
                            
                            <CardDescription>
                              {session.description}
                            </CardDescription>
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
                    <Card key={session.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-4">
                          <div className="flex flex-col items-center">
                            <div className={`w-3 h-3 rounded-full ${getStatusColor(session.type)}`}></div>
                            {index < deepDiveSessions.length - 1 && (
                              <div className="w-px h-16 bg-gray-200 mt-2"></div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              {getFormatIcon(session.format)}
                              <Badge variant="outline" className="text-xs">
                                {session.format}
                              </Badge>
                            </div>
                            
                            <CardTitle className="text-lg mb-2">
                              {session.title}
                            </CardTitle>
                            
                            <div className="text-sm text-gray-600 mb-2">
                              <strong>Speakers:</strong> {session.speakers.join(', ')}
                            </div>
                            
                            <CardDescription>
                              {session.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ModuleDetailPage;


import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { BrainCircuit, DatabaseZap, Rocket, Factory, CheckCircle2, Circle, PlayCircle, Calendar, Video, ExternalLink, Download, MessageSquare, Lock, BookOpen, Users, UserCheck, GraduationCap, Network } from "lucide-react";
import { modules, Module, Session, SelfLearningItem } from "@/lib/moduleData";

const ModuleDetailPage = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  
  const module = modules.find(m => m.id === moduleId);
  
  // Local state for tracking self-learning items completion
  const [selfLearningItems, setSelfLearningItems] = useState<SelfLearningItem[]>(
    module?.selfLearningItems || []
  );
  
  // State for selected session
  const [selectedSessionId, setSelectedSessionId] = useState<string>(
    module?.sessions[0]?.id || ''
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

  const toggleSelfLearningItem = (index: number) => {
    setSelfLearningItems(prev => 
      prev.map((item, i) => 
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const completedSelfLearning = selfLearningItems.filter(item => item.completed).length;
  const totalSelfLearning = selfLearningItems.length;

  const selectedSession = module.sessions.find(s => s.id === selectedSessionId);

  const getStatusIcon = (sessionId: string) => {
    const status = getSessionStatus(sessionId);
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'current':
        return <PlayCircle className="h-5 w-5 text-blue-500" />;
      default:
        return <Lock className="h-5 w-5 text-gray-400" />;
    }
  };

  // Define the 4 learning formats with sample content
  const learningFormats = [
    {
      id: 'one-to-many',
      title: 'One to Many (AI Inspiration)',
      icon: Users,
      color: 'from-brand-navy to-brand-navy-dark',
      description: 'Keynotes, Impulse Talks, and Bank Success Stories',
      items: [
        { title: 'Keynote: AI Strategy in Banking', description: 'Executive insights on AI transformation roadmap', duration: '45 min' },
        { title: 'Impulse Talk: Data-Driven Decision Making', description: 'Real-world examples from leading banks', duration: '30 min' },
        { title: 'Success Story: AI in Risk Management', description: 'Case study from Commerzbank implementation', duration: '25 min' }
      ]
    },
    {
      id: 'one-to-few',
      title: 'One to Few (AI Experience)',
      icon: UserCheck,
      color: 'from-brand-gold to-brand-gold-dark',
      description: 'Workshops, Leadership Labs, and Roundtables',
      items: [
        { title: 'Workshop: Data-driven Leadership', description: 'Hands-on session for strategic AI adoption', duration: '2 hours' },
        { title: 'Panel: Ethik in der AI-Strategie', description: 'Expert discussion on responsible AI governance', duration: '90 min' },
        { title: 'Leadership Lab: Führen im Zeitalter von AI', description: 'Interactive leadership development session', duration: '3 hours' }
      ]
    },
    {
      id: 'e-learning',
      title: 'E-Learning',
      icon: GraduationCap,
      color: 'from-brand-turquoise to-brand-turquoise-dark',
      description: 'Self-paced Learning Paths',
      items: [
        { title: 'AI Basics for Leaders', description: 'Foundation course on AI technologies and applications', duration: '4 hours' },
        { title: 'Data Literacy Essentials', description: 'Understanding data governance and analytics', duration: '3 hours' },
        { title: 'Responsible AI Implementation', description: 'Ethics, compliance, and risk management', duration: '2.5 hours' }
      ]
    },
    {
      id: 'community',
      title: 'Community',
      icon: Network,
      color: 'from-teal-600 to-teal-800',
      description: 'Exchange Spaces, Leadership Circles, Peer Discussions',
      items: [
        { title: 'AI Leadership Circle', description: 'Monthly peer exchange for senior executives', duration: 'Ongoing' },
        { title: 'Innovation Forum', description: 'Collaborative space for AI project discussions', duration: 'Ongoing' },
        { title: 'Expert Q&A Sessions', description: 'Direct access to AI specialists and consultants', duration: 'Weekly' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Module Header with Commerzbank Branding */}
      <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy border-b-4 border-brand-gold">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-gold-dark rounded-full flex items-center justify-center shadow-lg">
                <IconComponent className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">{module.title}</h1>
                <p className="text-brand-turquoise-light">{module.description}</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Large Overall Progress Circle */}
            <div className="md:col-span-2">
              <Card className="p-6 bg-white/10 backdrop-blur border-brand-gold/30">
                <div className="flex items-center gap-6">
                  <div className="relative w-24 h-24">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="rgba(255,255,255,0.2)"
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
                        strokeDasharray={`${progressPercentage * 2.51} 251`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold text-white">{Math.round(progressPercentage)}%</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Overall Module Progress</h3>
                    <p className="text-brand-turquoise-light">Keep up the great work!</p>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Sessions Completed */}
            <div>
              <Card className="p-6 text-center bg-white/10 backdrop-blur border-brand-gold/30">
                <div className="flex items-center justify-center mb-2">
                  <PlayCircle className="h-8 w-8 text-brand-gold" />
                </div>
                <div className="text-2xl font-bold text-white">{completedSessions} / {totalSessions}</div>
                <div className="text-sm text-brand-turquoise-light">Sessions Completed</div>
              </Card>
            </div>
            
            {/* Self-Learning Completed */}
            <div>
              <Card className="p-6 text-center bg-white/10 backdrop-blur border-brand-gold/30">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="h-8 w-8 text-brand-turquoise" />
                </div>
                <div className="text-2xl font-bold text-white">{completedSelfLearning} / {totalSelfLearning}</div>
                <div className="text-sm text-brand-turquoise-light">Self-Learning Completed</div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Formats Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-turquoise/5 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Learning Formats</h2>
            <p className="text-lg text-gray-600 mb-4">Four distinct approaches to AI leadership development</p>
            <Button 
              onClick={() => window.location.href = '/learning-formats'}
              className="bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-semibold"
            >
              View All Format Details & Intensity Levels
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {learningFormats.map((format) => {
              const FormatIcon = format.icon;
              return (
                <Card key={format.id} className="overflow-hidden border-2 hover:border-brand-gold transition-all hover:shadow-xl">
                  {/* Format Header */}
                  <div className={`h-3 bg-gradient-to-r ${format.color}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${format.color} flex items-center justify-center`}>
                        <FormatIcon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-brand-navy">{format.title}</CardTitle>
                        <CardDescription className="text-sm">{format.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {format.items.map((item, idx) => (
                        <div key={idx} className="p-4 bg-gray-50 rounded-lg hover:bg-brand-turquoise/10 transition-colors border border-gray-200">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-brand-navy">{item.title}</h4>
                            <Badge variant="outline" className="text-xs">{item.duration}</Badge>
                          </div>
                          <p className="text-sm text-gray-600">{item.description}</p>
                          <Button variant="ghost" size="sm" className="mt-2 text-brand-navy hover:text-brand-gold">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Learn More
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Original Sessions Layout (kept for backward compatibility) */}
      <div className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Module Sessions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Interactive Session Timeline */}
            <div className="lg:col-span-1">
              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl">Module Sessions</CardTitle>
                  <CardDescription>Click on any session to view details</CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <div className="space-y-4">
                    {module.sessions.map((session, index) => (
                      <div 
                        key={session.id}
                        className={`flex items-start gap-4 p-4 rounded-lg cursor-pointer transition-all hover:bg-gray-50 ${
                          selectedSessionId === session.id ? 'bg-blue-50 border-2 border-blue-200' : 'border border-gray-200'
                        }`}
                        onClick={() => setSelectedSessionId(session.id)}
                      >
                        <div className="flex flex-col items-center">
                          {getStatusIcon(session.id)}
                          {index < module.sessions.length - 1 && (
                            <div className="w-px h-8 bg-gray-300 mt-2"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge 
                              className={`text-xs ${
                                session.type === 'Essential' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'
                              }`}
                            >
                              {session.type}
                            </Badge>
                          </div>
                          <h4 className="font-medium text-gray-900 text-sm leading-tight">{session.title}</h4>
                          <p className="text-xs text-gray-600 mt-1">{session.format}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Session Detail View */}
            <div className="lg:col-span-2">
              {selectedSession && (
                <div className="space-y-6">
                  
                  {/* Session Details Card */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge 
                          className={`${
                            selectedSession.type === 'Essential' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'
                          }`}
                        >
                          {selectedSession.type}
                        </Badge>
                        <Badge variant="outline">{selectedSession.format}</Badge>
                      </div>
                      <CardTitle className="text-2xl">{selectedSession.title}</CardTitle>
                      <CardDescription className="text-base">
                        <strong>Speakers:</strong> {selectedSession.speakers.join(', ')}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-6">{selectedSession.description}</p>
                      
                      {/* Action Buttons */}
                      <div className="flex flex-col gap-4">
                        {selectedSession.nextLiveSessionDate && (
                          <div className="flex items-center gap-2 text-sm text-blue-700 bg-blue-50 px-4 py-3 rounded-lg border border-blue-200">
                            <Calendar className="h-5 w-5" />
                            <span><strong>Next Live Session:</strong> {selectedSession.nextLiveSessionDate}</span>
                          </div>
                        )}
                        
                        <div className="flex gap-3">
                          {selectedSession.sessionRecordingUrl && (
                            <Button 
                              className="flex-1"
                              onClick={() => window.open(selectedSession.sessionRecordingUrl, '_blank')}
                            >
                              <Video className="h-4 w-4 mr-2" />
                              Watch Session Recording
                            </Button>
                          )}
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox id="complete" />
                            <label htmlFor="complete" className="text-sm font-medium">
                              Mark as Complete
                            </label>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Downloadable Materials */}
                  {selectedSession.materials && selectedSession.materials.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Downloadable Materials</CardTitle>
                        <CardDescription>Access session resources and materials</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {selectedSession.materials.map((material, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div className="flex items-center gap-3">
                                <Download className="h-5 w-5 text-blue-600" />
                                <span className="font-medium">{material.title}</span>
                              </div>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => window.open(material.url, '_blank')}
                              >
                                Download
                              </Button>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Community & Discussion */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Community & Discussion</CardTitle>
                      <CardDescription>Connect with fellow learners and continue the conversation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        className="w-full" 
                        variant="outline"
                        onClick={() => window.open('https://teams.microsoft.com', '_blank')}
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Join the Discussion on Teams
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Self-Learning Resources */}
                  {selfLearningItems && selfLearningItems.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Self-Learning Resources</CardTitle>
                        <CardDescription>Track your progress through additional learning materials</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {selfLearningItems.map((item, index) => (
                            <div key={index} className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
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
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ModuleDetailPage;

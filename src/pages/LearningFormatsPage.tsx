import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, UserCheck, GraduationCap, Network, Clock, CheckCircle, ArrowRight } from "lucide-react";

export const LearningFormatsPage = () => {
  const learningFormats = [
    {
      id: 'one-to-many',
      title: 'One to Many (AI Inspiration)',
      icon: Users,
      color: 'from-brand-navy to-brand-navy-dark',
      description: 'Large-scale knowledge sharing sessions designed to inspire and inform leadership teams about AI transformation.',
      detailedDescription: 'These sessions bring together multiple leaders to share insights, success stories, and strategic perspectives on AI in banking. Perfect for building awareness and creating momentum for AI initiatives across the organization.',
      intensityLevels: [
        {
          level: 'Foundation',
          duration: '45 minutes',
          format: 'Keynote Session',
          description: 'Executive-level keynote on AI strategy in banking',
          features: [
            'High-level AI transformation overview',
            'Industry trends and competitive landscape',
            'Strategic imperatives for banking leaders',
            'Q&A with senior executives'
          ],
          participants: '50-200 leaders',
          delivery: 'Virtual or In-Person'
        },
        {
          level: 'Intermediate',
          duration: '90 minutes',
          format: 'Impulse Talk Series',
          description: 'Deep-dive presentations on specific AI topics',
          features: [
            'Data-driven decision making frameworks',
            'Real-world case studies from leading banks',
            'Panel discussions with AI experts',
            'Interactive polling and engagement',
            'Networking opportunities'
          ],
          participants: '30-100 leaders',
          delivery: 'Hybrid (Virtual + In-Person)'
        },
        {
          level: 'Advanced',
          duration: '3 hours',
          format: 'Success Story Summit',
          description: 'Comprehensive showcase of AI implementations',
          features: [
            'Multiple case study presentations',
            'ROI analysis and business impact metrics',
            'Implementation roadmap discussions',
            'Breakout sessions by business unit',
            'Strategic planning workshops',
            'Executive networking reception'
          ],
          participants: '20-50 senior leaders',
          delivery: 'In-Person Preferred'
        }
      ]
    },
    {
      id: 'one-to-few',
      title: 'One to Few (AI Experience)',
      icon: UserCheck,
      color: 'from-brand-gold to-brand-gold-dark',
      description: 'Intimate, hands-on sessions that provide practical experience and deep learning for small leadership groups.',
      detailedDescription: 'These interactive workshops and labs offer personalized attention and practical application of AI concepts. Leaders work directly with facilitators and peers to solve real business challenges using AI frameworks and methodologies.',
      intensityLevels: [
        {
          level: 'Foundation',
          duration: '2 hours',
          format: 'Intensive Workshop',
          description: 'Focused workshop on data-driven leadership',
          features: [
            'Introduction to AI leadership frameworks',
            'Hands-on exercises with real data',
            'Small group discussions (6-8 leaders)',
            'Personalized feedback from facilitators',
            'Actionable takeaways and next steps'
          ],
          participants: '6-12 leaders',
          delivery: 'Virtual or In-Person'
        },
        {
          level: 'Intermediate',
          duration: '4 hours',
          format: 'Half-Day Workshop',
          description: 'Comprehensive leadership lab with practical applications',
          features: [
            'AI ethics and governance deep-dive',
            'Case study analysis and problem-solving',
            'Role-playing scenarios and simulations',
            'Peer learning and knowledge exchange',
            'Development of personal AI leadership plan',
            'Lunch and networking session'
          ],
          participants: '8-15 leaders',
          delivery: 'In-Person Recommended'
        },
        {
          level: 'Advanced',
          duration: '8 hours',
          format: 'Full-Day Onsite Workshop',
          description: 'Immersive leadership transformation experience',
          features: [
            'Strategic AI roadmap development',
            'Executive coaching and mentoring',
            'Cross-functional team collaboration exercises',
            'AI vendor and technology demonstrations',
            'Change management strategy sessions',
            'Organizational readiness assessment',
            'Action planning and commitment sessions',
            'Gourmet meals and premium networking'
          ],
          participants: '10-20 senior leaders',
          delivery: 'Exclusive Onsite Experience'
        }
      ]
    },
    {
      id: 'e-learning',
      title: 'E-Learning',
      icon: GraduationCap,
      color: 'from-brand-turquoise to-brand-turquoise-dark',
      description: 'Self-paced digital learning paths that allow leaders to build AI knowledge at their own convenience.',
      detailedDescription: 'Flexible online courses designed for busy executives, featuring video lectures, interactive assessments, and downloadable resources. Learn anytime, anywhere, with content tailored to banking leadership.',
      intensityLevels: [
        {
          level: 'Foundation',
          duration: '2-3 hours',
          format: 'AI Basics Micro-Course',
          description: 'Essential AI concepts for banking leaders',
          features: [
            '6 short video modules (15-20 min each)',
            'Interactive knowledge checks',
            'Downloadable executive summaries',
            'Mobile-friendly access',
            'Certificate of completion'
          ],
          participants: 'Individual learning',
          delivery: 'Fully Online, Self-Paced'
        },
        {
          level: 'Intermediate',
          duration: '8-10 hours',
          format: 'Data Literacy Learning Path',
          description: 'Comprehensive data governance and analytics program',
          features: [
            '12 in-depth modules with case studies',
            'Practical exercises and simulations',
            'Peer discussion forums',
            'Expert Q&A sessions (monthly)',
            'Progress tracking and analytics',
            'Personalized learning recommendations',
            'Digital badge upon completion'
          ],
          participants: 'Individual or cohort-based',
          delivery: 'Online with Live Support'
        },
        {
          level: 'Advanced',
          duration: '20-25 hours',
          format: 'AI Leadership Certification',
          description: 'Complete AI transformation leadership program',
          features: [
            '20+ comprehensive modules',
            'Real-world project assignments',
            'One-on-one coaching sessions (3x)',
            'Capstone project presentation',
            'Access to AI leadership community',
            'Quarterly masterclass sessions',
            'Executive mentorship program',
            'Official certification and credentials',
            'Lifetime access to updated content'
          ],
          participants: 'Individual with cohort support',
          delivery: 'Blended (Online + Virtual Coaching)'
        }
      ]
    },
    {
      id: 'community',
      title: 'Community',
      icon: Network,
      color: 'from-teal-600 to-teal-800',
      description: 'Ongoing peer networks and exchange platforms where leaders collaborate, share insights, and drive collective innovation.',
      detailedDescription: 'Build lasting relationships with fellow AI leaders through structured communities of practice. Share challenges, celebrate successes, and accelerate learning through continuous peer engagement.',
      intensityLevels: [
        {
          level: 'Foundation',
          duration: 'Monthly',
          format: 'AI Leadership Circle',
          description: 'Regular peer exchange for senior executives',
          features: [
            'Monthly 90-minute virtual meetups',
            'Rotating discussion topics',
            'Peer-led knowledge sharing',
            'Private discussion forum access',
            'Resource library and best practices'
          ],
          participants: '15-25 leaders per circle',
          delivery: 'Virtual Meetings + Online Platform'
        },
        {
          level: 'Intermediate',
          duration: 'Bi-Weekly',
          format: 'Innovation Forum',
          description: 'Collaborative space for active AI projects',
          features: [
            'Bi-weekly working sessions (2 hours)',
            'Project showcase and feedback',
            'Expert advisor consultations',
            'Cross-bank collaboration opportunities',
            'Innovation challenge participation',
            'Quarterly in-person meetups',
            'Dedicated Slack/Teams channel'
          ],
          participants: '20-40 active members',
          delivery: 'Hybrid (Virtual + Quarterly In-Person)'
        },
        {
          level: 'Advanced',
          duration: 'Ongoing',
          format: 'Executive AI Network',
          description: 'Exclusive network for C-suite AI champions',
          features: [
            'Weekly expert Q&A sessions',
            'Private advisory board access',
            'Exclusive industry events and conferences',
            'Direct line to AI consultants and vendors',
            'Strategic partnership opportunities',
            'Annual leadership summit',
            'Executive retreat experiences',
            'Thought leadership publishing platform',
            'Board-level AI governance resources'
          ],
          participants: '30-50 C-level executives',
          delivery: 'Premium Hybrid Experience'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Learning Formats
          </h1>
          <p className="text-xl text-brand-turquoise-light max-w-3xl mx-auto mb-4">
            Four distinct learning approaches designed for banking leaders
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            Each format offers three intensity levels to match your schedule, learning goals, and organizational needs. 
            From quick inspiration sessions to immersive transformation experiences.
          </p>
        </div>
      </div>

      {/* Formats Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {learningFormats.map((format, formatIndex) => {
            const FormatIcon = format.icon;
            return (
              <div key={format.id} className="scroll-mt-20" id={format.id}>
                {/* Format Header */}
                <div className="mb-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${format.color} flex items-center justify-center shadow-lg`}>
                      <FormatIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-brand-navy">{format.title}</h2>
                      <p className="text-lg text-gray-600 mt-1">{format.description}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 max-w-4xl">
                    {format.detailedDescription}
                  </p>
                </div>

                {/* Intensity Levels */}
                <div className="grid md:grid-cols-3 gap-8">
                  {format.intensityLevels.map((level, levelIndex) => (
                    <Card 
                      key={levelIndex} 
                      className={`relative overflow-hidden border-2 hover:border-brand-gold transition-all hover:shadow-xl ${
                        levelIndex === 2 ? 'ring-2 ring-brand-gold' : ''
                      }`}
                    >
                      {/* Level Badge */}
                      <div className={`absolute top-4 right-4 z-10`}>
                        <Badge 
                          className={`${
                            levelIndex === 0 ? 'bg-blue-100 text-blue-800' :
                            levelIndex === 1 ? 'bg-orange-100 text-orange-800' :
                            'bg-brand-gold text-brand-navy'
                          } font-semibold`}
                        >
                          {level.level}
                        </Badge>
                      </div>

                      {/* Color Bar */}
                      <div className={`h-2 bg-gradient-to-r ${format.color}`}></div>
                      
                      <CardHeader className="pb-4">
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Clock className="h-5 w-5 text-brand-navy" />
                            <span className="text-lg font-bold text-brand-navy">{level.duration}</span>
                          </div>
                          <CardTitle className="text-xl text-brand-navy mb-2">
                            {level.format}
                          </CardTitle>
                          <CardDescription className="text-sm">
                            {level.description}
                          </CardDescription>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        {/* Features List */}
                        <div>
                          <h4 className="font-semibold text-brand-navy mb-3 text-sm">What's Included:</h4>
                          <ul className="space-y-2">
                            {level.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                <CheckCircle className="h-4 w-4 text-brand-turquoise mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Details */}
                        <div className="pt-4 border-t border-gray-200 space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Participants:</span>
                            <span className="font-semibold text-brand-navy">{level.participants}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Delivery:</span>
                            <span className="font-semibold text-brand-navy">{level.delivery}</span>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <Button 
                          className={`w-full mt-4 ${
                            levelIndex === 2 
                              ? 'bg-brand-gold hover:bg-brand-gold-dark text-brand-navy' 
                              : 'bg-brand-navy hover:bg-brand-navy-light text-white'
                          }`}
                        >
                          Learn More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Divider */}
                {formatIndex < learningFormats.length - 1 && (
                  <div className="mt-20 border-t-2 border-brand-gold/20"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-brand-navy to-brand-navy-light py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Begin Your AI Leadership Journey?
          </h2>
          <p className="text-xl text-brand-turquoise-light mb-8">
            Choose the learning format and intensity that fits your schedule and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-semibold">
              Explore All Modules
            </Button>
            <Button size="lg" variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy">
              Contact Learning Advisor
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LearningFormatsPage;


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, MessageCircle, Trophy, ArrowRight } from "lucide-react";

export const CommunitySection = () => {
  const communityStats = [
    { label: "Active Members", value: "2,847", icon: Users, color: "text-blue-600" },
    { label: "Monthly Events", value: "24", icon: Calendar, color: "text-green-600" },
    { label: "Discussions", value: "1,234", icon: MessageCircle, color: "text-purple-600" },
    { label: "Badges Earned", value: "8,921", icon: Trophy, color: "text-orange-600" }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "AI in Supply Chain Webinar",
      date: "Dec 15, 2024",
      time: "2:00 PM CET",
      attendees: 89,
      type: "Live Session"
    },
    {
      id: 2,
      title: "Networking Coffee Chat",
      date: "Dec 18, 2024", 
      time: "10:00 AM CET",
      attendees: 45,
      type: "Community"
    },
    {
      id: 3,
      title: "Future Explorer Showcase",
      date: "Dec 22, 2024",
      time: "3:00 PM CET",
      attendees: 156,
      type: "Presentation"
    }
  ];

  return (
    <section id="community" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with fellow Digital Champions, share insights, and learn together in our vibrant community.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {communityStats.map((stat, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform`} />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                Upcoming Events
              </CardTitle>
              <CardDescription>
                Join live sessions and connect with your peers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{event.title}</h4>
                    <p className="text-sm text-gray-600">{event.date} • {event.time}</p>
                    <div className="flex items-center mt-2">
                      <Badge variant="secondary" className="text-xs mr-2">
                        {event.type}
                      </Badge>
                      <span className="text-xs text-gray-500">
                        {event.attendees} attending
                      </span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="ml-4">
                    Join
                  </Button>
                </div>
              ))}
              
              <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                View All Events
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Community Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-green-600" />
                Community Features
              </CardTitle>
              <CardDescription>
                Engage, learn, and grow together
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <MessageCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Discussion Forums</h4>
                  <p className="text-sm text-gray-600">Share insights and ask questions in topic-specific forums</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Peer Mentoring</h4>
                  <p className="text-sm text-gray-600">Connect with experienced champions for guidance</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Trophy className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Leaderboards</h4>
                  <p className="text-sm text-gray-600">Compete and celebrate achievements with fellow learners</p>
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                Join Community
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

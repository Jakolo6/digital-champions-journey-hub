
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/Badge";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Martinez",
      role: "Supply Chain Manager",
      department: "Automotive Division",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "The Digital Champions Program transformed how I approach supply chain challenges. The AI modules were game-changing!",
      credits: 125,
      badges: ["Data Expert", "Process Optimizer", "Future Explorer"]
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Operations Director",
      department: "Logistics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "Incredible learning experience! The gamification kept me engaged, and the practical use cases were directly applicable to my work.",
      credits: 110,
      badges: ["Analytics Pro", "Sustainability Champion"]
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Digital Transformation Lead",
      department: "Innovation",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "The community aspect and peer learning made this program exceptional. I've built lasting connections with fellow champions.",
      credits: 140,
      badges: ["Innovation Leader", "Community Builder", "Mentor"]
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Future Explorer Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from Digital Champions who have transformed their careers and organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.department}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <Quote className="h-6 w-6 text-blue-500 mb-2" />
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {testimonial.credits} Credits
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {testimonial.badges.map((badge, index) => (
                      <Badge 
                        key={index}
                        variant="outline" 
                        className="text-xs bg-blue-50 text-blue-700 border-blue-200"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-full">
            <span className="text-sm font-medium text-gray-700 mr-2">Join</span>
            <Badge className="bg-blue-600 text-white">2,847+</Badge>
            <span className="text-sm font-medium text-gray-700 ml-2">Digital Champions worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Rocket, UserCheck } from "lucide-react";

export const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Wrench,
      title: "Practical & Hands-On",
      description: "Learn through real-world case studies from Arvato and apply your new skills directly to your daily work."
    },
    {
      icon: Rocket,
      title: "Future-Oriented",
      description: "Stay ahead of the curve with deep dives into AI, warehouse automation, robotics, and the future of logistics."
    },
    {
      icon: UserCheck,
      title: "Personalized & Empowering",
      description: "Follow a learning path tailored to your personal goals and earn credits and badges to celebrate your unique achievements."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Become a Digital Champion?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <advantage.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {advantage.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {advantage.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

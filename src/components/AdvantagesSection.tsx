import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, Lightbulb } from "lucide-react";

export const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Access comprehensive AI training designed for leaders. From fundamentals to advanced applications, build the knowledge you need to lead in the AI era with confidence and expertise."
    },
    {
      icon: Users,
      title: "Collaborative Leadership",
      description: "Connect with fellow leaders navigating AI transformation. Share experiences, discuss challenges, and build a network of AI-enabled leaders driving innovation across industries."
    },
    {
      icon: Lightbulb,
      title: "Practical Innovation",
      description: "Apply AI concepts to real business scenarios. Learn through case studies, hands-on exercises, and strategic frameworks that translate directly into actionable leadership decisions."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why AI Leadership Matters
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-brand-yellow/20 rounded-full flex items-center justify-center">
                  <advantage.icon className="h-8 w-8 text-brand-petrol" />
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

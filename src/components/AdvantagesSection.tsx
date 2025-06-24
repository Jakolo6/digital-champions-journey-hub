
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { compass, badge, library } from "lucide-react";

export const AdvantagesSection = () => {
  const advantages = [
    {
      icon: compass,
      title: "Structured Learning Paths",
      description: "We've evolved beyond a simple course catalog. Version 2.0 introduces a clear, guided journey through structured modules, helping you build skills logically and see your path forward."
    },
    {
      icon: badge,
      title: "Gamified & Rewarding",
      description: "Your progress now matters more than ever. Earn credits for every session, unlock prestigious badges for your achievements, and track your entire journey on your personal dashboard."
    },
    {
      icon: library,
      title: "All-in-One Module Hubs",
      description: "Say goodbye to searching for resources. Each module now has a dedicated hub page with everything you need: session details, recordings, downloadable materials, and community links."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Digital Champions 2.0: What's New in Your Journey
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

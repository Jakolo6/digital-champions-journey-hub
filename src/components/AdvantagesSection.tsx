import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Library, Users, Rocket } from "lucide-react";

export const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Library,
      title: "Your Central Learning Hub",
      description: "No more searching for scattered materials. All resources for your entire learning journey, from session details and recordings to downloadable materials, can now be found in one single, integrated platform."
    },
    {
      icon: Users,
      title: "A Thriving Community Network",
      description: "Learning is better together. We've integrated direct links to discussion forums in Microsoft Teams, making it easier than ever to connect with peers, share insights, and foster a strong community of exchange."
    },
    {
      icon: Rocket,
      title: "Future-Oriented & Hands-On",
      description: "The curriculum is now more forward-thinking and more practical. Dive into topics like AI and automation, and learn through real-world case studies you can apply directly to your work."
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

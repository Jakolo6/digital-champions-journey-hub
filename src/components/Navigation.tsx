
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, User, Trophy, Map, BookOpen, Users } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Journey Map", icon: Map, href: "#journey" },
    { name: "My Stations", icon: BookOpen, href: "#modules" },
    { name: "Use Case Library", icon: BookOpen, href: "#cases" },
    { name: "Community", icon: Users, href: "#community" },
    { name: "Profile & Badges", icon: Trophy, href: "#profile" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DC</span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">Digital Champions</span>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 hover:bg-blue-50 rounded-lg"
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.name}
              </a>
            ))}
            <div className="flex items-center space-x-3">
              <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                85 Credits
              </Badge>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                </a>
              ))}
              <div className="flex items-center justify-between px-3 py-2">
                <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                  85 Credits
                </Badge>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Profile
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

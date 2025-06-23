import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Linkedin, Twitter } from "lucide-react";
import myLogo from '@/assets/dcp_logo.png'; // Import the logo

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src={myLogo} // Use the imported logo variable
                alt="Digital Champions Program" 
                className="h-8 w-auto mr-3" // Use w-auto for correct aspect ratio
              />
              <span className="text-xl font-bold">Digital Champions Program</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering Arvato Supply Chain Solutions employees with cutting-edge digital skills and transformative learning experiences.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/dashboard" className="hover:text-blue-400 transition-colors">Dashboard</Link></li>
              <li><Link to="/community" className="hover:text-blue-400 transition-colors">Community</Link></li>
              <li><Link to="/login" className="hover:text-blue-400 transition-colors">Sign In</Link></li>
              <li><Link to="/register" className="hover:text-blue-400 transition-colors">Sign Up</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-sm">support@arvato.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-sm">+49 (0) 5241 80-0</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-sm">Gütersloh, Germany</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 Arvato Supply Chain Solutions. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Badge variant="secondary" className="bg-blue-900 text-blue-200">
              Powered by Lovable AI
            </Badge>
            <span className="text-gray-400 text-sm">Version 2.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

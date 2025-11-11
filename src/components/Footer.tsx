import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Linkedin, Twitter, Users, MessageCircle, Network } from "lucide-react";
import myLogo from '@/assets/dcp_logo.png';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy text-white py-12 px-4 sm:px-6 lg:px-8 border-t-4 border-brand-gold">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src={myLogo}
                alt="AI Leadership Platform" 
                className="h-8 w-auto mr-3"
              />
              <span className="text-xl font-bold text-brand-gold">AI Leadership Platform</span>
            </Link>
            <p className="text-brand-turquoise-light mb-4 max-w-md font-semibold">
              Your AI Learning Journey is part of the Commerzbank Future Skills Initiative.
            </p>
            <p className="text-gray-300 mb-4 max-w-md text-sm">
              Empowering bank leaders with strategic AI knowledge, ethical frameworks, and transformative leadership skills for the digital banking era.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
              <Button size="sm" variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy">
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-brand-gold">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-brand-turquoise transition-colors">Home</Link></li>
              <li><Link to="/dashboard" className="hover:text-brand-turquoise transition-colors">AI Learning Journey</Link></li>
              <li><Link to="/community" className="hover:text-brand-turquoise transition-colors">Leadership Community</Link></li>
              <li><Link to="/login" className="hover:text-brand-turquoise transition-colors">Sign In</Link></li>
              <li><Link to="/register" className="hover:text-brand-turquoise transition-colors">Join Program</Link></li>
            </ul>
          </div>

          {/* Community & Support */}
          <div>
            <h4 className="font-semibold mb-4 text-brand-gold">Connect & Support</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Network className="h-4 w-4 mr-2 text-brand-turquoise" />
                <span className="text-sm">AI Community</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-2 text-brand-turquoise" />
                <span className="text-sm">Contact Support</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-brand-turquoise" />
                <span className="text-sm">Leadership Network</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-gold/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm">
            © 2024 Commerzbank AG. Part of the Future Skills Initiative.
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Badge variant="secondary" className="bg-brand-gold/20 text-brand-gold border border-brand-gold">
              Leaders Edition
            </Badge>
            <span className="text-gray-300 text-sm">Version 3.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

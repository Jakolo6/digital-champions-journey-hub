
import { Navigation } from "@/components/Navigation";
import { GamifiedProgress } from "@/components/GamifiedProgress";
import { ModuleCards } from "@/components/ModuleCards";
import { CommunitySection } from "@/components/CommunitySection";
import { Footer } from "@/components/Footer";
import { useAuth } from '@/context/AuthContext';

export const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header Section with Commerzbank Branding */}
      <div className="bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Learning Journey – Leaders Edition
          </h1>
          <p className="text-xl text-brand-turquoise-light max-w-3xl">
            Empowering leadership in a data-driven bank
          </p>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-turquoise/10 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">
              Welcome to your AI Learning Journey
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Here you'll find curated content designed to empower leadership in a data-driven bank.
            </p>
            <p className="text-gray-600 max-w-4xl">
              AI leadership, governance, and transformation intersect with business strategy to create sustainable competitive advantages. 
              This learning platform equips senior decision-makers with the knowledge and tools to navigate the AI-driven future of banking, 
              ensuring ethical implementation, strategic alignment, and organizational readiness for digital transformation.
            </p>
          </div>
          
          {/* Progress Overview */}
          <div className="mb-8">
            <GamifiedProgress />
          </div>
        </div>
      </div>

      {/* Modules Section */}
      <ModuleCards />
      
      {/* Community Section */}
      <CommunitySection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DashboardPage;

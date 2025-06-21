
import { Navigation } from "@/components/Navigation";
import { GamifiedProgress } from "@/components/GamifiedProgress";
import { ModuleCards } from "@/components/ModuleCards";
import { Footer } from "@/components/Footer";
import { useAuth } from '@/context/AuthContext';

export const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <Navigation />
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {user?.name || 'Champion'}!
            </h1>
            <p className="text-gray-600">
              Continue your digital transformation journey
            </p>
          </div>
          
          {/* Add the GamifiedProgress component */}
          <div className="mb-8">
            <GamifiedProgress />
          </div>
        </div>
      </div>
      <ModuleCards />
      <Footer />
    </div>
  );
};

export default DashboardPage;

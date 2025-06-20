
import { Navigation } from "@/components/Navigation";
import { CommunitySection } from "@/components/CommunitySection";
import { Footer } from "@/components/Footer";

export const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <Navigation />
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Digital Champions Community
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect, collaborate, and grow with fellow Digital Champions
            </p>
          </div>
        </div>
      </div>
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default CommunityPage;

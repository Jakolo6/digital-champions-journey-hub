
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, BookOpen, CheckSquare } from "lucide-react";
import { useAuth } from '@/context/AuthContext';
import { modules } from '@/lib/moduleData';

export const GamifiedProgress = () => {
  const { user } = useAuth();
  
  // Calculate self-learning progress
  const totalSelfLearningItems = modules.reduce((total, module) => {
    return total + (module.selfLearningItems?.length || 0);
  }, 0);
  
  const completedSelfLearningItems = modules.reduce((total, module) => {
    const completedInModule = module.selfLearningItems?.filter(item => item.completed).length || 0;
    return total + completedInModule;
  }, 0);
  
  // Mock/placeholder data for gamification
  const earnedCredits = user?.credits || 85;
  const totalCredits = 250;
  const completedModules = 2;
  const totalModules = 4;
  
  const overallProgress = Math.round((earnedCredits / totalCredits) * 100);
  
  return (
    <Card className="bg-gradient-to-r from-blue-50 via-white to-orange-50 border-none shadow-lg">
      <CardContent className="p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - User Status */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Digital Champion in Training
              </h2>
              <p className="text-gray-600">
                Keep up the great work, {user?.name || 'Champion'}!
              </p>
            </div>
            
            {/* Statistics Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/60 rounded-lg backdrop-blur-sm">
                <Trophy className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{earnedCredits}</div>
                <div className="text-sm text-gray-600">Credits Earned</div>
              </div>
              
              <div className="text-center p-4 bg-white/60 rounded-lg backdrop-blur-sm">
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{completedModules} / {totalModules}</div>
                <div className="text-sm text-gray-600">Modules Completed</div>
              </div>
              
              <div className="text-center p-4 bg-white/60 rounded-lg backdrop-blur-sm">
                <CheckSquare className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{completedSelfLearningItems} / {totalSelfLearningItems}</div>
                <div className="text-sm text-gray-600">Resources Completed</div>
              </div>
            </div>
          </div>
          
          {/* Right side - Progress and Next Goal */}
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900">Overall Progress</h3>
                <span className="text-lg font-bold text-blue-600">{overallProgress}%</span>
              </div>
              <Progress value={overallProgress} className="h-3" />
              <p className="text-sm text-gray-600 mt-2">
                {earnedCredits} of {totalCredits} total credits earned
              </p>
            </div>
            
            {/* Next Goal Section */}
            <div className="bg-gradient-to-r from-blue-100 to-orange-100 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">🎯 Next Goal</h4>
              <p className="text-gray-700 mb-3">
                Unlock the 'Innovation Pilot' Badge!
              </p>
              <div className="text-sm text-gray-600">
                Complete Module 3 to earn your next achievement
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

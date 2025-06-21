
import React, { useEffect, useState } from 'react';

export const ScrollConnector = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-8 top-0 h-full w-px z-10 pointer-events-none">
      {/* Background line */}
      <div className="absolute top-20 bottom-20 w-full bg-gradient-to-b from-transparent via-blue-200/30 to-transparent"></div>
      
      {/* Animated progress line */}
      <div 
        className="absolute top-20 w-full bg-gradient-to-b from-blue-400 to-blue-600 transition-all duration-300 ease-out"
        style={{ 
          height: `${(scrollProgress / 100) * (window.innerHeight - 160)}px`,
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
        }}
      ></div>
      
      {/* Glowing dot at the end */}
      <div 
        className="absolute w-3 h-3 -left-1 bg-blue-400 rounded-full shadow-lg transition-all duration-300 ease-out"
        style={{ 
          top: `${20 + (scrollProgress / 100) * (window.innerHeight - 160)}px`,
          boxShadow: '0 0 15px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.4)'
        }}
      ></div>
    </div>
  );
};

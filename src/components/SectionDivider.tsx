
import React from 'react';

interface SectionDividerProps {
  variant?: 'wave' | 'angle' | 'curve';
  flip?: boolean;
  className?: string;
}

export const SectionDivider = ({ variant = 'wave', flip = false, className = '' }: SectionDividerProps) => {
  const getPath = () => {
    switch (variant) {
      case 'wave':
        return "M0,32L48,37.3C96,43,192,53,288,48C384,43,480,21,576,21.3C672,21,768,43,864,48C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z";
      case 'angle':
        return "M0,0L1440,0L1440,64L720,32L0,64Z";
      case 'curve':
        return "M0,0L1440,0L1440,64Q720,32,0,64Z";
      default:
        return "M0,32L48,37.3C96,43,192,53,288,48C384,43,480,21,576,21.3C672,21,768,43,864,48C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z";
    }
  };

  return (
    <div className={`relative ${className}`}>
      <svg
        className={`w-full h-16 ${flip ? 'rotate-180' : ''}`}
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="dividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
          </linearGradient>
        </defs>
        <path
          d={getPath()}
          fill="url(#dividerGradient)"
          className="drop-shadow-sm"
        />
      </svg>
    </div>
  );
};

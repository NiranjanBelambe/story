import React from 'react';
import { Code, Palette, Coffee, Zap, Star, Heart } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const elements = [
    { icon: Code, color: 'text-purple-400', size: 'w-6 h-6', delay: '0s', top: '10%', left: '10%' },
    { icon: Palette, color: 'text-pink-400', size: 'w-8 h-8', delay: '1s', top: '20%', left: '80%' },
    { icon: Coffee, color: 'text-blue-400', size: 'w-5 h-5', delay: '2s', top: '60%', left: '15%' },
    { icon: Zap, color: 'text-purple-500', size: 'w-7 h-7', delay: '3s', top: '70%', left: '85%' },
    { icon: Star, color: 'text-pink-500', size: 'w-4 h-4', delay: '4s', top: '30%', left: '90%' },
    { icon: Heart, color: 'text-blue-500', size: 'w-6 h-6', delay: '5s', top: '80%', left: '5%' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Floating Icons */}
      {elements.map((element, index) => {
        const IconComponent = element.icon;
        return (
          <div
            key={index}
            className="absolute animate-float opacity-20"
            style={{
              top: element.top,
              left: element.left,
              animationDelay: element.delay,
            }}
          >
            <IconComponent className={`${element.size} ${element.color}`} />
          </div>
        );
      })}

      {/* Geometric Shapes */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-purple-500/30 rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 left-1/3 w-16 h-16 border-2 border-pink-500/30 rotate-45 animate-bounce-slow"></div>
      <div className="absolute top-1/2 right-1/6 w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg animate-wiggle"></div>

      {/* SVG Doodles */}
      <svg className="absolute top-1/3 left-1/4 w-32 h-32 opacity-10" viewBox="0 0 100 100">
        <path
          d="M20,50 Q30,20 50,50 T80,50"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-purple-400 animate-pulse"
        />
        <circle cx="20" cy="50" r="3" fill="currentColor" className="text-pink-400" />
        <circle cx="80" cy="50" r="3" fill="currentColor" className="text-blue-400" />
      </svg>

      <svg className="absolute bottom-1/4 right-1/3 w-24 h-24 opacity-15" viewBox="0 0 100 100">
        <polygon
          points="50,10 90,90 10,90"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-pink-500 animate-pulse-slow"
        />
      </svg>

      {/* Particle Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '6s' }}></div>
    </div>
  );
};

export default FloatingElements;
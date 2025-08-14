import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/lottie/Man Working on Laptop.json';
import { log } from 'console';

// SVG Doodle Components with enhanced animations and colors

export const CodingDoodle: React.FC<{ className?: string }> = ({ className = "w-32 h-32" }) => (
  <div className={`${className} animate-float-slow opacity-30`}>
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Laptop */}
      <rect x="40" y="80" width="120" height="80" rx="8" fill="none" stroke="currentColor" strokeWidth="3" className="text-mint-400" />
      <rect x="45" y="85" width="110" height="60" rx="4" fill="currentColor" className="text-dark-800" />
      <rect x="40" y="160" width="120" height="8" rx="4" fill="currentColor" className="text-mint-500" />
      
      {/* Code lines */}
      <line x1="55" y1="100" x2="85" y2="100" stroke="currentColor" strokeWidth="2" className="text-coral-400">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
      </line>
      <line x1="55" y1="110" x2="110" y2="110" stroke="currentColor" strokeWidth="2" className="text-purple-400">
        <animate attributeName="opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite" />
      </line>
      <line x1="55" y1="120" x2="95" y2="120" stroke="currentColor" strokeWidth="2" className="text-mint-400">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
      </line>
      <line x1="55" y1="130" x2="120" y2="130" stroke="currentColor" strokeWidth="2" className="text-pink-400">
        <animate attributeName="opacity" values="1;0.4;1" dur="1.8s" repeatCount="indefinite" />
      </line>
      
      {/* Floating brackets */}
      <text x="20" y="50" fontSize="24" fill="currentColor" className="text-purple-400 animate-bounce-slow">{'{'}</text>
      <text x="170" y="50" fontSize="24" fill="currentColor" className="text-coral-400 animate-bounce-slow">{'}'}</text>
      
      {/* Floating elements */}
      <circle cx="30" cy="30" r="4" fill="currentColor" className="text-mint-400 animate-pulse" />
      <circle cx="180" cy="180" r="4" fill="currentColor" className="text-pink-400 animate-pulse" />
    </svg>
  </div>
);

export const CreativeDoodle: React.FC<{ className?: string }> = ({ className = "w-28 h-28" }) => (
  <div className={`${className} animate-sway opacity-25`}>
    <svg viewBox="0 0 150 150" className="w-full h-full">
      {/* Palette */}
      <ellipse cx="75" cy="75" rx="60" ry="40" fill="none" stroke="currentColor" strokeWidth="3" className="text-coral-400" />
      <ellipse cx="100" cy="60" rx="15" ry="10" fill="none" stroke="currentColor" strokeWidth="2" className="text-coral-400" />
      
      {/* Paint colors */}
      <circle cx="50" cy="60" r="8" fill="currentColor" className="text-purple-500">
        <animate attributeName="r" values="6;10;6" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="55" r="8" fill="currentColor" className="text-mint-500">
        <animate attributeName="r" values="8;6;8" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="90" cy="65" r="8" fill="currentColor" className="text-coral-500">
        <animate attributeName="r" values="7;9;7" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="85" r="8" fill="currentColor" className="text-pink-500">
        <animate attributeName="r" values="6;8;6" dur="3.2s" repeatCount="indefinite" />
      </circle>
      
      {/* Brush */}
      <line x1="110" y1="40" x2="130" y2="20" stroke="currentColor" strokeWidth="4" className="text-peach-600" />
      <ellipse cx="125" cy="25" rx="8" ry="4" fill="currentColor" className="text-mint-400" transform="rotate(45 125 25)" />
      
      {/* Sparkles */}
      <g className="animate-pulse">
        <path d="M20,30 L22,35 L27,33 L22,38 L20,30" fill="currentColor" className="text-purple-300" />
        <path d="M130,100 L132,105 L137,103 L132,108 L130,100" fill="currentColor" className="text-coral-300" />
      </g>
    </svg>
  </div>
);

export const WorkDoodle: React.FC<{ className?: string }> = ({ className = "w-36 h-36" }) => (
  <div className={`${className} animate-bob opacity-20`}>
    <svg viewBox="0 0 180 180" className="w-full h-full">
      {/* Office building */}
      <rect x="60" y="40" width="60" height="100" fill="none" stroke="currentColor" strokeWidth="3" className="text-mint-400" />
      
      {/* Windows */}
      <rect x="70" y="55" width="12" height="12" fill="currentColor" className="text-coral-300">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" />
      </rect>
      <rect x="90" y="55" width="12" height="12" fill="currentColor" className="text-purple-300">
        <animate attributeName="opacity" values="1;0.3;1" dur="3.5s" repeatCount="indefinite" />
      </rect>
      <rect x="70" y="80" width="12" height="12" fill="currentColor" className="text-mint-300">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
      </rect>
      <rect x="90" y="80" width="12" height="12" fill="currentColor" className="text-pink-300">
        <animate attributeName="opacity" values="1;0.4;1" dur="4.5s" repeatCount="indefinite" />
      </rect>
      
      {/* Briefcase */}
      <rect x="20" y="120" width="30" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2" className="text-peach-500" />
      <rect x="30" y="115" width="10" height="8" fill="none" stroke="currentColor" strokeWidth="2" className="text-peach-500" />
      
      {/* Coffee cup */}
      <ellipse cx="140" cy="130" rx="8" ry="12" fill="none" stroke="currentColor" strokeWidth="2" className="text-coral-500" />
      <path d="M148,125 Q155,125 155,135 Q155,140 148,140" fill="none" stroke="currentColor" strokeWidth="2" className="text-coral-500" />
      
      {/* Steam */}
      <path d="M135,115 Q137,110 135,105" fill="none" stroke="currentColor" strokeWidth="2" className="text-mint-300 animate-wiggle-slow" />
      <path d="M140,115 Q142,110 140,105" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-300 animate-wiggle-slow" />
      <path d="M145,115 Q147,110 145,105" fill="none" stroke="currentColor" strokeWidth="2" className="text-coral-300 animate-wiggle-slow" />
      
      {/* Success arrows */}
      <path d="M30,60 L40,50 L35,55 L45,45" fill="none" stroke="currentColor" strokeWidth="2" className="text-mint-400 animate-pulse" />
      <path d="M140,70 L150,60 L145,65 L155,55" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400 animate-pulse" />
    </svg>
  </div>
);

export const StudyDoodle: React.FC<{ className?: string }> = ({ className = "w-32 h-32" }) => (
  <div className={`${className} animate-float opacity-25`}>
    <svg viewBox="0 0 160 160" className="w-full h-full">
      {/* Books stack */}
      <rect x="40" y="100" width="80" height="12" rx="2" fill="currentColor" className="text-purple-400" />
      <rect x="45" y="88" width="70" height="12" rx="2" fill="currentColor" className="text-mint-400" />
      <rect x="50" y="76" width="60" height="12" rx="2" fill="currentColor" className="text-coral-400" />
      
      {/* Graduation cap */}
      <ellipse cx="80" cy="50" rx="30" ry="8" fill="currentColor" className="text-peach-500" />
      <rect x="65" y="45" width="30" height="10" fill="currentColor" className="text-peach-600" />
      <line x1="95" y1="50" x2="110" y2="35" stroke="currentColor" strokeWidth="3" className="text-purple-400" />
      <circle cx="110" cy="35" r="3" fill="currentColor" className="text-purple-400 animate-sway" />
      
      {/* Lightbulb idea */}
      <circle cx="30" cy="40" r="12" fill="none" stroke="currentColor" strokeWidth="2" className="text-coral-400" />
      <rect x="25" y="50" width="10" height="8" fill="none" stroke="currentColor" strokeWidth="2" className="text-coral-400" />
      <line x1="27" y1="58" x2="33" y2="58" stroke="currentColor" strokeWidth="2" className="text-coral-400" />
      
      {/* Light rays */}
      <g className="animate-pulse">
        <line x1="15" y1="25" x2="20" y2="30" stroke="currentColor" strokeWidth="2" className="text-mint-300" />
        <line x1="45" y1="25" x2="40" y2="30" stroke="currentColor" strokeWidth="2" className="text-purple-300" />
        <line x1="10" y1="40" x2="18" y2="40" stroke="currentColor" strokeWidth="2" className="text-coral-300" />
        <line x1="42" y1="40" x2="50" y2="40" stroke="currentColor" strokeWidth="2" className="text-mint-300" />
      </g>
      
      {/* Floating knowledge symbols */}
      <text x="120" y="80" fontSize="16" fill="currentColor" className="text-purple-400 animate-float-fast">π</text>
      <text x="130" y="100" fontSize="14" fill="currentColor" className="text-mint-400 animate-float">∑</text>
      <text x="125" y="120" fontSize="12" fill="currentColor" className="text-coral-400 animate-float-slow">∞</text>
    </svg>
  </div>
);

export const ContactDoodle: React.FC<{ className?: string }> = ({ className = "w-30 h-30" }) => (
  <div className={`${className} animate-wiggle-slow opacity-30`}>
    <svg viewBox="0 0 140 140" className="w-full h-full">
      {/* Phone */}
      <rect x="45" y="30" width="50" height="80" rx="8" fill="none" stroke="currentColor" strokeWidth="3" className="text-mint-400" />
      <circle cx="70" cy="45" r="3" fill="currentColor" className="text-coral-400" />
      <rect x="55" y="55" width="30" height="40" rx="2" fill="currentColor" className="text-dark-700" />
      <circle cx="70" cy="105" r="4" fill="currentColor" className="text-mint-400" />
      
      {/* Message bubbles */}
      <ellipse cx="25" cy="60" rx="15" ry="10" fill="currentColor" className="text-purple-300 animate-pulse" />
      <path d="M25,70 L20,80 L30,75 Z" fill="currentColor" className="text-purple-300" />
      
      <ellipse cx="115" cy="80" rx="18" ry="12" fill="currentColor" className="text-coral-300 animate-pulse" />
      <path d="M115,92 L125,100 L110,95 Z" fill="currentColor" className="text-coral-300" />
      
      {/* Signal waves */}
      <g className="animate-pulse">
        <path d="M100,35 Q110,40 100,45" fill="none" stroke="currentColor" strokeWidth="2" className="text-mint-400" />
        <path d="M105,30 Q120,40 105,50" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400" />
        <path d="M110,25 Q130,40 110,55" fill="none" stroke="currentColor" strokeWidth="2" className="text-coral-400" />
      </g>
      
      {/* Email symbol */}
      <rect x="10" y="100" width="30" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="2" className="text-peach-400" />
      <path d="M10,100 L25,110 L40,100" fill="none" stroke="currentColor" strokeWidth="2" className="text-peach-400" />
      
      {/* Heart for connection */}
      <path d="M120,15 C115,10 105,10 100,15 C95,10 85,10 80,15 C85,25 100,35 100,35 C100,35 115,25 120,15 Z" 
            fill="currentColor" className="text-pink-400 animate-pulse" />
    </svg>
  </div>
);

export const ProjectDoodle: React.FC<{ className?: string }> = ({ className = "w-34 h-34" }) => (
  <div className={`${className} animate-float-fast opacity-25`}>
    <svg viewBox="0 0 170 170" className="w-full h-full">
      {/* Rocket */}
      <ellipse cx="85" cy="60" rx="15" ry="40" fill="currentColor" className="text-mint-400" />
      <path d="M85,20 L75,35 L95,35 Z" fill="currentColor" className="text-coral-500" />
      <ellipse cx="85" cy="60" rx="10" ry="25" fill="currentColor" className="text-dark-700" />
      <circle cx="85" cy="50" r="4" fill="currentColor" className="text-mint-300" />
      
      {/* Fins */}
      <path d="M70,85 L60,95 L70,100 Z" fill="currentColor" className="text-purple-400" />
      <path d="M100,85 L110,95 L100,100 Z" fill="currentColor" className="text-purple-400" />
      
      {/* Fire/exhaust */}
      <g className="animate-wiggle">
        <ellipse cx="85" cy="110" rx="8" ry="12" fill="currentColor" className="text-coral-400" />
        <ellipse cx="85" cy="120" rx="6" ry="10" fill="currentColor" className="text-peach-400" />
        <ellipse cx="85" cy="130" rx="4" ry="8" fill="currentColor" className="text-coral-300" />
      </g>
      
      {/* Stars */}
      <g className="animate-pulse">
        <path d="M30,30 L32,35 L37,33 L32,38 L30,43 L28,38 L23,40 L28,35 L30,30" fill="currentColor" className="text-mint-300" />
        <path d="M130,40 L132,45 L137,43 L132,48 L130,53 L128,48 L123,50 L128,45 L130,40" fill="currentColor" className="text-purple-300" />
        <path d="M140,80 L142,85 L147,83 L142,88 L140,93 L138,88 L133,90 L138,85 L140,80" fill="currentColor" className="text-coral-300" />
        <path d="M25,120 L27,125 L32,123 L27,128 L25,133 L23,128 L18,130 L23,125 L25,120" fill="currentColor" className="text-peach-300" />
      </g>
      
      {/* Building blocks */}
      <rect x="20" y="140" width="15" height="15" fill="currentColor" className="text-purple-400" />
      <rect x="35" y="125" width="15" height="15" fill="currentColor" className="text-mint-400" />
      <rect x="50" y="140" width="15" height="15" fill="currentColor" className="text-coral-400" />
      
      <rect x="105" y="140" width="15" height="15" fill="currentColor" className="text-peach-400" />
      <rect x="120" y="125" width="15" height="15" fill="currentColor" className="text-purple-400" />
      <rect x="135" y="140" width="15" height="15" fill="currentColor" className="text-mint-400" />
    </svg>
  </div>
);

export const PassionDoodle: React.FC<{ className?: string }> = ({ className = "w-28 h-28" }) => (
  <div className={`${className} animate-sway opacity-30`}>
    <svg viewBox="0 0 150 150" className="w-full h-full">
      {/* Guitar */}
      <ellipse cx="75" cy="100" rx="25" ry="35" fill="none" stroke="currentColor" strokeWidth="3" className="text-peach-500" />
      <rect x="70" y="40" width="10" height="60" fill="currentColor" className="text-peach-600" />
      <ellipse cx="75" cy="100" rx="15" ry="25" fill="currentColor" className="text-dark-700" />
      <circle cx="75" cy="100" r="8" fill="none" stroke="currentColor" strokeWidth="2" className="text-peach-300" />
      
      {/* Strings */}
      <line x1="73" y1="40" x2="73" y2="135" stroke="currentColor" strokeWidth="1" className="text-mint-300 animate-wiggle-slow" />
      <line x1="75" y1="40" x2="75" y2="135" stroke="currentColor" strokeWidth="1" className="text-purple-300 animate-wiggle-slow" />
      <line x1="77" y1="40" x2="77" y2="135" stroke="currentColor" strokeWidth="1" className="text-coral-300 animate-wiggle-slow" />
      
      {/* Tuning pegs */}
      <circle cx="68" cy="35" r="3" fill="currentColor" className="text-mint-400" />
      <circle cx="75" cy="35" r="3" fill="currentColor" className="text-purple-400" />
      <circle cx="82" cy="35" r="3" fill="currentColor" className="text-coral-400" />
      
      {/* Music notes */}
      <g className="animate-float">
        <circle cx="30" cy="60" r="4" fill="currentColor" className="text-purple-400" />
        <line x1="34" y1="60" x2="34" y2="45" stroke="currentColor" strokeWidth="2" className="text-purple-400" />
        <path d="M34,45 Q40,43 40,48" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400" />
      </g>
      
      <g className="animate-float-slow">
        <circle cx="120" cy="50" r="4" fill="currentColor" className="text-mint-400" />
        <line x1="124" y1="50" x2="124" y2="35" stroke="currentColor" strokeWidth="2" className="text-mint-400" />
        <path d="M124,35 Q130,33 130,38" fill="none" stroke="currentColor" strokeWidth="2" className="text-mint-400" />
      </g>
      
      {/* Hearts for passion */}
      <path d="M25,100 C20,95 10,95 5,100 C10,110 25,120 25,120 C25,120 40,110 45,100 C40,95 30,95 25,100 Z" 
            fill="currentColor" className="text-coral-300 animate-pulse" />
      
      <path d="M125,110 C122,107 117,107 115,110 C117,115 125,120 125,120 C125,120 133,115 135,110 C133,107 128,107 125,110 Z" 
            fill="currentColor" className="text-pink-300 animate-pulse" />
    </svg>
  </div>
);

// Lottie placeholder component (for when you add actual Lottie files)
// export const LottieAnimation: React.FC<{ 
//   src?: string; 
//   className?: string;
//   fallback?: React.ReactNode;
// }> = ({ src, className = "w-32 h-32", fallback }) => {
//   // For now, return fallback or a placeholder
//   // When you add actual Lottie files, you can use lottie-react here\
//   return (
//     <div className={`${className} flex items-center justify-center`}>
//       {fallback || (
//         <div className="text-4xl animate-bounce"></div>
//       )}
//     </div>
//   );
// };




export const LottieAnimation: React.FC<{
  src?: any;
  className?: string;
  fallback?: React.ReactNode;
  width?: number;
  height?: number;
}> = ({ src, className = "w-50 h-50",width=200,height=200, fallback }) => {

  console.log("LottieAnimation rendered with src:", src);
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: src,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid"
      }
    };
    
  return (
    <div className={`${className} flex items-center justify-center`}>
      
      <Lottie 
	      options={defaultOptions}
        height={height}
        width={width}/>
        
      
    </div>
  );
};
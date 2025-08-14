import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { CodingDoodle, CreativeDoodle } from '../doodles/DoodleComponents';

const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Creative Coder'];

  useEffect(() => {
    const currentRole = roles[currentIndex % roles.length];
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (charIndex > 0) {
              setDisplayText(currentRole.slice(0, charIndex));
              charIndex--;
            } else {
              clearInterval(deleteInterval);
              setCurrentIndex(prev => prev + 1);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 px-4 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-radial from-pink-500/15 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-radial from-mint-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '6s' }}></div>

        {/* Floating Particles */}
        <div className="particles">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: `${4 + Math.random() * 6}px`,
                height: `${4 + Math.random() * 6}px`,
                background: ['#a855f7', '#ec4899', '#14b8a6', '#f97316'][Math.floor(Math.random() * 4)],
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 8}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Doodle Elements */}
      <div className="doodle-container top-20 left-10 hidden lg:block">
        <CodingDoodle className="w-40 h-40" />
      </div>
      <div className="doodle-container top-32 right-16 hidden lg:block">
        <CreativeDoodle className="w-36 h-36" />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center z-10 relative">
        {/* Animated greeting */}
        <div className="mb-6 animate-fade-in-up">
          <span className="text-mint-400 text-lg font-medium tracking-wide">Hello, I'm</span>
        </div>

        {/* Main name with enhanced gradient */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          <span className="text-gradient-rainbow">Your Name</span>
        </h1>

        {/* Animated role with better styling */}
        <div className="mb-8 h-16 flex items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-dark-200">
            I'm a{' '}
            <span className="text-gradient-blue min-w-[300px] inline-block text-left font-bold">
              {displayText}
              <span className="animate-pulse text-coral-400">|</span>
            </span>
          </h2>
        </div>

        {/* Enhanced description */}
        <p className="text-lg md:text-xl text-dark-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in glass p-6 rounded-2xl border border-white/10">
          I craft beautiful, functional, and user-centered digital experiences. 
          Passionate about clean code, innovative solutions, and bringing ideas to life through 
          <span className="text-gradient-pink font-semibold"> creative technology</span>.
        </p>

        {/* Enhanced action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-scale-in">
          <button className="btn-gradient px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 glow-purple">
            View My Work
          </button>
          <button className="px-8 py-4 glass border-2 border-mint-500/30 text-mint-400 font-semibold rounded-full hover:bg-mint-500/10 hover:border-mint-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 glow-mint">
            <Download className="w-5 h-5" />
            Download CV
          </button>
        </div>

        {/* Enhanced social links */}
        <div className="flex justify-center space-x-8 mb-16 animate-fade-in">
          {[
            { icon: Github, href: '#', color: 'hover:text-purple-400', glow: 'hover:glow-purple' },
            { icon: Linkedin, href: '#', color: 'hover:text-mint-400', glow: 'hover:glow-mint' },
            { icon: Mail, href: '#contact', color: 'hover:text-coral-400', glow: 'hover:glow-coral' },
          ].map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className={`text-dark-400 ${social.color} ${social.glow} transition-all duration-300 transform hover:scale-125 p-3 rounded-full glass border border-white/10`}
              >
                <IconComponent className="w-6 h-6" />
              </a>
            );
          })}
        </div>

        {/* Enhanced scroll indicator */}
        <button
          onClick={scrollToNext}
          className="animate-bounce text-gradient-purple hover:text-purple-300 transition-colors duration-300 p-4 rounded-full glass border border-purple-500/20 hover:border-purple-400/40"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>

      {/* Enhanced decorative SVG elements */}
      <div className="absolute top-1/4 left-10 hidden xl:block">
        <svg className="w-24 h-24 opacity-20 animate-float-slow" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" fill="none" className="text-mint-400" />
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" fill="none" className="text-purple-400" />
          <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="2" fill="none" className="text-coral-400" />
          <circle cx="50" cy="50" r="3" fill="currentColor" className="text-pink-400 animate-pulse" />
        </svg>
      </div>

      <div className="absolute bottom-1/4 right-10 hidden xl:block">
        <svg className="w-20 h-20 opacity-25 animate-sway" viewBox="0 0 100 100">
          <polygon points="50,10 90,35 75,85 25,85 10,35" stroke="currentColor" strokeWidth="2" fill="none" className="text-coral-400" />
          <polygon points="50,20 80,40 70,75 30,75 20,40" stroke="currentColor" strokeWidth="2" fill="none" className="text-mint-400" />
          <circle cx="50" cy="50" r="8" fill="currentColor" className="text-purple-400 animate-pulse" />
        </svg>
      </div>

      {/* Floating Code Symbols */}
      <div className="absolute top-32 left-1/4 text-2xl text-mint-400/30 animate-float font-mono hidden lg:block">&lt;/&gt;</div>
      <div className="absolute bottom-32 right-1/4 text-3xl text-coral-400/30 animate-float-slow font-mono hidden lg:block">{'{}'}</div>
      <div className="absolute top-1/2 left-16 text-xl text-purple-400/30 animate-bob font-mono hidden lg:block">( )</div>
      <div className="absolute bottom-1/3 left-1/3 text-2xl text-pink-400/30 animate-sway font-mono hidden lg:block">[ ]</div>
    </section>
  );
};

export default HeroSection;
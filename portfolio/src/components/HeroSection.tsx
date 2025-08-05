import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

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
    <section className="min-h-screen flex items-center justify-center relative pt-20 px-4">
      <div className="max-w-4xl mx-auto text-center z-10">
        {/* Animated greeting */}
        <div className="mb-6 animate-fade-in">
          <span className="text-purple-400 text-lg font-medium">Hello, I'm</span>
        </div>

        {/* Main name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          <span className="text-gradient-purple">Your Name</span>
        </h1>

        {/* Animated role */}
        <div className="mb-8 h-16 flex items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-dark-200">
            I'm a{' '}
            <span className="text-gradient-blue min-w-[300px] inline-block text-left">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-dark-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          I craft beautiful, functional, and user-centered digital experiences. 
          Passionate about clean code, innovative solutions, and bringing ideas to life.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-scale-in">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 glow-purple">
            View My Work
          </button>
          <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            Download CV
          </button>
        </div>

        {/* Social links */}
        <div className="flex justify-center space-x-6 mb-16 animate-fade-in">
          {[
            { icon: Github, href: '#', color: 'hover:text-purple-400' },
            { icon: Linkedin, href: '#', color: 'hover:text-blue-400' },
            { icon: Mail, href: '#contact', color: 'hover:text-pink-400' },
          ].map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className={`text-dark-400 ${social.color} transition-colors duration-300 transform hover:scale-110`}
              >
                <IconComponent className="w-6 h-6" />
              </a>
            );
          })}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="animate-bounce text-purple-400 hover:text-purple-300 transition-colors duration-300"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-purple-500/30 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 border-2 border-pink-500/30 rotate-45 animate-bounce-slow hidden lg:block"></div>
      
      {/* SVG Art */}
      <svg className="absolute top-1/3 right-20 w-32 h-32 opacity-20 hidden xl:block" viewBox="0 0 100 100">
        <path
          d="M10,50 Q30,10 50,50 Q70,90 90,50"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-purple-400 animate-pulse"
        />
        <circle cx="10" cy="50" r="4" fill="currentColor" className="text-pink-400" />
        <circle cx="90" cy="50" r="4" fill="currentColor" className="text-blue-400" />
      </svg>
    </section>
  );
};

export default HeroSection;
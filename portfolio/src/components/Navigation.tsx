import React, { useState, useEffect } from 'react';
import { Menu, X, Code, User, Briefcase, GraduationCap, Heart, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Passions', href: '#passions', icon: Heart },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-[#39FF14] drop-shadow-[0_0_8px_#39FF14]">
              &lt;Dev/&gt;
            </div>
            <div className="ml-2 w-2 h-2 bg-[#39FF14] rounded-full animate-pulse"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center space-x-2 text-[#39FF14] hover:drop-shadow-[0_0_8px_#39FF14] transition-colors duration-200 group"
                >
                  <IconComponent className="w-4 h-4 group-hover:animate-bounce" />
                  <span className="font-medium">{item.name}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#39FF14] hover:drop-shadow-[0_0_8px_#39FF14] transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md rounded-lg mt-2 mb-4 p-4 animate-slide-up">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center space-x-3 w-full text-left py-3 text-[#39FF14] hover:drop-shadow-[0_0_8px_#39FF14] transition-colors duration-200 group"
                >
                  <IconComponent className="w-5 h-5 group-hover:animate-bounce" />
                  <span className="font-medium">{item.name}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Decorative neon line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#39FF14] drop-shadow-[0_0_8px_#39FF14]"></div>
    </nav>
  );
};

export default Navigation;

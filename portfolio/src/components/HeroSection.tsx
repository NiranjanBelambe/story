import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, Download } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['Full Stack Developer', 'Problem Solver', 'AI Enthusiast', 'System Architect'];

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1NVrpuH3ZWjPUxf9VDXGYZMVbVtP7kGOD/view?usp=sharing';
    link.download = 'Niranjan_Belambe_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

  useEffect(() => {
    // Example: placeholder for rendering C++ graphics on canvas
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#39FF14';
        ctx.font = '20px monospace';
        ctx.fillText('C++ Graphics Placeholder', 50, 50);
      }
    }
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-[#39FF14] relative">
      {/* Canvas for C++ graphics */}
      {/* <canvas
        ref={canvasRef}
        width={800}
        height={400}
        className="mb-8 border border-[#39FF14]/30"
      ></canvas> */}

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up drop-shadow-[0_0_8px_#39FF14]">
        Niranjan Belambe
      </h1>

      {/* Animated Role */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        I'm a{' '}
        <span className="drop-shadow-[0_0_6px_#39FF14]">
          {displayText}
          <span className="animate-pulse">|</span>
        </span>
      </h2>

      {/* Buttons */}
      <div className="flex gap-4 mb-12">
        <button className="px-8 py-4 border-2 border-[#39FF14] rounded-full hover:bg-[#39FF14]/10 transition-all">
          View My Work
        </button>
        <button
          onClick={downloadCV}
          className="px-8 py-4 border-2 border-[#39FF14] rounded-full hover:bg-[#39FF14]/10 transition-all flex items-center gap-2"
        >
          <Download className="w-5 h-5" />
          Download CV
        </button>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="animate-bounce p-4 rounded-full border border-[#39FF14]/30 hover:border-[#39FF14]"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;

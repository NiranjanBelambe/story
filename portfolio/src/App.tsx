import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import PassionsSection from './components/PassionsSection';
import ContactSection from './components/ContactSection';
import FloatingElements from './components/FloatingElements';
import Background3D from './components/Background3D';
import './App.css';
import { CreativeDoodle, PassionDoodle ,LottieAnimation} from './doodles/DoodleComponents';
import LaptopMan from './assets/lottie/Man Working on Laptop.json';

function App() {
  return (
    <div className="bg-black relative overflow-y-hidden">
  
  {/* Background layer */}
  <div className="absolute inset-0 z-0">
    <Background3D />
  </div>

  {/* Content layer */}
  <div className="relative z-10">
    <Navigation />
    <main>
      <div>
        <HeroSection />
        {/* <LottieAnimation src={LaptopMan} className="absolute top-50 right-100" width={500} height={600}/> */}
        <AboutSection />
      </div>
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <PassionsSection />
      <ContactSection />
    </main>
  </div>
</div>

  );
}

export default App;

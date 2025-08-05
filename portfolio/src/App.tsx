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
import './App.css';

function App() {
  return (
    <div className="App dark min-h-screen bg-dark-900 text-dark-50 relative overflow-hidden">
      <FloatingElements />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <PassionsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { ProcessFlow } from './components/ProcessFlow';
import { ScienceCards } from './components/ScienceCards';
import { UseCases } from './components/UseCases';
import { Comparison } from './components/Comparison';
import { ThemeSection } from './components/ThemeSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  // Simple cursor follower effect state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white relative selection:bg-cyan-500/30">
      
      {/* Ambient Spotlight following cursor (Desktop only) */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 hidden md:block transition-transform duration-100 ease-linear"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.07), transparent 40%)`
        }}
      />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        
        <div className="relative">
          {/* Decorative separator */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-20" />
          
          <ProcessFlow />
          <ScienceCards />
          <UseCases />
          <Comparison />
          <ThemeSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
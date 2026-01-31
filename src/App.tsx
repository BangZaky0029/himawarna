
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { GalleryPage } from './components/GalleryPage';

function App() {
  const [currentView, setCurrentView] = useState<'main' | 'gallery'>('main');

  // Handle scroll to top when changing views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen bg-white selection:bg-purple-100 selection:text-purple-900">
      <Navbar onNavigate={(view) => setCurrentView(view)} isGalleryView={currentView === 'gallery'} />
      
      {currentView === 'main' ? (
        <main>
          <Hero onShowProjects={() => {
            const el = document.getElementById('projects');
            el?.scrollIntoView({ behavior: 'smooth' });
          }} />
          <Services />
          <Expertise />
          <Projects onSeeMore={() => setCurrentView('gallery')} />
          <CTA />
        </main>
      ) : (
        <GalleryPage onBack={() => setCurrentView('main')} />
      )}
      
      <Footer onNavigate={(view) => setCurrentView(view)} />
    </div>
  );
}

export default App;

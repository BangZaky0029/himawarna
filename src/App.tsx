
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { GalleryPage } from './components/GalleryPage';

const LoadingScreen = () => (
  <motion.div 
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-6"
    >
      <img src="/icon_logo_03.PNG" alt="HIMAWARNA Icon" className="w-24 h-24 object-contain" />
      
      {/* Animasi mengambang ke atas ke bawah untuk teks HIMAWARNA */}
      <motion.h1 
        animate={{ y: [0, -15, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="text-4xl md:text-5xl font-black tracking-widest text-slate-900"
      >
        HIMA<span className="himawarna-text-gradient">WARNA</span>
      </motion.h1>

      <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden mt-4">
        <motion.div 
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          className="w-full h-full himawarna-gradient"
        />
      </div>
    </motion.div>
  </motion.div>
);

function App() {
  const [currentView, setCurrentView] = useState<'main' | 'gallery'>('main');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  return (
    <div className="min-h-screen bg-white selection:bg-purple-100 selection:text-purple-900">
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 1 }}
      >
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
      </motion.div>
    </div>
  );
}

export default App;

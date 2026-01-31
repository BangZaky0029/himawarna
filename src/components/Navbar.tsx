
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, CONTACT_INFO } from '../constants';

interface NavbarProps {
  onNavigate: (view: 'main' | 'gallery') => void;
  isGalleryView: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, isGalleryView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['about', 'services', 'expertise', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    
    if (isGalleryView) {
      onNavigate('main');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const waLinkFreeSurvey = `https://wa.me/62${CONTACT_INFO.phone.substring(1)}?text=Halo%20HIMAWARNA,%20saya%20tertarik%20dengan%20layanan%20Anda%20dan%20ingin%20mengajukan%20Free%20Survey%20lokasi.`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isGalleryView ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => onNavigate('main')} 
              className="group bg-transparent border-none cursor-pointer flex items-center"
            >
              <img 
                src="/full_logo_01.png" 
                alt="HIMAWARNA Logo" 
                className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </button>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`text-sm font-bold transition-colors relative group ${isActive ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 himawarna-gradient transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </a>
              );
            })}
            <a 
              href={waLinkFreeSurvey}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full text-white text-sm font-bold himawarna-gradient hover:shadow-lg hover:shadow-blue-200 transition-all btn-hover-gradient shadow-md"
            >
              Free Survey
            </a>
          </div>

          <button 
            className="md:hidden p-2 text-slate-900" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-bold text-slate-800 py-2 border-b border-slate-50"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={waLinkFreeSurvey}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-4 rounded-xl text-white font-bold himawarna-gradient shadow-lg mt-2"
              >
                Free Survey
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  onNavigate: (view: 'main' | 'gallery') => void;
  isGalleryView: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, isGalleryView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if (isGalleryView) {
      onNavigate('main');
      // Delay slightly to let the view switch before scrolling
      setTimeout(() => {
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isGalleryView ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => onNavigate('main')} 
              className="text-2xl font-black tracking-tighter flex items-center gap-1 group bg-transparent border-none cursor-pointer"
            >
              <span className="text-slate-900 group-hover:text-blue-600 transition-colors">HIMA</span>
              <span className="himawarna-text-gradient">WARNA</span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => handleLinkClick(link.href)}
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 himawarna-gradient transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => {
                if (isGalleryView) {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }
              }}
              className="px-6 py-2.5 rounded-full text-white text-sm font-bold himawarna-gradient hover:opacity-90 transition-opacity shadow-md shadow-blue-200"
            >
              Free Survey
            </a>
          </div>

          {/* Mobile Toggle */}
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

      {/* Mobile Menu */}
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
                  className="text-lg font-medium text-slate-800"
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="w-full text-center py-3 rounded-xl text-white font-bold himawarna-gradient"
                onClick={() => handleLinkClick('#contact')}
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

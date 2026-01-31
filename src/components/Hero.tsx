
import React from 'react';
import { motion } from 'framer-motion';
import { HeroProjects } from './HeroProjects';

interface HeroProps {
  onShowProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShowProjects }) => {
  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 z-10">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4"
            >
              Premium Coating Solutions
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6"
            >
              Jasa Aplikator Epoxy & <br />
              <span className="himawarna-text-gradient">Lapangan Profesional</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed"
            >
              Transformasi lantai industri dan lapangan olahraga Anda dengan teknologi coating termutakhir. Kuat, tahan lama, dan berestetika tinggi.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#contact" 
                className="px-8 py-4 rounded-full text-white font-bold himawarna-gradient hover:scale-105 transition-transform shadow-xl shadow-blue-200"
              >
                Konsultasi Gratis
              </a>
              <button 
                onClick={onShowProjects}
                className="px-8 py-4 rounded-full text-slate-700 font-bold bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                Lihat Proyek
              </button>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <HeroProjects />
          </div>
        </div>
      </div>
    </section>
  );
};

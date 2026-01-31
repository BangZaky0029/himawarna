
import React from 'react';
import { motion } from 'framer-motion';
import { HeroProjects } from './HeroProjects';
import { CONTACT_INFO } from '../constants';

interface HeroProps {
  onShowProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShowProjects }) => {
  const waLinkKonsultasi = `https://wa.me/62${CONTACT_INFO.phone.substring(1)}?text=Halo%20HIMAWARNA,%20saya%20ingin%20konsultasi%20mengenai%20rencana%20pemasangan%20epoxy/lapangan%20di%20lokasi%20saya.`;

  return (
    <section id="about" className="relative pt-32 pb-24 lg:pt-56 lg:pb-40 overflow-hidden bg-white">
      {/* Background Decorative Gradient Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 opacity-40"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-[55%] text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-8"
            >
              <span className="flex h-2 w-2 rounded-full himawarna-gradient animate-pulse"></span>
              <span className="text-slate-600 font-bold uppercase tracking-widest text-[10px]">Aplikator Epoxy & Lapangan Terpercaya</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.05] mb-8"
            >
              Jasa Aplikator Epoxy & <br />
              <span className="himawarna-text-gradient">Lapangan Profesional</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Solusi lantai industrial dan lapangan olahraga dengan teknologi coating modern. Menjamin durabilitas tinggi, estetika premium, dan pengerjaan tepat waktu.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-5"
            >
              <a 
                href={waLinkKonsultasi}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-5 rounded-2xl font-black text-white overflow-hidden shadow-2xl shadow-blue-200 transition-all hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 himawarna-gradient group-hover:opacity-90 transition-opacity"></div>
                <span className="relative z-10">Konsultasi Gratis</span>
              </a>
              <button 
                onClick={onShowProjects}
                className="px-10 py-5 rounded-2xl text-slate-900 font-black bg-white border-2 border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all shadow-xl shadow-slate-100/50"
              >
                Lihat Proyek
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900">500+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Proyek Selesai</span>
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900">10+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Tahun Ahli</span>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-[45%]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <HeroProjects />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

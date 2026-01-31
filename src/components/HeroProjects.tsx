
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import type { Project } from '../types';

export const HeroProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchProjects() {
      // Fetch featured projects or top 6 recent projects
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(6);

      if (!error && data && data.length > 0) {
        setProjects(data);
      }
    }
    fetchProjects();
  }, []);

  // Automatic slide interval
  useEffect(() => {
    if (projects.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4500); // Change image every 4.5 seconds

    return () => clearInterval(timer);
  }, [projects]);

  // Fallback images if Supabase returns nothing
  const fallbackImages = [
    "https://pgnzanapfjrkyvtahgmj.supabase.co/storage/v1/object/public/himawarna/assets/projects/Parkiran_Basement_DPRD_Kota_Bogor/Basement_01.webp",
    "https://pgnzanapfjrkyvtahgmj.supabase.co/storage/v1/object/public/himawarna/assets/projects/Lapangan_BPJS_Kesehatan_Cisarua/Lapangan_BPJS_01.webp",
    "https://pgnzanapfjrkyvtahgmj.supabase.co/storage/v1/object/public/himawarna/assets/projects/PT_MOTTO_GN_Putri/PT_MOTTO_01.webp"
  ];

  const currentImage = projects.length > 0 ? projects[currentIndex].image_url : fallbackImages[currentIndex % fallbackImages.length];
  const currentTitle = projects.length > 0 ? projects[currentIndex].title : "Professional Coating";

  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] max-w-2xl mx-auto flex items-center justify-center">
      {/* Decorative Background Element */}
      <div className="absolute inset-0 bg-slate-100 rotate-6 rounded-[60px] opacity-40 -z-10"></div>
      <div className="absolute inset-0 bg-slate-200 -rotate-3 rounded-[60px] opacity-20 -z-10"></div>
      
      {/* Main Image Frame */}
      <div className="relative w-full h-full rounded-[48px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] bg-slate-200 border-8 border-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: -20 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <img 
              src={currentImage} 
              alt={currentTitle} 
              className="w-full h-full object-cover"
            />
            
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            
            {/* Info Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 left-8 right-8"
            >
              <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl inline-block shadow-lg border border-white/50">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Latest Project</p>
                <h4 className="text-slate-900 font-bold text-sm md:text-base truncate">{currentTitle}</h4>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-black/10">
          <motion.div 
            key={currentIndex}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 4.5, ease: "linear" }}
            className="h-full himawarna-gradient"
          />
        </div>
      </div>

      {/* Floating Trusted Badge */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 -right-6 bg-white p-5 rounded-3xl shadow-2xl flex items-center gap-4 z-20 border border-slate-50"
      >
        <div className="w-12 h-12 himawarna-gradient rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Verified Result</p>
          <p className="text-sm font-black text-slate-900">100% Guaranteed</p>
        </div>
      </motion.div>

      {/* Navigation Indicators */}
      <div className="absolute -bottom-10 flex gap-2">
        {projects.length > 0 && projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 himawarna-gradient' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

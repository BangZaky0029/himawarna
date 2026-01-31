
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import type { Project } from '../types';

export const HeroProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      // First try to fetch featured
      const { data: featured } = await supabase
        .from('projects')
        .select('*')
        .eq('is_featured', true)
        .limit(4);
      
      // If no featured exist, fetch the 4 most recent projects
      if (!featured || featured.length === 0) {
        const { data: recent } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(4);
        if (recent) setProjects(recent);
      } else {
        setProjects(featured);
      }
    }
    fetchProjects();
  }, []);


  const displayImages = projects.length >= 4 
    ? projects.map(p => p.image_url) 
    : [
        "https://pgnzanapfjrkyvtahgmj.supabase.co/storage/v1/object/public/himawarna/assets/projects/Parkiran_Basement_DPRD_Kota_Bogor/Basement_01.webp",
        "https://pgnzanapfjrkyvtahgmj.supabase.co/storage/v1/object/public/himawarna/assets/projects/Lapangan_BPJS_Kesehatan_Cisarua/Lapangan_BPJS_01.webp",
        "https://pgnzanapfjrkyvtahgmj.supabase.co/storage/v1/object/public/himawarna/assets/projects/PT_MOTTO_GN_Putri/PT_MOTTO_01.webp",
        "https://pgnzanapfjrkyvtahgmj.supabase.co/storage/v1/object/public/himawarna/assets/projects/IPB/IPB_01.webp"
      ];

  return (
    <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-slate-100 rotate-45 rounded-[60px] opacity-50 -z-10"></div>
      
      <div className="grid grid-cols-2 gap-4 md:gap-6 transform rotate-[-12deg]">
        {displayImages.map((src, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: idx * 0.15 }}
            className={`w-40 h-40 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-2xl rotate-12 
              ${idx === 1 ? 'translate-y-8 md:translate-y-12' : ''} 
              ${idx === 2 ? '-translate-y-8 md:-translate-y-12' : ''}`}
          >
            <img src={src} alt="Portfolio item" className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>

      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 md:top-20 md:right-0 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
      >
        <div className="w-10 h-10 himawarna-gradient rounded-full flex items-center justify-center text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <div>
          <p className="text-xs font-bold text-slate-400 uppercase">Trusted by</p>
          <p className="text-sm font-black text-slate-800">500+ Businesses</p>
        </div>
      </motion.div>
    </div>
  );
};


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import type { Project } from '../types';
import { ProjectCard } from './ProjectCard';

interface ProjectsProps {
  onSeeMore: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSeeMore }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  
  const filterOptions = [
    { label: 'Semua', value: 'All' },
    { label: 'Epoxy', value: 'epoxy' },
    { label: 'Lapangan', value: 'lapangan' }
  ];

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true);
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setProjects(data);
      }
      setLoading(false);
    }
    fetchProjects();
  }, []);

  const filteredProjects = projects
    .filter(p => filter === 'All' || p.category.toLowerCase() === filter.toLowerCase())
    .slice(0, 6);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-pink-600 font-bold tracking-widest text-sm uppercase"
            >
              Portfolio
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-black text-slate-900 mt-2"
            >
              Proyek Terbaru Kami
            </motion.h2>
          </div>
          <motion.div className="flex flex-wrap gap-4">
            {filterOptions.map((opt) => (
              <button 
                key={opt.value}
                onClick={() => setFilter(opt.value)}
                className={`text-sm font-bold transition-all px-6 py-2.5 rounded-full ${
                  filter === opt.value 
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-200' 
                  : 'text-slate-400 hover:text-slate-900 bg-slate-100 hover:bg-slate-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </motion.div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </div>
        )}

        <div className="mt-16 text-center">
          <button 
            onClick={onSeeMore}
            className="px-10 py-4 rounded-full border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all shadow-xl hover:shadow-slate-200"
          >
            Lihat Lebih Banyak Proyek
          </button>
        </div>
      </div>
    </section>
  );
};

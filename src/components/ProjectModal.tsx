
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../types';
import { CONTACT_INFO } from '../constants';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const waLink = `https://wa.me/62${CONTACT_INFO.phone.substring(1)}?text=Halo%20HIMAWARNA,%20saya%20melihat%20proyek%20*${project.title}*%20dan%20tertarik%20dengan%20hasilnya.%20Bisa%20survey%20untuk%20lokasi%20saya?`;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/90 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative bg-white w-full max-w-5xl rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-black hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Side */}
          <div className="w-full lg:w-3/5 h-[300px] lg:h-auto relative overflow-hidden bg-slate-200">
            <img 
              src={project.image_url} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-2/5 p-8 md:p-12 overflow-y-auto">
            <div className="mb-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-black text-[10px] uppercase tracking-widest mb-4">
                {project.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-4">
                {project.title}
              </h2>
              {project.location && (
                <p className="flex items-center gap-2 text-slate-500 font-bold">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {project.location}
                </p>
              )}
            </div>

            <div className="space-y-6 mb-10">
              {project.client && (
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-slate-400 font-black mb-1">Client</h4>
                  <p className="text-slate-800 font-bold text-lg">{project.client}</p>
                </div>
              )}
              {project.surface_type && (
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-slate-400 font-black mb-1">Surface Type</h4>
                  <p className="text-slate-800 font-bold text-lg">{project.surface_type}</p>
                </div>
              )}
              {project.description && (
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-slate-400 font-black mb-1">Overview</h4>
                  <p className="text-slate-600 leading-relaxed font-medium">{project.description}</p>
                </div>
              )}
            </div>

            <div className="pt-8 border-t border-slate-100 flex flex-col gap-4">
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-5 rounded-2xl text-white font-black himawarna-gradient shadow-xl shadow-blue-200 hover:scale-[1.02] active:scale-95 transition-all"
              >
                Ingin Hasil Seperti Ini?
              </a>
              <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Free Survey & Konsultasi
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

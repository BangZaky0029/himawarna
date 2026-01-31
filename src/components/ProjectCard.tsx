
import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  layout?: boolean;
  onClick?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, layout = true, onClick }) => {
  return (
    <motion.div
      layout={layout}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick?.(project)}
      className="group relative h-80 rounded-[32px] overflow-hidden shadow-lg bg-slate-100 cursor-pointer"
    >
      <img
        src={project.image_url}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
      <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-xs font-bold text-white/70 uppercase tracking-widest mb-1 block">
          {project.category}
        </span>
        <h4 className="text-xl font-bold text-white mb-2 leading-tight">{project.title}</h4>
        {project.location && (
          <p className="text-white/60 text-xs mb-3 flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            {project.location}
          </p>
        )}
        <div className="w-10 h-1 himawarna-gradient rounded-full"></div>
      </div>
    </motion.div>
  );
};

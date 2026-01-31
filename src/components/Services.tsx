
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES_DATA, CONTACT_INFO } from '../constants';
import type { ServiceItem } from '../types';

interface ExtendedServiceItem extends ServiceItem {
  bgImage?: string;
  waMessage?: string;
}

interface ServicesProps {
  onSelectService?: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-3 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mt-2"
          >
            Layanan Unggulan Kami
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1.5 himawarna-gradient mx-auto mt-6 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {(SERVICES_DATA as ExtendedServiceItem[]).map((service, idx) => {
            const waLink = `https://wa.me/62${CONTACT_INFO.phone.substring(1)}?text=${encodeURIComponent(service.waMessage || '')}`;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                onClick={() => onSelectService?.(service)}
                className="group cursor-pointer relative p-10 rounded-[40px] border border-slate-100 bg-white hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.2)] hover:-translate-y-3 transition-all duration-500 overflow-hidden"
              >
                {/* Hover Background Image Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                  <img 
                    src={service.bgImage} 
                    alt="" 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
                </div>

                {/* Animated Icon Container */}
                <div className="relative mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 group-hover:himawarna-gradient group-hover:text-white group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-sm relative z-10">
                     {service.icon}
                  </div>
                  {/* Decorative blob on hover */}
                  <div className="absolute -inset-4 bg-blue-100/50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-0" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm mb-10 font-medium">
                    {service.description}
                  </p>

                  <a 
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card navigation to detail view, go to WA instead
                    }}
                    className="inline-flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest group/btn py-2 hover:translate-x-1 transition-transform"
                  >
                    Pelajari Selengkapnya
                    <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                {/* Card Accent Border */}
                <div className="absolute bottom-0 left-0 w-0 h-1.5 himawarna-gradient rounded-b-[40px] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

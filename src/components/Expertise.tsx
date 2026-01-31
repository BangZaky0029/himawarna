
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERTISE_DATA } from '../constants';

export const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-purple-600 font-bold tracking-widest text-sm uppercase"
            >
              Why Choose Us
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-6"
            >
              Komitmen Kami Terhadap <br />
              <span className="text-blue-600">Kualitas & Kepuasan</span>
            </motion.h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Kami memahami bahwa lantai bukan sekadar permukaan, tapi pondasi dari operasional bisnis Anda. Itulah mengapa kami tidak pernah berkompromi.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {EXPERTISE_DATA.map((item, idx) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl himawarna-gradient flex items-center justify-center shadow-lg shadow-purple-200">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-[40px] overflow-hidden shadow-3xl">
              <img 
                src="https://picsum.photos/800/800?random=20" 
                alt="Professional Team" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Experience Card Overlay */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl z-10 hidden sm:block"
            >
              <p className="text-4xl font-black text-slate-900">10+</p>
              <p className="text-slate-500 font-bold text-sm">Tahun Pengalaman</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

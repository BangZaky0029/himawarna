
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
              className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-6 leading-tight"
            >
              Komitmen Kami Terhadap <br />
              <span className="text-blue-600">Kualitas & Kepuasan</span>
            </motion.h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Kami memahami bahwa lantai bukan sekadar permukaan, tapi pondasi dari operasional bisnis Anda. Itulah mengapa kami tidak pernah berkompromi.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {EXPERTISE_DATA.map((item, idx) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl text-gradient-himawarna flex items-center justify-center shadow-lg shadow-blue-100 ring-4 ring-white">
                    {/* Icons are white, background is gradient. If icon is still problematic, we can add a subtle shadow to it */}
                    <div className="text-white drop-shadow-sm">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-[48px] overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop" 
                alt="Professional Team Work" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
            </div>
            {/* Experience Card Overlay */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[32px] shadow-2xl z-10 hidden md:block border border-slate-50"
            >
              <p className="text-5xl font-black text-slate-900 mb-1">10+</p>
              <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Tahun Pengalaman</p>
              <div className="w-12 h-1.5 himawarna-gradient rounded-full mt-4"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

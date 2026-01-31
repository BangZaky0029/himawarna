
import React from 'react';
import { CONTACT_INFO } from '../constants';

interface FooterProps {
  onNavigate: (view: 'main' | 'gallery') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollTo = (id: string) => {
    onNavigate('main');
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <button 
              onClick={() => onNavigate('main')} 
              className="text-3xl font-black tracking-tighter flex items-center gap-1 mb-6 bg-transparent border-none text-left"
            >
              <span className="text-white">HIMA</span>
              <span className="himawarna-text-gradient">WARNA</span>
            </button>
            <p className="max-w-md leading-relaxed mb-8">
              Penyedia layanan aplikator epoxy dan coating lapangan olahraga terpercaya di Indonesia. Kami menghadirkan kualitas industrial untuk setiap permukaan bangunan Anda.
            </p>
            <div className="flex gap-4">
              <a 
                href={CONTACT_INFO.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 text-white transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Informasi Kontak</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Menu Cepat</h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollTo('about')} className="hover:text-white transition-colors bg-transparent border-none">Tentang Kami</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors bg-transparent border-none">Layanan</button></li>
              <li><button onClick={() => onNavigate('gallery')} className="hover:text-white transition-colors bg-transparent border-none">Galeri Proyek</button></li>
              <li><button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors bg-transparent border-none">Hubungi Kami</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} HIMAWARNA. All rights reserved. Jasa Aplikator Epoxy & Lapangan No. 1 Indonesia.</p>
          <p className="mt-2 text-slate-500">Instagram: {CONTACT_INFO.instagram} | WhatsApp: {CONTACT_INFO.phoneDisplay}</p>
        </div>
      </div>
    </footer>
  );
};


import React from 'react';
import { motion } from 'framer-motion';
import type { ServiceItem } from '../types';
import { CONTACT_INFO } from '../constants';

interface ServiceDetailProps {
  service: ServiceItem;
  onBack: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  const waLink = `https://wa.me/62${CONTACT_INFO.phone.substring(1)}?text=Halo%20HIMAWARNA,%20saya%20tertarik%20dengan%20layanan%20${service.title}.%20Bisa%20jelaskan%20lebih%20lanjut?`;

  // Dynamic journal content based on service ID
  const journalContent = {
    '1': {
      fullTitle: 'Sistem Epoxy Lantai Industrial Berstandar Global',
      heroImg: 'https://pgnzanapfjrkyvtahgmj.supabase.co/storage/v1/object/public/himawarna/assets/projects/PT_MOTTO_GN_Putri/PT_MOTTO_01.webp',
      sections: [
        {
          title: 'Apa itu Epoxy Flooring?',
          body: 'Epoxy flooring adalah sistem pelapisan lantai yang melibatkan pencampuran resin polimer dan pengeras kimia. Hasilnya adalah permukaan plastik yang kaku, kuat, dan sangat tahan lama yang terikat erat dengan dasar beton.'
        },
        {
          title: 'Keunggulan Utama Kami',
          body: 'Ketahanan kimia yang luar biasa, kemudahan dalam pembersihan (hygienic standard), serta durabilitas tinggi terhadap beban berat mesin industri.'
        }
      ]
    },
    '2': {
      fullTitle: 'Aplikasi Coating Lapangan Olahraga Presisi',
      heroImg: 'https://pgnzanapfjrkyvtahgmj.supabase.co/storage/v1/object/public/himawarna/assets/projects/Lapangan_BPJS_Kesehatan_Cisarua/Lapangan_BPJS_01.webp',
      sections: [
        {
          title: 'Standar Grip Internasional',
          body: 'Kami menggunakan material khusus yang dirancang untuk memberikan traksi maksimal tanpa mengorbankan kenyamanan atlet. Cocok untuk basket, tenis, dan futsal.'
        },
        {
          title: 'Estetika & Ketahanan UV',
          body: 'Warna yang tajam dan tahan lama meski terpapar sinar matahari langsung (outdoor) berkat lapisan anti-UV premium.'
        }
      ]
    },
    '3': {
      fullTitle: 'Proteksi Coating Beton & Dustproofing',
      heroImg: 'https://images.unsplash.com/photo-1590674867571-87de5373656d?q=80&w=1200&auto=format&fit=crop',
      sections: [
        {
          title: 'Solusi Anti Debu',
          body: 'Lantai beton yang tidak dicoating akan terus menghasilkan debu semen yang mengganggu kesehatan dan peralatan. Solusi coating kami menutup pori beton secara permanen.'
        }
      ]
    },
    '4': {
      fullTitle: 'Layanan Pemeliharaan & Rekondisi Lantai',
      heroImg: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop',
      sections: [
        {
          title: 'Perpanjang Usia Investasi Anda',
          body: 'Maintenance rutin mencegah kerusakan kecil menjadi besar. Kami menyediakan layanan buffing, recoating, dan perbaikan keretakan dengan hasil yang tampak seperti baru.'
        }
      ]
    }
  }[service.id] || {
    fullTitle: service.title,
    heroImg: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop',
    sections: []
  };

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <div className="relative h-[400px] md:h-[550px] overflow-hidden bg-slate-900">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1 }}
          src={journalContent.heroImg} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 md:px-8 pb-16">
            <motion.button 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              onClick={onBack}
              className="flex items-center gap-2 text-white/80 hover:text-white font-bold mb-8 transition-colors text-sm uppercase tracking-widest"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
              Kembali
            </motion.button>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-6xl font-black text-white leading-tight max-w-4xl"
            >
              {journalContent.fullTitle}
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-2/3">
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-12 italic border-l-4 border-blue-600 pl-8">
                {service.description}
              </p>

              {journalContent.sections.map((section, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="mb-12"
                >
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{section.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {section.body}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 pt-16 border-t border-slate-100">
              <h4 className="text-xl font-black text-slate-900 mb-6">Mengapa Memilih HIMAWARNA untuk {service.title}?</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Material Premium', 'Hasil Presisi', 'Tenaga Ahli Berpengalaman', 'Garansi Purna Jual'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <div className="w-6 h-6 rounded-full himawarna-gradient flex items-center justify-center text-white shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="sticky top-32 p-10 bg-slate-50 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-100">
              <h4 className="text-2xl font-black text-slate-900 mb-6">Konsultasi Project</h4>
              <p className="text-slate-500 mb-8 leading-relaxed font-medium">
                Dapatkan estimasi biaya dan survey lokasi gratis khusus untuk kebutuhan {service.title.toLowerCase()} Anda.
              </p>
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-5 rounded-2xl text-white font-black himawarna-gradient shadow-lg hover:scale-105 transition-transform"
              >
                Chat Ahli Kami
              </a>
              <div className="mt-8 pt-8 border-t border-slate-200 flex items-center gap-4 grayscale opacity-60">
                <img src="/icon_logo_03.PNG" className="h-8 w-8 object-contain" alt="HIMAWARNA" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Professional Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

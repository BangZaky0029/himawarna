export const COLORS = {
  blue: '#2563eb',
  purple: '#9333ea',
  pink: '#db2777',
  yellow: '#eab308',
  gradient: 'linear-gradient(to right, #2563eb, #9333ea, #db2777, #eab308)'
};

export const CONTACT_INFO = {
  phone: '089611614420',
  phoneDisplay: '+62 896-1161-4420',
  instagram: '@badranaya14',
  instagramUrl: 'https://instagram.com/badranaya14',
  address: 'Kp banyusari Rr01/08, Leuwimekar, Leuwiliang',
  email: 'info@himawarna.com'
};

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES_DATA = [
  {
    id: '1',
    title: 'Epoxy Lantai',
    description: 'Solusi lantai industrial tahan kimia, anti-slip, dan sangat awet untuk pabrik atau gudang.',
    bgImage: 'https://pgnzanapfjrkyvtahgmj.supabase.co/storage/v1/object/public/himawarna/assets/projects/PT_MOTTO_GN_Putri/PT_MOTTO_01.webp',
    waMessage: 'Halo HIMAWARNA, saya tertarik dengan layanan *Epoxy Lantai*. Bisa tolong jelaskan estimasi harga dan proses pengerjaannya?',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: '2',
    title: 'Lapangan Olahraga',
    description: 'Aplikasi coating lapangan basket, tenis, dan futsal dengan standar grip internasional.',
    bgImage: 'https://pgnzanapfjrkyvtahgmj.supabase.co/storage/v1/object/public/himawarna/assets/projects/Lapangan_BPJS_Kesehatan_Cisarua/Lapangan_BPJS_01.webp',
    waMessage: 'Halo HIMAWARNA, saya ingin bertanya tentang pembuatan *Lapangan Olahraga*. Berapa lama waktu pengerjaannya?',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: '3',
    title: 'Coating Beton',
    description: 'Perlindungan permukaan beton dari abrasi dan debu untuk estetika industrial modern.',
    bgImage: 'https://images.unsplash.com/photo-1590674867571-87de5373656d?q=80&w=800&auto=format&fit=crop',
    waMessage: 'Halo HIMAWARNA, saya memerlukan jasa *Coating Beton* untuk area parkir/gudang saya. Mohon infonya.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    )
  },
  {
    id: '4',
    title: 'Perawatan',
    description: 'Layanan maintenance berkala untuk menjaga performa dan kilau lantai epoxy Anda.',
    bgImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop',
    waMessage: 'Halo HIMAWARNA, saya ingin melakukan *Perawatan Lantai* yang sudah ada. Apakah bisa dijadwalkan survey?',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export const EXPERTISE_DATA = [
  {
    id: '1',
    title: 'Material Berkualitas',
    description: 'Kami hanya menggunakan material epoxy grade terbaik yang tahan lama dan ramah lingkungan.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: '2',
    title: 'Tenaga Profesional',
    description: 'Tim aplikator berpengalaman lebih dari 10 tahun di berbagai industri besar.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    id: '3',
    title: 'Finishing Rapi',
    description: 'Detail adalah prioritas kami. Hasil akhir yang mulus dan presisi di setiap sudut.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    id: '4',
    title: 'Bergaransi',
    description: 'Kepuasan Anda dijamin dengan dukungan garansi purna jual untuk setiap proyek.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

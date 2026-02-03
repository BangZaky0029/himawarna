
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import type { Brand } from '../types';

export const BrandMarquee: React.FC = () => {
    const [brands, setBrands] = useState<Brand[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchBrands = async () => {
        setLoading(true);
        setError(null);

        const { data, error: fetchError } = await supabase
            .from('brand_himawarna')
            .select('id, name, slug, category')
            .eq('is_active', true)
            .order('display_order', { ascending: true });

        if (fetchError) {
            setError('Gagal memuat data brand. Silakan coba lagi.');
            console.error('Error fetching brands:', fetchError);
        } else {
            setBrands(data || []);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchBrands();
    }, []);

    // Split brands into 2 rows (even/odd indices)
    const brandsRow1 = brands.filter((_, index) => index % 2 === 0);
    const brandsRow2 = brands.filter((_, index) => index % 2 !== 0);

    // Loading state
    if (loading) {
        return (
            <section className="py-16 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
                <div className="mb-12 text-center">
                    <p className="text-sm font-bold tracking-widest text-slate-400 uppercase">
                        Memuat data brand...
                    </p>
                </div>
                <div className="space-y-8">
                    {[1, 2].map((row) => (
                        <div key={row} className="flex gap-12 overflow-hidden px-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                    key={i}
                                    className="flex-shrink-0 px-8 py-4 bg-slate-100 rounded-2xl animate-pulse"
                                    style={{ width: '200px', height: '56px' }}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    // Error state
    if (error) {
        return (
            <section className="py-16 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
                <div className="text-center">
                    <p className="text-red-500 font-bold mb-4">{error}</p>
                    <button
                        onClick={fetchBrands}
                        className="px-6 py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors"
                    >
                        Coba Lagi
                    </button>
                </div>
            </section>
        );
    }

    // Empty state
    if (brands.length === 0) {
        return (
            <section className="py-16 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
                <div className="text-center">
                    <p className="text-slate-400 font-bold">Belum ada brand tersedia.</p>
                </div>
            </section>
        );
    }

    // Success state with animation
    return (
        <section className="py-16 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
            <div className="mb-12 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-bold tracking-widest text-slate-400 uppercase"
                >
                    Dipercaya oleh perusahaan terkemuka
                </motion.p>
            </div>

            {/* ROW 1 - Scroll ke KANAN */}
            {brandsRow1.length > 0 && (
                <div className="relative mb-8">
                    <div className="flex overflow-hidden">
                        <motion.div
                            animate={{
                                x: ['-100%', '0%'],
                            }}
                            transition={{
                                duration: 40,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                            className="flex gap-12 pr-12 whitespace-nowrap"
                        >
                            {[...brandsRow1, ...brandsRow1].map((brand, index) => (
                                <div
                                    key={`row1-${brand.id}-${index}`}
                                    className="group flex-shrink-0 px-8 py-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300"
                                >
                                    <span className="text-lg font-black text-slate-300 group-hover:text-slate-600 transition-colors">
                                        {brand.name}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            )}

            {/* ROW 2 - Scroll ke KIRI */}
            {brandsRow2.length > 0 && (
                <div className="relative">
                    <div className="flex overflow-hidden">
                        <motion.div
                            animate={{
                                x: ['0%', '-100%'],
                            }}
                            transition={{
                                duration: 45,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                            className="flex gap-12 pr-12 whitespace-nowrap"
                        >
                            {[...brandsRow2, ...brandsRow2].map((brand, index) => (
                                <div
                                    key={`row2-${brand.id}-${index}`}
                                    className="group flex-shrink-0 px-8 py-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300"
                                >
                                    <span className="text-lg font-black text-slate-300 group-hover:text-slate-600 transition-colors">
                                        {brand.name}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            )}

            {/* Gradient Overlays untuk edge fade effect */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </section>
    );
};

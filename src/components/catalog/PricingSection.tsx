'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Sparkles, Box, Heart, ArrowRight } from 'lucide-react';

export default function PricingSection() {
  const tiers = [
    {
      id: 'biasa',
      name: 'Paket Biasa',
      tagline: 'Solusi praktis, simpel & bersih untuk kebutuhan dasar.',
      price: 'Rp 79.000',
      originalPrice: 'Rp 129.000',
      badge: 'Basic',
      badgeColor: 'bg-zinc-100 text-zinc-700',
      features: [
        'Informasi Akad & Resepsi',
        'Hitung Mundur (Countdown Timer)',
        'Petunjuk Peta Google Maps',
        'Nama Tamu Dinamis (?to=)',
        'Pemutar Musik Latar (Melodi Standard)',
        'Masa Aktif 3 Bulan',
      ],
      ctaText: 'Pilih Paket Biasa',
      ctaUrl: '/demo/spesial-tanpa-foto',
      highlighted: false,
    },
    {
      id: 'agak-bagus',
      name: 'Paket Agak Bagus',
      tagline: 'Fitur lengkap, anggun, dengan galeri & amplop digital.',
      price: 'Rp 119.000',
      originalPrice: 'Rp 179.000',
      badge: 'Popular Choice',
      badgeColor: 'bg-[#8A9A86] text-white',
      features: [
        'Semua fitur Paket Biasa',
        'Galeri Foto Pre-Wedding (10 Foto)',
        'Timeline Kisah Cinta (Love Story)',
        'Form RSVP & Buku Ucapan Real-Time',
        'Amplop Digital (Transfer Bank & QRIS)',
        'Fitur "Ingatkan Saya" Google Calendar',
        'Masa Aktif 6 Bulan',
      ],
      ctaText: 'Pilih Paket Agak Bagus',
      ctaUrl: '/demo/modern-romantic',
      highlighted: false,
    },
    {
      id: 'spesial-3d',
      name: 'Paket Spesial 3D',
      tagline: 'Pengalaman 3D luxury super mewah, interaktif & berkelas.',
      price: 'Rp 169.000',
      originalPrice: 'Rp 249.000',
      badge: '🌟 3D Luxury',
      badgeColor: 'bg-gradient-to-r from-[#B76E79] via-[#D4AF37] to-[#8A9A86] text-white',
      features: [
        'Semua fitur Paket Agak Bagus',
        '✉️ 3D Unfolding Envelope / Ring Box Opening',
        '🃏 3D Perspective Tilt Card (Depth Dynamic)',
        '🌸 3D Floating Petal Particles Canvas',
        '✨ Monogram & Aksen Emas 3D Reflection',
        'Galeri Foto Tanpa Batas + Video Link',
        'Masa Aktif Selamanya (Unlimited)',
      ],
      ctaText: 'Lihat Demo Spesial 3D',
      ctaUrl: '/demo/spesial-3d',
      highlighted: true,
    },
  ];

  return (
    <section id="paket" className="py-20 px-4 max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-2">
        <span className="text-xs uppercase tracking-[0.3em] text-[#8A9A86] font-semibold">
          Pilihan Paket Pernikahan
        </span>
        <h2 className="font-serif-cormorant text-4xl md:text-5xl text-[#2D3748] font-bold">
          Paket Layanan Undangan Digital
        </h2>
        <div className="w-16 h-[2px] bg-[#B76E79] mx-auto mt-3"></div>
        <p className="text-xs md:text-sm text-zinc-600 max-w-md mx-auto leading-relaxed pt-2">
          Pilih paket yang paling sesuai dengan impian pernikahan Anda, dari versi simpel hingga **Paket Spesial 3D Luxury**.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
              tier.highlighted
                ? 'bg-gradient-to-b from-white to-[#FAF7F2] border-2 border-[#D4AF37] shadow-2xl scale-105 z-10'
                : 'bg-white/80 backdrop-blur-md border border-[#8A9A86]/20 shadow-xl'
            }`}
          >
            {/* Top Badge */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow-sm ${tier.badgeColor}`}>
                  {tier.badge}
                </span>
                {tier.highlighted && (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-[#D4AF37]">
                    <Sparkles className="w-3.5 h-3.5" />
                    Rekomendasi
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-serif-cormorant text-3xl font-bold text-[#2D3748]">
                  {tier.name}
                </h3>
                <p className="text-xs text-zinc-500 mt-1 font-sans-jakarta">
                  {tier.tagline}
                </p>
              </div>

              <div className="pt-2">
                <span className="text-xs text-zinc-400 line-through">
                  {tier.originalPrice}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif-cormorant text-4xl font-bold text-[#B76E79]">
                    {tier.price}
                  </span>
                  <span className="text-xs text-zinc-500 font-semibold">/ event</span>
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#8A9A86]/20 my-4"></div>

              {/* Feature List */}
              <ul className="space-y-3 text-xs text-zinc-600 font-sans-jakarta">
                {tier.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#EEF2ED] text-[#8A9A86] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action CTA */}
            <div className="pt-8">
              <Link
                href={tier.ctaUrl}
                className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-xs font-semibold shadow transition-all duration-300 ${
                  tier.highlighted
                    ? 'bg-gradient-to-r from-[#B76E79] via-[#8A9A86] to-[#B76E79] hover:from-[#8A9A86] hover:to-[#586955] text-white shadow-lg transform hover:-translate-y-0.5'
                    : 'bg-[#8A9A86] hover:bg-[#586955] text-white'
                }`}
              >
                <span>{tier.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

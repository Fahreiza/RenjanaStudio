'use client';

import { motion } from 'framer-motion';
import { Music, Users, MessageSquare, CreditCard, Zap, ShieldCheck } from 'lucide-react';

export default function FeatureHighlights() {
  const features = [
    {
      icon: Users,
      title: 'Nama Tamu Tanpa Batas',
      description: 'Personalisasikan nama penerima undangan dengan mudah melalui parameter URL `?to=Nama+Tamu`.',
    },
    {
      icon: Music,
      title: 'Musik Latar Romantis',
      description: 'Pemutar audio melayang yang otomatis aktif saat sampul dibuka untuk menciptakan suasana hangat.',
    },
    {
      icon: MessageSquare,
      title: 'RSVP & Buku Ucapan Realtime',
      description: 'Tamu dapat mengonfirmasi kehadiran dan menyampaikan doa restu yang langsung tayang.',
    },
    {
      icon: CreditCard,
      title: 'Amplop Digital & QRIS',
      description: 'Dukung transfer antar-bank dengan tombol 1-klik salin nomor rekening & kemudahan QRIS.',
    },
    {
      icon: Zap,
      title: 'Super Cepat & Responsif',
      description: 'Dibangun di atas teknologi Next.js App Router untuk kecepatan akses sempurna di smartphone.',
    },
    {
      icon: ShieldCheck,
      title: 'Privasi & Keamanan',
      description: 'Pilihan varian tema Tanpa Foto tersedia bagi Anda yang mengutamakan kerahasiaan galeri.',
    },
  ];

  return (
    <section id="fitur" className="py-20 px-4 max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-2">
        <span className="text-xs uppercase tracking-[0.3em] text-[#8A9A86] font-semibold">
          Keunggulan Renjana Studio
        </span>
        <h2 className="font-serif-cormorant text-4xl md:text-5xl text-[#2D3748] font-bold">
          Mengapa Memilih Kami?
        </h2>
        <div className="w-16 h-[2px] bg-[#B76E79] mx-auto mt-3"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feat, index) => {
          const IconComponent = feat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-[#8A9A86]/20 space-y-4 hover:border-[#B76E79]/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#EEF2ED] text-[#8A9A86] flex items-center justify-center group-hover:bg-[#B76E79] group-hover:text-white transition-colors duration-300">
                <IconComponent className="w-6 h-6" />
              </div>
              <h3 className="font-serif-cormorant text-2xl font-bold text-[#2D3748]">
                {feat.title}
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-sans-jakarta">
                {feat.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

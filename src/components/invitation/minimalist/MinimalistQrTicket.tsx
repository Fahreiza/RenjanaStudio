'use client';

import { motion } from 'framer-motion';
import { QrCode } from 'lucide-react';
import Image from 'next/image';

interface MinimalistQrTicketProps {
  guestName: string;
  coupleNames: string;
  weddingDate: string;
  venueName: string;
}

export default function MinimalistQrTicket({
  guestName,
  coupleNames,
  weddingDate,
  venueName,
}: MinimalistQrTicketProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-[#e8e2d8]/80 backdrop-blur-md">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply pointer-events-none">
        <Image
          src="/assets/images/BAHAN-TEMA-1-1-2.webp"
          alt="Texture"
          fill
          className="object-cover"
        />
      </div>
      <div className="max-w-md mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-16 h-16 mx-auto opacity-70 mb-4 relative"
          >
            <Image src="/assets/images/TEMA-01-BUNGA-01-co-1-2.png" alt="Flower" fill className="object-contain" />
          </motion.div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#8c7b68] font-medium block">
            Akses Masuk
          </span>
          <h2 
            className="text-5xl md:text-6xl text-[#4A4036] mb-2"
            style={{ fontFamily: 'var(--font-great-vibes)' }}
          >
            Tiket VIP
          </h2>
        </div>

        {/* Ticket Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-[#f4efe8] rounded-2xl shadow-lg border-2 border-[#a68e68] flex flex-col relative overflow-hidden"
        >
          {/* Inner Decorative Border */}
          <div className="absolute inset-2 border border-[#a68e68]/40 rounded-xl pointer-events-none" />
          {/* Top Section */}
          <div className="p-8 text-center space-y-2 relative overflow-hidden rounded-t-2xl bg-[#e8e2d8] border-b border-dashed border-[#a68e68]">
            <span className="text-[9px] text-[#8c7b68] font-bold uppercase tracking-[0.3em]">
              Kartu Akses Eksklusif
            </span>
            <h3 className="font-serif text-3xl text-[#857053] italic pt-2">{guestName}</h3>
            
            {/* Cutout effects left & right */}
            <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-[#e8e2d8] rounded-full border-t border-r border-[#a68e68] shadow-inner" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#e8e2d8] rounded-full border-t border-l border-[#a68e68] shadow-inner" />
          </div>

          {/* Middle QR Section */}
          <div className="p-10 flex flex-col items-center justify-center bg-transparent relative z-10">
            <div className="relative w-48 h-48 border border-[#a68e68]/50 rounded-xl p-4 mb-6 group bg-white shadow-inner">
              <div className="absolute inset-0 bg-[#a68e68]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              
              {/* Corner marks */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#857053] rounded-tl" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#857053] rounded-tr" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#857053] rounded-bl" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#857053] rounded-br" />

              <QrCode className="w-full h-full text-[#857053]" strokeWidth={1} />
            </div>

            <div className="space-y-1 text-center">
              <p className="text-[9px] font-sans text-[#a69785] tracking-[0.25em] uppercase font-bold">
                ID: {Math.random().toString(36).substring(2, 10).toUpperCase()}
              </p>
              <p className="text-[9px] font-sans text-[#a69785] tracking-[0.25em] uppercase font-bold">
                {weddingDate}
              </p>
            </div>
          </div>

          {/* Bottom Info Section */}
          <div className="p-6 bg-[#857053] text-center relative overflow-hidden z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-[#a68e68]/0 via-[#a68e68]/20 to-[#a68e68]/0" />
            <p className="text-[10px] text-white font-serif italic tracking-wide relative z-10">
              Mohon tunjukkan QR Code ini kepada resepsionis saat memasuki area {venueName}.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

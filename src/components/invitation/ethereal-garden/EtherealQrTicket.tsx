'use client';

import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Ticket } from 'lucide-react';

interface EtherealQrTicketProps {
  guestName: string;
  eventDate: string;
  venueName: string;
}

export default function EtherealQrTicket({
  guestName,
  eventDate,
  venueName,
}: EtherealQrTicketProps) {
  return (
    <section className="py-16 px-4 max-w-md mx-auto space-y-8 select-none relative z-10">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#A7B09A]/15 text-[#3F493D] border border-[#A7B09A]/30 text-[9px] uppercase font-bold tracking-[0.35em]">
          ELECTRONIC PASS
        </span>
        <h2 className="font-serif-cormorant text-4xl text-[#3F493D] font-normal tracking-wide">
          Tiket Akses Masuk VIP
        </h2>
        <div className="w-12 h-[1px] bg-[#C7A76C] mx-auto mt-2" />
        <p className="text-xs text-[#3F493D]/70 max-w-xs mx-auto pt-1 leading-relaxed font-serif">
          Tunjukkan QR Code ini kepada resepsionis saat memasuki gedung acara.
        </p>
      </div>

      {/* Luxury Die-Cut Arch Ticket */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full rounded-t-full rounded-b-[36px] overflow-hidden bg-[#FAF7F2] border-2 border-[#C7A76C]/50 shadow-[0_25px_50px_-12px_rgba(184,173,160,0.5)] text-[#3F493D] p-8 text-center space-y-6"
      >
        {/* Ticket Notch Cutouts */}
        <div className="absolute -left-3 top-2/3 -translate-y-1/2 w-6 h-6 rounded-full bg-[#F6F0E6] border border-[#C7A76C]/40" />
        <div className="absolute -right-3 top-2/3 -translate-y-1/2 w-6 h-6 rounded-full bg-[#F6F0E6] border border-[#C7A76C]/40" />

        {/* Top Header & Botanical Monogram */}
        <div className="space-y-1 pt-4 border-b border-[#C7A76C]/25 pb-4">
          <span className="text-[8px] uppercase tracking-[0.3em] text-[#C7A76C] font-bold block">
            THE BOTANICAL CONSERVATORY
          </span>
          <h4 className="font-serif-cormorant text-2xl font-normal text-[#3F493D]">
            VIP Guest Access Pass
          </h4>
        </div>

        {/* Guest Details */}
        <div className="space-y-1.5 py-1">
          <span className="text-[8px] uppercase tracking-[0.25em] text-[#A7B09A] font-bold block">
            NAMA TAMU TERHORMAT:
          </span>
          <h3 className="font-serif-cormorant text-3xl font-normal text-[#3F493D] capitalize tracking-wide">
            {guestName}
          </h3>
          <div className="flex items-center justify-center gap-3 text-[10px] text-[#3F493D]/70 font-mono pt-1">
            <span>SEAT: CONSERVATORY-A1</span>
            <span>•</span>
            <span>GATE: GARDEN 1</span>
          </div>
        </div>

        {/* QR Matrix */}
        <div className="relative w-44 h-44 mx-auto rounded-2xl bg-white p-3 shadow-inner flex flex-col items-center justify-center border border-[#C7A76C]/30">
          <div className="w-full h-full border border-[#3F493D]/40 rounded-lg flex items-center justify-center relative overflow-hidden bg-white">
            <div className="absolute inset-2 grid grid-cols-6 grid-rows-6 gap-1 opacity-80">
              {Array.from({ length: 36 }).map((_, i) => (
                <div
                  key={i}
                  className={`rounded-xs ${
                    (i % 2 === 0 || i % 4 === 0) && i !== 14 && i !== 21
                      ? 'bg-[#3F493D]'
                      : 'bg-transparent'
                  }`}
                />
              ))}
            </div>
            <div className="relative z-10 w-9 h-9 rounded-lg bg-[#FAF7F2] border border-[#C7A76C] text-[#3F493D] flex items-center justify-center shadow-sm">
              <span className="text-xs">✿</span>
            </div>
          </div>
        </div>

        {/* Footer Verification */}
        <div className="border-t border-dashed border-[#C7A76C]/40 pt-4 space-y-1.5">
          <div className="flex items-center justify-center gap-1.5 text-[9px] text-[#3F493D] font-mono font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#A7B09A]" />
            <span>TERVERIFIKASI SISTEM RENJANA STUDIO</span>
          </div>
          <p className="text-[8px] text-[#A7B09A] font-mono tracking-widest uppercase">
            #ETHEREAL-ARCH-20261212-{guestName.slice(0, 3).toUpperCase()}
          </p>
        </div>
      </motion.div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Sparkles, ShieldCheck, Ticket } from 'lucide-react';
import ThreeDCardTilt from './ThreeDCardTilt';

interface ThreeDQrTicketProps {
  guestName: string;
  eventDate: string;
  venueName: string;
}

export default function ThreeDQrTicket({
  guestName,
  eventDate,
  venueName,
}: ThreeDQrTicketProps) {
  return (
    <section className="py-16 px-4 max-w-md mx-auto space-y-8 select-none relative z-10">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 text-[10px] uppercase font-bold tracking-[0.3em]">
          <Ticket className="w-3 h-3 text-[#D4AF37]" />
          VIP PRESENSI ELEKTRONIK
        </span>
        <h2 className="font-serif-cormorant text-4xl text-[#2D3748] font-bold tracking-tight">
          Tiket Akses Masuk VIP
        </h2>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        <p className="text-xs text-zinc-600 max-w-xs mx-auto pt-1 leading-relaxed">
          Tunjukkan QR Code ini kepada resepsionis saat memasuki gedung pernikahan.
        </p>
      </div>

      {/* 3D Holographic VIP Pass */}
      <ThreeDCardTilt maxTilt={18} className="w-full">
        <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#2D1F27] via-[#1E1419] to-[#120B0F] border-2 border-[#D4AF37] shadow-[0_25px_50px_-12px_rgba(212,175,55,0.4)] text-white p-7 text-center space-y-6">
          {/* Top Notch Cutouts (realistic ticket look) */}
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#FAF7F2] border border-[#D4AF37]" />
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#FAF7F2] border border-[#D4AF37]" />

          {/* Ticket Header */}
          <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-4">
            <div className="text-left space-y-0.5">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
                RENJANA 3D LUXE PASS
              </span>
              <h4 className="font-serif-cormorant text-lg font-bold text-amber-100">
                VIP Access Pass
              </h4>
            </div>

            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B98929] text-[#241303] text-[9px] font-black uppercase tracking-wider shadow">
              TIKET RESMI
            </span>
          </div>

          {/* Guest Name & Table Details */}
          <div className="space-y-1.5 py-1">
            <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-400 font-sans">
              NAMA TAMU TERHORMAT:
            </span>
            <h3 className="font-serif-cormorant text-2xl font-bold text-amber-200 capitalize tracking-wide drop-shadow">
              {guestName}
            </h3>
            <div className="flex items-center justify-center gap-4 text-[10px] text-zinc-300 font-mono pt-1">
              <span>SEAT: VIP-A08</span>
              <span>•</span>
              <span>ENTRY: GATE 1</span>
            </div>
          </div>

          {/* Simulated 3D QR Code */}
          <div className="relative w-44 h-44 mx-auto rounded-2xl bg-white p-3 shadow-inner flex flex-col items-center justify-center">
            {/* SVG Matrix QR Pattern */}
            <div className="w-full h-full border-2 border-zinc-900 rounded-lg flex items-center justify-center relative overflow-hidden bg-white">
              <div className="absolute inset-2 grid grid-cols-6 grid-rows-6 gap-1 opacity-90">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-xs ${
                      (i % 2 === 0 || i % 5 === 0) && i !== 14 && i !== 21
                        ? 'bg-zinc-900'
                        : 'bg-transparent'
                    }`}
                  />
                ))}
              </div>
              <div className="relative z-10 w-9 h-9 rounded-lg bg-[#D4AF37] text-[#241303] flex items-center justify-center shadow">
                <Sparkles className="w-5 h-5 text-[#241303]" />
              </div>
            </div>
          </div>

          {/* Barcode & Footer Verification */}
          <div className="border-t border-dashed border-[#D4AF37]/40 pt-4 space-y-2">
            <div className="flex items-center justify-center gap-1.5 text-[10px] text-emerald-400 font-mono font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>PRESENSI TERVERIFIKASI SISTEM RENJANA</span>
            </div>
            <p className="text-[9px] text-zinc-400 font-mono tracking-widest uppercase">
              #RJN-3D-20261121-{guestName.slice(0, 3).toUpperCase()}
            </p>
          </div>
        </div>
      </ThreeDCardTilt>
    </section>
  );
}

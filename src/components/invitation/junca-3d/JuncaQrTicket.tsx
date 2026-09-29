'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Sparkles, ShieldCheck } from 'lucide-react';

interface JuncaQrTicketProps {
  guestName?: string;
}

/**
 * VIP Check-In Pass Ticket styled as an avant-garde Studio All-Access Laminate Pass.
 */
export default function JuncaQrTicket({
  guestName = 'Tamu Undangan',
}: JuncaQrTicketProps) {
  return (
    <section className="relative w-full py-20 px-4 sm:px-8 bg-[#080808] text-[#FBFBFB] select-none overflow-hidden">
      <div className="max-w-4xl mx-auto border-t border-white/10 pt-12 text-center space-y-4 mb-12">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ED3327] font-semibold block">
          07 // ADMISSION &bull; VIP PASS
        </span>
        <h2 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-none">
          Tiket VIP Check-In
        </h2>
        <p className="font-mono text-xs text-neutral-400 max-w-md mx-auto tracking-wider uppercase">
          Tunjukkan QR Code ini kepada petugas resepsionis di lokasi acara untuk proses presensi digital yang cepat.
        </p>
      </div>

      {/* ── VIP PASS CARD ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-sm mx-auto bg-gradient-to-b from-[#1A1A1A] via-[#121212] to-[#0A0A0A] border-2 border-white/20 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8),_0_0_40px_rgba(237,51,39,0.15)] relative overflow-hidden"
      >
        {/* Lanyard Clip Hole at Top */}
        <div className="w-12 h-2.5 rounded-full bg-[#080808] border border-white/20 mx-auto mb-6 shadow-inner" />

        {/* Pass Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ED3327]" />
            <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
              ALL-ACCESS PASS
            </span>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400">
            SEC. CODE: #2026-VIP
          </span>
        </div>

        {/* QR Code Frame */}
        <div className="my-6 p-6 rounded-2xl bg-white flex flex-col items-center justify-center shadow-lg">
          {/* Stylized QR Vector */}
          <div className="w-44 h-44 text-black flex items-center justify-center relative">
            <QrCode className="w-full h-full stroke-[1.5]" />
            {/* Center Monogram Emblem */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-10 h-10 rounded-lg bg-[#080808] text-white flex items-center justify-center font-mono font-bold text-xs border border-white/30 shadow-md">
                F&amp;A
              </div>
            </div>
          </div>
          <span className="font-mono text-[9px] text-neutral-600 uppercase tracking-widest mt-3">
            DIGITAL VIP ADMISSION
          </span>
        </div>

        {/* Guest Metadata */}
        <div className="space-y-3 text-left">
          <div className="space-y-0.5">
            <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 block">
              GUEST NAME:
            </span>
            <p className="font-sans font-extrabold text-xl text-white tracking-tight uppercase">
              {guestName}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 font-mono text-[10px]">
            <div>
              <span className="text-neutral-500 uppercase block">ACCESS ZONE:</span>
              <span className="text-white font-semibold">VIP FRONT ROW</span>
            </div>
            <div>
              <span className="text-neutral-500 uppercase block">STATUS:</span>
              <span className="text-[#ED3327] font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 inline" /> VERIFIED
              </span>
            </div>
          </div>
        </div>

        {/* Barcode Footer */}
        <div className="mt-6 pt-4 border-t border-dashed border-white/20 text-center font-mono text-[9px] text-neutral-500 tracking-[0.4em]">
          ||||| |||||| | |||||||| ||||| ||||
        </div>
      </motion.div>
    </section>
  );
}

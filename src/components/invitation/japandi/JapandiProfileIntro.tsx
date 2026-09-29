'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

interface JapandiProfileIntroProps {
  guestName: string;
  groomName: string;
  brideName: string;
  weddingDate: string;
  venueName: string;
  onOpenInvitation: () => void;
}

export default function JapandiProfileIntro({
  guestName,
  groomName,
  brideName,
  weddingDate,
  venueName,
  onOpenInvitation,
}: JapandiProfileIntroProps) {
  return (
    <div className="relative w-full h-full min-h-screen bg-[#F4F0EA] text-[#2D2F2E] flex flex-col justify-between p-6 sm:p-8 select-none overflow-hidden font-sans">
      {/* Background Zen Texture & Minimalist Silhouette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/boho_terracotta_bg.png"
          alt="Japandi Zen Background"
          fill
          className="object-cover object-center filter saturate-50 opacity-25 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4F0EA] via-[#F4F0EA]/70 to-[#F4F0EA]/90" />
      </div>

      {/* Top Header: Zen Seal & Aesthetic Stamp */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#2D2F2E]/10 pb-4">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#637061] block">
            JAPANDI EDITION &bull; WABI-SABI
          </span>
          <span className="text-[9px] uppercase tracking-widest text-[#2D2F2E]/50 font-serif">
            EST. NOVEMBER 2026
          </span>
        </div>
        <div className="w-7 h-7 rounded-full border border-[#637061]/40 flex items-center justify-center text-[#637061] text-[10px] font-serif">
          結
        </div>
      </div>

      {/* Center Cover Masthead */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="relative z-10 text-center my-auto space-y-4 max-w-sm mx-auto"
      >
        <span className="inline-block text-[10px] uppercase tracking-[0.35em] text-[#637061] font-mono">
          THE WEDDING OF
        </span>

        {/* Couple Names */}
        <h1 className="text-4xl sm:text-5xl font-serif font-normal tracking-wide text-[#2D2F2E] leading-snug">
          {groomName} <span className="text-[#637061] font-light">&amp;</span> {brideName}
        </h1>

        <div className="w-10 h-px bg-[#637061]/40 mx-auto my-2" />

        <p className="text-xs uppercase tracking-[0.2em] text-[#2D2F2E]/60 font-mono">
          {weddingDate} &bull; {venueName.split(',')[0]}
        </p>

        {/* Guest Greeting Card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 p-5 rounded-2xl bg-white/70 border border-[#2D2F2E]/10 backdrop-blur-md shadow-sm text-center space-y-1"
        >
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#637061] block">
            TURUT MENGUNDANG:
          </span>
          <h2 className="text-lg font-serif font-semibold text-[#2D2F2E] tracking-wide">
            {guestName}
          </h2>
          <p className="text-[10px] text-[#2D2F2E]/60 font-serif italic">
            Merupakan suatu kehormatan atas kehadiran &amp; doa restu Anda
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom Button */}
      <div className="relative z-10 space-y-3 pt-4 border-t border-[#2D2F2E]/10">
        <button
          onClick={onOpenInvitation}
          className="w-full py-3.5 px-6 rounded-full bg-[#2D2F2E] hover:bg-[#637061] text-[#F4F0EA] font-mono text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2 group hover:scale-[1.01] active:scale-98"
        >
          <Leaf className="w-4 h-4 text-[#F4F0EA]/80 group-hover:rotate-12 transition-transform" />
          <span>BUKA UNDANGAN</span>
        </button>

        <p className="text-center text-[9px] font-serif italic text-[#2D2F2E]/50">
          Renjana Studio &bull; Wabi-Sabi Series
        </p>
      </div>
    </div>
  );
}

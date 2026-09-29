'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles } from 'lucide-react';

interface VogueProfileIntroProps {
  guestName: string;
  groomName: string;
  brideName: string;
  weddingDate: string;
  venueName: string;
  onOpenInvitation: () => void;
}

export default function VogueProfileIntro({
  guestName,
  groomName,
  brideName,
  weddingDate,
  venueName,
  onOpenInvitation,
}: VogueProfileIntroProps) {
  return (
    <div className="relative w-full h-full min-h-screen bg-[#0E0E0E] text-[#FAFAF8] flex flex-col justify-between p-6 sm:p-8 select-none overflow-hidden font-sans">
      {/* Background Editorial Photo with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero-wedding.webp"
          alt="Editorial Cover"
          fill
          className="object-cover object-center filter grayscale contrast-125 opacity-35 scale-105 transition-transform duration-1000 ease-out"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/60 to-[#0E0E0E]/90" />
      </div>

      {/* Top Header: Issue Barcode & Meta */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/20 pb-4">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#B39871] block">
            ISSUE NO. 24 // AUTUMN 2026
          </span>
          <span className="text-[9px] uppercase tracking-widest text-[#FAFAF8]/60 font-mono">
            JAKARTA &bull; PRIVATE EDITION
          </span>
        </div>
        <div className="text-right">
          <span className="text-[9px] font-mono tracking-widest uppercase text-[#B39871] border border-[#B39871]/40 px-2 py-0.5 rounded-xs">
            EDITORIAL EXCLUSIVE
          </span>
        </div>
      </div>

      {/* Center Masthead & Couple Headline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="relative z-10 text-center my-auto space-y-4 max-w-sm mx-auto"
      >
        <span className="inline-block text-[11px] uppercase tracking-[0.4em] text-[#B39871] font-mono">
          THE WEDDING CHRONICLE
        </span>

        {/* Big Magazine Masthead */}
        <h1 className="text-6xl sm:text-7xl font-serif font-black tracking-tight text-[#FAFAF8] uppercase leading-none drop-shadow-lg">
          RENJANA
        </h1>

        <div className="w-12 h-px bg-[#B39871] mx-auto my-3" />

        <div className="space-y-1">
          <p className="text-2xl sm:text-3xl font-serif font-light tracking-wide text-[#FAFAF8]">
            {groomName} <span className="text-[#B39871] font-serif italic">&amp;</span> {brideName}
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-[#FAFAF8]/70 font-mono pt-1">
            {weddingDate} &bull; {venueName.split(',')[0]}
          </p>
        </div>

        {/* Featured VIP Guest Invitation Box */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md shadow-2xl text-center space-y-1"
        >
          <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#B39871] block">
            SPECIAL INVITATION FOR:
          </span>
          <h2 className="text-lg font-serif font-bold text-[#FAFAF8] tracking-wide">
            {guestName}
          </h2>
          <p className="text-[10px] text-[#FAFAF8]/60 font-sans italic">
            You are cordially invited to our wedding celebration
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom Action & Simulated Magazine Barcode */}
      <div className="relative z-10 space-y-4 pt-4 border-t border-white/20">
        <button
          onClick={onOpenInvitation}
          className="w-full py-4 px-6 rounded-full bg-[#FAFAF8] hover:bg-[#B39871] text-[#0E0E0E] hover:text-[#FAFAF8] font-mono text-xs uppercase tracking-[0.3em] font-bold transition-all duration-300 shadow-[0_10px_25px_rgba(250,250,248,0.2)] flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-98"
        >
          <BookOpen className="w-4 h-4 text-[#B39871] group-hover:text-[#FAFAF8] transition-colors" />
          <span>BUKA UNDANGAN</span>
        </button>

        <div className="flex items-center justify-between text-[9px] font-mono text-[#FAFAF8]/50">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B39871] animate-ping" />
            <span>EXHIBITION NO. 2026-RNJ</span>
          </div>
          <span className="tracking-widest">||| | |||| ||| |||| | |||</span>
        </div>
      </div>
    </div>
  );
}

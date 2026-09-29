'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import Junca3DCanvas from './Junca3DCanvas';
import { GroomBrideInfo, EventDetail } from '@/types/invitation';

interface JuncaProfileIntroProps {
  groom: GroomBrideInfo;
  bride: GroomBrideInfo;
  akad: EventDetail;
  guestName: string;
  onOpen: () => void;
}

/**
 * Gate Cover Screen inspired by Junca Studio's minimalist dark architecture.
 * Features live UTC+7 clock, red dot indicator, real-time 3D kinetic canvas,
 * monospace VIP pass accreditation, and kinetic enter button.
 */
export default function JuncaProfileIntro({
  groom,
  bride,
  akad,
  guestName,
  onOpen,
}: JuncaProfileIntroProps) {
  const [timeStr, setTimeStr] = useState<string>('--:--:--');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'Asia/Jakarta',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleOpenClick = () => {
    try {
      confetti({
        particleCount: 85,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#ED3327', '#FBFBFB', '#C2C2C2', '#171717', '#E5E6E2'],
      });
    } catch (e) {}
    onOpen();
  };

  return (
    <div className="relative min-h-screen w-full bg-[#080808] text-[#FBFBFB] flex flex-col justify-between p-5 sm:p-10 select-none overflow-hidden font-sans">
      {/* Subtle Paper Grain & Ambient Radial Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(237,51,39,0.08)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* ── TOP EDITORIAL METADATA BAR ── */}
      <header className="relative z-20 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
        {/* Brand Kicker */}
        <div className="flex items-center gap-3 font-mono text-[11px] sm:text-xs tracking-wider uppercase text-neutral-300">
          <span className="w-2 h-2 rounded-full bg-[#ED3327] inline-block animate-ping" />
          <span className="font-semibold text-white">RENJANA × JUNCA 3D</span>
          <span className="text-neutral-500 hidden sm:inline">/</span>
          <span className="text-neutral-400 hidden sm:inline">WEDDING ARCHIVE</span>
        </div>

        {/* Live Clock & Coordinates */}
        <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs tracking-widest text-neutral-400">
          <span>JAKARTA (UTC+7)</span>
          <span className="text-white font-bold">{timeStr}</span>
        </div>
      </header>

      {/* ── HERO CENTER STAGE WITH 3D KINETIC MONOLITH ── */}
      <main className="relative z-10 my-auto py-6 sm:py-8 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
        {/* Section Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-neutral-300 mb-4"
        >
          <Sparkles className="w-3 h-3 text-[#ED3327]" />
          <span>OFFICIAL WEDDING INVITATION &bull; 2026</span>
        </motion.div>

        {/* Avant-Garde Couple Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="space-y-2 mb-2"
        >
          <h1 className="font-sans font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tighter uppercase text-white leading-[0.95]">
            {groom.name} <span className="text-[#ED3327] font-light">&amp;</span> {bride.name}
          </h1>
          <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-neutral-400">
            {akad.date} &bull; BANDUNG / JAKARTA
          </p>
        </motion.div>

        {/* ── 3D REAL-TIME SCULPTURE ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="w-full my-[-20px] sm:my-[-30px]"
        >
          <Junca3DCanvas />
        </motion.div>

        {/* ── VIP PASS ACCREDITATION BADGE ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="w-full max-w-md bg-[#121212]/90 border border-white/15 rounded-2xl p-4 sm:p-5 backdrop-blur-md shadow-2xl mb-8 text-left space-y-2 relative overflow-hidden group hover:border-[#ED3327]/60 transition-colors"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#ED3327]/10 rounded-full blur-xl pointer-events-none" />
          
          <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-neutral-400">
            <span>VIP ACCREDITATION PASS</span>
            <span className="text-[#ED3327] font-semibold">ADMIT ONE</span>
          </div>

          <div className="space-y-0.5 pt-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
              SPECIAL INVITATION FOR:
            </span>
            <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-white capitalize">
              {guestName}
            </h3>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/10 font-mono text-[9px] text-neutral-400">
            <span>SEAT: VIP SECTION A-01</span>
            <span className="text-white">STATUS: CONFIRMED GUEST</span>
          </div>
        </motion.div>

        {/* ── KINETIC ENTER BUTTON ── */}
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleOpenClick}
          className="group relative inline-flex items-center gap-4 bg-[#ED3327] hover:bg-[#d6261c] text-white font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase py-4 px-8 rounded-full shadow-[0_10px_35px_rgba(237,51,39,0.4)] transition-all duration-300"
        >
          <span>BUKA UNDANGAN &bull; ENTER ARCHIVE</span>
          {/* Circular Magnetic Disc with Diagonal Arrow */}
          <div className="w-7 h-7 rounded-full bg-white text-[#080808] flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300">
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </div>
        </motion.button>
      </main>

      {/* ── FOOTER PROTOCOL MARQUEE ── */}
      <footer className="relative z-20 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 font-mono text-[10px] sm:text-xs text-neutral-400 uppercase tracking-widest">
        <span>EST. 2026 // PARIS ART DIRECTION</span>
        <span>SCROLL DOWN TO EXPLORE 3D EXHIBIT</span>
      </footer>
    </div>
  );
}

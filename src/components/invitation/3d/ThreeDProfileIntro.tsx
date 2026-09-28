'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Gift, Compass } from 'lucide-react';
import confetti from 'canvas-confetti';
import ThreeDCardTilt from './ThreeDCardTilt';

interface ThreeDProfileIntroProps {
  groomName: string;
  brideName: string;
  eventDate: string;
  guestName: string;
  onOpen: () => void;
}

export default function ThreeDProfileIntro({
  groomName,
  brideName,
  eventDate,
  guestName,
  onOpen,
}: ThreeDProfileIntroProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    setIsOpening(true);

    try {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.55 },
        colors: ['#D4AF37', '#F59E0B', '#B76E79', '#8A9A86', '#FAF7F2'],
      });
    } catch (e) {
      console.log('Confetti ignored:', e);
    }

    setTimeout(() => {
      onOpen();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#100D12] p-4 overflow-hidden select-none">
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3A222B] via-[#1A1218] to-[#0D0A0E] opacity-90" />

      {/* Subtle Glowing Golden Dust Orb */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#D4AF37]/20 via-[#B76E79]/20 to-transparent blur-3xl pointer-events-none animate-pulse" />

      {/* 3D Keepsake Box / Folio Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1.15, transition: { duration: 0.8, ease: 'easeInOut' } }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        <ThreeDCardTilt maxTilt={18} className="w-full">
          <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-b from-[#2A1D23] via-[#1E151A] to-[#150F13] border-2 border-[#D4AF37]/60 shadow-[0_25px_60px_-15px_rgba(212,175,55,0.35)] p-7 sm:p-9 text-center text-white flex flex-col items-center justify-between min-h-[580px]">
            {/* 3D Gold Corner Accents */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37]" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37]" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37]" />

            {/* Top Ribbon & Luxury Badge */}
            <div className="space-y-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FDE68A] to-[#D4AF37] text-[#3D2505] text-[10px] font-black uppercase tracking-[0.3em] shadow-md border border-white/60">
                <Sparkles className="w-3 h-3 text-[#3D2505]" />
                3D Lumina Keepsake Box
              </span>

              {/* Bismillah SVG with Golden Glow */}
              <div className="relative w-44 h-11 mx-auto invert brightness-200 opacity-90 drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]">
                <Image
                  src="/assets/images/bismillah-4-1-2-1.svg"
                  alt="Bismillah"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Center Content: Couple Monogram & Title */}
            <div className="my-4 space-y-3">
              {/* 3D Wax Seal Monogram */}
              <div className="relative w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#E2B755] via-[#B98929] to-[#785310] p-1 shadow-[0_0_25px_rgba(212,175,55,0.6)] flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-amber-200/50 flex flex-col items-center justify-center bg-gradient-to-b from-[#946914] to-[#573907]">
                  <span className="font-serif-cormorant text-2xl font-bold tracking-widest text-amber-100">
                    F &amp; A
                  </span>
                  <span className="text-[8px] tracking-widest text-[#FDE68A] uppercase">3D LUXE</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-semibold block">
                  The Royal Wedding Of
                </span>
                <h1 className="font-cursive text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#FDE68A] via-[#E2B755] to-[#FDE68A] drop-shadow-md">
                  {groomName} <span className="font-serif-cormorant text-3xl text-[#D4AF37]">&amp;</span> {brideName}
                </h1>
                <p className="font-serif-cormorant text-amber-100/90 text-sm tracking-widest pt-1">
                  {eventDate}
                </p>
              </div>
            </div>

            {/* Guest Invitation Plaque */}
            <div className="w-full space-y-4">
              <div className="bg-white/5 border border-[#D4AF37]/40 rounded-2xl p-4 backdrop-blur-md shadow-inner">
                <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-sans">
                  Kepada Yth. Bapak/Ibu/Saudara/i:
                </p>
                <h3 className="font-serif-cormorant text-2xl font-bold text-amber-200 mt-1 capitalize tracking-wide drop-shadow">
                  {guestName}
                </h3>
                <span className="text-[10px] text-zinc-400 italic">
                  *Mohon maaf bila ada kesalahan penulisan nama/gelar
                </span>
              </div>

              {/* Interactive 3D Open Button */}
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleOpenClick}
                disabled={isOpening}
                className="w-full relative group overflow-hidden py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#F3CA65] to-[#B98929] text-[#2F1B05] font-black uppercase text-xs tracking-[0.25em] shadow-[0_10px_25px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#2F1B05] group-hover:rotate-45 transition-transform duration-500" />
                <span>{isOpening ? 'MEMBUKA KOTAK...' : 'BUKA KOTAK UNDANGAN'}</span>
              </motion.button>
            </div>
          </div>
        </ThreeDCardTilt>
      </motion.div>
    </div>
  );
}

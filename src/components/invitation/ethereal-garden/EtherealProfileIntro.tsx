'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EtherealProfileIntroProps {
  groomName: string;
  brideName: string;
  eventDate: string;
  guestName: string;
  onOpen: () => void;
}

export default function EtherealProfileIntro({
  groomName,
  brideName,
  eventDate,
  guestName,
  onOpen,
}: EtherealProfileIntroProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    setIsOpening(true);

    try {
      confetti({
        particleCount: 65,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C7A76C', '#A7B09A', '#FAF7F2', '#3F493D'],
      });
    } catch (e) {}

    setTimeout(() => {
      onOpen();
    }, 850);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden select-none">
      {/* 1. Studio Backdrop with Natural Dappled Shadows */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/ethereal/studio_bg.jpg"
          alt="Studio Table Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#F6F0E6]/25" />
      </div>

      {/* 2. Studio Physical Invitation Envelope Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1.06, y: -15, transition: { duration: 0.75, ease: 'easeInOut' } }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Physical Envelope Card Shadow & Fine Deckle Edge Styling */}
        <div className="relative w-full rounded-[32px] bg-[#FAF7F2]/95 backdrop-blur-md border border-[#C7A76C]/35 shadow-[0_30px_70px_-15px_rgba(184,173,160,0.55),_0_0_0_1px_rgba(255,255,255,0.9)_inset] p-8 sm:p-10 text-center flex flex-col items-center justify-between min-h-[570px]">
          
          {/* Top Delicate Label & Bismillah */}
          <div className="space-y-3 pt-2">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6F0E6] text-[#3F493D] border border-[#C7A76C]/30 text-[9px] uppercase font-bold tracking-[0.35em] shadow-xs">
              THE WEDDING INVITATION
            </span>

            {/* Bismillah SVG */}
            <div className="relative w-36 h-9 mx-auto opacity-75 filter drop-shadow-xs">
              <Image
                src="/assets/images/bismillah-4-1-2-1.svg"
                alt="Bismillah"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Center: Monogram Wax Seal & Couple Names */}
          <div className="my-6 space-y-4">
            {/* 3D Champagne Gold Wax Seal */}
            <motion.div
              whileHover={{ scale: 1.04, rotate: 1.5 }}
              className="relative w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#E4D1AC] via-[#C7A76C] to-[#8E7036] p-1 shadow-[0_12px_28px_rgba(199,167,108,0.35)] flex items-center justify-center cursor-pointer"
            >
              <div className="w-full h-full rounded-full border border-white/60 bg-[#C7A76C] flex flex-col items-center justify-center text-white shadow-inner">
                <span className="font-serif-cormorant text-2xl font-bold tracking-widest text-[#FAF7F2] drop-shadow-sm">
                  {groomName.charAt(0)} ♡ {brideName.charAt(0)}
                </span>
                <span className="text-[7px] tracking-[0.3em] uppercase opacity-90 text-[#F6F0E6]">
                  EST. 2026
                </span>
              </div>
            </motion.div>

            {/* Couple Names (Deep Olive & Champagne Gold) */}
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#A7B09A] font-semibold">
                Together With Their Families
              </p>
              <h1 className="font-serif-cormorant text-4xl sm:text-5xl font-normal text-[#3F493D] tracking-wide">
                {groomName} <span className="text-[#C7A76C] italic font-serif">&amp;</span> {brideName}
              </h1>
              <p className="font-serif-cormorant text-xs tracking-[0.3em] uppercase text-[#3F493D]/80 pt-1 font-medium">
                {eventDate}
              </p>
            </div>
          </div>

          {/* Guest Greeting Plaque */}
          <div className="w-full space-y-5">
            <div className="bg-[#F6F0E6]/80 border border-[#C7A76C]/30 rounded-2xl p-4 shadow-xs backdrop-blur-xs">
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#A7B09A] font-bold block">
                SPECIAL INVITATION FOR:
              </span>
              <h3 className="font-serif-cormorant text-2xl font-bold text-[#3F493D] mt-1 capitalize tracking-wide">
                {guestName}
              </h3>
              <p className="text-[10px] text-[#3F493D]/60 italic mt-0.5">
                We warmly invite you to share in our joy
              </p>
            </div>

            {/* Unboxing Button */}
            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleOpenClick}
              disabled={isOpening}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#3F493D] text-[#FAF7F2] hover:bg-[#323B30] font-sans font-bold text-xs uppercase tracking-[0.25em] shadow-[0_10px_25px_rgba(63,73,61,0.25)] flex items-center justify-center gap-2.5 transition-all cursor-pointer border border-[#C7A76C]/40"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C7A76C]" />
              <span>{isOpening ? 'MEMBUKA UNDANGAN...' : 'BUKA UNDANGAN'}</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

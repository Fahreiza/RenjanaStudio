'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Lantern, CornerDecor } from './ChineseDecor';

interface ChineseProfileIntroProps {
  guestName: string;
  groomName: string;
  brideName: string;
  weddingDate: string;
  venueName: string;
  onOpenInvitation: () => void;
}

export default function ChineseProfileIntro({
  guestName,
  groomName,
  brideName,
  onOpenInvitation,
}: ChineseProfileIntroProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    
    // Play subtle chime sound
    try {
      const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new Ctx();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 1);
      
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.1, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.5);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 1.5);
    } catch { /* ignore */ }

    setTimeout(() => {
      onOpenInvitation();
    }, 1200);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-end overflow-hidden px-6 py-16 select-none bg-[#8A151B]">
      
      {/* Corner Decorations */}
      <div className="absolute inset-6 sm:inset-8 pointer-events-none z-10 border border-[#D4AF37]/30">
        <CornerDecor position="tl" className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 text-[#D4AF37]" />
        <CornerDecor position="tr" className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 text-[#D4AF37]" />
        <CornerDecor position="bl" className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 text-[#D4AF37]" />
        <CornerDecor position="br" className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 text-[#D4AF37]" />
      </div>

      {/* Hanging Lanterns */}
      <div className="absolute top-0 left-8 z-10 opacity-70">
        <Lantern className="w-12 h-24 text-[#D4AF37]" />
      </div>
      <div className="absolute top-0 right-8 z-10 opacity-70">
        <Lantern className="w-12 h-24 text-[#D4AF37]" />
      </div>

      {/* Animated Dragon specific to Cover */}
      <motion.div
        className="absolute inset-0 z-0 opacity-60 mix-blend-screen pointer-events-none"
        animate={{ 
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 10, 
          ease: 'easeInOut' 
        }}
      >
        <Image
          src="/assets/images/chinese_dragon_isolated.png"
          alt="Dragon Cover"
          fill
          className="object-cover sm:object-contain"
          priority
        />
      </motion.div>

      {/* Deep vignette overlay to make text pop over the animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(138,21,27,0.8)_100%)] z-0 pointer-events-none" />

      <AnimatePresence mode="wait">
        {!isOpening && (
          <motion.div 
            key="intro-content"
            className="z-10 flex flex-col items-center w-full max-w-lg mx-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* The Wedding of - Serif all caps */}
            <motion.h2 
              className="text-[10px] sm:text-xs text-[#D4AF37] font-sans font-bold uppercase tracking-[0.4em] mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              The Wedding Celebration
            </motion.h2>

            {/* Couple Names - Vertical Layout using standard blocks */}
            <div className="mb-10 flex flex-col items-center gap-4">
              <h1 className="text-5xl sm:text-7xl text-[#FDFBF7] font-serif uppercase tracking-widest drop-shadow-lg">
                {groomName}
              </h1>
              
              <div className="flex items-center gap-4 my-2">
                <div className="h-[1px] w-12 bg-[#D4AF37]/50" />
                <span className="text-[#D4AF37] font-serif text-xl">&amp;</span>
                <div className="h-[1px] w-12 bg-[#D4AF37]/50" />
              </div>

              <h1 className="text-5xl sm:text-7xl text-[#FDFBF7] font-serif uppercase tracking-widest drop-shadow-lg">
                {brideName}
              </h1>
            </div>

            {/* Subtext */}
            <div className="mb-12 max-w-sm mx-auto border-t border-b border-[#D4AF37]/30 py-4">
              <p className="text-xs text-[#FDFBF7]/90 font-serif leading-relaxed px-4 uppercase tracking-widest">
                Special Invitation For:<br/>
                <span className="text-[#D4AF37] text-lg mt-2 block font-bold">{guestName || 'Tamu Undangan'}</span>
              </p>
            </div>

            {/* Open Button */}
            <button
              onClick={handleOpen}
              className="px-10 py-4 bg-[#D4AF37] text-[#8A151B] rounded-sm hover:bg-[#FDFBF7] transition-all duration-300 active:scale-95 flex items-center gap-3 shadow-[0_0_20px_rgba(212,175,55,0.3)] group border border-[#D4AF37]"
            >
              <span className="text-xs font-sans font-bold uppercase tracking-[0.3em]">
                Buka Undangan
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

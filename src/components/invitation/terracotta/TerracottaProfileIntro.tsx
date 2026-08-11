'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface TerracottaProfileIntroProps {
  guestName: string;
  groomName: string;
  brideName: string;
  weddingDate: string;
  venueName: string;
  onOpenInvitation: () => void;
}

export default function TerracottaProfileIntro({
  groomName,
  brideName,
  onOpenInvitation,
}: TerracottaProfileIntroProps) {
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
    <div className="relative min-h-screen flex flex-col items-center justify-end overflow-hidden px-6 py-16 select-none bg-[#D4C3B3]">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero-wedding.webp"
          alt="Couple Cover"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Gradient Overlay for text readability at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      <AnimatePresence mode="wait">
        {!isOpening && (
          <motion.div 
            key="intro-content"
            className="z-10 flex flex-col items-center w-full max-w-lg mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* The Wedding of */}
            <motion.h2 
              className="text-2xl sm:text-3xl text-white/90 font-sans mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              The Wedding of
            </motion.h2>

            {/* Couple Names - Script Font */}
            <div className="mb-6">
              <h1 
                className="text-5xl sm:text-6xl text-white font-medium"
                style={{ fontFamily: 'var(--font-great-vibes)' }}
              >
                {groomName} &amp; {brideName}
              </h1>
            </div>

            {/* Subtext */}
            <div className="mb-8 max-w-sm mx-auto">
              <p className="text-sm text-white/80 font-sans leading-relaxed px-4">
                Dengan penuh kegembiraan, kami mengundang Bpk/Ibu/Sdr/i untuk hadir di hari istimewa kami
              </p>
            </div>

            {/* Open Button */}
            <button
              onClick={handleOpen}
              className="mt-4 px-8 py-3.5 bg-white text-[#5C3D2E] rounded-full hover:bg-gray-50 transition-colors active:scale-95 flex items-center gap-2 shadow-lg group"
            >
              <ArrowRight className="w-4 h-4 text-[#5C3D2E] group-hover:translate-x-1 transition-transform" />
              <span className="text-sm font-sans font-semibold tracking-wide">
                Buka Undangan
              </span>
            </button>
            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

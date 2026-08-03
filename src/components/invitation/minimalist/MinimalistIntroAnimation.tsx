'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export default function MinimalistIntroAnimation() {
  useEffect(() => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now); // A4
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.4); // A5

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.9);
      }
    } catch {
      // Audio fallback
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-[#F9F6F0] flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Background Radial Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#7F9481]/20 rounded-full blur-[140px] pointer-events-none animate-pulse" />

      {/* Animated Golden Botanical Crest */}
      <motion.div
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: [0.4, 1.15, 1], opacity: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative mb-6"
      >
        <div className="w-28 h-28 rounded-full bg-white border-2 border-[#D4AF37] p-2 shadow-2xl flex items-center justify-center relative ring-4 ring-[#7F9481]/20">
          <div className="relative w-20 h-20">
            <Image
              src="/assets/images/TEMA-01-BUNGA-01-co-1-2.png"
              alt="Botanical Seal"
              fill
              sizes="80px"
              className="object-contain animate-spin-slow"
            />
          </div>
          <Sparkles className="w-5 h-5 text-[#D4AF37] absolute -top-1 -right-1 animate-ping" />
        </div>
      </motion.div>

      {/* Brand Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center space-y-1"
      >
        <h2 className="text-3xl sm:text-4xl font-serif text-[#C48B96] tracking-widest font-bold">
          MINIMALIST <span className="text-[#7F9481] italic font-normal">LUXURY</span>
        </h2>
        <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto opacity-70 mt-2" />
        <p className="text-[10px] text-[#7F9481] font-mono tracking-widest uppercase animate-pulse pt-2 font-bold">
          MEMBUKA UNDANGAN RESMI...
        </p>
      </motion.div>
    </motion.div>
  );
}

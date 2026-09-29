'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function VogueIntroAnimation() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0E0E0E] text-[#FAFAF8] p-6 text-center select-none"
    >
      {/* Editorial Watermark background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
        <span className="text-[120px] sm:text-[180px] font-serif font-black tracking-tighter">
          VOGUE
        </span>
      </div>

      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center space-y-4"
      >
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-[#B39871] font-mono">
          Special Edition • Issue No. 21
        </span>

        {/* Magazine Title Logo */}
        <h1 className="text-5xl sm:text-7xl font-serif tracking-[0.2em] font-black uppercase text-[#FAFAF8]">
          RENJANA
        </h1>

        <div className="w-16 h-px bg-[#B39871]" />

        <p className="text-xs uppercase tracking-[0.3em] text-[#FAFAF8]/70 font-sans">
          The Wedding Editorial
        </p>

        {/* Animated shutter flash */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex items-center gap-1.5 text-[10px] text-[#B39871] tracking-widest pt-2 font-mono"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>CURATING YOUR INVITATION</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

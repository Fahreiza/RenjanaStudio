'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function JapandiIntroAnimation() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F4F0EA] text-[#2D2F2E] p-6 text-center select-none"
    >
      {/* Background Zen Enso Circle */}
      <div className="relative flex flex-col items-center justify-center space-y-4">
        {/* Animated Enso Circle SVG */}
        <motion.div
          initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative w-32 h-32 flex items-center justify-center"
        >
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#637061]">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="210 40"
              className="opacity-70"
            />
          </svg>
          <span className="absolute font-serif text-lg tracking-widest text-[#637061]">
            和
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="space-y-1"
        >
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#637061] font-mono block">
            JAPANDI ZEN &bull; WABI-SABI
          </span>
          <h1 className="text-3xl font-serif tracking-[0.2em] font-normal text-[#2D2F2E] uppercase">
            RENJANA
          </h1>
          <p className="text-xs text-[#2D2F2E]/60 font-serif italic">
            Ketenangan &bull; Kesederhanaan &bull; Ketulusan
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

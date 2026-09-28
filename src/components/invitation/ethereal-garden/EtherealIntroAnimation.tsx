'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function EtherealIntroAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F6F0E6] text-[#3F493D] select-none overflow-hidden"
    >
      {/* Studio Radial Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#FFFFFF_0%,_#F6F0E6_60%,_#E8DEC8_100%)] opacity-90" />

      <div className="relative z-10 flex flex-col items-center justify-center space-y-6 text-center max-w-sm px-6">
        {/* Animated Double Arch Line Art Motif */}
        <div className="relative w-36 h-48 flex items-center justify-center">
          {/* Outer Arch */}
          <motion.div
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 rounded-t-full border-2 border-[#C7A76C]/60 shadow-sm"
          />

          {/* Inner Arch */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="absolute inset-3 rounded-t-full border border-dashed border-[#A7B09A]"
          />

          {/* Center Botanical Monogram */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
            className="flex flex-col items-center justify-center space-y-1"
          >
            <span className="font-serif-cormorant text-3xl font-normal text-[#3F493D]">
              A &amp; A
            </span>
            <div className="w-8 h-[1px] bg-[#C7A76C]" />
            <span className="text-[8px] uppercase tracking-[0.3em] text-[#A7B09A] font-bold">
              EST. 2026
            </span>
          </motion.div>
        </div>

        {/* Brand Text Branding */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-1.5"
        >
          <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-[#A7B09A] font-bold block">
            RENJANA EXCLUSIVE
          </span>
          <h2 className="font-serif-cormorant text-2xl sm:text-3xl font-bold tracking-widest text-[#3F493D]">
            ETHEREAL GARDEN
          </h2>
          <p className="text-[10px] text-[#3F493D]/70 font-sans tracking-[0.25em] uppercase">
            Double-Layer Arch Edition
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

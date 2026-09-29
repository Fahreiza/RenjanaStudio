'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GununganWayangSvg } from './JavaMaroonOrnaments';

export default function JavaMaroonIntroAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1A0205] text-[#FFE29F] overflow-hidden"
    >
      {/* 3D Background Radiance Glow */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: [0.5, 1.2, 1], opacity: [0, 0.4, 0.25] }}
        transition={{ duration: 2.2, ease: 'easeOut' }}
        className="absolute w-[500px] h-[500px] rounded-full bg-radial from-[#D4AF37]/40 via-[#805607]/20 to-transparent blur-3xl pointer-events-none"
      />

      {/* Gunungan Kayon 3D Rise and Rotation */}
      <motion.div
        initial={{ scale: 0, rotateY: 180, y: 50, opacity: 0 }}
        animate={{ scale: 1, rotateY: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-24 h-36 filter drop-shadow-[0_0_20px_rgba(226,183,85,0.7)] mb-4"
      >
        <GununganWayangSvg className="w-full h-full" />
      </motion.div>

      {/* Royal Seal & Title Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center space-y-2 z-10 px-4"
      >
        <span className="text-[11px] uppercase tracking-[0.35em] text-[#E2B755] font-serif font-bold">
          Pawiwahan Ageng
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif text-[#FFF2A3] tracking-wide drop-shadow-md">
          Fahreiza &amp; Amanda
        </h2>
        <div className="flex items-center justify-center gap-2 pt-1 text-xs text-[#E2B755]/80">
          <span className="h-px w-8 bg-[#E2B755]/60" />
          <span className="font-serif italic tracking-wider">Sabtu Pahing, 21 November 2026</span>
          <span className="h-px w-8 bg-[#E2B755]/60" />
        </div>
      </motion.div>

      {/* Bottom Loading Progress Bar */}
      <div className="absolute bottom-12 w-48 h-1 bg-[#2E050A] rounded-full overflow-hidden border border-[#D4AF37]/30">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.1, ease: 'easeInOut' }}
          className="h-full bg-gradient-to-r from-[#B8860B] via-[#FFE29F] to-[#D4AF37]"
        />
      </div>
    </motion.div>
  );
}

'use client';

import { motion } from 'framer-motion';

export default function NetflixIntroAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Background Red Ambient Glow */}
      <motion.div
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: [0.4, 2, 3.5], opacity: [0, 0.7, 0] }}
        transition={{ duration: 2.2, ease: 'easeInOut' }}
        className="absolute w-96 h-96 rounded-full bg-[#E50914] blur-[140px] pointer-events-none"
      />

      {/* Pure Iconic Netflix "N" Logo Ribbon Animation */}
      <motion.div
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: [0.2, 1.1, 3.2], opacity: [0, 1, 0] }}
        transition={{ duration: 2.2, times: [0, 0.45, 1], ease: 'circOut' }}
        className="relative w-32 h-44 md:w-40 md:h-56 flex items-center justify-center z-10"
      >
        {/* Netflix N SVG Ribbon */}
        <svg viewBox="0 0 100 140" className="w-full h-full drop-shadow-[0_0_40px_rgba(229,9,20,0.95)]">
          {/* Left Stem */}
          <path d="M10,0 L35,0 L35,140 L10,140 Z" fill="#B81D24" />
          {/* Diagonal Ribbon Overlay */}
          <path d="M10,0 L35,0 L90,140 L65,140 Z" fill="#E50914" />
          {/* Right Stem */}
          <path d="M65,0 L90,0 L90,140 L65,140 Z" fill="#B81D24" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

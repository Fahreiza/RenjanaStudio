'use client';

import { motion } from 'framer-motion';

export default function YouTubeIntroAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 bg-[#0A0A0A] flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Radial Red Ambient Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#FF0000]/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      {/* Pulsing Audio Soundwaves */}
      <div className="relative flex items-center justify-center gap-1.5 mb-8">
        {[0.4, 0.7, 1, 0.6, 0.9, 0.5, 0.8].map((scale, i) => (
          <motion.div
            key={i}
            animate={{
              scaleY: [1, 2.5, 0.8, 2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.15,
              ease: 'easeInOut',
            }}
            className="w-1.5 h-8 bg-[#FF0000] rounded-full shadow-[0_0_12px_#FF0000]"
          />
        ))}
      </div>

      {/* YouTube Animated Red Play Logo */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: [0.5, 1.1, 1], opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative mb-6"
      >
        <div className="w-24 h-24 rounded-3xl bg-[#FF0000] flex items-center justify-center shadow-[0_0_50px_rgba(255,0,0,0.6)]">
          <svg className="w-14 h-14 text-white fill-current" viewBox="0 0 24 24">
            <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </div>
      </motion.div>

      {/* Brand Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center space-y-1"
      >
        <h2 className="text-2xl font-extrabold tracking-tight text-white font-sans">
          Renjana<span className="text-[#FF0000]">Tube</span> Premiere
        </h2>
        <p className="text-xs text-zinc-400 font-mono tracking-widest uppercase animate-pulse">
          PLAYING WEDDING PREMIERE...
        </p>
      </motion.div>
    </motion.div>
  );
}

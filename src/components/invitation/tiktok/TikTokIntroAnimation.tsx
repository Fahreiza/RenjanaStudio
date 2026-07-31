'use client';

import { motion } from 'framer-motion';
import { Music2 } from 'lucide-react';

export default function TikTokIntroAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Ambient Neon Cyan & Magenta Glitch Glow */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-[#FE2C55]/20 via-[#00F2FE]/20 to-[#25F4EE]/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      {/* TikTok Animated Logo Icon */}
      <motion.div
        initial={{ scale: 0.4, rotate: -15, opacity: 0 }}
        animate={{
          scale: [0.4, 1.2, 1],
          rotate: [-15, 5, 0],
          opacity: 1,
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative mb-6"
      >
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl p-1 bg-gradient-to-tr from-[#FE2C55] via-[#00F2FE] to-[#25F4EE] shadow-[0_0_60px_rgba(0,242,254,0.6)] flex items-center justify-center animate-pulse">
          <div className="w-full h-full bg-black rounded-[22px] flex items-center justify-center border-2 border-black p-4 relative">
            {/* TikTok Music Note Icon with 3D Glitch Effect */}
            <Music2 className="w-16 h-16 text-[#00F2FE] absolute drop-shadow-[3px_3px_0px_#FE2C55]" />
          </div>
        </div>
      </motion.div>

      {/* Brand Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center space-y-1"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans drop-shadow-[2px_2px_0px_rgba(254,44,85,0.9)]">
          Wedding<span className="text-[#00F2FE]">Tok</span>
        </h2>
        <p className="text-xs text-zinc-400 font-mono tracking-widest uppercase animate-pulse pt-2">
          OPENING TIKTOK FYP STORY...
        </p>
      </motion.div>
    </motion.div>
  );
}

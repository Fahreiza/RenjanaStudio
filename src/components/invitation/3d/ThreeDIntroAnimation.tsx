'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function ThreeDIntroAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#100D12] text-white select-none overflow-hidden"
    >
      {/* 3D Radial Background Flare */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#573914]/40 via-[#1F141B]/90 to-[#0B080D]" />

      <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
        {/* Animated 3D Gyro Rings */}
        <div className="relative w-36 h-36 flex items-center justify-center perspective-1000">
          {/* Ring 1 - Outer Gold Gyro */}
          <motion.div
            animate={{ rotateZ: 360, rotateX: [20, 60, 20] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.5)]"
          />

          {/* Ring 2 - Inner Golden Ring */}
          <motion.div
            animate={{ rotateZ: -360, rotateY: [15, 75, 15] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
            className="absolute inset-3 rounded-full border-2 border-[#FDE68A] shadow-[0_0_20px_rgba(253,230,138,0.7)]"
          />

          {/* Core Gem - 3D Center Monogram */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: [1, 1.15, 1], rotate: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', repeat: Infinity, repeatDelay: 0.5 }}
            className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#D4AF37] via-[#F3CA65] to-[#FDE68A] p-0.5 shadow-[0_0_35px_rgba(212,175,55,0.8)] rotate-45 flex items-center justify-center"
          >
            <div className="w-full h-full bg-[#20151C] rounded-[14px] flex items-center justify-center">
              <span className="-rotate-45 font-serif-cormorant text-2xl font-black text-amber-200">
                3D
              </span>
            </div>
          </motion.div>
        </div>

        {/* Brand Text Branding */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center space-y-1.5"
        >
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-spin duration-3000" />
            <span className="text-[11px] font-mono uppercase tracking-[0.4em] text-[#D4AF37] font-bold">
              RENJANA STUDIO
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-spin duration-3000" />
          </div>
          <h2 className="font-serif-cormorant text-2xl md:text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-[#F3CA65] to-amber-100">
            3D LUMINA DEPTH
          </h2>
          <p className="text-[10px] text-zinc-400 font-sans tracking-widest uppercase">
            Exclusive Spatial Wedding Experience
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

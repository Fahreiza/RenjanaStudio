'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LinkedinIntroAnimation() {
  useEffect(() => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const now = ctx.currentTime;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.exponentialRampToValueAtTime(1046.5, now + 0.3); // C6

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.8);
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
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 bg-[#F3F2EF] flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Background Radial Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#0A66C2]/15 rounded-full blur-[130px] pointer-events-none animate-pulse" />

      {/* Animated LinkedIn Logo */}
      <motion.div
        initial={{ scale: 0.3, rotate: -15, opacity: 0 }}
        animate={{
          scale: [0.3, 1.2, 1],
          rotate: [-15, 5, 0],
          opacity: 1,
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative mb-6"
      >
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#0A66C2] shadow-[0_10px_40px_rgba(10,102,194,0.4)] flex items-center justify-center font-black text-5xl sm:text-6xl text-white tracking-tighter">
          in
        </div>
      </motion.div>

      {/* Brand Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center space-y-1"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1D2226]">
          Wedding<span className="text-[#0A66C2]">Connect</span>
        </h2>
        <p className="text-xs text-zinc-500 font-mono tracking-widest uppercase animate-pulse pt-2">
          CONNECTING TO EXECUTIVE WEDDING PROFILE...
        </p>
      </motion.div>
    </motion.div>
  );
}

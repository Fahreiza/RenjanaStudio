'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TwitterIntroAnimation() {
  useEffect(() => {
    // Play subtle fanfare chime sound via Web Audio API
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
      // Audio playback fallback
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 bg-[#000000] flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Background Radial Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#1DA1F2]/20 rounded-full blur-[130px] pointer-events-none animate-pulse" />

      {/* Animated X Logo */}
      <motion.div
        initial={{ scale: 0.3, rotate: -20, opacity: 0 }}
        animate={{
          scale: [0.3, 1.2, 1],
          rotate: [-20, 5, 0],
          opacity: 1,
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative mb-6"
      >
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-[#1DA1F2] to-sky-600 p-1 shadow-[0_0_60px_rgba(29,161,242,0.6)] flex items-center justify-center">
          <div className="w-full h-full bg-black rounded-[22px] flex items-center justify-center p-5 border border-sky-400/30">
            {/* Official X Logo SVG */}
            <svg
              className="w-full h-full text-white fill-current animate-pulse"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
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
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center justify-center gap-2">
          Wedding<span className="text-[#1DA1F2]">Thread</span>
        </h2>
        <p className="text-xs text-zinc-400 font-mono tracking-widest uppercase animate-pulse pt-2">
          LOADING TWITTER INVITATION THREAD...
        </p>
      </motion.div>
    </motion.div>
  );
}

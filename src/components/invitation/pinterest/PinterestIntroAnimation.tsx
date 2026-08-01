'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PinterestIntroAnimation() {
  useEffect(() => {
    // Play fanfare chime sound via Web Audio API
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const now = ctx.currentTime;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(659.25, now); // E5
        osc.frequency.exponentialRampToValueAtTime(1318.5, now + 0.3); // E6

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
      className="fixed inset-0 z-50 bg-[#FAFAFA] text-[#111111] flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Background Radial Red Glow */}
      <div className="absolute w-[550px] h-[550px] bg-[#E60023]/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />

      {/* Animated Pinterest Logo */}
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
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#E60023] p-1 shadow-[0_0_60px_rgba(230,0,35,0.4)] flex items-center justify-center animate-bounce">
          <div className="w-full h-full bg-white rounded-full flex items-center justify-center p-4 border-2 border-[#E60023]/30">
            {/* Pinterest Official P Vector SVG */}
            <svg
              className="w-full h-full text-[#E60023] fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
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
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#111111] flex items-center justify-center gap-2">
          Wedding<span className="text-[#E60023]">Board</span>
        </h2>
        <p className="text-xs text-[#5F5F5F] font-mono tracking-widest uppercase animate-pulse pt-2">
          OPENING PINTEREST WEDDING BOARD...
        </p>
      </motion.div>
    </motion.div>
  );
}

'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface JuncaIntroAnimationProps {
  onComplete: () => void;
}

// Procedural audio chime for intro curtain reveal
const playIntroChime = () => {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.35);

    gain.gain.setValueAtTime(0.01, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.45);
  } catch (e) {}
};

/**
 * 2.2-second kinetic typographic curtain reveal inspired by Junca Studio's preloader.
 */
export default function JuncaIntroAnimation({ onComplete }: JuncaIntroAnimationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    playIntroChime();
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 600);
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 bg-[#080808] text-[#FBFBFB] flex flex-col justify-between p-8 sm:p-14 select-none overflow-hidden"
        >
          {/* Top Monospace Header */}
          <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
            <span>JUNCA STUDIO × RENJANA</span>
            <span>SYSTEM INITIALIZE // 2026</span>
          </div>

          {/* Center Brand Identity with 3-Blade Turbine & Kinetic Title */}
          <div className="my-auto flex flex-col items-center text-center space-y-6">
            {/* Animated Turbine Vector */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
              className="w-16 h-16 text-[#ED3327]"
            >
              <svg viewBox="0 0 24 24" width="64" height="64" fill="currentColor">
                <g>
                  <path d="M12 12 C12 6, 15 2, 16.5 2 C18 2, 17 6, 12 12 Z" />
                  <path d="M12 12 C12 6, 15 2, 16.5 2 C18 2, 17 6, 12 12 Z" transform="rotate(120 12 12)" />
                  <path d="M12 12 C12 6, 15 2, 16.5 2 C18 2, 17 6, 12 12 Z" transform="rotate(240 12 12)" />
                  <circle cx="12" cy="12" r="2.2" fill="#080808" />
                </g>
              </svg>
            </motion.div>

            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter text-white"
              >
                RENJANA × JUNCA 3D
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-mono text-xs uppercase tracking-[0.35em] text-[#ED3327]"
              >
                AVANT-GARDE WEDDING EXHIBITION
              </motion.p>
            </div>

            {/* Kinetic Progress Bar */}
            <div className="w-48 h-0.5 bg-neutral-800 rounded-full overflow-hidden mt-4">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
                className="h-full bg-[#ED3327]"
              />
            </div>
          </div>

          {/* Footer Coordinates */}
          <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
            <span>PARIS // JAKARTA // BANDUNG</span>
            <span>EXPERIENCE READY</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

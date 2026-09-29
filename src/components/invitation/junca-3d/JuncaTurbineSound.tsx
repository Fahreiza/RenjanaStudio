'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface JuncaTurbineSoundProps {
  isPlaying: boolean;
  onToggle: () => void;
  className?: string;
}

/**
 * Signature 3-Blade Turbine Audio Controller
 * Inspired by Junca Studio's authentic `#robot-son` button.
 * The 3 turbine blades spin dynamically when audio is playing,
 * with mix-blend-mode difference, monospace metadata, and live audio indicator.
 */
export default function JuncaTurbineSound({
  isPlaying,
  onToggle,
  className = '',
}: JuncaTurbineSoundProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isPlaying}
      aria-label={isPlaying ? 'Mute Ambient Sound' : 'Play Ambient Sound'}
      className={`group fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#080808]/90 text-[#FBFBFB] border border-white/20 shadow-2xl backdrop-blur-md transition-all hover:border-[#ED3327] hover:scale-105 active:scale-95 ${className}`}
    >
      {/* 3-Blade Turbine SVG */}
      <motion.div
        animate={{ rotate: isPlaying ? 360 : 0 }}
        transition={
          isPlaying
            ? { repeat: Infinity, duration: 2.2, ease: 'linear' }
            : { duration: 0.5, ease: 'easeOut' }
        }
        className="w-5 h-5 flex items-center justify-center text-white group-hover:text-[#ED3327] transition-colors"
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
          className="overflow-visible"
        >
          <g>
            {/* Blade 1 (0 deg) */}
            <path d="M12 12 C12 6, 15 2, 16.5 2 C18 2, 17 6, 12 12 Z" />
            {/* Blade 2 (120 deg) */}
            <path
              d="M12 12 C12 6, 15 2, 16.5 2 C18 2, 17 6, 12 12 Z"
              transform="rotate(120 12 12)"
            />
            {/* Blade 3 (240 deg) */}
            <path
              d="M12 12 C12 6, 15 2, 16.5 2 C18 2, 17 6, 12 12 Z"
              transform="rotate(240 12 12)"
            />
            {/* Center Core Hub */}
            <circle cx="12" cy="12" r="2.4" fill="#080808" stroke="currentColor" strokeWidth="1" />
          </g>
        </svg>
      </motion.div>

      {/* Label and Soundwave Bars */}
      <div className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider uppercase">
        <span className={isPlaying ? 'text-white' : 'text-neutral-400'}>
          Sound
        </span>
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            isPlaying ? 'bg-[#ED3327] animate-pulse' : 'bg-neutral-600'
          }`}
        />
        {isPlaying && (
          <div className="flex items-end gap-0.5 h-2.5 ml-1">
            <span className="w-0.5 h-2 bg-[#ED3327] animate-bounce [animation-delay:0ms]" />
            <span className="w-0.5 h-3 bg-[#ED3327] animate-bounce [animation-delay:150ms]" />
            <span className="w-0.5 h-1.5 bg-[#ED3327] animate-bounce [animation-delay:300ms]" />
          </div>
        )}
      </div>
    </button>
  );
}

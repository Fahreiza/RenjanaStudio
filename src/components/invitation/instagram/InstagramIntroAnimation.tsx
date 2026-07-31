'use client';

import { motion } from 'framer-motion';

export default function InstagramIntroAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Radial Instagram Color Ambient Glow */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-[#FCCC63]/25 via-[#E4405F]/25 to-[#833AB4]/25 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      {/* Animated Latest Official Instagram Camera Logo */}
      <motion.div
        initial={{ scale: 0.4, rotate: -10, opacity: 0 }}
        animate={{
          scale: [0.4, 1.15, 1],
          rotate: [-10, 5, 0],
          opacity: 1,
        }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative mb-6"
      >
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl p-1 bg-gradient-to-tr from-[#FCCC63] via-[#E4405F] to-[#833AB4] shadow-[0_0_60px_rgba(228,64,95,0.7)] flex items-center justify-center animate-pulse">
          <div className="w-full h-full bg-black rounded-[22px] flex items-center justify-center border-2 border-black p-3">
            {/* Latest Official Instagram Vector Logo SVG */}
            <svg
              className="w-full h-full text-white fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C9.284 2 8.944 2.012 7.877 2.06 4.72 2.204 2.204 4.719 2.06 7.877 2.012 8.944 2 9.284 2 12c0 2.716.012 3.056.06 4.123.144 3.157 2.66 5.673 5.817 5.817 1.067.048 1.407.06 4.123.06 2.716 0 3.056-.012 4.123-.06 3.157-.144 5.673-2.66 5.817-5.817.048-1.067.06-1.407.06-4.123 0-2.716-.012-3.056-.06-4.123-.144-3.158-2.66-5.673-5.817-5.817C15.056 2.012 14.716 2 12 2zm0 1.802c2.67 0 2.987.01 4.042.058 2.312.106 3.564 1.357 3.67 3.67.048 1.055.058 1.372.058 4.042 0 2.67-.01 2.987-.058 4.042-.106 2.312-1.358 3.564-3.67 3.67-1.055.048-1.372.058-4.042.058-2.67 0-2.987-.01-4.042-.058-2.312-.106-3.564-1.358-3.67-3.67-.048-1.055-.058-1.372-.058-4.042 0-2.67.01-2.987.058-4.042.106-2.313 1.358-3.564 3.67-3.67 1.055-.048 1.372-.058 4.042-.058zM12 6.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27zm0 1.802a3.333 3.333 0 1 1 0 6.666 3.333 3.333 0 0 1 0-6.666zm5.338-3.205a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"
              />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Brand Title with Instagram Calligraphy Font */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center space-y-1"
      >
        <h2 className="text-4xl sm:text-5xl font-normal font-instagram-logo tracking-wide text-white leading-none">
          Renjana<span className="bg-gradient-to-tr from-[#FCCC63] via-[#E4405F] to-[#833AB4] bg-clip-text text-transparent">Gram</span>
        </h2>
        <p className="text-xs text-zinc-400 font-mono tracking-widest uppercase animate-pulse pt-2">
          OPENING INSTAGRAM STORY...
        </p>
      </motion.div>
    </motion.div>
  );
}

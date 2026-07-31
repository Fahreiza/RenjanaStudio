'use client';

import { motion } from 'framer-motion';

export default function SpotifyIntroAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-[#121212] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Radial Green Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#1DB954]/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />

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
            className="w-1.5 h-8 bg-[#1DB954] rounded-full shadow-[0_0_12px_#1DB954]"
          />
        ))}
      </div>

      {/* Spotify Animated Logo */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: [0.5, 1.1, 1], opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative mb-6"
      >
        <div className="w-24 h-24 rounded-full bg-[#1DB954] flex items-center justify-center shadow-[0_0_40px_rgba(29,185,84,0.6)]">
          <svg className="w-14 h-14 text-black fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.62.54.3.72.96.42 1.5-.3.54-.96.72-1.5.42z"/>
          </svg>
        </div>
      </motion.div>

      {/* Brand Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center space-y-1"
      >
        <h2 className="text-2xl font-extrabold tracking-tight text-white font-sans">
          Renjanafy <span className="text-[#1DB954]">Spotify</span>
        </h2>
        <p className="text-xs text-zinc-400 font-mono tracking-widest uppercase animate-pulse">
          PLAYING WEDDING PLAYLIST...
        </p>
      </motion.div>
    </motion.div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LyricCardItem {
  id: number;
  label: string;
  quote: string;
  source: string;
}

const LYRICS_DATA: LyricCardItem[] = [
  {
    id: 1,
    label: 'LIRIK',
    quote: '"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya."',
    source: 'AR-RUM 21',
  },
  {
    id: 2,
    label: 'LIRIK',
    quote: '"Dan Dia menjadikan di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir."',
    source: 'AR-RUM 21',
  },
  {
    id: 3,
    label: 'LIRIK',
    quote: '"Two souls, one rhythm, written forever in the stars to journey together through life."',
    source: 'FAHREIZA & AMANDA',
  },
];

export default function SpotifyLyricsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % LYRICS_DATA.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const currentItem = LYRICS_DATA[currentIndex];

  return (
    <section className="py-6 px-4 max-w-2xl mx-auto text-white select-none">
      {/* Compact Spotify Lyric Card Box */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="w-full rounded-2xl bg-[#0e3e23] p-5 sm:p-6 shadow-xl flex flex-col justify-between space-y-4 border border-emerald-800/40 relative overflow-hidden"
      >
        {/* Subtle Ambient Lighting */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1DB954]/10 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header Label: LIRIK */}
        <div className="flex items-center justify-between z-10">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-zinc-300 uppercase font-sans">
            {currentItem.label}
          </span>

          {/* Indicators for multiple quote cards */}
          <div className="flex items-center gap-1.5">
            {LYRICS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-5 bg-[#1DB954]' : 'w-1.5 bg-emerald-900'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Main Lyric Quote Body */}
        <div className="py-1 min-h-[90px] sm:min-h-[110px] flex items-center z-10">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentItem.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35 }}
              className="text-base sm:text-lg md:text-xl font-bold text-white font-sans leading-snug sm:leading-relaxed tracking-tight"
            >
              {currentItem.quote}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Bottom Footer Source: AR-RUM 21 */}
        <div className="pt-2 z-10 flex items-center justify-between border-t border-emerald-900/40">
          <span className="text-[11px] sm:text-xs font-extrabold tracking-[0.2em] text-zinc-300 uppercase font-sans">
            {currentItem.source}
          </span>
          <span className="text-[10px] text-emerald-400/70 font-mono">
            SPOTIFY VERIFIED QUOTE
          </span>
        </div>
      </motion.div>
    </section>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

interface JuncaClosingSectionProps {
  groomName?: string;
  brideName?: string;
}

/**
 * Editorial Closing & Credits Section inspired by Junca Studio's minimalist footer.
 */
export default function JuncaClosingSection({
  groomName = 'Fahreiza',
  brideName = 'Amanda',
}: JuncaClosingSectionProps) {
  return (
    <footer className="relative w-full py-24 px-4 sm:px-8 bg-[#050505] text-[#FBFBFB] select-none overflow-hidden border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-10">
        {/* Subtle Decorative Sparkle */}
        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#ED3327]">
          <Heart className="w-5 h-5 fill-current" />
        </div>

        {/* Thank You Note */}
        <div className="space-y-4 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#ED3327] font-bold block">
            UNGKAPAN TERIMA KASIH // ACKNOWLEDGEMENT
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
            Merupakan Kehormatan Besar Atas Kehadiran &amp; Doa Restu Anda
          </h2>
          <p className="font-mono text-xs text-neutral-400 leading-relaxed tracking-wider uppercase pt-2">
            Kami yang berbahagia sekeluarga besar menghaturkan terima kasih yang tulus dan mendalam atas segala perhatian, doa, dan cinta yang telah tercurah.
          </p>
        </div>

        {/* Signatures */}
        <div className="pt-4">
          <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-2">
            KAMI YANG BERBAHAGIA:
          </p>
          <p className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase">
            {groomName} <span className="text-[#ED3327] font-light">&amp;</span> {brideName}
          </p>
          <p className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest mt-1">
            BESERTA KELUARGA BESAR KEDUA MEMPELAI
          </p>
        </div>

        {/* Studio Colophon & Watermark */}
        <div className="w-full pt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ED3327]" />
            <span>RENJANA STUDIO × JUNCA DESIGN SYSTEM</span>
          </div>
          <span>&copy; 2026 // ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </footer>
  );
}

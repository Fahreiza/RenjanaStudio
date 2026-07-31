'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface NetflixClosingProps {
  groomName: string;
  brideName: string;
}

export default function NetflixClosing({ groomName, brideName }: NetflixClosingProps) {
  return (
    <footer className="py-16 px-4 max-w-3xl mx-auto text-center text-white space-y-8 select-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <Heart className="w-10 h-10 text-[#E50914] fill-current mx-auto animate-pulse" />

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.3em] text-[#E50914] font-bold">
            Salam Cinta Dari Pengantin
          </span>
          <h2 className="font-cursive text-5xl md:text-6xl text-[#E50914]">
            {groomName} <span className="font-serif-cormorant text-4xl text-white">&amp;</span> {brideName}
          </h2>
          <p className="text-xs text-zinc-400 font-sans italic max-w-md mx-auto leading-relaxed pt-1">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kami.
          </p>
        </div>

        {/* RenjanaFlix Watermark */}
        <div className="pt-8 border-t border-zinc-800 text-[11px] text-zinc-500 space-y-1 font-sans">
          <p>Official Wedding Production by <span className="font-extrabold text-[#E50914]">RENJANAFLIX</span></p>
          <p>&copy; 2026 Renjana Studio — All Rights Reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
}

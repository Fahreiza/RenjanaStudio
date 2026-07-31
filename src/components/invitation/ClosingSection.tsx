'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

interface ClosingSectionProps {
  groomName: string;
  brideName: string;
  accentColor?: string;
  themeName?: string;
}

export default function ClosingSection({
  groomName,
  brideName,
  accentColor = '#1DB954',
  themeName = 'Spotify Edition',
}: ClosingSectionProps) {
  return (
    <footer className="py-12 px-4 text-center max-w-3xl mx-auto space-y-8 select-none">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-b from-[#181818] via-[#141414] to-[#0f0f0f] border border-zinc-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden space-y-8"
      >
        {/* Glowing Ambient Light */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
          style={{ backgroundColor: `${accentColor}1A` }}
        />

        {/* Top Verified Badge */}
        <div
          className="inline-flex items-center gap-2 border px-4 py-1.5 rounded-full text-xs font-extrabold tracking-widest uppercase"
          style={{
            borderColor: `${accentColor}40`,
            backgroundColor: `${accentColor}15`,
            color: accentColor,
          }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>DOA RESTU &amp; UNGKAPAN TERIMA KASIH</span>
        </div>

        {/* Main Heartfelt Message */}
        <div className="relative z-10 max-w-lg mx-auto space-y-4">
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans font-medium px-2">
            &ldquo;Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kami.&rdquo;
          </p>
        </div>

        {/* Decorative Divider */}
        <div className="relative z-10 flex items-center justify-center gap-3">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-zinc-700" />
          <Heart className="w-4 h-4 fill-current animate-pulse" style={{ color: accentColor }} />
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-zinc-700" />
        </div>

        {/* Happy Couple & Family Section */}
        <div className="relative z-10 space-y-3 pt-2">
          <span className="text-[11px] uppercase tracking-[0.3em] font-extrabold font-mono block" style={{ color: accentColor }}>
            KAMI YANG BERBAHAGIA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-sans">
            {groomName} <span className="font-serif" style={{ color: accentColor }}>&amp;</span> {brideName}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans tracking-wide">
            beserta keluarga besar kedua mempelai
          </p>
        </div>

        {/* Renjana Studio Watermark */}
        <div className="relative z-10 pt-6 border-t border-zinc-800/80 text-[11px] text-zinc-500 font-sans space-y-1">
          <p>
            Dibuat dengan cinta oleh{' '}
            <span className="font-bold" style={{ color: accentColor }}>Renjana Studio</span>
          </p>
          <p className="font-mono text-[10px] text-zinc-600">
            &copy; 2026 Renjana Studio &bull; {themeName} Wedding Invitation
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

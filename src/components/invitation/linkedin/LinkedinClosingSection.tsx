'use client';

import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

interface LinkedinClosingSectionProps {
  groomName: string;
  brideName: string;
}

export default function LinkedinClosingSection({
  groomName,
  brideName,
}: LinkedinClosingSectionProps) {
  return (
    <footer className="py-6 font-sans linkedin-theme">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white border border-zinc-200 rounded-xl p-6 sm:p-8 text-center space-y-4 shadow-xs"
      >
        {/* Top Tag Badge */}
        <div className="inline-flex items-center gap-1.5 bg-[#EDF3F8] text-[#0A66C2] border border-blue-100 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ungkapan Terima Kasih &amp; Doa Restu</span>
        </div>

        {/* Main Heartfelt Message */}
        <div className="max-w-lg mx-auto space-y-2">
          <p className="text-xs sm:text-sm text-[#000000e6] leading-relaxed font-normal">
            &ldquo;Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kami.&rdquo;
          </p>
        </div>

        {/* Divider Heart */}
        <div className="flex items-center justify-center gap-3 py-1">
          <div className="w-12 h-[1px] bg-zinc-200" />
          <Heart className="w-4 h-4 text-[#0A66C2] fill-current animate-pulse" />
          <div className="w-12 h-[1px] bg-zinc-200" />
        </div>

        {/* Couple & Family */}
        <div className="space-y-1 pt-1">
          <span className="text-[11px] uppercase tracking-widest font-bold text-[#00000099] block">
            Kami Yang Berbahagia
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#000000e6]">
            {groomName} <span className="text-[#0A66C2] font-normal">&amp;</span> {brideName}
          </h2>
          <p className="text-xs text-[#00000099] font-normal">
            beserta keluarga besar kedua mempelai
          </p>
        </div>

        {/* Watermark */}
        <div className="pt-4 border-t border-zinc-100 text-[11px] text-[#00000099] font-normal space-y-0.5">
          <p>
            Dibuat dengan cinta oleh <strong className="text-[#0A66C2] font-semibold">Renjana Studio</strong>
          </p>
          <p className="text-[10px] text-zinc-400">
            &copy; 2026 Renjana Studio &bull; WeddingConnect (LinkedIn Edition)
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

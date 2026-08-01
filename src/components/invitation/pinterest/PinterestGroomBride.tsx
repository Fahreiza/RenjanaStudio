'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface PersonInfo {
  name: string;
  fullName: string;
  parents: string;
  image: string;
  instagram?: string;
}

interface PinterestGroomBrideProps {
  groom: PersonInfo;
  bride: PersonInfo;
}

export default function PinterestGroomBride({ groom, bride }: PinterestGroomBrideProps) {
  return (
    <section className="bg-white border border-zinc-200/90 rounded-[32px] p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] max-w-xl mx-auto space-y-6 overflow-hidden w-full">
      {/* Section Header */}
      <div className="space-y-1 text-left">
        <span className="text-[11px] font-extrabold text-[#E60023] uppercase tracking-widest block">
          PROFIL TERHUBUNG
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-[#111111] tracking-tight">
          Dua Hati, Satu Papan
        </h2>
      </div>

      {/* Side-by-Side 2-Column Couple Layout */}
      <div className="grid grid-cols-2 gap-3 sm:gap-6 pt-1">
        {/* MEMPELAI WANITA (LEFT COLUMN) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.3 }}
          className="text-center space-y-2.5 p-2 rounded-2xl hover:bg-zinc-50/60 transition-all"
        >
          {/* Big Round Circle Image with Glowing Ring */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden bg-zinc-100 border-4 border-white shadow-[0_10px_25px_rgba(230,0,35,0.2)] group">
            <Image
              src={bride.image}
              alt={bride.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 rounded-full border-2 border-[#E60023]/40 pointer-events-none" />
          </div>

          {/* Red Checkmark Tag */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            <div className="w-4 h-4 rounded-full bg-[#E60023] text-white flex items-center justify-center text-[10px] font-bold shadow-xs">
              ✓
            </div>
            <span className="text-[10px] sm:text-xs font-extrabold text-zinc-700 uppercase tracking-wider">
              MEMPELAI WANITA
            </span>
          </div>

          {/* Name */}
          <div className="space-y-0.5">
            <h3 className="text-base sm:text-lg font-black text-[#111111] leading-snug">
              {bride.fullName || bride.name}
            </h3>
            <p className="text-xs text-zinc-500 font-serif italic font-medium">
              &ldquo;{bride.name}&rdquo;
            </p>
          </div>

          {/* Parents Info */}
          <p className="text-[11px] sm:text-xs text-zinc-600 leading-relaxed font-medium max-w-[190px] mx-auto">
            {bride.parents}
          </p>
        </motion.div>

        {/* MEMPELAI PRIA (RIGHT COLUMN) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.3 }}
          className="text-center space-y-2.5 p-2 rounded-2xl hover:bg-zinc-50/60 transition-all"
        >
          {/* Big Round Circle Image with Glowing Ring */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden bg-zinc-100 border-4 border-white shadow-[0_10px_25px_rgba(230,0,35,0.2)] group">
            <Image
              src={groom.image}
              alt={groom.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 rounded-full border-2 border-[#E60023]/40 pointer-events-none" />
          </div>

          {/* Red Checkmark Tag */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            <div className="w-4 h-4 rounded-full bg-[#E60023] text-white flex items-center justify-center text-[10px] font-bold shadow-xs">
              ✓
            </div>
            <span className="text-[10px] sm:text-xs font-extrabold text-zinc-700 uppercase tracking-wider">
              MEMPELAI PRIA
            </span>
          </div>

          {/* Name */}
          <div className="space-y-0.5">
            <h3 className="text-base sm:text-lg font-black text-[#111111] leading-snug">
              {groom.fullName || groom.name}
            </h3>
            <p className="text-xs text-zinc-500 font-serif italic font-medium">
              &ldquo;{groom.name}&rdquo;
            </p>
          </div>

          {/* Parents Info */}
          <p className="text-[11px] sm:text-xs text-zinc-600 leading-relaxed font-medium max-w-[190px] mx-auto">
            {groom.parents}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

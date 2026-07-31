'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { AtSign } from 'lucide-react';
import { GroomBrideInfo } from '@/types/invitation';

interface NetflixCastProps {
  groom: GroomBrideInfo;
  bride: GroomBrideInfo;
}

export default function NetflixCast({ groom, bride }: NetflixCastProps) {
  return (
    <section className="py-4 md:py-6 w-full px-4 sm:px-8 md:px-12 lg:px-16 text-white space-y-8 select-none">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#E50914] font-bold">
            PEMERAN UTAMA
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-sans text-white tracking-tight">
            Dua Hati Satu Cerita
          </h2>
        </div>
        <span className="text-xs text-zinc-400 font-mono hidden sm:inline">STARING IN WEDDING SERIES</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Groom Character Card - Vertical Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#181818] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center p-6 text-center md:text-left gap-6 group hover:border-[#E50914]/60 transition-colors"
        >
          {/* Vertical Portrait Photo Frame */}
          <div className="relative w-48 h-64 md:w-56 md:h-76 rounded-2xl overflow-hidden border-2 border-zinc-700 shadow-xl shrink-0 group-hover:scale-105 transition-transform duration-500">
            <Image src={groom.photoUrl} alt={groom.fullName} fill className="object-cover" />
            <div className="absolute top-3 left-3 bg-[#E50914] text-white text-[9px] uppercase font-extrabold px-2.5 py-1 rounded shadow">
              GROOM
            </div>
          </div>

          <div className="space-y-3 flex-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#E50914]">
              Pemeran Pria
            </span>
            <h3 className="font-serif-cormorant text-3xl font-bold text-white">
              {groom.fullName}
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {groom.parentInfo}
            </p>
            {groom.instagram && (
              <a
                href={`https://instagram.com/${groom.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#E50914] hover:underline font-semibold pt-1"
              >
                <AtSign className="w-3.5 h-3.5" />
                <span>@{groom.instagram}</span>
              </a>
            )}
          </div>
        </motion.div>

        {/* Bride Character Card - Vertical Portrait */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#181818] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center p-6 text-center md:text-left gap-6 group hover:border-[#E50914]/60 transition-colors"
        >
          {/* Vertical Portrait Photo Frame */}
          <div className="relative w-48 h-64 md:w-56 md:h-76 rounded-2xl overflow-hidden border-2 border-zinc-700 shadow-xl shrink-0 group-hover:scale-105 transition-transform duration-500">
            <Image src={bride.photoUrl} alt={bride.fullName} fill className="object-cover" />
            <div className="absolute top-3 left-3 bg-[#E50914] text-white text-[9px] uppercase font-extrabold px-2.5 py-1 rounded shadow">
              BRIDE
            </div>
          </div>

          <div className="space-y-3 flex-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#E50914]">
              Pemeran Wanita
            </span>
            <h3 className="font-serif-cormorant text-3xl font-bold text-white">
              {bride.fullName}
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {bride.parentInfo}
            </p>
            {bride.instagram && (
              <a
                href={`https://instagram.com/${bride.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#E50914] hover:underline font-semibold pt-1"
              >
                <AtSign className="w-3.5 h-3.5" />
                <span>@{bride.instagram}</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

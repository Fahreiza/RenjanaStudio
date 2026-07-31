'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play, Plus, Check, Star, Info, Volume2 } from 'lucide-react';
import { GroomBrideInfo } from '@/types/invitation';

interface NetflixHeroProps {
  groom: GroomBrideInfo;
  bride: GroomBrideInfo;
  eventDate: string;
}

export default function NetflixHero({ groom, bride, eventDate }: NetflixHeroProps) {
  const handleAddToCalendar = () => {
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      'Pernikahan Fahreiza & Amanda'
    )}&dates=20261121T080000Z/20261121T150000Z`;
    window.open(calendarUrl, '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end bg-[#141414] text-white px-4 md:px-12 py-16 overflow-hidden">
      {/* Background Poster Cover */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero-wedding.webp"
          alt="Netflix Wedding Poster"
          fill
          className="object-cover opacity-40 filter brightness-90 contrast-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-transparent to-[#141414]/80" />
      </div>

      {/* Main Content Area */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl space-y-5"
      >
        {/* N-Series Badge */}
        <div className="flex items-center gap-2">
          <span className="font-black text-2xl text-[#E50914] tracking-tighter">N</span>
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-zinc-300">
            WEDDING ORIGINAL SERIES
          </span>
        </div>

        {/* Big Movie Title */}
        <h1 className="font-serif-cormorant text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-none drop-shadow-md">
          {groom.name} <span className="text-[#E50914] font-cursive text-6xl md:text-8xl">&amp;</span> {bride.name}
        </h1>

        {/* Movie Meta Information */}
        <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-medium text-zinc-300">
          <span className="text-[#46d369] font-bold">99% Match For You</span>
          <span className="border border-zinc-500 px-1.5 py-0.5 rounded text-[10px]">2026</span>
          <span className="border border-zinc-500 px-1.5 py-0.5 rounded text-[10px]">4K ULTRA HD</span>
          <span className="bg-red-600/30 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded">
            ROMANCE
          </span>
          <span className="text-zinc-400">{eventDate}</span>
        </div>

        {/* Story Synopsis */}
        <p className="text-xs md:text-sm text-zinc-300 leading-relaxed max-w-xl font-sans font-light">
          Sebuah mahakarya cinta tentang dua jiwa yang dipertemukan oleh takdir, tumbuh dalam komitmen, dan kini bersiap mengikat janji suci di hadapan Tuhan dan keluarga tercinta.
        </p>

        {/* Buttons Row */}
        <div className="pt-2 flex flex-wrap gap-4 items-center">
          <a
            href="#episodes"
            className="flex items-center gap-2 bg-white hover:bg-zinc-200 text-black font-bold text-sm py-3 px-8 rounded shadow transition-all duration-200 transform hover:scale-105"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>Tonton Acara (Episodes)</span>
          </a>

          <button
            onClick={handleAddToCalendar}
            className="flex items-center gap-2 bg-zinc-700/80 hover:bg-zinc-600 text-white font-semibold text-sm py-3 px-6 rounded backdrop-blur transition-all duration-200"
          >
            <Plus className="w-5 h-5" />
            <span>My List (Calendar)</span>
          </button>
        </div>

        {/* Cast & Crew Details */}
        <div className="pt-4 border-t border-zinc-800 text-xs text-zinc-400 space-y-1">
          <p><span className="text-zinc-500">Pemeran Utama:</span> {groom.fullName} &amp; {bride.fullName}</p>
          <p><span className="text-zinc-500">Keluarga Pria:</span> {groom.parentInfo}</p>
          <p><span className="text-zinc-500">Keluarga Wanita:</span> {bride.parentInfo}</p>
        </div>
      </motion.div>
    </section>
  );
}

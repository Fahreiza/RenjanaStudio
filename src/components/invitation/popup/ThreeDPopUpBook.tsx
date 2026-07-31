'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Sparkles, Heart, ChevronRight, ChevronLeft, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GroomBrideInfo, EventDetail } from '@/types/invitation';

interface ThreeDPopUpBookProps {
  groom: GroomBrideInfo;
  bride: GroomBrideInfo;
  akad: EventDetail;
  resepsi: EventDetail;
  guestName: string;
  onOpenBook: () => void;
}

export default function ThreeDPopUpBook({
  groom,
  bride,
  akad,
  resepsi,
  guestName,
  onOpenBook,
}: ThreeDPopUpBookProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState<number>(1);

  const handleOpenClick = () => {
    setIsOpen(true);
    try {
      confetti({
        particleCount: 110,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#D4AF37', '#B76E79', '#8A9A86', '#E07A5F'],
      });
    } catch (e) {}

    onOpenBook();
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4 select-none">
      {!isOpen ? (
        /* CLOSED 3D HARDCOVER BOOK COVER */
        <div className="perspective-1000 flex justify-center">
          <motion.div
            initial={{ rotateX: 15, rotateY: -15, scale: 0.9 }}
            animate={{ rotateX: 0, rotateY: 0, scale: 1 }}
            whileHover={{ rotateY: -8, scale: 1.02 }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: 'preserve-3d' }}
            onClick={handleOpenClick}
            className="relative w-full max-w-md h-[540px] bg-gradient-to-br from-[#451A03] via-[#78350F] to-[#270d02] rounded-r-3xl rounded-l-md shadow-2xl border-4 border-[#D4AF37] p-8 text-center flex flex-col justify-between items-center cursor-pointer group"
          >
            {/* Book Spine 3D Ridge Effect */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#1c0801] via-[#451A03] to-transparent border-r-2 border-[#D4AF37]/50 rounded-l-md" />

            {/* Gold Foil Corner Ornaments */}
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#D4AF37]" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#D4AF37]" />

            <div className="pt-6 space-y-2 z-10">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#FDE68A]">
                The Royal 3D Pop-Up Edition
              </span>
              <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto opacity-70"></div>
            </div>

            {/* Book Gold Title */}
            <div className="space-y-4 my-auto z-10">
              <span className="text-xs text-zinc-300 font-serif italic block">
                The Wedding Story of
              </span>
              <h1 className="font-cursive text-5xl md:text-6xl text-[#FDE68A] drop-shadow-md">
                {groom.name} <span className="font-serif-cormorant text-4xl text-white">&amp;</span> {bride.name}
              </h1>
              <p className="font-serif-cormorant text-zinc-300 text-sm font-semibold tracking-widest pt-2">
                {akad.date}
              </p>

              <div className="bg-[#270d02]/80 border border-[#D4AF37]/40 rounded-2xl p-4 mt-4 shadow-inner">
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">
                  Dipersembahkan Untuk:
                </span>
                <span className="font-bold text-lg text-white font-serif tracking-wide block mt-0.5">
                  {guestName}
                </span>
              </div>
            </div>

            {/* Open Book CTA Button */}
            <div className="w-full z-10 pb-2">
              <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#FDE68A] to-[#D4AF37] text-[#451A03] font-bold text-xs py-3.5 px-6 rounded-xl shadow-lg group-hover:scale-105 transition-transform">
                <BookOpen className="w-4 h-4" />
                <span>Klik Untuk Buka Buku 3D</span>
              </div>
            </div>
          </motion.div>
        </div>
      ) : (
        /* OPENED 3D POP-UP BOOK EXPERIENCE */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="perspective-1000"
        >
          {/* Main Book Container */}
          <div
            style={{ transformStyle: 'preserve-3d' }}
            className="relative w-full bg-[#FAF7F2] rounded-3xl shadow-2xl border-4 border-[#78350F] p-6 md:p-10 min-h-[600px] flex flex-col justify-between overflow-hidden"
          >
            {/* Center Book Fold Spine */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-black/10 via-black/20 to-black/10 pointer-events-none z-20 hidden md:block" />

            {/* PAGE NAVIGATION HEADERS */}
            <div className="flex items-center justify-between pb-4 border-b border-[#8A9A86]/30 z-30">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#B76E79]" />
                <span className="font-serif-cormorant text-xl font-bold text-[#2D3748]">
                  Pop-Up Book — Bab {activePage} Dari 3
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold">
                <button
                  disabled={activePage === 1}
                  onClick={() => setActivePage(1)}
                  className={`px-3 py-1.5 rounded-lg border transition-all ${
                    activePage === 1
                      ? 'bg-[#B76E79] text-white border-[#B76E79]'
                      : 'bg-white text-zinc-600 border-zinc-300 hover:bg-zinc-100'
                  }`}
                >
                  Bab 1: Mempelai
                </button>
                <button
                  disabled={activePage === 2}
                  onClick={() => setActivePage(2)}
                  className={`px-3 py-1.5 rounded-lg border transition-all ${
                    activePage === 2
                      ? 'bg-[#B76E79] text-white border-[#B76E79]'
                      : 'bg-white text-zinc-600 border-zinc-300 hover:bg-zinc-100'
                  }`}
                >
                  Bab 2: Acara
                </button>
              </div>
            </div>

            {/* DYNAMIC POP-UP CONTENT BY CHAPTER */}
            <div className="my-6 relative min-h-[420px] flex items-center justify-center z-30">
              <AnimatePresence mode="wait">
                {activePage === 1 && (
                  <motion.div
                    key="page1"
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: -90 }}
                    transition={{ duration: 0.6 }}
                    className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                  >
                    {/* Left Page: 3D Pop Up Cutout Figures */}
                    <div className="flex flex-col items-center justify-center text-center space-y-4">
                      {/* 3D Standing Paper Cutout Frame */}
                      <motion.div
                        initial={{ y: 50, scale: 0.8 }}
                        animate={{ y: 0, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        className="relative w-64 h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-b from-[#F4E3E3] to-[#FAF7F2] p-3 flex items-end justify-center group"
                      >
                        <Image
                          src={groom.photoUrl}
                          alt={groom.fullName}
                          width={140}
                          height={200}
                          className="object-cover rounded-xl shadow-md transform group-hover:scale-105 transition-transform"
                        />
                        <Image
                          src={bride.photoUrl}
                          alt={bride.fullName}
                          width={140}
                          height={200}
                          className="object-cover rounded-xl shadow-md -ml-6 border-2 border-white transform group-hover:scale-105 transition-transform"
                        />
                      </motion.div>

                      <span className="text-xs text-[#B76E79] font-semibold italic">
                        *3D Standing Paper Cutouts (Mempelai)
                      </span>
                    </div>

                    {/* Right Page: Couple Text & Story */}
                    <div className="space-y-4 text-center md:text-left">
                      <span className="text-xs uppercase tracking-[0.25em] text-[#8A9A86] font-semibold">
                        Pengantin Yang Berbahagia
                      </span>
                      <h2 className="font-cursive text-5xl text-[#B76E79]">
                        {groom.name} <span className="font-serif text-3xl text-[#8A9A86]">&amp;</span> {bride.name}
                      </h2>

                      <div className="space-y-2 text-sm text-zinc-700 font-sans-jakarta">
                        <p className="font-bold text-[#2D3748]">{groom.fullName}</p>
                        <p className="text-xs text-zinc-500">{groom.parentInfo}</p>
                        <div className="w-12 h-[1px] bg-[#B76E79] my-2 mx-auto md:mx-0 opacity-40"></div>
                        <p className="font-bold text-[#2D3748]">{bride.fullName}</p>
                        <p className="text-xs text-zinc-500">{bride.parentInfo}</p>
                      </div>

                      <button
                        onClick={() => setActivePage(2)}
                        className="inline-flex items-center gap-2 bg-[#8A9A86] hover:bg-[#586955] text-white text-xs font-semibold px-5 py-3 rounded-xl shadow transition-colors mt-2"
                      >
                        <span>Buka Bab 2: Jadwal Acara</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {activePage === 2 && (
                  <motion.div
                    key="page2"
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: -90 }}
                    transition={{ duration: 0.6 }}
                    className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {/* Akad 3D Pop Up Card */}
                    <div className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg border border-[#8A9A86]/30 text-center space-y-3 transform hover:-translate-y-1 transition-transform">
                      <div className="w-10 h-10 rounded-full bg-[#EEF2ED] text-[#8A9A86] flex items-center justify-center mx-auto font-bold">
                        1
                      </div>
                      <h3 className="font-serif-cormorant text-2xl font-bold text-[#B76E79]">
                        {akad.title}
                      </h3>
                      <p className="text-xs font-bold text-zinc-700">{akad.date}</p>
                      <p className="text-xs text-zinc-500">{akad.time}</p>
                      <p className="text-xs text-[#586955] font-semibold">{akad.venue}</p>
                      <p className="text-[11px] text-zinc-500 leading-relaxed">{akad.address}</p>

                      <a
                        href={akad.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8A9A86] hover:underline pt-1"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Peta Google Maps</span>
                      </a>
                    </div>

                    {/* Resepsi 3D Pop Up Card */}
                    <div className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg border border-[#B76E79]/30 text-center space-y-3 transform hover:-translate-y-1 transition-transform">
                      <div className="w-10 h-10 rounded-full bg-[#F4E3E3] text-[#B76E79] flex items-center justify-center mx-auto font-bold">
                        2
                      </div>
                      <h3 className="font-serif-cormorant text-2xl font-bold text-[#B76E79]">
                        {resepsi.title}
                      </h3>
                      <p className="text-xs font-bold text-zinc-700">{resepsi.date}</p>
                      <p className="text-xs text-zinc-500">{resepsi.time}</p>
                      <p className="text-xs text-[#586955] font-semibold">{resepsi.venue}</p>
                      <p className="text-[11px] text-zinc-500 leading-relaxed">{resepsi.address}</p>

                      <a
                        href={resepsi.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B76E79] hover:underline pt-1"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Peta Google Maps</span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* BOOK FOOTER NAVIGATION */}
            <div className="flex items-center justify-between pt-4 border-t border-[#8A9A86]/30 z-30 text-xs">
              <button
                disabled={activePage === 1}
                onClick={() => setActivePage(activePage - 1)}
                className="flex items-center gap-1 font-semibold text-[#586955] disabled:opacity-30 disabled:pointer-events-none hover:text-[#B76E79]"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Halaman Sebelumnya</span>
              </button>

              <span className="font-serif text-zinc-400 italic">
                House of Renjana Pop-Up Series
              </span>

              <button
                disabled={activePage === 2}
                onClick={() => setActivePage(activePage + 1)}
                className="flex items-center gap-1 font-semibold text-[#586955] disabled:opacity-30 disabled:pointer-events-none hover:text-[#B76E79]"
              >
                <span>Halaman Selanjutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

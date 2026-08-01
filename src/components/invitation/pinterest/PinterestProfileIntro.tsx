'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, Share2, MoreHorizontal, Bookmark, Play, Volume2, Sparkles, Pin } from 'lucide-react';

interface PinterestProfileIntroProps {
  guestName: string;
  groomName: string;
  brideName: string;
  weddingDate: string;
  venueName: string;
  onOpenInvitation: () => void;
}

export default function PinterestProfileIntro({
  guestName,
  groomName,
  brideName,
  weddingDate,
  venueName,
  onOpenInvitation,
}: PinterestProfileIntroProps) {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#111111] flex flex-col justify-between font-sans selection:bg-[#E60023] selection:text-white relative overflow-x-hidden w-full max-w-full">
      {/* Top Pinterest Mobile Header */}
      <header className="sticky top-0 z-30 bg-white border-b border-zinc-200 px-3 sm:px-4 py-3 flex items-center justify-between shadow-xs w-full max-w-full overflow-hidden">
        {/* Left Pinterest Logo */}
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E60023] text-white flex items-center justify-center font-black text-lg sm:text-xl shadow-sm shrink-0">
          P
        </div>

        {/* Center Search Bar */}
        <div className="flex-1 max-w-xs mx-2 sm:mx-3 flex items-center gap-2 bg-[#F0F0F0] px-3 py-1.5 sm:py-2 rounded-full text-xs text-zinc-600 overflow-hidden">
          <svg className="w-4 h-4 text-zinc-400 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M10 2a8 8 0 016.32 12.906l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z" />
          </svg>
          <span className="truncate font-medium text-zinc-700 text-[11px] sm:text-xs">{groomName} &amp; {brideName} per...</span>
        </div>

        {/* Right Language & User Avatar */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <div className="flex items-center bg-[#F0F0F0] rounded-full p-0.5 text-[10px] sm:text-[11px] font-bold">
            <span className="bg-black text-white px-1.5 sm:px-2 py-0.5 rounded-full">ID</span>
            <span className="text-zinc-500 px-1.5 sm:px-2 py-0.5">EN</span>
          </div>
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E60023] text-white flex items-center justify-center font-bold text-xs shadow-sm shrink-0">
            😊
          </div>
        </div>
      </header>

      {/* Main Pinterest Pin Container */}
      <main className="flex-1 flex items-center justify-center p-3 sm:p-4 overflow-hidden w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full max-w-md bg-white rounded-[28px] sm:rounded-[32px] p-3.5 sm:p-4 shadow-xl border border-zinc-200/80 space-y-4 my-auto overflow-hidden"
        >
          {/* Main Pin Image Container */}
          <div className="relative w-full aspect-[4/5] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-zinc-900 shadow-md">
            <Image
              src="/assets/images/hero-wedding.webp"
              alt="Pinterest Main Wedding Pin"
              fill
              className="object-cover grayscale contrast-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

            {/* Top Tag */}
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold text-[#111111] shadow-md flex items-center gap-1.5">
              <Pin className="w-3.5 h-3.5 text-[#E60023] fill-current" />
              <span>Wedding Invitation Pin</span>
            </div>
          </div>

          {/* Under-Image Action Bar */}
          <div className="flex items-center justify-between pt-1 px-1">
            {/* Left Icons: Heart, Share, More */}
            <div className="flex items-center gap-2 sm:gap-4 text-zinc-800">
              <button className="p-1.5 sm:p-2 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-800" />
              </button>
              <button className="p-1.5 sm:p-2 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer">
                <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-800" />
              </button>
              <button className="p-1.5 sm:p-2 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer">
                <MoreHorizontal className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-800" />
              </button>
            </div>

            {/* Right Buttons: Simpan (Save) + Play Audio FAB */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenInvitation}
                className="bg-[#E60023] hover:bg-[#B6001A] text-white font-extrabold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-[#E60023]/30 cursor-pointer"
              >
                <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                <span>Simpan</span>
              </motion.button>

              <button
                onClick={onOpenInvitation}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-zinc-200 text-black shadow-lg flex items-center justify-center hover:bg-zinc-50 transition-all cursor-pointer shrink-0"
                title="Buka & Putar Musik"
              >
                <Play className="w-4 h-4 text-black fill-current ml-0.5" />
              </button>
            </div>
          </div>

          {/* Pin Title & Guest Card */}
          <div className="space-y-3 pt-2 border-t border-zinc-100">
            <div>
              <h1 className="text-lg sm:text-xl font-extrabold text-[#111111] leading-tight">
                Pernikahan {groomName} &amp; {brideName}
              </h1>
              <p className="text-xs text-zinc-500 font-medium">
                Official Pinterest Wedding Invitation Pin &bull; {weddingDate}
              </p>
            </div>

            {/* Guest Greeting Box */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-[#FAFAFA] border border-zinc-200 text-left space-y-1.5">
              <div className="flex items-center justify-between text-xs text-[#E60023] font-bold">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> SPECIAL INVITATION FOR
                </span>
                <span className="text-[10px] bg-[#E60023] text-white px-2 py-0.5 rounded-full font-mono">VIP</span>
              </div>
              <h2 className="text-sm sm:text-base font-extrabold text-[#111111] capitalize">
                {guestName}
              </h2>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Tekan tombol <strong className="text-[#E60023]">&ldquo;Simpan&rdquo;</strong> untuk membuka seluruh detail undangan pernikahan kami.
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Bottom Mobile Tab Bar */}
      <footer className="bg-white border-t border-zinc-200 py-2 px-4 sm:px-6 flex justify-around items-center text-zinc-600 z-30 w-full max-w-full overflow-hidden">
        <button onClick={onOpenInvitation} className="p-2 text-[#E60023] flex flex-col items-center">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
          </svg>
        </button>
        <button onClick={onOpenInvitation} className="p-2 hover:text-[#E60023] flex flex-col items-center">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
          </svg>
        </button>
        <button onClick={onOpenInvitation} className="p-2 hover:text-[#E60023] flex flex-col items-center">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
          </svg>
        </button>
        <button onClick={onOpenInvitation} className="p-2 hover:text-[#E60023] flex flex-col items-center">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
          </svg>
        </button>
        <button onClick={onOpenInvitation} className="p-2 hover:text-[#E60023] flex flex-col items-center">
          <Heart className="w-6 h-6" />
        </button>
      </footer>
    </div>
  );
}

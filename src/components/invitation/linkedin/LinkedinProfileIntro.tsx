'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, MapPin, Sparkles, UserPlus, Share2, Volume2, CheckCircle2, Play } from 'lucide-react';

interface LinkedinProfileIntroProps {
  guestName: string;
  groomName: string;
  brideName: string;
  weddingDate: string;
  venueName: string;
  onOpenInvitation: () => void;
}

export default function LinkedinProfileIntro({
  guestName,
  groomName,
  brideName,
  weddingDate,
  venueName,
  onOpenInvitation,
}: LinkedinProfileIntroProps) {
  return (
    <div className="min-h-screen bg-[#F3F2EF] text-[#191919] flex flex-col justify-between font-sans selection:bg-[#0A66C2] selection:text-white relative overflow-x-hidden w-full max-w-full linkedin-theme">
      {/* Top Navbar Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-zinc-200 px-3.5 py-2 flex items-center justify-between shadow-xs w-full">
        <div className="flex items-center gap-2.5 truncate">
          <div className="w-8 h-8 rounded bg-[#0A66C2] text-white font-bold text-lg flex items-center justify-center shrink-0 shadow-xs">
            in
          </div>
          <div className="truncate">
            <h1 className="font-semibold text-xs sm:text-sm text-[#000000e6] flex items-center gap-1 truncate leading-tight">
              {groomName} &amp; {brideName}
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0A66C2] fill-current shrink-0" />
            </h1>
            <p className="text-[11px] text-[#00000099] truncate font-normal">Calon Pengantin &bull; Menikah {weddingDate}</p>
          </div>
        </div>

        {/* Language & Profile Pill */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center bg-[#F0F0F0] rounded-full p-0.5 text-[10px] font-semibold">
            <span className="bg-[#0A66C2] text-white px-2 py-0.5 rounded-full">ID</span>
            <span className="text-zinc-500 px-2 py-0.5">EN</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-white text-xl flex items-center justify-center shrink-0 shadow-xs select-none">
            🧕🏻
          </div>
        </div>
      </header>

      {/* Main Profile Card Container */}
      <main className="flex-1 max-w-md mx-auto w-full p-3 sm:p-4 space-y-4 my-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xl space-y-4"
        >
          {/* Cover Banner */}
          <div className="relative w-full h-36 bg-[#0A66C2]">
            <Image
              src="/assets/images/hero-wedding.webp"
              alt="LinkedIn Cover"
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover opacity-60"
              priority
            />
          </div>

          {/* Profile Details */}
          <div className="p-4 pt-0 space-y-3 relative">
            {/* Circular Avatar overlapping banner */}
            <div className="-mt-14 mb-1 flex items-end justify-between">
              <div className="relative w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-zinc-800 shadow-xl shrink-0">
                <Image
                  src="/assets/images/hero-wedding.webp"
                  alt="Avatar"
                  fill
                  sizes="96px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Action Buttons: Hubungkan & Bagikan */}
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenInvitation}
                  className="bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold text-xs px-4 py-2 rounded-full shadow-md cursor-pointer"
                >
                  Hubungkan
                </motion.button>

                <button
                  onClick={onOpenInvitation}
                  className="border border-zinc-400 text-zinc-700 hover:bg-zinc-100 font-semibold text-xs px-3.5 py-2 rounded-full flex items-center gap-1 cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" /> Bagikan
                </button>
              </div>
            </div>

            {/* Profile Info Header */}
            <div className="space-y-0.5">
              <h2 className="text-xl font-bold text-[#000000e6] flex items-center gap-1.5">
                {groomName} &amp; {brideName}
                <CheckCircle2 className="w-4.5 h-4.5 text-[#0A66C2] fill-current" />
              </h2>
              <p className="text-xs text-[#00000099] font-normal">
                Calon Pengantin &bull; Menikah {weddingDate}
              </p>
              <p className="text-xs text-[#000000e6] leading-relaxed font-normal pt-1">
                Dengan penuh syukur dan kerendahan hati, kami mengundang Bapak/Ibu/Saudara/i <strong className="text-black font-semibold capitalize">{guestName}</strong> untuk hadir dan menjadi saksi ikatan janji suci kami.
              </p>
            </div>

            {/* Location & Statistics */}
            <div className="space-y-2 pt-1 border-t border-zinc-100">
              <div className="flex items-center gap-2 text-zinc-600 text-xs">
                <MapPin className="w-4 h-4 text-zinc-700 shrink-0" />
                <span className="font-semibold text-zinc-800">{venueName}</span>
              </div>

              <p className="text-xs text-[#00000099] font-normal">
                <strong className="text-[#0A66C2] font-semibold">8 koneksi</strong> &bull; 6 pengikut
              </p>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenInvitation}
              className="w-full py-3 bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold text-xs sm:text-sm rounded-full shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer mt-2"
            >
              <Play className="w-4 h-4 fill-current ml-0.5" />
              <span>BUKA UNDANGAN &amp; PUTAR MUSIK</span>
            </motion.button>
          </div>
        </motion.div>
      </main>

      {/* Bottom Mobile Tab Bar */}
      <footer className="bg-white border-t border-zinc-200 py-2 px-6 flex justify-around items-center text-zinc-600 z-30">
        <button onClick={onOpenInvitation} className="p-2 text-[#0A66C2] flex flex-col items-center">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </button>
        <button onClick={onOpenInvitation} className="p-2 hover:text-[#0A66C2] flex flex-col items-center">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
          </svg>
        </button>
        <button onClick={onOpenInvitation} className="p-2 hover:text-[#0A66C2] flex flex-col items-center">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
          </svg>
        </button>
        <button onClick={onOpenInvitation} className="p-2 hover:text-[#0A66C2] flex flex-col items-center">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
          </svg>
        </button>
        <button onClick={onOpenInvitation} className="p-2 hover:text-[#0A66C2] flex flex-col items-center">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </button>
      </footer>
    </div>
  );
}

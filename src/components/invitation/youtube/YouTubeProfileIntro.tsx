'use client';

import { useState } from 'react';
import Image from 'next/image';

interface YouTubeProfileIntroProps {
  groomName: string;
  brideName: string;
  groomPhoto: string;
  bridePhoto: string;
  eventDate: string;
  guestName: string;
  onOpen: () => void;
}

export default function YouTubeProfileIntro({
  groomName,
  brideName,
  groomPhoto,
  bridePhoto,
  eventDate,
  guestName,
  onOpen,
}: YouTubeProfileIntroProps) {
  const [isDismissed, setIsDismissed] = useState(false);

  const handleTriggerOpen = () => {
    setIsDismissed(true);
    onOpen();
  };

  if (isDismissed) return null;

  return (
    <div
      onClick={handleTriggerOpen}
      className="fixed inset-0 z-50 bg-[#0A0A0A] bg-gradient-to-b from-red-950/30 via-[#0A0A0A] to-black text-white flex flex-col items-center justify-between py-8 px-4 overflow-y-auto selection:bg-[#FF0000] selection:text-white cursor-pointer select-none"
    >
      {/* Top Header Logo */}
      <div className="flex items-center gap-2 mt-2">
        <div className="bg-[#FF0000] text-white p-2 rounded-xl shadow-xl">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </div>
        <span className="text-2xl md:text-3xl font-extrabold tracking-tight font-sans text-white">
          Renjana<span className="text-[#FF0000]">Tube</span>
        </span>
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-lg text-center flex flex-col items-center my-auto py-6 space-y-6">
        {/* Subtitle & Title */}
        <div className="space-y-2">
          <p className="text-xs font-extrabold tracking-[0.2em] text-[#FF0000] uppercase font-mono">
            UNDANGAN PERNIKAHAN &bull; LIVE PREMIERE
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans text-white">
            {groomName} <span className="text-[#FF0000] font-serif">&amp;</span> {brideName}
          </h1>
          <p className="text-xs md:text-sm text-zinc-300 font-medium font-mono">
            {eventDate}
          </p>
        </div>

        {/* Recipient Section */}
        <div className="space-y-1 pt-1">
          <p className="text-[10px] md:text-xs font-bold tracking-widest text-[#FF0000] uppercase font-mono">
            KEPADA YTH.
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {guestName}
          </h2>
        </div>

        {/* Profile Selector */}
        <div className="pt-2 space-y-4 w-full">
          <h3 className="text-base md:text-lg font-bold text-white tracking-tight font-sans">
            PILIH KANAL UNTUK MENONTON
          </h3>

          <div className="flex items-center justify-center gap-4 md:gap-8">
            {/* Bride Profile */}
            <div className="flex flex-col items-center gap-2 cursor-pointer group">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#FF0000] shadow-xl transition-all duration-300 bg-zinc-800">
                <Image
                  src={bridePhoto}
                  alt={brideName}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xs md:text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors">
                {brideName}
              </span>
            </div>

            {/* Guest Profile (Center - Red Play Icon) */}
            <div className="flex flex-col items-center gap-2 cursor-pointer group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#FF0000] flex items-center justify-center border-2 border-transparent group-hover:border-white shadow-2xl transition-all duration-300 hover:scale-105">
                <span className="text-2xl sm:text-3xl select-none">😊</span>
              </div>
              <span className="text-xs md:text-sm font-bold text-white group-hover:text-[#FF0000] transition-colors max-w-[100px] truncate">
                {guestName}
              </span>
            </div>

            {/* Groom Profile */}
            <div className="flex flex-col items-center gap-2 cursor-pointer group">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#FF0000] shadow-xl transition-all duration-300 bg-zinc-800">
                <Image
                  src={groomPhoto}
                  alt={groomName}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xs md:text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors">
                {groomName}
              </span>
            </div>
          </div>
        </div>

        {/* Primary Action Button */}
        <div className="pt-3">
          <button
            type="button"
            className="bg-[#FF0000] hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm md:text-base px-8 py-3.5 rounded-full shadow-2xl transition-all duration-300 tracking-wide uppercase flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
          >
            <span>🔴 BUKA UNDANGAN (WATCH PREMIERE)</span>
          </button>
        </div>
      </div>

      {/* Footer copyright */}
      <p className="text-[11px] text-zinc-500 font-mono text-center">
        RenjanaTube &copy; 2026 &bull; YouTube Edition Wedding Invitation
      </p>
    </div>
  );
}

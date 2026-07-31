'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Music2, Sparkles } from 'lucide-react';

interface TikTokProfileIntroProps {
  groomName: string;
  brideName: string;
  groomPhoto: string;
  bridePhoto: string;
  eventDate: string;
  guestName: string;
  onOpen: () => void;
}

export default function TikTokProfileIntro({
  groomName,
  brideName,
  groomPhoto,
  bridePhoto,
  eventDate,
  guestName,
  onOpen,
}: TikTokProfileIntroProps) {
  const [isDismissed, setIsDismissed] = useState(false);

  const handleTriggerOpen = () => {
    setIsDismissed(true);
    onOpen();
  };

  if (isDismissed) return null;

  return (
    <div
      onClick={handleTriggerOpen}
      className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-between py-8 px-4 overflow-y-auto selection:bg-[#FE2C55] selection:text-black cursor-pointer select-none"
    >
      {/* Top Header Logo */}
      <div className="flex items-center gap-2 mt-2">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#00F2FE] via-[#FE2C55] to-[#25F4EE] p-0.5 flex items-center justify-center shadow-[0_0_20px_rgba(0,242,254,0.4)]">
          <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center p-1">
            <Music2 className="w-4 h-4 text-[#00F2FE] animate-bounce" />
          </div>
        </div>
        <span className="text-2xl md:text-3xl font-extrabold tracking-tight font-sans text-white drop-shadow-[2px_2px_0px_rgba(254,44,85,0.8)]">
          Wedding<span className="text-[#00F2FE]">Tok</span>
        </span>
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-lg text-center flex flex-col items-center my-auto py-6 space-y-6">
        {/* Profile Avatar with Neon Glitch Ring */}
        <div className="relative group hover:scale-105 transition-transform duration-300">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-[#00F2FE] via-[#FE2C55] to-[#25F4EE] shadow-[0_0_40px_rgba(254,44,85,0.6)] flex items-center justify-center animate-pulse">
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-black bg-zinc-900">
              <Image
                src="/assets/images/hero-wedding.webp"
                alt="Couple Profile"
                fill
                sizes="(max-width: 640px) 112px, 144px"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="absolute bottom-1 right-1 bg-[#FE2C55] text-white p-1.5 rounded-full border-2 border-black shadow-lg">
            <Sparkles className="w-4 h-4" />
          </div>
        </div>

        {/* Title & Date */}
        <div className="space-y-1">
          <div className="flex items-center justify-center gap-1.5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-sans text-white">
              {groomName} &amp; {brideName}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 font-mono">
            {eventDate} &bull; #FahreizaAmandaWedding
          </p>
        </div>

        {/* Recipient Section */}
        <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 w-full max-w-xs space-y-1 shadow-xl">
          <p className="text-[10px] font-bold tracking-widest text-[#00F2FE] uppercase font-mono">
            SPECIAL INVITATION FOR:
          </p>
          <h2 className="text-lg sm:text-xl font-extrabold text-white truncate">
            {guestName}
          </h2>
          <p className="text-[11px] text-zinc-500 font-mono">
            Tap anywhere to view FYP video &amp; profile
          </p>
        </div>

        {/* Primary Action Button */}
        <div className="pt-2">
          <button
            type="button"
            className="bg-gradient-to-r from-[#FE2C55] to-[#00F2FE] text-white font-extrabold text-xs sm:text-sm md:text-base px-8 py-3.5 rounded-full shadow-[0_0_30px_rgba(254,44,85,0.5)] transition-all duration-300 tracking-wide uppercase flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
          >
            <span>🎵 BUKA UNDANGAN (PLAY FYP)</span>
          </button>
        </div>
      </div>

      {/* Footer copyright */}
      <p className="text-[11px] text-zinc-500 font-mono text-center">
        WeddingTok &copy; 2026 &bull; TikTok Edition Wedding Invitation
      </p>
    </div>
  );
}

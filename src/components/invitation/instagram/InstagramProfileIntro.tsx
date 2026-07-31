'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

interface InstagramProfileIntroProps {
  groomName: string;
  brideName: string;
  groomPhoto: string;
  bridePhoto: string;
  eventDate: string;
  guestName: string;
  onOpen: () => void;
}

export default function InstagramProfileIntro({
  groomName,
  brideName,
  groomPhoto,
  bridePhoto,
  eventDate,
  guestName,
  onOpen,
}: InstagramProfileIntroProps) {
  const [isDismissed, setIsDismissed] = useState(false);

  const handleTriggerOpen = () => {
    setIsDismissed(true);
    onOpen();
  };

  if (isDismissed) return null;

  return (
    <div
      onClick={handleTriggerOpen}
      className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-between py-8 px-4 overflow-y-auto selection:bg-[#E4405F] selection:text-white cursor-pointer select-none"
    >
      {/* Top Header Logo with Latest Official Instagram Vector Logo SVG */}
      <div className="flex items-center gap-2 mt-2">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#FCCC63] via-[#E4405F] to-[#833AB4] p-0.5 flex items-center justify-center shadow-xl">
          <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center p-1">
            <svg
              className="w-full h-full text-white fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C9.284 2 8.944 2.012 7.877 2.06 4.72 2.204 2.204 4.719 2.06 7.877 2.012 8.944 2 9.284 2 12c0 2.716.012 3.056.06 4.123.144 3.157 2.66 5.673 5.817 5.817 1.067.048 1.407.06 4.123.06 2.716 0 3.056-.012 4.123-.06 3.157-.144 5.673-2.66 5.817-5.817.048-1.067.06-1.407.06-4.123 0-2.716-.012-3.056-.06-4.123-.144-3.158-2.66-5.673-5.817-5.817C15.056 2.012 14.716 2 12 2zm0 1.802c2.67 0 2.987.01 4.042.058 2.312.106 3.564 1.357 3.67 3.67.048 1.055.058 1.372.058 4.042 0 2.67-.01 2.987-.058 4.042-.106 2.312-1.358 3.564-3.67 3.67-1.055.048-1.372.058-4.042.058-2.67 0-2.987-.01-4.042-.058-2.312-.106-3.564-1.358-3.67-3.67-.048-1.055-.058-1.372-.058-4.042 0-2.67.01-2.987.058-4.042.106-2.313 1.358-3.564 3.67-3.67 1.055-.048 1.372-.058 4.042-.058zM12 6.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27zm0 1.802a3.333 3.333 0 1 1 0 6.666 3.333 3.333 0 0 1 0-6.666zm5.338-3.205a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"
              />
            </svg>
          </div>
        </div>
        <span className="text-3xl md:text-4xl font-normal font-instagram-logo tracking-wide text-white leading-none pt-1">
          Renjana<span className="bg-gradient-to-tr from-[#FCCC63] via-[#E4405F] to-[#833AB4] bg-clip-text text-transparent">Gram</span>
        </span>
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-lg text-center flex flex-col items-center my-auto py-6 space-y-6">
        {/* Profile Story Gradient Ring */}
        <div className="relative group hover:scale-105 transition-transform duration-300">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-[#FCCC63] via-[#E4405F] to-[#833AB4] shadow-[0_0_40px_rgba(228,64,95,0.4)] flex items-center justify-center">
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
          <div className="absolute bottom-1 right-1 bg-[#E4405F] text-white p-1.5 rounded-full border-2 border-black shadow-lg">
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
        <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 w-full max-w-xs space-y-1 shadow-xl">
          <p className="text-[10px] font-bold tracking-widest text-[#E4405F] uppercase font-mono">
            SPECIAL INVITATION FOR:
          </p>
          <h2 className="text-lg sm:text-xl font-extrabold text-white truncate">
            {guestName}
          </h2>
          <p className="text-[11px] text-zinc-500 font-mono">
            Tap anywhere to view story &amp; profile
          </p>
        </div>

        {/* Primary Action Button */}
        <div className="pt-2">
          <button
            type="button"
            className="bg-gradient-to-r from-[#FCCC63] via-[#E4405F] to-[#833AB4] text-white font-extrabold text-xs sm:text-sm md:text-base px-8 py-3.5 rounded-full shadow-2xl transition-all duration-300 tracking-wide uppercase flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
          >
            <span>✨ BUKA UNDANGAN (VIEW PROFILE)</span>
          </button>
        </div>
      </div>

      {/* Footer copyright */}
      <p className="text-[11px] text-zinc-500 font-mono text-center">
        RenjanaGram &copy; 2026 &bull; Instagram Edition Wedding Invitation
      </p>
    </div>
  );
}

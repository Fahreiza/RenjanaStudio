'use client';

import Image from 'next/image';

interface SpotifyProfileIntroProps {
  groomName: string;
  brideName: string;
  groomPhoto: string;
  bridePhoto: string;
  eventDate: string;
  guestName: string;
  onOpen: () => void;
}

export default function SpotifyProfileIntro({
  groomName,
  brideName,
  groomPhoto,
  bridePhoto,
  eventDate,
  guestName,
  onOpen,
}: SpotifyProfileIntroProps) {
  return (
    <div
      onClick={onOpen}
      className="fixed inset-0 z-50 bg-[#09140d] bg-gradient-to-b from-[#0b2416] via-[#09140d] to-black text-white flex flex-col items-center justify-between py-8 px-4 overflow-y-auto selection:bg-[#1DB954] selection:text-black cursor-pointer"
    >
      {/* Top Header Logo */}
      <div className="flex items-center gap-2 mt-2">
        <svg className="w-8 h-8 text-[#1DB954] fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.62.54.3.72.96.42 1.5-.3.54-.96.72-1.5.42z"/>
        </svg>
        <span className="text-2xl md:text-3xl font-extrabold tracking-tight font-sans text-white">
          Renjanafy
        </span>
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-lg text-center flex flex-col items-center my-auto py-6 space-y-6">
        {/* Subtitle & Title */}
        <div className="space-y-2">
          <p className="text-xs font-bold tracking-[0.2em] text-[#1DB954] uppercase font-sans">
            UNDANGAN PERNIKAHAN
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans text-white">
            {groomName} <span className="text-[#1DB954] font-serif">&amp;</span> {brideName}
          </h1>
          <p className="text-xs md:text-sm text-zinc-300 font-medium">
            {eventDate}
          </p>
        </div>

        {/* Recipient Section */}
        <div className="space-y-1 pt-1">
          <p className="text-[10px] md:text-xs font-bold tracking-widest text-[#1DB954] uppercase">
            KEPADA YTH.
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {guestName}
          </h2>
        </div>

        {/* Who's Listening Profile Selector */}
        <div className="pt-2 space-y-4 w-full">
          <h3 className="text-base md:text-lg font-bold text-white tracking-tight">
            Siapa yang mendengarkan?
          </h3>

          <div className="flex items-center justify-center gap-4 md:gap-8">
            {/* Bride Profile */}
            <div className="flex flex-col items-center gap-2 cursor-pointer group">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#1DB954] shadow-lg transition-all duration-300 bg-zinc-800">
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

            {/* Guest Profile (Center - Green Smiley Face) */}
            <div className="flex flex-col items-center gap-2 cursor-pointer group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#1DB954] flex items-center justify-center border-2 border-transparent group-hover:border-white shadow-xl transition-all duration-300 hover:scale-105">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black fill-current" viewBox="0 0 24 24">
                  <circle cx="8.5" cy="9.5" r="1.5" />
                  <circle cx="15.5" cy="9.5" r="1.5" />
                  <path d="M12 17.5c-2.33 0-4.32-1.45-5.12-3.5h10.24c-.8 2.05-2.79 3.5-5.12 3.5z" />
                </svg>
              </div>
              <span className="text-xs md:text-sm font-bold text-white group-hover:text-[#1DB954] transition-colors max-w-[100px] truncate">
                {guestName}
              </span>
            </div>

            {/* Groom Profile */}
            <div className="flex flex-col items-center gap-2 cursor-pointer group">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#1DB954] shadow-lg transition-all duration-300 bg-zinc-800">
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
            className="bg-[#1DB954] hover:bg-[#1ed760] text-black font-extrabold text-xs sm:text-sm md:text-base px-8 py-3.5 rounded-full shadow-2xl transition-all duration-300 tracking-wide uppercase flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
          >
            <span>Buka Undangan</span>
          </button>
        </div>
      </div>

      {/* Footer copyright */}
      <p className="text-[11px] text-zinc-500 font-mono text-center">
        Renjanafy &copy; 2026 &bull; Spotify Edition Wedding Invitation
      </p>
    </div>
  );
}

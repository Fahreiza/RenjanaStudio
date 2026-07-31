'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { Search, ArrowLeft } from 'lucide-react';

interface YouTubeAppShellProps {
  children: ReactNode;
  guestName: string;
}

export default function YouTubeAppShell({ children, guestName }: YouTubeAppShellProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#FF0000] selection:text-white flex flex-col">
      {/* Top Navigation Header Bar (RenjanaTube Style) */}
      <header className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-zinc-800/80 px-3 sm:px-6 py-3 flex items-center justify-between gap-3">
        {/* Left Side: HOME Pill Button & RenjanaTube Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/"
            className="flex items-center gap-1.5 bg-[#1F1F1F] hover:bg-[#FF0000] text-zinc-300 hover:text-white text-[11px] font-extrabold px-3 py-1.5 rounded-full border border-zinc-700 hover:border-[#FF0000] transition-all uppercase font-mono tracking-wider shadow"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>HOME</span>
          </Link>

          <div className="flex items-center gap-1 font-sans select-none">
            <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tighter">
              Renjana<span className="text-[#FF0000] font-black">Tube</span>
            </span>
          </div>
        </div>

        {/* Quick Filter Navigation Pills (Desktop & Tablet) */}
        <nav className="hidden lg:flex items-center gap-2 text-xs font-bold text-zinc-300">
          <button
            onClick={() => scrollToSection('sec-kreator')}
            className="px-3.5 py-1.5 rounded-full bg-[#1F1F1F] hover:bg-zinc-700 hover:text-white transition-colors border border-zinc-800"
          >
            Kreator
          </button>
          <button
            onClick={() => scrollToSection('sec-hero')}
            className="px-3.5 py-1.5 rounded-full bg-[#1F1F1F] hover:bg-zinc-700 hover:text-white transition-colors border border-zinc-800"
          >
            Playlist
          </button>
          <button
            onClick={() => scrollToSection('sec-jadwal')}
            className="px-3.5 py-1.5 rounded-full bg-[#1F1F1F] hover:bg-zinc-700 hover:text-white transition-colors border border-zinc-800"
          >
            Jadwal
          </button>
          <button
            onClick={() => scrollToSection('sec-shorts')}
            className="px-3.5 py-1.5 rounded-full bg-[#1F1F1F] hover:bg-zinc-700 hover:text-white transition-colors border border-zinc-800"
          >
            Galeri
          </button>
          <button
            onClick={() => scrollToSection('sec-comments')}
            className="px-3.5 py-1.5 rounded-full bg-[#1F1F1F] hover:bg-zinc-700 hover:text-white transition-colors border border-zinc-800"
          >
            RSVP
          </button>
        </nav>

        {/* Center: Search Pill Bar */}
        <div className="flex-1 max-w-md mx-2 flex items-center bg-[#181818] border border-zinc-700/80 rounded-full px-4 py-1.5 focus-within:border-[#FF0000] transition-all">
          <input
            type="text"
            readOnly
            value={`Fahreiza & Amanda (For: ${guestName})`}
            className="w-full bg-transparent text-xs text-zinc-200 focus:outline-none cursor-default font-medium truncate"
          />
          <button className="p-1 hover:text-[#FF0000] text-zinc-400 transition-colors">
            <Search className="w-4 h-4" />
          </button>
        </div>

        {/* Right Side: Red Smiley Avatar */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center font-bold text-sm shadow-md cursor-pointer hover:scale-105 transition-transform">
            <span className="text-base select-none">😊</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-3 sm:px-6 py-5">
        {children}
      </main>
    </div>
  );
}

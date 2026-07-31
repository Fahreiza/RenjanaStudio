'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home, Disc, Mic2, Heart, MessageSquare, UserCheck, Gift, MapPin, ArrowLeft, Radio } from 'lucide-react';
import { FAHREIZA_AMANDA_DATA } from '@/data/demoData';

interface SpotifyAppShellProps {
  children: ReactNode;
  guestName: string;
}

export default function SpotifyAppShell({ children, guestName }: SpotifyAppShellProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white p-0 lg:p-2 flex flex-col font-sans selection:bg-[#1DB954] selection:text-black">
      <div className="flex-1 flex gap-2 overflow-hidden relative">
        {/* Left Sidebar (Spotify Desktop Left Navigation Panel) */}
        <aside className="hidden lg:flex flex-col w-64 shrink-0 gap-2 select-none">
          {/* Logo & Main Nav Card */}
          <div className="bg-[#121212] rounded-xl p-5 space-y-5 border border-zinc-800/80">
            <div className="flex items-center gap-2.5">
              <svg className="w-7 h-7 text-[#1DB954] fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.62.54.3.72.96.42 1.5-.3.54-.96.72-1.5.42z"/>
              </svg>
              <span className="text-xl font-extrabold tracking-tight text-white font-sans">
                Renjanafy
              </span>
            </div>

            <nav className="space-y-3 font-semibold text-xs text-zinc-400">
              <button
                onClick={() => scrollToSection('sec-hero')}
                className="flex items-center gap-3 hover:text-white transition-colors w-full text-left py-1"
              >
                <Home className="w-4 h-4 text-[#1DB954]" />
                <span>Beranda Undangan</span>
              </button>

              <button
                onClick={() => scrollToSection('sec-tracklist')}
                className="flex items-center gap-3 hover:text-white transition-colors w-full text-left py-1"
              >
                <Radio className="w-4 h-4 text-[#1DB954]" />
                <span>Kisah Cinta Kami</span>
              </button>

              <button
                onClick={() => scrollToSection('sec-lyrics')}
                className="flex items-center gap-3 hover:text-white transition-colors w-full text-left py-1"
              >
                <Mic2 className="w-4 h-4 text-[#1DB954]" />
                <span>Lirik Ayat Ar-Rum</span>
              </button>

              <button
                onClick={() => scrollToSection('sec-gallery')}
                className="flex items-center gap-3 hover:text-white transition-colors w-full text-left py-1"
              >
                <Disc className="w-4 h-4 text-[#1DB954]" />
                <span>Galeri Sering Diputar</span>
              </button>

              <button
                onClick={() => scrollToSection('sec-reviews')}
                className="flex items-center gap-3 hover:text-white transition-colors w-full text-left py-1"
              >
                <MessageSquare className="w-4 h-4 text-[#1DB954]" />
                <span>Ucapan &amp; Doa Restu</span>
              </button>

              <button
                onClick={() => scrollToSection('sec-rsvp')}
                className="flex items-center gap-3 hover:text-white transition-colors w-full text-left py-1"
              >
                <UserCheck className="w-4 h-4 text-[#1DB954]" />
                <span>Konfirmasi RSVP</span>
              </button>

              <button
                onClick={() => scrollToSection('sec-gift')}
                className="flex items-center gap-3 hover:text-white transition-colors w-full text-left py-1"
              >
                <Gift className="w-4 h-4 text-[#1DB954]" />
                <span>Amplop Digital</span>
              </button>
            </nav>
          </div>

          {/* Library & Special Playlist Card */}
          <div className="bg-[#121212] rounded-xl p-4 flex-1 border border-zinc-800/80 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-300">
                <Heart className="w-4 h-4 text-[#1DB954] fill-current" />
                <span>Playlist Tamu Spesial</span>
              </div>

              <div className="bg-[#181818] p-3 rounded-lg border border-zinc-800 space-y-1.5">
                <span className="text-[10px] font-mono text-[#1DB954] font-bold">FOR:</span>
                <p className="text-xs font-bold text-white truncate">
                  {guestName}
                </p>
                <p className="text-[10px] text-zinc-400">
                  Exclusive Access Pass &bull; VIP
                </p>
              </div>
            </div>

            <Link
              href="/"
              className="flex items-center justify-center gap-2 bg-[#181818] hover:bg-[#1DB954] text-white hover:text-black font-bold text-xs py-2.5 rounded-full border border-zinc-700 hover:border-[#1DB954] transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Katalog</span>
            </Link>
          </div>
        </aside>

        {/* Center Main Scroll Stream (Main Content) */}
        <main className="flex-1 bg-[#121212] lg:rounded-xl overflow-y-auto border-0 lg:border border-zinc-800/80 shadow-2xl">
          {children}
        </main>

        {/* Right Sidebar (Spotify Desktop Now Playing Panel) */}
        <aside className="hidden xl:flex flex-col w-72 shrink-0 gap-2 select-none">
          <div className="bg-[#121212] rounded-xl p-5 border border-zinc-800/80 flex-1 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-800 pb-2">
                NOW PLAYING VIEW
              </h4>

              {/* Mini Album Cover */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-800">
                <Image
                  src="/assets/images/hero-wedding.webp"
                  alt="Wedding Album Cover"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-extrabold text-white">
                  Married Together
                </h3>
                <p className="text-xs text-[#1DB954] font-semibold">
                  {FAHREIZA_AMANDA_DATA.groom.name} &amp; {FAHREIZA_AMANDA_DATA.bride.name}
                </p>
                <p className="text-[11px] text-zinc-400">
                  {FAHREIZA_AMANDA_DATA.akad.date}
                </p>
              </div>

              {/* Fast Google Maps Action */}
              <a
                href={FAHREIZA_AMANDA_DATA.akad.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#1DB954] hover:bg-[#1ed760] text-black font-extrabold text-xs py-2.5 rounded-full shadow-lg transition-all"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Petunjuk Lokasi (Google Maps)</span>
              </a>
            </div>

            <div className="pt-3 border-t border-zinc-800 text-center space-y-1">
              <span className="text-[10px] text-zinc-500 font-mono">
                SPOTIFY EDITION WEDDING INVITATION
              </span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

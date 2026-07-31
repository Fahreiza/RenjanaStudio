'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play, Pause, Heart, Share2, MoreHorizontal, CheckCircle2 } from 'lucide-react';
import { GroomBrideInfo } from '@/types/invitation';

interface SpotifyAlbumHeroProps {
  groom: GroomBrideInfo;
  bride: GroomBrideInfo;
  eventDate: string;
  isPlaying: boolean;
  onTogglePlay: () => void;
  guestName: string;
}

export default function SpotifyAlbumHero({
  groom,
  bride,
  eventDate,
  isPlaying,
  onTogglePlay,
  guestName,
}: SpotifyAlbumHeroProps) {
  const handleShareToWhatsApp = () => {
    const shareText = `Halo! Kami mengundang Anda untuk hadir di Pernikahan ${groom.name} & ${bride.name}.\n\nBuka Undangan Spesial Spotify: ${window.location.href}`;
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section className="relative bg-gradient-to-b from-[#1db954]/20 via-[#121212] to-[#121212] text-white pt-20 pb-10 px-4 md:px-12 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center md:items-end gap-6 max-w-6xl mx-auto">
        {/* Vinyl Album Cover */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-52 h-52 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-2xl shrink-0 bg-zinc-800 border border-zinc-700 group"
        >
          <Image
            src="/assets/images/hero-wedding.webp"
            alt="Spotify Album Cover"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* Album Header Text Details */}
        <div className="space-y-3 text-center md:text-left flex-1">
          <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs text-[#1DB954] font-semibold uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 fill-current text-[#1DB954]" />
            <span>VERIFIED WEDDING ARTISTS</span>
          </div>

          <h1 className="font-serif-cormorant text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            {groom.name} <span className="font-cursive text-[#1DB954] text-5xl md:text-7xl">&amp;</span> {bride.name}
          </h1>

          <p className="text-xs md:text-sm text-zinc-300 font-sans font-medium">
            Album: <span className="text-white font-bold">Married Together (The Wedding Edition)</span>
          </p>

          <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-zinc-400 font-sans">
            <span className="font-bold text-white">{groom.fullName}</span> &bull;{' '}
            <span className="font-bold text-white">{bride.fullName}</span> &bull; {eventDate}
          </div>

          {/* Guest Greeting Badge */}
          <div className="inline-block bg-[#181818] border border-zinc-700 rounded-full px-4 py-1.5 text-xs text-zinc-300">
            Special Playlist For: <span className="text-[#1DB954] font-bold">{guestName}</span>
          </div>
        </div>
      </div>

      {/* Main Spotify Play Control Bar */}
      <div className="max-w-6xl mx-auto mt-8 flex items-center gap-6 pt-4">
        <button
          onClick={onTogglePlay}
          className="w-14 h-14 rounded-full bg-[#1DB954] hover:bg-[#1ed760] text-black flex items-center justify-center shadow-xl transition-transform transform hover:scale-105 active:scale-95"
        >
          {isPlaying ? (
            <Pause className="w-7 h-7 fill-current" />
          ) : (
            <Play className="w-7 h-7 fill-current ml-1" />
          )}
        </button>

        <button className="text-[#1DB954] hover:scale-110 transition-transform">
          <Heart className="w-8 h-8 fill-current" />
        </button>

        {/* Share Button (Triggers WhatsApp Share without altering UI layout) */}
        <button
          onClick={handleShareToWhatsApp}
          title="Bagikan Undangan ke WhatsApp"
          className="text-zinc-400 hover:text-white transition-colors"
        >
          <Share2 className="w-6 h-6" />
        </button>

        <button className="text-zinc-400 hover:text-white transition-colors">
          <MoreHorizontal className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}

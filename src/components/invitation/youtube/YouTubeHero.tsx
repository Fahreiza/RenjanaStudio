'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Play,
  Pause,
  SkipForward,
  Volume2,
  VolumeX,
  Settings,
  Tv,
  Maximize2,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  ThumbsUp,
  Share2,
  Bell,
} from 'lucide-react';
import { GroomBrideInfo, EventDetail, LoveStoryItem } from '@/types/invitation';

interface YouTubeHeroProps {
  groom: GroomBrideInfo;
  bride: GroomBrideInfo;
  akad: EventDetail;
  resepsi: EventDetail;
  loveStories: LoveStoryItem[];
  galleryPhotos: string[];
  guestName: string;
  isPlayingMusic?: boolean;
  onToggleMusic?: () => void;
}

export default function YouTubeHero({
  groom,
  bride,
  akad,
  resepsi,
  loveStories,
  galleryPhotos,
  guestName,
  isPlayingMusic = false,
  onToggleMusic,
}: YouTubeHeroProps) {
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [likesCount, setLikesCount] = useState(245890);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (hasLiked) {
      setHasLiked(false);
      setLikesCount((prev) => prev - 1);
    } else {
      setHasLiked(true);
      setLikesCount((prev) => prev + 1);
    }
  };

  const handleShareToWhatsApp = () => {
    const text = encodeURIComponent(
      `Undangan Pernikahan Online (RenjanaTube Premiere) Fahreiza & Amanda ✨\n\nUntuk: ${guestName}\nSaksikan video premiere di sini: ${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  // Up Next Video Playlist Items
  const upNextPlaylist = [
    {
      title: 'Niat & Ta\'aruf (Pertama Kali Bertemu)',
      channel: `${groom.name} & ${bride.name}`,
      date: 'Selasa, 20 Mei 2021',
      badge: '2021',
      thumbnail: galleryPhotos[0] || '/assets/images/gallery-1.webp',
    },
    {
      title: 'Menjalin Komitmen Bersama',
      channel: `${groom.name} & ${bride.name}`,
      date: 'Rabu, 10 September 2023',
      badge: '2023',
      thumbnail: galleryPhotos[1] || '/assets/images/gallery-2.webp',
    },
    {
      title: 'Hari Momen Lamaran Sederhana',
      channel: `${groom.name} & ${bride.name}`,
      date: 'Selasa, 23 Desember 2025',
      badge: '2025',
      thumbnail: galleryPhotos[2] || '/assets/images/gallery-3.webp',
    },
    {
      title: `Akad Nikah: ${akad.venue}`,
      channel: `${groom.name} & ${bride.name}`,
      date: akad.date,
      badge: '2026',
      thumbnail: '/assets/images/hero-wedding.webp',
    },
    {
      title: `Resepsi Pernikahan: ${resepsi.venue}`,
      channel: `${groom.name} & ${bride.name}`,
      date: resepsi.date,
      badge: '2026',
      thumbnail: bride.photoUrl || '/assets/images/sm-WANITA.webp',
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 select-none">
      {/* LEFT MAIN COLUMN (8 Columns): Video Player, Title, Creator Info */}
      <div className="lg:col-span-8 space-y-5">
        {/* 1. Main 16:9 Video Player View Container (No center play button, hover auto-show controls) */}
        <div
          onClick={onToggleMusic}
          className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border border-zinc-800 group cursor-pointer"
        >
          {/* Main Background Image */}
          <Image
            src="/assets/images/hero-wedding.webp"
            alt="Wedding Premiere Video"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />

          {/* Subtle Dark Gradient Overlay (Fades out when controls hide) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Bottom Authentic Video Control Bar (Shows ONLY on hover inside player container) */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-3 z-20 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Seek Bar Red Line */}
            <div className="w-full bg-zinc-700/80 h-1.5 rounded-full overflow-hidden cursor-pointer">
              <div className="bg-[#FF0000] h-full w-[65%] relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF0000] border-2 border-white rounded-full shadow" />
              </div>
            </div>

            {/* Control Icons & Time Counter (Bottom Only) */}
            <div className="flex items-center justify-between text-xs text-zinc-300 font-mono pt-0.5">
              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleMusic && onToggleMusic();
                  }}
                  className="hover:text-white transition-colors"
                >
                  {isPlayingMusic ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="hover:text-white transition-colors"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleMusic && onToggleMusic();
                  }}
                  className="hover:text-white transition-colors"
                >
                  {isPlayingMusic ? <Volume2 className="w-4 h-4 text-[#FF0000]" /> : <VolumeX className="w-4 h-4" />}
                </button>
                <span className="text-[11px] text-zinc-300">
                  {isPlayingMusic ? '2:45 / ∞' : '0:00 / ∞'}
                </span>
              </div>

              <div className="flex items-center gap-3 text-zinc-400">
                <Settings className="w-4 h-4 hover:text-white cursor-pointer" />
                <Tv className="w-4 h-4 hover:text-white cursor-pointer" />
                <Maximize2 className="w-4 h-4 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* 2. Red Premiere Tag & Huge Title */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center gap-2">
            <span className="bg-[#FF0000] text-white text-[10px] sm:text-xs font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider shadow font-mono flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              PREMIERE
            </span>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest font-mono">
              KANAL PERNIKAHAN
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
            {groom.name} <span className="text-[#FF0000] font-serif">&amp;</span> {bride.name}
          </h1>

          <p className="text-xs sm:text-sm text-zinc-400 font-mono">
            Special Premiere Access For: <span className="text-white font-bold">{guestName}</span> &bull; {akad.date}
          </p>
        </div>

        {/* 3. Channel Info & Action Toolbar Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-y border-zinc-800 py-4">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden bg-zinc-800 border border-zinc-700 shrink-0">
              <Image src={groom.photoUrl} alt="Channel Avatar" fill className="object-cover" />
            </div>

            <div>
              <div className="flex items-center gap-1">
                <h3 className="text-sm font-bold text-white font-sans">{groom.name} &amp; {bride.name}</h3>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF0000] fill-current" />
              </div>
              <p className="text-[11px] text-zinc-400 font-mono">210K Subscribers &bull; Official Channel</p>
            </div>

            <button
              onClick={() => setIsSubscribed(!isSubscribed)}
              className={`ml-2 px-4 py-1.5 rounded-full text-xs font-extrabold transition-all flex items-center gap-1.5 ${
                isSubscribed
                  ? 'bg-[#1F1F1F] text-zinc-300 border border-zinc-700 hover:bg-zinc-800'
                  : 'bg-[#FF0000] text-white hover:bg-red-700'
              }`}
            >
              <Bell className={`w-3.5 h-3.5 ${isSubscribed ? 'text-[#FF0000] fill-current' : ''}`} />
              <span>{isSubscribed ? 'SUBSCRIBED' : 'SUBSCRIBE'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border ${
                hasLiked ? 'bg-[#FF0000]/20 text-[#FF0000] border-[#FF0000]/50' : 'bg-[#1F1F1F] text-white border-zinc-700 hover:bg-zinc-800'
              }`}
            >
              <ThumbsUp className="w-3.5 h-3.5" />
              <span>{likesCount.toLocaleString('id-ID')}</span>
            </button>

            <button
              onClick={handleShareToWhatsApp}
              className="flex items-center gap-1.5 bg-[#1F1F1F] hover:bg-zinc-800 text-white text-xs font-bold px-3.5 py-1.5 rounded-full border border-zinc-700 transition-all"
            >
              <Share2 className="w-3.5 h-3.5 text-[#FF0000]" />
              <span>Share WA</span>
            </button>
          </div>
        </div>

        {/* 4. Bride & Groom Creator Profiles Section (sec-kreator) */}
        <div id="sec-kreator" className="bg-[#141414] rounded-2xl p-5 border border-zinc-800 space-y-4">
          <span className="text-[11px] font-mono text-[#FF0000] font-bold uppercase tracking-wider block">
            PROFIL KREATOR KANAL PERNIKAHAN
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Bride */}
            <div className="bg-[#1F1F1F] p-4 rounded-xl border border-zinc-800 flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border border-zinc-700 bg-zinc-900">
                <Image src={bride.photoUrl} alt={bride.name} fill className="object-cover" />
              </div>
              <div className="space-y-0.5 overflow-hidden">
                <span className="text-[10px] font-mono text-[#FF0000] font-bold">MEMPELAI WANITA</span>
                <h4 className="text-sm font-bold text-white truncate">{bride.fullName}</h4>
                <p className="text-[11px] text-zinc-400 line-clamp-2">{bride.parentInfo}</p>
              </div>
            </div>

            {/* Groom */}
            <div className="bg-[#1F1F1F] p-4 rounded-xl border border-zinc-800 flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border border-zinc-700 bg-zinc-900">
                <Image src={groom.photoUrl} alt={groom.name} fill className="object-cover" />
              </div>
              <div className="space-y-0.5 overflow-hidden">
                <span className="text-[10px] font-mono text-[#FF0000] font-bold">MEMPELAI PRIA</span>
                <h4 className="text-sm font-bold text-white truncate">{groom.fullName}</h4>
                <p className="text-[11px] text-zinc-400 line-clamp-2">{groom.parentInfo}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Timings Schedule Details (sec-jadwal) */}
        <div id="sec-jadwal" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#141414] p-4 rounded-2xl border border-zinc-800 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#FF0000]">
              <Calendar className="w-4 h-4" />
              <span>AKAD NIKAH</span>
            </div>
            <p className="text-sm text-white font-bold">{akad.date}</p>
            <p className="text-xs text-zinc-300">{akad.time}</p>
            <p className="text-xs text-zinc-400 leading-relaxed">{akad.venue} — {akad.address}</p>
            <a
              href={akad.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-[#FF0000] hover:bg-red-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow transition-all mt-1"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Petunjuk Lokasi (Google Maps)</span>
            </a>
          </div>

          <div className="bg-[#141414] p-4 rounded-2xl border border-zinc-800 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#FF0000]">
              <Clock className="w-4 h-4" />
              <span>RESEPSI PERNIKAHAN</span>
            </div>
            <p className="text-sm text-white font-bold">{resepsi.date}</p>
            <p className="text-xs text-zinc-300">{resepsi.time}</p>
            <p className="text-xs text-zinc-400 leading-relaxed">{resepsi.venue} — {resepsi.address}</p>
            <a
              href={resepsi.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-[#FF0000] hover:bg-red-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow transition-all mt-1"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Petunjuk Lokasi (Google Maps)</span>
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR COLUMN (4 Columns): "Berikutnya" Up Next Recommended Playlist */}
      <div id="sec-playlist" className="lg:col-span-4 space-y-3">
        <h3 className="text-base font-extrabold text-white font-sans tracking-tight border-b border-zinc-800 pb-2">
          Berikutnya
        </h3>

        <div className="space-y-3">
          {upNextPlaylist.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#141414] hover:bg-[#1F1F1F] p-2.5 rounded-xl border border-zinc-800/80 flex items-start gap-3 group cursor-pointer transition-colors"
            >
              {/* Card Thumbnail Container */}
              <div className="relative w-28 sm:w-32 aspect-video rounded-lg overflow-hidden shrink-0 bg-zinc-900 border border-zinc-800">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Year Duration Badge */}
                <div className="absolute bottom-1 right-1 bg-black/80 text-white font-mono text-[9px] font-bold px-1.5 py-0.5 rounded border border-zinc-700">
                  {item.badge}
                </div>
              </div>

              {/* Card Content Info */}
              <div className="space-y-1 overflow-hidden flex-1">
                <h4 className="text-xs font-bold text-white leading-snug line-clamp-2 group-hover:text-[#FF0000] transition-colors">
                  {item.title}
                </h4>
                <div className="flex items-center gap-1 text-[11px] text-zinc-400">
                  <span className="truncate">{item.channel}</span>
                  <CheckCircle2 className="w-3 h-3 text-[#FF0000] fill-current shrink-0" />
                </div>
                <p className="text-[10px] text-zinc-500 font-mono">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

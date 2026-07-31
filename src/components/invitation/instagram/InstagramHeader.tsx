'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  MessageCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  Send,
  MoreHorizontal,
  ArrowLeft,
} from 'lucide-react';
import { GroomBrideInfo, EventDetail } from '@/types/invitation';

interface InstagramHeaderProps {
  groom: GroomBrideInfo;
  bride: GroomBrideInfo;
  akad: EventDetail;
  resepsi: EventDetail;
  guestName: string;
}

export default function InstagramHeader({
  groom,
  bride,
  akad,
  resepsi,
  guestName,
}: InstagramHeaderProps) {
  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);
  const [storyProgress, setStoryProgress] = useState(0);
  const [isFollowing, setIsFollowing] = useState(true);

  // Story Highlight Items
  const storyHighlights = [
    {
      title: 'The Groom 🤵',
      photo: groom.photoUrl,
      caption: `${groom.fullName}\n\n${groom.parentInfo}`,
      tag: 'MEMPELAI PRIA',
    },
    {
      title: 'The Bride 👰',
      photo: bride.photoUrl,
      caption: `${bride.fullName}\n\n${bride.parentInfo}`,
      tag: 'MEMPELAI WANITA',
    },
    {
      title: 'Akad Nikah 💍',
      photo: '/assets/images/hero-wedding.webp',
      caption: `Akad Nikah\n${akad.date} (${akad.time})\n${akad.venue}\n${akad.address}`,
      tag: 'AKAD NIKAH',
    },
    {
      title: 'Resepsi 🥳',
      photo: '/assets/images/gallery-2.webp',
      caption: `Resepsi Pernikahan\n${resepsi.date} (${resepsi.time})\n${resepsi.venue}\n${resepsi.address}`,
      tag: 'RESEPSI',
    },
    {
      title: 'Love Story ❤️',
      photo: '/assets/images/gallery-3.webp',
      caption: 'Perjalanan cinta kami dari pertama bertemu hingga menuju jenjang pernikahan.',
      tag: 'STORY',
    },
  ];

  // Auto advance story progress bar
  useEffect(() => {
    if (activeStoryIndex === null) return;
    setStoryProgress(0);

    const interval = setInterval(() => {
      setStoryProgress((prev) => {
        if (prev >= 100) {
          if (activeStoryIndex < storyHighlights.length - 1) {
            setActiveStoryIndex((idx) => (idx !== null ? idx + 1 : null));
            return 0;
          } else {
            setActiveStoryIndex(null);
            return 100;
          }
        }
        return prev + 2.5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [activeStoryIndex, storyHighlights.length]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-black border-b border-zinc-800 text-white select-none">
      {/* Top Instagram App Bar Navigation Header */}
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-zinc-800/80 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1 bg-zinc-900 hover:bg-[#E4405F] text-zinc-300 hover:text-white text-[11px] font-extrabold px-3 py-1.5 rounded-full border border-zinc-800 hover:border-[#E4405F] transition-all uppercase font-mono shadow"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>HOME</span>
          </Link>

          {/* RenjanaGram Authentic Instagram Cursive Calligraphy Logo Font */}
          <div className="flex items-center font-instagram-logo pt-1">
            <span className="text-3xl sm:text-4xl text-white tracking-wide font-normal leading-none">
              Renjana<span className="bg-gradient-to-tr from-[#FCCC63] via-[#E4405F] to-[#833AB4] bg-clip-text text-transparent">Gram</span>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToSection('dm-rsvp')}
            className="p-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-full border border-zinc-800 transition-colors relative"
          >
            <Send className="w-4 h-4 text-[#E4405F]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#E4405F] rounded-full animate-ping" />
          </button>
        </div>
      </div>

      {/* Main Profile Info & Stats */}
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10">
          {/* Profile Picture with Colorful Instagram Story Ring */}
          <div
            onClick={() => setActiveStoryIndex(0)}
            className="relative cursor-pointer group shrink-0"
          >
            <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-[#FCCC63] via-[#E4405F] to-[#833AB4] shadow-[0_0_25px_rgba(228,64,95,0.4)] flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-black bg-zinc-900">
                <Image
                  src="/assets/images/hero-wedding.webp"
                  alt="Profile Avatar"
                  fill
                  sizes="(max-width: 640px) 96px, 144px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#E4405F] text-white text-[9px] font-mono font-extrabold px-2 py-0.5 rounded-full border border-black uppercase tracking-wider">
              STORY
            </span>
          </div>

          {/* User Details & Stats */}
          <div className="flex-1 space-y-4 text-center sm:text-left">
            {/* Username & Action Buttons Row (With Sharp White Checkmark Inside Blue Circle) */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="flex items-center gap-1.5">
                <h1 className="text-xl sm:text-2xl font-extrabold text-white font-sans">
                  {groom.name.toLowerCase()}_{bride.name.toLowerCase()}.official
                </h1>
                {/* Verified Blue Badge with White Checkmark */}
                <div className="w-5 h-5 rounded-full bg-[#3897F0] text-white flex items-center justify-center shrink-0 shadow-sm p-0.5">
                  <svg className="w-3 h-3 stroke-white stroke-[3.5] fill-none" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsFollowing(!isFollowing)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-extrabold transition-all ${
                    isFollowing
                      ? 'bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700'
                      : 'bg-[#3897F0] text-white hover:bg-blue-600'
                  }`}
                >
                  {isFollowing ? 'Following ✓' : 'Follow'}
                </button>

                <button
                  onClick={() => scrollToSection('dm-rsvp')}
                  className="bg-[#E4405F] hover:bg-pink-700 text-white text-xs font-extrabold px-4 py-1.5 rounded-lg shadow transition-all flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Kirim DM (RSVP)</span>
                </button>
              </div>
            </div>

            {/* Horizontal Stats Row */}
            <div className="flex items-center justify-center sm:justify-start gap-6 sm:gap-10 text-xs sm:text-sm text-zinc-300 font-sans border-y sm:border-y-0 border-zinc-800 py-3 sm:py-0">
              <div>
                <span className="font-extrabold text-white">3</span> <span className="text-zinc-400">posts</span>
              </div>
              <div>
                <span className="font-extrabold text-white">10.5K</span> <span className="text-zinc-400">followers</span>
              </div>
              <div>
                <span className="font-extrabold text-white">450</span> <span className="text-zinc-400">following</span>
              </div>
            </div>

            {/* Bio Details */}
            <div className="space-y-1 text-xs sm:text-sm font-sans text-zinc-200">
              <p className="font-bold text-white text-base">
                {groom.fullName} &amp; {bride.fullName}
              </p>
              <p className="text-[#E4405F] font-bold font-mono">
                #FahreizaAmandaWedding &bull; {akad.date}
              </p>
              <p className="text-zinc-300 leading-relaxed max-w-lg">
                &ldquo;Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Kehadiran &amp; doa restu Anda adalah kebahagiaan terbesar kami.&rdquo;
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-1 text-[#3897F0] font-medium pt-1">
                <MapPin className="w-3.5 h-3.5" />
                <a
                  href={akad.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-mono text-xs"
                >
                  {akad.venue} (Google Maps)
                </a>
              </div>
              <p className="text-[11px] text-zinc-500 font-mono pt-1">
                Special Invitation For: <span className="text-white font-bold">{guestName}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Story Highlights Bar */}
        <div className="pt-2">
          <h4 className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest font-mono mb-3">
            STORY HIGHLIGHTS
          </h4>
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-none">
            {storyHighlights.map((story, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStoryIndex(idx)}
                className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-0.5 bg-gradient-to-tr from-[#FCCC63] via-[#E4405F] to-[#833AB4] group-hover:scale-105 transition-transform shadow-md">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-black bg-zinc-900">
                    <Image
                      src={story.photo}
                      alt={story.title}
                      fill
                      sizes="(max-width: 640px) 64px, 80px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <span className="text-[11px] font-bold text-zinc-300 group-hover:text-white transition-colors max-w-[76px] truncate">
                  {story.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Interactive Instagram Story Viewer Modal */}
      {activeStoryIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
          <button
            onClick={() => setActiveStoryIndex(null)}
            className="absolute top-4 right-4 z-50 p-3 bg-zinc-900/80 hover:bg-[#E4405F] text-white rounded-full transition-colors border border-zinc-700 shadow-2xl"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-sm h-[90vh] rounded-3xl overflow-hidden bg-black border border-zinc-800 shadow-2xl flex flex-col justify-between p-4">
            {/* Story Background Photo */}
            <Image
              src={storyHighlights[activeStoryIndex].photo}
              alt="Story View"
              fill
              sizes="(max-width: 640px) 100vw, 384px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

            {/* Top Progress Bar */}
            <div className="relative z-20 space-y-3">
              <div className="flex items-center gap-1">
                {storyHighlights.map((_, i) => (
                  <div key={i} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white transition-all duration-100"
                      style={{
                        width:
                          i < activeStoryIndex
                            ? '100%'
                            : i === activeStoryIndex
                            ? `${storyProgress}%`
                            : '0%',
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Story User Header Bar */}
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/50">
                    <Image
                      src="/assets/images/hero-wedding.webp"
                      alt="Avatar"
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="text-xs font-bold font-sans">
                        {groom.name.toLowerCase()}_{bride.name.toLowerCase()}
                      </p>
                      <div className="w-3.5 h-3.5 rounded-full bg-[#3897F0] text-white flex items-center justify-center shrink-0 p-0.5">
                        <svg className="w-2.5 h-2.5 stroke-white stroke-[3.5] fill-none" viewBox="0 0 24 24">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-300">
                      {storyHighlights[activeStoryIndex].tag}
                    </span>
                  </div>
                </div>
                <MoreHorizontal className="w-5 h-5 text-white/80" />
              </div>
            </div>

            {/* Left & Right Story Nav Tap Controls */}
            <div className="absolute inset-y-16 inset-x-0 z-10 flex items-center justify-between px-2">
              <button
                onClick={() => setActiveStoryIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))}
                disabled={activeStoryIndex === 0}
                className="p-2 bg-black/40 text-white rounded-full disabled:opacity-0"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() =>
                  setActiveStoryIndex((prev) =>
                    prev !== null && prev < storyHighlights.length - 1 ? prev + 1 : prev
                  )
                }
                disabled={activeStoryIndex === storyHighlights.length - 1}
                className="p-2 bg-black/40 text-white rounded-full disabled:opacity-0"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Story Caption Box */}
            <div className="relative z-20 space-y-3 bg-black/50 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-white">
              <p className="text-xs font-sans whitespace-pre-line leading-snug">
                {storyHighlights[activeStoryIndex].caption}
              </p>

              <div className="flex items-center gap-3 pt-1">
                <div className="flex-1 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 text-xs text-zinc-300 font-mono">
                  Send message to couple...
                </div>
                <Heart className="w-5 h-5 text-[#E4405F] fill-current cursor-pointer" />
                <Send className="w-5 h-5 text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

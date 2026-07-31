'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Pin, Bookmark, Heart, Share2, MapPin } from 'lucide-react';
import RsvpForm from '@/components/invitation/RsvpForm';
import DigitalGift from '@/components/invitation/DigitalGift';
import ClosingSection from '@/components/invitation/ClosingSection';
import MusicPlayer from '@/components/invitation/MusicPlayer';
import { FAHREIZA_AMANDA_DATA } from '@/data/demoData';

function PinterestContent() {
  const searchParams = useSearchParams();
  const guestNameParam = searchParams.get('to') || 'Tamu Undangan';

  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(
      'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=wedding-piano-romantic-112349.mp3'
    );
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handleToggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlayingAudio(true))
        .catch(() => setIsPlayingAudio(false));
    }
  };

  const pins = [
    { title: 'Pre-Wedding Hero', img: '/assets/images/hero-wedding.webp', height: 'h-[320px]' },
    { title: 'The Groom — Fahreiza', img: '/assets/images/sm-PRIA.webp', height: 'h-[240px]' },
    { title: 'The Bride — Amanda', img: '/assets/images/sm-WANITA.webp', height: 'h-[240px]' },
    { title: 'Akad Nikah Venue', img: '/assets/images/gallery-1.webp', height: 'h-[280px]' },
    { title: 'Resepsi Ballroom', img: '/assets/images/gallery-2.webp', height: 'h-[300px]' },
    { title: 'Love Moments', img: '/assets/images/gallery-3.webp', height: 'h-[260px]' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D3748] font-sans selection:bg-[#E60023] selection:text-white pb-16">
      {/* Floating Back Header */}
      <div className="fixed top-4 right-4 z-40">
        <Link
          href="/"
          className="flex items-center gap-2 bg-[#E60023] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg hover:bg-red-700 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Katalog (WeddingPin)</span>
        </Link>
      </div>

      <MusicPlayer isPlaying={isPlayingAudio} onTogglePlay={handleToggleAudio} />

      {/* Header Board Info */}
      <div className="max-w-4xl mx-auto py-10 px-4 text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#E60023] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow">
          <Pin className="w-3.5 h-3.5 fill-current" />
          <span>Pinterest Wedding Board</span>
        </div>

        <h1 className="font-serif-cormorant text-4xl md:text-6xl font-bold text-[#2D3748]">
          Fahreiza &amp; Amanda Wedding Board
        </h1>
        <p className="text-xs md:text-sm text-zinc-600 max-w-md mx-auto">
          Special Invitation &amp; Moodboard for: <strong className="text-[#E60023]">{guestNameParam}</strong>
        </p>
      </div>

      {/* Pinterest Masonry Grid */}
      <div className="max-w-5xl mx-auto px-4 columns-2 md:columns-3 gap-4 space-y-4">
        {pins.map((pin, idx) => (
          <div
            key={idx}
            className={`relative rounded-2xl overflow-hidden shadow-lg bg-white border border-zinc-200 group cursor-pointer break-inside-avoid ${pin.height}`}
          >
            <Image src={pin.img} alt={pin.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between text-white">
              <div className="flex justify-end">
                <button className="bg-[#E60023] text-white text-xs font-bold px-4 py-2 rounded-full shadow">
                  Save Pin
                </button>
              </div>
              <span className="font-bold text-sm drop-shadow">{pin.title}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-12">
        <RsvpForm initialGuestName={guestNameParam} />

        <DigitalGift
          bankAccounts={FAHREIZA_AMANDA_DATA.bankAccounts}
          qrisUrl={FAHREIZA_AMANDA_DATA.qrisUrl}
          giftAddress={FAHREIZA_AMANDA_DATA.giftAddress}
        />

        <ClosingSection
          groomName={FAHREIZA_AMANDA_DATA.groom.name}
          brideName={FAHREIZA_AMANDA_DATA.bride.name}
          accentColor="#E60023"
          themeName="Pinterest Edition"
        />
      </div>
    </div>
  );
}

export default function PinterestPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
        <p className="text-sm font-semibold text-[#E60023] animate-pulse">Memuat WeddingPin...</p>
      </div>
    }>
      <PinterestContent />
    </Suspense>
  );
}

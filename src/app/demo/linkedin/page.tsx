'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, Award, CheckCircle2, UserPlus, ThumbsUp, Calendar, MapPin } from 'lucide-react';
import RsvpForm from '@/components/invitation/RsvpForm';
import DigitalGift from '@/components/invitation/DigitalGift';
import ClosingSection from '@/components/invitation/ClosingSection';
import MusicPlayer from '@/components/invitation/MusicPlayer';
import { FAHREIZA_AMANDA_DATA } from '@/data/demoData';

function LinkedInContent() {
  const searchParams = useSearchParams();
  const guestNameParam = searchParams.get('to') || 'Tamu Undangan';

  const [isConnected, setIsConnected] = useState(false);
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

  return (
    <div className="min-h-screen bg-[#F3F2EF] text-[#191919] font-sans selection:bg-[#0A66C2] selection:text-white pb-16">
      {/* Floating Back Header */}
      <div className="fixed top-4 right-4 z-40">
        <Link
          href="/"
          className="flex items-center gap-2 bg-[#0A66C2] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Katalog (WeddingIn)</span>
        </Link>
      </div>

      <MusicPlayer isPlaying={isPlayingAudio} onTogglePlay={handleToggleAudio} />

      {/* Main Profile Card Container */}
      <div className="max-w-2xl mx-auto py-10 px-4 space-y-6">
        <div className="bg-white rounded-2xl border border-zinc-300 overflow-hidden shadow-md">
          {/* Cover Banner */}
          <div className="relative w-full h-40 bg-gradient-to-r from-[#0A66C2] via-sky-600 to-[#0A66C2]">
            <Image src="/assets/images/hero-wedding.webp" alt="LinkedIn Cover" fill className="object-cover opacity-60" />
          </div>

          {/* Profile Details */}
          <div className="p-6 pt-0 relative space-y-4">
            {/* Avatar Profile */}
            <div className="-mt-16 mb-2 inline-block relative border-4 border-white rounded-full overflow-hidden w-28 h-28 shadow-xl bg-white">
              <Image src="/assets/images/sm-PRIA.webp" alt="LinkedIn Avatar" fill className="object-cover" />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-zinc-900 flex items-center gap-1.5">
                Fahreiza &amp; Amanda
                <CheckCircle2 className="w-5 h-5 text-[#0A66C2] fill-current" />
              </h1>
              <p className="text-sm font-semibold text-zinc-700">Co-Founders of Our New Family &bull; Joined Together Forever</p>
              <p className="text-xs text-zinc-500">Jakarta, Indonesia &bull; Special Invitation for: <strong className="text-[#0A66C2]">{guestNameParam}</strong></p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => {
                  setIsConnected(!isConnected);
                  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                    'Pernikahan Fahreiza & Amanda'
                  )}&dates=20261121T080000Z/20261121T150000Z`;
                  window.open(calendarUrl, '_blank');
                }}
                className={`flex items-center gap-2 text-xs font-bold px-6 py-2.5 rounded-full shadow transition-all ${
                  isConnected ? 'bg-zinc-200 text-zinc-800' : 'bg-[#0A66C2] text-white hover:bg-blue-700'
                }`}
              >
                <UserPlus className="w-4 h-4" />
                <span>{isConnected ? 'Connected & Attending' : 'Connect & Attend (Calendar)'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Experience Section (Love Story) */}
        <div className="bg-white rounded-2xl border border-zinc-300 p-6 shadow-md space-y-4">
          <h2 className="text-lg font-bold text-zinc-900 flex items-center gap-2 border-b border-zinc-200 pb-3">
            <Briefcase className="w-5 h-5 text-[#0A66C2]" />
            <span>Marriage Journey (Love Experience)</span>
          </h2>

          <div className="space-y-4 text-xs">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded bg-blue-50 text-[#0A66C2] flex items-center justify-center font-bold shrink-0">
                2021
              </div>
              <div>
                <h3 className="font-bold text-sm text-zinc-900">First Meeting &amp; Intern</h3>
                <p className="text-zinc-600">Takdir mempertemukan kami saat kegiatan magang bersama di Jakarta.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-10 h-10 rounded bg-blue-50 text-[#0A66C2] flex items-center justify-center font-bold shrink-0">
                2026
              </div>
              <div>
                <h3 className="font-bold text-sm text-zinc-900">The Wedding Event (Akad &amp; Resepsi)</h3>
                <p className="text-zinc-600">Sabtu, 21 November 2026 &bull; Grand Ballroom Hotel Mulia Jakarta</p>
              </div>
            </div>
          </div>
        </div>

        <RsvpForm initialGuestName={guestNameParam} />

        <DigitalGift
          bankAccounts={FAHREIZA_AMANDA_DATA.bankAccounts}
          qrisUrl={FAHREIZA_AMANDA_DATA.qrisUrl}
          giftAddress={FAHREIZA_AMANDA_DATA.giftAddress}
        />

        <ClosingSection
          groomName={FAHREIZA_AMANDA_DATA.groom.name}
          brideName={FAHREIZA_AMANDA_DATA.bride.name}
          accentColor="#0A66C2"
          themeName="LinkedIn Edition"
        />
      </div>
    </div>
  );
}

export default function LinkedInPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#F3F2EF] flex items-center justify-center">
        <p className="text-sm font-semibold text-[#0A66C2] animate-pulse">Memuat WeddingIn...</p>
      </div>
    }>
      <LinkedInContent />
    </Suspense>
  );
}

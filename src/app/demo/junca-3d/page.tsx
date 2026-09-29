'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import JuncaIntroAnimation from '@/components/invitation/junca-3d/JuncaIntroAnimation';
import JuncaProfileIntro from '@/components/invitation/junca-3d/JuncaProfileIntro';
import JuncaGroomBride from '@/components/invitation/junca-3d/JuncaGroomBride';
import JuncaEventSchedule from '@/components/invitation/junca-3d/JuncaEventSchedule';
import JuncaCountdown from '@/components/invitation/junca-3d/JuncaCountdown';
import JuncaLoveStoryQuote from '@/components/invitation/junca-3d/JuncaLoveStoryQuote';
import JuncaPhotoGallery from '@/components/invitation/junca-3d/JuncaPhotoGallery';
import JuncaRsvpForm from '@/components/invitation/junca-3d/JuncaRsvpForm';
import JuncaDigitalGift from '@/components/invitation/junca-3d/JuncaDigitalGift';
import JuncaQrTicket from '@/components/invitation/junca-3d/JuncaQrTicket';
import JuncaClosingSection from '@/components/invitation/junca-3d/JuncaClosingSection';
import JuncaTurbineSound from '@/components/invitation/junca-3d/JuncaTurbineSound';
import { FAHREIZA_AMANDA_DATA } from '@/data/demoData';

function Junca3DContent() {
  const searchParams = useSearchParams();
  const guestNameParam = searchParams.get('to') || 'Tamu Undangan';

  const [hasCompletedIntro, setHasCompletedIntro] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Ambient romantic piano soundtrack
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

  const handleOpenInvitation = () => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlayingAudio(true))
        .catch(() => setIsPlayingAudio(false));
    }
  };

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
    <div className="min-h-screen bg-[#080808] text-[#FBFBFB] selection:bg-[#ED3327] selection:text-white">
      {/* 2.2-Second Typographic Curtain Preloader */}
      {!hasCompletedIntro && (
        <JuncaIntroAnimation onComplete={() => setHasCompletedIntro(true)} />
      )}

      {/* Floating Back Link to Catalog */}
      <div className="fixed top-4 left-4 z-40">
        <Link
          href="/"
          className="flex items-center gap-2 bg-[#121212]/90 backdrop-blur-md text-neutral-300 border border-white/20 text-xs font-mono font-semibold px-4 py-2.5 rounded-full shadow-2xl hover:bg-[#ED3327] hover:text-white transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Katalog (Junca Studio 3D)</span>
        </Link>
      </div>

      {/* ── GATE COVER OR MAIN CONTENT ── */}
      {!isOpen ? (
        <JuncaProfileIntro
          groom={FAHREIZA_AMANDA_DATA.groom}
          bride={FAHREIZA_AMANDA_DATA.bride}
          akad={FAHREIZA_AMANDA_DATA.akad}
          guestName={guestNameParam}
          onOpen={handleOpenInvitation}
        />
      ) : (
        <main className="relative w-full space-y-4 animate-fadeIn">
          {/* Signature 3-Blade Turbine Audio Controller */}
          <JuncaTurbineSound
            isPlaying={isPlayingAudio}
            onToggle={handleToggleAudio}
          />

          {/* 1. Couple Profile Showcase */}
          <JuncaGroomBride
            groom={FAHREIZA_AMANDA_DATA.groom}
            bride={FAHREIZA_AMANDA_DATA.bride}
          />

          {/* 2. Countdown Timer */}
          <JuncaCountdown targetDate="2026-11-21T08:00:00" />

          {/* 3. Event Itinerary Schedule */}
          <JuncaEventSchedule
            akad={FAHREIZA_AMANDA_DATA.akad}
            resepsi={FAHREIZA_AMANDA_DATA.resepsi}
          />

          {/* 4. Sacred Verse & Love Story */}
          <JuncaLoveStoryQuote stories={FAHREIZA_AMANDA_DATA.loveStories} />

          {/* 5. Photo & Media Gallery */}
          <JuncaPhotoGallery photos={FAHREIZA_AMANDA_DATA.galleryPhotos} />

          {/* 6. RSVP Protocol & Live Wishes Feed */}
          <JuncaRsvpForm initialGuestName={guestNameParam} />

          {/* 7. Cashless Envelope & Gift Tribute */}
          <JuncaDigitalGift bankAccounts={FAHREIZA_AMANDA_DATA.bankAccounts} />

          {/* 8. VIP Access Pass Check-In Ticket */}
          <JuncaQrTicket guestName={guestNameParam} />

          {/* 9. Editorial Colophon Closing */}
          <JuncaClosingSection
            groomName={FAHREIZA_AMANDA_DATA.groom.name}
            brideName={FAHREIZA_AMANDA_DATA.bride.name}
          />
        </main>
      )}
    </div>
  );
}

export default function Junca3DPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#080808]" />}>
      <Junca3DContent />
    </Suspense>
  );
}

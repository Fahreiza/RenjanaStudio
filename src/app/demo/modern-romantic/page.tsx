'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import CoverEnvelope from '@/components/invitation/CoverEnvelope';
import MusicPlayer from '@/components/invitation/MusicPlayer';
import HeaderBismillah from '@/components/invitation/HeaderBismillah';
import CoupleSection from '@/components/invitation/CoupleSection';
import CountdownTimer from '@/components/invitation/CountdownTimer';
import EventDetails from '@/components/invitation/EventDetails';
import LoveStory from '@/components/invitation/LoveStory';
import PhotoGallery from '@/components/invitation/PhotoGallery';
import RsvpForm from '@/components/invitation/RsvpForm';
import DigitalGift from '@/components/invitation/DigitalGift';
import ClosingSection from '@/components/invitation/ClosingSection';
import { FAHREIZA_AMANDA_DATA } from '@/data/demoData';

function InvitationContent() {
  const searchParams = useSearchParams();
  const guestNameParam = searchParams.get('to') || 'Tamu Undangan';

  const [isOpened, setIsOpened] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Royalty-free romantic piano audio URL
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
    setIsOpened(true);
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
    <div className="relative min-h-screen bg-[#FAF7F2] text-[#2D3748] overflow-x-hidden selection:bg-[#B76E79] selection:text-white">
      {/* Background Floral Textures */}
      <div className="fixed inset-0 opacity-10 pointer-events-none z-0">
        <Image
          src="/assets/images/BAHAN-TEMA-1-1-2.webp"
          alt="Texture Latar"
          fill
          className="object-cover"
        />
      </div>

      {/* Cover / Envelope Modal */}
      <CoverEnvelope
        groomName={FAHREIZA_AMANDA_DATA.groom.name}
        brideName={FAHREIZA_AMANDA_DATA.bride.name}
        eventDate={FAHREIZA_AMANDA_DATA.akad.date}
        guestName={guestNameParam}
        onOpen={handleOpenInvitation}
      />

      {/* Main Content Area */}
      {isOpened && (
        <div className="relative z-10 space-y-8 animate-fadeIn duration-1000">
          <MusicPlayer isPlaying={isPlayingAudio} onTogglePlay={handleToggleAudio} />

          {/* Banner Hero Undangan */}
          <section className="relative min-h-[90vh] flex flex-col items-center justify-between py-16 px-4 text-center overflow-hidden">
            {/* Top Floral Ornament */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-64 pointer-events-none opacity-80">
              <Image
                src="/assets/images/TEMA-01-BUNGA-01-co-1-2.png"
                alt="Floral Top"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>

            <div className="pt-20 space-y-2 z-10">
              <span className="text-xs uppercase tracking-[0.3em] text-[#8A9A86] font-semibold">
                Walimatul &apos;Ursy
              </span>
              <h1 className="font-cursive text-6xl sm:text-7xl md:text-8xl text-[#B76E79] drop-shadow-sm">
                {FAHREIZA_AMANDA_DATA.groom.name} <span className="font-serif-cormorant text-4xl text-[#8A9A86]">&amp;</span> {FAHREIZA_AMANDA_DATA.bride.name}
              </h1>
              <p className="font-serif-cormorant text-[#586955] text-lg font-medium tracking-widest pt-2">
                {FAHREIZA_AMANDA_DATA.akad.date}
              </p>
            </div>

            {/* Couple Cover Hero Image */}
            <div className="relative w-full max-w-sm h-80 sm:h-96 my-6 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 group">
              <Image
                src="/assets/images/hero-wedding.webp"
                alt="Fahreiza & Amanda"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
            </div>

            <p className="text-xs text-zinc-500 italic max-w-xs z-10">
              &ldquo;Dua hati, satu tujuan, dalam naungan kasih sayang Allah SWT.&rdquo;
            </p>
          </section>

          <HeaderBismillah />

          <CoupleSection
            groom={FAHREIZA_AMANDA_DATA.groom}
            bride={FAHREIZA_AMANDA_DATA.bride}
          />

          <CountdownTimer targetDateISO={FAHREIZA_AMANDA_DATA.eventDateISO} />

          <EventDetails
            akad={FAHREIZA_AMANDA_DATA.akad}
            resepsi={FAHREIZA_AMANDA_DATA.resepsi}
          />

          <LoveStory stories={FAHREIZA_AMANDA_DATA.loveStories} />

          <PhotoGallery photos={FAHREIZA_AMANDA_DATA.galleryPhotos} />

          <RsvpForm initialGuestName={guestNameParam} />

          <DigitalGift
            bankAccounts={FAHREIZA_AMANDA_DATA.bankAccounts}
            qrisUrl={FAHREIZA_AMANDA_DATA.qrisUrl}
            giftAddress={FAHREIZA_AMANDA_DATA.giftAddress}
          />

          <ClosingSection
            groomName={FAHREIZA_AMANDA_DATA.groom.name}
            brideName={FAHREIZA_AMANDA_DATA.bride.name}
          />
        </div>
      )}
    </div>
  );
}

export default function ModernRomanticPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
        <p className="text-sm font-semibold text-[#8A9A86] animate-pulse">Memuat Undangan...</p>
      </div>
    }>
      <InvitationContent />
    </Suspense>
  );
}

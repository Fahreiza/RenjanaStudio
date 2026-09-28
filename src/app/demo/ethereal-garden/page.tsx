'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowLeft, Volume2, VolumeX } from 'lucide-react';

import EtherealProfileIntro from '@/components/invitation/ethereal-garden/EtherealProfileIntro';
import EtherealIntroAnimation from '@/components/invitation/ethereal-garden/EtherealIntroAnimation';
import EtherealBotanicalBackground from '@/components/invitation/ethereal-garden/EtherealBotanicalBackground';
import EtherealHeroArch from '@/components/invitation/ethereal-garden/EtherealHeroArch';
import EtherealGroomBride from '@/components/invitation/ethereal-garden/EtherealGroomBride';
import EtherealEventSchedule from '@/components/invitation/ethereal-garden/EtherealEventSchedule';
import EtherealCountdown from '@/components/invitation/ethereal-garden/EtherealCountdown';
import EtherealLoveStoryQuote from '@/components/invitation/ethereal-garden/EtherealLoveStoryQuote';
import EtherealPhotoGallery from '@/components/invitation/ethereal-garden/EtherealPhotoGallery';
import EtherealRsvpForm from '@/components/invitation/ethereal-garden/EtherealRsvpForm';
import EtherealDigitalGift from '@/components/invitation/ethereal-garden/EtherealDigitalGift';
import EtherealQrTicket from '@/components/invitation/ethereal-garden/EtherealQrTicket';
import ClosingSection from '@/components/invitation/ClosingSection';
import { ADITYA_ALYA_DATA } from '@/data/demoData';

function playEtherealChimeSound() {
  try {
    const audio = new Audio(
      'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a83b27.mp3?filename=success-fanfare-trumpets-6185.mp3'
    );
    audio.volume = 0.65;
    audio.play().catch(() => {});
  } catch (err) {
    console.log('Audio chime error:', err);
  }
}

function EtherealGardenContent() {
  const searchParams = useSearchParams();
  const guestNameParam = searchParams.get('to') || 'Tamu Undangan';

  const [isOpened, setIsOpened] = useState(false);
  const [showIntroAnimation, setShowIntroAnimation] = useState(false);
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

  const handleOpenInvitation = () => {
    // 1. Show 2.2s intro animation and start background music & fanfare chime
    setShowIntroAnimation(true);
    setIsPlayingAudio(true);

    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }

    try {
      playEtherealChimeSound();
    } catch (e) {
      console.log('Chime sound ignored:', e);
    }

    // 2. Transition smoothly to main content
    setTimeout(() => {
      setShowIntroAnimation(false);
      setIsOpened(true);
    }, 2200);
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
    <div className="relative min-h-screen bg-[#F6F0E6] text-[#3F493D] overflow-x-hidden selection:bg-[#C7A76C] selection:text-white font-sans">
      {/* Botanical Eucalyptus & Ranunculus Floral Ambient Background */}
      <EtherealBotanicalBackground />

      {/* Floating Controls Bar */}
      <div className="fixed top-4 inset-x-4 z-40 flex items-center justify-between pointer-events-none max-w-5xl mx-auto">
        <Link
          href="/"
          className="pointer-events-auto flex items-center gap-2 bg-[#FAF7F2]/90 backdrop-blur-md text-[#3F493D] border border-[#C7A76C]/40 text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg hover:bg-[#3F493D] hover:text-[#FAF7F2] transition-all hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Katalog (Ethereal Garden)</span>
        </Link>

        {isOpened && (
          <button
            onClick={handleToggleAudio}
            className="pointer-events-auto flex items-center gap-2 bg-[#FAF7F2]/90 backdrop-blur-md text-[#3F493D] border border-[#C7A76C]/40 text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg hover:border-[#C7A76C] transition-all hover:scale-105 cursor-pointer"
          >
            {isPlayingAudio ? (
              <>
                <Volume2 className="w-4 h-4 text-[#C7A76C] animate-pulse" />
                <span className="hidden sm:inline">Musik Menyala</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-[#A7B09A]" />
                <span className="hidden sm:inline">Musik Dijeda</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* 1. Gate Cover Screen / Ivory Envelope */}
      {!isOpened && !showIntroAnimation && (
        <EtherealProfileIntro
          groomName={ADITYA_ALYA_DATA.groom.name}
          brideName={ADITYA_ALYA_DATA.bride.name}
          eventDate={ADITYA_ALYA_DATA.akad.date}
          guestName={guestNameParam}
          onOpen={handleOpenInvitation}
        />
      )}

      {/* 2. Splash Intro Animation (~2.2 seconds) */}
      <AnimatePresence>
        {showIntroAnimation && <EtherealIntroAnimation />}
      </AnimatePresence>

      {/* 3. Main Ethereal Garden Content */}
      {isOpened && (
        <div className="relative z-10 space-y-12 sm:space-y-16 py-8 animate-fadeIn duration-1000">
          {/* Double-Layer Arch Focal Hero */}
          <EtherealHeroArch
            groomName={ADITYA_ALYA_DATA.groom.name}
            brideName={ADITYA_ALYA_DATA.bride.name}
            eventDate={ADITYA_ALYA_DATA.akad.date}
          />

          {/* Groom & Bride Arch Profile Cards */}
          <EtherealGroomBride
            groom={ADITYA_ALYA_DATA.groom}
            bride={ADITYA_ALYA_DATA.bride}
          />

          {/* Event Schedule Akad & Resepsi Cards */}
          <EtherealEventSchedule
            akad={ADITYA_ALYA_DATA.akad}
            resepsi={ADITYA_ALYA_DATA.resepsi}
          />

          {/* Horizontal Countdown Timer */}
          <EtherealCountdown targetDateISO={ADITYA_ALYA_DATA.eventDateISO} />

          {/* Love Story Quote & Timeline */}
          <EtherealLoveStoryQuote stories={ADITYA_ALYA_DATA.loveStories} />

          {/* Photo Gallery & Lightbox */}
          <EtherealPhotoGallery photos={ADITYA_ALYA_DATA.galleryPhotos} />

          {/* RSVP Form & Guestbook */}
          <EtherealRsvpForm initialGuestName={guestNameParam} />

          {/* Digital Gift & Bank Accounts */}
          <EtherealDigitalGift
            bankAccounts={ADITYA_ALYA_DATA.bankAccounts}
            qrisUrl={ADITYA_ALYA_DATA.qrisUrl}
            giftAddress={ADITYA_ALYA_DATA.giftAddress}
          />

          {/* VIP Pass QR Ticket */}
          <EtherealQrTicket
            guestName={guestNameParam}
            eventDate={ADITYA_ALYA_DATA.akad.date}
            venueName={ADITYA_ALYA_DATA.akad.venue}
          />

          {/* Closing Section */}
          <ClosingSection
            groomName={ADITYA_ALYA_DATA.groom.name}
            brideName={ADITYA_ALYA_DATA.bride.name}
            accentColor="#C7A76C"
            themeName="Ethereal Garden (3D Double Arch Edition)"
            isLightTheme={true}
          />
        </div>
      )}
    </div>
  );
}

export default function EtherealGardenPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F6F0E6] flex items-center justify-center">
          <p className="text-sm font-semibold text-[#A7B09A] animate-pulse">
            Memuat Undangan Ethereal Garden...
          </p>
        </div>
      }
    >
      <EtherealGardenContent />
    </Suspense>
  );
}

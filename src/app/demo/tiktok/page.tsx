'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

import TikTokProfileIntro from '@/components/invitation/tiktok/TikTokProfileIntro';
import TikTokIntroAnimation from '@/components/invitation/tiktok/TikTokIntroAnimation';
import TikTokFeed from '@/components/invitation/tiktok/TikTokFeed';
import TikTokGroomBride from '@/components/invitation/tiktok/TikTokGroomBride';
import TikTokEventSchedule from '@/components/invitation/tiktok/TikTokEventSchedule';
import TikTokCountdown from '@/components/invitation/tiktok/TikTokCountdown';
import TikTokLoveStoryQuote from '@/components/invitation/tiktok/TikTokLoveStoryQuote';
import TikTokPhotoGallery from '@/components/invitation/tiktok/TikTokPhotoGallery';
import TikTokCommentRsvp from '@/components/invitation/tiktok/TikTokCommentRsvp';
import TikTokShopGift from '@/components/invitation/tiktok/TikTokShopGift';
import TikTokQrTicket from '@/components/invitation/tiktok/TikTokQrTicket';
import ClosingSection from '@/components/invitation/ClosingSection';
import MusicPlayer from '@/components/invitation/MusicPlayer';
import { FAHREIZA_AMANDA_DATA } from '@/data/demoData';

function playTikTokSound() {
  try {
    const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a83b27.mp3?filename=success-fanfare-trumpets-6185.mp3');
    audio.volume = 0.8;
    audio.play().catch(() => {});
  } catch (err) {
    console.log('Chime sound error:', err);
  }
}

function TikTokContent() {
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
    // 1. Show intro splash & start music
    setShowIntroAnimation(true);
    setIsPlayingAudio(true);

    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }

    try {
      playTikTokSound();
    } catch (e) {
      console.log('Chime sound error:', e);
    }

    // 2. Transition to main content after 2.2 seconds
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
    <div className="min-h-screen bg-black text-white selection:bg-[#00F2FE] selection:text-black relative font-sans">
      {/* 1. Cover Gate Screen */}
      {!isOpened && !showIntroAnimation && (
        <TikTokProfileIntro
          groomName={FAHREIZA_AMANDA_DATA.groom.name}
          brideName={FAHREIZA_AMANDA_DATA.bride.name}
          groomPhoto={FAHREIZA_AMANDA_DATA.groom.photoUrl}
          bridePhoto={FAHREIZA_AMANDA_DATA.bride.photoUrl}
          eventDate={FAHREIZA_AMANDA_DATA.akad.date}
          guestName={guestNameParam}
          onOpen={handleOpenInvitation}
        />
      )}

      {/* 2. TikTok Music Note Splash Screen */}
      <AnimatePresence>
        {showIntroAnimation && <TikTokIntroAnimation />}
      </AnimatePresence>

      {/* 3. Main WeddingTok Content */}
      {isOpened && (
        <div className="pb-16 space-y-8 py-4 px-2">
          {/* Top Floating Back to Home Link */}
          <div className="fixed top-4 right-4 z-40">
            <Link
              href="/"
              className="flex items-center gap-2 bg-[#FE2C55] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg hover:bg-pink-600 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>HOME</span>
            </Link>
          </div>

          {/* TikTok FYP Video Player & Feed */}
          <TikTokFeed
            groom={FAHREIZA_AMANDA_DATA.groom}
            bride={FAHREIZA_AMANDA_DATA.bride}
            akad={FAHREIZA_AMANDA_DATA.akad}
            guestName={guestNameParam}
          />

          {/* Mempelai Pria & Wanita Profile Cards */}
          <TikTokGroomBride
            groom={FAHREIZA_AMANDA_DATA.groom}
            bride={FAHREIZA_AMANDA_DATA.bride}
          />

          {/* Rangkaian Acara (Akad & Resepsi) */}
          <TikTokEventSchedule
            akad={FAHREIZA_AMANDA_DATA.akad}
            resepsi={FAHREIZA_AMANDA_DATA.resepsi}
          />

          {/* Horizontal Countdown Timer */}
          <TikTokCountdown targetDateISO={FAHREIZA_AMANDA_DATA.eventDateISO} />

          {/* Quranic Quote & Love Story Timeline */}
          <TikTokLoveStoryQuote />

          {/* TikTok Photo & Video Gallery */}
          <TikTokPhotoGallery photos={FAHREIZA_AMANDA_DATA.galleryPhotos} />

          {/* TikTok Live Comment Drawer RSVP */}
          <TikTokCommentRsvp initialGuestName={guestNameParam} />

          {/* TikTok Shop Showcase Digital Gift Registry */}
          <TikTokShopGift
            bankAccounts={FAHREIZA_AMANDA_DATA.bankAccounts}
            qrisUrl={FAHREIZA_AMANDA_DATA.qrisUrl}
            giftAddress={FAHREIZA_AMANDA_DATA.giftAddress}
          />

          {/* VIP Pass QR Code Ticket */}
          <TikTokQrTicket
            groomName={FAHREIZA_AMANDA_DATA.groom.name}
            brideName={FAHREIZA_AMANDA_DATA.bride.name}
            eventDate={FAHREIZA_AMANDA_DATA.akad.date}
            venueName={FAHREIZA_AMANDA_DATA.akad.venue}
            guestName={guestNameParam}
          />

          {/* Closing Section with Matching Cyan Accent */}
          <ClosingSection
            groomName={FAHREIZA_AMANDA_DATA.groom.name}
            brideName={FAHREIZA_AMANDA_DATA.bride.name}
            accentColor="#00F2FE"
            themeName="TikTok Edition"
          />

          {/* Music Player Bar */}
          <MusicPlayer isPlaying={isPlayingAudio} onTogglePlay={handleToggleAudio} />
        </div>
      )}
    </div>
  );
}

export default function TikTokPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center text-white">
          <p className="text-sm font-semibold text-[#00F2FE] animate-pulse">Memuat WeddingTok...</p>
        </div>
      }
    >
      <TikTokContent />
    </Suspense>
  );
}

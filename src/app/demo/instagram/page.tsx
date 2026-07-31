'use client';

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

import InstagramProfileIntro from '@/components/invitation/instagram/InstagramProfileIntro';
import InstagramIntroAnimation from '@/components/invitation/instagram/InstagramIntroAnimation';
import InstagramHeader from '@/components/invitation/instagram/InstagramHeader';
import InstagramFeed from '@/components/invitation/instagram/InstagramFeed';
import InstagramCountdown from '@/components/invitation/instagram/InstagramCountdown';
import InstagramReels from '@/components/invitation/instagram/InstagramReels';
import InstagramDmRsvp from '@/components/invitation/instagram/InstagramDmRsvp';
import InstagramShopGift from '@/components/invitation/instagram/InstagramShopGift';
import InstagramQrTicket from '@/components/invitation/instagram/InstagramQrTicket';
import ClosingSection from '@/components/invitation/ClosingSection';
import MusicPlayer from '@/components/invitation/MusicPlayer';
import { FAHREIZA_AMANDA_DATA } from '@/data/demoData';

function playInstagramChimeSound() {
  try {
    const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a83b27.mp3?filename=success-fanfare-trumpets-6185.mp3');
    audio.volume = 0.8;
    audio.play().catch(() => {});
  } catch (err) {
    console.log('Chime sound error:', err);
  }
}

export default function InstagramPage() {
  const [guestName, setGuestName] = useState('Tamu Undangan');
  const [isOpened, setIsOpened] = useState(false);
  const [showIntroAnimation, setShowIntroAnimation] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const toParam = params.get('to');
      if (toParam) {
        setGuestName(toParam);
      }
    }

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
      playInstagramChimeSound();
    } catch (e) {
      console.log('Chime sound error:', e);
    }

    // 2. Transition to main invitation content after 2.2 seconds
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
    <main className="min-h-screen bg-black text-white selection:bg-[#E4405F] selection:text-white relative font-sans">
      {/* 1. Profile Gate Cover Screen */}
      {!isOpened && !showIntroAnimation && (
        <InstagramProfileIntro
          groomName={FAHREIZA_AMANDA_DATA.groom.name}
          brideName={FAHREIZA_AMANDA_DATA.bride.name}
          groomPhoto={FAHREIZA_AMANDA_DATA.groom.photoUrl}
          bridePhoto={FAHREIZA_AMANDA_DATA.bride.photoUrl}
          eventDate={FAHREIZA_AMANDA_DATA.akad.date}
          guestName={guestName}
          onOpen={handleOpenInvitation}
        />
      )}

      {/* 2. Instagram Story Shutter Splash Screen */}
      <AnimatePresence>
        {showIntroAnimation && <InstagramIntroAnimation />}
      </AnimatePresence>

      {/* 3. Main WeddingGram Interface */}
      {isOpened && (
        <div className="pb-16 space-y-8">
          {/* Header Profile & Story Highlights */}
          <InstagramHeader
            groom={FAHREIZA_AMANDA_DATA.groom}
            bride={FAHREIZA_AMANDA_DATA.bride}
            akad={FAHREIZA_AMANDA_DATA.akad}
            resepsi={FAHREIZA_AMANDA_DATA.resepsi}
            guestName={guestName}
          />

          {/* Countdown Sticker & Calendar */}
          <InstagramCountdown targetDateISO={FAHREIZA_AMANDA_DATA.eventDateISO} />

          {/* 3-Column Post Feed Grid & Lightbox */}
          <InstagramFeed
            akad={FAHREIZA_AMANDA_DATA.akad}
            resepsi={FAHREIZA_AMANDA_DATA.resepsi}
          />

          {/* Instagram Reels Highlights Gallery */}
          <InstagramReels photos={FAHREIZA_AMANDA_DATA.galleryPhotos} />

          {/* Instagram Direct Message (DM) Chat RSVP */}
          <InstagramDmRsvp initialGuestName={guestName} />

          {/* Instagram Shop Digital Gift Registry */}
          <InstagramShopGift
            bankAccounts={FAHREIZA_AMANDA_DATA.bankAccounts}
            qrisUrl={FAHREIZA_AMANDA_DATA.qrisUrl}
            giftAddress={FAHREIZA_AMANDA_DATA.giftAddress}
          />

          {/* VIP Pass Nametag QR Code Ticket */}
          <InstagramQrTicket
            groomName={FAHREIZA_AMANDA_DATA.groom.name}
            brideName={FAHREIZA_AMANDA_DATA.bride.name}
            eventDate={FAHREIZA_AMANDA_DATA.akad.date}
            venueName={FAHREIZA_AMANDA_DATA.akad.venue}
            guestName={guestName}
          />

          {/* Closing Section */}
          <ClosingSection
            groomName={FAHREIZA_AMANDA_DATA.groom.name}
            brideName={FAHREIZA_AMANDA_DATA.bride.name}
            accentColor="#E1306C"
            themeName="Instagram Edition"
          />

          {/* Music Floating Player Bar */}
          <MusicPlayer isPlaying={isPlayingAudio} onTogglePlay={handleToggleAudio} />
        </div>
      )}
    </main>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

import YouTubeProfileIntro from '@/components/invitation/youtube/YouTubeProfileIntro';
import YouTubeIntroAnimation from '@/components/invitation/youtube/YouTubeIntroAnimation';
import YouTubeAppShell from '@/components/invitation/youtube/YouTubeAppShell';
import YouTubeHero from '@/components/invitation/youtube/YouTubeHero';
import YouTubeCountdown from '@/components/invitation/youtube/YouTubeCountdown';
import YouTubeShortsGallery from '@/components/invitation/youtube/YouTubeShortsGallery';
import YouTubeCommentsRsvp from '@/components/invitation/youtube/YouTubeCommentsRsvp';
import YouTubeGiftMembership from '@/components/invitation/youtube/YouTubeGiftMembership';
import YouTubeQrTicket from '@/components/invitation/youtube/YouTubeQrTicket';
import ClosingSection from '@/components/invitation/ClosingSection';
import { FAHREIZA_AMANDA_DATA } from '@/data/demoData';

function playYouTubeChimeSound() {
  try {
    const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a83b27.mp3?filename=success-fanfare-trumpets-6185.mp3');
    audio.volume = 0.8;
    audio.play().catch(() => {});
  } catch (err) {
    console.log('Audio chime error:', err);
  }
}

export default function YouTubePage() {
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
      playYouTubeChimeSound();
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
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#FF0000] selection:text-white relative font-sans">
      {/* 1. Who's Watching Profile Cover Screen */}
      {!isOpened && !showIntroAnimation && (
        <YouTubeProfileIntro
          groomName={FAHREIZA_AMANDA_DATA.groom.name}
          brideName={FAHREIZA_AMANDA_DATA.bride.name}
          groomPhoto={FAHREIZA_AMANDA_DATA.groom.photoUrl}
          bridePhoto={FAHREIZA_AMANDA_DATA.bride.photoUrl}
          eventDate={FAHREIZA_AMANDA_DATA.akad.date}
          guestName={guestName}
          onOpen={handleOpenInvitation}
        />
      )}

      {/* 2. YouTube Red Play Intro Splash Screen */}
      <AnimatePresence>
        {showIntroAnimation && <YouTubeIntroAnimation />}
      </AnimatePresence>

      {/* 3. Main YouTube Invitation Content Inside WedTube App Interface Shell */}
      {isOpened && (
        <YouTubeAppShell guestName={guestName}>
          <div className="space-y-10 pb-16">
            {/* 1. Main YouTube Premiere Video Hero Player */}
            <div id="sec-hero">
              <YouTubeHero
                groom={FAHREIZA_AMANDA_DATA.groom}
                bride={FAHREIZA_AMANDA_DATA.bride}
                akad={FAHREIZA_AMANDA_DATA.akad}
                resepsi={FAHREIZA_AMANDA_DATA.resepsi}
                loveStories={FAHREIZA_AMANDA_DATA.loveStories}
                galleryPhotos={FAHREIZA_AMANDA_DATA.galleryPhotos}
                guestName={guestName}
                isPlayingMusic={isPlayingAudio}
                onToggleMusic={handleToggleAudio}
              />
            </div>

            {/* 2. YouTube Live Stream Premiere Countdown Bar */}
            <YouTubeCountdown targetDateISO={FAHREIZA_AMANDA_DATA.eventDateISO} />

            {/* 3. YouTube Shorts Gallery */}
            <YouTubeShortsGallery photos={FAHREIZA_AMANDA_DATA.galleryPhotos} />

            {/* 4. YouTube Live Chat / Comments RSVP Form & Stream */}
            <YouTubeCommentsRsvp initialGuestName={guestName} />

            {/* 5. YouTube Super Thanks / Channel Membership Digital Gift */}
            <YouTubeGiftMembership
              bankAccounts={FAHREIZA_AMANDA_DATA.bankAccounts}
              qrisUrl={FAHREIZA_AMANDA_DATA.qrisUrl}
              giftAddress={FAHREIZA_AMANDA_DATA.giftAddress}
            />

            {/* 6. YouTube VIP Premiere Check-In Pass */}
            <YouTubeQrTicket
              groomName={FAHREIZA_AMANDA_DATA.groom.name}
              brideName={FAHREIZA_AMANDA_DATA.bride.name}
              eventDate={FAHREIZA_AMANDA_DATA.akad.date}
              venueName={FAHREIZA_AMANDA_DATA.akad.venue}
              guestName={guestName}
            />

            {/* 7. Closing Section */}
            <ClosingSection
              groomName={FAHREIZA_AMANDA_DATA.groom.name}
              brideName={FAHREIZA_AMANDA_DATA.bride.name}
              accentColor="#FF0000"
              themeName="RenjanaTube"
            />
          </div>
        </YouTubeAppShell>
      )}
    </main>
  );
}

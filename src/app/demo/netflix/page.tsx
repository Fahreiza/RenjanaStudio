'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import NetflixProfileIntro from '@/components/invitation/netflix/NetflixProfileIntro';
import NetflixIntroAnimation from '@/components/invitation/netflix/NetflixIntroAnimation';
import NetflixHero from '@/components/invitation/netflix/NetflixHero';
import NetflixCountdown from '@/components/invitation/netflix/NetflixCountdown';
import NetflixCast from '@/components/invitation/netflix/NetflixCast';
import NetflixQuotes from '@/components/invitation/netflix/NetflixQuotes';
import NetflixEpisodes from '@/components/invitation/netflix/NetflixEpisodes';
import NetflixTrendingGallery from '@/components/invitation/netflix/NetflixTrendingGallery';
import NetflixReviews from '@/components/invitation/netflix/NetflixReviews';
import NetflixRsvp from '@/components/invitation/netflix/NetflixRsvp';
import NetflixGift from '@/components/invitation/netflix/NetflixGift';
import NetflixVipTicket from '@/components/invitation/netflix/NetflixVipTicket';
import NetflixClosing from '@/components/invitation/netflix/NetflixClosing';
import MusicPlayer from '@/components/invitation/MusicPlayer';
import { FAHREIZA_AMANDA_DATA } from '@/data/demoData';

function playAuthenticTaDumSound() {
  try {
    // Play Official Netflix Intro Sound MP3 (myinstants link exact audio)
    const taDumAudio = new Audio('/assets/audio/netflix-ta-dum.mp3');
    taDumAudio.volume = 1.0;
    taDumAudio.play().catch(() => {
      // Fallback to direct web link
      const fallbackAudio = new Audio('https://www.myinstants.com/media/sounds/nouveau-jingle-netflix.mp3');
      fallbackAudio.volume = 1.0;
      fallbackAudio.play().catch(() => { });
    });
  } catch (err) {
    console.log('Audio error:', err);
  }
}

function NetflixContent() {
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

  const handleSelectProfile = () => {
    // 1. Play Exact Official Netflix TA-DUM Sound
    playAuthenticTaDumSound();

    // 2. Show Red Ribbon Logo "N" Splash Screen
    setShowIntroAnimation(true);

    // 3. After 2.5 seconds, transition to main invitation content & start background music
    setTimeout(() => {
      setShowIntroAnimation(false);
      setIsOpened(true);
      setIsPlayingAudio(true);
      if (audioRef.current) {
        audioRef.current.play().catch((err) => console.log('Audio autoplay prevented:', err));
      }
    }, 2500);
  };

  const handleToggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      audioRef.current.play().catch((err) => console.log('Audio play error:', err));
      setIsPlayingAudio(true);
    }
  };

  return (
    <main className="min-h-screen bg-[#141414] text-white font-sans selection:bg-[#E50914] selection:text-white relative overflow-hidden">
      {/* 1. Who's Watching Profile Selector */}
      {!isOpened && !showIntroAnimation && (
        <NetflixProfileIntro
          guestName={guestNameParam}
          onOpen={handleSelectProfile}
        />
      )}

      {/* 2. Iconic Netflix Logo N & TA-DUM Intro Splash Screen */}
      <AnimatePresence>
        {showIntroAnimation && (
          <NetflixIntroAnimation />
        )}
      </AnimatePresence>

      {/* 3. Main Netflix Content (Revealed after intro) */}
      {isOpened && (
        <div className="relative z-10 space-y-4 md:space-y-6 animate-fadeIn duration-1000 pb-16">
          <MusicPlayer isPlaying={isPlayingAudio} onTogglePlay={handleToggleAudio} />

          {/* Hero Banner Poster */}
          <NetflixHero
            groom={FAHREIZA_AMANDA_DATA.groom}
            bride={FAHREIZA_AMANDA_DATA.bride}
            eventDate={FAHREIZA_AMANDA_DATA.akad.date}
          />

          {/* Countdown & Calendar */}
          <NetflixCountdown targetDateISO={FAHREIZA_AMANDA_DATA.eventDateISO} />

          {/* Groom & Bride Cast Cards */}
          <NetflixCast
            groom={FAHREIZA_AMANDA_DATA.groom}
            bride={FAHREIZA_AMANDA_DATA.bride}
          />

          {/* Romantic Quotes */}
          <NetflixQuotes />

          {/* Episodes Breakdown */}
          <NetflixEpisodes
            loveStories={FAHREIZA_AMANDA_DATA.loveStories}
            akad={FAHREIZA_AMANDA_DATA.akad}
            resepsi={FAHREIZA_AMANDA_DATA.resepsi}
          />

          {/* Top 10 Trending Gallery */}
          <NetflixTrendingGallery />

          {/* Audience Reviews */}
          <NetflixReviews />

          {/* RSVP Attendance */}
          <NetflixRsvp initialGuestName={guestNameParam} />

          {/* Digital Envelope Gift */}
          <NetflixGift bankAccounts={FAHREIZA_AMANDA_DATA.bankAccounts} />

          {/* VIP Pass QR Code Ticket */}
          <NetflixVipTicket
            groomName={FAHREIZA_AMANDA_DATA.groom.name}
            brideName={FAHREIZA_AMANDA_DATA.bride.name}
            eventDate={FAHREIZA_AMANDA_DATA.akad.date}
            venueName={FAHREIZA_AMANDA_DATA.akad.venue}
            guestName={guestNameParam}
          />

          {/* Closing Love Note */}
          <NetflixClosing
            groomName={FAHREIZA_AMANDA_DATA.groom.name}
            brideName={FAHREIZA_AMANDA_DATA.bride.name}
          />
        </div>
      )}
    </main>
  );
}

export default function NetflixDemoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#141414] text-white flex items-center justify-center font-mono text-sm">
          Loading Netflix Invitation...
        </div>
      }
    >
      <NetflixContent />
    </Suspense>
  );
}

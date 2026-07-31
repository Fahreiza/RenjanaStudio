'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

import SpotifyProfileIntro from '@/components/invitation/spotify/SpotifyProfileIntro';
import SpotifyIntroAnimation from '@/components/invitation/spotify/SpotifyIntroAnimation';
import SpotifyAlbumHero from '@/components/invitation/spotify/SpotifyAlbumHero';
import SpotifyCountdown from '@/components/invitation/spotify/SpotifyCountdown';
import SpotifyArtistProfile from '@/components/invitation/spotify/SpotifyArtistProfile';
import SpotifyLyricsSection from '@/components/invitation/spotify/SpotifyLyricsSection';
import SpotifyTracklist from '@/components/invitation/spotify/SpotifyTracklist';
import SpotifyReviews from '@/components/invitation/spotify/SpotifyReviews';
import SpotifyQrTicket from '@/components/invitation/spotify/SpotifyQrTicket';
import SpotifyPlayerBar from '@/components/invitation/spotify/SpotifyPlayerBar';
import SpotifyGallery from '@/components/invitation/spotify/SpotifyGallery';
import SpotifyRsvp from '@/components/invitation/spotify/SpotifyRsvp';
import SpotifyGift from '@/components/invitation/spotify/SpotifyGift';
import SpotifyAppShell from '@/components/invitation/spotify/SpotifyAppShell';
import ClosingSection from '@/components/invitation/ClosingSection';
import { FAHREIZA_AMANDA_DATA } from '@/data/demoData';

function playSpotifyChimeSound() {
  try {
    const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a83b27.mp3?filename=success-fanfare-trumpets-6185.mp3');
    audio.volume = 0.8;
    audio.play().catch(() => {});
  } catch (err) {
    console.log('Audio chime error:', err);
  }
}

export default function SpotifyPage() {
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
    // 1. Show intro animation splash & start audio
    setShowIntroAnimation(true);
    setIsPlayingAudio(true);

    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }

    try {
      playSpotifyChimeSound();
    } catch (e) {
      console.log('Chime sound ignored:', e);
    }

    // 2. Transition to main invitation content after 2.2 seconds intro animation
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
    <main className="min-h-screen bg-[#000000] text-white selection:bg-[#1DB954] selection:text-black relative font-sans">
      {/* 1. Who's Listening Profile Gate Screen Overlay */}
      {!isOpened && !showIntroAnimation && (
        <SpotifyProfileIntro
          groomName={FAHREIZA_AMANDA_DATA.groom.name}
          brideName={FAHREIZA_AMANDA_DATA.bride.name}
          groomPhoto={FAHREIZA_AMANDA_DATA.groom.photoUrl}
          bridePhoto={FAHREIZA_AMANDA_DATA.bride.photoUrl}
          eventDate={FAHREIZA_AMANDA_DATA.akad.date}
          guestName={guestName}
          onOpen={handleOpenInvitation}
        />
      )}

      {/* 2. Spotify Logo Intro Splash Screen */}
      <AnimatePresence>
        {showIntroAnimation && <SpotifyIntroAnimation />}
      </AnimatePresence>

      {/* 3. Main Spotify Invitation Content Inside Spotify App Interface Shell */}
      {isOpened && (
        <SpotifyAppShell guestName={guestName}>
          <div className="relative z-10 space-y-6 pb-28 animate-fadeIn duration-1000">
            {/* Floating Mobile Catalog Button */}
            <div className="fixed top-4 right-4 z-40 lg:hidden">
              <Link
                href="/"
                className="flex items-center gap-2 bg-[#1DB954] text-black font-extrabold text-xs px-4 py-2 rounded-full shadow-2xl hover:bg-[#1ed760] transition-all hover:scale-105"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Katalog</span>
              </Link>
            </div>

            {/* Hero Album Banner Header */}
            <div id="sec-hero">
              <SpotifyAlbumHero
                groom={FAHREIZA_AMANDA_DATA.groom}
                bride={FAHREIZA_AMANDA_DATA.bride}
                eventDate={FAHREIZA_AMANDA_DATA.akad.date}
                isPlaying={isPlayingAudio}
                onTogglePlay={handleToggleAudio}
                guestName={guestName}
              />
            </div>

            {/* Release Countdown Track Seek Bar */}
            <SpotifyCountdown targetDateISO={FAHREIZA_AMANDA_DATA.eventDateISO} />

            {/* Verified Artists Profiles (Groom & Bride) */}
            <SpotifyArtistProfile
              groom={FAHREIZA_AMANDA_DATA.groom}
              bride={FAHREIZA_AMANDA_DATA.bride}
            />

            {/* Spotify Real-Time Lyrics (Ar-Rum 21) */}
            <div id="sec-lyrics">
              <SpotifyLyricsSection />
            </div>

            {/* Tracklist Schedule (Akad, Resepsi & Love Story) */}
            <div id="sec-tracklist">
              <SpotifyTracklist
                akad={FAHREIZA_AMANDA_DATA.akad}
                resepsi={FAHREIZA_AMANDA_DATA.resepsi}
                stories={FAHREIZA_AMANDA_DATA.loveStories}
              />
            </div>

            {/* Photo Gallery Album Horizontal Scroll */}
            <div id="sec-gallery">
              <SpotifyGallery photos={FAHREIZA_AMANDA_DATA.galleryPhotos} />
            </div>

            {/* Fan Wishes & Reviews */}
            <div id="sec-reviews">
              <SpotifyReviews />
            </div>

            {/* RSVP Attendance Form (Spotify Style) */}
            <div id="sec-rsvp">
              <SpotifyRsvp initialGuestName={guestName} />
            </div>

            {/* Digital Envelope / Gift (Spotify Style) */}
            <div id="sec-gift">
              <SpotifyGift
                bankAccounts={FAHREIZA_AMANDA_DATA.bankAccounts}
                qrisUrl={FAHREIZA_AMANDA_DATA.qrisUrl}
                giftAddress={FAHREIZA_AMANDA_DATA.giftAddress}
              />
            </div>

            {/* VIP Guest Check-In Ticket with QR Code */}
            <SpotifyQrTicket
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
              accentColor="#1DB954"
              themeName="Spotify Edition"
            />

            {/* Floating Bottom Spotify Player Bar */}
            <SpotifyPlayerBar
              isPlaying={isPlayingAudio}
              onTogglePlay={handleToggleAudio}
              trackTitle={`Married Together (${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name})`}
              artistName="Renjanafy Verified Records"
              coverPhotoUrl="/assets/images/hero-wedding.webp"
            />
          </div>
        </SpotifyAppShell>
      )}
    </main>
  );
}

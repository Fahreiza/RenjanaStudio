'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';

import ChineseProfileIntro from '@/components/invitation/chinese/ChineseProfileIntro';
import ChineseIntroAnimation from '@/components/invitation/chinese/ChineseIntroAnimation';
import ChineseHero from '@/components/invitation/chinese/ChineseHero';
import ChineseGroomBride from '@/components/invitation/chinese/ChineseGroomBride';
import ChineseAnimatedBackground from '@/components/invitation/chinese/ChineseAnimatedBackground';
import ChineseEventSchedule from '@/components/invitation/chinese/ChineseEventSchedule';
import ChineseGreeting from '@/components/invitation/chinese/ChineseGreeting';
import ChineseCountdown from '@/components/invitation/chinese/ChineseCountdown';
import ChineseLoveStoryQuote from '@/components/invitation/chinese/ChineseLoveStoryQuote';
import ChinesePhotoGallery from '@/components/invitation/chinese/ChinesePhotoGallery';
import ChineseRsvpForm from '@/components/invitation/chinese/ChineseRsvpForm';
import ChineseDigitalGift from '@/components/invitation/chinese/ChineseDigitalGift';

import ClosingSection from '@/components/invitation/ClosingSection';
import MusicPlayer from '@/components/invitation/MusicPlayer';

import { FAHREIZA_AMANDA_DATA } from '@/data/demoData';

function ChineseContent() {
  const searchParams = useSearchParams();
  const guestNameParam = searchParams.get('to') || 'Tamu Undangan';

  const [isOpen, setIsOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(false);

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

  const handleOpenInvitation = async () => {
    // Attempt to enter fullscreen mode for immersive experience
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      }
    } catch (error) {
      console.log('Fullscreen API is not supported or was denied.');
    }

    setShowSplash(true);
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlayingAudio(true))
        .catch(() => setIsPlayingAudio(false));
    }

    setTimeout(() => {
      setShowSplash(false);
      setIsOpen(true);
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
    <div className="flex w-full min-h-screen bg-[#8A151B] text-[#D4AF37] selection:bg-[#D4AF37] selection:text-[#8A151B] font-serif overflow-hidden">
      
      {/* ── LEFT PANEL (DESKTOP ONLY) ── */}
      <div className="hidden lg:flex lg:w-[60%] lg:h-screen lg:sticky lg:top-0 relative items-center justify-center bg-[#8A151B] border-r border-[#D4AF37]/40 shadow-2xl">
        
        {/* Main Background Image */}
        <div className="absolute inset-0 w-full h-full opacity-80 mix-blend-overlay">
          <Image
            src="/assets/images/chinese_dragon_bg.png"
            alt="Chinese Oriental Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Elegant Text Overlay on Left Panel */}
        <div className="relative z-10 text-center space-y-6 bg-[#8A151B]/80 backdrop-blur-md p-16 rounded-sm border-2 border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.3)]">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 text-[#D4AF37] opacity-80 flex items-center justify-center">
            {/* Double Happiness 囍 */}
            <span className="text-6xl font-bold font-sans">囍</span>
          </div>
          <h2 className="text-3xl font-serif text-[#D4AF37] mb-4 uppercase tracking-[0.3em] pt-4">The Wedding of</h2>
          <div className="text-6xl text-[#FDFBF7] font-serif tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Fahreiza <span className="text-[#D4AF37] px-2 text-4xl">&</span> Amanda
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL (SCROLLABLE CONTENT) ── */}
      <div className="w-full lg:w-[40%] h-screen overflow-y-auto relative scroll-smooth shadow-[-10px_0_30px_rgba(0,0,0,0.03)] z-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* Animated Golden Dragon & Clouds Background */}
        <ChineseAnimatedBackground />

        {/* 1. Cover Envelope Screen (Acts as overlay on right panel) */}
        {!isOpen && !showSplash && (
          <div className="absolute inset-0 z-50">
            <ChineseProfileIntro
              guestName={guestNameParam}
              groomName={FAHREIZA_AMANDA_DATA.groom.name}
              brideName={FAHREIZA_AMANDA_DATA.bride.name}
              weddingDate={FAHREIZA_AMANDA_DATA.akad.date}
              venueName={FAHREIZA_AMANDA_DATA.akad.venue}
              onOpenInvitation={handleOpenInvitation}
            />
          </div>
        )}

        {/* 2. Splash Animation (2.2s) */}
        <AnimatePresence>
          {showSplash && (
            <div className="absolute inset-0 z-50">
              <ChineseIntroAnimation />
            </div>
          )}
        </AnimatePresence>

        {/* 3. Main Chinese Invitation Content */}
        {isOpen && (
          <div className="min-h-screen relative z-10 pb-16">
            <MusicPlayer isPlaying={isPlayingAudio} onTogglePlay={handleToggleAudio} />

            {/* Navigation Bar */}
            <header className="sticky top-0 z-40 bg-[#8A151B]/95 border-b-2 border-[#D4AF37]/50 px-4 py-3 flex items-center justify-between backdrop-blur-md shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
              <Link href="/" className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#D4AF37] hover:text-[#FDFBF7] transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Katalog</span>
              </Link>
              <span className="font-serif text-[11px] text-[#FDFBF7] font-bold tracking-widest flex items-center gap-1.5 uppercase drop-shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                Oriental Edition
              </span>
            </header>

            {/* Main Hero Section */}
            <ChineseHero
              groomName={FAHREIZA_AMANDA_DATA.groom.name}
              brideName={FAHREIZA_AMANDA_DATA.bride.name}
              weddingDate={FAHREIZA_AMANDA_DATA.akad.date}
            />

            {/* Continuous Content Container */}
            <div className="relative w-full z-20 flex flex-col pb-12 gap-8">
              <div className="mx-4 rounded-sm bg-transparent border-y border-[#D4AF37]/30 py-6">
                <ChineseGreeting />
              </div>

            <ChineseGroomBride
              groom={{
                name: FAHREIZA_AMANDA_DATA.groom.name,
                fullName: FAHREIZA_AMANDA_DATA.groom.fullName,
                parents: FAHREIZA_AMANDA_DATA.groom.parentInfo,
                image: FAHREIZA_AMANDA_DATA.groom.photoUrl,
                instagram: FAHREIZA_AMANDA_DATA.groom.instagram,
              }}
              bride={{
                name: FAHREIZA_AMANDA_DATA.bride.name,
                fullName: FAHREIZA_AMANDA_DATA.bride.fullName,
                parents: FAHREIZA_AMANDA_DATA.bride.parentInfo,
                image: FAHREIZA_AMANDA_DATA.bride.photoUrl,
                instagram: FAHREIZA_AMANDA_DATA.bride.instagram,
              }}
            />

            <ChineseEventSchedule
              akad={{
                title: FAHREIZA_AMANDA_DATA.akad.title,
                date: FAHREIZA_AMANDA_DATA.akad.date,
                time: FAHREIZA_AMANDA_DATA.akad.time,
                venue: FAHREIZA_AMANDA_DATA.akad.venue,
                address: FAHREIZA_AMANDA_DATA.akad.address,
                mapUrl: FAHREIZA_AMANDA_DATA.akad.googleMapsUrl,
              }}
              resepsi={{
                title: FAHREIZA_AMANDA_DATA.resepsi.title,
                date: FAHREIZA_AMANDA_DATA.resepsi.date,
                time: FAHREIZA_AMANDA_DATA.resepsi.time,
                venue: FAHREIZA_AMANDA_DATA.resepsi.venue,
                address: FAHREIZA_AMANDA_DATA.resepsi.address,
                mapUrl: FAHREIZA_AMANDA_DATA.resepsi.googleMapsUrl,
              }}
            />

            <ChineseCountdown targetDate={FAHREIZA_AMANDA_DATA.eventDateISO} />

            <ChineseLoveStoryQuote timeline={FAHREIZA_AMANDA_DATA.loveStories} />

            <ChinesePhotoGallery
              photos={FAHREIZA_AMANDA_DATA.galleryPhotos}
              coupleNames={`${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`}
            />

            <ChineseRsvpForm initialGuestName={guestNameParam} />

            <ChineseDigitalGift
              bankAccounts={FAHREIZA_AMANDA_DATA.bankAccounts}
              qrisUrl={FAHREIZA_AMANDA_DATA.qrisUrl}
              giftAddress={{
                recipient: `${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`,
                address: FAHREIZA_AMANDA_DATA.giftAddress,
                phone: '0812-3456-7890',
              }}
            />
            </div>

            <ClosingSection
              groomName={FAHREIZA_AMANDA_DATA.groom.name}
              brideName={FAHREIZA_AMANDA_DATA.bride.name}
              accentColor="#D4AF37"
              themeName="Oriental Edition"
              isLightTheme={false}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function ChineseDemoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#8A151B] flex items-center justify-center text-[#D4AF37]">
          <p className="text-sm font-semibold tracking-widest uppercase animate-pulse drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">
            Memuat Oriental Edition...
          </p>
        </div>
      }
    >
      <ChineseContent />
    </Suspense>
  );
}

'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';

import TerracottaProfileIntro from '@/components/invitation/terracotta/TerracottaProfileIntro';
import TerracottaIntroAnimation from '@/components/invitation/terracotta/TerracottaIntroAnimation';
import TerracottaHero from '@/components/invitation/terracotta/TerracottaHero';
import TerracottaGroomBride from '@/components/invitation/terracotta/TerracottaGroomBride';
import TerracottaEventSchedule from '@/components/invitation/terracotta/TerracottaEventSchedule';
import TerracottaCountdown from '@/components/invitation/terracotta/TerracottaCountdown';
import TerracottaLoveStoryQuote from '@/components/invitation/terracotta/TerracottaLoveStoryQuote';
import TerracottaPhotoGallery from '@/components/invitation/terracotta/TerracottaPhotoGallery';
import TerracottaRsvpForm from '@/components/invitation/terracotta/TerracottaRsvpForm';
import TerracottaDigitalGift from '@/components/invitation/terracotta/TerracottaDigitalGift';

import HeaderBismillah from '@/components/invitation/HeaderBismillah';
import ClosingSection from '@/components/invitation/ClosingSection';
import MusicPlayer from '@/components/invitation/MusicPlayer';

import { FAHREIZA_AMANDA_DATA } from '@/data/demoData';

function TerracottaContent() {
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
    <div className="flex w-full min-h-screen bg-[#F4EFEA] text-[#5C3D2E] selection:bg-[#C86B53] selection:text-white font-sans overflow-hidden">
      
      {/* ── LEFT PANEL (DESKTOP ONLY) ── */}
      <div className="hidden lg:flex lg:w-[60%] lg:h-screen lg:sticky lg:top-0 relative items-center justify-center bg-[#F4EFEA] border-r border-[#C86B53]/20">
        
        {/* Main Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/images/boho_terracotta_bg.png"
            alt="Boho Terracotta Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Elegant Text Overlay on Left Panel */}
        <div className="relative z-10 text-center space-y-6 bg-[#F4EFEA]/80 backdrop-blur-md p-16 rounded-full border border-[#C86B53]/20 shadow-2xl">
          <h2 className="text-4xl font-serif text-[#C86B53] mb-4">The Wedding of</h2>
          <div className="text-6xl text-[#5C3D2E]" style={{ fontFamily: 'var(--font-great-vibes)' }}>
            Fahreiza <span className="text-[#829379]">&</span> Amanda
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL (SCROLLABLE CONTENT) ── */}
      <div className="w-full lg:w-[40%] h-screen overflow-y-auto relative scroll-smooth shadow-[-10px_0_30px_rgba(0,0,0,0.03)] z-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        
        {/* Fixed Floral Background for Right Panel */}
        <div className="fixed top-0 right-0 w-full lg:w-[40%] h-screen pointer-events-none z-[-1]">
          <Image
            src="/assets/images/boho_terracotta_bg.png"
            alt="Boho Terracotta Background"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
            priority
          />
        </div>

        {/* 1. Cover Envelope Screen (Acts as overlay on right panel) */}
        {!isOpen && !showSplash && (
          <div className="absolute inset-0 z-50">
            <TerracottaProfileIntro
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
              <TerracottaIntroAnimation />
            </div>
          )}
        </AnimatePresence>

        {/* 3. Main Terracotta Invitation Content */}
        {isOpen && (
          <div className="min-h-screen relative z-10 pb-16">
            <MusicPlayer isPlaying={isPlayingAudio} onTogglePlay={handleToggleAudio} />

            {/* Navigation Bar */}
            <header className="sticky top-0 z-40 bg-[#F4EFEA]/90 border-b border-[#C86B53]/20 px-4 py-3 flex items-center justify-between backdrop-blur-md shadow-xs">
              <Link href="/" className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#5C3D2E] hover:text-[#C86B53] transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Katalog</span>
              </Link>
              <span className="font-serif text-[11px] text-[#C86B53] font-bold tracking-widest flex items-center gap-1.5 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#C86B53]" />
                Terracotta Boho
              </span>
            </header>

            {/* Main Hero Section */}
            <TerracottaHero
              groomName={FAHREIZA_AMANDA_DATA.groom.name}
              brideName={FAHREIZA_AMANDA_DATA.bride.name}
              weddingDate={FAHREIZA_AMANDA_DATA.akad.date}
            />

            {/* Continuous Content Container */}
            <div className="relative w-full z-20 flex flex-col pb-12 gap-4">
              <div className="mx-4 my-8 rounded-3xl bg-[#F4EFEA]/95 backdrop-blur-md shadow-xl border border-[#C86B53]/20">
                <HeaderBismillah />
              </div>

            <TerracottaGroomBride
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

            <TerracottaEventSchedule
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

            <TerracottaCountdown targetDate={FAHREIZA_AMANDA_DATA.eventDateISO} />

            <TerracottaLoveStoryQuote timeline={FAHREIZA_AMANDA_DATA.loveStories} />

            <TerracottaPhotoGallery
              photos={FAHREIZA_AMANDA_DATA.galleryPhotos}
              coupleNames={`${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`}
            />

            <TerracottaRsvpForm initialGuestName={guestNameParam} />

            <TerracottaDigitalGift
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
              accentColor="#C86B53"
              themeName="Terracotta Boho Edition"
              isLightTheme={true}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function TerracottaDemoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F4EFEA] flex items-center justify-center text-[#5C3D2E]">
          <p className="text-sm font-semibold tracking-widest uppercase animate-pulse">
            Memuat Terracotta Boho Edition...
          </p>
        </div>
      }
    >
      <TerracottaContent />
    </Suspense>
  );
}

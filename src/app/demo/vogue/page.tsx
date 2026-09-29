'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';

import VogueProfileIntro from '@/components/invitation/vogue/VogueProfileIntro';
import VogueIntroAnimation from '@/components/invitation/vogue/VogueIntroAnimation';
import VogueGroomBride from '@/components/invitation/vogue/VogueGroomBride';
import VogueEventSchedule from '@/components/invitation/vogue/VogueEventSchedule';
import VogueCountdown from '@/components/invitation/vogue/VogueCountdown';
import VogueLoveStoryQuote from '@/components/invitation/vogue/VogueLoveStoryQuote';
import VoguePhotoGallery from '@/components/invitation/vogue/VoguePhotoGallery';
import VogueRsvpForm from '@/components/invitation/vogue/VogueRsvpForm';
import VogueDigitalGift from '@/components/invitation/vogue/VogueDigitalGift';
import VogueQrTicket from '@/components/invitation/vogue/VogueQrTicket';

import ClosingSection from '@/components/invitation/ClosingSection';
import MusicPlayer from '@/components/invitation/MusicPlayer';

import { FAHREIZA_AMANDA_DATA } from '@/data/demoData';

function VogueContent() {
  const searchParams = useSearchParams();
  const guestNameParam = searchParams.get('to') || 'Tamu Undangan';

  const [isOpen, setIsOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(false);

  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Cinematic romantic ambient track
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
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      }
    } catch (error) {
      // Fullscreen optional
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
    <div className="flex w-full min-h-screen bg-[#0E0E0E] text-[#FAFAF8] font-sans overflow-hidden select-none">
      {/* ── LEFT PANEL (DESKTOP SCREENS) ── */}
      <div className="hidden lg:flex lg:w-[60%] lg:h-screen lg:sticky lg:top-0 relative items-center justify-center bg-gradient-to-br from-[#1A1A1A] via-[#0E0E0E] to-[#050505] border-r border-white/10 overflow-hidden">
        {/* Ambient Editorial Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
          <span className="text-[200px] font-serif font-black tracking-tighter">VOGUE</span>
        </div>

        {/* Left Panel Hero Banner */}
        <div className="relative z-10 text-center max-w-lg p-12 rounded-3xl bg-white/5 backdrop-blur-md border border-white/15 shadow-[0_0_60px_rgba(0,0,0,0.8)] space-y-4">
          <span className="text-xs uppercase tracking-[0.4em] font-mono text-[#B39871] block">
            ISSUE NO. 24 // AUTUMN 2026
          </span>
          <h1 className="text-6xl font-serif font-black text-[#FAFAF8] tracking-tight uppercase leading-none">
            {FAHREIZA_AMANDA_DATA.groom.name} &amp; {FAHREIZA_AMANDA_DATA.bride.name}
          </h1>
          <div className="w-16 h-px bg-[#B39871] mx-auto my-3" />
          <p className="text-xs font-mono text-[#FAFAF8]/70 uppercase tracking-widest">
            Sabtu, 21 November 2026 &bull; Grand Ballroom Hotel Mulia
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-[11px] font-mono text-[#B39871] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Vogue Editorial Edition
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL (SCROLLABLE MOBILE / CONTENT CONTAINER) ── */}
      <div className="w-full lg:w-[40%] h-screen overflow-y-auto relative scroll-smooth shadow-[-15px_0_35px_rgba(0,0,0,0.8)] z-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* 1. Cover Gate Screen */}
        {!isOpen && !showSplash && (
          <div className="absolute inset-0 z-50">
            <VogueProfileIntro
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
              <VogueIntroAnimation />
            </div>
          )}
        </AnimatePresence>

        {/* 3. Main Vogue Invitation Content */}
        {isOpen && (
          <div className="min-h-screen relative z-10 pb-16 bg-[#0E0E0E]">
            <MusicPlayer isPlaying={isPlayingAudio} onTogglePlay={handleToggleAudio} />

            {/* Navigation Header */}
            <header className="sticky top-0 z-40 bg-[#0E0E0E]/90 border-b border-white/10 px-4 py-3 flex items-center justify-between backdrop-blur-md shadow-md">
              <Link
                href="/"
                className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-mono font-bold text-[#B39871] hover:text-[#FAFAF8] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Katalog</span>
              </Link>
              <span className="font-mono text-[11px] text-[#FAFAF8] font-bold tracking-widest flex items-center gap-1.5 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#B39871]" />
                Vogue Edition
              </span>
            </header>

            {/* Editorial Hero Banner */}
            <section className="relative w-full pt-10 pb-6 px-4 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-3"
              >
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#B39871] font-mono block">
                  SPECIAL EDITORIAL // VOL. XXIV
                </span>
                <h1 className="text-4xl sm:text-5xl font-serif font-black text-[#FAFAF8] tracking-tight uppercase">
                  {FAHREIZA_AMANDA_DATA.groom.name} &amp; {FAHREIZA_AMANDA_DATA.bride.name}
                </h1>
                <p className="text-xs text-[#FAFAF8]/70 tracking-widest uppercase font-mono">
                  Sabtu, 21 November 2026 &bull; Jakarta
                </p>
                <div className="w-12 h-px bg-[#B39871] mx-auto my-3" />
              </motion.div>
            </section>

            {/* Continuous Assembled Components */}
            <div className="relative w-full z-20 flex flex-col gap-2">
              {/* 3. Groom & Bride Cards */}
              <VogueGroomBride
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

              {/* 4. Event Schedule */}
              <VogueEventSchedule
                akad={{
                  title: 'Holy Matrimony (Akad Nikah)',
                  date: FAHREIZA_AMANDA_DATA.akad.date,
                  time: FAHREIZA_AMANDA_DATA.akad.time,
                  venue: FAHREIZA_AMANDA_DATA.akad.venue,
                  address: FAHREIZA_AMANDA_DATA.akad.address,
                  mapUrl: FAHREIZA_AMANDA_DATA.akad.googleMapsUrl,
                }}
                resepsi={{
                  title: 'The Wedding Reception (Resepsi)',
                  date: FAHREIZA_AMANDA_DATA.resepsi.date,
                  time: FAHREIZA_AMANDA_DATA.resepsi.time,
                  venue: FAHREIZA_AMANDA_DATA.resepsi.venue,
                  address: FAHREIZA_AMANDA_DATA.resepsi.address,
                  mapUrl: FAHREIZA_AMANDA_DATA.resepsi.googleMapsUrl,
                }}
              />

              {/* 5. Countdown */}
              <VogueCountdown targetDate="2026-11-21T08:00:00" />

              {/* 6. Quranic Quote & Story */}
              <VogueLoveStoryQuote timeline={FAHREIZA_AMANDA_DATA.loveStories} />

              {/* 7. Gallery */}
              <VoguePhotoGallery
                photos={FAHREIZA_AMANDA_DATA.galleryPhotos}
                coupleNames={`${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`}
              />

              {/* 8. RSVP Form */}
              <VogueRsvpForm initialGuestName={guestNameParam} />

              {/* 9. Digital Gift & Registry */}
              <VogueDigitalGift
                bankAccounts={FAHREIZA_AMANDA_DATA.bankAccounts}
                qrisUrl={FAHREIZA_AMANDA_DATA.qrisUrl}
                giftAddress={{
                  recipient: `${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`,
                  address: FAHREIZA_AMANDA_DATA.giftAddress,
                  phone: '0812-3456-7890',
                }}
              />

              {/* 10. VIP QR Code Ticket */}
              <VogueQrTicket
                guestName={guestNameParam}
                weddingDate={FAHREIZA_AMANDA_DATA.akad.date}
                venueName={FAHREIZA_AMANDA_DATA.akad.venue}
              />
            </div>

            {/* Closing Section */}
            <div className="mt-8">
              <ClosingSection
                groomName={FAHREIZA_AMANDA_DATA.groom.name}
                brideName={FAHREIZA_AMANDA_DATA.bride.name}
                accentColor="#B39871"
                themeName="Vogue Editorial Edition"
                isLightTheme={false}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function VogueDemoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0E0E0E] flex items-center justify-center text-[#FAFAF8]">
          <p className="text-sm font-mono tracking-widest uppercase animate-pulse">
            Loading Vogue Editorial Edition...
          </p>
        </div>
      }
    >
      <VogueContent />
    </Suspense>
  );
}

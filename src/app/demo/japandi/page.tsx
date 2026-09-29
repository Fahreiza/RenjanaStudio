'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';

import JapandiProfileIntro from '@/components/invitation/japandi/JapandiProfileIntro';
import JapandiIntroAnimation from '@/components/invitation/japandi/JapandiIntroAnimation';
import JapandiGroomBride from '@/components/invitation/japandi/JapandiGroomBride';
import JapandiEventSchedule from '@/components/invitation/japandi/JapandiEventSchedule';
import JapandiCountdown from '@/components/invitation/japandi/JapandiCountdown';
import JapandiLoveStoryQuote from '@/components/invitation/japandi/JapandiLoveStoryQuote';
import JapandiPhotoGallery from '@/components/invitation/japandi/JapandiPhotoGallery';
import JapandiRsvpForm from '@/components/invitation/japandi/JapandiRsvpForm';
import JapandiDigitalGift from '@/components/invitation/japandi/JapandiDigitalGift';
import JapandiQrTicket from '@/components/invitation/japandi/JapandiQrTicket';

import ClosingSection from '@/components/invitation/ClosingSection';
import MusicPlayer from '@/components/invitation/MusicPlayer';

import { FAHREIZA_AMANDA_DATA } from '@/data/demoData';

function JapandiContent() {
  const searchParams = useSearchParams();
  const guestNameParam = searchParams.get('to') || 'Tamu Undangan';

  const [isOpen, setIsOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(false);

  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Serene acoustic instrumental track
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
    <div className="flex w-full min-h-screen bg-[#F4F0EA] text-[#2D2F2E] font-sans overflow-hidden select-none">
      {/* ── LEFT PANEL (DESKTOP SCREENS) ── */}
      <div className="hidden lg:flex lg:w-[60%] lg:h-screen lg:sticky lg:top-0 relative items-center justify-center bg-gradient-to-br from-[#FAF7F2] via-[#F4F0EA] to-[#ECE5DD] border-r border-[#2D2F2E]/10 overflow-hidden">
        {/* Enso Circle Background Ambient Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
          <svg viewBox="0 0 100 100" fill="none" className="w-[450px] h-[450px] text-[#637061]">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="210 40"
            />
          </svg>
        </div>

        {/* Left Panel Hero Banner */}
        <div className="relative z-10 text-center max-w-lg p-12 rounded-3xl bg-white/70 backdrop-blur-md border border-[#2D2F2E]/10 shadow-[0_15px_40px_rgba(0,0,0,0.05)] space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] font-mono text-[#637061] block">
            JAPANDI ZEN &bull; WABI-SABI
          </span>
          <h1 className="text-5xl font-serif font-normal text-[#2D2F2E] tracking-wide leading-tight">
            {FAHREIZA_AMANDA_DATA.groom.name} <span className="text-[#637061]">&amp;</span> {FAHREIZA_AMANDA_DATA.bride.name}
          </h1>
          <div className="w-12 h-px bg-[#637061]/40 mx-auto my-3" />
          <p className="text-xs font-serif text-[#2D2F2E]/70">
            Sabtu, 21 November 2026 &bull; Grand Ballroom Hotel Mulia
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4F0EA] border border-[#2D2F2E]/10 text-[11px] font-mono text-[#637061] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Japandi Zen Edition
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL (SCROLLABLE MOBILE / CONTENT CONTAINER) ── */}
      <div className="w-full lg:w-[40%] h-screen overflow-y-auto relative scroll-smooth shadow-[-10px_0_30px_rgba(0,0,0,0.04)] z-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* 1. Cover Gate Screen */}
        {!isOpen && !showSplash && (
          <div className="absolute inset-0 z-50">
            <JapandiProfileIntro
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
              <JapandiIntroAnimation />
            </div>
          )}
        </AnimatePresence>

        {/* 3. Main Japandi Invitation Content */}
        {isOpen && (
          <div className="min-h-screen relative z-10 pb-16 bg-[#F4F0EA]">
            <MusicPlayer isPlaying={isPlayingAudio} onTogglePlay={handleToggleAudio} />

            {/* Navigation Header */}
            <header className="sticky top-0 z-40 bg-[#F4F0EA]/90 border-b border-[#2D2F2E]/10 px-4 py-3 flex items-center justify-between backdrop-blur-md shadow-xs">
              <Link
                href="/"
                className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-mono font-medium text-[#637061] hover:text-[#2D2F2E] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Katalog</span>
              </Link>
              <span className="font-serif text-[11px] text-[#2D2F2E] font-medium tracking-widest flex items-center gap-1.5 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#637061]" />
                Japandi Zen
              </span>
            </header>

            {/* Zen Hero Banner */}
            <section className="relative w-full pt-10 pb-6 px-4 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-3"
              >
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#637061] font-mono block">
                  PAWIWAHAN &bull; THE WEDDING
                </span>
                <h1 className="text-4xl sm:text-5xl font-serif font-normal text-[#2D2F2E] tracking-wide">
                  {FAHREIZA_AMANDA_DATA.groom.name} <span className="text-[#637061]">&amp;</span> {FAHREIZA_AMANDA_DATA.bride.name}
                </h1>
                <p className="text-xs text-[#2D2F2E]/70 tracking-widest uppercase font-mono">
                  Sabtu, 21 November 2026 &bull; Jakarta
                </p>
                <div className="w-10 h-px bg-[#637061]/40 mx-auto my-3" />
              </motion.div>
            </section>

            {/* Continuous Assembled Components */}
            <div className="relative w-full z-20 flex flex-col gap-2">
              {/* 3. Groom & Bride Cards */}
              <JapandiGroomBride
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
              <JapandiEventSchedule
                akad={{
                  title: 'Akad Nikah (Holy Matrimony)',
                  date: FAHREIZA_AMANDA_DATA.akad.date,
                  time: FAHREIZA_AMANDA_DATA.akad.time,
                  venue: FAHREIZA_AMANDA_DATA.akad.venue,
                  address: FAHREIZA_AMANDA_DATA.akad.address,
                  mapUrl: FAHREIZA_AMANDA_DATA.akad.googleMapsUrl,
                }}
                resepsi={{
                  title: 'Resepsi Pernikahan (The Celebration)',
                  date: FAHREIZA_AMANDA_DATA.resepsi.date,
                  time: FAHREIZA_AMANDA_DATA.resepsi.time,
                  venue: FAHREIZA_AMANDA_DATA.resepsi.venue,
                  address: FAHREIZA_AMANDA_DATA.resepsi.address,
                  mapUrl: FAHREIZA_AMANDA_DATA.resepsi.googleMapsUrl,
                }}
              />

              {/* 5. Countdown */}
              <JapandiCountdown targetDate="2026-11-21T08:00:00" />

              {/* 6. Quranic Quote & Story */}
              <JapandiLoveStoryQuote timeline={FAHREIZA_AMANDA_DATA.loveStories} />

              {/* 7. Gallery */}
              <JapandiPhotoGallery
                photos={FAHREIZA_AMANDA_DATA.galleryPhotos}
                coupleNames={`${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`}
              />

              {/* 8. RSVP Form */}
              <JapandiRsvpForm initialGuestName={guestNameParam} />

              {/* 9. Digital Gift & Registry */}
              <JapandiDigitalGift
                bankAccounts={FAHREIZA_AMANDA_DATA.bankAccounts}
                qrisUrl={FAHREIZA_AMANDA_DATA.qrisUrl}
                giftAddress={{
                  recipient: `${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`,
                  address: FAHREIZA_AMANDA_DATA.giftAddress,
                  phone: '0812-3456-7890',
                }}
              />

              {/* 10. VIP QR Code Ticket */}
              <JapandiQrTicket
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
                accentColor="#637061"
                themeName="Japandi Zen Edition"
                isLightTheme={true}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function JapandiDemoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F4F0EA] flex items-center justify-center text-[#2D2F2E]">
          <p className="text-sm font-serif tracking-widest uppercase animate-pulse">
            Memuat Japandi Zen Edition...
          </p>
        </div>
      }
    >
      <JapandiContent />
    </Suspense>
  );
}

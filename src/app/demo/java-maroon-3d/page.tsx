'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Volume2, VolumeX } from 'lucide-react';

import JavaMaroonBackground from '@/components/invitation/java-maroon-3d/JavaMaroonBackground';
import JavaMaroonProfileIntro from '@/components/invitation/java-maroon-3d/JavaMaroonProfileIntro';
import JavaMaroonIntroAnimation from '@/components/invitation/java-maroon-3d/JavaMaroonIntroAnimation';
import JavaMaroonGroomBride from '@/components/invitation/java-maroon-3d/JavaMaroonGroomBride';
import JavaMaroonEventSchedule from '@/components/invitation/java-maroon-3d/JavaMaroonEventSchedule';
import JavaMaroonCountdown from '@/components/invitation/java-maroon-3d/JavaMaroonCountdown';
import JavaMaroonLoveStoryQuote from '@/components/invitation/java-maroon-3d/JavaMaroonLoveStoryQuote';
import JavaMaroonPhotoGallery from '@/components/invitation/java-maroon-3d/JavaMaroonPhotoGallery';
import JavaMaroonRsvpForm from '@/components/invitation/java-maroon-3d/JavaMaroonRsvpForm';
import JavaMaroonDigitalGift from '@/components/invitation/java-maroon-3d/JavaMaroonDigitalGift';
import JavaMaroonQrTicket from '@/components/invitation/java-maroon-3d/JavaMaroonQrTicket';
import {
  GununganWayangSvg,
  JavaneseDivider,
  AksaraJawaBadge,
  WayangKamajayaKamaratihSvg,
} from '@/components/invitation/java-maroon-3d/JavaMaroonOrnaments';

import JavaMaroonGreeting from '@/components/invitation/java-maroon-3d/JavaMaroonGreeting';
import ClosingSection from '@/components/invitation/ClosingSection';
import MusicPlayer from '@/components/invitation/MusicPlayer';

import { FAHREIZA_AMANDA_DATA } from '@/data/demoData';

function JavaMaroonContent() {
  const searchParams = useSearchParams();
  const guestNameParam = searchParams.get('to') || 'Tamu Undangan';

  const [isOpen, setIsOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(false);

  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Romantic instrumental track
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
      // Fullscreen API optional
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
    <div className="flex w-full min-h-screen bg-[#1A0205] text-[#FFE29F] font-serif overflow-hidden select-none">
      {/* ── LEFT PANEL (DESKTOP SCREENS) ── */}
      <div className="hidden lg:flex lg:w-[60%] lg:h-screen lg:sticky lg:top-0 relative items-center justify-center bg-gradient-to-br from-[#2E050A] via-[#1E0306] to-[#120103] border-r-2 border-[#D4AF37]/40 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.15)_0%,_transparent_70%)] pointer-events-none" />

        {/* Ambient Gunungan Wayang in Left Panel */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <GununganWayangSvg className="w-[450px] h-[650px] text-[#D4AF37]" />
        </div>

        {/* Left Panel Hero Banner */}
        <div className="relative z-10 text-center max-w-lg p-12 rounded-3xl bg-[#2A050A]/75 backdrop-blur-md border border-[#D4AF37]/50 shadow-[0_0_60px_rgba(0,0,0,0.8)]">
          <div className="w-20 h-28 mx-auto mb-3 filter drop-shadow-[0_0_15px_rgba(226,183,85,0.6)]">
            <GununganWayangSvg className="w-full h-full" />
          </div>
          <AksaraJawaBadge textJawa="ꦱꦼꦫꦠ꧀ꦈꦭꦺꦩ꧀ꦥꦮꦶꦮꦲꦤ꧀" latin="Serat Ulem Pawiwahan Ageng" />
          <h1 className="text-5xl text-[#FFF2A3] mt-3 mb-2 tracking-wide font-serif">
            {FAHREIZA_AMANDA_DATA.groom.name} &amp; {FAHREIZA_AMANDA_DATA.bride.name}
          </h1>
          <p className="text-xs text-[#E2B755]/90 italic mb-4 font-serif">
            Sabtu Pahing, 21 November 2026 • Grand Ballroom Hotel Mulia
          </p>
          <div className="w-48 h-20 mx-auto opacity-75 my-2">
            <WayangKamajayaKamaratihSvg className="w-full h-full" />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A0205] border border-[#D4AF37]/50 text-[11px] text-[#FFE29F] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#E2B755]" />
            Java Maroon 3D Edition
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL (SCROLLABLE MOBILE / CONTENT CONTAINER) ── */}
      <div className="w-full lg:w-[40%] h-screen overflow-y-auto relative scroll-smooth shadow-[-15px_0_35px_rgba(0,0,0,0.7)] z-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* Animated 3D Maroon Velvet & Jasmine Petals Background */}
        <JavaMaroonBackground />

        {/* 1. Cover 3D Split Gebyok Gate Screen */}
        {!isOpen && !showSplash && (
          <div className="absolute inset-0 z-50">
            <JavaMaroonProfileIntro
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
              <JavaMaroonIntroAnimation />
            </div>
          )}
        </AnimatePresence>

        {/* 3. Main Java Maroon 3D Invitation Content */}
        {isOpen && (
          <div className="min-h-screen relative z-10 pb-16">
            <MusicPlayer isPlaying={isPlayingAudio} onTogglePlay={handleToggleAudio} />

            {/* Navigation Header */}
            <header className="sticky top-0 z-40 bg-[#1A0205]/90 border-b border-[#D4AF37]/30 px-4 py-3 flex items-center justify-between backdrop-blur-md shadow-lg">
              <Link
                href="/"
                className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold text-[#E2B755] hover:text-[#FFF2A3] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Katalog</span>
              </Link>
              <span className="font-serif text-[11px] text-[#FFE29F] font-bold tracking-widest flex items-center gap-1.5 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#E2B755]" />
                Java Maroon 3D
              </span>
            </header>

            {/* Hero Banner Section */}
            <section className="relative w-full pt-10 pb-6 px-4 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="space-y-3"
              >
                <div className="w-16 h-24 mx-auto filter drop-shadow-[0_0_15px_rgba(226,183,85,0.7)]">
                  <GununganWayangSvg className="w-full h-full" />
                </div>
                <AksaraJawaBadge textJawa="ꦥꦮꦶꦮꦲꦤ꧀ꦲꦒꦼꦁ" latin="Pawiwahan Ageng" />
                <h1 className="text-4xl sm:text-5xl font-serif text-[#FFF2A3] tracking-wide drop-shadow-md">
                  {FAHREIZA_AMANDA_DATA.groom.name} &amp; {FAHREIZA_AMANDA_DATA.bride.name}
                </h1>
                <p className="text-xs text-[#FFE29F]/80 tracking-widest uppercase font-serif">
                  Sabtu Pahing, 21 November 2026
                </p>
                <JavaneseDivider className="my-3" />
              </motion.div>
            </section>

            {/* Continuous Assembled Components */}
            <div className="relative w-full z-20 flex flex-col gap-4">
              {/* Royal Javanese Greeting Card with 3D Card */}
              <JavaMaroonGreeting />

              {/* 3. Groom & Bride Cards */}
              <JavaMaroonGroomBride
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

              {/* 4. Event Schedule (Akad & Resepsi) */}
              <JavaMaroonEventSchedule
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

              {/* 5. Countdown Timer */}
              <JavaMaroonCountdown targetDate={FAHREIZA_AMANDA_DATA.eventDateISO} />

              {/* 6. Love Story & Quotes */}
              <JavaMaroonLoveStoryQuote timeline={FAHREIZA_AMANDA_DATA.loveStories} />

              {/* 7. Photo Gallery */}
              <JavaMaroonPhotoGallery
                photos={FAHREIZA_AMANDA_DATA.galleryPhotos}
                coupleNames={`${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`}
              />

              {/* 8. RSVP Form */}
              <JavaMaroonRsvpForm initialGuestName={guestNameParam} />

              {/* 9. Digital Gift & QRIS */}
              <JavaMaroonDigitalGift
                bankAccounts={FAHREIZA_AMANDA_DATA.bankAccounts}
                qrisUrl={FAHREIZA_AMANDA_DATA.qrisUrl}
                giftAddress={{
                  recipient: `${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`,
                  address: FAHREIZA_AMANDA_DATA.giftAddress,
                  phone: '0812-3456-7890',
                }}
              />

              {/* 10. VIP QR Code Ticket */}
              <JavaMaroonQrTicket
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
                accentColor="#D4AF37"
                themeName="Java Maroon 3D Edition"
                isLightTheme={false}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function JavaMaroonDemoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#1A0205] flex items-center justify-center text-[#FFE29F]">
          <p className="text-sm font-serif font-semibold tracking-widest uppercase animate-pulse">
            Memuat Java Maroon 3D Edition...
          </p>
        </div>
      }
    >
      <JavaMaroonContent />
    </Suspense>
  );
}

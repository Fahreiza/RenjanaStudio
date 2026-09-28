'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowLeft, Volume2, VolumeX } from 'lucide-react';

import ThreeDProfileIntro from '@/components/invitation/3d/ThreeDProfileIntro';
import ThreeDIntroAnimation from '@/components/invitation/3d/ThreeDIntroAnimation';
import ThreeDFloatingPetals from '@/components/invitation/3d/ThreeDFloatingPetals';
import ThreeDCardTilt from '@/components/invitation/3d/ThreeDCardTilt';
import ThreeDGroomBride from '@/components/invitation/3d/ThreeDGroomBride';
import ThreeDEventSchedule from '@/components/invitation/3d/ThreeDEventSchedule';
import ThreeDCountdown from '@/components/invitation/3d/ThreeDCountdown';
import ThreeDLoveStoryQuote from '@/components/invitation/3d/ThreeDLoveStoryQuote';
import ThreeDPhotoGallery from '@/components/invitation/3d/ThreeDPhotoGallery';
import ThreeDRsvpForm from '@/components/invitation/3d/ThreeDRsvpForm';
import ThreeDDigitalGift from '@/components/invitation/3d/ThreeDDigitalGift';
import ThreeDQrTicket from '@/components/invitation/3d/ThreeDQrTicket';
import ClosingSection from '@/components/invitation/ClosingSection';
import { FAHREIZA_AMANDA_DATA } from '@/data/demoData';

function playChimeSound() {
  try {
    const audio = new Audio(
      'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a83b27.mp3?filename=success-fanfare-trumpets-6185.mp3'
    );
    audio.volume = 0.7;
    audio.play().catch(() => {});
  } catch (err) {
    console.log('Audio chime error:', err);
  }
}

function Special3DContent() {
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
    // 1. Show 2.2s intro animation and start background music & fanfare chime
    setShowIntroAnimation(true);
    setIsPlayingAudio(true);

    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }

    try {
      playChimeSound();
    } catch (e) {
      console.log('Chime sound ignored:', e);
    }

    // 2. Transition smoothly to main 3D content
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
    <div className="relative min-h-screen bg-[#FAF7F2] text-[#2D3748] overflow-x-hidden selection:bg-[#D4AF37] selection:text-[#241303]">
      {/* 3D Floating Petals Ambient Canvas */}
      <ThreeDFloatingPetals />

      {/* Floating Controls Bar (Back to Catalog & Music Toggle) */}
      <div className="fixed top-4 inset-x-4 z-40 flex items-center justify-between pointer-events-none max-w-5xl mx-auto">
        <Link
          href="/"
          className="pointer-events-auto flex items-center gap-2 bg-white/90 backdrop-blur-md text-[#2D3748] border border-[#D4AF37]/50 text-xs font-bold px-4 py-2.5 rounded-full shadow-lg hover:bg-[#D4AF37] hover:text-[#241303] transition-all hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Katalog (3D Lumina)</span>
        </Link>

        {isOpened && (
          <button
            onClick={handleToggleAudio}
            className="pointer-events-auto flex items-center gap-2 bg-white/90 backdrop-blur-md text-[#2D3748] border border-[#D4AF37]/50 text-xs font-bold px-4 py-2.5 rounded-full shadow-lg hover:border-[#D4AF37] transition-all hover:scale-105 cursor-pointer"
          >
            {isPlayingAudio ? (
              <>
                <Volume2 className="w-4 h-4 text-[#D4AF37] animate-pulse" />
                <span className="hidden sm:inline">Musik Menyala</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-zinc-400" />
                <span className="hidden sm:inline">Musik Dijeda</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* 1. Gate Cover Screen / 3D Keepsake Box */}
      {!isOpened && !showIntroAnimation && (
        <ThreeDProfileIntro
          groomName={FAHREIZA_AMANDA_DATA.groom.name}
          brideName={FAHREIZA_AMANDA_DATA.bride.name}
          eventDate={FAHREIZA_AMANDA_DATA.akad.date}
          guestName={guestNameParam}
          onOpen={handleOpenInvitation}
        />
      )}

      {/* 2. Splash Intro Animation (~2.2 seconds) */}
      <AnimatePresence>
        {showIntroAnimation && <ThreeDIntroAnimation />}
      </AnimatePresence>

      {/* 3. Main 3D Invitation Content */}
      {isOpened && (
        <div className="relative z-10 space-y-8 sm:space-y-12 py-8 animate-fadeIn duration-1000">
          {/* Hero Section */}
          <section className="relative min-h-[85vh] flex flex-col items-center justify-center py-12 px-4 text-center overflow-hidden">
            <div className="space-y-3 z-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3CA65] to-[#B98929] text-[#2F1B05] text-[10px] font-black uppercase tracking-[0.3em] shadow-md border border-white/60">
                <Sparkles className="w-3.5 h-3.5 text-[#2F1B05]" />
                UNDANGAN SPESIAL 3D LUMINA
              </span>

              <h1 className="font-cursive text-6xl sm:text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#B98929] via-[#D4AF37] to-[#B98929] drop-shadow-md py-2">
                {FAHREIZA_AMANDA_DATA.groom.name} <span className="font-serif-cormorant text-4xl text-[#B76E79]">&amp;</span> {FAHREIZA_AMANDA_DATA.bride.name}
              </h1>

              <p className="font-serif-cormorant text-[#586955] text-lg font-bold tracking-widest pt-1">
                {FAHREIZA_AMANDA_DATA.akad.date}
              </p>
            </div>

            {/* 3D Tilt Hero Photo Card */}
            <ThreeDCardTilt maxTilt={20} className="w-full max-w-sm my-8">
              <div className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <Image
                  src="/assets/images/hero-wedding.webp"
                  alt="Fahreiza & Amanda 3D"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-6">
                  <span className="text-white text-xs font-serif-cormorant italic tracking-wider">
                    ✨ Gerakkan kursor atau sentuh layar untuk merasakan efek kedalaman 3D
                  </span>
                </div>
              </div>
            </ThreeDCardTilt>

            <p className="text-xs text-zinc-500 italic max-w-xs z-10">
              &ldquo;Dua hati, satu tujuan, dalam naungan kasih sayang Allah SWT.&rdquo;
            </p>
          </section>

          {/* 3. Groom & Bride 3D Cards */}
          <ThreeDGroomBride
            groom={FAHREIZA_AMANDA_DATA.groom}
            bride={FAHREIZA_AMANDA_DATA.bride}
          />

          {/* 4. Event Schedule 3D Cards */}
          <ThreeDEventSchedule
            akad={FAHREIZA_AMANDA_DATA.akad}
            resepsi={FAHREIZA_AMANDA_DATA.resepsi}
          />

          {/* 5. Horizontal Countdown with 4 Segment lines & Calendar buttons */}
          <ThreeDCountdown targetDateISO={FAHREIZA_AMANDA_DATA.eventDateISO} />

          {/* 6. Quranic Quote & Love Story 3D Timeline */}
          <ThreeDLoveStoryQuote stories={FAHREIZA_AMANDA_DATA.loveStories} />

          {/* 7. 3D Perspective Photo Gallery & Lightbox */}
          <ThreeDPhotoGallery photos={FAHREIZA_AMANDA_DATA.galleryPhotos} />

          {/* 8. 3D Frosted Glass RSVP Form & Guestbook */}
          <ThreeDRsvpForm initialGuestName={guestNameParam} />

          {/* 9. 3D Embossed Bank Cards & QRIS Gift */}
          <ThreeDDigitalGift
            bankAccounts={FAHREIZA_AMANDA_DATA.bankAccounts}
            qrisUrl={FAHREIZA_AMANDA_DATA.qrisUrl}
            giftAddress={FAHREIZA_AMANDA_DATA.giftAddress}
          />

          {/* 10. 3D Holographic VIP Pass Ticket */}
          <ThreeDQrTicket
            guestName={guestNameParam}
            eventDate={FAHREIZA_AMANDA_DATA.akad.date}
            venueName={FAHREIZA_AMANDA_DATA.akad.venue}
          />

          {/* 11. Closing Section */}
          <ClosingSection
            groomName={FAHREIZA_AMANDA_DATA.groom.name}
            brideName={FAHREIZA_AMANDA_DATA.bride.name}
            accentColor="#D4AF37"
            themeName="3D Lumina Depth Edition"
            isLightTheme={true}
          />
        </div>
      )}
    </div>
  );
}

export default function Special3DPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
          <p className="text-sm font-semibold text-[#D4AF37] animate-pulse">
            Memuat Undangan Spesial 3D Lumina...
          </p>
        </div>
      }
    >
      <Special3DContent />
    </Suspense>
  );
}

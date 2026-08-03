'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';

import MinimalistProfileIntro from '@/components/invitation/minimalist/MinimalistProfileIntro';
import MinimalistIntroAnimation from '@/components/invitation/minimalist/MinimalistIntroAnimation';
import MinimalistGroomBride from '@/components/invitation/minimalist/MinimalistGroomBride';
import MinimalistEventSchedule from '@/components/invitation/minimalist/MinimalistEventSchedule';
import MinimalistCountdown from '@/components/invitation/minimalist/MinimalistCountdown';
import MinimalistLoveStoryQuote from '@/components/invitation/minimalist/MinimalistLoveStoryQuote';
import MinimalistPhotoGallery from '@/components/invitation/minimalist/MinimalistPhotoGallery';
import MinimalistRsvpForm from '@/components/invitation/minimalist/MinimalistRsvpForm';
import MinimalistDigitalGift from '@/components/invitation/minimalist/MinimalistDigitalGift';
import MinimalistQrTicket from '@/components/invitation/minimalist/MinimalistQrTicket';
import HeaderBismillah from '@/components/invitation/HeaderBismillah';
import ClosingSection from '@/components/invitation/ClosingSection';
import MusicPlayer from '@/components/invitation/MusicPlayer';

import { FAHREIZA_AMANDA_DATA } from '@/data/demoData';

function MinimalistContent() {
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

  const handleOpenInvitation = () => {
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
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D3748] font-sans selection:bg-[#B76E79] selection:text-white relative overflow-x-hidden w-full max-w-full">
      {/* Texture Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none z-0">
        <Image
          src="/assets/images/BAHAN-TEMA-1-1-2.webp"
          alt="Texture Latar"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* 1. Cover Envelope Screen */}
      {!isOpen && !showSplash && (
        <MinimalistProfileIntro
          guestName={guestNameParam}
          groomName={FAHREIZA_AMANDA_DATA.groom.name}
          brideName={FAHREIZA_AMANDA_DATA.bride.name}
          weddingDate={FAHREIZA_AMANDA_DATA.akad.date}
          venueName={FAHREIZA_AMANDA_DATA.akad.venue}
          onOpenInvitation={handleOpenInvitation}
        />
      )}

      {/* 2. Splash Animation (2.2s) */}
      <AnimatePresence>
        {showSplash && <MinimalistIntroAnimation />}
      </AnimatePresence>

      {/* 3. Main Minimalist Invitation Content */}
      {isOpen && (
        <div className="min-h-screen relative z-10 pb-16">
          <MusicPlayer isPlaying={isPlayingAudio} onTogglePlay={handleToggleAudio} />

          {/* ── Natural Scattered Florals (absolute, change as you scroll) ── */}
          {/* LEFT SIDE */}
          {[
            { src: '/assets/images/TEMA-01-BUNGA-01-co-1-2.png',                       top: 120,  size: 90,  opacity: 0.55, rotate: -15,  left: true  },
            { src: '/assets/images/TEMA-01-BUNGA-02-CO-e1721803686726-1-2.webp',       top: 560,  size: 80,  opacity: 0.45, rotate: 10,   left: false },
            { src: '/assets/images/TEMA-01-BUNGA-03-CO-e1721803728780-1-2.webp',       top: 1050, size: 100, opacity: 0.5,  rotate: -8,   left: true  },
            { src: '/assets/images/TEMA-01-BUNGA-01-bawah-e1721804781634-1-2.webp',    top: 1500, size: 75,  opacity: 0.45, rotate: 20,   left: false },
            { src: '/assets/images/TEMA-01-BUNGA-04-e1721804205400-1-2.webp',          top: 1950, size: 95,  opacity: 0.55, rotate: -20,  left: true  },
            { src: '/assets/images/TEMA-01-BUNGA-02bawah-e1721804937768-1-2.webp',     top: 2400, size: 80,  opacity: 0.4,  rotate: 12,   left: false },
            { src: '/assets/images/bunga-akhir-tema-01-new-1-1-2.webp',                top: 2900, size: 105, opacity: 0.5,  rotate: -10,  left: true  },
            { src: '/assets/images/TEMA-01-BUNGA-05-e1721804339713-1-2.webp',          top: 3400, size: 85,  opacity: 0.45, rotate: 18,   left: false },
            { src: '/assets/images/TEMA-01-BUNGA-03-e1721804270463-1-2.webp',          top: 3900, size: 90,  opacity: 0.5,  rotate: -22,  left: true  },
            { src: '/assets/images/TEMA-01-BUNGA-01-co-2-e1721803892640-1-2.webp',     top: 4400, size: 80,  opacity: 0.45, rotate: 8,    left: false },
            { src: '/assets/images/bunga-akhir-tema-01-new-1-1-1-1-1-2.webp',          top: 4900, size: 100, opacity: 0.5,  rotate: -15,  left: true  },
            { src: '/assets/images/TEMA-01-BUNGA-02-e1721804129842-1-2.webp',          top: 5400, size: 85,  opacity: 0.45, rotate: 15,   left: false },
          ].map((f, i) => (
            <div
              key={i}
              className="absolute pointer-events-none overflow-hidden"
              style={{
                top: f.top,
                [f.left ? 'left' : 'right']: -20,
                width: f.size,
                height: f.size,
                opacity: f.opacity,
                transform: `rotate(${f.rotate}deg)`,
                zIndex: 2,
              }}
            >
              <Image
                src={f.src}
                alt=""
                fill
                sizes={`${f.size}px`}
                className="object-contain"
              />
            </div>
          ))}

          {/* Navigation Bar */}
          <header className="sticky top-0 z-40 bg-white/80 border-b border-[#D4AF37]/30 px-4 py-3 flex items-center justify-between backdrop-blur-md shadow-xs">
            <Link href="/" className="flex items-center gap-2 text-xs font-bold text-[#8A9A86] hover:text-[#2D3748] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Katalog Renjana</span>
            </Link>

            <span className="font-serif text-base text-[#B76E79] font-bold tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              Minimalist Luxury
            </span>
          </header>

          {/* Hero Banner Section */}
          <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 py-12 space-y-6">
            <div className="w-20 h-20 relative opacity-80 animate-pulse">
              <Image
                src="/assets/images/TEMA-01-BUNGA-01-co-1-2.png"
                alt="Floral Ornament"
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-[#8A9A86] font-semibold">
                Walimatul &apos;Ursy
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#B76E79] tracking-wide">
                {FAHREIZA_AMANDA_DATA.groom.name} <span className="text-3xl text-[#8A9A86] italic font-normal">&amp;</span> {FAHREIZA_AMANDA_DATA.bride.name}
              </h1>
              <p className="font-serif text-[#8A9A86] text-base tracking-widest pt-1">
                {FAHREIZA_AMANDA_DATA.akad.date}
              </p>
            </div>

            <div className="relative w-full max-w-sm h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/assets/images/hero-wedding.webp"
                alt="Couple Hero"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
                priority
              />
            </div>
          </section>

          <HeaderBismillah />

          <MinimalistGroomBride
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

          <MinimalistEventSchedule
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

          <MinimalistCountdown targetDate={FAHREIZA_AMANDA_DATA.eventDateISO} />

          <MinimalistLoveStoryQuote timeline={FAHREIZA_AMANDA_DATA.loveStories} />

          <MinimalistPhotoGallery
            photos={FAHREIZA_AMANDA_DATA.galleryPhotos}
            coupleNames={`${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`}
          />

          <MinimalistRsvpForm initialGuestName={guestNameParam} />

          <MinimalistDigitalGift
            bankAccounts={FAHREIZA_AMANDA_DATA.bankAccounts}
            qrisUrl={FAHREIZA_AMANDA_DATA.qrisUrl}
            giftAddress={{
              recipient: `${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`,
              address: FAHREIZA_AMANDA_DATA.giftAddress,
              phone: '0812-3456-7890',
            }}
          />

          <MinimalistQrTicket
            guestName={guestNameParam}
            coupleNames={`${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`}
            weddingDate={FAHREIZA_AMANDA_DATA.akad.date}
            venueName={FAHREIZA_AMANDA_DATA.akad.venue}
          />

          <ClosingSection
            groomName={FAHREIZA_AMANDA_DATA.groom.name}
            brideName={FAHREIZA_AMANDA_DATA.bride.name}
            accentColor="#7F9481"
            themeName="Minimalist Luxury Edition"
            isLightTheme={true}
          />
        </div>
      )}
    </div>
  );
}

export default function MinimalistPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center text-[#2D3748]">
          <p className="text-sm font-semibold text-[#8A9A86] animate-pulse">
            Memuat Minimalist Luxury Edition...
          </p>
        </div>
      }
    >
      <MinimalistContent />
    </Suspense>
  );
}

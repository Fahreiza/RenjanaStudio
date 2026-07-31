'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowLeft, Heart } from 'lucide-react';
import ThreeDEnvelopeOpening from '@/components/invitation/3d/ThreeDEnvelopeOpening';
import ThreeDFloatingPetals from '@/components/invitation/3d/ThreeDFloatingPetals';
import ThreeDCardTilt from '@/components/invitation/3d/ThreeDCardTilt';
import MusicPlayer from '@/components/invitation/MusicPlayer';
import HeaderBismillah from '@/components/invitation/HeaderBismillah';
import CoupleSection from '@/components/invitation/CoupleSection';
import CountdownTimer from '@/components/invitation/CountdownTimer';
import EventDetails from '@/components/invitation/EventDetails';
import LoveStory from '@/components/invitation/LoveStory';
import PhotoGallery from '@/components/invitation/PhotoGallery';
import RsvpForm from '@/components/invitation/RsvpForm';
import DigitalGift from '@/components/invitation/DigitalGift';
import ClosingSection from '@/components/invitation/ClosingSection';
import { FAHREIZA_AMANDA_DATA } from '@/data/demoData';

function Special3DContent() {
  const searchParams = useSearchParams();
  const guestNameParam = searchParams.get('to') || 'Tamu Undangan';

  const [isOpened, setIsOpened] = useState(false);
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
    setIsOpened(true);
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlayingAudio(true))
        .catch(() => setIsPlayingAudio(false));
    }
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
    <div className="relative min-h-screen bg-[#FAF7F2] text-[#2D3748] overflow-x-hidden selection:bg-[#B76E79] selection:text-white">
      {/* 3D Floating Petals Background Animation */}
      <ThreeDFloatingPetals />

      {/* Floating Header Back Link */}
      <div className="fixed top-4 left-4 z-40">
        <Link
          href="/"
          className="flex items-center gap-2 bg-white/90 backdrop-blur-md text-[#586955] border border-[#D4AF37]/40 text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg hover:bg-[#B76E79] hover:text-white transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Katalog (Spesial 3D)</span>
        </Link>
      </div>

      {/* 3D Envelope Modal */}
      <ThreeDEnvelopeOpening
        groomName={FAHREIZA_AMANDA_DATA.groom.name}
        brideName={FAHREIZA_AMANDA_DATA.bride.name}
        eventDate={FAHREIZA_AMANDA_DATA.akad.date}
        guestName={guestNameParam}
        onOpen={handleOpenInvitation}
      />

      {/* Main Content Area */}
      {isOpened && (
        <div className="relative z-10 space-y-12 py-6 animate-fadeIn duration-1000">
          <MusicPlayer isPlaying={isPlayingAudio} onTogglePlay={handleToggleAudio} />

          {/* Banner Hero 3D Undangan */}
          <section className="relative min-h-[90vh] flex flex-col items-center justify-between py-16 px-4 text-center overflow-hidden">
            <div className="pt-16 space-y-3 z-10">
              <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-white text-[10px] uppercase font-bold tracking-[0.25em] px-4 py-1 rounded-full shadow">
                <Sparkles className="w-3 h-3" />
                Undangan Paket Spesial 3D
              </span>
              <h1 className="font-cursive text-6xl sm:text-7xl md:text-8xl text-[#B76E79] drop-shadow-md">
                {FAHREIZA_AMANDA_DATA.groom.name} <span className="font-serif-cormorant text-4xl text-[#D4AF37]">&amp;</span> {FAHREIZA_AMANDA_DATA.bride.name}
              </h1>
              <p className="font-serif-cormorant text-[#586955] text-lg font-semibold tracking-widest pt-1">
                {FAHREIZA_AMANDA_DATA.akad.date}
              </p>
            </div>

            {/* 3D Tilt Hero Photo Card */}
            <ThreeDCardTilt maxTilt={20} className="w-full max-w-sm my-6">
              <div className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <Image
                  src="/assets/images/hero-wedding.webp"
                  alt="Fahreiza & Amanda 3D"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <span className="text-white text-xs font-serif-cormorant italic tracking-wider">
                    Arahkan kursor / miringkan layar untuk efek kedalaman 3D
                  </span>
                </div>
              </div>
            </ThreeDCardTilt>

            <p className="text-xs text-zinc-500 italic max-w-xs z-10">
              &ldquo;Dua hati, satu tujuan, dalam naungan kasih sayang Allah SWT.&rdquo;
            </p>
          </section>

          <HeaderBismillah />

          {/* 3D Tilt Wrapper for Couple Section */}
          <ThreeDCardTilt maxTilt={10}>
            <CoupleSection
              groom={FAHREIZA_AMANDA_DATA.groom}
              bride={FAHREIZA_AMANDA_DATA.bride}
            />
          </ThreeDCardTilt>

          <CountdownTimer targetDateISO={FAHREIZA_AMANDA_DATA.eventDateISO} />

          <EventDetails
            akad={FAHREIZA_AMANDA_DATA.akad}
            resepsi={FAHREIZA_AMANDA_DATA.resepsi}
          />

          <LoveStory stories={FAHREIZA_AMANDA_DATA.loveStories} />

          <PhotoGallery photos={FAHREIZA_AMANDA_DATA.galleryPhotos} />

          <RsvpForm initialGuestName={guestNameParam} />

          <DigitalGift
            bankAccounts={FAHREIZA_AMANDA_DATA.bankAccounts}
            qrisUrl={FAHREIZA_AMANDA_DATA.qrisUrl}
            giftAddress={FAHREIZA_AMANDA_DATA.giftAddress}
          />

          <ClosingSection
            groomName={FAHREIZA_AMANDA_DATA.groom.name}
            brideName={FAHREIZA_AMANDA_DATA.bride.name}
          />
        </div>
      )}
    </div>
  );
}

export default function Special3DPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
        <p className="text-sm font-semibold text-[#8A9A86] animate-pulse">Memuat Undangan 3D...</p>
      </div>
    }>
      <Special3DContent />
    </Suspense>
  );
}

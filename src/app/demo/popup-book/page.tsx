'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import ThreeDPopUpBook from '@/components/invitation/popup/ThreeDPopUpBook';
import MusicPlayer from '@/components/invitation/MusicPlayer';
import CountdownTimer from '@/components/invitation/CountdownTimer';
import LoveStory from '@/components/invitation/LoveStory';
import PhotoGallery from '@/components/invitation/PhotoGallery';
import RsvpForm from '@/components/invitation/RsvpForm';
import DigitalGift from '@/components/invitation/DigitalGift';
import ClosingSection from '@/components/invitation/ClosingSection';
import { FAHREIZA_AMANDA_DATA } from '@/data/demoData';

function PopUpBookContent() {
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

  const handleOpenBook = () => {
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
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D3748] selection:bg-[#B76E79] selection:text-white py-8 px-4">
      {/* Floating Back Header Link */}
      <div className="fixed top-4 left-4 z-40">
        <Link
          href="/"
          className="flex items-center gap-2 bg-white/90 backdrop-blur-md text-[#586955] border border-[#78350F]/40 text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg hover:bg-[#78350F] hover:text-white transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Katalog (3D Pop-Up Book)</span>
        </Link>
      </div>

      <div className="max-w-5xl mx-auto pt-10">
        {/* Interactive 3D Pop-Up Book Component */}
        <ThreeDPopUpBook
          groom={FAHREIZA_AMANDA_DATA.groom}
          bride={FAHREIZA_AMANDA_DATA.bride}
          akad={FAHREIZA_AMANDA_DATA.akad}
          resepsi={FAHREIZA_AMANDA_DATA.resepsi}
          guestName={guestNameParam}
          onOpenBook={handleOpenBook}
        />

        {isOpened && (
          <div className="relative z-10 space-y-12 mt-12 animate-fadeIn duration-1000">
            <MusicPlayer isPlaying={isPlayingAudio} onTogglePlay={handleToggleAudio} />

            <CountdownTimer targetDateISO={FAHREIZA_AMANDA_DATA.eventDateISO} />

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
    </div>
  );
}

export default function PopUpBookPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
        <p className="text-sm font-semibold text-[#78350F] animate-pulse">Memuat Buku 3D Pop-Up...</p>
      </div>
    }>
      <PopUpBookContent />
    </Suspense>
  );
}

'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Pin,
  Search,
  Heart,
  Share2,
  MoreHorizontal,
  Bookmark,
  Play,
  Volume2,
  Calendar as CalendarIcon,
  LayoutGrid,
  Image as ImageIcon,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

import PinterestProfileIntro from '@/components/invitation/pinterest/PinterestProfileIntro';
import PinterestIntroAnimation from '@/components/invitation/pinterest/PinterestIntroAnimation';
import PinterestGroomBride from '@/components/invitation/pinterest/PinterestGroomBride';
import PinterestEventSchedule from '@/components/invitation/pinterest/PinterestEventSchedule';
import PinterestCountdown from '@/components/invitation/pinterest/PinterestCountdown';
import PinterestLoveStoryQuote from '@/components/invitation/pinterest/PinterestLoveStoryQuote';
import PinterestPhotoGallery from '@/components/invitation/pinterest/PinterestPhotoGallery';
import PinterestRsvpForm from '@/components/invitation/pinterest/PinterestRsvpForm';
import PinterestDigitalGift from '@/components/invitation/pinterest/PinterestDigitalGift';
import PinterestQrTicket from '@/components/invitation/pinterest/PinterestQrTicket';
import ClosingSection from '@/components/invitation/ClosingSection';
import MusicPlayer from '@/components/invitation/MusicPlayer';

import { FAHREIZA_AMANDA_DATA } from '@/data/demoData';

function PinterestContent() {
  const searchParams = useSearchParams();
  const guestNameParam = searchParams.get('to') || 'Tamu Undangan';

  const [isOpen, setIsOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const [activeBottomTab, setActiveBottomTab] = useState<'home' | 'boards' | 'schedule' | 'gallery' | 'rsvp'>('home');
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(true);

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

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#111111] font-sans selection:bg-[#E60023] selection:text-white overflow-x-hidden w-full max-w-full">
      {/* 1. Gate Cover Screen */}
      {!isOpen && !showSplash && (
        <PinterestProfileIntro
          guestName={guestNameParam}
          groomName={FAHREIZA_AMANDA_DATA.groom.name}
          brideName={FAHREIZA_AMANDA_DATA.bride.name}
          weddingDate={FAHREIZA_AMANDA_DATA.akad.date}
          venueName={FAHREIZA_AMANDA_DATA.akad.venue}
          onOpenInvitation={handleOpenInvitation}
        />
      )}

      {/* 2. Splash Intro Animation Screen (2.2s) */}
      <AnimatePresence>
        {showSplash && <PinterestIntroAnimation />}
      </AnimatePresence>

      {/* 3. Main Pinterest Invitation Content (Strict overflow-x-hidden) */}
      {isOpen && (
        <div className="min-h-screen bg-[#F5F5F5] pb-28 overflow-x-hidden w-full max-w-full">
          <MusicPlayer isPlaying={isPlayingAudio} onTogglePlay={handleToggleAudio} />

          {/* Top Pinterest Navbar (Fixed Header) */}
          <header className="sticky top-0 z-30 bg-white border-b border-zinc-200 px-3 sm:px-4 py-3 flex items-center justify-between shadow-xs w-full max-w-full overflow-hidden">
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <Link
                href="/"
                className="p-1.5 sm:p-2 rounded-full hover:bg-zinc-100 transition-colors text-[#111111] cursor-pointer"
                title="Kembali ke Katalog"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E60023] text-white flex items-center justify-center font-black text-lg sm:text-xl shadow-sm shrink-0">
                P
              </div>
            </div>

            {/* Center Search Input Pill */}
            <div className="flex-1 max-w-sm mx-2 sm:mx-3 flex items-center gap-2 bg-[#F0F0F0] px-3 py-1.5 sm:py-2 rounded-full text-xs text-zinc-600 overflow-hidden">
              <Search className="w-4 h-4 text-zinc-400 shrink-0" />
              <span className="truncate font-medium text-zinc-700 text-[11px] sm:text-xs">
                {FAHREIZA_AMANDA_DATA.groom.name} &amp; {FAHREIZA_AMANDA_DATA.bride.name} per...
              </span>
            </div>

            {/* Language & Profile Pill */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <div className="flex items-center bg-[#F0F0F0] rounded-full p-0.5 text-[10px] sm:text-[11px] font-bold">
                <span className="bg-black text-white px-1.5 sm:px-2 py-0.5 rounded-full">ID</span>
                <span className="text-zinc-500 px-1.5 sm:px-2 py-0.5">EN</span>
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E60023] text-white flex items-center justify-center font-bold text-xs shadow-sm shrink-0">
                😊
              </div>
            </div>
          </header>

          {/* Main Container Fixed Width */}
          <main className="max-w-xl mx-auto px-3 sm:px-4 pt-4 space-y-6 overflow-hidden w-full">
            {/* HERO PIN CARD CONTAINER (MATCHED EXACTLY WITH SCREENSHOT REFERENCE) */}
            <div id="home-section" className="bg-white rounded-[28px] sm:rounded-[32px] p-3.5 sm:p-4 shadow-xl border border-zinc-200/80 space-y-4 overflow-hidden w-full">
              {/* Main Portrait Pin Image (Black & White Aesthetic) */}
              <div className="relative w-full aspect-[4/5] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-zinc-900 shadow-md">
                <Image
                  src="/assets/images/hero-wedding.webp"
                  alt="Pinterest Hero Pin"
                  fill
                  className="object-cover grayscale contrast-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Top Pin Tag */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold text-[#111111] shadow-md flex items-center gap-1.5">
                  <Pin className="w-3.5 h-3.5 text-[#E60023] fill-current" />
                  <span>Official Wedding Pin</span>
                </div>
              </div>

              {/* Under-Image Action Bar */}
              <div className="flex items-center justify-between pt-1 px-1">
                {/* Left Icons: Heart, Share, More */}
                <div className="flex items-center gap-2 sm:gap-4 text-zinc-800">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className="p-1.5 sm:p-2 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer"
                  >
                    <Heart className={`w-5 h-5 sm:w-6 sm:h-6 ${isLiked ? 'fill-red-500 text-red-500' : 'text-zinc-800'}`} />
                  </button>
                  <button className="p-1.5 sm:p-2 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer">
                    <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-800" />
                  </button>
                  <button className="p-1.5 sm:p-2 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer">
                    <MoreHorizontal className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-800" />
                  </button>
                </div>

                {/* Right Buttons: Simpan (Red Save) + Play Audio */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <button
                    onClick={() => setIsSaved(!isSaved)}
                    className={`font-extrabold text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer shadow-md ${
                      isSaved
                        ? 'bg-[#E60023] hover:bg-[#B6001A] text-white shadow-[#E60023]/30'
                        : 'bg-zinc-200 text-black hover:bg-zinc-300'
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                    <span>{isSaved ? 'Simpan' : 'Tersimpan'}</span>
                  </button>

                  <button
                    onClick={handleToggleAudio}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-zinc-200 text-black shadow-md flex items-center justify-center hover:bg-zinc-50 transition-all cursor-pointer shrink-0"
                    title="Play / Pause Audio"
                  >
                    {isPlayingAudio ? (
                      <Volume2 className="w-4 h-4 text-[#E60023]" />
                    ) : (
                      <Play className="w-4 h-4 text-black fill-current ml-0.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Author / Creator Row */}
              <div className="flex items-center justify-between pt-3 border-t border-zinc-100">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div className="relative flex items-center -space-x-3 shrink-0">
                    <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-white overflow-hidden bg-zinc-800 shadow">
                      <Image src={FAHREIZA_AMANDA_DATA.groom.photoUrl} alt="Groom" fill className="object-cover" />
                    </div>
                    <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-white overflow-hidden bg-zinc-800 shadow">
                      <Image src={FAHREIZA_AMANDA_DATA.bride.photoUrl} alt="Bride" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="truncate">
                    <h3 className="font-extrabold text-xs sm:text-sm text-[#111111] flex items-center gap-1 truncate">
                      {FAHREIZA_AMANDA_DATA.groom.name} &amp; {FAHREIZA_AMANDA_DATA.bride.name}
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E60023] fill-current shrink-0" />
                    </h3>
                    <p className="text-[10px] sm:text-xs text-zinc-500 truncate">26.8k pengikut &bull; Pin Resmi</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsFollowing(!isFollowing)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-extrabold text-[11px] sm:text-xs transition-all cursor-pointer shrink-0 ${
                    isFollowing
                      ? 'bg-[#E9E9E9] text-[#111111] hover:bg-[#D8D8D8]'
                      : 'bg-[#E60023] text-white hover:bg-[#B6001A]'
                  }`}
                >
                  {isFollowing ? 'Mengikuti' : 'Ikuti'}
                </button>
              </div>
            </div>

            {/* SECTIONS LIST */}
            <div className="space-y-6 sm:space-y-8 overflow-hidden w-full">
              {/* 1. Groom & Bride Section (Dua Hati, Satu Papan) */}
              <div id="boards-section" className="overflow-hidden w-full">
                <PinterestGroomBride
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
              </div>

              {/* 2. Event Schedule Pinned Cards */}
              <div id="schedule-section" className="overflow-hidden w-full">
                <PinterestEventSchedule
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
              </div>

              {/* 3. Horizontal Countdown & Calendar */}
              <div className="overflow-hidden w-full">
                <PinterestCountdown targetDate={FAHREIZA_AMANDA_DATA.eventDateISO} />
              </div>

              {/* 4. Quran Quote & Love Story Idea Pins */}
              <div className="overflow-hidden w-full">
                <PinterestLoveStoryQuote timeline={FAHREIZA_AMANDA_DATA.loveStories} />
              </div>

              {/* 5. Masonry Photo Gallery Grid */}
              <div id="gallery-section" className="overflow-hidden w-full">
                <PinterestPhotoGallery
                  photos={FAHREIZA_AMANDA_DATA.galleryPhotos}
                  coupleNames={`${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`}
                />
              </div>

              {/* 6. RSVP & Pin Comments */}
              <div id="rsvp-section" className="overflow-hidden w-full">
                <PinterestRsvpForm initialGuestName={guestNameParam} />
              </div>

              {/* 7. Digital Gift & Tip Jar */}
              <div className="overflow-hidden w-full">
                <PinterestDigitalGift
                  bankAccounts={FAHREIZA_AMANDA_DATA.bankAccounts}
                  qrisUrl={FAHREIZA_AMANDA_DATA.qrisUrl}
                  giftAddress={{
                    recipient: `${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`,
                    address: FAHREIZA_AMANDA_DATA.giftAddress,
                    phone: '0812-3456-7890',
                  }}
                />
              </div>

              {/* 8. VIP Event Pass Ticket */}
              <div className="overflow-hidden w-full">
                <PinterestQrTicket
                  guestName={guestNameParam}
                  coupleNames={`${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`}
                  weddingDate={FAHREIZA_AMANDA_DATA.akad.date}
                  venueName={FAHREIZA_AMANDA_DATA.akad.venue}
                />
              </div>

              {/* 9. Closing Section */}
              <div className="overflow-hidden w-full">
                <ClosingSection
                  groomName={FAHREIZA_AMANDA_DATA.groom.name}
                  brideName={FAHREIZA_AMANDA_DATA.bride.name}
                  accentColor="#E60023"
                  themeName="WeddingBoard (Pinterest Edition)"
                />
              </div>
            </div>
          </main>

          {/* FIXED BOTTOM MOBILE TAB NAVIGATION BAR */}
          <footer className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-zinc-200 py-2 px-4 sm:px-6 flex justify-around items-center text-zinc-600 shadow-lg max-w-full overflow-hidden">
            {/* Home Icon */}
            <button
              onClick={() => {
                setActiveBottomTab('home');
                scrollToSection('home-section');
              }}
              className={`p-2 flex flex-col items-center transition-colors cursor-pointer ${
                activeBottomTab === 'home' ? 'text-[#E60023]' : 'hover:text-[#E60023] text-zinc-600'
              }`}
              title="Home Pin"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
              </svg>
            </button>

            {/* Boards Grid Icon */}
            <button
              onClick={() => {
                setActiveBottomTab('boards');
                scrollToSection('boards-section');
              }}
              className={`p-2 flex flex-col items-center transition-colors cursor-pointer ${
                activeBottomTab === 'boards' ? 'text-[#E60023]' : 'hover:text-[#E60023] text-zinc-600'
              }`}
              title="Profil Terhubung"
            >
              <LayoutGrid className="w-6 h-6" />
            </button>

            {/* Schedule Calendar Icon */}
            <button
              onClick={() => {
                setActiveBottomTab('schedule');
                scrollToSection('schedule-section');
              }}
              className={`p-2 flex flex-col items-center transition-colors cursor-pointer ${
                activeBottomTab === 'schedule' ? 'text-[#E60023]' : 'hover:text-[#E60023] text-zinc-600'
              }`}
              title="Event Schedule"
            >
              <CalendarIcon className="w-6 h-6" />
            </button>

            {/* Gallery Icon */}
            <button
              onClick={() => {
                setActiveBottomTab('gallery');
                scrollToSection('gallery-section');
              }}
              className={`p-2 flex flex-col items-center transition-colors cursor-pointer ${
                activeBottomTab === 'gallery' ? 'text-[#E60023]' : 'hover:text-[#E60023] text-zinc-[#5F5F5F]'
              }`}
              title="Masonry Gallery"
            >
              <ImageIcon className="w-6 h-6" />
            </button>

            {/* RSVP Heart Icon */}
            <button
              onClick={() => {
                setActiveBottomTab('rsvp');
                scrollToSection('rsvp-section');
              }}
              className={`p-2 flex flex-col items-center transition-colors cursor-pointer ${
                activeBottomTab === 'rsvp' ? 'text-[#E60023]' : 'hover:text-[#E60023] text-zinc-[#5F5F5F]'
              }`}
              title="RSVP Form"
            >
              <Heart className="w-6 h-6" />
            </button>
          </footer>
        </div>
      )}
    </div>
  );
}

export default function PinterestPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center text-[#111111]">
          <p className="text-sm font-semibold text-[#E60023] animate-pulse">
            Memuat WeddingBoard (Pinterest Edition)...
          </p>
        </div>
      }
    >
      <PinterestContent />
    </Suspense>
  );
}

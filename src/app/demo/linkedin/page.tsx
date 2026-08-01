'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  CheckCircle2,
  Share2,
  MapPin,
  Play,
  Pause,
  Plus,
  Home,
  Briefcase,
  Calendar as CalendarIcon,
  Image as ImageIcon,
  MessageSquare,
  MoreHorizontal,
  ThumbsUp,
  Repeat,
  Send,
  Search,
  Users,
  Bell,
  Grid,
  Bookmark,
  ExternalLink,
  UserPlus,
  Info,
} from 'lucide-react';

import LinkedinProfileIntro from '@/components/invitation/linkedin/LinkedinProfileIntro';
import LinkedinIntroAnimation from '@/components/invitation/linkedin/LinkedinIntroAnimation';
import LinkedinGroomBride from '@/components/invitation/linkedin/LinkedinGroomBride';
import LinkedinEventSchedule from '@/components/invitation/linkedin/LinkedinEventSchedule';
import LinkedinCountdown from '@/components/invitation/linkedin/LinkedinCountdown';
import LinkedinLoveStoryQuote from '@/components/invitation/linkedin/LinkedinLoveStoryQuote';
import LinkedinPhotoGallery from '@/components/invitation/linkedin/LinkedinPhotoGallery';
import LinkedinRsvpForm from '@/components/invitation/linkedin/LinkedinRsvpForm';
import LinkedinDigitalGift from '@/components/invitation/linkedin/LinkedinDigitalGift';
import LinkedinQrTicket from '@/components/invitation/linkedin/LinkedinQrTicket';
import LinkedinClosingSection from '@/components/invitation/linkedin/LinkedinClosingSection';
import MusicPlayer from '@/components/invitation/MusicPlayer';

import { FAHREIZA_AMANDA_DATA } from '@/data/demoData';

function LinkedInContent() {
  const searchParams = useSearchParams();
  const guestNameParam = searchParams.get('to') || 'Tamu Undangan';

  const [isOpen, setIsOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const [activeTab, setActiveTab] = useState<'postingan' | 'pengalaman' | 'unggulan' | 'komentar'>('postingan');
  const [activeBottomTab, setActiveBottomTab] = useState<'beranda' | 'pengalaman' | 'acara' | 'media' | 'komentar'>('beranda');
  const [isConnected, setIsConnected] = useState(false);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(6);

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

  const handleToggleLike = () => {
    if (isPostLiked) {
      setLikeCount((prev) => prev - 1);
      setIsPostLiked(false);
    } else {
      setLikeCount((prev) => prev + 1);
      setIsPostLiked(true);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F2EF] text-[#191919] font-sans selection:bg-[#0A66C2] selection:text-white w-full max-w-full linkedin-theme">
      {/* 1. Gate Cover Screen */}
      {!isOpen && !showSplash && (
        <LinkedinProfileIntro
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
        {showSplash && <LinkedinIntroAnimation />}
      </AnimatePresence>

      {/* 3. Main LinkedIn Profile Invitation */}
      {isOpen && (
        <div className="min-h-screen bg-[#F3F2EF] pb-28 md:pb-12 w-full max-w-full linkedin-theme relative">
          <MusicPlayer isPlaying={isPlayingAudio} onTogglePlay={handleToggleAudio} />

          {/* ========================================================================= */}
          {/* TOP NAVBAR HEADER: MOBILE VERSION (< md) */}
          {/* ========================================================================= */}
          <header className="md:hidden sticky top-0 z-50 bg-white border-b border-zinc-200 px-3.5 py-2 flex items-center justify-between shadow-xs w-full">
            <div className="flex items-center gap-2.5 truncate">
              <Link href="/" className="p-1 rounded-full hover:bg-zinc-100 text-zinc-700" title="Kembali ke Katalog">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="w-8 h-8 rounded bg-[#0A66C2] text-white font-bold text-lg flex items-center justify-center shrink-0 shadow-xs">
                in
              </div>
              <div className="truncate">
                <h1 className="font-semibold text-xs text-[#000000e6] flex items-center gap-1 truncate leading-tight">
                  {FAHREIZA_AMANDA_DATA.groom.name} &amp; {FAHREIZA_AMANDA_DATA.bride.name}
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0A66C2] fill-current shrink-0" />
                </h1>
                <p className="text-[11px] text-[#00000099] truncate font-normal">
                  Calon Pengantin &bull; Menikah {FAHREIZA_AMANDA_DATA.akad.date}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <div className="flex items-center bg-[#F0F0F0] rounded-full p-0.5 text-[10px] font-semibold">
                <span className="bg-[#0A66C2] text-white px-2 py-0.5 rounded-full">ID</span>
                <span className="text-zinc-500 px-2 py-0.5">EN</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white text-xl flex items-center justify-center shrink-0 shadow-xs select-none">
                🧕🏻
              </div>
            </div>
          </header>

          {/* ========================================================================= */}
          {/* TOP NAVBAR HEADER: DESKTOP WEB VERSION (≥ md) */}
          {/* ========================================================================= */}
          <div className="hidden md:block sticky top-0 z-50 bg-white border-b border-zinc-200 shadow-xs w-full">
            <header className="px-6 py-1.5 flex items-center justify-between max-w-7xl mx-auto w-full">
              <div className="flex items-center gap-3">
                <Link href="/" className="p-1 rounded-full hover:bg-zinc-100 text-zinc-700" title="Kembali ke Katalog">
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <div className="w-8 h-8 rounded bg-[#0A66C2] text-white font-bold text-xl flex items-center justify-center shrink-0 shadow-xs">
                  in
                </div>
                <div className="relative">
                  <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    readOnly
                    value="Cari undangan, jadwal akad, lokasi..."
                    className="bg-[#EDF3F8] text-xs text-zinc-600 rounded-md pl-9 pr-4 py-1.5 w-64 border-none focus:outline-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Desktop Web Nav Items */}
              <div className="flex items-center gap-6 text-xs text-[#00000099] font-normal">
                <button onClick={() => scrollToSection('home-section')} className="flex flex-col items-center hover:text-[#0A66C2] text-[#0A66C2]">
                  <Home className="w-5 h-5" />
                  <span className="text-[10px] mt-0.5">Beranda</span>
                </button>

                <button onClick={() => scrollToSection('pengalaman-section')} className="flex flex-col items-center hover:text-[#0A66C2]">
                  <Users className="w-5 h-5" />
                  <span className="text-[10px] mt-0.5">Koneksi</span>
                </button>

                <button onClick={() => scrollToSection('acara-section')} className="flex flex-col items-center hover:text-[#0A66C2]">
                  <CalendarIcon className="w-5 h-5" />
                  <span className="text-[10px] mt-0.5">Acara</span>
                </button>

                <button onClick={() => scrollToSection('komentar-section')} className="flex flex-col items-center hover:text-[#0A66C2]">
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-[10px] mt-0.5">Pesan</span>
                </button>

                <button onClick={() => scrollToSection('rekomendasi-section')} className="flex flex-col items-center hover:text-[#0A66C2]">
                  <Bell className="w-5 h-5" />
                  <span className="text-[10px] mt-0.5">Notifikasi</span>
                </button>

                <div className="h-6 w-[1px] bg-zinc-200" />

                <div className="flex items-center gap-1.5 cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-white text-xl flex items-center justify-center shrink-0 shadow-xs select-none">
                    🧕🏻
                  </div>
                  <span className="text-[11px] font-semibold text-[#000000e6]">Saya ▾</span>
                </div>
              </div>
            </header>
          </div>

          {/* ========================================================================= */}
          {/* MAIN CONTAINER: RESPONSIVE DESKTOP 3-COLUMN WITH FIXED STICKY SIDEBARS */}
          {/* ========================================================================= */}
          <div className="max-w-7xl mx-auto pt-3 md:pt-5 px-0 md:px-6 flex flex-col md:flex-row gap-5 items-start relative">
            {/* ===================================================================== */}
            {/* LEFT SIDEBAR: STAYS FIXED/STICKY ON SCROLL (≥ md) */}
            {/* ===================================================================== */}
            <aside className="hidden md:block w-72 shrink-0 space-y-3 sticky top-16 self-start z-10">
              {/* Mini Profile Card */}
              <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-xs space-y-3">
                <div className="relative w-full h-16 bg-[#0A66C2]">
                  <Image src="/assets/images/hero-wedding.webp" alt="Cover" fill sizes="288px" className="object-cover opacity-80" />
                </div>

                <div className="px-4 pb-3 space-y-2 relative">
                  <div className="-mt-10 mb-1 relative w-16 h-16 rounded-full border-2 border-white overflow-hidden bg-zinc-900 shadow-md">
                    <Image src="/assets/images/hero-wedding.webp" alt="Avatar" fill sizes="64px" className="object-cover" />
                  </div>

                  <div>
                    <h3 className="font-bold text-sm text-[#000000e6] flex items-center gap-1">
                      {FAHREIZA_AMANDA_DATA.groom.name} &amp; {FAHREIZA_AMANDA_DATA.bride.name}
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0A66C2] fill-current" />
                    </h3>
                    <p className="text-[11px] text-[#00000099] font-normal">Calon Pengantin &bull; Menikah {FAHREIZA_AMANDA_DATA.akad.date}</p>
                  </div>

                  <div className="pt-2 border-t border-zinc-100 space-y-1 text-xs text-[#00000099] font-normal">
                    <div className="flex justify-between">
                      <span>Pengunjung profil</span>
                      <strong className="text-[#0A66C2] font-semibold">1,240</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Koneksi terhubung</span>
                      <strong className="text-[#0A66C2] font-semibold">8</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Quick Links Box */}
              <div className="bg-white border border-zinc-200 rounded-xl p-3 space-y-2 text-xs font-semibold text-[#000000e6] shadow-xs">
                <div className="text-[11px] font-bold text-[#00000099] uppercase tracking-wider px-1">Pintasan Undangan</div>
                <button onClick={() => scrollToSection('pengalaman-section')} className="w-full text-left px-2 py-1.5 rounded hover:bg-zinc-100 flex items-center gap-2 text-zinc-700">
                  <Bookmark className="w-4 h-4 text-[#0A66C2]" /> Dua Hati, Satu Cerita
                </button>
                <button onClick={() => scrollToSection('rekomendasi-section')} className="w-full text-left px-2 py-1.5 rounded hover:bg-zinc-100 flex items-center gap-2 text-zinc-700">
                  <Info className="w-4 h-4 text-[#0A66C2]" /> Rekomendasi Ayat
                </button>
                <button onClick={() => scrollToSection('acara-section')} className="w-full text-left px-2 py-1.5 rounded hover:bg-zinc-100 flex items-center gap-2 text-zinc-700">
                  <CalendarIcon className="w-4 h-4 text-[#0A66C2]" /> Jadwal Akad &amp; Resepsi
                </button>
              </div>
            </aside>

            {/* ===================================================================== */}
            {/* CENTER COLUMN: MAIN FEED STREAM (SCROLLABLE) */}
            {/* ===================================================================== */}
            <main className="flex-1 max-w-xl mx-auto w-full space-y-4">
              {/* LINKEDIN MAIN PROFILE CARD */}
              <div id="home-section" className="bg-white border-b md:border border-zinc-200 md:rounded-xl shadow-xs space-y-3 pb-4 overflow-hidden">
                {/* Cover Banner */}
                <div className="relative w-full h-36 sm:h-44 bg-[#0A66C2]">
                  <Image
                    src="/assets/images/hero-wedding.webp"
                    alt="LinkedIn Cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Profile Details */}
                <div className="px-4 pt-0 space-y-3">
                  {/* Avatar with Green #SEGERAMENIKAH Ring + Hubungkan & Bagikan Buttons */}
                  <div className="-mt-14 mb-1 flex items-end justify-between">
                    {/* Avatar Frame with Green Status Ring */}
                    <div className="relative p-1 rounded-full bg-emerald-600 shadow-xl shrink-0">
                      <div className="relative w-22 h-22 sm:w-26 sm:h-26 rounded-full border-4 border-white overflow-hidden bg-zinc-900">
                        <Image
                          src="/assets/images/hero-wedding.webp"
                          alt="Avatar Pengantin"
                          fill
                          sizes="104px"
                          className="object-cover"
                          priority
                        />
                      </div>
                      {/* Ring Badge Overlay */}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-semibold text-[8.5px] px-2 py-0.5 rounded-full border border-white whitespace-nowrap shadow-xs uppercase">
                        #SEGERAMENIKAH
                      </div>
                    </div>

                    {/* Hubungkan & Bagikan Action Buttons */}
                    <div className="flex items-center gap-2 mb-1">
                      <button
                        onClick={() => setIsConnected(!isConnected)}
                        className={`font-semibold text-xs px-5 py-2.5 rounded-full shadow-xs transition-all cursor-pointer ${
                          isConnected
                            ? 'bg-zinc-200 text-zinc-800'
                            : 'bg-[#0A66C2] hover:bg-[#004182] text-white'
                        }`}
                      >
                        {isConnected ? '✓ Terhubung' : 'Hubungkan'}
                      </button>

                      <button className="border border-zinc-400 text-zinc-700 hover:bg-zinc-100 font-semibold text-xs px-4 py-2.5 rounded-full flex items-center gap-1 cursor-pointer">
                        <Share2 className="w-3.5 h-3.5" /> Bagikan
                      </button>
                    </div>
                  </div>

                  {/* Profile Name & Subtitle Headline */}
                  <div className="space-y-0.5 pt-1">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#000000e6] flex items-center gap-1.5 leading-tight">
                      {FAHREIZA_AMANDA_DATA.groom.name} <span className="text-[#0A66C2] font-normal">&amp;</span> {FAHREIZA_AMANDA_DATA.bride.name}
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#0A66C2] fill-current shrink-0" />
                    </h2>
                    <p className="text-xs text-[#00000099] font-normal">
                      Calon Pengantin &bull; Menikah {FAHREIZA_AMANDA_DATA.akad.date}
                    </p>
                    <p className="text-xs text-[#000000e6] leading-normal font-normal pt-1.5">
                      Dengan penuh syukur dan kerendahan hati, kami mengundang Bapak/Ibu/Saudara/i <strong className="text-black font-semibold capitalize">{guestNameParam}</strong> untuk hadir dan menjadi saksi ikatan janji suci kami.
                    </p>
                  </div>

                  {/* Location & Connection Stats */}
                  <div className="space-y-2 pt-1 border-t border-zinc-100">
                    <div className="flex items-center gap-4 text-xs text-[#000000e6] flex-wrap">
                      <div className="flex items-center gap-1.5 font-normal">
                        <MapPin className="w-4 h-4 text-zinc-700 shrink-0" />
                        <span>{FAHREIZA_AMANDA_DATA.akad.venue}</span>
                      </div>

                      <div className="flex items-center gap-1.5 font-normal text-[#00000099]">
                        <div className="w-4 h-4 rounded bg-zinc-800 flex items-center justify-center text-white text-[9px]">
                          📅
                        </div>
                        <span>Bergabung November 2026</span>
                      </div>
                    </div>

                    <p className="text-xs text-[#00000099] font-normal">
                      <strong className="text-[#0A66C2] font-semibold hover:underline cursor-pointer">8 koneksi</strong> &bull; 6 pengikut
                    </p>
                  </div>
                </div>

                {/* TABS NAVIGATION BAR */}
                <div className="flex items-center justify-around border-t border-zinc-200 px-4 pt-2.5 text-xs font-semibold text-[#00000099] overflow-x-auto">
                  <button
                    onClick={() => setActiveTab('postingan')}
                    className={`pb-2.5 px-3 transition-colors cursor-pointer border-b-2 whitespace-nowrap ${
                      activeTab === 'postingan' ? 'border-[#0A66C2] text-[#0A66C2] font-semibold' : 'border-transparent hover:text-zinc-900'
                    }`}
                  >
                    Postingan
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('pengalaman');
                      scrollToSection('pengalaman-section');
                    }}
                    className={`pb-2.5 px-3 transition-colors cursor-pointer border-b-2 whitespace-nowrap ${
                      activeTab === 'pengalaman' ? 'border-[#0A66C2] text-[#0A66C2] font-semibold' : 'border-transparent hover:text-zinc-900'
                    }`}
                  >
                    Pengalaman
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('unggulan');
                      scrollToSection('unggulan-section');
                    }}
                    className={`pb-2.5 px-3 transition-colors cursor-pointer border-b-2 whitespace-nowrap ${
                      activeTab === 'unggulan' ? 'border-[#0A66C2] text-[#0A66C2] font-semibold' : 'border-transparent hover:text-zinc-900'
                    }`}
                  >
                    Unggulan
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('komentar');
                      scrollToSection('komentar-section');
                    }}
                    className={`pb-2.5 px-3 transition-colors cursor-pointer border-b-2 whitespace-nowrap ${
                      activeTab === 'komentar' ? 'border-[#0A66C2] text-[#0A66C2] font-semibold' : 'border-transparent hover:text-zinc-900'
                    }`}
                  >
                    Komentar
                  </button>
                </div>
              </div>

              {/* FEED STREAM */}
              <div className="px-3 sm:px-0 space-y-4">
                {/* 1. PINNED POST ITEM CARD */}
                <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden space-y-3 shadow-xs">
                  <div className="p-4 pb-0 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="relative w-9 h-9 rounded-full overflow-hidden bg-zinc-900 shrink-0 border border-zinc-200">
                          <Image src="/assets/images/hero-wedding.webp" alt="Avatar" fill sizes="36px" className="object-cover" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xs text-[#000000e6] flex items-center gap-1">
                            {FAHREIZA_AMANDA_DATA.groom.name} &amp; {FAHREIZA_AMANDA_DATA.bride.name}
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0A66C2] fill-current" />
                            <span className="text-[#00000099] font-normal">&bull; 1st</span>
                          </h3>
                          <p className="text-[11px] text-[#00000099] font-normal">
                            Calon Pengantin &bull; Menikah {FAHREIZA_AMANDA_DATA.akad.date}
                          </p>
                          <p className="text-[10px] text-[#00000099] font-normal">Disematkan &bull; 🌐</p>
                        </div>
                      </div>

                      <MoreHorizontal className="w-5 h-5 text-zinc-500 cursor-pointer" />
                    </div>

                    <p className="text-xs text-[#000000e6] leading-relaxed font-normal">
                      Dengan penuh syukur dan kerendahan hati, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan menjadi saksi ikatan janji suci kami.
                    </p>

                    <p className="text-[10px] text-[#00000099] font-normal">
                      {FAHREIZA_AMANDA_DATA.akad.date}
                    </p>
                  </div>

                  {/* Prewedding Photo Attachment */}
                  <div className="relative w-full aspect-[4/5] bg-black">
                    <Image
                      src="/assets/images/hero-wedding.webp"
                      alt="Prewedding Photo Attachment"
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover grayscale contrast-105"
                    />
                  </div>

                  {/* Reactions Count Bar */}
                  <div className="px-4 py-2 flex items-center justify-between text-xs text-[#00000099] border-b border-zinc-100">
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center -space-x-1">
                        <span className="w-4 h-4 rounded-full bg-[#0A66C2] text-white flex items-center justify-center text-[9px] font-bold">👍</span>
                        <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[9px] font-bold">👏</span>
                        <span className="w-4 h-4 rounded-full bg-red-500 text-white flex items-center justify-center text-[9px] font-bold">❤️</span>
                      </div>
                      <span className="text-xs font-normal">{likeCount}</span>
                    </div>
                    <span className="text-xs font-normal text-[#00000099]">6 komentar</span>
                  </div>

                  {/* Action Bar */}
                  <div className="px-2 py-1.5 flex justify-around text-xs font-semibold text-[#00000099]">
                    <button
                      onClick={handleToggleLike}
                      className={`flex items-center gap-1.5 py-2 px-3 rounded hover:bg-zinc-100 transition-colors cursor-pointer ${
                        isPostLiked ? 'text-[#0A66C2]' : 'text-zinc-600'
                      }`}
                    >
                      <ThumbsUp className={`w-4 h-4 ${isPostLiked ? 'fill-current' : ''}`} />
                      <span>Suka</span>
                    </button>

                    <button
                      onClick={() => scrollToSection('komentar-section')}
                      className="flex items-center gap-1.5 py-2 px-3 rounded hover:bg-zinc-100 transition-colors cursor-pointer text-zinc-600"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Komentar</span>
                    </button>

                    <button
                      onClick={() => scrollToSection('komentar-section')}
                      className="flex items-center gap-1.5 py-2 px-3 rounded hover:bg-zinc-100 transition-colors cursor-pointer text-zinc-600"
                    >
                      <Repeat className="w-4 h-4" />
                      <span>Postinq...</span>
                    </button>

                    <button
                      onClick={() => scrollToSection('komentar-section')}
                      className="flex items-center gap-1.5 py-2 px-3 rounded hover:bg-zinc-100 transition-colors cursor-pointer text-zinc-600"
                    >
                      <Send className="w-4 h-4" />
                      <span>Kirim</span>
                    </button>
                  </div>
                </div>

                {/* 2. MENANTI HARI BAHAGIA / COUNTDOWN CARD */}
                <div id="unggulan-section">
                  <LinkedinCountdown targetDate={FAHREIZA_AMANDA_DATA.eventDateISO} />
                </div>

                {/* 3. DUA HATI, SATU CERITA / MEMPELAI PENGANTIN */}
                <div id="pengalaman-section">
                  <LinkedinGroomBride
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

                {/* 4. REKOMENDASI (KUTIPAN SURAH AR-RUM: 21 & TIMELINE) */}
                <div id="rekomendasi-section">
                  <LinkedinLoveStoryQuote timeline={FAHREIZA_AMANDA_DATA.loveStories} />
                </div>

                {/* 5. JADWAL ACARA AKAD NIKAH & RESEPSI */}
                <div id="acara-section">
                  <LinkedinEventSchedule
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

                {/* 6. MEDIA GALLERY */}
                <div id="media-section">
                  <LinkedinPhotoGallery
                    photos={FAHREIZA_AMANDA_DATA.galleryPhotos}
                    coupleNames={`${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`}
                  />
                </div>

                {/* 7. KOMENTAR & RSVP */}
                <div id="komentar-section">
                  <LinkedinRsvpForm initialGuestName={guestNameParam} />
                </div>

                {/* 8. DIGITAL GIFT */}
                <LinkedinDigitalGift
                  bankAccounts={FAHREIZA_AMANDA_DATA.bankAccounts}
                  qrisUrl={FAHREIZA_AMANDA_DATA.qrisUrl}
                  giftAddress={{
                    recipient: `${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`,
                    address: FAHREIZA_AMANDA_DATA.giftAddress,
                    phone: '0812-3456-7890',
                  }}
                />

                {/* 9. VIP QR TICKET */}
                <LinkedinQrTicket
                  guestName={guestNameParam}
                  coupleNames={`${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`}
                  weddingDate={FAHREIZA_AMANDA_DATA.akad.date}
                  venueName={FAHREIZA_AMANDA_DATA.akad.venue}
                />

                {/* 10. LIGHT LINKEDIN CLOSING SECTION */}
                <LinkedinClosingSection
                  groomName={FAHREIZA_AMANDA_DATA.groom.name}
                  brideName={FAHREIZA_AMANDA_DATA.bride.name}
                />
              </div>
            </main>

            {/* ===================================================================== */}
            {/* RIGHT SIDEBAR: STAYS FIXED/STICKY ON SCROLL (≥ md) */}
            {/* ===================================================================== */}
            <aside className="hidden md:block w-80 shrink-0 space-y-3 sticky top-16 self-start z-10">
              {/* LinkedIn News & Trending Box */}
              <div className="bg-white border border-zinc-200 rounded-xl p-4 space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-[#000000e6]">Berita Pernikahan &bull; Trending</h3>
                  <Info className="w-4 h-4 text-zinc-500" />
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="space-y-0.5 cursor-pointer hover:bg-zinc-50 p-1.5 rounded transition-colors">
                    <h4 className="font-semibold text-[#000000e6] flex items-center justify-between">
                      <span>#FahreizaAmandaWedding</span>
                      <span className="text-[10px] text-zinc-400 font-normal">Top Story</span>
                    </h4>
                    <p className="text-[11px] text-[#00000099] font-normal">21 November 2026 &bull; Grand Ballroom Hotel Mulia</p>
                  </div>

                  <div className="space-y-0.5 cursor-pointer hover:bg-zinc-50 p-1.5 rounded transition-colors">
                    <h4 className="font-semibold text-[#000000e6]">Akad &amp; Resepsi Pernikahan</h4>
                    <p className="text-[11px] text-[#00000099] font-normal">800+ Tamu Undangan dikonfirmasi hadir</p>
                  </div>

                  <div className="space-y-0.5 cursor-pointer hover:bg-zinc-50 p-1.5 rounded transition-colors">
                    <h4 className="font-semibold text-[#000000e6]">WeddingConnect LinkedIn Edition</h4>
                    <p className="text-[11px] text-[#00000099] font-normal">Teman &amp; Kolega Profesional</p>
                  </div>
                </div>
              </div>

              {/* People You May Know / Bridesmaids & Groomsmen Widget */}
              <div className="bg-white border border-zinc-200 rounded-xl p-4 space-y-3 shadow-xs">
                <h3 className="font-bold text-sm text-[#000000e6]">Orang yang mungkin Anda kenal</h3>

                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0">
                      B
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-[#000000e6] truncate">Bridesmaids &amp; Groomsmen</h4>
                      <p className="text-[11px] text-[#00000099] truncate font-normal">Sahabat Karib Pengantin</p>
                      <button className="mt-1 border border-[#0A66C2] text-[#0A66C2] hover:bg-blue-50 font-semibold text-[11px] px-3 py-1 rounded-full flex items-center gap-1">
                        <UserPlus className="w-3 h-3" /> Hubungkan
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#0A66C2] text-white font-bold flex items-center justify-center shrink-0">
                      K
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-[#000000e6] truncate">Keluarga Besar Pengantin</h4>
                      <p className="text-[11px] text-[#00000099] truncate font-normal">Bpk. Hendra &amp; Ir. Bambang</p>
                      <button className="mt-1 border border-[#0A66C2] text-[#0A66C2] hover:bg-blue-50 font-semibold text-[11px] px-3 py-1 rounded-full flex items-center gap-1">
                        <UserPlus className="w-3 h-3" /> Hubungkan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* FLOATING FAB ACTION BUTTONS (MOBILE ONLY) */}
          <div className="md:hidden fixed bottom-16 left-4 right-4 z-40 max-w-xl mx-auto flex items-center justify-between pointer-events-none px-2">
            {/* Audio Pause/Play Circle FAB on Left */}
            <button
              onClick={handleToggleAudio}
              className="w-12 h-12 rounded-full bg-[#0A66C2] text-white shadow-xl flex items-center justify-center hover:scale-105 transition-all cursor-pointer pointer-events-auto"
              title="Play/Pause Audio"
            >
              {isPlayingAudio ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
            </button>

            {/* + Mulai postingan Blue Pill FAB on Right */}
            <button
              onClick={() => scrollToSection('komentar-section')}
              className="bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold text-xs px-5 py-3 rounded-full shadow-xl flex items-center gap-1.5 transition-all cursor-pointer pointer-events-auto"
            >
              <Plus className="w-4 h-4" />
              <span>Mulai postingan</span>
            </button>
          </div>

          {/* FIXED BOTTOM MOBILE TAB BAR (MOBILE ONLY < md) */}
          <footer className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-zinc-200 py-2 px-6 flex justify-around items-center text-zinc-600 shadow-lg">
            <button
              onClick={() => {
                setActiveBottomTab('beranda');
                scrollToSection('home-section');
              }}
              className={`p-1.5 flex flex-col items-center cursor-pointer transition-colors ${
                activeBottomTab === 'beranda' ? 'text-[#0A66C2]' : 'hover:text-[#0A66C2] text-zinc-600'
              }`}
              title="Beranda"
            >
              <Home className="w-5 h-5" />
              <span className="text-[9px] font-semibold">Beranda</span>
            </button>

            <button
              onClick={() => {
                setActiveBottomTab('pengalaman');
                scrollToSection('pengalaman-section');
              }}
              className={`p-1.5 flex flex-col items-center cursor-pointer transition-colors ${
                activeBottomTab === 'pengalaman' ? 'text-[#0A66C2]' : 'hover:text-[#0A66C2] text-zinc-600'
              }`}
              title="Pengalaman"
            >
              <Briefcase className="w-5 h-5" />
              <span className="text-[9px] font-semibold">Pengalaman</span>
            </button>

            <button
              onClick={() => {
                setActiveBottomTab('acara');
                scrollToSection('acara-section');
              }}
              className={`p-1.5 flex flex-col items-center cursor-pointer transition-colors ${
                activeBottomTab === 'acara' ? 'text-[#0A66C2]' : 'hover:text-[#0A66C2] text-zinc-600'
              }`}
              title="Acara"
            >
              <CalendarIcon className="w-5 h-5" />
              <span className="text-[9px] font-semibold">Acara</span>
            </button>

            <button
              onClick={() => {
                setActiveBottomTab('media');
                scrollToSection('media-section');
              }}
              className={`p-1.5 flex flex-col items-center cursor-pointer transition-colors ${
                activeBottomTab === 'media' ? 'text-[#0A66C2]' : 'hover:text-[#0A66C2] text-zinc-600'
              }`}
              title="Media"
            >
              <ImageIcon className="w-5 h-5" />
              <span className="text-[9px] font-semibold">Media</span>
            </button>

            <button
              onClick={() => {
                setActiveBottomTab('komentar');
                scrollToSection('komentar-section');
              }}
              className={`p-1.5 flex flex-col items-center cursor-pointer transition-colors ${
                activeBottomTab === 'komentar' ? 'text-[#0A66C2]' : 'hover:text-[#0A66C2] text-zinc-600'
              }`}
              title="Komentar"
            >
              <MessageSquare className="w-5 h-5" />
              <span className="text-[9px] font-semibold">Komentar</span>
            </button>
          </footer>
        </div>
      )}
    </div>
  );
}

export default function LinkedInPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F3F2EF] flex items-center justify-center text-[#191919] linkedin-theme">
          <p className="text-sm font-semibold text-[#0A66C2] animate-pulse">
            Memuat WeddingConnect (LinkedIn Edition)...
          </p>
        </div>
      }
    >
      <LinkedInContent />
    </Suspense>
  );
}

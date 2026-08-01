'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  CheckCircle2,
  Calendar,
  MapPin,
  Link as LinkIcon,
  Bell,
  Mail,
  Pin,
  MessageCircle,
  Repeat2,
  Heart,
  Share,
  MoreHorizontal,
  Bookmark,
  BarChart2,
  Sparkles,
  Search,
  Home,
  Hash,
  User,
  Zap,
  TrendingUp,
  Sliders,
} from 'lucide-react';

import TwitterProfileIntro from '@/components/invitation/twitter/TwitterProfileIntro';
import TwitterIntroAnimation from '@/components/invitation/twitter/TwitterIntroAnimation';
import TwitterGroomBride from '@/components/invitation/twitter/TwitterGroomBride';
import TwitterEventSchedule from '@/components/invitation/twitter/TwitterEventSchedule';
import TwitterCountdown from '@/components/invitation/twitter/TwitterCountdown';
import TwitterLoveStoryQuote from '@/components/invitation/twitter/TwitterLoveStoryQuote';
import TwitterPhotoGallery from '@/components/invitation/twitter/TwitterPhotoGallery';
import TwitterRsvpForm from '@/components/invitation/twitter/TwitterRsvpForm';
import TwitterDigitalGift from '@/components/invitation/twitter/TwitterDigitalGift';
import TwitterQrTicket from '@/components/invitation/twitter/TwitterQrTicket';
import ClosingSection from '@/components/invitation/ClosingSection';
import MusicPlayer from '@/components/invitation/MusicPlayer';

import { FAHREIZA_AMANDA_DATA } from '@/data/demoData';

function TwitterContent() {
  const searchParams = useSearchParams();
  const guestNameParam = searchParams.get('to') || 'Tamu Undangan';

  const [isOpen, setIsOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const [activeTab, setActiveTab] = useState<'posts' | 'replies' | 'highlights' | 'media' | 'likes'>('posts');

  const [isFollowing, setIsFollowing] = useState(true);
  const [pinnedLiked, setPinnedLiked] = useState(false);
  const [pinnedLikesCount, setPinnedLikesCount] = useState(2026);
  const [pinnedRetweeted, setPinnedRetweeted] = useState(false);
  const [pinnedRetweetsCount, setPinnedRetweetsCount] = useState(452);

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
    <div className="min-h-screen bg-black text-[#E7E9EA] font-sans selection:bg-[#1DA1F2] selection:text-white">
      {/* 1. Gate Cover Screen */}
      {!isOpen && !showSplash && (
        <TwitterProfileIntro
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
        {showSplash && <TwitterIntroAnimation />}
      </AnimatePresence>

      {/* 3. Main Twitter Invitation Content (Full 3-Column Twitter Layout) */}
      {isOpen && (
        <div className="min-h-screen bg-black flex justify-center pb-24 relative">
          <MusicPlayer isPlaying={isPlayingAudio} onTogglePlay={handleToggleAudio} />

          {/* LEFT SIDEBAR (DESKTOP NAVIGATION) */}
          <aside className="hidden lg:flex flex-col justify-between w-64 p-4 border-r border-[#2F3336] sticky top-0 h-screen shrink-0 select-none">
            <div className="space-y-6">
              {/* Logo X */}
              <div className="pl-3">
                <Link href="/" className="inline-block hover:bg-zinc-900 p-2.5 rounded-full transition-colors">
                  <svg className="w-8 h-8 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
              </div>

              {/* Navigation Items */}
              <nav className="space-y-1 font-bold text-lg">
                <Link href="/" className="flex items-center gap-4 px-4 py-3 hover:bg-zinc-900 rounded-full transition-colors text-white">
                  <Home className="w-6 h-6" />
                  <span>Home</span>
                </Link>
                <div className="flex items-center gap-4 px-4 py-3 hover:bg-zinc-900 rounded-full transition-colors text-[#71767B] cursor-not-allowed">
                  <Hash className="w-6 h-6" />
                  <span>Explore</span>
                </div>
                <div className="flex items-center gap-4 px-4 py-3 hover:bg-zinc-900 rounded-full transition-colors text-[#71767B] cursor-not-allowed">
                  <Bell className="w-6 h-6" />
                  <span>Notifications</span>
                </div>
                <div className="flex items-center gap-4 px-4 py-3 hover:bg-zinc-900 rounded-full transition-colors text-[#71767B] cursor-not-allowed">
                  <Mail className="w-6 h-6" />
                  <span>Messages</span>
                </div>
                <div className="flex items-center gap-4 px-4 py-3 bg-zinc-900 text-white rounded-full font-extrabold">
                  <User className="w-6 h-6 text-[#1DA1F2]" />
                  <span>Profile</span>
                </div>
              </nav>

              {/* Post Button */}
              <button
                onClick={() => {
                  const rsvpEl = document.getElementById('rsvp');
                  rsvpEl?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3.5 bg-[#1DA1F2] hover:bg-sky-500 text-white font-extrabold text-base rounded-full shadow-lg shadow-[#1DA1F2]/25 transition-all cursor-pointer"
              >
                Post RSVP
              </button>
            </div>

            {/* Profile Bottom Mini Bar */}
            <div className="flex items-center justify-between p-3 rounded-full hover:bg-zinc-900 transition-colors border border-[#2F3336]">
              <div className="flex items-center gap-2">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-sky-400">
                  <Image src={FAHREIZA_AMANDA_DATA.groom.photoUrl} alt="Groom" fill className="object-cover" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-white leading-tight">Fahreiza &amp; Amanda</p>
                  <p className="text-[#71767B]">@fahreiza_amanda</p>
                </div>
              </div>
              <MoreHorizontal className="w-4 h-4 text-[#71767B]" />
            </div>
          </aside>

          {/* MAIN CENTRAL FEED */}
          <main className="w-full max-w-xl border-x border-[#2F3336] bg-black min-h-screen relative shrink-0">
            {/* Top Twitter Profile Sticky Navigation Header */}
            <header className="sticky top-0 z-30 bg-black/80 backdrop-blur-md border-b border-[#2F3336] px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <Link
                  href="/"
                  className="p-2 rounded-full hover:bg-zinc-900 transition-colors text-white cursor-pointer"
                  title="Kembali ke Katalog"
                >
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <div>
                  <h1 className="font-bold text-base text-white flex items-center gap-1.5 leading-tight">
                    {FAHREIZA_AMANDA_DATA.groom.name} &amp; {FAHREIZA_AMANDA_DATA.bride.name}
                    <CheckCircle2 className="w-4 h-4 text-[#1DA1F2] fill-[#1DA1F2]" />
                  </h1>
                  <p className="text-xs text-[#71767B]">2,026 Posts &bull; Wedding Announcement</p>
                </div>
              </div>

              {/* Floating Catalog Link Button */}
              <Link
                href="/"
                className="flex items-center gap-1.5 bg-[#1DA1F2] hover:bg-sky-500 text-white font-bold text-xs px-3 py-1.5 rounded-full transition-all shadow-md"
              >
                <span>Katalog Theme</span>
              </Link>
            </header>

            {/* Profile Banner */}
            <div className="relative w-full h-40 sm:h-52 bg-zinc-900 overflow-hidden">
              <Image
                src="/assets/images/hero-wedding.webp"
                alt="Profile Banner"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
            </div>

            {/* Profile Header Details Section */}
            <div className="px-4 pb-4 border-b border-[#2F3336] relative">
              {/* Profile Avatar Stack & Action Buttons */}
              <div className="flex justify-between items-end -mt-16 sm:-mt-20 mb-4">
                {/* Avatar Frame Stack (No face overlays!) */}
                <div className="relative flex items-center -space-x-4">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-black overflow-hidden bg-zinc-900 shadow-2xl shrink-0">
                    <Image
                      src={FAHREIZA_AMANDA_DATA.groom.photoUrl}
                      alt={FAHREIZA_AMANDA_DATA.groom.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-black overflow-hidden bg-zinc-900 shadow-2xl shrink-0">
                    <Image
                      src={FAHREIZA_AMANDA_DATA.bride.photoUrl}
                      alt={FAHREIZA_AMANDA_DATA.bride.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Header Action Buttons */}
                <div className="flex items-center gap-2 mb-1">
                  <button className="p-2 border border-[#536471] rounded-full hover:bg-zinc-900 text-white transition-colors cursor-pointer">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="p-2 border border-[#536471] rounded-full hover:bg-zinc-900 text-white transition-colors cursor-pointer">
                    <Bell className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={`px-4 py-1.5 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                      isFollowing
                        ? 'bg-transparent border border-[#536471] text-white hover:border-red-500 hover:text-red-500'
                        : 'bg-white text-black hover:bg-zinc-200'
                    }`}
                  >
                    {isFollowing ? 'Following' : 'Follow'}
                  </button>
                </div>
              </div>

              {/* Profile Name & Handle */}
              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-1.5 tracking-tight">
                  {FAHREIZA_AMANDA_DATA.groom.name} &amp; {FAHREIZA_AMANDA_DATA.bride.name}
                  <CheckCircle2 className="w-5 h-5 text-[#1DA1F2] fill-[#1DA1F2]" />
                </h2>
                <p className="text-xs sm:text-sm text-[#71767B] font-mono">
                  @fahreiza_amanda &bull; Official Wedding Announcement
                </p>
              </div>

              {/* Profile Bio */}
              <p className="mt-3 text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans">
                Dengan memohon rahmat &amp; rida Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri momen suci pernikahan kami. 💍✨ #FahreizaAmandaWedding
              </p>

              {/* Profile Meta Details */}
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-[#71767B]">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{FAHREIZA_AMANDA_DATA.akad.venue}</span>
                </div>
                <div className="flex items-center gap-1">
                  <LinkIcon className="w-3.5 h-3.5 text-[#1DA1F2]" />
                  <a href="#rsvp" className="text-[#1DA1F2] hover:underline">
                    renjanastudio.com/demo/twitter
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Joined November 2026</span>
                </div>
              </div>

              {/* Profile Followers Count */}
              <div className="mt-3 flex gap-4 text-xs text-[#71767B]">
                <p>
                  <strong className="text-white font-bold">452</strong> Following
                </p>
                <p>
                  <strong className="text-white font-bold">26.8K</strong> Followers
                </p>
              </div>

              {/* Guest Greeting Banner Card */}
              <div className="mt-4 p-3.5 rounded-2xl bg-zinc-950 border border-[#2F3336] flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold text-[#1DA1F2] uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Special Guest Invitation
                  </span>
                  <h3 className="text-sm font-bold text-white capitalize mt-0.5">
                    Kepada Yth. {guestNameParam}
                  </h3>
                </div>
                <span className="text-[11px] font-semibold text-sky-400 bg-sky-500/10 border border-sky-500/30 px-3 py-1 rounded-full shrink-0">
                  VIP Guest
                </span>
              </div>
            </div>

            {/* Profile Navigation Tabs (Posts | Replies | Highlights | Media | Likes) */}
            <div className="flex border-b border-[#2F3336] font-bold text-xs sm:text-sm text-[#71767B] sticky top-[53px] z-20 bg-black/90 backdrop-blur-md">
              {(
                [
                  { id: 'posts', label: 'Posts' },
                  { id: 'replies', label: 'Replies' },
                  { id: 'highlights', label: 'Highlights' },
                  { id: 'media', label: 'Media' },
                  { id: 'likes', label: 'Likes' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex-1 py-3.5 hover:bg-zinc-900/60 transition-colors flex flex-col items-center justify-center relative cursor-pointer"
                >
                  <span className={activeTab === tab.id ? 'text-white' : ''}>{tab.label}</span>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 w-12 h-1 bg-[#1DA1F2] rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Profile Tab Feed Content */}
            <div className="divide-y divide-[#2F3336]">
              {/* PINNED TWEET POST: Official Wedding Announcement */}
              <div className="p-4 space-y-3 hover:bg-zinc-950/40 transition-colors">
                {/* Pinned Indicator */}
                <div className="flex items-center gap-2 text-xs font-semibold text-[#71767B] pl-8">
                  <Pin className="w-3.5 h-3.5 text-[#1DA1F2]" />
                  <span>Pinned Post</span>
                </div>

                {/* Tweet Author Row */}
                <div className="flex gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-sky-500/50 shrink-0">
                    <Image
                      src={FAHREIZA_AMANDA_DATA.groom.photoUrl}
                      alt="Avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-bold text-sm text-white hover:underline cursor-pointer">
                          {FAHREIZA_AMANDA_DATA.groom.name} &amp; {FAHREIZA_AMANDA_DATA.bride.name}
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-[#1DA1F2] fill-[#1DA1F2]" />
                        <span className="text-xs text-[#71767B]">@fahreiza_amanda &bull; 2h</span>
                      </div>
                      <MoreHorizontal className="w-4 h-4 text-[#71767B] hover:text-white cursor-pointer" />
                    </div>

                    {/* Tweet Body Text */}
                    <p className="mt-2 text-xs sm:text-sm text-zinc-100 leading-relaxed font-sans">
                      Bismillah. Yth. <strong className="text-[#1DA1F2]">{guestNameParam}</strong>, merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu pada pernikahan kami. 💍🤍
                      <br /><br />
                      📅 {FAHREIZA_AMANDA_DATA.akad.date}<br />
                      📍 {FAHREIZA_AMANDA_DATA.akad.venue}
                    </p>

                    {/* Tweet Media Hero Attachment */}
                    <div className="mt-3 relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#2F3336] shadow-lg">
                      <Image
                        src="/assets/images/hero-wedding.webp"
                        alt="Hero Wedding Attachment"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>

                    {/* Tweet Stats Row */}
                    <div className="flex items-center gap-4 mt-3 text-xs text-[#71767B]">
                      <span><strong className="text-white">{pinnedRetweetsCount}</strong> Reposts</span>
                      <span><strong className="text-white">{pinnedLikesCount}</strong> Likes</span>
                      <span><strong className="text-white">12.4K</strong> Views</span>
                    </div>

                    {/* Tweet Action Bar */}
                    <div className="flex items-center justify-between text-[#71767B] pt-3 mt-2 border-t border-[#2F3336]/60 text-xs">
                      <button className="flex items-center gap-1.5 hover:text-[#1DA1F2] transition-colors cursor-pointer">
                        <MessageCircle className="w-4 h-4" />
                        <span>128</span>
                      </button>
                      <button
                        onClick={() => {
                          setPinnedRetweeted(!pinnedRetweeted);
                          setPinnedRetweetsCount(pinnedRetweeted ? pinnedRetweetsCount - 1 : pinnedRetweetsCount + 1);
                        }}
                        className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                          pinnedRetweeted ? 'text-green-500' : 'hover:text-green-500'
                        }`}
                      >
                        <Repeat2 className="w-4 h-4" />
                        <span>{pinnedRetweetsCount}</span>
                      </button>
                      <button
                        onClick={() => {
                          setPinnedLiked(!pinnedLiked);
                          setPinnedLikesCount(pinnedLiked ? pinnedLikesCount - 1 : pinnedLikesCount + 1);
                        }}
                        className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                          pinnedLiked ? 'text-pink-500' : 'hover:text-pink-500'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${pinnedLiked ? 'fill-pink-500 text-pink-500' : ''}`} />
                        <span>{pinnedLikesCount}</span>
                      </button>
                      <button className="flex items-center gap-1.5 hover:text-[#1DA1F2] transition-colors cursor-pointer">
                        <BarChart2 className="w-4 h-4" />
                        <span>12.4K</span>
                      </button>
                      <div className="flex items-center gap-3">
                        <Bookmark className="w-4 h-4 hover:text-[#1DA1F2] cursor-pointer" />
                        <Share className="w-4 h-4 hover:text-[#1DA1F2] cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TWEET POST 1: Groom & Bride Profile Cards */}
              <div className="p-4">
                <TwitterGroomBride
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

              {/* TWEET POST 2: Event Schedule Pinned Tweets */}
              <div className="p-4">
                <TwitterEventSchedule
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

              {/* TWEET POST 3: Live Countdown Timer & Calendar */}
              <div className="p-4">
                <TwitterCountdown targetDate={FAHREIZA_AMANDA_DATA.eventDateISO} />
              </div>

              {/* TWEET POST 4: Quran Quote & Story Thread */}
              <div className="p-4">
                <TwitterLoveStoryQuote timeline={FAHREIZA_AMANDA_DATA.loveStories} />
              </div>

              {/* TWEET POST 5: Photo Gallery Grid & Lightbox */}
              <div className="p-4">
                <TwitterPhotoGallery
                  photos={FAHREIZA_AMANDA_DATA.galleryPhotos}
                  coupleNames={`${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`}
                />
              </div>

              {/* TWEET POST 6: RSVP Form & Guest Replies Thread */}
              <div id="rsvp" className="p-4">
                <TwitterRsvpForm initialGuestName={guestNameParam} />
              </div>

              {/* TWEET POST 7: Digital Gift & Tip Jar */}
              <div className="p-4">
                <TwitterDigitalGift
                  bankAccounts={FAHREIZA_AMANDA_DATA.bankAccounts}
                  qrisUrl={FAHREIZA_AMANDA_DATA.qrisUrl}
                  giftAddress={{
                    recipient: `${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`,
                    address: FAHREIZA_AMANDA_DATA.giftAddress,
                    phone: '0812-3456-7890',
                  }}
                />
              </div>

              {/* TWEET POST 8: VIP Event Pass QR Ticket */}
              <div className="p-4">
                <TwitterQrTicket
                  guestName={guestNameParam}
                  coupleNames={`${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`}
                  weddingDate={FAHREIZA_AMANDA_DATA.akad.date}
                  venueName={FAHREIZA_AMANDA_DATA.akad.venue}
                />
              </div>

              {/* Closing Section */}
              <div className="p-4">
                <ClosingSection
                  groomName={FAHREIZA_AMANDA_DATA.groom.name}
                  brideName={FAHREIZA_AMANDA_DATA.bride.name}
                  accentColor="#1DA1F2"
                  themeName="WeddingThread (Twitter Profile Edition)"
                />
              </div>
            </div>
          </main>

          {/* RIGHT SIDEBAR (DESKTOP TRENDING & SUGGESTIONS) */}
          <aside className="hidden xl:flex flex-col gap-4 w-80 p-4 border-l border-[#2F3336] sticky top-0 h-screen overflow-y-auto shrink-0 select-none">
            {/* Search Box */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-[#71767B]" />
              <input
                type="text"
                placeholder="Search WeddingThread..."
                className="w-full bg-[#16181C] border border-[#2F3336] rounded-full pl-9 pr-4 py-2 text-xs text-white placeholder-[#71767B] focus:outline-none focus:border-[#1DA1F2]"
              />
            </div>

            {/* Subscribe to Premium Card */}
            <div className="bg-[#16181C] border border-[#2F3336] rounded-2xl p-4 space-y-2">
              <h3 className="font-extrabold text-sm text-white">Subscribe to Premium</h3>
              <p className="text-xs text-[#71767B] leading-relaxed">
                Unlock VIP Access, verified badge, digital gift envelope &amp; priority RSVP confirmation.
              </p>
              <button className="px-4 py-1.5 bg-[#1DA1F2] hover:bg-sky-500 text-white font-bold text-xs rounded-full transition-all">
                Subscribe
              </button>
            </div>

            {/* What's Happening / Trending Topics Card */}
            <div className="bg-[#16181C] border border-[#2F3336] rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-sm text-white flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-[#1DA1F2]" />
                  <span>What&apos;s happening</span>
                </h3>
                <Sliders className="w-4 h-4 text-[#71767B]" />
              </div>

              <div className="space-y-3 divide-y divide-[#2F3336]/60">
                <div className="pt-2 text-xs space-y-0.5">
                  <p className="text-[#71767B] text-[10px]">Wedding Event &bull; Trending in Indonesia</p>
                  <p className="font-bold text-white">#FahreizaAmandaWedding</p>
                  <p className="text-[#71767B] text-[10px]">26.8K Posts</p>
                </div>

                <div className="pt-2 text-xs space-y-0.5">
                  <p className="text-[#71767B] text-[10px]">Event &bull; Trending</p>
                  <p className="font-bold text-white">Akad Nikah Hotel Mulia</p>
                  <p className="text-[#71767B] text-[10px]">12.4K Posts</p>
                </div>

                <div className="pt-2 text-xs space-y-0.5">
                  <p className="text-[#71767B] text-[10px]">Trending &bull; Celebration</p>
                  <p className="font-bold text-white">Resepsi Pernikahan 2026</p>
                  <p className="text-[#71767B] text-[10px]">8.9K Posts</p>
                </div>
              </div>
            </div>

            {/* Who to Follow Recommendation Card */}
            <div className="bg-[#16181C] border border-[#2F3336] rounded-2xl p-4 space-y-3">
              <h3 className="font-extrabold text-sm text-white">Who to follow</h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-zinc-800 border border-sky-400 overflow-hidden relative">
                      <Image src={FAHREIZA_AMANDA_DATA.groom.photoUrl} alt="Groom" fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-white hover:underline cursor-pointer">Fahreiza Taura</p>
                      <p className="text-[#71767B]">@fahreizataura</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-white text-black font-bold rounded-full hover:bg-zinc-200">
                    Follow
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-zinc-800 border border-pink-400 overflow-hidden relative">
                      <Image src={FAHREIZA_AMANDA_DATA.bride.photoUrl} alt="Bride" fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-white hover:underline cursor-pointer">Amanda Fadila</p>
                      <p className="text-[#71767B]">@amandafadila</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-white text-black font-bold rounded-full hover:bg-zinc-200">
                    Follow
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Copyright Links */}
            <div className="px-2 text-[10px] text-[#71767B] space-y-1">
              <p>Terms of Service &bull; Privacy Policy &bull; Cookie Policy</p>
              <p>&copy; 2026 Renjana Studio (WeddingThread X Edition)</p>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

export default function TwitterPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center text-white">
          <p className="text-sm font-semibold text-[#1DA1F2] animate-pulse">
            Memuat WeddingThread Profile...
          </p>
        </div>
      }
    >
      <TwitterContent />
    </Suspense>
  );
}

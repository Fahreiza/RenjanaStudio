'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  MessageSquare,
  Video,
  Phone,
  CheckCheck,
  Smile,
  Paperclip,
  Mic,
  Send,
  MoreVertical,
  Play,
  Pause,
  Heart,
  Bookmark,
  Calendar,
  Users,
  Circle,
  User,
} from 'lucide-react';

import WhatsappProfileIntro from '@/components/invitation/whatsapp/WhatsappProfileIntro';
import WhatsappIntroAnimation from '@/components/invitation/whatsapp/WhatsappIntroAnimation';
import WhatsappGroomBride from '@/components/invitation/whatsapp/WhatsappGroomBride';
import WhatsappEventSchedule from '@/components/invitation/whatsapp/WhatsappEventSchedule';
import WhatsappCountdown from '@/components/invitation/whatsapp/WhatsappCountdown';
import WhatsappLoveStoryQuote from '@/components/invitation/whatsapp/WhatsappLoveStoryQuote';
import WhatsappPhotoGallery from '@/components/invitation/whatsapp/WhatsappPhotoGallery';
import WhatsappRsvpForm from '@/components/invitation/whatsapp/WhatsappRsvpForm';
import WhatsappDigitalGift from '@/components/invitation/whatsapp/WhatsappDigitalGift';
import WhatsappQrTicket from '@/components/invitation/whatsapp/WhatsappQrTicket';
import ClosingSection from '@/components/invitation/ClosingSection';
import MusicPlayer from '@/components/invitation/MusicPlayer';

import { FAHREIZA_AMANDA_DATA } from '@/data/demoData';

function WhatsAppContent() {
  const searchParams = useSearchParams();
  const guestNameParam = searchParams.get('to') || 'Tamu Undangan';

  const [isOpen, setIsOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const [chatInputText, setChatInputText] = useState('');
  const [activeBottomTab, setActiveBottomTab] = useState<'chats' | 'status' | 'communities' | 'calls' | 'profile'>('chats');

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

  const scrollToRsvp = () => {
    const el = document.getElementById('rsvp-chat-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B141A] text-white font-sans selection:bg-[#00A884] selection:text-black overflow-x-hidden w-full max-w-full">
      {/* 1. Gate Cover Screen */}
      {!isOpen && !showSplash && (
        <WhatsappProfileIntro
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
        {showSplash && <WhatsappIntroAnimation />}
      </AnimatePresence>

      {/* 3. Main WhatsApp Invitation Content */}
      {isOpen && (
        <div className="min-h-screen bg-[#0B141A] pb-28 overflow-x-hidden w-full max-w-full">
          <MusicPlayer isPlaying={isPlayingAudio} onTogglePlay={handleToggleAudio} />

          {/* 1. Top Wedapp App Header Bar */}
          <header className="sticky top-0 z-40 bg-[#111B21] border-b border-zinc-800/80 px-3.5 py-2.5 flex items-center justify-between shadow-md w-full max-w-full overflow-hidden">
            <div className="flex items-center gap-3">
              <Link href="/" className="p-1 text-zinc-400 hover:text-white transition-colors" title="Kembali ke Katalog">
                <ArrowLeft className="w-5 h-5" />
              </Link>

              <span className="font-extrabold text-base text-white tracking-wide flex items-center gap-1.5">
                <MessageSquare className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
                Wedapp
              </span>

              <div className="flex items-center gap-1.5 text-[11px]">
                <span className="bg-[#25D366] text-black px-2.5 py-0.5 rounded-full font-extrabold">Semua</span>
                <span className="bg-[#202C33] text-zinc-400 px-2.5 py-0.5 rounded-full font-bold">Belum Dibaca</span>
              </div>
            </div>

            <div className="flex items-center bg-[#202C33] rounded-full p-0.5 text-[10px] font-bold border border-zinc-700/60">
              <span className="bg-[#25D366] text-black px-2 py-0.5 rounded-full">ID</span>
              <span className="text-zinc-400 px-2 py-0.5">EN</span>
            </div>
          </header>

          {/* 2. Active Chat Header Bar with Animated Typing Status */}
          <div className="bg-[#202C33] px-3.5 py-2 flex items-center justify-between border-b border-zinc-800 sticky top-[53px] z-30 shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#25D366] shrink-0">
                <Image src="/assets/images/hero-wedding.webp" alt="Avatar" fill sizes="32px" className="object-cover" />
              </div>
              <div>
                <h2 className="font-extrabold text-xs text-white flex items-center gap-1">
                  {FAHREIZA_AMANDA_DATA.groom.name} &amp; {FAHREIZA_AMANDA_DATA.bride.name}
                  <CheckCheck className="w-3.5 h-3.5 text-[#25D366]" />
                </h2>
                <div className="flex items-center gap-1.5 text-[10px] text-[#25D366] font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
                  </span>
                  <span>sedang mengetik...</span>
                </div>
              </div>
            </div>

            <Video className="w-4 h-4 text-zinc-300 cursor-pointer hover:text-white transition-colors" />
          </div>

          {/* Main Content Stream Container with Authentic WhatsApp Doodle Wallpaper Pattern */}
          <main className="max-w-xl mx-auto px-3 sm:px-4 pt-4 space-y-6 overflow-hidden w-full relative">
            {/* WhatsApp Subtle Background Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#25D366_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Encryption Notice */}
            <div className="bg-[#182229] border border-amber-500/30 text-amber-300/90 text-[10.5px] p-2 rounded-xl text-center shadow-xs relative z-10">
              Pesan dan undangan ini terenkripsi secara end-to-end.
            </div>

            {/* System Date Badge */}
            <div className="text-center relative z-10">
              <span className="bg-[#182229] border border-zinc-800 text-zinc-400 text-[10px] uppercase font-mono font-bold px-3.5 py-1 rounded-md shadow">
                HARI INI &bull; OFFICIAL INVITATION CHAT
              </span>
            </div>

            {/* 1. Main Invitation Chat Bubble (Incoming - Compact Left Aligned like Photo 2) */}
            <div className="flex flex-col items-start relative z-10">
              <div id="home-section" className="bg-[#1F2C34] border border-zinc-800 rounded-2xl rounded-tl-none p-4 sm:p-5 space-y-3 shadow-xl text-white max-w-[82%] sm:max-w-[72%] mr-auto">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#25D366] font-extrabold flex items-center gap-1">
                    UNDANGAN <span className="text-zinc-300 font-normal">Pernikahan</span>
                  </span>
                </div>

                <h3 className="font-black text-xl text-white">
                  {FAHREIZA_AMANDA_DATA.groom.name} &amp; {FAHREIZA_AMANDA_DATA.bride.name}
                </h3>

                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  Dengan penuh syukur dan kerendahan hati, kami mengundang Bapak/Ibu/Saudara/i <strong className="text-white capitalize">{guestNameParam}</strong> untuk hadir dan menjadi saksi ikatan janji suci kami. <span className="text-[#25D366]">#SelamanyaDenganmu</span>
                </p>

                <div className="flex items-center gap-2 text-[10px] font-mono">
                  <span className="bg-[#111B21] px-2.5 py-0.5 rounded border border-zinc-700 text-[#25D366] font-bold">Akad 2026</span>
                  <span className="bg-[#111B21] px-2.5 py-0.5 rounded border border-zinc-700 text-zinc-300 font-bold">RSVP 2 acara</span>
                </div>

                <div className="flex items-center justify-end text-[10px] text-zinc-400 font-mono gap-1 pt-1 border-t border-zinc-800">
                  <span>11:00 AM</span>
                  <CheckCheck className="w-3.5 h-3.5 text-sky-400" />
                </div>
              </div>
            </div>

            {/* 2. Prewedding Photo Attachment (Incoming - Large & Clear Chat Bubble) */}
            <div className="flex flex-col items-start relative z-10">
              <div className="bg-[#1F2C34] border border-zinc-800 rounded-2xl rounded-tl-none p-2 space-y-2 shadow-2xl w-[92%] sm:w-[86%] max-w-[92%] sm:max-w-[86%] mr-auto">
                <div className="relative w-full aspect-[3/4] min-h-[360px] sm:min-h-[460px] rounded-xl overflow-hidden bg-zinc-900">
                  <Image src="/assets/images/hero-wedding.webp" alt="Prewedding Photo" fill sizes="(max-width: 768px) 92vw, 500px" className="object-cover contrast-105" priority />
                </div>
                <div className="flex items-center justify-end text-[10px] text-zinc-400 font-mono gap-1 px-1.5 py-0.5">
                  <span>11:00 AM</span>
                  <CheckCheck className="w-3.5 h-3.5 text-sky-400" />
                </div>
              </div>
            </div>

            {/* 3. EXACT REFERENCE MATCH: OUTGOING VOICE NOTE AUDIO BUBBLE (Outgoing - Compact Right Aligned like Photo 2) */}
            <div className="flex flex-col items-end relative z-10">
              <div className="bg-[#005C4B] rounded-2xl rounded-tr-none px-4 py-3 text-white shadow-xl flex items-center gap-3.5 max-w-[78%] sm:max-w-[65%] ml-auto border border-emerald-600/30">
                {/* Play / Pause Icon Button */}
                <button
                  onClick={handleToggleAudio}
                  className="p-1 text-white hover:text-[#25D366] transition-colors shrink-0 cursor-pointer"
                  title="Putar Pesan Suara"
                >
                  {isPlayingAudio ? (
                    <Pause className="w-6 h-6 fill-current text-white" />
                  ) : (
                    <Play className="w-6 h-6 fill-current text-white" />
                  )}
                </button>

                {/* Rectangular Dash Bars Audio Waveform */}
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-1 overflow-hidden py-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((bar) => (
                      <motion.div
                        key={bar}
                        animate={{
                          opacity: isPlayingAudio ? [0.4, 1, 0.4] : 0.8,
                        }}
                        transition={{ duration: 0.8, repeat: isPlayingAudio ? Infinity : 0, delay: bar * 0.04 }}
                        className={`w-1.5 h-3 rounded-xs ${bar <= 10 ? 'bg-zinc-200' : 'bg-emerald-300/40'}`}
                      />
                    ))}
                  </div>

                  {/* Audio Label Text */}
                  <span className="text-[11px] font-medium text-emerald-100/90 block font-sans">
                    Pesan suara &bull; {FAHREIZA_AMANDA_DATA.groom.name} &amp; {FAHREIZA_AMANDA_DATA.bride.name}
                  </span>
                </div>
              </div>
            </div>

            {/* 4. EXACT REFERENCE MATCH: ACTION REACTION PILLS ROW */}
            <div className="space-y-4 pt-1 relative z-10">
              <div className="flex items-center justify-center gap-2 text-xs flex-wrap">
                {/* Avatar + Pill */}
                <div className="bg-[#202C33] border border-zinc-700/80 rounded-full px-2.5 py-1 flex items-center gap-1.5 shadow-md">
                  <div className="relative w-5 h-5 rounded-full overflow-hidden border border-emerald-500">
                    <Image src="/assets/images/hero-wedding.webp" alt="User" fill sizes="20px" className="object-cover" />
                  </div>
                  <span className="text-[#25D366] font-bold text-xs">+</span>
                </div>

                {/* Heart / Suka Pill */}
                <button
                  onClick={() => scrollToSection('home-section')}
                  className="px-3.5 py-1.5 bg-[#202C33] hover:bg-[#2a3942] border border-zinc-700/80 rounded-full text-zinc-200 flex items-center gap-1.5 font-bold transition-all shadow-md cursor-pointer"
                >
                  <Heart className="w-3.5 h-3.5 text-zinc-400 fill-zinc-400" />
                  <span>Suka</span>
                </button>

                {/* Ingatkan Pill */}
                <button
                  onClick={() => scrollToSection('schedule-section')}
                  className="px-3.5 py-1.5 bg-[#202C33] hover:bg-[#2a3942] border border-zinc-700/80 rounded-full text-zinc-200 flex items-center gap-1.5 font-bold transition-all shadow-md cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Ingatkan</span>
                </button>

                {/* Bagikan Pill */}
                <button
                  onClick={() => scrollToSection('rsvp-chat-section')}
                  className="px-3.5 py-1.5 bg-[#202C33] hover:bg-[#2a3942] border border-zinc-700/80 rounded-full text-zinc-200 flex items-center gap-1.5 font-bold transition-all shadow-md cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Bagikan</span>
                </button>
              </div>

              {/* EXACT REFERENCE MATCH: MAIN CTA BUTTONS ROW */}
              <div className="flex items-center justify-center gap-3">
                {/* Outlined Green Pill: Putar Video */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleToggleAudio}
                  className="flex-1 py-3.5 border-2 border-[#00A884] text-[#00A884] font-black text-xs sm:text-sm rounded-full flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md bg-transparent"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Putar Video</span>
                </motion.button>

                {/* Solid Green Filled Pill: Lihat Acara */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('schedule-section')}
                  className="flex-1 py-3.5 bg-[#00A884] hover:bg-[#008f70] text-black font-black text-xs sm:text-sm rounded-full flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg shadow-[#00A884]/30"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Lihat Acara</span>
                </motion.button>
              </div>
            </div>

            {/* EXACT REFERENCE MATCH: BOTTOM-LEFT 3-DOT TYPING BUBBLE */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center bg-[#202C33] border border-zinc-800/80 rounded-2xl rounded-bl-none px-4 py-3 w-fit shadow-xl relative z-10"
            >
              <div className="flex items-center gap-1.5">
                <motion.span
                  animate={{ y: [0, -3, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0 }}
                  className="w-2 h-2 bg-zinc-300 rounded-full inline-block"
                />
                <motion.span
                  animate={{ y: [0, -3, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 0 }}
                  className="w-2 h-2 bg-zinc-300 rounded-full inline-block"
                />
                <motion.span
                  animate={{ y: [0, -3, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 0.6, delay: 0.4, repeat: Infinity, repeatDelay: 0 }}
                  className="w-2 h-2 bg-zinc-300 rounded-full inline-block"
                />
              </div>
            </motion.div>

            
            {/* 4. "PESAN DISEMATKAN" - Countdown Timer */}
            <div id="countdown-section">
              <WhatsappCountdown targetDate={FAHREIZA_AMANDA_DATA.eventDateISO} />
            </div>

            {/* 5. "INFO GRUP" - Groom & Bride Section (Matched EXACTLY with Screenshot) */}
            <div id="couple-section">
              <WhatsappGroomBride
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

            {/* 6. Event Schedule WA Shared Location Cards */}
            <div id="schedule-section">
              <WhatsappEventSchedule
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

            {/* 7. Quran Quote & Love Story WA Voice Notes */}
            <WhatsappLoveStoryQuote timeline={FAHREIZA_AMANDA_DATA.loveStories} />

            {/* 8. WA Media Gallery Grid */}
            <div id="gallery-section">
              <WhatsappPhotoGallery
                photos={FAHREIZA_AMANDA_DATA.galleryPhotos}
                coupleNames={`${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`}
              />
            </div>

            {/* 11. RSVP WA DM Chat Simulation Form */}
            <div id="rsvp-chat-section">
              <WhatsappRsvpForm initialGuestName={guestNameParam} />
            </div>

            {/* 12. WA Pay Transfer Card & Amplop Digital */}
            <WhatsappDigitalGift
              bankAccounts={FAHREIZA_AMANDA_DATA.bankAccounts}
              qrisUrl={FAHREIZA_AMANDA_DATA.qrisUrl}
              giftAddress={{
                recipient: `${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`,
                address: FAHREIZA_AMANDA_DATA.giftAddress,
                phone: '0812-3456-7890',
              }}
            />

            {/* 13. VIP Event Ticket QR Pass */}
            <WhatsappQrTicket
              guestName={guestNameParam}
              coupleNames={`${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`}
              weddingDate={FAHREIZA_AMANDA_DATA.akad.date}
              venueName={FAHREIZA_AMANDA_DATA.akad.venue}
            />

            {/* 14. Closing Section */}
            <ClosingSection
              groomName={FAHREIZA_AMANDA_DATA.groom.name}
              brideName={FAHREIZA_AMANDA_DATA.bride.name}
              accentColor="#00A884"
              themeName="WhatsApp Edition (Wedapp)"
            />
          </main>

          {/* FIXED BOTTOM TAB BAR NAVIGATION (MATCHED EXACTLY WITH REFERENCE SCREENSHOT) */}
          <footer className="fixed bottom-0 left-0 right-0 z-40 bg-[#111B21] border-t border-zinc-800/80 py-2.5 px-6 flex justify-around items-center text-zinc-400 shadow-xl max-w-full overflow-hidden">
            {/* Chats Icon */}
            <button
              onClick={() => {
                setActiveBottomTab('chats');
                scrollToSection('home-section');
              }}
              className={`p-1.5 flex flex-col items-center cursor-pointer transition-colors ${
                activeBottomTab === 'chats' ? 'text-[#00A884]' : 'hover:text-[#00A884] text-zinc-400'
              }`}
              title="Obrolan Undangan"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
            </button>

            {/* Status Icon */}
            <button
              onClick={() => {
                setActiveBottomTab('status');
                scrollToSection('countdown-section');
              }}
              className={`p-1.5 flex flex-col items-center cursor-pointer transition-colors ${
                activeBottomTab === 'status' ? 'text-[#00A884]' : 'hover:text-[#00A884] text-zinc-400'
              }`}
              title="Status Hitung Mundur"
            >
              <Circle className="w-5 h-5" />
            </button>

            {/* Communities Icon */}
            <button
              onClick={() => {
                setActiveBottomTab('communities');
                scrollToSection('couple-section');
              }}
              className={`p-1.5 flex flex-col items-center cursor-pointer transition-colors ${
                activeBottomTab === 'communities' ? 'text-[#00A884]' : 'hover:text-[#00A884] text-zinc-400'
              }`}
              title="Info Mempelai"
            >
              <Users className="w-5 h-5" />
            </button>

            {/* Calls / Schedule Icon */}
            <button
              onClick={() => {
                setActiveBottomTab('calls');
                scrollToSection('schedule-section');
              }}
              className={`p-1.5 flex flex-col items-center cursor-pointer transition-colors ${
                activeBottomTab === 'calls' ? 'text-[#00A884]' : 'hover:text-[#00A884] text-zinc-400'
              }`}
              title="Jadwal Acara"
            >
              <Phone className="w-5 h-5" />
            </button>

            {/* Profile / RSVP Icon */}
            <button
              onClick={() => {
                setActiveBottomTab('profile');
                scrollToSection('rsvp-chat-section');
              }}
              className={`p-1.5 flex flex-col items-center cursor-pointer transition-colors ${
                activeBottomTab === 'profile' ? 'text-[#00A884]' : 'hover:text-[#00A884] text-zinc-400'
              }`}
              title="Buku Tamu RSVP"
            >
              <User className="w-5 h-5" />
            </button>
          </footer>
        </div>
      )}
    </div>
  );
}

export default function WhatsAppPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0B141A] flex items-center justify-center text-white">
          <p className="text-sm font-semibold text-[#00A884] animate-pulse">
            Memuat WhatsApp Edition (Wedapp)...
          </p>
        </div>
      }
    >
      <WhatsAppContent />
    </Suspense>
  );
}

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

          {/* 1. Top Wedapp App Header Bar (Matched EXACTLY with Reference Screenshot) */}
          <header className="sticky top-0 z-40 bg-[#111B21] border-b border-zinc-800/80 px-3.5 py-2.5 flex items-center justify-between shadow-md w-full max-w-full overflow-hidden">
            <div className="flex items-center gap-3">
              <Link href="/" className="p-1 text-zinc-400 hover:text-white transition-colors" title="Kembali ke Katalog">
                <ArrowLeft className="w-5 h-5" />
              </Link>

              <span className="font-extrabold text-base text-white tracking-wide flex items-center gap-1.5">
                <MessageSquare className="w-5 h-5 text-[#00A884] fill-[#00A884]" />
                Wedapp
              </span>

              <div className="flex items-center gap-1.5 text-[11px]">
                <span className="bg-[#00A884] text-black px-2.5 py-0.5 rounded-full font-extrabold">Semua</span>
                <span className="bg-[#202C33] text-zinc-400 px-2.5 py-0.5 rounded-full font-bold">Belum Dibaca</span>
              </div>
            </div>

            <div className="flex items-center bg-[#202C33] rounded-full p-0.5 text-[10px] font-bold border border-zinc-700/60">
              <span className="bg-[#00A884] text-black px-2 py-0.5 rounded-full">ID</span>
              <span className="text-zinc-400 px-2 py-0.5">EN</span>
            </div>
          </header>

          {/* 2. Active Chat Header Bar */}
          <div className="bg-[#202C33] px-3.5 py-2 flex items-center justify-between border-b border-zinc-800 sticky top-[53px] z-30">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-emerald-500 shrink-0">
                <Image src="/assets/images/hero-wedding.webp" alt="Avatar" fill className="object-cover" />
              </div>
              <div>
                <h2 className="font-extrabold text-xs text-white flex items-center gap-1">
                  {FAHREIZA_AMANDA_DATA.groom.name} &amp; {FAHREIZA_AMANDA_DATA.bride.name}
                  <CheckCheck className="w-3.5 h-3.5 text-[#00A884]" />
                </h2>
                <p className="text-[10px] text-zinc-400 leading-none">
                  {FAHREIZA_AMANDA_DATA.groom.name}, {FAHREIZA_AMANDA_DATA.bride.name}, Bapak Dika
                </p>
              </div>
            </div>

            <Video className="w-4 h-4 text-zinc-300 cursor-pointer" />
          </div>

          {/* Main Content Stream Container (Max Width XL) */}
          <main className="max-w-xl mx-auto px-3 sm:px-4 pt-4 space-y-6 overflow-hidden w-full">
            {/* Encryption Notice */}
            <div className="bg-[#182229] border border-amber-500/30 text-amber-300/90 text-[10.5px] p-2 rounded-xl text-center shadow-xs">
              Pesan dan undangan ini terenkripsi secara end-to-end.
            </div>

            {/* System Date Badge */}
            <div className="text-center">
              <span className="bg-[#182229] border border-zinc-800 text-zinc-400 text-[10px] uppercase font-mono font-bold px-3.5 py-1 rounded-md shadow">
                HARI INI &bull; OFFICIAL INVITATION CHAT
              </span>
            </div>

            {/* 1. Main Invitation Chat Bubble */}
            <div id="home-section" className="bg-[#1F2C34] border border-zinc-800 rounded-2xl rounded-tl-none p-4 sm:p-5 space-y-3 shadow-xl text-white">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#00A884] font-extrabold flex items-center gap-1">
                  UNDANGAN <span className="text-zinc-300 font-normal">Pernikahan</span>
                </span>
              </div>

              <h3 className="font-black text-xl text-white">
                {FAHREIZA_AMANDA_DATA.groom.name} &amp; {FAHREIZA_AMANDA_DATA.bride.name}
              </h3>

              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                Dengan penuh syukur dan kerendahan hati, kami mengundang Bapak/Ibu/Saudara/i <strong className="text-white capitalize">{guestNameParam}</strong> untuk hadir dan menjadi saksi ikatan janji suci kami. <span className="text-[#00A884]">#SelamanyaDenganmu</span>
              </p>

              <div className="flex items-center gap-2 text-[10px] font-mono">
                <span className="bg-[#111B21] px-2.5 py-0.5 rounded border border-zinc-700 text-[#00A884] font-bold">Akad 2026</span>
                <span className="bg-[#111B21] px-2.5 py-0.5 rounded border border-zinc-700 text-zinc-300 font-bold">RSVP 2 acara</span>
              </div>

              <div className="flex items-center justify-end text-[10px] text-zinc-400 font-mono gap-1 pt-1 border-t border-zinc-800">
                <span>11:00 AM</span>
                <CheckCheck className="w-3.5 h-3.5 text-sky-400" />
              </div>
            </div>

            {/* 2. Prewedding Photo Attachment */}
            <div className="bg-[#1F2C34] border border-zinc-800 rounded-2xl p-2 space-y-2 shadow-xl">
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-zinc-900">
                <Image src="/assets/images/hero-wedding.webp" alt="Prewedding Photo" fill className="object-cover grayscale contrast-110" priority />
              </div>
              <div className="flex items-center justify-end text-[10px] text-zinc-400 font-mono gap-1 px-1">
                <span>11:00 AM</span>
                <CheckCheck className="w-3.5 h-3.5 text-sky-400" />
              </div>
            </div>

            {/* 3. Outgoing Voice Note Audio Bubble */}
            <div className="flex flex-col items-end">
              <div className="bg-[#005C4B] rounded-2xl rounded-tr-none p-3.5 text-white shadow-xl flex items-center gap-3 w-full sm:w-[85%]">
                <button onClick={handleToggleAudio} className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center font-bold shrink-0 cursor-pointer shadow-md">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </button>
                <div className="flex-1 space-y-1">
                  <div className="h-1.5 bg-white/30 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-2/3" />
                  </div>
                  <span className="text-xs font-bold text-zinc-100 block">Pesan suara - {FAHREIZA_AMANDA_DATA.groom.name} &amp; {FAHREIZA_AMANDA_DATA.bride.name}</span>
                </div>
              </div>
            </div>

            {/* 4. Action Pills & CTA Buttons Row */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center justify-center gap-2 text-xs flex-wrap">
                <button onClick={() => scrollToSection('home-section')} className="px-3.5 py-1.5 bg-[#202C33] border border-zinc-700 rounded-full text-zinc-200 flex items-center gap-1 font-extrabold cursor-pointer">
                  💐 1
                </button>
                <button onClick={() => scrollToSection('home-section')} className="px-3.5 py-1.5 bg-[#202C33] border border-zinc-700 rounded-full text-zinc-200 flex items-center gap-1 font-extrabold cursor-pointer">
                  <Heart className="w-3.5 h-3.5 text-red-500 fill-current" /> Suka
                </button>
                <button onClick={() => scrollToSection('schedule-section')} className="px-3.5 py-1.5 bg-[#202C33] border border-zinc-700 rounded-full text-zinc-200 flex items-center gap-1 font-extrabold cursor-pointer">
                  <Bookmark className="w-3.5 h-3.5" /> Ingatkan
                </button>
              </div>

              <div className="flex items-center justify-center gap-2.5">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleToggleAudio}
                  className="flex-1 py-3.5 border-2 border-[#00A884] text-[#00A884] font-black text-xs sm:text-sm rounded-full flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Putar Video</span>
                </motion.button>

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

            {/* 5. "PESAN DISEMATKAN" - Countdown Timer */}
            <div id="countdown-section">
              <WhatsappCountdown targetDate={FAHREIZA_AMANDA_DATA.eventDateISO} />
            </div>

            {/* 6. "INFO GRUP" - Groom & Bride Section (Matched EXACTLY with Screenshot) */}
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

            {/* 7. Event Schedule WA Shared Location Cards */}
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

            {/* 8. Quran Quote & Love Story WA Voice Notes */}
            <WhatsappLoveStoryQuote timeline={FAHREIZA_AMANDA_DATA.loveStories} />

            {/* 9. WA Media Gallery Grid */}
            <div id="gallery-section">
              <WhatsappPhotoGallery
                photos={FAHREIZA_AMANDA_DATA.galleryPhotos}
                coupleNames={`${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`}
              />
            </div>

            {/* 10. RSVP WA DM Chat Simulation Form */}
            <div id="rsvp-chat-section">
              <WhatsappRsvpForm initialGuestName={guestNameParam} />
            </div>

            {/* 11. WA Pay Transfer Card & Amplop Digital */}
            <WhatsappDigitalGift
              bankAccounts={FAHREIZA_AMANDA_DATA.bankAccounts}
              qrisUrl={FAHREIZA_AMANDA_DATA.qrisUrl}
              giftAddress={{
                recipient: `${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`,
                address: FAHREIZA_AMANDA_DATA.giftAddress,
                phone: '0812-3456-7890',
              }}
            />

            {/* 12. VIP Event Ticket QR Pass */}
            <WhatsappQrTicket
              guestName={guestNameParam}
              coupleNames={`${FAHREIZA_AMANDA_DATA.groom.name} & ${FAHREIZA_AMANDA_DATA.bride.name}`}
              weddingDate={FAHREIZA_AMANDA_DATA.akad.date}
              venueName={FAHREIZA_AMANDA_DATA.akad.venue}
            />

            {/* 13. Closing Section */}
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

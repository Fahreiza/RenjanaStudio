'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, CheckCheck, MapPin, Mic, Phone, Video } from 'lucide-react';
import RsvpForm from '@/components/invitation/RsvpForm';
import DigitalGift from '@/components/invitation/DigitalGift';
import ClosingSection from '@/components/invitation/ClosingSection';
import MusicPlayer from '@/components/invitation/MusicPlayer';
import { FAHREIZA_AMANDA_DATA } from '@/data/demoData';

function WhatsAppContent() {
  const searchParams = useSearchParams();
  const guestNameParam = searchParams.get('to') || 'Tamu Undangan';

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
    <div className="min-h-screen bg-[#0B141A] text-white font-sans selection:bg-[#128C7E] selection:text-white pb-16">
      {/* Floating Back Header */}
      <div className="fixed top-4 right-4 z-40">
        <Link
          href="/"
          className="flex items-center gap-2 bg-[#25D366] text-black font-bold text-xs px-4 py-2 rounded-full shadow-lg hover:bg-emerald-400 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Katalog (WeddingChat)</span>
        </Link>
      </div>

      <MusicPlayer isPlaying={isPlayingAudio} onTogglePlay={handleToggleAudio} />

      {/* WhatsApp Chat Room Container */}
      <div className="max-w-md mx-auto min-h-screen bg-[#0B141A] border-x border-zinc-800 flex flex-col justify-between">
        {/* WhatsApp Top Header Bar */}
        <div className="bg-[#202C33] p-3 flex items-center justify-between border-b border-zinc-800 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-emerald-500">
              <Image src="/assets/images/sm-PRIA.webp" alt="WhatsApp Group Avatar" fill className="object-cover" />
            </div>
            <div>
              <h1 className="font-bold text-sm text-white">Fahreiza &amp; Amanda Wedding</h1>
              <p className="text-[10px] text-emerald-400">online &bull; Official Invitation Group</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-zinc-300">
            <Video className="w-5 h-5 cursor-pointer" />
            <Phone className="w-5 h-5 cursor-pointer" />
          </div>
        </div>

        {/* WhatsApp Chat Messages Stream */}
        <div className="p-4 space-y-4 flex-1 text-xs">
          {/* System Date Badge */}
          <div className="text-center">
            <span className="bg-[#182229] text-zinc-400 text-[10px] uppercase font-bold px-3 py-1 rounded-md shadow">
              HARI INI
            </span>
          </div>

          {/* Incoming Message: Groom */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col items-start max-w-[85%]">
            <div className="bg-[#202C33] rounded-xl rounded-tl-none p-3.5 space-y-2 text-zinc-200 shadow">
              <span className="text-[#25D366] font-bold block">Fahreiza Pratama</span>
              <p>Assalamu’alaikum Warahmatullahi Wabarakatuh.</p>
              <p>Kepada Yth. Bapak/Ibu/Saudara/i <strong className="text-white">{guestNameParam}</strong>, kami mengundang Anda untuk menghadiri pernikahan kami! 💍✨</p>
              <span className="text-[9px] text-zinc-400 text-right block pt-1">08:00 &bull; Read</span>
            </div>
          </motion.div>

          {/* Media Attachment Message: Hero Photo */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex flex-col items-start max-w-[85%]">
            <div className="bg-[#202C33] rounded-xl p-2 text-zinc-200 shadow space-y-2">
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image src="/assets/images/hero-wedding.webp" alt="Wedding Photo" fill className="object-cover" />
              </div>
              <p className="px-1 text-zinc-300">📅 Sabtu, 21 November 2026 &bull; Grand Ballroom Hotel Mulia Jakarta</p>
            </div>
          </motion.div>

          {/* Voice Note Audio Message */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="flex flex-col items-start max-w-[85%]">
            <div className="bg-[#005C4B] rounded-xl rounded-tl-none p-3 text-white shadow flex items-center gap-3 w-full">
              <button onClick={handleToggleAudio} className="p-2.5 rounded-full bg-[#25D366] text-black">
                <Mic className="w-4 h-4" />
              </button>
              <div className="flex-1">
                <span className="font-bold text-[11px] block">Voice Note Undangan Musik</span>
                <div className="h-1 bg-white/40 rounded-full mt-1 overflow-hidden">
                  <div className="h-full bg-white w-2/3" />
                </div>
              </div>
              <span className="text-[10px] text-zinc-300">0:45</span>
            </div>
          </motion.div>
        </div>

        {/* RSVP & Gift Section Form */}
        <div className="p-4 bg-[#182229] border-t border-zinc-800 space-y-6">
          <RsvpForm initialGuestName={guestNameParam} />

          <DigitalGift
            bankAccounts={FAHREIZA_AMANDA_DATA.bankAccounts}
            qrisUrl={FAHREIZA_AMANDA_DATA.qrisUrl}
            giftAddress={FAHREIZA_AMANDA_DATA.giftAddress}
          />

          <ClosingSection
            groomName={FAHREIZA_AMANDA_DATA.groom.name}
            brideName={FAHREIZA_AMANDA_DATA.bride.name}
            accentColor="#25D366"
            themeName="WhatsApp Edition"
          />
        </div>
      </div>
    </div>
  );
}

export default function WhatsAppPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0B141A] flex items-center justify-center text-white">
        <p className="text-sm font-semibold text-[#25D366] animate-pulse">Memuat WeddingChat...</p>
      </div>
    }>
      <WhatsAppContent />
    </Suspense>
  );
}

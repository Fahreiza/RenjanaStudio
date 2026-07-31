'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, Repeat2, Heart, Share, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import RsvpForm from '@/components/invitation/RsvpForm';
import DigitalGift from '@/components/invitation/DigitalGift';
import ClosingSection from '@/components/invitation/ClosingSection';
import MusicPlayer from '@/components/invitation/MusicPlayer';
import { FAHREIZA_AMANDA_DATA } from '@/data/demoData';

function TwitterContent() {
  const searchParams = useSearchParams();
  const guestNameParam = searchParams.get('to') || 'Tamu Undangan';

  const [likes, setLikes] = useState(2026);
  const [retweets, setRetweets] = useState(452);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

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
    <div className="min-h-screen bg-[#15202B] text-white font-sans selection:bg-[#1DA1F2] selection:text-white pb-16">
      {/* Floating Back Header */}
      <div className="fixed top-4 right-4 z-40">
        <Link
          href="/"
          className="flex items-center gap-2 bg-[#1DA1F2] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg hover:bg-sky-600 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Katalog (WeddingTweet)</span>
        </Link>
      </div>

      <MusicPlayer isPlaying={isPlayingAudio} onTogglePlay={handleToggleAudio} />

      {/* Main Twitter Feed Thread */}
      <div className="max-w-xl mx-auto border-x border-zinc-700/60 min-h-screen bg-[#15202B] p-4 space-y-6">
        {/* Profile Header */}
        <div className="flex items-center gap-3 border-b border-zinc-700/60 pb-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-sky-400 shrink-0">
            <Image src="/assets/images/sm-PRIA.webp" alt="Twitter Avatar" fill className="object-cover" />
          </div>
          <div>
            <h1 className="font-bold text-base text-white flex items-center gap-1">
              Fahreiza &amp; Amanda
              <span className="text-[#1DA1F2]">✓</span>
            </h1>
            <p className="text-xs text-zinc-400">@fahreiza_amanda &bull; Official Wedding Thread</p>
          </div>
        </div>

        {/* Main Tweet */}
        <div className="space-y-4">
          <p className="text-sm md:text-base text-zinc-100 leading-relaxed font-sans">
            Dengan memohon rahmat Allah SWT, kami mengundang Yth. <strong className="text-[#1DA1F2]">{guestNameParam}</strong> pada acara pernikahan kami! 💍✨
            <br /><br />
            📅 Sabtu, 21 November 2026<br />
            📍 Grand Ballroom Hotel Mulia, Jakarta
          </p>

          {/* Main Media Image Attachment */}
          <div className="relative w-full h-[320px] rounded-2xl overflow-hidden border border-zinc-700 shadow-xl">
            <Image src="/assets/images/hero-wedding.webp" alt="Wedding Media" fill className="object-cover" priority />
          </div>

          {/* Tweet Stats & Metrics */}
          <div className="flex items-center gap-6 py-2 border-y border-zinc-700/60 text-xs text-zinc-400">
            <p><strong className="text-white">{retweets}</strong> Retweets</p>
            <p><strong className="text-white">{likes}</strong> Likes</p>
            <p><strong className="text-white">2026</strong> Views</p>
          </div>

          {/* Tweet Action Buttons */}
          <div className="flex items-center justify-around text-zinc-400 py-1 text-xs">
            <button className="flex items-center gap-1.5 hover:text-[#1DA1F2] transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span>Reply</span>
            </button>
            <button
              onClick={() => {
                setIsRetweeted(!isRetweeted);
                setRetweets(isRetweeted ? retweets - 1 : retweets + 1);
              }}
              className={`flex items-center gap-1.5 transition-colors ${isRetweeted ? 'text-green-500' : 'hover:text-green-500'}`}
            >
              <Repeat2 className="w-4 h-4" />
              <span>{retweets}</span>
            </button>
            <button
              onClick={() => {
                setIsLiked(!isLiked);
                setLikes(isLiked ? likes - 1 : likes + 1);
              }}
              className={`flex items-center gap-1.5 transition-colors ${isLiked ? 'text-pink-500 fill-current' : 'hover:text-pink-500'}`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              <span>{likes}</span>
            </button>
            <Share className="w-4 h-4 hover:text-[#1DA1F2] cursor-pointer" />
          </div>
        </div>

        {/* Reply Thread RSVP Form */}
        <div className="pt-4">
          <h3 className="text-sm font-bold text-[#1DA1F2] mb-3">Replying to @fahreiza_amanda (RSVP Form)</h3>
          <RsvpForm initialGuestName={guestNameParam} />
        </div>

        <DigitalGift
          bankAccounts={FAHREIZA_AMANDA_DATA.bankAccounts}
          qrisUrl={FAHREIZA_AMANDA_DATA.qrisUrl}
          giftAddress={FAHREIZA_AMANDA_DATA.giftAddress}
        />

        <ClosingSection
          groomName={FAHREIZA_AMANDA_DATA.groom.name}
          brideName={FAHREIZA_AMANDA_DATA.bride.name}
          accentColor="#1DA1F2"
          themeName="Twitter Edition"
        />
      </div>
    </div>
  );
}

export default function TwitterPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#15202B] flex items-center justify-center text-white">
        <p className="text-sm font-semibold text-[#1DA1F2] animate-pulse">Memuat WeddingTweet...</p>
      </div>
    }>
      <TwitterContent />
    </Suspense>
  );
}

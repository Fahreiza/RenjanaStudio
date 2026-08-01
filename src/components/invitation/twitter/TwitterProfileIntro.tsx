'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, MapPin, Sparkles, CheckCircle2, Volume2, Heart, Lock } from 'lucide-react';

interface TwitterProfileIntroProps {
  guestName: string;
  groomName: string;
  brideName: string;
  weddingDate: string;
  venueName: string;
  onOpenInvitation: () => void;
}

export default function TwitterProfileIntro({
  guestName,
  groomName,
  brideName,
  weddingDate,
  venueName,
  onOpenInvitation,
}: TwitterProfileIntroProps) {
  return (
    <div className="min-h-screen bg-black text-[#E7E9EA] flex items-center justify-center p-4 selection:bg-[#1DA1F2] selection:text-white font-sans relative overflow-hidden">
      {/* Radial X Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1DA1F2]/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />

      {/* Floating Decorative X Icons */}
      <div className="absolute top-10 left-10 text-zinc-800/40 animate-bounce">
        <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 text-zinc-800/40 animate-pulse">
        <svg className="w-16 h-16 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-md bg-black border border-[#2F3336] rounded-3xl overflow-hidden shadow-2xl relative z-10"
      >
        {/* Banner Cover Image */}
        <div className="relative w-full h-44 bg-zinc-900">
          <Image
            src="/assets/images/hero-wedding.webp"
            alt="Wedding Banner"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />

          {/* Top X Logo Header Badge */}
          <div className="absolute top-3 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-md border border-[#2F3336] px-3 py-1 rounded-full text-xs font-semibold">
            <svg className="w-3.5 h-3.5 fill-current text-[#1DA1F2]" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span className="text-zinc-200">WeddingThread</span>
          </div>

          <div className="absolute top-3 right-4 bg-sky-500/10 backdrop-blur-md border border-[#1DA1F2]/40 text-[#1DA1F2] px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
            Official Pass
          </div>
        </div>

        {/* Profile Avatar Stack & Details */}
        <div className="px-6 pb-6 relative">
          <div className="flex items-end justify-between -mt-14 mb-4">
            {/* Avatar Stack */}
            <div className="relative flex items-center -space-x-3">
              <div className="relative w-22 h-22 rounded-full border-4 border-black overflow-hidden bg-zinc-900 shadow-2xl">
                <Image
                  src="/assets/images/sm-PRIA.webp"
                  alt={groomName}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-22 h-22 rounded-full border-4 border-black overflow-hidden bg-zinc-900 shadow-2xl">
                <Image
                  src="/assets/images/sm-WANITA.webp"
                  alt={brideName}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Follow Verified Pill */}
            <span className="bg-[#1DA1F2]/10 border border-[#1DA1F2]/40 text-[#1DA1F2] font-semibold text-xs px-3 py-1 rounded-full flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#1DA1F2] fill-[#1DA1F2]" />
              Verified Event
            </span>
          </div>

          {/* Title */}
          <div className="space-y-1">
            <h1 className="text-2xl font-black text-white flex items-center gap-1.5 tracking-tight">
              {groomName} &amp; {brideName}
              <CheckCircle2 className="w-5 h-5 text-[#1DA1F2] fill-[#1DA1F2]" />
            </h1>
            <p className="text-xs text-[#71767B] font-mono">@fahreiza_amanda &bull; Official Invitation</p>
          </div>

          {/* Guest Greeting Box */}
          <div className="mt-5 p-4 rounded-2xl bg-zinc-950 border border-[#2F3336] text-left space-y-2 relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 text-[#1DA1F2]/10">
              <Sparkles className="w-20 h-20" />
            </div>

            <div className="flex items-center justify-between text-xs text-[#1DA1F2] font-semibold">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                SPECIAL INVITATION FOR
              </span>
              <span className="text-[10px] bg-[#1DA1F2]/20 px-2 py-0.5 rounded text-sky-400 font-mono">
                VIP ACCESS
              </span>
            </div>
            <h2 className="text-xl font-black text-white capitalize tracking-wide">
              {guestName}
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Dengan memohon rahmat Allah SWT, kami mengharapkan kehadiran dan doa restu Bapak/Ibu/Saudara/i pada hari bahagia pernikahan kami.
            </p>
          </div>

          {/* Quick Info */}
          <div className="mt-4 flex flex-col gap-2 text-xs text-zinc-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#71767B]" />
              <span>{weddingDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#71767B]" />
              <span className="truncate">{venueName}</span>
            </div>
          </div>

          {/* Open Invitation Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenInvitation}
            className="mt-6 w-full py-4 bg-[#1DA1F2] hover:bg-sky-500 text-white font-extrabold text-sm rounded-full shadow-xl shadow-[#1DA1F2]/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>BUKA PROFIL UNDANGAN THREAD</span>
          </motion.button>

          <p className="mt-4 text-center text-[10px] text-[#71767B] flex items-center justify-center gap-1">
            <Volume2 className="w-3 h-3 text-[#1DA1F2]" />
            Klik tombol di atas untuk memutar audio musik &amp; animasi intro
          </p>
        </div>
      </motion.div>
    </div>
  );
}

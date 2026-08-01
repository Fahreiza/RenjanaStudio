'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, MapPin, Sparkles, MessageSquare, Volume2, CheckCheck, Phone, Video, ArrowLeft, Lock, Play, Heart, Bookmark, Share2 } from 'lucide-react';

interface WhatsappProfileIntroProps {
  guestName: string;
  groomName: string;
  brideName: string;
  weddingDate: string;
  venueName: string;
  onOpenInvitation: () => void;
}

export default function WhatsappProfileIntro({
  guestName,
  groomName,
  brideName,
  weddingDate,
  venueName,
  onOpenInvitation,
}: WhatsappProfileIntroProps) {
  return (
    <div className="min-h-screen bg-[#0B141A] text-white flex flex-col justify-between font-sans selection:bg-[#00A884] selection:text-white relative overflow-x-hidden w-full max-w-full">
      {/* 1. Top Wedapp App Header (Matched EXACTLY with Reference Screenshot) */}
      <header className="sticky top-0 z-40 bg-[#111B21] border-b border-zinc-800/80 px-3.5 py-2.5 flex items-center justify-between shadow-md w-full">
        <div className="flex items-center gap-3">
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

      {/* 2. Chat Header Bar */}
      <div className="bg-[#202C33] px-3.5 py-2 flex items-center justify-between border-b border-zinc-800">
        <div className="flex items-center gap-2.5">
          <ArrowLeft className="w-4 h-4 text-zinc-300" />
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-emerald-500 shrink-0">
            <Image src="/assets/images/hero-wedding.webp" alt="Avatar" fill className="object-cover" />
          </div>
          <div>
            <h2 className="font-extrabold text-xs text-white flex items-center gap-1">
              {groomName} &amp; {brideName}
              <CheckCheck className="w-3.5 h-3.5 text-[#00A884]" />
            </h2>
            <p className="text-[10px] text-zinc-400 leading-none">{groomName}, {brideName}, Bapak Dika</p>
          </div>
        </div>

        <Video className="w-4 h-4 text-zinc-300 cursor-pointer" />
      </div>

      {/* 3. Main Stream */}
      <main className="flex-1 max-w-md mx-auto w-full px-3 sm:px-4 py-4 space-y-4 overflow-hidden relative z-10 flex flex-col justify-center my-auto">
        {/* Encryption Notice */}
        <div className="bg-[#182229] border border-amber-500/30 text-amber-300/90 text-[10.5px] p-2 rounded-xl text-center shadow-xs">
          Pesan dan undangan ini terenkripsi secara end-to-end.
        </div>

        <div className="text-center">
          <span className="bg-[#182229] text-zinc-400 text-[10px] uppercase font-mono font-bold px-3 py-0.5 rounded shadow">
            HARI INI
          </span>
        </div>

        {/* Incoming Main Invitation Card (Exact Match) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1F2C34] border border-zinc-800 rounded-2xl rounded-tl-none p-4 space-y-3 shadow-xl relative text-white"
        >
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-[#00A884] font-extrabold flex items-center gap-1">
              UNDANGAN <span className="text-zinc-300 font-normal">Pernikahan</span>
            </span>
          </div>

          <h3 className="font-black text-xl text-white">
            {groomName} &amp; {brideName}
          </h3>

          <p className="text-xs text-zinc-300 leading-relaxed font-sans">
            Dengan penuh syukur dan kerendahan hati, kami mengundang Bapak/Ibu/Saudara/i <strong className="text-white capitalize">{guestName}</strong> untuk hadir dan menjadi saksi ikatan janji suci kami.
          </p>

          <div className="flex items-center gap-2 text-[10px] font-mono">
            <span className="bg-[#111B21] px-2 py-0.5 rounded border border-zinc-700 text-emerald-400">Akad 2026</span>
            <span className="bg-[#111B21] px-2 py-0.5 rounded border border-zinc-700 text-zinc-300">RSVP 2 acara</span>
          </div>

          <div className="flex items-center justify-end text-[10px] text-zinc-400 font-mono gap-1 pt-1">
            <span>11:00 AM</span>
            <CheckCheck className="w-3.5 h-3.5 text-sky-400" />
          </div>
        </motion.div>

        {/* Prewedding Attachment Image */}
        <div className="bg-[#1F2C34] border border-zinc-800 rounded-2xl p-2 space-y-2 shadow-xl">
          <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-zinc-900">
            <Image src="/assets/images/hero-wedding.webp" alt="Prewedding" fill className="object-cover grayscale contrast-110" priority />
          </div>
          <div className="flex items-center justify-end text-[10px] text-zinc-400 font-mono gap-1 px-1">
            <span>11:00 AM</span>
            <CheckCheck className="w-3.5 h-3.5 text-sky-400" />
          </div>
        </div>

        {/* Outgoing Voice Note */}
        <div className="flex flex-col items-end">
          <div className="bg-[#005C4B] rounded-2xl rounded-tr-none p-3 text-white shadow flex items-center gap-3 w-[85%]">
            <button onClick={onOpenInvitation} className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold shrink-0">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </button>
            <div className="flex-1 space-y-1">
              <div className="h-1.5 bg-white/30 rounded-full overflow-hidden">
                <div className="h-full bg-white w-2/3" />
              </div>
              <span className="text-[10px] text-zinc-200 block">Pesan suara - {groomName} &amp; {brideName}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-2">
          <div className="flex items-center justify-center gap-2 text-xs">
            <button onClick={onOpenInvitation} className="px-3 py-1.5 bg-[#202C33] border border-zinc-700 rounded-full text-zinc-300 flex items-center gap-1 font-bold">
              💐 1
            </button>
            <button onClick={onOpenInvitation} className="px-3 py-1.5 bg-[#202C33] border border-zinc-700 rounded-full text-zinc-300 flex items-center gap-1 font-bold">
              <Heart className="w-3.5 h-3.5" /> Suka
            </button>
            <button onClick={onOpenInvitation} className="px-3 py-1.5 bg-[#202C33] border border-zinc-700 rounded-full text-zinc-300 flex items-center gap-1 font-bold">
              <Bookmark className="w-3.5 h-3.5" /> Ingatkan
            </button>
          </div>

          <div className="flex items-center justify-center gap-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenInvitation}
              className="flex-1 py-3 border-2 border-[#00A884] text-[#00A884] font-black text-xs rounded-full flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Putar Video</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenInvitation}
              className="flex-1 py-3 bg-[#00A884] text-black font-black text-xs rounded-full flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-[#00A884]/30"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Lihat Acara</span>
            </motion.button>
          </div>
        </div>
      </main>

      {/* Bottom Fixed Tab Bar */}
      <footer className="bg-[#111B21] border-t border-zinc-800/80 py-2.5 px-6 flex justify-around items-center text-zinc-400 z-30">
        <button onClick={onOpenInvitation} className="p-1 text-[#00A884] flex flex-col items-center">
          <MessageSquare className="w-5 h-5" />
        </button>
        <button onClick={onOpenInvitation} className="p-1 hover:text-[#00A884] flex flex-col items-center">
          <div className="w-5 h-5 rounded-full border-2 border-current" />
        </button>
        <button onClick={onOpenInvitation} className="p-1 hover:text-[#00A884] flex flex-col items-center">
          <Phone className="w-5 h-5" />
        </button>
      </footer>
    </div>
  );
}

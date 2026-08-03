'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MessageSquare, CheckCheck, Lock, Play, Sparkles, ChevronRight } from 'lucide-react';

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
    <div className="min-h-screen bg-[#0B141A] text-white flex flex-col justify-between items-center font-sans selection:bg-[#25D366] selection:text-black relative overflow-hidden w-full max-w-full px-4 py-8">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#25D366]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Lock Screen Header Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-2 z-10 pt-4"
      >
        <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-mono tracking-widest uppercase bg-[#111B21]/80 px-4 py-1.5 rounded-full border border-zinc-800 backdrop-blur-md">
          <Lock className="w-3.5 h-3.5 text-[#25D366]" />
          <span>WhatsApp Secure Notification</span>
        </div>
      </motion.div>

      {/* Main Lock Screen Push Notification Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full max-w-md bg-[#1F2C34]/95 border border-zinc-700/60 rounded-3xl p-5 sm:p-6 shadow-2xl shadow-black/80 space-y-5 z-10 backdrop-blur-xl relative"
      >
        {/* Top Notification Header Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center p-1 shadow-md">
              <MessageSquare className="w-full h-full text-black fill-black" />
            </div>
            <span className="font-extrabold text-white tracking-wide">WhatsApp</span>
            <span className="text-[10px] text-zinc-400 font-mono">&bull; Sekarang</span>
          </div>

          <span className="text-[10px] bg-[#005C4B] text-emerald-200 font-extrabold px-2 py-0.5 rounded-md">
            Undangan Resmi
          </span>
        </div>

        {/* Groom & Bride Header */}
        <div className="flex items-center gap-3.5">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#25D366] shrink-0 shadow-lg bg-zinc-900">
            <Image src="/assets/images/hero-wedding.webp" alt="Groom & Bride Avatar" fill className="object-cover" priority />
          </div>

          <div className="space-y-0.5 flex-1 min-w-0">
            <h2 className="font-black text-lg text-white truncate flex items-center gap-1.5">
              <span>{groomName} &amp; {brideName}</span>
              <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0" />
            </h2>
            <p className="text-xs text-[#25D366] font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>Official Wedding Announcement</span>
            </p>
          </div>
        </div>

        {/* Guest Greeting Notification Message Box */}
        <div className="bg-[#111B21] border border-zinc-800 rounded-2xl p-4 space-y-2.5 shadow-inner">
          <p className="text-xs text-zinc-400 font-mono uppercase tracking-wider">
            Kepada Yth. Bapak/Ibu/Saudara/i:
          </p>

          <div className="bg-[#1F2C34] border border-zinc-700/70 p-3 rounded-xl flex items-center justify-between">
            <span className="font-black text-base text-white tracking-wide capitalize">
              {guestName}
            </span>
            <span className="text-[10px] font-bold bg-[#25D366]/20 text-[#25D366] px-2.5 py-1 rounded-full border border-[#25D366]/30">
              Tamu VIP
            </span>
          </div>

          <p className="text-xs text-zinc-300 leading-relaxed font-sans pt-1">
            Anda menerima pesan undangan pernikahan eksklusif. Ketuk tombol di bawah untuk membuka obrolan dan melihat seluruh rangkaian acara.
          </p>

          <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono pt-1">
            <span>📅 {weddingDate}</span>
            <span>📍 {venueName}</span>
          </div>
        </div>

        {/* CTA BUKA UNDANGAN Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onOpenInvitation}
          className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-black font-black text-sm rounded-2xl flex items-center justify-center gap-2 cursor-pointer transition-all shadow-xl shadow-[#25D366]/30 group"
        >
          <MessageSquare className="w-5 h-5 fill-current group-hover:rotate-12 transition-transform" />
          <span className="tracking-wider uppercase">BUKA UNDANGAN CHAT</span>
          <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>

      {/* Footer Watermark */}
      <div className="z-10 text-center space-y-1 pb-2">
        <p className="text-[11px] text-zinc-400 font-medium">
          WhatsApp Edition &bull; Powered by <span className="text-white font-extrabold">Renjana Studio</span>
        </p>
      </div>
    </div>
  );
}


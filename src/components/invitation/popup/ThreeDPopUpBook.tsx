'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Sparkles,
  Heart,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Calendar,
  Clock,
  Navigation,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { GroomBrideInfo, EventDetail } from '@/types/invitation';

interface ThreeDPopUpBookProps {
  groom: GroomBrideInfo;
  bride: GroomBrideInfo;
  akad: EventDetail;
  resepsi: EventDetail;
  guestName: string;
  onOpenBook: () => void;
}

// ── PROCEDURAL REALISTIC PAPER FLIP & BOOK OPEN SOUND SYNTHESIZER ──
const playPageTurnSound = () => {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    // Generate white noise buffer for realistic paper rustle
    const bufferSize = Math.floor(ctx.sampleRate * 0.32);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    // Resonant bandpass filter to simulate soft crisp parchment
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(750, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(280, ctx.currentTime + 0.3);
    filter.Q.value = 1.2;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.005, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.14, ctx.currentTime + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.32);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start();
    noise.stop(ctx.currentTime + 0.32);
  } catch (err) {}
};

const playBookOpenSound = () => {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    // 1. Gentle low spine creak / cover lift
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(110, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(55, ctx.currentTime + 0.4);
    oscGain.gain.setValueAtTime(0.03, ctx.currentTime);
    oscGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
    osc.connect(oscGain);
    oscGain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.42);

    // 2. Silky paper unfolding swoosh
    const bufferSize = Math.floor(ctx.sampleRate * 0.48);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(620, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(240, ctx.currentTime + 0.44);
    filter.Q.value = 0.95;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.005, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.48);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start();
    noise.stop(ctx.currentTime + 0.48);
  } catch (err) {}
};

export default function ThreeDPopUpBook({
  groom,
  bride,
  akad,
  resepsi,
  guestName,
  onOpenBook,
}: ThreeDPopUpBookProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [currentChapter, setCurrentChapter] = useState<number>(1);
  const [flipDirection, setFlipDirection] = useState<'forward' | 'backward' | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleOpenBook = () => {
    if (isOpening || isOpen) return;
    setIsOpening(true);
    playBookOpenSound();

    // Smooth physical hardcover swing & spread unfolding
    setTimeout(() => {
      setIsOpen(true);
      setIsOpening(false);
      try {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.55 },
          colors: ['#D4AF37', '#B76E79', '#8A9A86', '#E07A5F', '#FFF2A3'],
        });
      } catch (e) {}
      onOpenBook();
    }, 700);
  };

  // ── REALISTIC SILKY 3D PAGE TURN FUNCTION ──
  const flipPage = (direction: 'forward' | 'backward') => {
    if (isFlipping) return;

    if (direction === 'forward' && currentChapter < 3) {
      setIsFlipping(true);
      setFlipDirection('forward');
      playPageTurnSound();

      setTimeout(() => {
        setCurrentChapter((prev) => prev + 1);
        setIsFlipping(false);
        setFlipDirection(null);
      }, 820);
    } else if (direction === 'backward' && currentChapter > 1) {
      setIsFlipping(true);
      setFlipDirection('backward');
      playPageTurnSound();

      setTimeout(() => {
        setCurrentChapter((prev) => prev - 1);
        setIsFlipping(false);
        setFlipDirection(null);
      }, 820);
    }
  };

  return (
    <div
      className="w-full max-w-4xl mx-auto py-8 px-2 sm:px-4 select-none"
      style={{ perspective: '2000px' }}
    >
      <div
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-full flex justify-center"
      >
        {!isOpen ? (
          /* ══════════════════════════════════════════════════════
             1. CLOSED 3D HARDCOVER WITH REALISTIC BINDING (STABLE, NO CURSOR WOBBLE)
             ══════════════════════════════════════════════════════ */
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={
              isOpening
                ? {
                    rotateY: -125,
                    x: -70,
                    scale: 0.95,
                    opacity: 0.35,
                  }
                : {
                    rotateY: 0,
                    x: 0,
                    scale: 1,
                    opacity: 1,
                  }
            }
            transition={{
              duration: isOpening ? 0.75 : 0.4,
              ease: [0.25, 1, 0.5, 1],
            }}
            onClick={handleOpenBook}
            style={{
              transformStyle: 'preserve-3d',
              transformOrigin: 'left center',
            }}
            className="relative w-full max-w-sm sm:max-w-md h-[560px] cursor-pointer group"
          >
            {/* 3D Stacked Page Thickness Shadow */}
            <div className="absolute inset-0 bg-[#240c04] rounded-r-3xl rounded-l-md translate-x-3 translate-y-3 shadow-[0_30px_60px_rgba(0,0,0,0.55)]" />
            <div className="absolute right-0 top-3 bottom-3 w-5 bg-gradient-to-l from-[#EDE4D5] to-[#D5C7B0] rounded-r-sm border-y border-r border-[#B3A188] shadow-inner" />

            {/* Front Cover Plate */}
            <div className="relative w-full h-full bg-gradient-to-br from-[#451A03] via-[#632707] to-[#2E0F02] rounded-r-3xl rounded-l-md border-4 border-[#D4AF37] p-8 text-center flex flex-col justify-between items-center shadow-2xl overflow-hidden">
              {/* Spine Hinge Indentation */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#170500] via-[#451A03] to-transparent border-r-2 border-[#D4AF37]/50 rounded-l-md" />

              {/* Gold Corner Filigree */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#D4AF37]" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#D4AF37]" />
              <div className="absolute top-4 left-10 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/60" />
              <div className="absolute bottom-4 left-10 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]/60" />

              {/* Background Emblem */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <Sparkles className="w-64 h-64 text-[#D4AF37]" />
              </div>

              {/* Header */}
              <div className="pt-6 space-y-2 z-10">
                <span className="text-[10px] uppercase tracking-[0.35em] font-serif font-bold text-[#FDE68A] block">
                  THE ROYAL 3D POP-UP STORYBOOK
                </span>
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
              </div>

              {/* Title */}
              <div className="space-y-4 my-auto z-10">
                <span className="text-xs text-amber-200/80 font-serif italic block tracking-wider">
                  The Wedding Storybook of
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl font-black text-[#FDE68A] tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] leading-tight">
                  {groom.name} <span className="font-serif italic text-3xl text-white">&amp;</span> {bride.name}
                </h1>
                <p className="font-serif text-amber-100 text-xs tracking-widest uppercase font-semibold">
                  {akad.date}
                </p>

                {/* VIP Guest Plaque */}
                <div className="bg-[#1C0701]/80 border border-[#D4AF37]/50 rounded-2xl p-4 mt-6 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] backdrop-blur-xs">
                  <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#D4AF37] block">
                    SPECIAL INVITATION FOR:
                  </span>
                  <span className="font-serif font-bold text-lg text-white tracking-wide block mt-1">
                    {guestName}
                  </span>
                </div>
              </div>

              {/* Open Book Button */}
              <div className="w-full z-10 pb-2">
                <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#FFF2A3] to-[#B38728] text-[#3A1402] font-serif font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-[0_8px_20px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-all">
                  <BookOpen className="w-4 h-4 text-[#3A1402]" />
                  <span>Buka Lembaran Buku 3D</span>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          /* ══════════════════════════════════════════════════════
             2. OPENED REALISTIC 3D POP-UP SPREAD WITH PAGE FLIP
             ══════════════════════════════════════════════════════ */
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformStyle: 'preserve-3d' }}
            className="relative w-full max-w-4xl"
          >
            {/* Table Shadow */}
            <div className="absolute inset-0 bg-black/40 rounded-3xl blur-2xl transform translate-y-8 scale-95 pointer-events-none" />

            {/* Base Book Frame */}
            <div
              style={{ transformStyle: 'preserve-3d' }}
              className="relative w-full bg-[#FAF6F0] rounded-3xl border-4 border-[#632707] shadow-2xl overflow-hidden p-4 sm:p-7"
            >
              {/* Stacked Paper Side Edges */}
              <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-[#CFC3B0] via-[#E2D8C7] to-transparent pointer-events-none z-20" />
              <div className="absolute top-0 bottom-0 right-0 w-3 bg-gradient-to-l from-[#CFC3B0] via-[#E2D8C7] to-transparent pointer-events-none z-20" />

              {/* Center Spine Fold Shadow */}
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-12 bg-gradient-to-r from-black/15 via-black/35 to-black/15 pointer-events-none z-30" />
              {/* Satin Bookmark Ribbon */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-32 bg-gradient-to-b from-[#8B2635] via-[#B76E79] to-[#8B2635] shadow-lg rounded-b-md z-40 hidden sm:block pointer-events-none" />

              {/* Top Navigation Bar */}
              <div className="relative z-40 flex items-center justify-between pb-3 border-b border-[#78350F]/20">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#B76E79]" />
                  <span className="font-serif font-bold text-sm sm:text-base text-[#451A03] tracking-wide">
                    Buku 3D Pop-Up &bull; Bab {currentChapter} dari 3
                  </span>
                </div>

                {/* Chapter Quick Jump */}
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-serif font-semibold">
                  {[1, 2, 3].map((num) => (
                    <button
                      key={num}
                      disabled={isFlipping || currentChapter === num}
                      onClick={() => {
                        if (num > currentChapter) flipPage('forward');
                        else if (num < currentChapter) flipPage('backward');
                      }}
                      className={`px-3 py-1 rounded-lg transition-all ${
                        currentChapter === num
                          ? 'bg-[#B76E79] text-white shadow-xs'
                          : 'bg-white/80 text-[#5C3D2E] hover:bg-white border border-[#78350F]/20'
                      }`}
                    >
                      Bab {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* ── SPREAD STAGE CONTAINER (TWO FACING PAGES) ── */}
              <div className="relative min-h-[460px] sm:min-h-[480px] my-5 flex items-center justify-center">
                {/* ── BASE SPREAD (CURRENT CHAPTER CONTENT) ── */}
                <div
                  style={{ transformStyle: 'preserve-3d' }}
                  className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center"
                >
                  {/* ──────────────────────────────────────────
                      LEFT PAGE OF CURRENT SPREAD
                      ────────────────────────────────────────── */}
                  <div className="relative flex flex-col items-center justify-center">
                    {currentChapter === 1 && (
                      <div className="flex flex-col items-center justify-center relative w-full">
                        {/* Floor shadow */}
                        <div className="absolute bottom-1 w-52 h-7 bg-black/25 rounded-full blur-md" />

                        {/* 3D Standing Pop-Up Arch (Layer 1) */}
                        <motion.div
                          initial={{ rotateX: 55, scale: 0.88, opacity: 0 }}
                          animate={{ rotateX: 0, scale: 1, opacity: 1 }}
                          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                          style={{ transform: 'translateZ(30px)', transformOrigin: 'bottom center' }}
                          className="relative w-60 sm:w-64 h-76 sm:h-80 rounded-t-[120px] rounded-b-2xl bg-gradient-to-b from-[#F7E7E0] via-[#FAF6F0] to-[#EAD8CE] border-4 border-[#D4AF37] p-4 shadow-xl flex flex-col items-center justify-end overflow-hidden"
                        >
                          <div className="absolute top-3 inset-x-0 text-center">
                            <span className="text-[10px] uppercase font-serif tracking-[0.25em] text-[#8B2635] font-bold">
                              ✦ TRUE LOVE POP-UP ✦
                            </span>
                            <div className="w-12 h-px bg-[#D4AF37] mx-auto mt-1" />
                          </div>

                          {/* 3D Groom & Bride Cutouts (Layer 2) */}
                          <div
                            style={{ transform: 'translateZ(55px)' }}
                            className="relative flex items-end justify-center pb-2 filter drop-shadow-[0_12px_15px_rgba(0,0,0,0.35)]"
                          >
                            <div className="relative w-26 h-40 rounded-xl overflow-hidden border-2 border-white shadow-md transform -rotate-3 hover:rotate-0 transition-transform">
                              <Image
                                src={groom.photoUrl}
                                alt={groom.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="relative w-26 h-40 rounded-xl overflow-hidden border-2 border-white shadow-md -ml-6 transform rotate-3 hover:rotate-0 transition-transform">
                              <Image
                                src={bride.photoUrl}
                                alt={bride.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>

                          {/* Paper Foot Stand (Layer 3) */}
                          <div
                            style={{ transform: 'translateZ(70px)' }}
                            className="w-full py-1 rounded-full bg-[#451A03] text-[#FDE68A] text-[9px] font-serif font-bold text-center tracking-widest uppercase shadow-md mt-1"
                          >
                            MEMPELAI BERBAHAGIA
                          </div>
                        </motion.div>

                        <span className="text-[11px] text-[#B76E79] font-serif italic mt-3 flex items-center gap-1">
                          <Heart className="w-3.5 h-3.5 fill-current text-[#B76E79]" />
                          <span>Diorama Pop-Up Kertas 3D Berdiri</span>
                        </span>
                      </div>
                    )}

                    {currentChapter === 2 && (
                      <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        className="w-full bg-white/95 rounded-3xl p-6 shadow-xl border-2 border-[#D4AF37] text-center space-y-3"
                      >
                        <div className="w-10 h-10 rounded-full bg-[#FAF6F0] text-[#78350F] border border-[#D4AF37] flex items-center justify-center mx-auto font-serif font-bold text-sm shadow-xs">
                          1
                        </div>
                        <span className="text-[10px] uppercase font-mono tracking-widest text-[#B76E79] font-bold block">
                          ACARA 01 &bull; HOLY MATRIMONY
                        </span>
                        <h3 className="font-serif text-2xl font-bold text-[#451A03]">
                          {akad.title}
                        </h3>

                        <div className="space-y-1 text-xs text-[#5C3D2E] font-serif">
                          <p className="font-bold flex items-center justify-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-[#B76E79]" />
                            <span>{akad.date}</span>
                          </p>
                          <p className="flex items-center justify-center gap-1.5 text-zinc-600">
                            <Clock className="w-3.5 h-3.5 text-[#B76E79]" />
                            <span>{akad.time}</span>
                          </p>
                          <div className="pt-2 text-[11px] leading-relaxed">
                            <p className="font-bold text-[#451A03]">{akad.venue}</p>
                            <p className="text-zinc-600">{akad.address}</p>
                          </div>
                        </div>

                        <a
                          href={akad.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-serif font-bold text-[#78350F] hover:text-[#B76E79] hover:underline pt-2"
                        >
                          <Navigation className="w-3.5 h-3.5" />
                          <span>Petunjuk Arah (Google Maps)</span>
                        </a>
                      </motion.div>
                    )}

                    {currentChapter === 3 && (
                      <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        className="w-full bg-white/95 rounded-3xl p-6 sm:p-7 shadow-xl border-2 border-[#D4AF37] text-center space-y-4"
                      >
                        <div className="relative w-40 h-10 mx-auto filter brightness-0 opacity-70">
                          <Image
                            src="/assets/images/bismillah-4-1-2-1.svg"
                            alt="Bismillah"
                            fill
                            className="object-contain"
                          />
                        </div>

                        <p className="text-xs sm:text-sm font-serif text-[#5C3D2E] leading-relaxed italic">
                          &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu
                          dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan
                          di antaramu rasa kasih dan sayang.&rdquo;
                        </p>

                        <span className="inline-block text-[11px] font-serif font-bold text-[#8B2635] tracking-widest uppercase">
                          — QS. AR-RUM: 21 —
                        </span>
                      </motion.div>
                    )}
                  </div>

                  {/* ──────────────────────────────────────────
                      RIGHT PAGE OF CURRENT SPREAD
                      ────────────────────────────────────────── */}
                  <div className="relative text-center md:text-left px-2">
                    {currentChapter === 1 && (
                      <div className="space-y-4">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-[#8A9A86] font-serif font-bold block">
                          BAB I &bull; PROFIL MEMPELAI
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#451A03] tracking-tight">
                          {groom.name} <span className="font-serif italic text-2xl text-[#B76E79]">&amp;</span> {bride.name}
                        </h2>

                        <div className="space-y-3 text-xs text-[#5C3D2E] font-serif leading-relaxed">
                          <div className="p-3.5 rounded-2xl bg-white/80 border border-[#78350F]/15 shadow-xs space-y-1">
                            <p className="font-bold text-sm text-[#451A03]">{groom.fullName}</p>
                            <p className="text-[11px] text-[#78350F]/80">Putra dari: {groom.parentInfo}</p>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-white/80 border border-[#78350F]/15 shadow-xs space-y-1">
                            <p className="font-bold text-sm text-[#451A03]">{bride.fullName}</p>
                            <p className="text-[11px] text-[#78350F]/80">Putri dari: {bride.parentInfo}</p>
                          </div>
                        </div>

                        {/* Interactive Page Turn Prompt */}
                        <div className="pt-2">
                          <button
                            onClick={() => flipPage('forward')}
                            className="inline-flex items-center gap-2 bg-[#78350F] hover:bg-[#451A03] text-white font-serif text-xs font-semibold px-5 py-3 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95"
                          >
                            <span>Balik Halaman ke Bab 2</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {currentChapter === 2 && (
                      <div className="space-y-4">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-[#8A9A86] font-serif font-bold block">
                          ACARA 02 &bull; THE RECEPTION
                        </span>
                        <div className="bg-white/95 rounded-3xl p-6 shadow-xl border-2 border-[#D4AF37] text-center space-y-3">
                          <div className="w-10 h-10 rounded-full bg-[#FAF6F0] text-[#78350F] border border-[#D4AF37] flex items-center justify-center mx-auto font-serif font-bold text-sm shadow-xs">
                            2
                          </div>
                          <h3 className="font-serif text-2xl font-bold text-[#451A03]">
                            {resepsi.title}
                          </h3>

                          <div className="space-y-1 text-xs text-[#5C3D2E] font-serif">
                            <p className="font-bold flex items-center justify-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 text-[#B76E79]" />
                              <span>{resepsi.date}</span>
                            </p>
                            <p className="flex items-center justify-center gap-1.5 text-zinc-600">
                              <Clock className="w-3.5 h-3.5 text-[#B76E79]" />
                              <span>{resepsi.time}</span>
                            </p>
                            <div className="pt-2 text-[11px] leading-relaxed">
                              <p className="font-bold text-[#451A03]">{resepsi.venue}</p>
                              <p className="text-zinc-600">{resepsi.address}</p>
                            </div>
                          </div>

                          <a
                            href={resepsi.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-serif font-bold text-[#78350F] hover:text-[#B76E79] hover:underline pt-2"
                          >
                            <Navigation className="w-3.5 h-3.5" />
                            <span>Petunjuk Arah (Google Maps)</span>
                          </a>
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={() => flipPage('forward')}
                            className="inline-flex items-center gap-2 bg-[#78350F] hover:bg-[#451A03] text-white font-serif text-xs font-semibold px-5 py-3 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95"
                          >
                            <span>Balik Halaman ke Bab 3</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {currentChapter === 3 && (
                      <div className="space-y-4 text-center md:text-left">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-[#8A9A86] font-serif font-bold block">
                          BAB III &bull; DOA RESTU &amp; HARAPAN
                        </span>
                        <h2 className="font-serif text-3xl font-bold text-[#451A03]">
                          Ungkapan Rasa Syukur
                        </h2>
                        <p className="text-xs text-[#5C3D2E] font-serif leading-relaxed">
                          Kehadiran serta doa restu Bapak/Ibu/Saudara/i sekalian merupakan kado terindah yang senantiasa
                          mengiringi perjalanan ibadah terpanjang kami menuju ridha Allah SWT.
                        </p>

                        <div className="p-4 rounded-2xl bg-white/80 border border-[#78350F]/20 text-xs font-serif italic text-[#78350F]">
                          &ldquo;Semoga langkah kami dipenuhi keberkahan, sakinah, mawaddah, wa rahmah.&rdquo;
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={() => flipPage('backward')}
                            className="inline-flex items-center gap-2 bg-[#FAF6F0] hover:bg-white text-[#78350F] border border-[#78350F]/30 font-serif text-xs font-semibold px-5 py-3 rounded-xl shadow-xs transition-all"
                          >
                            <ChevronLeft className="w-4 h-4" />
                            <span>Kembali ke Bab Sebelumnya</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* ══════════════════════════════════════════════════════
                    3. MECHANICAL 3D FLIPPING PAGE LEAF (EFFECT KERTAS NYATA)
                    ══════════════════════════════════════════════════════ */}
                <AnimatePresence>
                  {isFlipping && (
                    <motion.div
                      key={`flip-${flipDirection}`}
                      initial={{
                        rotateY: flipDirection === 'forward' ? 0 : 180,
                      }}
                      animate={{
                        rotateY: flipDirection === 'forward' ? -180 : 0,
                      }}
                      transition={{
                        duration: 0.82,
                        ease: [0.32, 0.72, 0, 1],
                      }}
                      style={{
                        transformStyle: 'preserve-3d',
                        transformOrigin: flipDirection === 'forward' ? 'left center' : 'right center',
                        left: flipDirection === 'forward' ? '50%' : '0',
                        width: '50%',
                      }}
                      className="absolute inset-y-0 z-50 pointer-events-none rounded-r-2xl overflow-hidden shadow-2xl"
                    >
                      {/* FRONT FACE OF FLIPPING SHEET */}
                      <div
                        style={{ backfaceVisibility: 'hidden' }}
                        className="absolute inset-0 bg-[#FAF6F0] p-6 border-y-2 border-r-2 border-[#CFC3B0] flex flex-col justify-between"
                      >
                        {/* Dynamic Page Curvature Light/Shadow Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
                        <div className="relative z-10 space-y-2 text-center my-auto">
                          <span className="text-[10px] uppercase font-mono tracking-widest text-[#B76E79] font-bold">
                            MEMBALIK HALAMAN...
                          </span>
                          <div className="w-8 h-px bg-[#78350F]/30 mx-auto" />
                        </div>
                      </div>

                      {/* BACK FACE OF FLIPPING SHEET (REVEALED AS IT ROTATES PAST 90 DEG) */}
                      <div
                        style={{
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)',
                        }}
                        className="absolute inset-0 bg-[#FAF6F0] p-6 border-y-2 border-l-2 border-[#CFC3B0] flex flex-col justify-between"
                      >
                        {/* Dynamic Reverse Bend Shadow */}
                        <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-black/20" />
                        <div className="relative z-10 space-y-2 text-center my-auto">
                          <span className="text-[10px] uppercase font-mono tracking-widest text-[#8A9A86] font-bold">
                            MEMBUKA HALAMAN BARU...
                          </span>
                          <div className="w-8 h-px bg-[#78350F]/30 mx-auto" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ── FOOTER PAGE CONTROLS (DOG-EAR CORNER PROMPT) ── */}
              <div className="relative z-40 flex items-center justify-between pt-3 border-t border-[#78350F]/20 text-xs font-serif">
                <button
                  disabled={isFlipping || currentChapter === 1}
                  onClick={() => flipPage('backward')}
                  className="flex items-center gap-1.5 font-bold text-[#78350F] disabled:opacity-30 disabled:pointer-events-none hover:text-[#B76E79] transition-colors py-1.5 px-3 rounded-lg hover:bg-black/5"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>⬅ Balik Halaman Sebelumnya</span>
                </button>

                {/* Page Indicator Dots */}
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3].map((page) => (
                    <span
                      key={page}
                      className={`h-2 rounded-full transition-all ${
                        currentChapter === page
                          ? 'bg-[#B76E79] w-6'
                          : 'bg-[#78350F]/30 w-2'
                      }`}
                    />
                  ))}
                </div>

                <button
                  disabled={isFlipping || currentChapter === 3}
                  onClick={() => flipPage('forward')}
                  className="flex items-center gap-1.5 font-bold text-[#78350F] disabled:opacity-30 disabled:pointer-events-none hover:text-[#B76E79] transition-colors py-1.5 px-3 rounded-lg hover:bg-black/5"
                >
                  <span>Balik Halaman Selanjutnya ➡</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

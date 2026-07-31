'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MailOpen, Heart, Calendar, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CoverEnvelopeProps {
  groomName: string;
  brideName: string;
  eventDate: string;
  guestName: string;
  onOpen: () => void;
}

export default function CoverEnvelope({
  groomName,
  brideName,
  eventDate,
  guestName,
  onOpen,
}: CoverEnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClick = () => {
    setIsOpen(true);
    
    // Trigger celebratory confetti burst
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#B76E79', '#8A9A86', '#E07A5F', '#D4AF37'],
      });
    } catch (e) {
      // Fallback if confetti fails
    }

    onOpen();
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF7F2] overflow-hidden p-4"
        >
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <Image
              src="/assets/images/BAHAN-TEMA-1-1-2.webp"
              alt="Texture Background"
              fill
              className="object-cover"
            />
          </div>

          {/* Top Corner Floral Ornament */}
          <div className="absolute -top-10 -left-10 w-48 h-48 md:w-64 md:h-64 pointer-events-none opacity-85">
            <Image
              src="/assets/images/TEMA-01-BUNGA-01-co-1-2.png"
              alt="Floral Ornament Top"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>

          {/* Bottom Corner Floral Ornament */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 md:w-64 md:h-64 pointer-events-none opacity-85">
            <Image
              src="/assets/images/TEMA-01-BUNGA-01-bawah-e1721804781634-1-2.webp"
              alt="Floral Ornament Bottom"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>

          {/* Main Envelope Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative w-full max-w-md bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl border border-[#8A9A86]/20 text-center flex flex-col items-center justify-between min-h-[580px] z-10"
          >
            {/* Header / Subtitle */}
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-[#8A9A86] font-semibold">
                The Wedding Invitation
              </span>
              <div className="w-12 h-[1px] bg-[#B76E79] mx-auto opacity-60"></div>
            </div>

            {/* Couple Names */}
            <div className="my-6 space-y-3">
              <h1 className="font-cursive text-5xl md:text-6xl text-[#B76E79] leading-tight">
                {groomName} <span className="font-serif-cormorant text-4xl text-[#8A9A86]">&</span> {brideName}
              </h1>
              <p className="font-serif-cormorant text-[#586955] text-lg font-medium tracking-wide">
                {eventDate}
              </p>
            </div>

            {/* Guest Personalization Box */}
            <div className="w-full bg-[#EEF2ED]/70 rounded-2xl p-5 border border-[#8A9A86]/30 my-4 space-y-2 shadow-inner">
              <p className="text-xs text-[#586955] uppercase tracking-wider font-sans-jakarta">
                Kepada Yth. Bapak/Ibu/Saudara/i:
              </p>
              <h2 className="font-serif-cormorant text-2xl font-bold text-[#2D3748] tracking-wide">
                {guestName}
              </h2>
              <p className="text-xs text-zinc-500 italic">
                *Mohon maaf bila ada kesalahan penulisan nama/gelar
              </p>
            </div>

            {/* Open Button */}
            <div className="w-full mt-4">
              <button
                onClick={handleOpenClick}
                className="group relative w-full flex items-center justify-center gap-3 bg-[#B76E79] hover:bg-[#8A9A86] text-white font-medium px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MailOpen className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="tracking-wide text-sm font-semibold">Buka Undangan</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

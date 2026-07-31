'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MailOpen, Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ThreeDEnvelopeOpeningProps {
  groomName: string;
  brideName: string;
  eventDate: string;
  guestName: string;
  onOpen: () => void;
}

export default function ThreeDEnvelopeOpening({
  groomName,
  brideName,
  eventDate,
  guestName,
  onOpen,
}: ThreeDEnvelopeOpeningProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpeningFlap, setIsOpeningFlap] = useState(false);

  const handleOpenClick = () => {
    setIsOpeningFlap(true);

    // Trigger 3D confetti burst
    setTimeout(() => {
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#D4AF37', '#B76E79', '#8A9A86', '#E07A5F'],
        });
      } catch (e) {}

      setIsOpen(true);
      onOpen();
    }, 700);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.9, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF7F2] p-4 overflow-hidden"
        >
          {/* Background Texture */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <Image
              src="/assets/images/BAHAN-TEMA-1-1-2.webp"
              alt="Texture Background"
              fill
              className="object-cover"
            />
          </div>

          {/* 3D Envelope Container */}
          <div className="perspective-1000 w-full max-w-md">
            <motion.div
              initial={{ rotateX: 20, rotateY: -10, scale: 0.9 }}
              animate={{ rotateX: 0, rotateY: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative w-full bg-gradient-to-b from-white/90 to-[#FAF7F2]/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-[#D4AF37]/40 text-center flex flex-col items-center justify-between min-h-[580px] z-10"
            >
              {/* 3D Gold Ribbon Tag */}
              <div className="absolute -top-4 bg-gradient-to-r from-[#D4AF37] via-[#FDE68A] to-[#D4AF37] text-[#451A03] text-[10px] uppercase tracking-[0.3em] font-bold px-6 py-1.5 rounded-full shadow-lg border border-white">
                Spesial 3D Luxury Invitation
              </div>

              {/* Top Bismillah SVG */}
              <div className="pt-4 space-y-2">
                <div className="relative w-48 h-12 mx-auto opacity-90 filter drop-shadow">
                  <Image
                    src="/assets/images/bismillah-4-1-2-1.svg"
                    alt="Bismillah"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Couple Names 3D Glow */}
              <div className="my-4 space-y-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#8A9A86] font-bold">
                  Undangan Pernikahan 3D
                </span>
                <h1 className="font-cursive text-5xl md:text-6xl text-[#B76E79] drop-shadow-md">
                  {groomName} <span className="font-serif-cormorant text-4xl text-[#D4AF37]">&amp;</span> {brideName}
                </h1>
                <p className="font-serif-cormorant text-[#586955] text-base font-semibold tracking-wider">
                  {eventDate}
                </p>
              </div>

              {/* Guest Personalization 3D Card */}
              <div
                style={{ transform: 'translateZ(20px)' }}
                className="w-full bg-[#EEF2ED]/90 rounded-2xl p-5 border border-[#8A9A86]/40 shadow-lg space-y-2 my-2"
              >
                <p className="text-[11px] text-[#586955] uppercase tracking-wider font-sans-jakarta font-semibold">
                  Kepada Yth. Bapak/Ibu/Saudara/i:
                </p>
                <h2 className="font-serif-cormorant text-2xl font-bold text-[#2D3748] tracking-wide">
                  {guestName}
                </h2>
                <span className="inline-flex items-center gap-1 text-[10px] text-[#B76E79] font-medium italic">
                  <Sparkles className="w-3 h-3" />
                  Eksklusif Paket Spesial 3D
                </span>
              </div>

              {/* 3D Wax Seal Button */}
              <div className="w-full mt-4" style={{ transform: 'translateZ(35px)' }}>
                <button
                  onClick={handleOpenClick}
                  disabled={isOpeningFlap}
                  className="group relative w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#B76E79] via-[#8A9A86] to-[#B76E79] hover:from-[#8A9A86] hover:to-[#586955] text-white font-semibold px-6 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
                >
                  <Heart className="w-5 h-5 fill-current animate-pulse text-[#FDE68A]" />
                  <span className="tracking-wider text-sm">
                    {isOpeningFlap ? 'Membuka Amplop 3D...' : 'Buka Undangan 3D'}
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

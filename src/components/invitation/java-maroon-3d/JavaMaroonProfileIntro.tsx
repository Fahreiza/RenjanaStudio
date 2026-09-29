'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MailOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GununganWayangSvg, GebyokDoorLeft, GebyokDoorRight, AksaraJawaBadge, RonceMelatiBorder } from './JavaMaroonOrnaments';

interface JavaMaroonProfileIntroProps {
  guestName: string;
  groomName: string;
  brideName: string;
  weddingDate: string;
  venueName: string;
  onOpenInvitation: () => void;
}

export default function JavaMaroonProfileIntro({
  guestName,
  groomName,
  brideName,
  weddingDate,
  venueName,
  onOpenInvitation,
}: JavaMaroonProfileIntroProps) {
  const [isOpeningGate, setIsOpeningGate] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpeningGate(true);

    // Burst golden confetti
    try {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.55 },
        colors: ['#FFE29F', '#D4AF37', '#805607', '#E2B755', '#FAF7F2'],
      });
    } catch (e) {
      // safe fallback
    }

    // After 3D door swing finishes (1.2s), trigger main invitation open callback
    setTimeout(() => {
      setIsOpened(true);
      onOpenInvitation();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#1A0205] perspective-[1200px]"
        >
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-radial-gradient from-[#4A0E17]/60 via-[#2A050A] to-[#120103] pointer-events-none" />

          {/* ── 3D SPLIT GEBYOK DOORS ── */}
          {/* Left Door Panel */}
          <motion.div
            initial={{ rotateY: 0 }}
            animate={
              isOpeningGate
                ? {
                    rotateY: -105,
                    x: '-40%',
                    opacity: 0,
                    transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] },
                  }
                : { rotateY: 0 }
            }
            style={{
              transformOrigin: 'left center',
              transformStyle: 'preserve-3d',
            }}
            className="absolute left-0 top-0 bottom-0 w-1/2 z-30"
          >
            <GebyokDoorLeft />
          </motion.div>

          {/* Right Door Panel */}
          <motion.div
            initial={{ rotateY: 0 }}
            animate={
              isOpeningGate
                ? {
                    rotateY: 105,
                    x: '40%',
                    opacity: 0,
                    transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] },
                  }
                : { rotateY: 0 }
            }
            style={{
              transformOrigin: 'right center',
              transformStyle: 'preserve-3d',
            }}
            className="absolute right-0 top-0 bottom-0 w-1/2 z-30"
          >
            <GebyokDoorRight />
          </motion.div>

          {/* ── CENTER ROYAL INVITATION CARD (3D ELEVATED) ── */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={
              isOpeningGate
                ? {
                    scale: 1.05,
                    opacity: 0,
                    transition: { duration: 0.9, delay: 0.2 },
                  }
                : { scale: 1, opacity: 1, y: 0 }
            }
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-40 w-full max-w-sm mx-4 bg-[#2A050A]/95 border-2 border-[#D4AF37]/70 rounded-3xl p-6 sm:p-8 text-center shadow-[0_0_50px_rgba(212,175,55,0.25)] backdrop-blur-md flex flex-col items-center justify-between min-h-[580px]"
          >
            {/* Corner Javanese Gold Ornaments */}
            <div className="absolute top-2 left-2 text-[#E2B755] text-xs">✦</div>
            <div className="absolute top-2 right-2 text-[#E2B755] text-xs">✦</div>
            <div className="absolute bottom-2 left-2 text-[#E2B755] text-xs">✦</div>
            <div className="absolute bottom-2 right-2 text-[#E2B755] text-xs">✦</div>

            {/* Ronce Melati Hanging Accents */}
            <div className="absolute -top-3 left-4 pointer-events-none opacity-80">
              <RonceMelatiBorder className="w-4 h-24" />
            </div>
            <div className="absolute -top-3 right-4 pointer-events-none opacity-80">
              <RonceMelatiBorder className="w-4 h-24" />
            </div>

            {/* Top Badge: Gunungan Kayon & Aksara Jawa Serat Ulem */}
            <div className="space-y-2 pt-2 flex flex-col items-center">
              <motion.div
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                className="w-14 h-20 filter drop-shadow-[0_0_12px_rgba(226,183,85,0.6)]"
              >
                <GununganWayangSvg className="w-full h-full" />
              </motion.div>
              <AksaraJawaBadge textJawa="ꦱꦼꦫꦠ꧀ꦈꦭꦺꦩ꧀" latin="Serat Ulem Pawiwahan" />
            </div>

            {/* Couple Names */}
            <div className="my-2 space-y-1">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#E2B755]/80 font-serif">
                Dhauping Temanten
              </p>
              <h1 className="text-4xl sm:text-5xl font-serif text-[#FFF2A3] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] tracking-tight">
                {groomName}
              </h1>
              <div className="text-xl text-[#E2B755] font-serif italic my-0.5">&amp;</div>
              <h1 className="text-4xl sm:text-5xl font-serif text-[#FFF2A3] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] tracking-tight">
                {brideName}
              </h1>
              <p className="text-xs text-[#FFE29F]/75 font-serif pt-1 tracking-wider">
                Sabtu Pahing • {weddingDate}
              </p>
            </div>

            {/* Guest Personalization Card (Respectful Javanese Kromo Inggil) */}
            <div className="w-full bg-gradient-to-b from-[#1C0306] to-[#120103] rounded-2xl p-4 border border-[#D4AF37]/50 shadow-inner my-2 text-center">
              <span className="text-[11px] font-serif text-[#FFE29F] tracking-widest block mb-0.5">
                ꦏꦠꦸꦂꦢꦸꦩꦠꦼꦁ
              </span>
              <p className="text-[10px] text-[#E2B755]/90 uppercase tracking-widest font-serif font-medium">
                Katur Dhumateng Panjenenganipun:
              </p>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#FFF2A3] mt-1 tracking-wide">
                {guestName}
              </h2>
              <p className="text-[10px] text-[#E2B755]/60 italic mt-0.5">
                *Panyuwun rawuh panjenengan sedaya minangka berkah ageng kagem kulawarga
              </p>
            </div>

            {/* Open Invitation Button */}
            <div className="w-full mt-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleOpen}
                disabled={isOpeningGate}
                className="relative group w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#D4AF37] via-[#FFF2A3] to-[#B8860B] text-[#3B070D] font-serif font-bold text-xs tracking-widest py-3.5 px-6 rounded-2xl shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_30px_rgba(212,175,55,0.6)] transition-all duration-300"
              >
                <MailOpen className="w-4 h-4 text-[#3B070D]" />
                <span className="uppercase">
                  {isOpeningGate ? 'Membuka Pintu Gebyok...' : 'Buka Serat Ulem (Undangan)'}
                </span>
                <span className="absolute inset-0 rounded-2xl border border-white/40 pointer-events-none" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface MinimalistProfileIntroProps {
  guestName: string;
  groomName: string;
  brideName: string;
  weddingDate: string;
  venueName: string;
  onOpenInvitation: () => void;
}

type Stage = 'idle' | 'cracking' | 'opening' | 'done';

// ── 2-piece wax seal that splits left/right and falls down ──
function WaxSeal({ stage, onClick }: { stage: Stage; onClick: () => void }) {
  const cracking = stage === 'cracking';
  const fallen   = stage === 'opening' || stage === 'done';

  const SealInner = () => (
    <div
      className="absolute inset-0 rounded-full"
      style={{ background: 'radial-gradient(circle at 36% 30%, #E4C04A 0%, #C49A10 42%, #8B6B00 100%)' }}
    >
      {/* Inner ring */}
      <div className="absolute inset-[4px] rounded-full border border-amber-200/50 flex flex-col items-center justify-center gap-[3px]">
        <span className="text-white font-serif font-black text-[11px] sm:text-[13px] leading-none drop-shadow select-none">
          F &amp; A
        </span>
        <div className="w-5 h-px bg-amber-200/70" />
        <span className="text-amber-200 text-[6px] sm:text-[7px] tracking-[0.18em] font-mono uppercase select-none">
          2025
        </span>
      </div>
      {/* Bump ring */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-amber-200/55"
          style={{ top: '50%', left: '50%', transform: `rotate(${i * 30}deg) translateY(-33px) translateX(-50%)` }}
        />
      ))}
    </div>
  );

  return (
    <div className="relative" style={{ width: 72, height: 72 }} onClick={!fallen ? onClick : undefined}>
      {/* Idle pulse glow */}
      {stage === 'idle' && (
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          animate={{ scale: [1, 1.4, 1], opacity: [0.25, 0.55, 0.25] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
        />
      )}

      {/* LEFT HALF — falls down-left */}
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-full cursor-pointer"
        style={{ clipPath: 'polygon(0% 0%, 50% 0%, 41.7% 16.7%, 58.3% 33.3%, 38.9% 50%, 61.1% 66.7%, 44.4% 83.3%, 50% 100%, 0% 100%)' }}
        animate={
          fallen
            ? { x: -18, y: 110, rotate: -22, opacity: 0, scale: 0.85 }
            : cracking
            ? { x: -4, y: 6, rotate: -4, opacity: 1 }
            : { x: 0, y: 0, rotate: 0, opacity: 1 }
        }
        transition={
          fallen
            ? { duration: 0.65, ease: [0.3, 0, 0.8, 0.6] }
            : cracking
            ? { duration: 0.1 }
            : { duration: 0.3 }
        }
      >
        <SealInner />
      </motion.div>

      {/* RIGHT HALF — falls down-right */}
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-full cursor-pointer"
        style={{ clipPath: 'polygon(100% 0%, 50% 0%, 41.7% 16.7%, 58.3% 33.3%, 38.9% 50%, 61.1% 66.7%, 44.4% 83.3%, 50% 100%, 100% 100%)' }}
        animate={
          fallen
            ? { x: 18, y: 110, rotate: 22, opacity: 0, scale: 0.85 }
            : cracking
            ? { x: 4, y: 6, rotate: 4, opacity: 1 }
            : { x: 0, y: 0, rotate: 0, opacity: 1 }
        }
        transition={
          fallen
            ? { duration: 0.65, ease: [0.3, 0, 0.8, 0.6] }
            : cracking
            ? { duration: 0.1 }
            : { duration: 0.3 }
        }
      >
        <SealInner />
      </motion.div>

      {/* Zigzag crack line — visible only during cracking */}
      <AnimatePresence>
        {cracking && (
          <motion.div
            key="crack"
            className="absolute inset-0 pointer-events-none z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <svg viewBox="0 0 72 72" className="w-full h-full" style={{ overflow: 'visible' }}>
              {/* Glow layer */}
              <polyline
                points="36,0 30,12 42,24 28,36 44,48 32,60 36,72"
                fill="none"
                stroke="white"
                strokeWidth="4"
                strokeOpacity="0.35"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Sharp crack line */}
              <polyline
                points="36,0 30,12 42,24 28,36 44,48 32,60 36,72"
                fill="none"
                stroke="white"
                strokeWidth="1.2"
                strokeOpacity="0.95"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MinimalistProfileIntro({
  guestName,
  groomName,
  brideName,
  weddingDate,
  venueName,
  onOpenInvitation,
}: MinimalistProfileIntroProps) {
  const [stage, setStage] = useState<Stage>('idle');

  const handleOpen = () => {
    if (stage !== 'idle') return;

    // Crack sound
    try {
      const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new Ctx();
      const now = ctx.currentTime;

      // Crack pop
      const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.12), ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length) ** 1.5;
      const src = ctx.createBufferSource();
      const g1 = ctx.createGain();
      g1.gain.setValueAtTime(0.45, now);
      src.buffer = buf; src.connect(g1); g1.connect(ctx.destination); src.start(now);

      // Rising chime sweep
      const osc = ctx.createOscillator();
      const g2 = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(280, now + 0.08);
      osc.frequency.exponentialRampToValueAtTime(860, now + 0.75);
      g2.gain.setValueAtTime(0.1, now + 0.08);
      g2.gain.exponentialRampToValueAtTime(0.001, now + 0.85);
      osc.connect(g2); g2.connect(ctx.destination);
      osc.start(now + 0.08); osc.stop(now + 0.85);
    } catch { /* ignore */ }

    setStage('cracking');
    setTimeout(() => setStage('opening'), 280);
    setTimeout(() => { setStage('done'); onOpenInvitation(); }, 2000);
  };

  const isOpening = stage === 'opening' || stage === 'done';

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center font-sans select-none relative overflow-hidden px-5 py-10 gap-7"
      style={{ background: 'linear-gradient(160deg, #F5EFE3 0%, #EDE5D5 50%, #F0EBE0 100%)' }}
    >
      {/* Linen texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <Image src="/assets/images/BAHAN-TEMA-1-1-2.webp" alt="" fill sizes="100vw" className="object-cover" />
      </div>

      {/* Floating petals */}
      {[...Array(7)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${8 + (i % 3) * 4}px`,
            height: `${8 + (i % 3) * 4}px`,
            left: `${4 + i * 13}%`,
            top: `${8 + (i % 4) * 20}%`,
            background: i % 2 === 0 ? '#C48B9650' : '#D4AF3748',
          }}
          animate={{ y: [0, 10 + i * 2, 0], rotate: [0, i % 2 ? 28 : -28, 0] }}
          transition={{ duration: 3.5 + i * 0.6, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
        />
      ))}

      {/* ── Couple Names ── */}
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="z-10 text-center"
      >
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.42em] text-[#7F9481] font-semibold mb-1.5">
          Pernikahan
        </p>
        <h1
          className="text-5xl sm:text-7xl text-[#3B4A3A] leading-tight"
          style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 300, letterSpacing: '0.03em' }}
        >
          {groomName}{' '}
          <span style={{ color: '#C48B96', fontStyle: 'normal' }}>&amp;</span>{' '}
          {brideName}
        </h1>
        <p className="text-[11px] tracking-[0.28em] text-[#8A9A86] font-mono mt-2">
          {weddingDate}
        </p>
      </motion.div>

      {/* ══ ENVELOPE + CARD SYSTEM ══ */}
      <motion.div
        className="z-10 relative flex flex-col items-center"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Inner card rises VERY smoothly out of envelope */}
        <AnimatePresence>
          {isOpening && (
            <motion.div
              key="inner-card"
              initial={{ y: 60, opacity: 0, scale: 0.96, filter: 'blur(4px)' }}
              animate={{ y: -22, opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ y: -60, opacity: 0, filter: 'blur(4px)' }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 22,
                mass: 1.1,
                opacity: { duration: 0.5, ease: 'easeOut' },
                filter: { duration: 0.5 },
              }}
              className="absolute -top-[148px] inset-x-3 z-20 bg-white rounded-2xl text-center px-6 py-5 space-y-3"
              style={{
                boxShadow: '0 28px 70px rgba(0,0,0,0.15), 0 6px 20px rgba(212,175,55,0.22)',
              }}
            >
              {/* Gold corner marks */}
              {[['top-2.5 left-2.5 border-t-2 border-l-2', 'tl'], ['top-2.5 right-2.5 border-t-2 border-r-2', 'tr'], ['bottom-2.5 left-2.5 border-b-2 border-l-2', 'bl'], ['bottom-2.5 right-2.5 border-b-2 border-r-2', 'br']].map(([cls, key]) => (
                <div key={key} className={`absolute w-3 h-3 border-[#D4AF37]/55 ${cls}`} />
              ))}
              <div className="w-10 h-10 mx-auto relative opacity-80">
                <Image src="/assets/images/TEMA-01-BUNGA-01-co-1-2.png" alt="" fill sizes="40px" className="object-contain" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.28em] text-[#7F9481] font-bold">The Wedding Of</p>
                <p
                  className="text-3xl sm:text-4xl text-[#C48B96] mt-1"
                  style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 300, letterSpacing: '0.03em' }}
                >
                  {groomName} <span style={{ color: '#7F9481', fontStyle: 'normal' }}>&amp;</span> {brideName}
                </p>
                <div className="w-10 h-px bg-[#D4AF37]/50 mx-auto my-2" />
                <p className="text-[9.5px] font-mono text-zinc-500 tracking-wider">
                  {weddingDate} · {venueName}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* THE ENVELOPE */}
        <div
          className="relative cursor-pointer"
          style={{ width: 310, aspectRatio: '3/2' }}
          onClick={handleOpen}
        >
          {/* Botanical corners */}
          <div className="absolute -top-11 -left-11 w-28 h-28 z-50 pointer-events-none">
            <Image src="/assets/images/TEMA-01-BUNGA-01-co-1-2.png" alt="" fill sizes="112px" className="object-contain drop-shadow-xl" />
          </div>
          <div className="absolute -bottom-9 -right-9 w-24 h-24 z-50 pointer-events-none rotate-180">
            <Image src="/assets/images/TEMA-01-BUNGA-01-co-1-2.png" alt="" fill sizes="96px" className="object-contain drop-shadow-xl" />
          </div>

          {/* Drop shadow layer */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ boxShadow: '0 28px 70px rgba(0,0,0,0.22), 0 8px 24px rgba(79,96,80,0.32)', borderRadius: 16 }}
          />

          {/* Envelope body */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(145deg, #7A9580 0%, #5B7361 50%, #496050 100%)' }}
          >
            {/* Left fold */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.22) 0%, transparent 40%)', clipPath: 'polygon(0 0, 38% 50%, 0 100%)' }} />
            {/* Right fold */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to left, rgba(0,0,0,0.22) 0%, transparent 40%)', clipPath: 'polygon(100% 0, 62% 50%, 100% 100%)' }} />
            {/* Bottom V fold */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.28) 0%, transparent 48%)', clipPath: 'polygon(0 100%, 50% 55%, 100% 100%)' }} />
            {/* Texture */}
            <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay">
              <Image src="/assets/images/BAHAN-TEMA-1-1-2.webp" alt="" fill sizes="310px" className="object-cover" />
            </div>
          </div>

          {/* TOP FLAP — smooth scaleY collapse */}
          <motion.div
            className="absolute inset-x-0 top-0 overflow-hidden z-10 pointer-events-none rounded-t-2xl"
            animate={isOpening ? { scaleY: 0, opacity: 0 } : { scaleY: 1, opacity: 1 }}
            transition={{
              duration: 0.55,
              delay: isOpening ? 0.15 : 0,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{ height: '56%', transformOrigin: 'top center' }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(175deg, #8FA88C 0%, #6B8470 45%, #556B5C 100%)',
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              }}
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(170deg, rgba(255,255,255,0.14) 0%, transparent 55%)', clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
            </div>
          </motion.div>

          {/* WAX SEAL */}
          <div
            className="absolute z-20 flex items-center justify-center"
            style={{ bottom: '40%', left: '50%', transform: 'translate(-50%, 50%)' }}
          >
            <WaxSeal stage={stage} onClick={handleOpen} />
          </div>
        </div>

        {/* CTA text */}
        <AnimatePresence mode="wait">
          {stage === 'idle' && (
            <motion.p
              key="hint"
              className="mt-3 text-[10px] text-[#7F9481]/65 uppercase tracking-[0.3em] font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              transition={{ delay: 0.7 }}
            >
              ↑ Ketuk Segel Untuk Membuka
            </motion.p>
          )}
          {(stage === 'cracking' || stage === 'opening') && (
            <motion.p
              key="opening-txt"
              className="mt-3 text-[10px] text-[#7F9481] uppercase tracking-[0.3em] font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.7, 1] }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            >
              Membuka Undangan...
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Guest name */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="z-10 flex flex-col items-center gap-2 text-center"
      >
        <div className="w-px h-5 bg-[#7F9481]/35" />
        <p className="text-[12px] text-zinc-600 font-sans tracking-wide">
          Kepada Yth.{' '}
          <span className="font-bold text-[#2D3748] capitalize">{guestName}</span>
        </p>
        <p className="text-[10px] italic text-zinc-400 font-serif">
          Dengan segala hormat &amp; kebahagiaan
        </p>
      </motion.div>

      <div className="absolute bottom-3 z-10 text-[9px] text-zinc-400 font-serif italic tracking-wide">
        Minimalist Luxury Edition · Renjana Studio
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

function InstagramIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

interface PersonInfo {
  name: string;
  fullName: string;
  parents: string;
  image: string;
  instagram?: string;
  role?: string;
}

interface VogueGroomBrideProps {
  groom: PersonInfo;
  bride: PersonInfo;
}

export default function VogueGroomBride({ groom, bride }: VogueGroomBrideProps) {
  return (
    <section className="relative w-full py-12 px-4 text-[#FAFAF8] z-10 font-sans">
      {/* Editorial Spread Header */}
      <div className="text-center space-y-2 mb-10">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#B39871] font-mono block">
          CURATED PROFILES // THE COUPLE
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-[#FAFAF8] uppercase">
          Meet The Couple
        </h2>
        <div className="w-12 h-px bg-[#B39871] mx-auto my-2" />
        <p className="text-xs text-[#FAFAF8]/70 font-sans max-w-sm mx-auto italic">
          &ldquo;Two lives, two stories, intertwined in quiet elegance and timeless devotion.&rdquo;
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-12">
        {/* ── THE GROOM CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-[#141414] border border-white/10 p-6 sm:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.6)] space-y-5"
        >
          {/* Header outside image container (NO FACE OVERLAY RULE) */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#B39871] font-bold">
              THE GROOM &bull; 01
            </span>
            <span className="text-[9px] font-mono uppercase text-[#FAFAF8]/50">
              JAKARTA
            </span>
          </div>

          {/* Clean Photo Frame (NO BADGES INSIDE COVERING FACE) */}
          <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-[#0E0E0E]">
            <Image
              src={groom.image}
              alt={groom.name}
              fill
              className="object-cover object-top filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/90 via-transparent to-transparent opacity-60" />
          </div>

          {/* Names and Details */}
          <div className="space-y-2 text-center pt-2">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FAFAF8] tracking-wide">
              {groom.fullName}
            </h3>
            <p className="text-[11px] font-mono uppercase tracking-widest text-[#B39871]">
              Putra Pertama dari:
            </p>
            <p className="text-xs font-sans text-[#FAFAF8]/75 leading-relaxed">
              {groom.parents}
            </p>

            {groom.instagram && (
              <div className="pt-3">
                <a
                  href={`https://instagram.com/${groom.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 text-xs font-mono text-[#FAFAF8] hover:bg-[#FAFAF8] hover:text-[#0E0E0E] transition-all"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#B39871]" />
                  <span>@{groom.instagram.replace('@', '')}</span>
                </a>
              </div>
            )}
          </div>
        </motion.div>

        {/* ── AMBIENT AMPERSAND DIVIDER ── */}
        <div className="flex items-center justify-center my-4">
          <div className="w-16 h-px bg-white/10" />
          <span className="text-2xl font-serif italic text-[#B39871] px-4">&amp;</span>
          <div className="w-16 h-px bg-white/10" />
        </div>

        {/* ── THE BRIDE CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-[#141414] border border-white/10 p-6 sm:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.6)] space-y-5"
        >
          {/* Header outside image container (NO FACE OVERLAY RULE) */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#B39871] font-bold">
              THE BRIDE &bull; 02
            </span>
            <span className="text-[9px] font-mono uppercase text-[#FAFAF8]/50">
              JAKARTA
            </span>
          </div>

          {/* Clean Photo Frame (NO BADGES INSIDE COVERING FACE) */}
          <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-[#0E0E0E]">
            <Image
              src={bride.image}
              alt={bride.name}
              fill
              className="object-cover object-top filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/90 via-transparent to-transparent opacity-60" />
          </div>

          {/* Names and Details */}
          <div className="space-y-2 text-center pt-2">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FAFAF8] tracking-wide">
              {bride.fullName}
            </h3>
            <p className="text-[11px] font-mono uppercase tracking-widest text-[#B39871]">
              Putri Pertama dari:
            </p>
            <p className="text-xs font-sans text-[#FAFAF8]/75 leading-relaxed">
              {bride.parents}
            </p>

            {bride.instagram && (
              <div className="pt-3">
                <a
                  href={`https://instagram.com/${bride.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 text-xs font-mono text-[#FAFAF8] hover:bg-[#FAFAF8] hover:text-[#0E0E0E] transition-all"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#B39871]" />
                  <span>@{bride.instagram.replace('@', '')}</span>
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

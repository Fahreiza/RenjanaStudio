'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
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

interface JapandiGroomBrideProps {
  groom: PersonInfo;
  bride: PersonInfo;
}

export default function JapandiGroomBride({ groom, bride }: JapandiGroomBrideProps) {
  return (
    <section className="relative w-full py-12 px-4 text-[#2D2F2E] z-10 font-sans">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-10">
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#637061] font-mono block">
          MEMPELAI // THE COUPLE
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-normal tracking-wide text-[#2D2F2E]">
          Mempelai Berbahagia
        </h2>
        <div className="w-10 h-px bg-[#637061]/40 mx-auto my-2" />
        <p className="text-xs text-[#2D2F2E]/70 font-serif max-w-sm mx-auto italic">
          &ldquo;Dalam kesederhanaan dan ketulusan hati, kami menyatukan dua jiwa dalam ikatan suci.&rdquo;
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-10">
        {/* ── THE GROOM CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-white/80 border border-[#2D2F2E]/10 p-6 sm:p-7 shadow-sm space-y-5"
        >
          {/* Header outside image container (NO FACE OVERLAY RULE) */}
          <div className="flex items-center justify-between border-b border-[#2D2F2E]/10 pb-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#637061] font-bold">
              THE GROOM &bull; 夫
            </span>
            <span className="text-[9px] font-mono uppercase text-[#2D2F2E]/50">
              JAKARTA
            </span>
          </div>

          {/* Clean Organic Arch Frame (NO BADGES INSIDE COVERING FACE) */}
          <div className="relative aspect-[3/4] w-full rounded-t-[100px] rounded-b-2xl overflow-hidden border border-[#2D2F2E]/10 shadow-xs bg-[#E7E1D8]">
            <Image
              src={groom.image}
              alt={groom.name}
              fill
              className="object-cover object-top filter contrast-105 hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Names and Details */}
          <div className="space-y-1.5 text-center pt-1">
            <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#2D2F2E] tracking-wide">
              {groom.fullName}
            </h3>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#637061]">
              Putra Pertama dari:
            </p>
            <p className="text-xs font-serif text-[#2D2F2E]/75 leading-relaxed">
              {groom.parents}
            </p>

            {groom.instagram && (
              <div className="pt-2">
                <a
                  href={`https://instagram.com/${groom.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F4F0EA] border border-[#2D2F2E]/15 text-xs font-mono text-[#2D2F2E] hover:bg-[#637061] hover:text-white transition-all"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#637061]" />
                  <span>@{groom.instagram.replace('@', '')}</span>
                </a>
              </div>
            )}
          </div>
        </motion.div>

        {/* ── ZEN DIVIDER ── */}
        <div className="flex items-center justify-center my-2">
          <div className="w-12 h-px bg-[#2D2F2E]/15" />
          <span className="text-lg font-serif italic text-[#637061] px-4">&amp;</span>
          <div className="w-12 h-px bg-[#2D2F2E]/15" />
        </div>

        {/* ── THE BRIDE CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-white/80 border border-[#2D2F2E]/10 p-6 sm:p-7 shadow-sm space-y-5"
        >
          {/* Header outside image container (NO FACE OVERLAY RULE) */}
          <div className="flex items-center justify-between border-b border-[#2D2F2E]/10 pb-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#637061] font-bold">
              THE BRIDE &bull; 妻
            </span>
            <span className="text-[9px] font-mono uppercase text-[#2D2F2E]/50">
              JAKARTA
            </span>
          </div>

          {/* Clean Organic Arch Frame (NO BADGES INSIDE COVERING FACE) */}
          <div className="relative aspect-[3/4] w-full rounded-t-[100px] rounded-b-2xl overflow-hidden border border-[#2D2F2E]/10 shadow-xs bg-[#E7E1D8]">
            <Image
              src={bride.image}
              alt={bride.name}
              fill
              className="object-cover object-top filter contrast-105 hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Names and Details */}
          <div className="space-y-1.5 text-center pt-1">
            <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#2D2F2E] tracking-wide">
              {bride.fullName}
            </h3>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#637061]">
              Putri Pertama dari:
            </p>
            <p className="text-xs font-serif text-[#2D2F2E]/75 leading-relaxed">
              {bride.parents}
            </p>

            {bride.instagram && (
              <div className="pt-2">
                <a
                  href={`https://instagram.com/${bride.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F4F0EA] border border-[#2D2F2E]/15 text-xs font-mono text-[#2D2F2E] hover:bg-[#637061] hover:text-white transition-all"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#637061]" />
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

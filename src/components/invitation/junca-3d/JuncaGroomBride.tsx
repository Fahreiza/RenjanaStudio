'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { GroomBrideInfo } from '@/types/invitation';

interface JuncaGroomBrideProps {
  groom: GroomBrideInfo;
  bride: GroomBrideInfo;
}

function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/**
 * Editorial Couple Component inspired by Junca Studio's FeaturedWorks.
 * STRICT NO FACE OVERLAY RULE: Headers & badges placed cleanly above/below photos.
 */
export default function JuncaGroomBride({ groom, bride }: JuncaGroomBrideProps) {
  return (
    <section className="relative w-full py-20 px-4 sm:px-8 bg-[#080808] text-[#FBFBFB] overflow-hidden select-none">
      {/* Background Section Line Marker */}
      <div className="max-w-6xl mx-auto border-t border-white/10 pt-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ED3327] font-semibold block">
              01 // THE COUPLE &bull; PROFILES
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-none">
              Mempelai Berbahagia
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-400 max-w-sm tracking-wider uppercase leading-relaxed">
            Dua insan yang dipersatukan dalam ikrar suci cinta abadi, berlandaskan kasih dan ridha Allah SWT.
          </p>
        </div>

        {/* Couple 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* ════════ GROOM CARD ════════ */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group flex flex-col justify-between bg-[#121212] border border-white/15 rounded-3xl p-6 sm:p-8 hover:border-[#ED3327]/60 transition-all duration-300 shadow-2xl"
          >
            {/* Top Text Header (NO FACE OVERLAYS - Above photo!) */}
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <span className="font-mono text-xs text-[#ED3327] font-bold tracking-widest uppercase">
                01 / THE GROOM
              </span>
              <span className="font-mono text-[10px] text-neutral-400 tracking-wider uppercase bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                BANDUNG &bull; INDONESIA
              </span>
            </div>

            {/* Clean Photo Frame (Strictly NO face overlays!) */}
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden my-6 bg-neutral-900 border border-white/10 shadow-lg">
              <Image
                src={groom.photoUrl}
                alt={groom.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
            </div>

            {/* Groom Typography & Info */}
            <div className="space-y-4 pt-2">
              <div>
                <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-1">
                  CALON PENGANTIN PRIA
                </span>
                <h3 className="font-sans text-3xl font-extrabold text-white tracking-tight uppercase">
                  {groom.fullName}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-neutral-300 leading-relaxed space-y-1">
                <span className="text-[10px] text-[#ED3327] font-bold tracking-widest uppercase block">
                  PUTRA TERCINTA DARI:
                </span>
                <p className="font-sans font-medium text-sm text-white">
                  {groom.parentInfo}
                </p>
              </div>

              {/* Social Action Link */}
              <div className="pt-2 flex items-center justify-between">
                <a
                  href={`https://instagram.com/${groom.instagram?.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-300 hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#ED3327]" />
                  <span>{groom.instagram || '@fahreiza'}</span>
                </a>

                {/* Magnetic Circular Arrow Button */}
                <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#ED3327] text-white flex items-center justify-center transition-all duration-300 transform group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.article>

          {/* ════════ BRIDE CARD ════════ */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="group flex flex-col justify-between bg-[#121212] border border-white/15 rounded-3xl p-6 sm:p-8 hover:border-[#ED3327]/60 transition-all duration-300 shadow-2xl"
          >
            {/* Top Text Header (NO FACE OVERLAYS - Above photo!) */}
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <span className="font-mono text-xs text-[#ED3327] font-bold tracking-widest uppercase">
                02 / THE BRIDE
              </span>
              <span className="font-mono text-[10px] text-neutral-400 tracking-wider uppercase bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                JAKARTA &bull; INDONESIA
              </span>
            </div>

            {/* Clean Photo Frame (Strictly NO face overlays!) */}
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden my-6 bg-neutral-900 border border-white/10 shadow-lg">
              <Image
                src={bride.photoUrl}
                alt={bride.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
            </div>

            {/* Bride Typography & Info */}
            <div className="space-y-4 pt-2">
              <div>
                <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-1">
                  CALON PENGANTIN WANITA
                </span>
                <h3 className="font-sans text-3xl font-extrabold text-white tracking-tight uppercase">
                  {bride.fullName}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-neutral-300 leading-relaxed space-y-1">
                <span className="text-[10px] text-[#ED3327] font-bold tracking-widest uppercase block">
                  PUTRI TERCINTA DARI:
                </span>
                <p className="font-sans font-medium text-sm text-white">
                  {bride.parentInfo}
                </p>
              </div>

              {/* Social Action Link */}
              <div className="pt-2 flex items-center justify-between">
                <a
                  href={`https://instagram.com/${bride.instagram?.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-300 hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#ED3327]" />
                  <span>{bride.instagram || '@amanda'}</span>
                </a>

                {/* Magnetic Circular Arrow Button */}
                <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#ED3327] text-white flex items-center justify-center transition-all duration-300 transform group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

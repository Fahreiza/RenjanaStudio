'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye, ArrowUpRight } from 'lucide-react';
interface JuncaPhotoGalleryProps {
  photos?: string[];
}

const DEFAULT_PHOTOS: string[] = [
  '/assets/images/gallery-1.webp',
  '/assets/images/gallery-2.webp',
  '/assets/images/gallery-3.webp',
  '/assets/images/hero-wedding.webp',
];

/**
 * Editorial Mosaic Photo Gallery inspired by Junca Studio's project archive.
 */
export default function JuncaPhotoGallery({
  photos = DEFAULT_PHOTOS,
}: JuncaPhotoGalleryProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIdx(index);
  const closeLightbox = () => setSelectedIdx(null);

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => ((prev ?? 0) > 0 ? (prev ?? 0) - 1 : photos.length - 1));
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => ((prev ?? 0) < photos.length - 1 ? (prev ?? 0) + 1 : 0));
  };

  return (
    <section className="relative w-full py-20 px-4 sm:px-8 bg-[#080808] text-[#FBFBFB] select-none overflow-hidden">
      <div className="max-w-6xl mx-auto border-t border-white/10 pt-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ED3327] font-semibold block">
              04 // VISUAL EXHIBIT &bull; GALLERY
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-none">
              Galeri Dokumentasi
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-400 max-w-sm tracking-wider uppercase leading-relaxed">
            Koleksi potret visual pre-wedding yang menangkap keintiman dan elegansi momen berharga kami.
          </p>
        </div>

        {/* Mosaic Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {photos.map((photoUrl, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.12 }}
              onClick={() => openLightbox(idx)}
              className="group relative cursor-pointer flex flex-col justify-between bg-[#121212] border border-white/15 hover:border-[#ED3327]/60 rounded-3xl p-5 sm:p-6 transition-all duration-300 shadow-xl overflow-hidden"
            >
              {/* Top Tag & Number */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-mono text-xs text-[#ED3327] font-bold tracking-widest uppercase">
                  EXHIBIT 0{idx + 1}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                  PRE-WEDDING ARCHIVE
                </span>
              </div>

              {/* Photo Canvas */}
              <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden my-4 bg-neutral-900 border border-white/10">
                <Image
                  src={photoUrl}
                  alt={`Pre-wedding Photo 0${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#ED3327] text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Caption & Indicator */}
              <div className="flex items-center justify-between pt-2">
                <p className="font-sans font-bold text-base text-white tracking-tight">
                  Visual Dokumentasi 0{idx + 1}
                </p>
                <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#ED3327] text-white flex items-center justify-center transition-all duration-300 transform group-hover:rotate-45">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── FULLSCREEN LIGHTBOX VIEWER ── */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-[#080808]/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 select-none"
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between font-mono text-xs text-neutral-400 uppercase tracking-widest z-10">
              <span className="text-[#ED3327] font-bold">
                EXHIBIT {selectedIdx + 1} / {photos.length}
              </span>
              <button
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#ED3327] text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Center Main Photo */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[70vh] w-full h-full mx-auto my-auto flex items-center justify-center"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <Image
                  src={photos[selectedIdx]}
                  alt={`Gallery Photo ${selectedIdx + 1}`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Prev / Next Navigation Controls */}
              <button
                onClick={prevPhoto}
                className="absolute left-2 sm:-left-16 w-11 h-11 rounded-full bg-white/10 hover:bg-[#ED3327] text-white flex items-center justify-center transition-colors shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-2 sm:-right-16 w-11 h-11 rounded-full bg-white/10 hover:bg-[#ED3327] text-white flex items-center justify-center transition-colors shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="text-center font-mono text-xs uppercase tracking-wider text-neutral-300 z-10">
              <p>{`Visual Dokumentasi 0${selectedIdx + 1} &bull; Moments of Togetherness`}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

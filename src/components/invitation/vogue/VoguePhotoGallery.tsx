'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

interface VoguePhotoGalleryProps {
  photos: string[];
  coupleNames: string;
}

export default function VoguePhotoGallery({ photos, coupleNames }: VoguePhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % photos.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section className="relative w-full py-12 px-4 text-[#FAFAF8] z-10 font-sans">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-10">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#B39871] font-mono block">
          THE PORTFOLIO // VISUAL EXHIBIT
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-[#FAFAF8] uppercase">
          Photo Gallery
        </h2>
        <div className="w-12 h-px bg-[#B39871] mx-auto my-2" />
        <p className="text-xs text-[#FAFAF8]/70 font-sans max-w-sm mx-auto italic">
          Untaian potret visual dan rekaman momen istimewa kami.
        </p>
      </div>

      {/* Editorial Contact Sheet Grid */}
      <div className="grid grid-cols-2 gap-3.5 max-w-md mx-auto">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            onClick={() => setSelectedIndex(index)}
            className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-lg bg-[#141414] p-1"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src={photo}
                alt={`Editorial Gallery ${index + 1}`}
                fill
                className="object-cover filter grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />

              {/* View Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                <span className="p-3 rounded-full bg-[#FAFAF8] text-[#0E0E0E] shadow-xl">
                  <Eye className="w-4 h-4" />
                </span>
              </div>

              {/* Film negative frame number */}
              <span className="absolute bottom-2 left-2 text-[8px] font-mono text-white/70 tracking-widest">
                [0{index + 1}A]
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── LIGHTBOX MODAL ── */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 bg-[#0E0E0E]/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 border border-white/20 text-[#FAFAF8] hover:bg-[#FAFAF8] hover:text-[#0E0E0E] transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 border border-white/20 text-[#FAFAF8] hover:bg-[#FAFAF8] hover:text-[#0E0E0E] transition-colors z-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 border border-white/20 text-[#FAFAF8] hover:bg-[#FAFAF8] hover:text-[#0E0E0E] transition-colors z-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg aspect-[3/4] rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            >
              <Image
                src={photos[selectedIndex]}
                alt={`Preview ${coupleNames}`}
                fill
                className="object-contain bg-black/60"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/80 border border-white/20 text-xs font-mono text-[#FAFAF8]">
                {selectedIndex + 1} / {photos.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

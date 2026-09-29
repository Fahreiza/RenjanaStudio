'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

interface JapandiPhotoGalleryProps {
  photos: string[];
  coupleNames: string;
}

export default function JapandiPhotoGallery({ photos, coupleNames }: JapandiPhotoGalleryProps) {
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
    <section className="relative w-full py-12 px-4 text-[#2D2F2E] z-10 font-sans">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-10">
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#637061] font-mono block">
          GALERI FOTO // MEMORIES
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-normal tracking-wide text-[#2D2F2E]">
          Untaian Kenangan
        </h2>
        <div className="w-10 h-px bg-[#637061]/40 mx-auto my-2" />
        <p className="text-xs text-[#2D2F2E]/70 font-serif max-w-sm mx-auto italic">
          Setiap bingkai menyimpan kehangatan cinta dan keteduhan rasa.
        </p>
      </div>

      {/* Organic Arch Gallery Grid */}
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
            className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer border border-[#2D2F2E]/10 shadow-xs bg-[#E7E1D8] p-1"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src={photo}
                alt={`Japandi Gallery ${index + 1}`}
                fill
                className="object-cover filter contrast-105 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2F2E]/60 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />

              {/* View Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/25 backdrop-blur-xs">
                <span className="p-2.5 rounded-full bg-white text-[#2D2F2E] shadow-md">
                  <Eye className="w-4 h-4 text-[#637061]" />
                </span>
              </div>
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
            className="fixed inset-0 z-50 bg-[#2D2F2E]/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white hover:text-[#2D2F2E] transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white hover:text-[#2D2F2E] transition-colors z-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white hover:text-[#2D2F2E] transition-colors z-50"
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
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/70 border border-white/20 text-xs font-mono text-white">
                {selectedIndex + 1} / {photos.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

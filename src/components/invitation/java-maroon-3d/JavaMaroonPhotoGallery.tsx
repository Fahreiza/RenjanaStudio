'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GununganWayangSvg, AksaraJawaBadge } from './JavaMaroonOrnaments';

interface JavaMaroonPhotoGalleryProps {
  photos: string[];
  coupleNames: string;
}

export default function JavaMaroonPhotoGallery({ photos, coupleNames }: JavaMaroonPhotoGalleryProps) {
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
    <section className="relative w-full py-10 px-4 text-[#FFF2A3] z-10">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-8">
        <AksaraJawaBadge textJawa="ꦥꦺꦴꦠꦿꦺꦠ꧀ꦏꦠꦿꦺꦱ꧀ꦤꦤ꧀" latin="Potret Katresnan" />
        <h2 className="text-3xl sm:text-4xl font-serif text-[#FFE29F] tracking-wide mt-1">
          Galeri Foto Mempelai
        </h2>
        <p className="text-xs text-[#FFE29F]/80 max-w-sm mx-auto font-serif italic">
          Untaian potret kebersamaan dan momen berharga menuju hari bahagia kami.
        </p>
      </div>

      {/* Grid of Photos with 3D Bevel Frames */}
      <div className="grid grid-cols-2 gap-3.5 sm:gap-4 max-w-md mx-auto">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            whileHover={{ y: -6, scale: 1.03 }}
            onClick={() => setSelectedIndex(index)}
            className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border-2 border-[#D4AF37]/60 shadow-[0_12px_28px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,242,163,0.4)] bg-[#1F0306] p-1"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src={photo}
                alt={`Galeri ${coupleNames} ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {/* Dark Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0205]/85 via-transparent to-transparent opacity-70 group-hover:opacity-30 transition-opacity" />

              {/* Hover Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#1A0205]/40 backdrop-blur-xs">
                <span className="p-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFF2A3] text-[#2A050A] shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                  <Eye className="w-5 h-5" />
                </span>
              </div>

              {/* 3D Gold Corner Rivets */}
              <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-[#FFF2A3] shadow-[0_0_4px_rgba(255,242,163,0.8)]" />
              <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#FFF2A3] shadow-[0_0_4px_rgba(255,242,163,0.8)]" />
              <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-[#FFF2A3] shadow-[0_0_4px_rgba(255,242,163,0.8)]" />
              <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#FFF2A3] shadow-[0_0_4px_rgba(255,242,163,0.8)]" />
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
            className="fixed inset-0 z-50 bg-[#120103]/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#2A050A] border border-[#D4AF37]/50 text-[#FFF2A3] hover:bg-[#D4AF37] hover:text-[#2A050A] transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#2A050A]/80 border border-[#D4AF37]/50 text-[#FFF2A3] hover:bg-[#D4AF37] hover:text-[#2A050A] transition-colors z-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#2A050A]/80 border border-[#D4AF37]/50 text-[#FFF2A3] hover:bg-[#D4AF37] hover:text-[#2A050A] transition-colors z-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#D4AF37]/70 shadow-2xl"
            >
              <Image
                src={photos[selectedIndex]}
                alt={`Preview ${coupleNames}`}
                fill
                className="object-contain bg-black/40"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#1A0205]/85 border border-[#D4AF37]/50 text-xs font-serif text-[#FFE29F]">
                {selectedIndex + 1} / {photos.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

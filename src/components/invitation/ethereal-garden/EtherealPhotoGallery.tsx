'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface EtherealPhotoGalleryProps {
  photos: string[];
}

export default function EtherealPhotoGallery({ photos }: EtherealPhotoGalleryProps) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
  };

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto space-y-12 select-none relative z-10">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#A7B09A]/15 text-[#3F493D] border border-[#A7B09A]/30 text-[9px] uppercase font-bold tracking-[0.35em]">
          VISUAL MEMORIES
        </span>
        <h2 className="font-serif-cormorant text-4xl sm:text-5xl text-[#3F493D] font-normal tracking-wide">
          Galeri Kebahagiaan
        </h2>
        <div className="w-12 h-[1px] bg-[#C7A76C] mx-auto mt-2" />
        <p className="text-xs text-[#3F493D]/70 max-w-md mx-auto pt-1 leading-relaxed font-serif">
          Potret kebersamaan yang terukir manis dalam perjalanan cinta kami menuju pelaminan.
        </p>
      </div>

      {/* Arch-topped Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            onClick={() => setSelectedPhotoIndex(index)}
            className="group relative h-80 rounded-t-full rounded-b-2xl overflow-hidden cursor-pointer shadow-[0_15px_35px_-10px_rgba(184,173,160,0.45)] border-2 border-white bg-[#F6F0E6]"
          >
            <Image
              src={photo}
              alt={`Wedding Memory ${index + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-108"
            />

            {/* Hover Frame Inset */}
            <div className="absolute inset-0 bg-[#3F493D]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
              <span className="text-[#FAF7F2] text-xs font-serif italic tracking-wider">
                Ketuk untuk memperbesar foto
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1A1A18]/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all z-20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all z-20 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all z-20 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Preview Arch Frame */}
            <div className="relative w-full max-w-4xl h-[75vh] rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl border-2 border-white/25">
              <Image
                src={photos[selectedPhotoIndex]}
                alt={`Photo ${selectedPhotoIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>

            {/* Counter */}
            <div className="absolute bottom-6 inset-x-0 text-center">
              <span className="px-4 py-1.5 rounded-full bg-black/60 border border-white/20 text-white text-xs font-mono">
                {selectedPhotoIndex + 1} / {photos.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

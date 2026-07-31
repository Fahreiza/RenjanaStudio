'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface SpotifyGalleryProps {
  photos: string[];
}

export default function SpotifyGallery({ photos }: SpotifyGalleryProps) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev === 0 ? photos.length - 1 : (prev as number) - 1));
  };

  const handleNext = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev === photos.length - 1 ? 0 : (prev as number) + 1));
  };

  return (
    <section className="py-10 px-4 md:px-12 max-w-6xl mx-auto text-white select-none">
      {/* Header Matching Reference Screenshot */}
      <div className="space-y-1 mb-6">
        <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#1DB954] uppercase font-sans block">
          GALERI
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white font-sans tracking-tight">
          Sering Diputar
        </h2>
      </div>

      {/* Horizontal Scroll Cards Track (Matching Reference Screenshot) */}
      <div className="flex items-center gap-4 sm:gap-5 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent snap-x snap-mandatory">
        {photos.map((photo, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            onClick={() => setSelectedPhotoIndex(idx)}
            className="w-36 sm:w-44 md:w-48 shrink-0 space-y-2.5 cursor-pointer group snap-start"
          >
            {/* Square Photo Cover */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-zinc-900 shadow-md border border-zinc-800/60">
              <Image
                src={photo}
                alt={`Momen ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Lightbox Icon */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-10 h-10 bg-[#1DB954] hover:bg-[#1ed760] rounded-full flex items-center justify-center text-black shadow-xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Title & Subtitle Matching Screenshot */}
            <div className="space-y-0.5">
              <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#1DB954] transition-colors truncate">
                Momen {idx + 1}
              </h4>
              <p className="text-[10px] text-zinc-500 font-extrabold tracking-widest uppercase font-sans">
                GALERI
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Fullscreen Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-5 right-5 text-zinc-400 hover:text-white bg-zinc-900/80 p-2 rounded-full border border-zinc-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300 hover:text-white bg-zinc-900/80 p-3 rounded-full border border-zinc-700 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-300 hover:text-white bg-zinc-900/80 p-3 rounded-full border border-zinc-700 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="relative max-w-4xl max-h-[80vh] w-full h-full flex items-center justify-center">
              <Image
                src={photos[selectedPhotoIndex]}
                alt="Full Photo View"
                width={1200}
                height={800}
                className="max-h-[80vh] w-auto object-contain rounded-xl shadow-2xl border border-zinc-800"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

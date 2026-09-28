'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Images, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import ThreeDCardTilt from './ThreeDCardTilt';

interface ThreeDPhotoGalleryProps {
  photos: string[];
}

export default function ThreeDPhotoGallery({ photos }: ThreeDPhotoGalleryProps) {
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
        <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 text-[10px] uppercase font-bold tracking-[0.3em]">
          <Images className="w-3 h-3 text-[#D4AF37]" />
          Galeri Kenangan Indah
        </span>
        <h2 className="font-serif-cormorant text-4xl sm:text-5xl text-[#2D3748] font-bold tracking-tight">
          Momen Bahagia Kami
        </h2>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto pt-1 leading-relaxed">
          Kumpulan potret cinta dan perjalanan kebahagiaan yang kami abadikan menuju gerbang pernikahan.
        </p>
      </div>

      {/* 3D Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <ThreeDCardTilt key={index} maxTilt={15} className="h-full">
            <div
              onClick={() => setSelectedPhotoIndex(index)}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-[0_15px_30px_-10px_rgba(212,175,55,0.25)] border-2 border-white bg-zinc-900"
            >
              <Image
                src={photo}
                alt={`Wedding Photo ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Shimmering 3D Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div className="flex items-center gap-2 text-white">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-serif-cormorant text-sm italic tracking-wider">
                    Ketuk untuk memperbesar foto
                  </span>
                </div>
              </div>
            </div>
          </ThreeDCardTilt>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all z-20 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all z-20 cursor-pointer"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all z-20 cursor-pointer"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Image Preview Container */}
            <div className="relative w-full max-w-4xl h-[75vh] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <Image
                src={photos[selectedPhotoIndex]}
                alt={`Photo ${selectedPhotoIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>

            {/* Photo Counter */}
            <div className="absolute bottom-6 inset-x-0 text-center">
              <span className="px-4 py-1.5 rounded-full bg-black/60 border border-white/20 text-white text-xs font-mono font-medium">
                {selectedPhotoIndex + 1} / {photos.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

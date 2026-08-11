'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';


interface ChinesePhotoGalleryProps {
  photos: string[];
  coupleNames: string;
}

export default function ChinesePhotoGallery({ photos, coupleNames }: ChinesePhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto + 1) % photos.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section className="relative overflow-hidden bg-transparent px-4 py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center space-y-4 mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-16 h-16 mx-auto opacity-70 mb-4 relative"
          >
            <span className="text-[#FDFBF7] font-bold text-4xl leading-none flex items-center justify-center">囍</span>
          </motion.div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#FDFBF7] font-medium block">
            Galeri
          </span>
          <h2 className="text-3xl md:text-4xl text-[#D4AF37] mb-2 font-serif uppercase tracking-widest font-bold">
            Galeri Momen
          </h2>
        </div>

        {/* Masonry/Staggered Grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`relative overflow-hidden group cursor-pointer break-inside-avoid rounded-xl border-2 border-[#D4AF37]/30 shadow-md p-1 bg-[#4A0A0E]/80 backdrop-blur-sm ${
                idx % 4 === 0 ? 'aspect-square' : idx % 3 === 0 ? 'aspect-[3/4]' : 'aspect-[4/5]'
              }`}
              onClick={() => setSelectedPhoto(idx)}
            >
              <div className="absolute inset-1 border border-[#D4AF37]/30 rounded-lg pointer-events-none" />
              <div className="absolute inset-1 bg-[#D4AF37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-lg" />
              
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src={photo}
                  alt={`Gallery ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#4A0A0E]/80 backdrop-blur-sm/95 backdrop-blur-md"
            onClick={() => setSelectedPhoto(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 p-2 text-[#FDFBF7] hover:bg-[#D4AF37]/20 rounded-full transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 p-3 text-[#FDFBF7] hover:bg-[#D4AF37]/20 rounded-full transition-colors z-50"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 p-3 text-[#FDFBF7] hover:bg-[#D4AF37]/20 rounded-full transition-colors z-50"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Main Content */}
            <motion.div
              key={selectedPhoto}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl aspect-[4/3] sm:aspect-video px-12 sm:px-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border-4 border-[#D4AF37]/30 p-2 bg-[#4A0A0E]/80 backdrop-blur-sm">
                <div className="relative w-full h-full border border-[#D4AF37]/30 rounded-lg overflow-hidden bg-white">
                  <Image
                    src={photos[selectedPhoto]}
                    alt={`Gallery ${selectedPhoto + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              </div>
              <p className="text-center text-[#FDFBF7] mt-4 font-serif italic text-sm">
                {coupleNames} &mdash; Momen {selectedPhoto + 1} dari {photos.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

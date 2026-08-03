'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Sparkles } from 'lucide-react';

interface MinimalistPhotoGalleryProps {
  photos: string[];
  coupleNames: string;
}

export default function MinimalistPhotoGallery({ photos, coupleNames }: MinimalistPhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  // Exactly 9 photos for a balanced 3x3 grid
  const displayedPhotos = photos.slice(0, 9);

  return (
    <section className="space-y-10 overflow-hidden w-full max-w-xl mx-auto px-4 py-8">
      {/* Title */}
      <div className="text-center space-y-1.5">
        <span className="text-xs uppercase tracking-[0.35em] text-[#7F9481] font-bold block">
          Galeri Kebersamaan
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#C48B96] font-bold">
          Momen Bahagia
        </h2>
        <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto opacity-70 mt-2" />
      </div>

      {/* 3x3 Photo Grid (Exactly 9 Photos) */}
      <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
        {displayedPhotos.map((url, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedPhoto(url)}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-2 border-white ring-1 ring-[#D4AF37]/30 cursor-pointer group bg-zinc-100"
          >
            <Image
              src={url}
              alt={`Gallery ${idx + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <ZoomIn className="w-6 h-6 text-white" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 select-none"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="relative w-full max-w-2xl aspect-[3/4] max-h-[85vh] rounded-3xl overflow-hidden border-4 border-white shadow-2xl"
            >
              <Image
                src={selectedPhoto}
                alt="Full View"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Pin, Heart, Share2, Bookmark } from 'lucide-react';

interface PinterestPhotoGalleryProps {
  photos: string[];
  coupleNames: string;
}

export default function PinterestPhotoGallery({ photos, coupleNames }: PinterestPhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  // Staggered aspect ratios for authentic Pinterest Masonry look
  const aspectRatios = [
    'aspect-[3/4]',
    'aspect-[4/5]',
    'aspect-[3/5]',
    'aspect-[9/16]',
    'aspect-[3/4]',
    'aspect-[4/5]',
  ];

  return (
    <section className="space-y-4 overflow-hidden w-full">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
        <div className="flex items-center gap-2">
          <Pin className="w-5 h-5 text-[#E60023] fill-current" />
          <h2 className="text-base font-extrabold text-[#111111] tracking-wide uppercase">
            Galeri Foto / Masonry Pin Grid
          </h2>
        </div>
        <span className="text-xs text-zinc-500 font-mono font-bold">{photos.length} Pins</span>
      </div>

      {/* Masonry Pin Grid Layout */}
      <div className="columns-2 md:columns-3 gap-3.5 sm:gap-4 space-y-3.5 sm:space-y-4">
        {photos.map((photo, idx) => {
          const ratioClass = aspectRatios[idx % aspectRatios.length];
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedPhoto(photo)}
              className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-md hover:shadow-2xl bg-white border border-zinc-200/80 group cursor-pointer break-inside-avoid transition-all duration-300"
            >
              <div className={`relative w-full ${ratioClass}`}>
                <Image
                  src={photo}
                  alt={`Wedding Pin ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Hover Save Pin Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity p-3.5 flex flex-col justify-between text-white pointer-events-none">
                <div className="flex justify-end">
                  <span className="bg-[#E60023] text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transform group-hover:scale-105 transition-transform">
                    <Bookmark className="w-3.5 h-3.5 fill-current" /> Save
                  </span>
                </div>
                <span className="font-extrabold text-xs drop-shadow truncate">
                  {coupleNames} &bull; Pin #{idx + 1}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Pin Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 select-none overflow-hidden"
            onClick={() => setSelectedPhoto(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-white p-2.5 rounded-full bg-black/60 hover:bg-black/90 transition-all z-10 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] w-full flex flex-col md:flex-row bg-white border border-zinc-200 rounded-[32px] overflow-hidden shadow-2xl"
            >
              {/* Photo View */}
              <div className="relative w-full md:w-2/3 h-72 sm:h-80 md:h-[520px] bg-black">
                <Image
                  src={selectedPhoto}
                  alt="Expanded Pin"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Pin Info Sidebar */}
              <div className="w-full md:w-1/3 p-5 sm:p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-zinc-200 bg-white">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#E60023]">Pinterest Board</span>
                    <button className="bg-[#E60023] hover:bg-[#B6001A] text-white font-extrabold text-xs px-4 py-2 rounded-full flex items-center gap-1.5 shadow-md">
                      <Bookmark className="w-3.5 h-3.5 fill-current" /> Save Pin
                    </button>
                  </div>

                  <h4 className="font-black text-lg text-[#111111]">{coupleNames} Prewedding Photo</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                    Momen kebahagiaan dan kehangatan menjelang hari suci pernikahan kami.
                  </p>
                </div>

                <div className="border-t border-zinc-200 pt-4 space-y-3">
                  <div className="flex items-center justify-around text-zinc-600 text-xs">
                    <span className="flex items-center gap-1 text-[#E60023] font-extrabold">
                      <Heart className="w-4 h-4 fill-current" /> 1.4K Saves
                    </span>
                    <Share2 className="w-4 h-4 hover:text-[#E60023] cursor-pointer" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

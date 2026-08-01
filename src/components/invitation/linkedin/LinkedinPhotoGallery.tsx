'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LinkedinPhotoGalleryProps {
  photos: string[];
  coupleNames: string;
}

export default function LinkedinPhotoGallery({ photos, coupleNames }: LinkedinPhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <section className="space-y-4 font-sans linkedin-theme">
      {/* Header Card */}
      <div className="space-y-0.5">
        <h2 className="text-lg font-bold text-[#000000e6] tracking-tight">
          Galeri Foto Media
        </h2>
        <p className="text-xs text-[#00000099] font-normal">{photos.length} Lampiran Foto &bull; Postingan Media</p>
      </div>

      {/* Grid Container */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white border border-zinc-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-3"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedPhoto(photo)}
              className="relative aspect-square rounded-lg overflow-hidden border border-zinc-200 cursor-pointer bg-zinc-900 shadow-xs group"
            >
              <Image
                src={photo}
                alt={`Prewedding Photo ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold">
                <span>🔍 Lihat</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox Fullscreen Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-white hover:text-zinc-300 p-2 rounded-full bg-white/10 backdrop-blur-md transition-all cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative max-w-3xl w-full aspect-[4/5] sm:aspect-video rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={selectedPhoto}
                alt="Selected Photo"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

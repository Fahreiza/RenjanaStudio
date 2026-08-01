'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCheck, ImageIcon, Download, Share2 } from 'lucide-react';

interface WhatsappPhotoGalleryProps {
  photos: string[];
  coupleNames: string;
}

export default function WhatsappPhotoGallery({ photos, coupleNames }: WhatsappPhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <section className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-[#25D366]" />
          <h2 className="text-base font-bold text-white tracking-wide uppercase">
            Galeri Foto / WA Media Grid
          </h2>
        </div>
        <span className="text-xs text-zinc-400 font-mono">{photos.length} Media Files</span>
      </div>

      {/* WA Media Grid Container */}
      <div className="bg-[#111B21] border border-zinc-800 rounded-3xl p-4 space-y-3 shadow-lg">
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span className="font-bold text-[#25D366]">Media, Links &amp; Docs</span>
          <span className="flex items-center gap-1">
            Read <CheckCheck className="w-3.5 h-3.5 text-sky-400" />
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedPhoto(photo)}
              className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer group"
            >
              <Image
                src={photo}
                alt={`WA Media ${idx + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
              <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[9px] text-white font-mono">
                HD
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 select-none"
            onClick={() => setSelectedPhoto(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-white p-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-all z-10 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] w-full flex flex-col md:flex-row bg-[#111B21] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Photo View */}
              <div className="relative w-full md:w-2/3 h-80 md:h-[500px] bg-black">
                <Image
                  src={selectedPhoto}
                  alt="Expanded WA Media"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Sidebar Info */}
              <div className="w-full md:w-1/3 p-5 flex flex-col justify-between border-t md:border-t-0 md:border-l border-zinc-800">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs text-[#25D366] font-bold">
                    <CheckCheck className="w-4 h-4 text-sky-400" />
                    <span>WhatsApp Media HD</span>
                  </div>

                  <h4 className="font-extrabold text-base text-white">{coupleNames} Prewedding</h4>
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                    Foto kenangan bahagia perjalanan cinta menuju hari akad nikah.
                  </p>
                </div>

                <div className="border-t border-zinc-800 pt-4 space-y-3">
                  <div className="flex items-center justify-around text-zinc-400 text-xs">
                    <Download className="w-5 h-5 hover:text-[#25D366] cursor-pointer" />
                    <Share2 className="w-5 h-5 hover:text-[#25D366] cursor-pointer" />
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

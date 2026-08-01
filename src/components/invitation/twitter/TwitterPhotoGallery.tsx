'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, MessageCircle, Repeat2, Share, CheckCircle2, Image as ImageIcon } from 'lucide-react';

interface TwitterPhotoGalleryProps {
  photos: string[];
  coupleNames: string;
}

export default function TwitterPhotoGallery({ photos, coupleNames }: TwitterPhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <section className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-[#1DA1F2]" />
          <h2 className="text-base font-bold text-white tracking-wide uppercase">
            Galeri Foto / Tweet Media Grid
          </h2>
        </div>
        <span className="text-xs text-zinc-400 font-mono">{photos.length} Media</span>
      </div>

      {/* Tweet Media Container */}
      <div className="bg-[#15202B] border border-zinc-800 rounded-2xl p-4 space-y-3 shadow-lg">
        {/* Tweet Header */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full border border-sky-400 overflow-hidden shrink-0">
            <Image src="/assets/images/sm-PRIA.webp" alt="Avatar" fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-white flex items-center gap-1">
              {coupleNames}
              <CheckCircle2 className="w-4 h-4 text-[#1DA1F2] fill-[#1DA1F2]" />
            </h3>
            <p className="text-xs text-zinc-400">@wedding_gallery &bull; Prewedding Shoot</p>
          </div>
        </div>

        <p className="text-xs text-zinc-200 leading-relaxed font-sans">
          Momen-momen indah perjalanan kami menuju hari bahagia. Klik foto untuk membuka tampilan penuh media. 📸✨
        </p>

        {/* 4-Grid Layout Twitter Style */}
        <div className="grid grid-cols-2 gap-1.5 rounded-2xl overflow-hidden border border-zinc-800 max-h-[380px]">
          {photos.slice(0, 4).map((photo, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedPhoto(photo)}
              className="relative aspect-square bg-zinc-900 cursor-pointer overflow-hidden group"
            >
              <Image
                src={photo}
                alt={`Wedding Gallery ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
            </motion.div>
          ))}
        </div>

        {/* Tweet Engagement Footer */}
        <div className="flex items-center justify-between text-zinc-400 pt-2 text-xs">
          <span className="flex items-center gap-1 hover:text-[#1DA1F2] cursor-pointer">
            <MessageCircle className="w-4 h-4" /> 164 Comments
          </span>
          <span className="flex items-center gap-1 hover:text-green-500 cursor-pointer">
            <Repeat2 className="w-4 h-4" /> 520 Retweets
          </span>
          <span className="flex items-center gap-1 text-pink-500 cursor-pointer">
            <Heart className="w-4 h-4 fill-pink-500" /> 2.8K Likes
          </span>
          <Share className="w-4 h-4 cursor-pointer hover:text-[#1DA1F2]" />
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
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-zinc-800/80 hover:bg-zinc-700 transition-all z-10 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] w-full flex flex-col md:flex-row bg-[#15202B] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Main Image View */}
              <div className="relative w-full md:w-2/3 h-80 md:h-[500px] bg-black">
                <Image
                  src={selectedPhoto}
                  alt="Expanded Photo"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Sidebar Comments / Tweet Details */}
              <div className="w-full md:w-1/3 p-5 flex flex-col justify-between border-t md:border-t-0 md:border-l border-zinc-800">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full border border-sky-400 overflow-hidden shrink-0">
                      <Image src="/assets/images/sm-PRIA.webp" alt="Avatar" fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white flex items-center gap-1">
                        {coupleNames}
                        <CheckCircle2 className="w-4 h-4 text-[#1DA1F2] fill-[#1DA1F2]" />
                      </h4>
                      <p className="text-xs text-zinc-400">@wedding_gallery</p>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                    Prewedding gallery preview. Kebahagiaan dan rasa syukur kami sambut bersama.
                  </p>
                </div>

                <div className="border-t border-zinc-800 pt-4 space-y-3">
                  <div className="flex items-center justify-around text-zinc-400 text-xs">
                    <MessageCircle className="w-5 h-5 hover:text-[#1DA1F2] cursor-pointer" />
                    <Repeat2 className="w-5 h-5 hover:text-green-500 cursor-pointer" />
                    <Heart className="w-5 h-5 text-pink-500 fill-pink-500 cursor-pointer" />
                    <Share className="w-5 h-5 hover:text-[#1DA1F2] cursor-pointer" />
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

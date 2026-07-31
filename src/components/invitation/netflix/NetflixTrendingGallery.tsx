'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function NetflixTrendingGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const photos = [
    { title: 'Moment 1: Pre-Wedding Hero', img: '/assets/images/hero-wedding.webp' },
    { title: 'Moment 2: Romantic Arch', img: '/assets/images/gallery-1.webp' },
    { title: 'Moment 3: Studio Vintage', img: '/assets/images/gallery-2.webp' },
    { title: 'Moment 4: Sparkle Close-up', img: '/assets/images/gallery-3.webp' },
    { title: 'Moment 5: Garden Evening', img: '/assets/images/gallery-4.webp' },
    { title: 'Moment 6: Ballroom Luxury', img: '/assets/images/gallery-5.webp' },
    { title: 'Moment 7: Wedding Rings', img: '/assets/images/gallery-6.webp' },
    { title: 'Moment 8: Groom Portrait', img: '/assets/images/sm-PRIA.webp' },
    { title: 'Moment 9: Bride Portrait', img: '/assets/images/sm-WANITA.webp' },
    { title: 'Moment 10: Special Couple', img: '/assets/images/BAHAN-TEMA-1-1-2.webp' },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth * 0.7 : scrollLeft + clientWidth * 0.7;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-4 md:py-6 w-full px-4 sm:px-8 md:px-12 lg:px-16 text-white space-y-4 select-none">
      {/* Header matching Image 1 */}
      <div>
        <span className="text-xs uppercase tracking-widest text-[#E50914] font-bold block mb-1">
          GALERI
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold font-sans text-white tracking-tight">
          Sedang Trending
        </h2>
      </div>

      {/* Netflix Top 10 Horizontal Carousel Edge-to-Edge with Soft Charcoal Numbers */}
      <div className="relative group w-full">
        {/* Left Arrow Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-10 h-24 bg-black/80 hover:bg-black/95 text-white flex items-center justify-center rounded-r-lg opacity-80 group-hover:opacity-100 transition-opacity border border-zinc-800"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        {/* Carousel Track */}
        <div
          ref={scrollRef}
          className="w-full flex items-center gap-1 md:gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900 pb-8 pt-4 px-2"
        >
          {photos.map((item, index) => {
            const itemNumber = index + 1;
            const isTwoDigit = itemNumber >= 10;

            return (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="relative flex items-end shrink-0 cursor-pointer group/card pr-1"
              >
                {/* GIANT CHARCOAL SOFT OUTLINE NUMBER (z-0) SHIFTED MORE TO THE LEFT */}
                <span
                  className={`font-black leading-none select-none pointer-events-none z-0 transition-transform duration-300 group-hover/card:scale-105 ${
                    isTwoDigit
                      ? 'text-[8.5rem] md:text-[10.5rem] tracking-[-0.08em] -mr-8 md:-mr-10'
                      : 'text-[9.5rem] md:text-[12rem] tracking-tighter -mr-4 md:-mr-6'
                  }`}
                  style={{
                    WebkitTextStroke: '3px #5A5A5A',
                    color: '#181818',
                  }}
                >
                  {itemNumber}
                </span>

                {/* VERTICAL PHOTO POSTER CARD IN FRONT (z-10) */}
                <div className="relative z-10 w-36 h-56 md:w-44 md:h-64 rounded-lg overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-800 group-hover/card:border-[#E50914] group-hover/card:scale-105 transition-all duration-300 shrink-0">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-10 h-24 bg-black/80 hover:bg-black/95 text-white flex items-center justify-center rounded-l-lg opacity-80 group-hover:opacity-100 transition-opacity border border-zinc-800"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-zinc-800 text-white flex items-center justify-center hover:bg-[#E50914] transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-zinc-800"
            >
              <Image
                src={photos[selectedIndex].img}
                alt={photos[selectedIndex].title}
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

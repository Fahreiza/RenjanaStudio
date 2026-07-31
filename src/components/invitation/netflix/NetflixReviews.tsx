'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SAMPLE_REVIEWS = [
  {
    id: '1',
    initial: 'F',
    avatarBg: 'bg-[#900000]',
    name: 'Fajar Nugroho',
    timeAgo: '1mo',
    message: 'Semoga pernikahan ini menjadi awal dari babak kehidupan yang lebih indah. Selalu jaga satu sama lain 💪',
  },
  {
    id: '2',
    initial: 'M',
    avatarBg: 'bg-[#B00000]',
    name: 'Maya Indah',
    timeAgo: '1mo',
    message: 'Akhirnya!!! Udah nungguin ini dari lama 😭 So happy for you both! Langgeng terus ya sampai kakek nenek 👵👴',
  },
  {
    id: '3',
    initial: 'A',
    avatarBg: 'bg-[#700000]',
    name: 'Annisa Rahma',
    timeAgo: '1mo',
    message: 'Dari pertama kalian cerita soal satu sama lain, aku sudah tahu ini akan berakhir indah. Congrats! 💕',
  },
  {
    id: '4',
    initial: 'H',
    avatarBg: 'bg-[#444444]',
    name: 'Hendra Gunawan',
    timeAgo: '1mo',
    message: 'Selamat menempuh hidup baru! Doa terbaik dari kami sekeluarga 🙏',
  },
  {
    id: '5',
    initial: 'R',
    avatarBg: 'bg-[#900000]',
    name: 'Rian & Siska',
    timeAgo: '2w',
    message: 'Happy wedding Fahreiza & Amanda! Samawa selamanya dan lancar sampai hari H! 🎉',
  },
];

export default function NetflixReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth * 0.7 : scrollLeft + clientWidth * 0.7;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-4 md:py-6 w-full px-4 sm:px-8 md:px-12 lg:px-16 text-white space-y-4 select-none">
      {/* Header matching Image 2 */}
      <div>
        <span className="text-xs uppercase tracking-widest text-[#E50914] font-bold block mb-1">
          ULASAN PENONTON
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold font-sans text-white tracking-tight">
          Kata Mereka
        </h2>
        <p className="text-xs text-zinc-400 font-sans mt-1">
          Tulis ucapan Anda melalui formulir RSVP.
        </p>
      </div>

      {/* Horizontal Review Slider Edge-to-Edge */}
      <div className="relative group w-full">
        {/* Left Nav Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-24 bg-black/80 hover:bg-black/95 text-white flex items-center justify-center rounded-r-lg opacity-80 group-hover:opacity-100 transition-opacity border border-zinc-800"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Horizontal Card Track */}
        <div
          ref={scrollRef}
          className="w-full flex items-center gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900 pb-4 pt-2 px-2"
        >
          {SAMPLE_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#1F1F1F] border border-zinc-800 rounded-2xl p-5 w-[320px] md:w-[360px] shrink-0 space-y-3 shadow-lg flex flex-col justify-between"
            >
              {/* Card Header: Avatar Initial, Name, Star Rating */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg ${rev.avatarBg} text-white font-bold text-sm flex items-center justify-center shadow`}
                  >
                    {rev.initial}
                  </div>
                  <div>
                    <h3 className="font-bold text-xs text-white flex items-center gap-1">
                      {rev.name}
                      <span className="text-[10px] text-zinc-400 font-normal">{rev.timeAgo}</span>
                    </h3>
                  </div>
                </div>

                {/* 5 Red Stars matching Image 2 */}
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#E50914] text-xs">★</span>
                  ))}
                </div>
              </div>

              {/* Review Message Text */}
              <p className="text-xs text-zinc-300 leading-relaxed font-sans font-light">
                {rev.message}
              </p>
            </div>
          ))}
        </div>

        {/* Right Nav Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-24 bg-black/80 hover:bg-black/95 text-white flex items-center justify-center rounded-l-lg opacity-80 group-hover:opacity-100 transition-opacity border border-zinc-800"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}

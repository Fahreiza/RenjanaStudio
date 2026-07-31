'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { GroomBrideInfo } from '@/types/invitation';

interface SpotifyArtistProfileProps {
  groom: GroomBrideInfo;
  bride: GroomBrideInfo;
}

export default function SpotifyArtistProfile({ groom, bride }: SpotifyArtistProfileProps) {
  return (
    <section className="py-10 px-4 md:px-8 max-w-3xl mx-auto text-white">
      <div className="grid grid-cols-2 gap-4 sm:gap-8 items-start justify-center">
        {/* Bride Profile (Left - Mempelai Wanita) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center text-center space-y-3 group"
        >
          {/* Circular Photo */}
          <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-800 group-hover:border-[#1DB954] transition-all duration-300">
            <Image
              src={bride.photoUrl}
              alt={bride.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Verified Badge & Role Header */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            {/* Blue Verified Checkmark Badge */}
            <svg className="w-4 h-4 md:w-5 md:h-5 text-[#1D9BF0] fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M22.5 12.5c0-1.58-.8-2.96-2.03-3.76.27-1.54-.2-3.15-1.34-4.29s-2.75-1.61-4.29-1.34C13.96 1.8 12.58 1 11.5 1s-2.46.8-3.34 2.11c-1.54-.27-3.15.2-4.29 1.34s-1.61 2.75-1.34 4.29C1.8 9.54 1 10.92 1 12.5s.8 2.96 2.03 3.76c-.27 1.54.2 3.15 1.34 4.29s2.75 1.61 4.29 1.34c.88 1.31 2.26 2.11 3.34 2.11s2.46-.8 3.34-2.11c1.54.27 3.15-.2 4.29-1.34s1.61-2.75 1.34-4.29c1.23-.8 2.03-2.18 2.03-3.76zm-12.7 4.7l-4.2-4.2 1.4-1.4 2.8 2.8 7.1-7.1 1.4 1.4-8.5 8.5z"/>
            </svg>
            <span className="text-xs sm:text-sm font-extrabold tracking-wider text-white uppercase font-sans">
              MEMPELAI WANITA
            </span>
          </div>

          {/* Full Name & Parent Info */}
          <div className="space-y-0.5 max-w-xs">
            <h3 className="text-sm sm:text-base font-bold text-white font-sans">
              {bride.fullName}
            </h3>
            <p className="text-[11px] text-zinc-400 font-sans leading-tight">
              {bride.parentInfo}
            </p>
          </div>

          {/* Instagram Handle */}
          <a
            href={`https://instagram.com/${bride.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-zinc-900 border border-zinc-700 hover:border-[#1DB954] text-[11px] font-bold text-zinc-200 px-3 py-1 rounded-full transition-all hover:scale-105"
          >
            <svg className="w-3 h-3 fill-current text-[#1DB954]" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>@{bride.instagram}</span>
          </a>
        </motion.div>

        {/* Groom Profile (Right - Mempelai Pria) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col items-center text-center space-y-3 group"
        >
          {/* Circular Photo */}
          <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-800 group-hover:border-[#1DB954] transition-all duration-300">
            <Image
              src={groom.photoUrl}
              alt={groom.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Verified Badge & Role Header */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            {/* Blue Verified Checkmark Badge */}
            <svg className="w-4 h-4 md:w-5 md:h-5 text-[#1D9BF0] fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M22.5 12.5c0-1.58-.8-2.96-2.03-3.76.27-1.54-.2-3.15-1.34-4.29s-2.75-1.61-4.29-1.34C13.96 1.8 12.58 1 11.5 1s-2.46.8-3.34 2.11c-1.54-.27-3.15.2-4.29 1.34s-1.61 2.75-1.34 4.29C1.8 9.54 1 10.92 1 12.5s.8 2.96 2.03 3.76c-.27 1.54.2 3.15 1.34 4.29s2.75 1.61 4.29 1.34c.88 1.31 2.26 2.11 3.34 2.11s2.46-.8 3.34-2.11c1.54.27 3.15-.2 4.29-1.34s1.61-2.75 1.34-4.29c1.23-.8 2.03-2.18 2.03-3.76zm-12.7 4.7l-4.2-4.2 1.4-1.4 2.8 2.8 7.1-7.1 1.4 1.4-8.5 8.5z"/>
            </svg>
            <span className="text-xs sm:text-sm font-extrabold tracking-wider text-white uppercase font-sans">
              MEMPELAI PRIA
            </span>
          </div>

          {/* Full Name & Parent Info */}
          <div className="space-y-0.5 max-w-xs">
            <h3 className="text-sm sm:text-base font-bold text-white font-sans">
              {groom.fullName}
            </h3>
            <p className="text-[11px] text-zinc-400 font-sans leading-tight">
              {groom.parentInfo}
            </p>
          </div>

          {/* Instagram Handle */}
          <a
            href={`https://instagram.com/${groom.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-zinc-900 border border-zinc-700 hover:border-[#1DB954] text-[11px] font-bold text-zinc-200 px-3 py-1 rounded-full transition-all hover:scale-105"
          >
            <svg className="w-3 h-3 fill-current text-[#1DB954]" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>@{groom.instagram}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

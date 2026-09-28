'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { GroomBrideInfo } from '@/types/invitation';
import ThreeDCardTilt from './ThreeDCardTilt';

interface ThreeDGroomBrideProps {
  groom: GroomBrideInfo;
  bride: GroomBrideInfo;
}

export default function ThreeDGroomBride({ groom, bride }: ThreeDGroomBrideProps) {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto space-y-12 select-none relative z-10">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 text-[10px] uppercase font-bold tracking-[0.3em]">
          <Sparkles className="w-3 h-3 text-[#D4AF37]" />
          Dua Jiwa Satu Tujuan
        </span>
        <h2 className="font-serif-cormorant text-4xl sm:text-5xl text-[#2D3748] font-bold tracking-tight">
          Mempelai Yang Berbahagia
        </h2>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto pt-1 leading-relaxed">
          Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan untuk membangun ikatan suci pernikahan.
        </p>
      </div>

      {/* 3D Groom & Bride Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        {/* GROOM CARD */}
        <ThreeDCardTilt maxTilt={14} className="h-full">
          <div className="h-full rounded-3xl bg-white/80 backdrop-blur-xl border-2 border-[#D4AF37]/40 shadow-[0_20px_40px_-15px_rgba(212,175,55,0.25)] p-6 sm:p-8 flex flex-col justify-between items-center text-center relative group">
            {/* Header Badge OUTSIDE Photo - Rule 2 Compliant */}
            <div className="w-full flex items-center justify-between pb-4 border-b border-zinc-100">
              <span className="text-[10px] uppercase font-extrabold tracking-[0.25em] text-[#B76E79]">
                THE GROOM
              </span>
              <span className="text-xs text-[#D4AF37] font-serif-cormorant italic">
                Mempelai Pria
              </span>
            </div>

            {/* Clean 3D Photo Container - NO overlays on face! */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 my-6 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-zinc-100">
              <Image
                src={groom.photoUrl}
                alt={groom.fullName}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Profile Info */}
            <div className="space-y-3 w-full">
              <h3 className="font-serif-cormorant text-3xl font-bold text-[#2D3748] tracking-wide">
                {groom.fullName}
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-sans px-2">
                {groom.parentInfo}
              </p>

              {groom.instagram && (
                <div className="pt-2">
                  <a
                    href={`https://instagram.com/${groom.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FAF7F2] to-[#F4E3E3] border border-[#D4AF37]/50 text-xs font-semibold text-[#2D3748] hover:border-[#D4AF37] hover:shadow-md transition-all"
                  >
                    <svg className="w-3.5 h-3.5 fill-current text-[#B76E79]" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>@{groom.instagram}</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </ThreeDCardTilt>

        {/* BRIDE CARD */}
        <ThreeDCardTilt maxTilt={14} className="h-full">
          <div className="h-full rounded-3xl bg-white/80 backdrop-blur-xl border-2 border-[#D4AF37]/40 shadow-[0_20px_40px_-15px_rgba(212,175,55,0.25)] p-6 sm:p-8 flex flex-col justify-between items-center text-center relative group">
            {/* Header Badge OUTSIDE Photo - Rule 2 Compliant */}
            <div className="w-full flex items-center justify-between pb-4 border-b border-zinc-100">
              <span className="text-[10px] uppercase font-extrabold tracking-[0.25em] text-[#B76E79]">
                THE BRIDE
              </span>
              <span className="text-xs text-[#D4AF37] font-serif-cormorant italic">
                Mempelai Wanita
              </span>
            </div>

            {/* Clean 3D Photo Container - NO overlays on face! */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 my-6 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-zinc-100">
              <Image
                src={bride.photoUrl}
                alt={bride.fullName}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Profile Info */}
            <div className="space-y-3 w-full">
              <h3 className="font-serif-cormorant text-3xl font-bold text-[#2D3748] tracking-wide">
                {bride.fullName}
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-sans px-2">
                {bride.parentInfo}
              </p>

              {bride.instagram && (
                <div className="pt-2">
                  <a
                    href={`https://instagram.com/${bride.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FAF7F2] to-[#F4E3E3] border border-[#D4AF37]/50 text-xs font-semibold text-[#2D3748] hover:border-[#D4AF37] hover:shadow-md transition-all"
                  >
                    <svg className="w-3.5 h-3.5 fill-current text-[#B76E79]" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>@{bride.instagram}</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </ThreeDCardTilt>
      </div>
    </section>
  );
}

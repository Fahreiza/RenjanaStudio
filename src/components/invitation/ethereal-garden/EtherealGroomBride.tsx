'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { GroomBrideInfo } from '@/types/invitation';

interface EtherealGroomBrideProps {
  groom: GroomBrideInfo;
  bride: GroomBrideInfo;
}

export default function EtherealGroomBride({ groom, bride }: EtherealGroomBrideProps) {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto space-y-12 select-none relative z-10">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#A7B09A]/15 text-[#3F493D] border border-[#A7B09A]/30 text-[9px] uppercase font-bold tracking-[0.35em]">
          THE BELOVED COUPLE
        </span>
        <h2 className="font-serif-cormorant text-4xl sm:text-5xl text-[#3F493D] font-normal tracking-wide">
          Kedua Mempelai
        </h2>
        <div className="w-12 h-[1px] bg-[#C7A76C] mx-auto mt-2" />
        <p className="text-xs text-[#3F493D]/70 max-w-md mx-auto pt-1 leading-relaxed font-serif">
          Dengan penuh rasa syukur, kami memohon doa dan restu untuk menyatukan dua hati dalam ikatan suci pernikahan.
        </p>
      </div>

      {/* Double Arch Profile Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-4xl mx-auto">
        {/* GROOM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-full rounded-t-full rounded-b-[36px] bg-[#FAF7F2] border border-[#C7A76C]/35 shadow-[0_20px_45px_-15px_rgba(184,173,160,0.45)] p-7 sm:p-9 flex flex-col justify-between items-center text-center relative group"
        >
          {/* Header Badge OUTSIDE Photo - Rule 2 Compliant */}
          <div className="w-full flex items-center justify-between pb-4 border-b border-[#C7A76C]/20">
            <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-[#C7A76C]">
              THE GROOM
            </span>
            <span className="text-xs text-[#A7B09A] font-serif italic">
              Mempelai Pria
            </span>
          </div>

          {/* Clean Architectural Arch Photo Frame - NO face overlays! */}
          <div className="relative w-48 h-64 sm:w-52 sm:h-72 my-6 rounded-t-full rounded-b-2xl overflow-hidden shadow-lg border-2 border-[#C7A76C]/40 bg-[#F6F0E6]">
            <Image
              src={groom.photoUrl}
              alt={groom.fullName}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Profile Details */}
          <div className="space-y-3 w-full">
            <h3 className="font-serif-cormorant text-3xl font-normal text-[#3F493D] tracking-wide">
              {groom.fullName}
            </h3>
            <p className="text-xs text-[#3F493D]/70 leading-relaxed font-sans px-2">
              {groom.parentInfo}
            </p>

            {groom.instagram && (
              <div className="pt-2">
                <a
                  href={`https://instagram.com/${groom.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6F0E6] border border-[#C7A76C]/40 text-xs font-medium text-[#3F493D] hover:border-[#C7A76C] hover:shadow-sm transition-all"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-[#C7A76C]" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>@{groom.instagram}</span>
                </a>
              </div>
            )}
          </div>
        </motion.div>

        {/* BRIDE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="h-full rounded-t-full rounded-b-[36px] bg-[#FAF7F2] border border-[#C7A76C]/35 shadow-[0_20px_45px_-15px_rgba(184,173,160,0.45)] p-7 sm:p-9 flex flex-col justify-between items-center text-center relative group"
        >
          {/* Header Badge OUTSIDE Photo - Rule 2 Compliant */}
          <div className="w-full flex items-center justify-between pb-4 border-b border-[#C7A76C]/20">
            <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-[#C7A76C]">
              THE BRIDE
            </span>
            <span className="text-xs text-[#A7B09A] font-serif italic">
              Mempelai Wanita
            </span>
          </div>

          {/* Clean Architectural Arch Photo Frame - NO face overlays! */}
          <div className="relative w-48 h-64 sm:w-52 sm:h-72 my-6 rounded-t-full rounded-b-2xl overflow-hidden shadow-lg border-2 border-[#C7A76C]/40 bg-[#F6F0E6]">
            <Image
              src={bride.photoUrl}
              alt={bride.fullName}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Profile Details */}
          <div className="space-y-3 w-full">
            <h3 className="font-serif-cormorant text-3xl font-normal text-[#3F493D] tracking-wide">
              {bride.fullName}
            </h3>
            <p className="text-xs text-[#3F493D]/70 leading-relaxed font-sans px-2">
              {bride.parentInfo}
            </p>

            {bride.instagram && (
              <div className="pt-2">
                <a
                  href={`https://instagram.com/${bride.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6F0E6] border border-[#C7A76C]/40 text-xs font-medium text-[#3F493D] hover:border-[#C7A76C] hover:shadow-sm transition-all"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-[#C7A76C]" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>@{bride.instagram}</span>
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

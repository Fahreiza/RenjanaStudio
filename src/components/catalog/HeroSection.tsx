'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Eye, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 max-w-6xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 bg-[#F4E3E3] border border-[#B76E79]/30 text-[#B76E79] text-xs font-semibold px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Katalog Undangan Nikah Online 2026</span>
          </div>

          <h1 className="font-serif-cormorant text-5xl sm:text-6xl lg:text-7xl font-bold text-[#2D3748] leading-[1.1]">
            Undangan Nikah <br className="hidden sm:block" />
            <span className="text-[#B76E79] italic font-cursive text-6xl sm:text-7xl">Mewah, Anggun</span> & Interaktif.
          </h1>

          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans-jakarta max-w-xl mx-auto lg:mx-0">
            Bagikan kebahagiaan momen suci Anda dengan undangan digital eksklusif. Dilengkapi pemutar musik romantis, RSVP real-time, hitung mundur, galeri foto, dan amplop digital.
          </p>

          {/* Value Bullet Points */}
          <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-[#586955] pt-2 max-w-md mx-auto lg:mx-0">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#B76E79]" />
              <span>Nama Tamu Dinamis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#B76E79]" />
              <span>8 Pilihan Varian Tema</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#B76E79]" />
              <span>Amplop Digital & QRIS</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#B76E79]" />
              <span>Buku Tamu & Ucapan</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/demo/modern-romantic"
              className="flex items-center justify-center gap-3 bg-[#B76E79] hover:bg-[#8A9A86] text-white text-sm font-semibold py-4 px-8 rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Eye className="w-5 h-5" />
              <span>Lihat Demo Modern Romantic</span>
            </Link>

            <a
              href="#katalog"
              className="flex items-center justify-center gap-2 bg-white/80 hover:bg-[#EEF2ED] text-[#586955] border border-[#8A9A86]/30 text-sm font-semibold py-4 px-6 rounded-2xl transition-all"
            >
              <span>Jelajahi 8 Katalog</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Preview Card Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-sm bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-[#8A9A86]/20 text-center space-y-5 animate-float-slow">
            <div className="relative w-full h-72 rounded-2xl overflow-hidden border border-[#8A9A86]/20">
              <Image
                src="/assets/images/hero-wedding.webp"
                alt="Demo Preview Fahreiza & Amanda"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4 text-left text-white">
                <span className="text-[10px] uppercase font-semibold tracking-widest text-[#F4E3E3]">
                  Flagship Demo
                </span>
                <h3 className="font-serif-cormorant text-2xl font-bold">
                  Fahreiza & Amanda
                </h3>
                <p className="text-xs text-zinc-300">Tema Modern Romantic / Pastel</p>
              </div>
            </div>

            <div className="flex items-center justify-between bg-[#FAF7F2] p-3.5 rounded-xl border border-[#8A9A86]/20 text-xs">
              <span className="text-[#586955] font-semibold">Tamu: Budi & Keluarga</span>
              <span className="text-[#B76E79] font-bold">?to=Budi+Keluarga</span>
            </div>

            <Link
              href="/demo/modern-romantic?to=Budi+&+Keluarga"
              className="block w-full py-3 bg-[#8A9A86] hover:bg-[#586955] text-white text-xs font-semibold rounded-xl shadow transition-colors"
            >
              Uji Coba Dengan Nama Tamu
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

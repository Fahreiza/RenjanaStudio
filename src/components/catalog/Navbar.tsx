'use client';

import Link from 'next/link';
import { Sparkles, Heart } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#8A9A86]/20">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#B76E79] to-[#8A9A86] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Heart className="w-5 h-5 fill-current" />
          </div>
          <div>
            <span className="font-serif-cormorant text-2xl font-bold text-[#2D3748] tracking-tight">
              Renjana<span className="text-[#B76E79]">Studio</span>
            </span>
            <span className="block text-[9px] uppercase tracking-[0.2em] text-[#8A9A86] font-semibold -mt-1">
              Undangan Nikah Digital
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-[#586955]">
          <a href="#katalog" className="hover:text-[#B76E79] transition-colors">
            Katalog Tema
          </a>
          <a href="#paket" className="hover:text-[#B76E79] transition-colors">
            Pilihan Paket
          </a>
          <a href="#fitur" className="hover:text-[#B76E79] transition-colors">
            Fitur Utama
          </a>
          <Link href="/demo/spesial-3d" className="text-[#B76E79] font-bold hover:underline transition-all">
            Demo 3D Spesial
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="/demo/modern-romantic"
          className="flex items-center gap-2 bg-[#B76E79] hover:bg-[#8A9A86] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow transition-all transform hover:-translate-y-0.5"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Lihat Demo Utama</span>
        </Link>
      </div>
    </header>
  );
}

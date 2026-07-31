'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2D3748] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Heart className="w-5 h-5 text-[#B76E79] fill-current" />
            <span className="font-serif-cormorant text-2xl font-bold">
              Renjana<span className="text-[#B76E79]">Studio</span>
            </span>
          </div>
          <p className="text-xs text-zinc-400 max-w-sm">
            Solusi pembuatan undangan pernikahan digital modern, mewah, dan efisien untuk momen spesial Anda.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-xs text-zinc-300 font-medium">
          <a href="#katalog" className="hover:text-[#B76E79] transition-colors">
            Katalog Tema
          </a>
          <a href="#fitur" className="hover:text-[#B76E79] transition-colors">
            Fitur Utama
          </a>
          <Link href="/demo/modern-romantic" className="hover:text-[#B76E79] transition-colors">
            Demo Modern Romantic
          </Link>
        </div>

        <div className="text-xs text-zinc-500">
          &copy; 2026 Renjana Studio. Hak Cipta Dilindungi.
        </div>
      </div>
    </footer>
  );
}

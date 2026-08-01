'use client';

import Image from 'next/image';
import { CheckCircle2, Calendar, MapPin, ExternalLink, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface PersonInfo {
  name: string;
  fullName: string;
  parents: string;
  image: string;
  instagram?: string;
}

interface TwitterGroomBrideProps {
  groom: PersonInfo;
  bride: PersonInfo;
}

export default function TwitterGroomBride({ groom, bride }: TwitterGroomBrideProps) {
  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
        <Sparkles className="w-5 h-5 text-[#1DA1F2]" />
        <h2 className="text-base font-bold text-white tracking-wide uppercase">
          Mempelai Pengantin / Profile Cards
        </h2>
      </div>

      {/* Groom Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#15202B] border border-zinc-800 rounded-2xl overflow-hidden shadow-lg"
      >
        {/* Profile Header Banner */}
        <div className="h-28 bg-gradient-to-r from-sky-900 to-slate-900 relative">
          <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-zinc-700/60 text-[10px] font-bold text-sky-400 uppercase tracking-wider">
            THE GROOM
          </div>
        </div>

        <div className="p-5 relative">
          {/* Avatar Container (Positioned to overlap header cleanly) */}
          <div className="flex justify-between items-end -mt-16 mb-3">
            {/* Clean Photo Frame without face overlays */}
            <div className="relative w-24 h-24 rounded-full border-4 border-[#15202B] overflow-hidden bg-zinc-800 shadow-xl shrink-0">
              <Image
                src={groom.image}
                alt={groom.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Follow / Social Button */}
            {groom.instagram && (
              <a
                href={`https://instagram.com/${groom.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 bg-[#1DA1F2] hover:bg-sky-500 text-white font-bold text-xs rounded-full flex items-center gap-1.5 transition-all"
              >
                <span>Follow</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          {/* Name & Handle */}
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white flex items-center gap-1.5">
              {groom.fullName}
              <CheckCircle2 className="w-5 h-5 text-[#1DA1F2] fill-[#1DA1F2]" />
            </h3>
            <p className="text-xs text-zinc-400 font-mono">
              @{groom.name.toLowerCase().replace(/\s+/g, '')} &bull; Mempelai Pria
            </p>
          </div>

          {/* Bio / Parents */}
          <p className="mt-3 text-xs text-zinc-300 leading-relaxed font-sans">
            Putra tersayang dari <strong className="text-white">{groom.parents}</strong>. Siap mengarungi bahtera rumah tangga dengan penuh cinta dan keikhlasan.
          </p>

          {/* Twitter Meta Stats */}
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-zinc-400 border-t border-zinc-800/80 pt-3">
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              <span>Jakarta, Indonesia</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-zinc-400" />
              <span>Joined November 2026</span>
            </div>
          </div>

          <div className="mt-3 flex gap-4 text-xs text-zinc-400">
            <p><strong className="text-white">1.9K</strong> Following</p>
            <p><strong className="text-white">20.2K</strong> Followers</p>
          </div>
        </div>
      </motion.div>

      {/* Bride Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#15202B] border border-zinc-800 rounded-2xl overflow-hidden shadow-lg"
      >
        {/* Profile Header Banner */}
        <div className="h-28 bg-gradient-to-r from-pink-950 to-slate-900 relative">
          <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-zinc-700/60 text-[10px] font-bold text-pink-400 uppercase tracking-wider">
            THE BRIDE
          </div>
        </div>

        <div className="p-5 relative">
          {/* Avatar Container */}
          <div className="flex justify-between items-end -mt-16 mb-3">
            {/* Clean Photo Frame without face overlays */}
            <div className="relative w-24 h-24 rounded-full border-4 border-[#15202B] overflow-hidden bg-zinc-800 shadow-xl shrink-0">
              <Image
                src={bride.image}
                alt={bride.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Follow / Social Button */}
            {bride.instagram && (
              <a
                href={`https://instagram.com/${bride.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 bg-[#1DA1F2] hover:bg-sky-500 text-white font-bold text-xs rounded-full flex items-center gap-1.5 transition-all"
              >
                <span>Follow</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          {/* Name & Handle */}
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white flex items-center gap-1.5">
              {bride.fullName}
              <CheckCircle2 className="w-5 h-5 text-[#1DA1F2] fill-[#1DA1F2]" />
            </h3>
            <p className="text-xs text-zinc-400 font-mono">
              @{bride.name.toLowerCase().replace(/\s+/g, '')} &bull; Mempelai Wanita
            </p>
          </div>

          {/* Bio / Parents */}
          <p className="mt-3 text-xs text-zinc-300 leading-relaxed font-sans">
            Putri tersayang dari <strong className="text-white">{bride.parents}</strong>. Mengucap syukur atas karunia kebersamaan ini.
          </p>

          {/* Twitter Meta Stats */}
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-zinc-400 border-t border-zinc-800/80 pt-3">
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              <span>Jakarta, Indonesia</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-zinc-400" />
              <span>Joined November 2026</span>
            </div>
          </div>

          <div className="mt-3 flex gap-4 text-xs text-zinc-400">
            <p><strong className="text-white">2.1K</strong> Following</p>
            <p><strong className="text-white">26.8K</strong> Followers</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

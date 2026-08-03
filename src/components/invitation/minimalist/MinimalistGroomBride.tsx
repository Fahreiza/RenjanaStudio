'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera, Sparkles } from 'lucide-react';

interface PersonInfo {
  name: string;
  fullName: string;
  parents: string;
  image: string;
  instagram?: string;
}

interface MinimalistGroomBrideProps {
  groom: PersonInfo;
  bride: PersonInfo;
}

export default function MinimalistGroomBride({ groom, bride }: MinimalistGroomBrideProps) {
  return (
    <section className="space-y-10 overflow-hidden w-full max-w-xl mx-auto px-4 py-8">
      {/* Title */}
      <div className="text-center space-y-1.5">
        <span className="text-xs uppercase tracking-[0.35em] text-[#7F9481] font-bold block">
          Mempelai Pengantin
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#C48B96] font-bold">
          Dua Hati, Satu Janji
        </h2>
        <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto opacity-70 mt-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* MEMPELAI PRIA CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/90 border border-[#D4AF37]/40 rounded-3xl p-6 shadow-2xl text-center space-y-4 backdrop-blur-md relative overflow-hidden group hover:border-[#D4AF37] transition-all"
        >
          {/* Gold Foil Top Border Accent */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#D4AF37]/40 via-[#7F9481] to-[#D4AF37]/40" />

          {/* Clean Photo Frame (No face badges!) */}
          <div className="relative w-44 h-56 mx-auto rounded-2xl overflow-hidden border-4 border-[#F9F6F0] shadow-xl ring-2 ring-[#7F9481]/30">
            <Image
              src={groom.image}
              alt={groom.name}
              fill
              sizes="176px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>

          <div className="space-y-1.5">
            <span className="text-[10px] bg-[#7F9481]/15 text-[#7F9481] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-widest border border-[#7F9481]/30 inline-block">
              Mempelai Pria
            </span>
            <h3 className="font-serif text-2xl text-[#2D3748] font-bold pt-2">{groom.fullName || groom.name}</h3>
            <p className="text-xs text-zinc-500 font-serif italic">&ldquo;{groom.name}&rdquo;</p>
            <p className="text-xs text-zinc-600 leading-relaxed pt-2">
              Putra pertama dari {groom.parents}
            </p>
          </div>

          {groom.instagram && (
            <a
              href={`https://instagram.com/${groom.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#7F9481] text-[#7F9481] font-bold text-xs rounded-full hover:bg-[#7F9481] hover:text-white transition-all cursor-pointer shadow-xs"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>{groom.instagram}</span>
            </a>
          )}
        </motion.div>

        {/* MEMPELAI WANITA CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/90 border border-[#D4AF37]/40 rounded-3xl p-6 shadow-2xl text-center space-y-4 backdrop-blur-md relative overflow-hidden group hover:border-[#D4AF37] transition-all"
        >
          {/* Gold Foil Top Border Accent */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#D4AF37]/40 via-[#C48B96] to-[#D4AF37]/40" />

          {/* Clean Photo Frame (No face badges!) */}
          <div className="relative w-44 h-56 mx-auto rounded-2xl overflow-hidden border-4 border-[#F9F6F0] shadow-xl ring-2 ring-[#C48B96]/30">
            <Image
              src={bride.image}
              alt={bride.name}
              fill
              sizes="176px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>

          <div className="space-y-1.5">
            <span className="text-[10px] bg-[#C48B96]/15 text-[#C48B96] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-widest border border-[#C48B96]/30 inline-block">
              Mempelai Wanita
            </span>
            <h3 className="font-serif text-2xl text-[#2D3748] font-bold pt-2">{bride.fullName || bride.name}</h3>
            <p className="text-xs text-zinc-500 font-serif italic">&ldquo;{bride.name}&rdquo;</p>
            <p className="text-xs text-zinc-600 leading-relaxed pt-2">
              Putri pertama dari {bride.parents}
            </p>
          </div>

          {bride.instagram && (
            <a
              href={`https://instagram.com/${bride.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#C48B96] text-[#C48B96] font-bold text-xs rounded-full hover:bg-[#C48B96] hover:text-white transition-all cursor-pointer shadow-xs"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>{bride.instagram}</span>
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}

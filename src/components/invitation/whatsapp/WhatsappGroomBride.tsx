'use client';

import Image from 'next/image';
import { MessageSquare, Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface PersonInfo {
  name: string;
  fullName: string;
  parents: string;
  image: string;
  instagram?: string;
}

interface WhatsappGroomBrideProps {
  groom: PersonInfo;
  bride: PersonInfo;
}

export default function WhatsappGroomBride({ groom, bride }: WhatsappGroomBrideProps) {
  return (
    <section className="space-y-3 overflow-hidden w-full max-w-xl mx-auto">
      {/* Subtitle & Title Matched EXACTLY with Reference Screenshot */}
      <div className="space-y-0.5 text-left">
        <span className="text-[11px] font-extrabold text-[#00A884] uppercase tracking-wider block">
          INFO GRUP
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
          Dua Hati, Satu Cerita
        </h2>
      </div>

      {/* Main Info Card Container (Dark Card bg-[#1F2C34]) */}
      <div className="bg-[#1F2C34] border border-zinc-800 rounded-2xl p-4 sm:p-5 space-y-4 shadow-xl relative">
        {/* MEMPELAI WANITA ROW */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-start justify-between gap-3 pb-4 border-b border-zinc-800"
        >
          <div className="flex items-start gap-3">
            {/* Circular Photo */}
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#00A884] shrink-0 bg-zinc-900 shadow">
              <Image src={bride.image} alt={bride.name} fill className="object-cover" priority />
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-black text-base text-white leading-tight">{bride.fullName || bride.name}</h3>
                <span className="text-[10px] bg-[#005C4B] text-emerald-200 px-2 py-0.5 rounded font-extrabold">
                  Mempelai Wanita
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-serif italic">&ldquo;{bride.name}&rdquo;</p>
              <p className="text-[11px] text-zinc-300 leading-snug font-medium max-w-xs">
                putri pertama dari {bride.parents}
              </p>
            </div>
          </div>

          {bride.instagram && (
            <a
              href={`https://instagram.com/${bride.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border border-[#00A884] text-[#00A884] font-extrabold text-[11px] rounded-full hover:bg-[#00A884] hover:text-black transition-all shrink-0 cursor-pointer"
            >
              Pesan
            </a>
          )}
        </motion.div>

        {/* MEMPELAI PRIA ROW */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-start justify-between gap-3 pt-1"
        >
          <div className="flex items-start gap-3">
            {/* Circular Photo */}
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#00A884] shrink-0 bg-zinc-900 shadow">
              <Image src={groom.image} alt={groom.name} fill className="object-cover" priority />
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-black text-base text-white leading-tight">{groom.fullName || groom.name}</h3>
                <span className="text-[10px] bg-[#005C4B] text-emerald-200 px-2 py-0.5 rounded font-extrabold">
                  Mempelai Pria
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-serif italic">&ldquo;{groom.name}&rdquo;</p>
              <p className="text-[11px] text-zinc-300 leading-snug font-medium max-w-xs">
                putra pertama dari {groom.parents}
              </p>
            </div>
          </div>

          {groom.instagram && (
            <a
              href={`https://instagram.com/${groom.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border border-[#00A884] text-[#00A884] font-extrabold text-[11px] rounded-full hover:bg-[#00A884] hover:text-black transition-all shrink-0 cursor-pointer"
            >
              Pesan
            </a>
          )}
        </motion.div>

        {/* Floating Play Audio Green FAB Button (Matched EXACTLY with Screenshot) */}
        <div className="absolute bottom-3 right-3">
          <button className="w-10 h-10 rounded-full bg-[#00A884] text-black shadow-lg flex items-center justify-center hover:scale-105 transition-all cursor-pointer">
            <Play className="w-4 h-4 fill-current ml-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { AtSign } from 'lucide-react';
import { GroomBrideInfo } from '@/types/invitation';

interface CoupleSectionProps {
  groom: GroomBrideInfo;
  bride: GroomBrideInfo;
}

export default function CoupleSection({ groom, bride }: CoupleSectionProps) {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto overflow-hidden">
      <div className="text-center mb-12 space-y-2">
        <span className="text-xs uppercase tracking-[0.3em] text-[#8A9A86] font-semibold">
          Pasangan Mempelai
        </span>
        <h2 className="font-serif-cormorant text-4xl md:text-5xl text-[#2D3748] font-bold">
          Pengantin Yang Berbahagia
        </h2>
        <div className="w-16 h-[2px] bg-[#B76E79] mx-auto mt-3"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
        {/* Groom Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center space-y-4 group"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-2 bg-gradient-to-tr from-[#B76E79] via-[#8A9A86] to-[#FAF7F2] shadow-xl">
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white">
              <Image
                src={groom.photoUrl}
                alt={groom.fullName}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif-cormorant text-3xl font-bold text-[#B76E79]">
              {groom.fullName}
            </h3>
            <p className="text-xs md:text-sm text-zinc-600 max-w-xs mx-auto leading-relaxed">
              {groom.parentInfo}
            </p>
            {groom.instagram && (
              <a
                href={`https://instagram.com/${groom.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-[#8A9A86] hover:text-[#B76E79] transition-colors mt-1"
              >
                <AtSign className="w-4 h-4" />
                <span>@{groom.instagram}</span>
              </a>
            )}
          </div>
        </motion.div>

        {/* Bride Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center space-y-4 group"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-2 bg-gradient-to-tr from-[#8A9A86] via-[#B76E79] to-[#FAF7F2] shadow-xl">
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white">
              <Image
                src={bride.photoUrl}
                alt={bride.fullName}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif-cormorant text-3xl font-bold text-[#B76E79]">
              {bride.fullName}
            </h3>
            <p className="text-xs md:text-sm text-zinc-600 max-w-xs mx-auto leading-relaxed">
              {bride.parentInfo}
            </p>
            {bride.instagram && (
              <a
                href={`https://instagram.com/${bride.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-[#8A9A86] hover:text-[#B76E79] transition-colors mt-1"
              >
                <AtSign className="w-4 h-4" />
                <span>@{bride.instagram}</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

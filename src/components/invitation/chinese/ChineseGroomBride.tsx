'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { CornerDecor, ShuangXi } from './ChineseDecor';

interface PersonInfo {
  name: string;
  fullName: string;
  parents: string;
  image: string;
  instagram?: string;
}

interface ChineseGroomBrideProps {
  groom: PersonInfo;
  bride: PersonInfo;
}

export default function ChineseGroomBride({ groom, bride }: ChineseGroomBrideProps) {
  return (
    <section className="relative overflow-hidden bg-transparent px-4 py-6">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Title Section */}
        <div className="text-center space-y-4 mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-20 h-20 mx-auto mb-4 relative flex items-center justify-center text-[#FDFBF7]"
          >
            <ShuangXi />
          </motion.div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#FDFBF7] font-medium block">
            Mempelai Pengantin
          </span>
          <h2 className="text-3xl md:text-4xl text-[#D4AF37] mb-2 font-serif uppercase tracking-widest font-bold">
            Mempelai
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          {/* MEMPELAI PRIA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col items-center group relative"
          >
            {/* Oriental Frame */}
            <div className="relative w-64 h-[380px] p-4 mb-8 transition-transform duration-700 group-hover:-translate-y-2 bg-[#4A0A0E]/80 backdrop-blur-sm">
              {/* Outer Border */}
              <div className="absolute inset-0 border-2 border-[#D4AF37]/30 opacity-80" />
              {/* Corner Accents */}
              <CornerDecor position="tl" className="absolute -top-3 -left-3 w-8 h-8 text-[#D4AF37]" />
              <CornerDecor position="tr" className="absolute -top-3 -right-3 w-8 h-8 text-[#D4AF37]" />
              <CornerDecor position="bl" className="absolute -bottom-3 -left-3 w-8 h-8 text-[#D4AF37]" />
              <CornerDecor position="br" className="absolute -bottom-3 -right-3 w-8 h-8 text-[#D4AF37]" />
              
              <div className="relative w-full h-full overflow-hidden shadow-inner border border-[#D4AF37]/30">
                <Image
                  src={groom.image}
                  alt={groom.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 z-20 bg-[#4A0A0E]/80 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-[#FDFBF7] font-bold text-xl leading-none">囍</span>
              </div>
            </div>

            <div className="text-center space-y-3 mt-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#FDFBF7] font-medium">
                The Groom
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-[#FDFBF7] uppercase tracking-widest drop-shadow-sm mb-2">
                {groom.name}
              </h3>
              <h4 className="font-serif text-lg text-[#FDFBF7] italic">
                {groom.fullName}
              </h4>
              <p className="text-xs text-[#FDFBF7] font-sans">
                Putra dari {groom.parents}
              </p>
              
              {groom.instagram && (
                <a
                  href={`https://instagram.com/${groom.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 mt-4 px-4 py-2 border border-[#D4AF37]/30 rounded-full text-[10px] text-[#FDFBF7] hover:bg-[#D4AF37]/10 transition-colors uppercase tracking-[0.2em]"
                >
                  <Camera className="w-3 h-3" />
                  <span>{groom.instagram}</span>
                </a>
              )}
            </div>
          </motion.div>

          {/* MEMPELAI WANITA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col items-center group relative"
          >
            {/* Oriental Frame */}
            <div className="relative w-64 h-[380px] p-4 mb-8 transition-transform duration-700 group-hover:-translate-y-2 bg-[#4A0A0E]/80 backdrop-blur-sm">
              {/* Outer Border */}
              <div className="absolute inset-0 border-2 border-[#D4AF37]/30 opacity-80" />
              {/* Corner Accents */}
              <CornerDecor position="tl" className="absolute -top-3 -left-3 w-8 h-8 text-[#D4AF37]" />
              <CornerDecor position="tr" className="absolute -top-3 -right-3 w-8 h-8 text-[#D4AF37]" />
              <CornerDecor position="bl" className="absolute -bottom-3 -left-3 w-8 h-8 text-[#D4AF37]" />
              <CornerDecor position="br" className="absolute -bottom-3 -right-3 w-8 h-8 text-[#D4AF37]" />
              
              <div className="relative w-full h-full overflow-hidden shadow-inner border border-[#D4AF37]/30">
                <Image
                  src={bride.image}
                  alt={bride.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 z-20 bg-[#4A0A0E]/80 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-[#FDFBF7] font-bold text-xl leading-none">囍</span>
              </div>
            </div>

            <div className="text-center space-y-3 mt-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#FDFBF7] font-medium">
                The Bride
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-[#FDFBF7] uppercase tracking-widest drop-shadow-sm mb-2">
                {bride.name}
              </h3>
              <h4 className="font-serif text-lg text-[#FDFBF7] italic">
                {bride.fullName}
              </h4>
              <p className="text-xs text-[#FDFBF7] font-sans">
                Putri dari {bride.parents}
              </p>

              {bride.instagram && (
                <a
                  href={`https://instagram.com/${bride.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 mt-4 px-4 py-2 border border-[#D4AF37]/30 rounded-full text-[10px] text-[#FDFBF7] hover:bg-[#D4AF37]/10 transition-colors uppercase tracking-[0.2em]"
                >
                  <Camera className="w-3 h-3" />
                  <span>{bride.instagram}</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

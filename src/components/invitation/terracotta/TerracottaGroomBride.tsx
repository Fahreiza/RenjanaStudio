'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

interface PersonInfo {
  name: string;
  fullName: string;
  parents: string;
  image: string;
  instagram?: string;
}

interface TerracottaGroomBrideProps {
  groom: PersonInfo;
  bride: PersonInfo;
}

export default function TerracottaGroomBride({ groom, bride }: TerracottaGroomBrideProps) {
  return (
    <section className="py-16 mx-4 my-8 rounded-3xl relative overflow-hidden bg-[#F4EFEA]/90 backdrop-blur-md shadow-xl border border-[#C86B53]/30">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Title Section */}
        <div className="text-center space-y-4 mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-12 h-12 mx-auto mb-4 relative flex items-center justify-center text-[#C86B53]"
          >
            {/* SVG Boho Arch Icon */}
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 22V10a8 8 0 1 1 16 0v12" />
              <path d="M12 22V14" />
            </svg>
          </motion.div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#C86B53] font-medium block">
            Mempelai Pengantin
          </span>
          <h2 
            className="text-5xl md:text-6xl text-[#5C3D2E] mb-2"
            style={{ fontFamily: 'var(--font-great-vibes)' }}
          >
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
            {/* Organic Frame */}
            <div className="relative w-64 h-[380px] p-3 mb-8 transition-transform duration-700 group-hover:-translate-y-2">
              <div className="absolute inset-0 bg-[#C86B53]/15 rounded-tl-[120px] rounded-br-[120px] rounded-tr-3xl rounded-bl-3xl" />
              
              <div className="relative w-full h-full rounded-tl-[120px] rounded-br-[120px] rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-lg border-2 border-white/40">
                <Image
                  src={groom.image}
                  alt={groom.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            <div className="text-center space-y-3 mt-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C86B53] font-medium">
                The Groom
              </span>
              <h3 className="font-sans text-3xl md:text-4xl text-[#829379] uppercase tracking-widest drop-shadow-sm mb-2">
                {groom.name}
              </h3>
              <h4 className="font-sans text-lg text-[#5C3D2E] italic">
                {groom.fullName}
              </h4>
              <p className="text-xs text-[#C86B53] font-serif">
                Putra dari {groom.parents}
              </p>
              
              {groom.instagram && (
                <a
                  href={`https://instagram.com/${groom.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 mt-4 px-4 py-2 border border-[#C86B53]/30 rounded-full text-[10px] text-[#C86B53] hover:bg-[#C86B53]/10 transition-colors uppercase tracking-[0.2em]"
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
            {/* Organic Frame */}
            <div className="relative w-64 h-[380px] p-3 mb-8 transition-transform duration-700 group-hover:-translate-y-2">
              <div className="absolute inset-0 bg-[#C86B53]/10 rounded-tr-[120px] rounded-bl-[120px] rounded-tl-3xl rounded-br-3xl" />
              
              <div className="relative w-full h-full rounded-tr-[120px] rounded-bl-[120px] rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-md">
                <Image
                  src={bride.image}
                  alt={bride.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            <div className="text-center space-y-3 mt-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C86B53] font-medium">
                The Bride
              </span>
              <h3 className="font-sans text-3xl md:text-4xl text-[#829379] uppercase tracking-widest drop-shadow-sm mb-2">
                {bride.name}
              </h3>
              <h4 className="font-sans text-lg text-[#5C3D2E] italic">
                {bride.fullName}
              </h4>
              <p className="text-xs text-[#C86B53] font-serif">
                Putri dari {bride.parents}
              </p>

              {bride.instagram && (
                <a
                  href={`https://instagram.com/${bride.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 mt-4 px-4 py-2 border border-[#C86B53]/30 rounded-full text-[10px] text-[#C86B53] hover:bg-[#C86B53]/10 transition-colors uppercase tracking-[0.2em]"
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

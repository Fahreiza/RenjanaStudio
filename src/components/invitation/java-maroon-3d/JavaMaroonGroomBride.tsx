'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  GununganWayangSvg,
  JavaneseDivider,
  WayangKamajayaKamaratihSvg,
  AksaraJawaBadge,
  RonceMelatiBorder,
  GebyokCrownArch3D,
} from './JavaMaroonOrnaments';
import JavaMaroon3DCard from './JavaMaroon3DCard';

function InstagramSvg({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface PersonInfo {
  name: string;
  fullName: string;
  parents: string;
  image: string;
  instagram?: string;
}

interface JavaMaroonGroomBrideProps {
  groom: PersonInfo;
  bride: PersonInfo;
}

export default function JavaMaroonGroomBride({ groom, bride }: JavaMaroonGroomBrideProps) {
  return (
    <section className="relative w-full py-10 px-4 text-[#FFF2A3] z-10">
      {/* Section Header with Wayang Kamajaya & Kamaratih */}
      <div className="text-center space-y-3 mb-8">
        <div className="w-56 h-28 mx-auto filter drop-shadow-[0_0_15px_rgba(226,183,85,0.5)]">
          <WayangKamajayaKamaratihSvg className="w-full h-full" />
        </div>
        <AksaraJawaBadge textJawa="ꦱꦁꦥꦼꦔantenꦏꦭꦶꦃ" latin="Sang Penganten Kalih" />
        <h2 className="text-3xl sm:text-4xl font-serif text-[#FFE29F] tracking-wide">
          Lir Kamajaya &amp; Kamaratih
        </h2>
        <p className="text-xs text-[#E2B755]/85 max-w-sm mx-auto font-serif italic leading-relaxed">
          Nyuwun lumunturing sih wilasa Dalem Gusti Ingkang Murbeng Dumadi, kairing donga pangestu
          panjenengan sedaya kagem putra-putri temanten:
        </p>
      </div>

      <div className="flex flex-col gap-8 max-w-md mx-auto">
        {/* ── 3D GROOM CARD ── */}
        <JavaMaroon3DCard maxTilt={14} className="p-6 sm:p-8">
          {/* Top Gebyok Crown 3D Arch */}
          <div style={{ transform: 'translateZ(35px)' }} className="w-full mb-3">
            <GebyokCrownArch3D className="w-full h-10" />
          </div>

          {/* Side Ronce Melati Corner Strand */}
          <div
            style={{ transform: 'translateZ(25px)' }}
            className="absolute top-4 right-3 pointer-events-none opacity-80"
          >
            <RonceMelatiBorder className="w-4 h-36" />
          </div>

          {/* Header Badge with Aksara Jawa (NO FACE OVERLAY) */}
          <div
            style={{ transform: 'translateZ(30px)' }}
            className="mb-4 flex flex-col items-center gap-1.5"
          >
            <span className="font-serif text-lg leading-relaxed text-[#FFE29F] tracking-widest select-none block pb-0.5">
              ꦠꦼꦩantenꦏꦏꦸꦁ
            </span>
            <span className="px-4 py-1 rounded-full bg-[#1A0205]/90 border border-[#D4AF37]/70 text-[10px] text-[#FFE29F] tracking-[0.25em] font-serif font-bold uppercase shadow-md">
              Mempelai Kakung (Pria)
            </span>
          </div>

          {/* Clean 3D Gebyok Arch Photo Frame - Elevated +55px in 3D Space */}
          <div
            style={{ transform: 'translateZ(55px)' }}
            className="relative w-48 h-60 mx-auto rounded-t-full rounded-b-3xl p-2 bg-gradient-to-b from-[#FFF2A3] via-[#D4AF37] to-[#6E4402] shadow-[0_20px_35px_rgba(0,0,0,0.85)] border border-[#FFF2A3]/50"
          >
            <div className="relative w-full h-full rounded-t-full rounded-b-2xl overflow-hidden bg-[#180204]">
              <Image
                src={groom.image}
                alt={groom.fullName}
                fill
                className="object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Groom Details - Elevated +35px */}
          <div style={{ transform: 'translateZ(35px)' }} className="mt-6 space-y-2 text-center">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FFF2A3] tracking-wide drop-shadow-md">
              {groom.fullName}
            </h3>
            <p className="text-xs text-[#E2B755]/95 font-serif leading-relaxed px-2">
              {groom.parents}
            </p>
            {groom.instagram && (
              <div style={{ transform: 'translateZ(45px)' }} className="pt-2">
                <a
                  href={`https://instagram.com/${groom.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#1A0205] to-[#2B0409] border border-[#D4AF37]/60 text-[#FFE29F] text-xs font-serif font-semibold hover:bg-[#D4AF37] hover:text-[#2A050A] transition-all shadow-md hover:scale-105"
                >
                  <InstagramSvg className="w-3.5 h-3.5" />
                  <span>@{groom.instagram}</span>
                </a>
              </div>
            )}
          </div>
        </JavaMaroon3DCard>

        {/* Center Divider Ornament */}
        <JavaneseDivider className="my-1" />

        {/* ── 3D BRIDE CARD ── */}
        <JavaMaroon3DCard maxTilt={14} className="p-6 sm:p-8">
          {/* Top Gebyok Crown 3D Arch */}
          <div style={{ transform: 'translateZ(35px)' }} className="w-full mb-3">
            <GebyokCrownArch3D className="w-full h-10" />
          </div>

          {/* Side Ronce Melati Corner Strand */}
          <div
            style={{ transform: 'translateZ(25px)' }}
            className="absolute top-4 left-3 pointer-events-none opacity-80"
          >
            <RonceMelatiBorder className="w-4 h-36" />
          </div>

          {/* Header Badge with Aksara Jawa (NO FACE OVERLAY) */}
          <div
            style={{ transform: 'translateZ(30px)' }}
            className="mb-4 flex flex-col items-center gap-1.5"
          >
            <span className="font-serif text-lg leading-relaxed text-[#FFE29F] tracking-widest select-none block pb-0.5">
              ꦠꦼꦩantenꦥꦸꦠꦿꦶ
            </span>
            <span className="px-4 py-1 rounded-full bg-[#1A0205]/90 border border-[#D4AF37]/70 text-[10px] text-[#FFE29F] tracking-[0.25em] font-serif font-bold uppercase shadow-md">
              Mempelai Putri (Wanita)
            </span>
          </div>

          {/* Clean 3D Gebyok Arch Photo Frame - Elevated +55px in 3D Space */}
          <div
            style={{ transform: 'translateZ(55px)' }}
            className="relative w-48 h-60 mx-auto rounded-t-full rounded-b-3xl p-2 bg-gradient-to-b from-[#FFF2A3] via-[#D4AF37] to-[#6E4402] shadow-[0_20px_35px_rgba(0,0,0,0.85)] border border-[#FFF2A3]/50"
          >
            <div className="relative w-full h-full rounded-t-full rounded-b-2xl overflow-hidden bg-[#180204]">
              <Image
                src={bride.image}
                alt={bride.fullName}
                fill
                className="object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Bride Details - Elevated +35px */}
          <div style={{ transform: 'translateZ(35px)' }} className="mt-6 space-y-2 text-center">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FFF2A3] tracking-wide drop-shadow-md">
              {bride.fullName}
            </h3>
            <p className="text-xs text-[#E2B755]/95 font-serif leading-relaxed px-2">
              {bride.parents}
            </p>
            {bride.instagram && (
              <div style={{ transform: 'translateZ(45px)' }} className="pt-2">
                <a
                  href={`https://instagram.com/${bride.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#1A0205] to-[#2B0409] border border-[#D4AF37]/60 text-[#FFE29F] text-xs font-serif font-semibold hover:bg-[#D4AF37] hover:text-[#2A050A] transition-all shadow-md hover:scale-105"
                >
                  <InstagramSvg className="w-3.5 h-3.5" />
                  <span>@{bride.instagram}</span>
                </a>
              </div>
            )}
          </div>
        </JavaMaroon3DCard>
      </div>
    </section>
  );
}

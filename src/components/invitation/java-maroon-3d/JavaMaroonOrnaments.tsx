'use client';

import React from 'react';

/**
 * Authentic Royal Javanese Vector Ornaments (Adiluhung Jawa Keraton):
 * - Gunungan Wayang Kulit (Kayon) with Paduraksa Candi & Tree of Life
 * - Wayang Penganten Kamajaya & Kamaratih (Simbol Cinta Sejati Jawa)
 * - Batik Kawung Keraton & Batik Parang Rusak Barong True SVG Patterns
 * - Ronce Melati Khas Pengantin Jawa
 * - Aksara Jawa Typography Callouts
 * - Gebyok Ukir Jepara 3D Doors
 */

export function GununganWayangSvg({ className = 'w-16 h-24' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="goldGradGunungan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF7C2" />
          <stop offset="30%" stopColor="#E5B94E" />
          <stop offset="70%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#6E4402" />
        </linearGradient>
      </defs>

      {/* Kayon Outer Body with Golden Glow */}
      <path
        d="M100 8 C118 45 185 115 192 195 C198 252 165 285 100 295 C35 285 2 252 8 195 C15 115 82 45 100 8 Z"
        fill="url(#goldGradGunungan)"
        fillOpacity="0.18"
        stroke="url(#goldGradGunungan)"
        strokeWidth="2.5"
      />

      {/* Inner Intricate Filigree Border */}
      <path
        d="M100 22 C114 55 174 120 180 190 C185 240 156 272 100 280 C44 272 15 240 20 190 C26 120 86 55 100 22 Z"
        stroke="url(#goldGradGunungan)"
        strokeWidth="1.2"
        strokeDasharray="4 2"
        fill="none"
      />

      {/* Center Axis (Saka Guru Kayon) */}
      <path d="M100 30 L100 292" stroke="url(#goldGradGunungan)" strokeWidth="2.5" strokeLinecap="round" />

      {/* Puncak Gunungan (Mustika Cunduk) */}
      <circle cx="100" cy="18" r="4.5" fill="url(#goldGradGunungan)" />
      <path d="M95 24 L105 24 L100 8 Z" fill="url(#goldGradGunungan)" />

      {/* Branches & Foliage of Pohon Hayat */}
      <g stroke="url(#goldGradGunungan)" strokeWidth="1.5" strokeLinecap="round" fill="none">
        <path d="M100 65 Q128 48 148 68 Q132 88 100 82" />
        <path d="M100 65 Q72 48 52 68 Q68 88 100 82" />
        <path d="M100 102 Q142 85 166 110 Q142 132 100 124" />
        <path d="M100 102 Q58 85 34 110 Q58 132 100 124" />
        <path d="M100 144 Q148 126 174 154 Q146 178 100 168" />
        <path d="M100 144 Q52 126 26 154 Q54 178 100 168" />
        {/* Merak & Garuda Wings Contour */}
        <path d="M100 180 C135 162 172 178 165 210 C148 226 122 210 100 198" />
        <path d="M100 180 C65 162 28 178 35 210 C52 226 78 210 100 198" />
      </g>

      {/* Paduraksa Gate / Candi Gapura */}
      <g stroke="url(#goldGradGunungan)" strokeWidth="1.8" fill="url(#goldGradGunungan)" fillOpacity="0.25">
        <rect x="70" y="215" width="12" height="65" rx="1" />
        <rect x="118" y="215" width="12" height="65" rx="1" />
        {/* Paduraksa Roof Tier */}
        <path d="M64 215 L100 186 L136 215 Z" />
        {/* Banaspati / Kala Face Relief over Gate */}
        <circle cx="100" cy="202" r="5" fill="url(#goldGradGunungan)" />
        {/* Stairs */}
        <rect x="60" y="280" width="80" height="7" rx="1" />
      </g>

      {/* Tangkai Bawah Kayon */}
      <path d="M96 295 L104 295 L102 318 L98 318 Z" fill="url(#goldGradGunungan)" />
    </svg>
  );
}

/**
 * Wayang Kamajaya & Kamaratih (Simbol Dewa Asmara & Pasangan Abadi Jawa)
 */
export function WayangKamajayaKamaratihSvg({ className = 'w-48 h-32' }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="wayangGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF5BA" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8A5A0A" />
        </linearGradient>
      </defs>

      {/* Left: Raden Kamajaya (Groom Spirit) */}
      <g transform="translate(40, 20)" stroke="url(#wayangGold)" strokeWidth="1.5" fill="url(#wayangGold)" fillOpacity="0.15">
        {/* Mahkota Gelung Supit Urang */}
        <path d="M50 30 C58 10 75 14 68 28 C64 36 54 38 50 30 Z" />
        <circle cx="66" cy="18" r="2.5" fill="url(#wayangGold)" />
        {/* Wajah Menunduk Halus (Lanyap Halus) */}
        <path d="M50 30 L56 36 L52 44 L44 42 L42 36 Z" />
        {/* Hidung Mancung Khas Ksatria */}
        <path d="M56 36 L62 40 L56 42" strokeLinecap="round" />
        {/* Leher & Kalung Bulan Sabit */}
        <path d="M46 44 L46 54 Q50 58 54 54 L54 44" />
        {/* Bahu & Dada Ksatria */}
        <path d="M30 60 C38 52 62 52 70 60 L68 95 L32 95 Z" />
        {/* Tangan Nuding Halus Menghadap Pasangan */}
        <path d="M68 64 Q82 72 90 70 Q94 72 92 78 Q82 82 68 76" strokeLinecap="round" />
        {/* Kain Dodot & Keris Gayaman di Punggung */}
        <path d="M30 70 L20 62 L22 80 L30 84" strokeWidth="1.2" />
        <path d="M32 95 Q50 120 68 95" />
      </g>

      {/* Center Heart / Ronce Melati Link */}
      <g transform="translate(142, 65)">
        <circle cx="8" cy="8" r="7" stroke="url(#wayangGold)" strokeWidth="1.2" strokeDasharray="2 2" />
        <circle cx="8" cy="8" r="3" fill="url(#wayangGold)" />
        <path d="M-6 8 L1 8 M15 8 L22 8" stroke="url(#wayangGold)" strokeWidth="1.2" />
      </g>

      {/* Right: Dewi Kamaratih (Bride Spirit) */}
      <g transform="translate(170, 22)" stroke="url(#wayangGold)" strokeWidth="1.5" fill="url(#wayangGold)" fillOpacity="0.15">
        {/* Sanggul Gelung Ronce Bunga */}
        <path d="M40 32 C32 12 15 16 22 30 C26 38 36 40 40 32 Z" />
        <circle cx="24" cy="20" r="2.5" fill="url(#wayangGold)" />
        {/* Cunduk Mentul di atas kepala */}
        <path d="M22 18 L16 10 M26 16 L24 6 M30 18 L34 8" strokeLinecap="round" strokeWidth="1.2" />
        {/* Wajah Anggun Menghadap Suami */}
        <path d="M40 32 L34 38 L38 46 L46 44 L48 38 Z" />
        {/* Hidung Mancung Anggun */}
        <path d="M34 38 L28 42 L34 44" strokeLinecap="round" />
        {/* Tubuh Putri & Kemben */}
        <path d="M25 60 C32 54 52 54 60 60 L58 95 L26 95 Z" />
        {/* Tangan Ngapurancang Anggun */}
        <path d="M26 64 Q12 72 6 70 Q2 72 4 78 Q14 82 26 76" strokeLinecap="round" />
        {/* Kain Jarik Putri */}
        <path d="M26 95 Q42 120 58 95" />
      </g>
    </svg>
  );
}

/**
 * Authentic Batik Kawung Keraton Pattern SVG Component
 */
export function BatikKawungPatternSvg({ className = 'w-full h-full' }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <pattern id="batikKawung" width="48" height="48" patternUnits="userSpaceOnUse">
          {/* Central intersecting 4 elliptical lobes of Kawung */}
          <ellipse cx="24" cy="12" rx="9" ry="12" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.45" />
          <ellipse cx="24" cy="36" rx="9" ry="12" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.45" />
          <ellipse cx="12" cy="24" rx="12" ry="9" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.45" />
          <ellipse cx="36" cy="24" rx="12" ry="9" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.45" />
          {/* Inner Kawung Seeds */}
          <circle cx="24" cy="12" r="1.8" fill="#FFE29F" opacity="0.6" />
          <circle cx="24" cy="36" r="1.8" fill="#FFE29F" opacity="0.6" />
          <circle cx="12" cy="24" r="1.8" fill="#FFE29F" opacity="0.6" />
          <circle cx="36" cy="24" r="1.8" fill="#FFE29F" opacity="0.6" />
          {/* Center Cross Points */}
          <circle cx="24" cy="24" r="2.5" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.5" />
          <circle cx="0" cy="0" r="2" fill="#FFE29F" opacity="0.4" />
          <circle cx="48" cy="0" r="2" fill="#FFE29F" opacity="0.4" />
          <circle cx="0" cy="48" r="2" fill="#FFE29F" opacity="0.4" />
          <circle cx="48" cy="48" r="2" fill="#FFE29F" opacity="0.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#batikKawung)" />
    </svg>
  );
}

/**
 * Ronce Melati Menjuntai (Jasmine Garland Border)
 */
export function RonceMelatiBorder({ className = 'w-8 h-32' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="melatiBead" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F7F5EA" />
          <stop offset="100%" stopColor="#DFD8BE" />
        </radialGradient>
      </defs>
      {/* String */}
      <line x1="20" y1="0" x2="20" y2="160" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
      {/* Vertical Strand of Jasmine Flower Buds (Usus-ususan / Ronce) */}
      {[12, 32, 52, 72, 92, 112, 132, 150].map((y, idx) => (
        <g key={idx} transform={`translate(20, ${y})`}>
          {/* 4 Petal Star bud */}
          <circle cx="0" cy="0" r={idx === 7 ? 6 : 4.5} fill="url(#melatiBead)" stroke="#D4AF37" strokeWidth="0.8" />
          <circle cx="0" cy="0" r="1.2" fill="#B8860B" />
        </g>
      ))}
    </svg>
  );
}

/**
 * Aksara Jawa Callout Badge (with clean spacing to prevent overlap)
 */
export function AksaraJawaBadge({
  textJawa,
  latin,
  className = '',
}: {
  textJawa: string;
  latin: string;
  className?: string;
}) {
  return (
    <div className={`inline-flex flex-col items-center justify-center text-center gap-2 ${className}`}>
      <span className="font-serif text-lg sm:text-xl leading-relaxed tracking-widest text-[#FFE29F] filter drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] select-none block pb-1">
        {textJawa}
      </span>
      <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#E2B755] font-serif font-bold block bg-[#1A0205]/80 px-3.5 py-0.5 rounded-full border border-[#D4AF37]/35 shadow-sm">
        {latin}
      </span>
    </div>
  );
}

/**
 * Javanese Gebyok Door Left Half
 */
export function GebyokDoorLeft({ className = '' }: { className?: string }) {
  return (
    <div
      className={`h-full w-full bg-gradient-to-r from-[#240306] via-[#3A070D] to-[#4F0B13] border-r-4 border-[#D4AF37] relative flex flex-col justify-between overflow-hidden shadow-2xl ${className}`}
    >
      {/* Batik Kawung Layer */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <BatikKawungPatternSvg />
      </div>

      {/* Ronce Melati Corner Strand */}
      <div className="absolute top-0 right-2 z-20 pointer-events-none">
        <RonceMelatiBorder className="w-6 h-40 opacity-90" />
      </div>

      {/* Top Gebyok Carved Arch */}
      <div className="p-4 border-b border-[#D4AF37]/40 text-center relative z-10">
        <svg viewBox="0 0 100 50" fill="none" className="w-full h-12 text-[#E2B755]">
          <path d="M5 45 C30 10 70 10 95 45" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <path d="M15 45 C35 20 65 20 85 45" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" fill="none" />
          <circle cx="50" cy="18" r="4" fill="currentColor" />
          <path d="M40 28 Q50 20 60 28" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Middle Carved Panel with Gunungan Silhouette & Aksara Jawa */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 relative z-10">
        <div className="w-4/5 p-4 rounded-2xl border border-[#D4AF37]/50 bg-[#1A0205]/85 backdrop-blur-xs flex flex-col items-center shadow-inner">
          <GununganWayangSvg className="w-20 h-32 opacity-90 filter drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-2" />
          <AksaraJawaBadge textJawa="ꦱꦼꦫꦠ꧀ꦈꦭꦺꦩ꧀" latin="Serat Ulem" />
        </div>
      </div>

      {/* Door Handle & Lock Plate (Right Edge of Left Door) */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-24 bg-gradient-to-b from-[#FFF2A3] via-[#D4AF37] to-[#805607] rounded-full border-2 border-[#FFE29F] shadow-2xl flex items-center justify-center">
        <div className="w-4 h-14 rounded-full border border-[#4F0B13]/40 bg-[#805607]/50 flex items-center justify-center">
          <span className="text-[8px] text-[#FFE29F]">✦</span>
        </div>
      </div>

      {/* Bottom Plinth */}
      <div className="p-4 border-t border-[#D4AF37]/40 text-center relative z-10">
        <div className="w-full h-3 border border-[#D4AF37]/40 rounded-sm bg-[#1A0205]" />
      </div>
    </div>
  );
}

/**
 * Javanese Gebyok Door Right Half
 */
export function GebyokDoorRight({ className = '' }: { className?: string }) {
  return (
    <div
      className={`h-full w-full bg-gradient-to-l from-[#240306] via-[#3A070D] to-[#4F0B13] border-l-4 border-[#D4AF37] relative flex flex-col justify-between overflow-hidden shadow-2xl ${className}`}
    >
      {/* Batik Kawung Layer */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <BatikKawungPatternSvg />
      </div>

      {/* Ronce Melati Corner Strand */}
      <div className="absolute top-0 left-2 z-20 pointer-events-none">
        <RonceMelatiBorder className="w-6 h-40 opacity-90" />
      </div>

      {/* Top Gebyok Carved Arch */}
      <div className="p-4 border-b border-[#D4AF37]/40 text-center relative z-10">
        <svg viewBox="0 0 100 50" fill="none" className="w-full h-12 text-[#E2B755]">
          <path d="M5 45 C30 10 70 10 95 45" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <path d="M15 45 C35 20 65 20 85 45" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" fill="none" />
          <circle cx="50" cy="18" r="4" fill="currentColor" />
          <path d="M40 28 Q50 20 60 28" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Middle Carved Panel with Gunungan Silhouette & Aksara Jawa */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 relative z-10">
        <div className="w-4/5 p-4 rounded-2xl border border-[#D4AF37]/50 bg-[#1A0205]/85 backdrop-blur-xs flex flex-col items-center shadow-inner">
          <GununganWayangSvg className="w-20 h-32 opacity-90 filter drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-2" />
          <AksaraJawaBadge textJawa="ꦥꦮꦶꦮꦲꦤ꧀" latin="Pawiwahan Ageng" />
        </div>
      </div>

      {/* Door Handle & Lock Plate (Left Edge of Right Door) */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-24 bg-gradient-to-b from-[#FFF2A3] via-[#D4AF37] to-[#805607] rounded-full border-2 border-[#FFE29F] shadow-2xl flex items-center justify-center">
        <div className="w-4 h-14 rounded-full border border-[#4F0B13]/40 bg-[#805607]/50 flex items-center justify-center">
          <span className="text-[8px] text-[#FFE29F]">✦</span>
        </div>
      </div>

      {/* Bottom Plinth */}
      <div className="p-4 border-t border-[#D4AF37]/40 text-center relative z-10">
        <div className="w-full h-3 border border-[#D4AF37]/40 rounded-sm bg-[#1A0205]" />
      </div>
    </div>
  );
}

/**
 * Royal Javanese Gold Border Divider with Gunungan and Aksara
 */
export function JavaneseDivider({ className = 'my-6' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 w-full max-w-xs mx-auto ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-[#D4AF37]" />
      <div className="flex items-center gap-2 text-[#E2B755]">
        <span className="text-xs">✦</span>
        <GununganWayangSvg className="w-4 h-6 text-[#E2B755]" />
        <span className="text-xs font-serif select-none text-[#FFE29F]">ꦫꦲꦪꦸ</span>
        <GununganWayangSvg className="w-4 h-6 text-[#E2B755]" />
        <span className="text-xs">✦</span>
      </div>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#D4AF37]/70 to-[#D4AF37]" />
    </div>
  );
}

/**
 * Melati / Jasmine Flower Icon SVG
 */
export function MelatiFlowerSvg({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="jasmineGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFC" />
          <stop offset="70%" stopColor="#F5F3E9" />
          <stop offset="100%" stopColor="#E2DECF" />
        </radialGradient>
      </defs>
      {/* 5 Petals */}
      <circle cx="50" cy="22" r="14" fill="url(#jasmineGrad)" stroke="#D4AF37" strokeWidth="1" />
      <circle cx="76" cy="42" r="14" fill="url(#jasmineGrad)" stroke="#D4AF37" strokeWidth="1" />
      <circle cx="66" cy="74" r="14" fill="url(#jasmineGrad)" stroke="#D4AF37" strokeWidth="1" />
      <circle cx="34" cy="74" r="14" fill="url(#jasmineGrad)" stroke="#D4AF37" strokeWidth="1" />
      <circle cx="24" cy="42" r="14" fill="url(#jasmineGrad)" stroke="#D4AF37" strokeWidth="1" />
      {/* Center Pistil with Gold Accent */}
      <circle cx="50" cy="50" r="10" fill="#FFEB85" stroke="#C59B27" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="4" fill="#996515" />
    </svg>
  );
}

/**
 * 3D Carved Wood & Gold Gebyok Arch Crown
 */
export function GebyokCrownArch3D({ className = 'w-full h-12' }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 400 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
        <defs>
          <linearGradient id="gebyokGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2A3" />
            <stop offset="40%" stopColor="#D4AF37" />
            <stop offset="80%" stopColor="#996515" />
            <stop offset="100%" stopColor="#5E3804" />
          </linearGradient>
        </defs>

        {/* Outer Carved Arch Beam */}
        <path
          d="M10 50 Q70 15 200 12 Q330 15 390 50"
          stroke="url(#gebyokGoldGrad)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />

        {/* Inner Filigree Wave Arch */}
        <path
          d="M25 52 Q80 25 200 22 Q320 25 375 52"
          stroke="url(#gebyokGoldGrad)"
          strokeWidth="1.8"
          strokeDasharray="4 3"
          fill="none"
        />

        {/* Center Kala / Makuta Crest */}
        <g transform="translate(182, 0)">
          {/* Joglo Roof Point */}
          <path d="M18 2 L9 24 L27 24 Z" fill="url(#gebyokGoldGrad)" />
          <circle cx="18" cy="12" r="3" fill="#FFF5BA" />
          {/* Sulur Left & Right of Crest */}
          <path d="M9 22 Q0 16 -6 24 Q3 30 10 24" fill="url(#gebyokGoldGrad)" opacity="0.9" />
          <path d="M27 22 Q36 16 42 24 Q33 30 26 24" fill="url(#gebyokGoldGrad)" opacity="0.9" />
        </g>

        {/* Left & Right Finials */}
        <circle cx="12" cy="50" r="4" fill="url(#gebyokGoldGrad)" />
        <circle cx="388" cy="50" r="4" fill="url(#gebyokGoldGrad)" />
      </svg>
    </div>
  );
}

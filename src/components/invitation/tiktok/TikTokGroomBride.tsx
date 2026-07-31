'use client';

import Image from 'next/image';
import { GroomBrideInfo } from '@/types/invitation';
import { Heart, Sparkles, Music2 } from 'lucide-react';

interface TikTokGroomBrideProps {
  groom: GroomBrideInfo;
  bride: GroomBrideInfo;
}

export default function TikTokGroomBride({ groom, bride }: TikTokGroomBrideProps) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-6 select-none space-y-6">
      {/* Header Section Title */}
      <div className="text-center space-y-1">
        <p className="text-xs font-mono font-extrabold tracking-widest uppercase">
          <span className="text-[#FE2C55]">MEMPELAI </span>
          <span className="text-[#00F2FE]">BERBAHAGIA</span>
        </p>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
          Mempelai Pria &amp; Wanita
        </h3>
        <p className="text-xs text-zinc-400 max-w-md mx-auto">
          Maha Suci Allah yang telah menyatukan dua insan dalam ikatan suci pernikahan
        </p>
      </div>

      {/* Groom & Bride 2-Column Duet Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Groom Card */}
        <div className="bg-[#121212] border border-zinc-800 rounded-3xl p-6 shadow-2xl space-y-4 relative overflow-hidden group hover:border-[#00F2FE] transition-colors text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-5">
            {/* Clean Photo Container without overlay badges */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#00F2FE] shadow-[0_0_20px_rgba(0,242,254,0.4)] shrink-0">
              <Image
                src={groom.photoUrl}
                alt={groom.fullName}
                fill
                sizes="(max-width: 640px) 112px, 128px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="space-y-2 flex-1">
              <span className="inline-block bg-[#00F2FE] text-black text-[9px] font-mono font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                THE GROOM
              </span>
              <div>
                <h4 className="text-lg font-extrabold text-white font-sans">{groom.fullName}</h4>
                <p className="text-xs font-mono text-[#00F2FE] font-bold">@{groom.instagram || 'groom_official'}</p>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                {groom.parentInfo}
              </p>

              {groom.instagram && (
                <a
                  href={`https://instagram.com/${groom.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-zinc-800 hover:bg-[#00F2FE] hover:text-black text-white text-[11px] font-bold px-3 py-1.5 rounded-full border border-zinc-700 transition-all font-mono"
                >
                  <span>Social Profile</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bride Card */}
        <div className="bg-[#121212] border border-zinc-800 rounded-3xl p-6 shadow-2xl space-y-4 relative overflow-hidden group hover:border-[#FE2C55] transition-colors text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-5">
            {/* Clean Photo Container without overlay badges */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#FE2C55] shadow-[0_0_20px_rgba(254,44,85,0.4)] shrink-0">
              <Image
                src={bride.photoUrl}
                alt={bride.fullName}
                fill
                sizes="(max-width: 640px) 112px, 128px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="space-y-2 flex-1">
              <span className="inline-block bg-[#FE2C55] text-white text-[9px] font-mono font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                THE BRIDE
              </span>
              <div>
                <h4 className="text-lg font-extrabold text-white font-sans">{bride.fullName}</h4>
                <p className="text-xs font-mono text-[#FE2C55] font-bold">@{bride.instagram || 'bride_official'}</p>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                {bride.parentInfo}
              </p>

              {bride.instagram && (
                <a
                  href={`https://instagram.com/${bride.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-zinc-800 hover:bg-[#FE2C55] hover:text-white text-white text-[11px] font-bold px-3 py-1.5 rounded-full border border-zinc-700 transition-all font-mono"
                >
                  <span>Social Profile</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

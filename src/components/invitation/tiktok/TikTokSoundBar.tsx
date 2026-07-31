'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Music2, Play, Pause, Heart, Sparkles } from 'lucide-react';

export default function TikTokSoundBar() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 select-none pt-2">
      <div className="bg-[#141414] border border-zinc-800 rounded-2xl p-4 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Sound Info & Vinyl Disc */}
        <div className="flex items-center gap-3">
          {/* Vinyl Disc Icon */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-zinc-700 animate-spin bg-zinc-900 shrink-0 shadow-lg" style={{ animationDuration: '6s' }}>
            <Image
              src="/assets/images/sm-WANITA.webp"
              alt="Music Disc"
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>

          <div className="space-y-0.5 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1.5">
              <Music2 className="w-3.5 h-3.5 text-[#00F2FE] animate-pulse" />
              <p className="text-xs font-bold text-white font-sans">
                Original Sound - Married Together (Romantic Piano)
              </p>
            </div>
            <p className="text-[11px] text-zinc-400 font-mono">
              fahreiza_amanda.official &bull; 1.2M FYP Videos Used
            </p>
          </div>
        </div>

        {/* Action Button: Use Sound */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center gap-2 bg-gradient-to-r from-[#FE2C55] to-[#00F2FE] hover:opacity-90 text-white text-xs font-extrabold px-5 py-2.5 rounded-full shadow transition-all shrink-0 uppercase tracking-wider font-mono"
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4" />
              <span>PAUSE SOUND</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-current" />
              <span>GUNAKAN SUARA INI 🎵</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

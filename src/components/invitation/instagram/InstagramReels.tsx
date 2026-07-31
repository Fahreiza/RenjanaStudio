'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import {
  Film,
  X,
  Play,
  Eye,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Music,
} from 'lucide-react';

interface InstagramReelsProps {
  photos: string[];
}

export default function InstagramReels({ photos }: InstagramReelsProps) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [activeScrollIndex, setActiveScrollIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    setActiveScrollIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollTop = containerRef.current.scrollTop;
    const height = containerRef.current.clientHeight;
    const newIndex = Math.round(scrollTop / height);
    if (newIndex >= 0 && newIndex < photos.length && newIndex !== activeScrollIndex) {
      setActiveScrollIndex(newIndex);
    }
  };

  const handleShareReel = (idx: number) => {
    const text = encodeURIComponent(
      `Lihat Instagram Reel Pre-Wedding Fahreiza & Amanda #${idx + 1} di sini: ${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div id="sec-reels" className="space-y-4 select-none pt-4 max-w-4xl mx-auto px-4">
      {/* Title Header Bar */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#FCCC63] via-[#E4405F] to-[#833AB4] text-white flex items-center justify-center shadow-lg">
            <Film className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-white font-sans tracking-tight flex items-center gap-2">
              Instagram Reels Highlights <span className="text-xs bg-[#E4405F] text-white font-mono px-2 py-0.5 rounded font-bold uppercase">REELS</span>
            </h3>
            <p className="text-xs text-zinc-400">Cuplikan Momen Bahagia &amp; Video Pre-Wedding Romantis</p>
          </div>
        </div>
      </div>

      {/* Horizontal Track of 9:16 Reels Cards */}
      <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent snap-x snap-mandatory">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx)}
            className="relative w-36 sm:w-44 md:w-48 aspect-[9/16] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl shrink-0 group cursor-pointer snap-start transition-transform duration-300 hover:scale-105 hover:border-[#E4405F]"
          >
            {/* Reel Thumbnail Image */}
            <Image
              src={photo}
              alt={`Reels Moment #${idx + 1}`}
              fill
              sizes="(max-width: 640px) 144px, 192px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />

            {/* Top Instagram Reels Badge */}
            <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10 text-[10px] font-bold font-mono">
              <span className="bg-gradient-to-r from-[#FCCC63] via-[#E4405F] to-[#833AB4] text-white px-2 py-0.5 rounded-md shadow uppercase tracking-wider flex items-center gap-1">
                <Film className="w-3 h-3" />
                <span>REELS</span>
              </span>
              <span className="bg-black/60 backdrop-blur-md text-zinc-200 px-1.5 py-0.5 rounded border border-zinc-700">
                0:30
              </span>
            </div>

            {/* Center Play Pulse Hover Icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <div className="w-12 h-12 rounded-full bg-[#E4405F] text-white flex items-center justify-center shadow-xl">
                <Play className="w-6 h-6 fill-current ml-1" />
              </div>
            </div>

            {/* Bottom Title & Play Count */}
            <div className="absolute bottom-3 left-2.5 right-2.5 z-10 space-y-1">
              <p className="text-xs font-bold text-white line-clamp-2 leading-snug drop-shadow-md">
                Instagram Reel #{idx + 1}
              </p>
              <div className="flex items-center gap-1 text-[10px] text-zinc-300 font-mono">
                <Eye className="w-3 h-3 text-[#E4405F]" />
                <span>{((idx + 1) * 18.2).toFixed(1)}K plays</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Authentic Vertical Scrolling Instagram Reels Modal Viewer */}
      {selectedPhotoIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 select-none">
          {/* Close Button Top Right */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-3 bg-zinc-900/80 hover:bg-[#E4405F] text-white rounded-full transition-colors border border-zinc-700 shadow-2xl"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Vertical Snap Scroll Reels Feed Container */}
          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="relative w-full max-w-sm h-[90vh] rounded-3xl overflow-y-scroll snap-y snap-mandatory scrollbar-none border border-zinc-800 shadow-2xl bg-black"
          >
            {photos.map((photo, idx) => (
              <div
                key={idx}
                className="relative w-full h-full snap-start shrink-0 overflow-hidden bg-black flex items-center justify-center"
              >
                {/* Reel Full Image */}
                <Image
                  src={photo}
                  alt={`Reels Full Moment #${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 384px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />

                {/* Top Badge Info */}
                <div className="absolute top-4 left-4 right-16 z-20 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-[#FCCC63] via-[#E4405F] to-[#833AB4] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded font-mono uppercase">
                    REELS
                  </span>
                  <span className="text-xs font-bold text-white font-mono drop-shadow">
                    Moment #{idx + 1}
                  </span>
                </div>

                {/* Right Side Authentic Instagram Reels Action Buttons */}
                <div className="absolute right-3 bottom-12 z-20 flex flex-col items-center gap-5 text-white">
                  {/* Like Button */}
                  <button className="flex flex-col items-center gap-1 group">
                    <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-[#E4405F] transition-colors">
                      <Heart className="w-5 h-5 fill-current text-[#E4405F]" />
                    </div>
                    <span className="text-[10px] font-mono font-bold">{(18.4 + idx * 3.1).toFixed(1)}K</span>
                  </button>

                  {/* Comment Button */}
                  <button className="flex flex-col items-center gap-1 group">
                    <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-zinc-800 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold">{340 + idx * 25}</span>
                  </button>

                  {/* Share WA Button */}
                  <button onClick={() => handleShareReel(idx)} className="flex flex-col items-center gap-1 group">
                    <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-[#E4405F] transition-colors">
                      <Send className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[10px] font-mono font-bold">Share</span>
                  </button>

                  {/* Bookmark Button */}
                  <button className="flex flex-col items-center gap-1 group">
                    <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-zinc-800 transition-colors">
                      <Bookmark className="w-5 h-5 text-white" />
                    </div>
                  </button>
                </div>

                {/* Bottom Title & Audio Bar */}
                <div className="absolute bottom-4 left-4 right-16 z-20 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#FCCC63] via-[#E4405F] to-[#833AB4] text-white flex items-center justify-center font-bold text-xs">
                      FA
                    </div>
                    <span className="text-xs font-extrabold text-white">fahreiza_amanda</span>
                    <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded text-white font-mono">
                      Follow
                    </span>
                  </div>

                  <p className="text-xs font-bold text-zinc-100 line-clamp-2 leading-snug drop-shadow">
                    Instagram Reels momen bahagia pre-wedding Fahreiza &amp; Amanda #{idx + 1} ✨❤️
                  </p>

                  <div className="flex items-center gap-1.5 text-[10px] text-zinc-300 font-mono bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full w-max border border-white/10">
                    <Music className="w-3 h-3 text-[#E4405F] animate-pulse" />
                    <span>Lagu Pernikahan Romantis &bull; Original Audio</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

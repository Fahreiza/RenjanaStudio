'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Camera, X, Heart, Play, Music2, Share2, MessageCircle, ChevronDown, Bookmark } from 'lucide-react';

interface TikTokPhotoGalleryProps {
  photos: string[];
}

export default function TikTokPhotoGallery({ photos }: TikTokPhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [likedClips, setLikedClips] = useState<{ [key: number]: boolean }>({});
  const containerRef = useRef<HTMLDivElement | null>(null);

  const viewStats = [
    { views: '128.4K', likes: '45.2K', comments: '1.8K' },
    { views: '98.2K', likes: '32.1K', comments: '1.2K' },
    { views: '210.5K', likes: '88.4K', comments: '3.4K' },
    { views: '76.8K', likes: '24.9K', comments: '950' },
    { views: '154.1K', likes: '62.0K', comments: '2.1K' },
    { views: '312.0K', likes: '105.3K', comments: '4.8K' },
  ];

  const handleOpenLightbox = (photo: string, index: number) => {
    setSelectedPhoto(photo);
    setSelectedIndex(index);
  };

  useEffect(() => {
    if (selectedPhoto && containerRef.current) {
      const el = containerRef.current.children[selectedIndex] as HTMLElement;
      if (el) {
        el.scrollIntoView({ behavior: 'auto' });
      }
    }
  }, [selectedPhoto, selectedIndex]);

  const toggleLike = (index: number) => {
    setLikedClips((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-6 select-none space-y-6">
      {/* Section Title */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#FE2C55] to-[#00F2FE] text-white flex items-center justify-center shadow-lg">
            <Camera className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-white font-sans tracking-tight flex items-center gap-2">
              Galeri Pre-Wedding TikTok <span className="text-xs bg-[#00F2FE] text-black font-mono px-2 py-0.5 rounded font-bold uppercase">FYP FEED</span>
            </h3>
            <p className="text-xs text-zinc-400">Klik klip mana saja lalu usap/scroll ke bawah untuk menonton berikutnya</p>
          </div>
        </div>
      </div>

      {/* 9:16 TikTok Video Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            onClick={() => handleOpenLightbox(photo, idx)}
            className="relative aspect-[9/16] bg-zinc-900 rounded-2xl overflow-hidden group cursor-pointer border border-zinc-800 shadow-xl hover:border-[#00F2FE] transition-all"
          >
            <Image
              src={photo}
              alt={`TikTok Gallery Clip #${idx + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, 300px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Top TikTok Tag */}
            <div className="absolute top-2 left-2 z-10 bg-black/60 backdrop-blur text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border border-white/20">
              CLIP #{idx + 1}
            </div>

            {/* Center Play Icon Hover Overlay */}
            <div className="absolute inset-0 z-10 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#FE2C55] text-white flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                <Play className="w-6 h-6 fill-current translate-x-0.5" />
              </div>
            </div>

            {/* Bottom Gradient & TikTok View Stats */}
            <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 pt-6 flex items-center justify-between text-[10px] font-mono text-white">
              <div className="flex items-center gap-1 font-extrabold text-[#00F2FE]">
                <Play className="w-3 h-3 fill-current" />
                <span>{viewStats[idx % viewStats.length].views}</span>
              </div>
              <div className="flex items-center gap-1 font-bold text-[#FE2C55]">
                <Heart className="w-3 h-3 fill-current" />
                <span>{viewStats[idx % viewStats.length].likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Vertical Snap-Scroll TikTok Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 select-none">
          {/* Close Button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 right-4 z-50 p-3 bg-zinc-900/80 hover:bg-[#FE2C55] text-white rounded-full transition-colors border border-zinc-700 shadow-2xl"
          >
            <X className="w-6 h-6" />
          </button>

          {/* TikTok Vertical FYP Container */}
          <div
            ref={containerRef}
            className="relative w-full max-w-sm h-[88vh] rounded-3xl overflow-y-auto snap-y snap-mandatory bg-black border-2 border-zinc-800 shadow-2xl scrollbar-none"
          >
            {photos.map((photoUrl, idx) => (
              <div
                key={idx}
                className="relative w-full h-[88vh] snap-start shrink-0 flex flex-col justify-end overflow-hidden"
              >
                {/* Background Photo */}
                <Image
                  src={photoUrl}
                  alt={`TikTok Clip #${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 384px"
                  className="object-cover"
                  priority={idx === selectedIndex}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 pointer-events-none" />

                {/* Top Video Counter */}
                <div className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur text-white text-[11px] font-mono font-bold px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-pulse" />
                  <span>CLIP {idx + 1} OF {photos.length}</span>
                </div>

                {/* Right Action Bar */}
                <div className="absolute right-3 bottom-16 z-20 flex flex-col items-center gap-4 text-white">
                  {/* Heart Like Button */}
                  <button
                    onClick={() => toggleLike(idx)}
                    className="flex flex-col items-center gap-1 group"
                  >
                    <div className={`p-2.5 rounded-full bg-black/40 backdrop-blur ${likedClips[idx] ? 'text-[#FE2C55]' : 'text-white'}`}>
                      <Heart className={`w-7 h-7 ${likedClips[idx] ? 'fill-current scale-110' : ''}`} />
                    </div>
                    <span className="text-[10px] font-mono font-bold">
                      {likedClips[idx] ? 'Liked!' : viewStats[idx % viewStats.length].likes}
                    </span>
                  </button>

                  {/* Comments */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="p-2.5 rounded-full bg-black/40 backdrop-blur text-white">
                      <MessageCircle className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-mono font-bold">{viewStats[idx % viewStats.length].comments}</span>
                  </div>

                  {/* Share */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="p-2.5 rounded-full bg-black/40 backdrop-blur text-white">
                      <Share2 className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-mono font-bold">Share</span>
                  </div>

                  {/* Spinning Disc */}
                  <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-zinc-700 animate-spin bg-zinc-900 shadow-xl" style={{ animationDuration: '6s' }}>
                    <Image
                      src="/assets/images/sm-WANITA.webp"
                      alt="Disc"
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Bottom Overlay Info & Caption */}
                <div className="relative z-10 p-5 space-y-2 max-w-[80%]">
                  <h4 className="font-bold text-xs text-white flex items-center gap-1">
                    @fahreiza_amanda.official
                    <span className="w-3.5 h-3.5 rounded-full bg-[#00F2FE] text-black flex items-center justify-center p-0.5 text-[8px] font-bold">✓</span>
                  </h4>
                  <p className="text-xs text-zinc-200 font-sans leading-snug">
                    Pre-Wedding Clip #{idx + 1} ✨ Swipe down for next video! #FahreizaAmandaWedding2026 #WeddingTok #FYP
                  </p>
                  <div className="flex items-center gap-2 text-xs text-zinc-300 font-semibold pt-0.5">
                    <Music2 className="w-3.5 h-3.5 animate-pulse text-[#00F2FE]" />
                    <span className="truncate">Original Sound - Married Together (Romantic)</span>
                  </div>
                </div>

                {/* Swipe Down Scroll Prompt Hint */}
                {idx < photos.length - 1 && (
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 text-[10px] font-mono text-zinc-400 bg-black/40 px-3 py-0.5 rounded-full animate-bounce">
                    <ChevronDown className="w-3.5 h-3.5 text-[#00F2FE]" />
                    <span>SCROLL DOWN FOR NEXT CLIP</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Play, Pause, SkipBack, SkipForward, Heart, Volume2, Repeat, Shuffle } from 'lucide-react';

interface SpotifyPlayerBarProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  trackTitle: string;
  artistName: string;
  coverPhotoUrl: string;
}

export default function SpotifyPlayerBar({
  isPlaying,
  onTogglePlay,
  trackTitle,
  artistName,
  coverPhotoUrl,
}: SpotifyPlayerBarProps) {
  const [progress, setProgress] = useState(35);
  const [isLiked, setIsLiked] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#181818] border-t border-zinc-800 text-white px-4 py-3 shadow-2xl flex items-center justify-between gap-4 select-none">
      {/* Left: Album Vinyl & Track Info */}
      <div className="flex items-center gap-3 min-w-0 w-1/4">
        <div className="relative w-12 h-12 rounded overflow-hidden shrink-0 shadow bg-zinc-800">
          <Image
            src={coverPhotoUrl}
            alt={trackTitle}
            fill
            className={`object-cover ${isPlaying ? 'animate-spin' : ''}`}
            style={{ animationDuration: '10s' }}
          />
        </div>
        <div className="min-w-0 hidden sm:block">
          <h4 className="text-xs font-semibold truncate hover:underline cursor-pointer">
            {trackTitle}
          </h4>
          <p className="text-[11px] text-zinc-400 truncate hover:underline cursor-pointer">
            {artistName}
          </p>
        </div>
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="text-[#1DB954] hover:scale-110 transition-transform hidden sm:block"
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Center: Playback Controls & Progress Bar */}
      <div className="flex flex-col items-center gap-1.5 flex-1 max-w-md">
        <div className="flex items-center gap-4 text-zinc-400">
          <button className="hover:text-white transition-colors hidden sm:block">
            <Shuffle className="w-4 h-4" />
          </button>
          <button className="hover:text-white transition-colors">
            <SkipBack className="w-4 h-4 fill-current" />
          </button>
          <button
            onClick={onTogglePlay}
            className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform shadow"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-current" />
            ) : (
              <Play className="w-4 h-4 fill-current ml-0.5" />
            )}
          </button>
          <button className="hover:text-white transition-colors">
            <SkipForward className="w-4 h-4 fill-current" />
          </button>
          <button className="hover:text-white transition-colors hidden sm:block">
            <Repeat className="w-4 h-4 text-[#1DB954]" />
          </button>
        </div>

        {/* Live Progress Bar */}
        <div className="w-full flex items-center gap-2 text-[10px] text-zinc-400 font-mono">
          <span>0:42</span>
          <div className="flex-1 h-1 bg-zinc-700 rounded-full overflow-hidden relative cursor-pointer group">
            <div
              className="h-full bg-white group-hover:bg-[#1DB954] transition-colors rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span>3:15</span>
        </div>
      </div>

      {/* Right: Volume & Extras */}
      <div className="hidden md:flex items-center gap-3 text-zinc-400 min-w-0 w-1/4 justify-end">
        <Volume2 className="w-4 h-4 hover:text-white cursor-pointer" />
        <div className="w-20 h-1 bg-zinc-700 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full" style={{ width: '80%' }} />
        </div>
      </div>
    </div>
  );
}

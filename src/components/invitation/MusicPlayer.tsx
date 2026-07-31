'use client';

import { useState, useEffect, useRef } from 'react';
import { Music, VolumeX, Play, Pause } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export default function MusicPlayer({ isPlaying, onTogglePlay }: MusicPlayerProps) {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={onTogglePlay}
        aria-label={isPlaying ? 'Hentikan Musik' : 'Putar Musik'}
        className={`group relative flex items-center justify-center w-12 h-12 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 ${
          isPlaying
            ? 'bg-[#B76E79] text-white ring-4 ring-[#B76E79]/30 animate-pulse-glow'
            : 'bg-white/90 text-[#8A9A86] border border-[#8A9A86]/30 hover:bg-[#8A9A86] hover:text-white'
        }`}
      >
        {/* Animated equalizer waves when playing */}
        {isPlaying && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B76E79] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#B76E79]"></span>
          </span>
        )}

        {isPlaying ? (
          <Music className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}

        {/* Tooltip */}
        <span className="absolute right-14 whitespace-nowrap bg-zinc-900/80 text-white text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
          {isPlaying ? 'Matikan Musik' : 'Putar Musik'}
        </span>
      </button>
    </div>
  );
}

'use client';

import React, { useState, useEffect, useRef } from 'react';

interface AudioPlayerProps {
  audioUrl?: string;
  autoPlay?: boolean;
}

export default function AudioPlayer({
  audioUrl = '/audio/wedding-song.mp3',
  autoPlay = false,
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [autoPlay]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <div className="fixed bottom-5 left-5 z-40">
      <audio ref={audioRef} src={audioUrl} loop />
      <button
        onClick={togglePlay}
        className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-xl transition-transform ${
          isPlaying ? 'bg-amber-600 animate-spin-slow' : 'bg-slate-700 opacity-80'
        }`}
        aria-label="Toggle Audio"
      >
        {isPlaying ? '🎵' : '🔇'}
      </button>
    </div>
  );
}

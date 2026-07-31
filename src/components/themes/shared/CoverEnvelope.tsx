'use client';

import React, { useState } from 'react';

interface CoverEnvelopeProps {
  namaPria: string;
  namaWanita: string;
  namaTamu?: string;
  onOpen: () => void;
}

export default function CoverEnvelope({
  namaPria,
  namaWanita,
  namaTamu = 'Tamu Undangan',
  onOpen,
}: CoverEnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClick = () => {
    setIsOpen(true);
    setTimeout(() => {
      onOpen();
    }, 600);
  };

  if (isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-amber-100 p-6 transition-all duration-700">
      <div className="text-center space-y-4 max-w-md w-full border border-amber-500/30 p-8 rounded-2xl bg-slate-900/80 shadow-2xl backdrop-blur-md">
        <p className="text-sm uppercase tracking-widest text-amber-400">Undangan Pernikahan</p>
        <h1 className="text-4xl font-serif font-bold text-amber-200">
          {namaPria} <span className="text-amber-500">&</span> {namaWanita}
        </h1>

        <div className="my-6 border-t border-b border-amber-500/20 py-4">
          <p className="text-xs text-slate-400 mb-1">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
          <p className="text-xl font-semibold text-white">{namaTamu}</p>
        </div>

        <button
          onClick={handleOpenClick}
          className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 font-bold hover:brightness-110 active:scale-95 transition shadow-lg cursor-pointer flex items-center justify-center gap-2"
        >
          <span>✉️</span> Buka Undangan
        </button>
      </div>
    </div>
  );
}

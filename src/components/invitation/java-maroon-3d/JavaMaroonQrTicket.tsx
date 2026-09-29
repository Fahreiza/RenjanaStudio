'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Download, Check, Sparkles } from 'lucide-react';
import { GununganWayangSvg, AksaraJawaBadge } from './JavaMaroonOrnaments';

import JavaMaroon3DCard from './JavaMaroon3DCard';

interface JavaMaroonQrTicketProps {
  guestName: string;
  weddingDate: string;
  venueName: string;
  ticketCode?: string;
}

export default function JavaMaroonQrTicket({
  guestName,
  weddingDate,
  venueName,
  ticketCode = 'VIP-RNJ-2026-JAVA',
}: JavaMaroonQrTicketProps) {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <section className="relative w-full py-10 px-4 text-[#FFF2A3] z-10">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-8">
        <AksaraJawaBadge textJawa="ꦱꦼꦫꦠ꧀ꦏꦚ꧀ꦕꦶꦔꦤ꧀" latin="Serat Kancingan VIP" />
        <h2 className="text-3xl sm:text-4xl font-serif text-[#FFE29F] tracking-wide">
          VIP Guest Pass (Tanda Rawuh)
        </h2>
        <p className="text-xs text-[#FFE29F]/80 max-w-sm mx-auto font-serif italic">
          Katur panjenenganipun tamu kinurmatan, kersaa nedahaken barcode menika dhumateng among tamu ing meja registrasi.
        </p>
      </div>

      <div className="max-w-xs sm:max-w-sm mx-auto">
        <JavaMaroon3DCard maxTilt={15} className="p-6 text-center relative overflow-hidden">
          {/* Top Notch Left & Right */}
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#120103] border-r-2 border-[#D4AF37]" />
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#120103] border-l-2 border-[#D4AF37]" />

          {/* Ticket Header */}
          <div style={{ transform: 'translateZ(30px)' }} className="flex items-center justify-between border-b border-[#D4AF37]/40 pb-3 mb-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#FFF2A3] font-serif font-bold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#FFF2A3]" />
              VIP INVITATION PASS
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#1A0205] border border-[#FFE29F]/50 text-[9px] font-mono text-[#FFF2A3]">
              {ticketCode}
            </span>
          </div>

          {/* Guest Name on Ticket */}
          <div style={{ transform: 'translateZ(40px)' }} className="space-y-1 my-3">
            <p className="text-[10px] text-[#E2B755] font-serif uppercase tracking-wider font-semibold">
              Asma Tamu Undangan
            </p>
            <h3 className="text-xl sm:text-2xl font-serif font-black text-[#FFF2A3] tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {guestName}
            </h3>
            <p className="text-[11px] text-[#FFE29F]/80 font-serif">
              {venueName} • {weddingDate}
            </p>
          </div>

          {/* QR Code Container (3D floating platform) */}
          <div
            style={{ transform: 'translateZ(50px)' }}
            className="my-5 p-4 rounded-2xl bg-white/95 border-2 border-[#FFE29F] max-w-[210px] mx-auto shadow-[0_8px_25px_rgba(0,0,0,0.7)] flex flex-col items-center justify-center"
          >
            {/* High visual quality QR Vector Mock */}
            <div className="w-36 h-36 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#2B0409]">
                {/* 3 Corner Positioning Boxes */}
                <rect x="5" y="5" width="26" height="26" rx="2" stroke="currentColor" strokeWidth="4" />
                <rect x="11" y="11" width="14" height="14" fill="currentColor" />

                <rect x="69" y="5" width="26" height="26" rx="2" stroke="currentColor" strokeWidth="4" />
                <rect x="75" y="11" width="14" height="14" fill="currentColor" />

                <rect x="5" y="69" width="26" height="26" rx="2" stroke="currentColor" strokeWidth="4" />
                <rect x="11" y="75" width="14" height="14" fill="currentColor" />

                {/* Simulated QR Code Data Matrix */}
                <rect x="36" y="8" width="6" height="6" fill="currentColor" />
                <rect x="48" y="8" width="8" height="6" fill="currentColor" />
                <rect x="40" y="20" width="12" height="6" fill="currentColor" />
                <rect x="56" y="20" width="8" height="6" fill="currentColor" />

                <rect x="8" y="36" width="6" height="8" fill="currentColor" />
                <rect x="20" y="40" width="8" height="6" fill="currentColor" />
                <rect x="8" y="52" width="12" height="8" fill="currentColor" />

                <rect x="36" y="36" width="28" height="28" fill="currentColor" rx="4" />
                <rect x="42" y="42" width="16" height="16" fill="white" rx="2" />
                <rect x="47" y="47" width="6" height="6" fill="currentColor" />

                <rect x="70" y="36" width="8" height="12" fill="currentColor" />
                <rect x="84" y="40" width="8" height="8" fill="currentColor" />
                <rect x="72" y="52" width="18" height="6" fill="currentColor" />

                <rect x="36" y="70" width="10" height="8" fill="currentColor" />
                <rect x="52" y="72" width="8" height="16" fill="currentColor" />
                <rect x="40" y="84" width="8" height="8" fill="currentColor" />

                <rect x="68" y="70" width="8" height="6" fill="currentColor" />
                <rect x="80" y="74" width="12" height="12" fill="currentColor" />
                <rect x="68" y="82" width="6" height="10" fill="currentColor" />
              </svg>
            </div>
            <span className="text-[9px] font-mono text-[#2B0409] font-bold tracking-widest pt-1">
              PAWIWAHAN-VIP-{guestName.slice(0, 3).toUpperCase()}
            </span>
          </div>

          {/* Download Ticket Button */}
          <div style={{ transform: 'translateZ(35px)' }}>
            <button
              onClick={handleDownload}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#FFF2A3] to-[#B8860B] text-[#3B070D] font-serif font-bold text-xs uppercase tracking-wider shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              {downloaded ? (
                <>
                  <Check className="w-4 h-4 text-[#3B070D]" />
                  <span>Tiket Disimpan!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-[#3B070D]" />
                  <span>Simpan Tiket QR</span>
                </>
              )}
            </button>
          </div>
        </JavaMaroon3DCard>
      </div>
    </section>
  );
}

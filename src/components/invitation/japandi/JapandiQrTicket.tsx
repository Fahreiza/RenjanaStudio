'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Check, Sparkles } from 'lucide-react';

interface JapandiQrTicketProps {
  guestName: string;
  weddingDate: string;
  venueName: string;
  ticketCode?: string;
}

export default function JapandiQrTicket({
  guestName,
  weddingDate,
  venueName,
  ticketCode = 'VIP-JAPANDI-2026',
}: JapandiQrTicketProps) {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <section className="relative w-full py-12 px-4 text-[#2D2F2E] z-10 font-sans">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-10">
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#637061] font-mono block">
          TANDA RAWUH // VIP PASS
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-normal tracking-wide text-[#2D2F2E]">
          Kartu Akses VIP
        </h2>
        <div className="w-10 h-px bg-[#637061]/40 mx-auto my-2" />
        <p className="text-xs text-[#2D2F2E]/70 font-serif max-w-sm mx-auto italic">
          Tunjukkan QR Code ini kepada petugas resepsionis di meja buku tamu.
        </p>
      </div>

      <div className="max-w-xs sm:max-w-sm mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-white/90 border border-[#2D2F2E]/10 p-6 text-center shadow-md overflow-hidden"
        >
          {/* Ticket Notches */}
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#F4F0EA] border-r border-[#2D2F2E]/10" />
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#F4F0EA] border-l border-[#2D2F2E]/10" />

          {/* Ticket Header */}
          <div className="flex items-center justify-between border-b border-[#2D2F2E]/10 pb-3 mb-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#637061] font-mono font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#637061]" />
              VIP INVITATION PASS
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#F4F0EA] border border-[#2D2F2E]/10 text-[9px] font-mono text-[#2D2F2E]">
              {ticketCode}
            </span>
          </div>

          {/* Guest Name on Ticket */}
          <div className="space-y-1 my-3">
            <p className="text-[10px] text-[#637061] font-mono uppercase tracking-widest">
              TAMU KEHORMATAN
            </p>
            <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#2D2F2E] tracking-wide">
              {guestName}
            </h3>
            <p className="text-[11px] text-[#2D2F2E]/60 font-serif">
              {venueName} &bull; {weddingDate}
            </p>
          </div>

          {/* QR Code Container */}
          <div className="my-5 p-4 rounded-2xl bg-[#F4F0EA] border border-[#2D2F2E]/10 max-w-[210px] mx-auto shadow-inner flex flex-col items-center justify-center">
            <div className="w-36 h-36 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#2D2F2E]">
                <rect x="5" y="5" width="26" height="26" rx="2" stroke="currentColor" strokeWidth="4" />
                <rect x="11" y="11" width="14" height="14" fill="currentColor" />

                <rect x="69" y="5" width="26" height="26" rx="2" stroke="currentColor" strokeWidth="4" />
                <rect x="75" y="11" width="14" height="14" fill="currentColor" />

                <rect x="5" y="69" width="26" height="26" rx="2" stroke="currentColor" strokeWidth="4" />
                <rect x="11" y="75" width="14" height="14" fill="currentColor" />

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
            <span className="text-[9px] font-mono text-[#2D2F2E] font-bold tracking-widest pt-1">
              JAPANDI-PASS-{guestName.slice(0, 3).toUpperCase()}
            </span>
          </div>

          {/* Download Ticket Button */}
          <button
            onClick={handleDownload}
            className="w-full py-2.5 px-4 rounded-full bg-[#2D2F2E] hover:bg-[#637061] text-white font-mono font-medium text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2"
          >
            {downloaded ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Tiket Disimpan!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-white" />
                <span>Simpan Tiket QR</span>
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

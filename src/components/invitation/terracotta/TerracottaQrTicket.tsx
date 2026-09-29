'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Download, Check, Sparkles } from 'lucide-react';

interface TerracottaQrTicketProps {
  guestName: string;
  weddingDate: string;
  venueName: string;
  ticketCode?: string;
}

export default function TerracottaQrTicket({
  guestName,
  weddingDate,
  venueName,
  ticketCode = 'VIP-RNJ-2026-TERRA',
}: TerracottaQrTicketProps) {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <section className="relative w-full py-10 px-4 text-[#5C3D2E] z-10">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.25em] text-[#C86B53] font-bold">
          <span>✦ VIP ACCESS PASS ✦</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-[#C86B53] tracking-wide">
          Buku Tamu &amp; QR Pass
        </h2>
        <p className="text-xs text-[#829379] max-w-sm mx-auto font-serif italic">
          Tunjukkan QR Code berikut kepada petugas buku tamu saat tiba di lokasi acara.
        </p>
      </div>

      <div className="max-w-xs sm:max-w-sm mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-[#FBF8F5] border-2 border-[#C86B53]/40 p-6 text-center shadow-[0_15px_35px_rgba(200,107,83,0.12)] overflow-hidden"
        >
          {/* Ticket Notches */}
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#F4EFEA] border-r-2 border-[#C86B53]/40" />
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#F4EFEA] border-l-2 border-[#C86B53]/40" />

          {/* Ticket Header */}
          <div className="flex items-center justify-between border-b border-[#C86B53]/20 pb-3 mb-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C86B53] font-serif font-bold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#C86B53]" />
              VIP WEDDING PASS
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#F4EFEA] border border-[#C86B53]/30 text-[9px] font-mono text-[#5C3D2E] font-semibold">
              {ticketCode}
            </span>
          </div>

          {/* Guest Name */}
          <div className="space-y-1 my-3">
            <p className="text-[10px] text-[#829379] font-serif uppercase tracking-wider font-semibold">
              Nama Tamu Undangan
            </p>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#5C3D2E] tracking-wide">
              {guestName}
            </h3>
            <p className="text-[11px] text-[#829379] font-serif">
              {venueName} • {weddingDate}
            </p>
          </div>

          {/* QR Code Container */}
          <div className="my-5 p-4 rounded-2xl bg-white border border-[#C86B53]/30 max-w-[210px] mx-auto shadow-sm flex flex-col items-center justify-center">
            <div className="w-36 h-36 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#5C3D2E]">
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
            <span className="text-[9px] font-mono text-[#C86B53] font-bold tracking-widest pt-1">
              TERRA-VIP-{guestName.slice(0, 3).toUpperCase()}
            </span>
          </div>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#C86B53] to-[#A04E3A] text-white font-serif font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
          >
            {downloaded ? (
              <>
                <Check className="w-4 h-4 text-white" />
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

'use client';

import { motion } from 'framer-motion';
import { QrCode, CheckCircle2, Ticket, Sparkles, MapPin, Calendar } from 'lucide-react';

interface TwitterQrTicketProps {
  guestName: string;
  coupleNames: string;
  weddingDate: string;
  venueName: string;
}

export default function TwitterQrTicket({
  guestName,
  coupleNames,
  weddingDate,
  venueName,
}: TwitterQrTicketProps) {
  // Generate deterministic QR URL for ticket check-in
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=VIP-TWITTER-${encodeURIComponent(
    guestName
  )}`;

  return (
    <section className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2">
          <Ticket className="w-5 h-5 text-[#1DA1F2]" />
          <h2 className="text-base font-bold text-white tracking-wide uppercase">
            Tiket VIP / Event Pass Ticket
          </h2>
        </div>
        <span className="text-xs text-zinc-400 font-mono">VIP Pass</span>
      </div>

      {/* Ticket Pass Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-[#15202B] to-black border-2 border-[#1DA1F2]/50 rounded-3xl overflow-hidden shadow-2xl relative select-none"
      >
        {/* Top Header Tag */}
        <div className="bg-[#1DA1F2] px-5 py-2.5 flex items-center justify-between text-white font-bold text-xs uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>TWITTER VIP EVENT PASS</span>
          </div>
          <span className="bg-black/30 px-2 py-0.5 rounded text-[10px]">VERIFIED</span>
        </div>

        <div className="p-6 space-y-6 text-center">
          {/* Couple Header */}
          <div className="space-y-1">
            <h3 className="text-xl font-black text-white flex items-center justify-center gap-1.5">
              {coupleNames}
              <CheckCircle2 className="w-5 h-5 text-[#1DA1F2] fill-[#1DA1F2]" />
            </h3>
            <p className="text-xs text-zinc-400 font-mono">Official Access Code &bull; Presensi Tamu</p>
          </div>

          {/* QR Code Container */}
          <div className="relative w-48 h-48 mx-auto bg-white p-3 rounded-2xl border-4 border-[#1DA1F2] shadow-xl flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={qrCodeUrl} alt="VIP QR Ticket" className="w-full h-full object-contain" />
          </div>

          {/* Guest Name Box */}
          <div className="bg-black/60 border border-zinc-800 p-4 rounded-2xl max-w-xs mx-auto space-y-1">
            <span className="text-[10px] font-bold text-[#1DA1F2] uppercase tracking-wider block">
              GUEST PASS NAME
            </span>
            <p className="text-base font-extrabold text-white capitalize">{guestName}</p>
          </div>

          {/* Ticket Details */}
          <div className="grid grid-cols-2 gap-2 text-left text-xs bg-zinc-900/60 p-4 rounded-xl border border-zinc-800 text-zinc-300">
            <div className="space-y-1">
              <span className="text-[10px] text-zinc-500 block">TANGGAL:</span>
              <p className="font-bold text-white flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#1DA1F2]" />
                {weddingDate}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-zinc-500 block">LOKASI:</span>
              <p className="font-bold text-white truncate flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#1DA1F2]" />
                {venueName}
              </p>
            </div>
          </div>

          <p className="text-[11px] text-zinc-500">
            Tunjukkan QR Code ini kepada panitia saat tiba di lokasi untuk presensi tamu VIP.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

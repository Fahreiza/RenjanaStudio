'use client';

import { motion } from 'framer-motion';
import { QrCode, CheckCheck, Sparkles, MessageSquare, ShieldCheck } from 'lucide-react';

interface WhatsappQrTicketProps {
  guestName: string;
  coupleNames: string;
  weddingDate: string;
  venueName: string;
}

export default function WhatsappQrTicket({
  guestName,
  coupleNames,
  weddingDate,
  venueName,
}: WhatsappQrTicketProps) {
  // SVG QR Code generator string
  const qrData = encodeURIComponent(`VIP-PASS:${guestName}:${coupleNames}`);
  const qrSvgUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrData}&color=111B21&bgcolor=ffffff`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#111B21] border border-zinc-800 rounded-3xl p-5 space-y-4 shadow-xl text-center relative overflow-hidden select-none"
    >
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <span className="text-xs font-bold text-[#25D366] uppercase tracking-wider flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#25D366]" />
          VIP GUEST WA TICKET PASS
        </span>
        <span className="text-[10px] bg-[#25D366]/20 text-[#25D366] font-mono px-2 py-0.5 rounded">
          Verified Pass
        </span>
      </div>

      <div className="space-y-1">
        <h3 className="text-lg font-black text-white">{coupleNames}</h3>
        <p className="text-xs text-zinc-400 font-mono">Check-in QR Pass Event Pernikahan</p>
      </div>

      {/* QR Ticket Frame */}
      <div className="relative w-44 h-44 mx-auto bg-white p-3 rounded-2xl border-4 border-[#25D366] shadow-xl flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={qrSvgUrl} alt="QR Code Ticket Pass" className="w-full h-full object-contain" />
      </div>

      {/* Guest Details Box */}
      <div className="p-3.5 bg-[#202C33] rounded-2xl border border-zinc-800 text-left space-y-1.5 text-xs text-zinc-200">
        <div className="flex items-center justify-between">
          <span className="text-zinc-400 font-bold">Nama Tamu:</span>
          <span className="font-extrabold text-white capitalize">{guestName}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-zinc-400 font-bold">Status Pass:</span>
          <span className="text-[#25D366] font-mono font-bold flex items-center gap-1">
            <CheckCheck className="w-3.5 h-3.5 text-sky-400" /> VIP ACCESS
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-zinc-400 font-bold">Tanggal:</span>
          <span className="font-mono text-zinc-300">{weddingDate}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-zinc-400 font-bold">Lokasi:</span>
          <span className="truncate max-w-[170px] text-zinc-300">{venueName}</span>
        </div>
      </div>

      <p className="text-[10px] text-zinc-400 font-medium">
        Tunjukkan QR Code Ticket Pass ini kepada panitia saat memasuki area venue acara.
      </p>
    </motion.div>
  );
}

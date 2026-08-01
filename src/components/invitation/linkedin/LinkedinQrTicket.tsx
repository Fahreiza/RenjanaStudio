'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, QrCode } from 'lucide-react';

interface LinkedinQrTicketProps {
  guestName: string;
  coupleNames: string;
  weddingDate: string;
  venueName: string;
}

export default function LinkedinQrTicket({
  guestName,
  coupleNames,
  weddingDate,
  venueName,
}: LinkedinQrTicketProps) {
  return (
    <section className="space-y-4 font-sans linkedin-theme">
      {/* Header Card */}
      <div className="space-y-0.5">
        <h2 className="text-lg font-semibold text-[#000000e6] tracking-tight">
          Tiket VIP &amp; QR Pass
        </h2>
        <p className="text-xs text-[#00000099] font-normal">Check-in Tamu Undangan</p>
      </div>

      {/* Main Ticket Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white border border-zinc-200 rounded-xl p-4 sm:p-5 space-y-4 shadow-xs text-center relative overflow-hidden select-none"
      >
        <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
          <span className="text-xs font-bold text-[#0A66C2] uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#0A66C2]" />
            TIKET MASUK VIP ACARA
          </span>
          <span className="text-[10px] bg-blue-50 text-[#0A66C2] px-2.5 py-0.5 rounded font-semibold border border-blue-200">
            Tamu Eksekutif
          </span>
        </div>

        <div className="space-y-0.5">
          <h3 className="text-base font-bold text-[#000000e6]">{coupleNames}</h3>
          <p className="text-xs text-[#00000099] font-normal">Check-in QR Pass Event Pernikahan</p>
        </div>

        {/* QR Code Container */}
        <div className="bg-[#EDF3F8] border border-blue-100 rounded-xl p-4 w-44 h-44 mx-auto flex items-center justify-center shadow-xs">
          <QrCode className="w-36 h-36 text-[#0A66C2]" />
        </div>

        {/* Guest Pass Info */}
        <div className="pt-2 space-y-1 text-xs border-t border-zinc-100">
          <p className="text-[#00000099] font-normal">
            Special Invitation For:{' '}
            <strong className="text-[#000000e6] font-bold capitalize">{guestName}</strong>
          </p>
          <p className="text-[#00000099] font-normal">
            {weddingDate} &bull; {venueName}
          </p>
          <p className="text-[10px] text-[#0A66C2] font-semibold tracking-wider pt-1">
            VERIFIED VIP GUEST PASS &bull; RENJANA STUDIO
          </p>
        </div>
      </motion.div>
    </section>
  );
}

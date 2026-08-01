'use client';

import { motion } from 'framer-motion';
import { Ticket, Pin, Calendar, MapPin } from 'lucide-react';

interface PinterestQrTicketProps {
  guestName: string;
  coupleNames: string;
  weddingDate: string;
  venueName: string;
}

export default function PinterestQrTicket({
  guestName,
  coupleNames,
  weddingDate,
  venueName,
}: PinterestQrTicketProps) {
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=VIP-PINTEREST-${encodeURIComponent(
    guestName
  )}`;

  return (
    <section className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-[#E9E9E9] pb-3">
        <div className="flex items-center gap-2">
          <Ticket className="w-5 h-5 text-[#E60023]" />
          <h2 className="text-base font-extrabold text-[#111111] tracking-wide uppercase">
            Tiket VIP / Pinterest Board Pass
          </h2>
        </div>
        <span className="text-xs text-[#5F5F5F] font-mono">VIP Pass</span>
      </div>

      {/* Ticket Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-white border-2 border-[#E60023] rounded-[32px] overflow-hidden shadow-xl relative select-none"
      >
        {/* Top Header Tag */}
        <div className="bg-[#E60023] px-5 py-3 flex items-center justify-between text-white font-extrabold text-xs uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <Pin className="w-4 h-4 fill-current" />
            <span>PINTEREST VIP BOARD PASS</span>
          </div>
          <span className="bg-white/20 px-2.5 py-0.5 rounded-full text-[10px]">VERIFIED PASS</span>
        </div>

        <div className="p-6 space-y-6 text-center">
          <div className="space-y-1">
            <h3 className="text-xl font-black text-[#111111]">{coupleNames}</h3>
            <p className="text-xs text-[#5F5F5F] font-mono">Official Check-in QR Code &bull; Presensi Tamu</p>
          </div>

          {/* QR Code Container */}
          <div className="relative w-48 h-48 mx-auto bg-white p-3 rounded-2xl border-4 border-[#E60023] shadow-lg flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={qrCodeUrl} alt="VIP QR Ticket" className="w-full h-full object-contain" />
          </div>

          {/* Guest Name */}
          <div className="bg-[#FAFAFA] border border-[#E9E9E9] p-4 rounded-2xl max-w-xs mx-auto space-y-1">
            <span className="text-[10px] font-extrabold text-[#E60023] uppercase tracking-wider block">
              GUEST PASS NAME
            </span>
            <p className="text-base font-black text-[#111111] capitalize">{guestName}</p>
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-2 gap-2 text-left text-xs bg-[#FAFAFA] p-4 rounded-2xl border border-[#E9E9E9] text-[#111111]">
            <div className="space-y-1">
              <span className="text-[10px] text-[#5F5F5F] block font-bold">TANGGAL:</span>
              <p className="font-extrabold text-[#111111] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#E60023]" />
                {weddingDate}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-[#5F5F5F] block font-bold">LOKASI:</span>
              <p className="font-extrabold text-[#111111] truncate flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#E60023]" />
                {venueName}
              </p>
            </div>
          </div>

          <p className="text-[11px] text-[#5F5F5F]">
            Tunjukkan QR Code ini kepada panitia saat tiba di lokasi untuk pemindaian presensi tamu VIP.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

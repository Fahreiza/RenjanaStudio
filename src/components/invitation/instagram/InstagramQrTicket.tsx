'use client';

import { Camera } from 'lucide-react';

interface InstagramQrTicketProps {
  groomName: string;
  brideName: string;
  eventDate: string;
  venueName: string;
  guestName: string;
}

export default function InstagramQrTicket({
  groomName,
  brideName,
  eventDate,
  venueName,
  guestName,
}: InstagramQrTicketProps) {
  return (
    <div className="max-w-xl mx-auto pt-6 select-none px-4">
      <div className="relative bg-gradient-to-br from-[#1F1F1F] via-[#141414] to-black border-2 border-[#E4405F] rounded-3xl p-6 shadow-2xl space-y-5 overflow-hidden text-center">
        {/* Instagram Gradient Ambient Glow */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-tr from-[#FCCC63]/20 via-[#E4405F]/20 to-[#833AB4]/20 rounded-full blur-2xl pointer-events-none" />

        {/* Header Ticket Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FCCC63] via-[#E4405F] to-[#833AB4] text-white text-xs font-extrabold px-4 py-1.5 rounded-full shadow tracking-wider uppercase">
          <Camera className="w-4 h-4" />
          <span>INSTAGRAM NAMETAG &bull; VIP GUEST PASS</span>
        </div>

        <div className="space-y-1">
          <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
            EXCLUSIVE INVITATION FOR:
          </p>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            {guestName}
          </h3>
          <p className="text-xs text-[#E4405F] font-bold font-mono">
            {groomName} &amp; {brideName} Wedding Event
          </p>
        </div>

        {/* QR Code Container */}
        <div className="relative w-44 h-44 mx-auto bg-white p-3 rounded-2xl shadow-inner border-2 border-zinc-300 flex items-center justify-center">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
              `INSTAGRAM-NAMETAG-VIP:${guestName}:${groomName}-${brideName}`
            )}`}
            alt="VIP Ticket QR Code"
            className="w-full h-full object-contain p-1"
          />
        </div>

        <div className="border-t border-zinc-800 pt-3 space-y-1 text-xs text-zinc-400">
          <p className="font-bold text-white">{venueName}</p>
          <p className="font-mono text-[11px] text-zinc-400">{eventDate}</p>
          <p className="text-[10px] text-zinc-500 font-mono pt-1">
            Tunjukkan Nametag QR Code ini untuk presensi tamu VIP saat memasuki lokasi acara.
          </p>
        </div>
      </div>
    </div>
  );
}

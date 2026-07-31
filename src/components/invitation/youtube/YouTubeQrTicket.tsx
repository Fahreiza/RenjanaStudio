'use client';

import { Tv } from 'lucide-react';

interface YouTubeQrTicketProps {
  groomName: string;
  brideName: string;
  eventDate: string;
  venueName: string;
  guestName: string;
}

export default function YouTubeQrTicket({
  groomName,
  brideName,
  eventDate,
  venueName,
  guestName,
}: YouTubeQrTicketProps) {
  return (
    <div className="max-w-xl mx-auto pt-6 select-none">
      <div className="relative bg-gradient-to-br from-[#212121] via-[#181818] to-black border-2 border-[#FF0000] rounded-3xl p-6 shadow-2xl space-y-5 overflow-hidden text-center">
        {/* Radial Red Glow */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#FF0000]/10 rounded-full blur-2xl pointer-events-none" />

        {/* Header Ticket Badge */}
        <div className="inline-flex items-center gap-2 bg-[#FF0000] text-white text-xs font-extrabold px-4 py-1.5 rounded-full shadow tracking-wider uppercase">
          <Tv className="w-4 h-4 fill-current" />
          <span>YOUTUBE PREMIERE VIP PASS &bull; CHECK-IN TICKET</span>
        </div>

        <div className="space-y-1">
          <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
            EXCLUSIVE PASS FOR:
          </p>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            {guestName}
          </h3>
          <p className="text-xs text-[#FF0000] font-bold font-mono">
            {groomName} &amp; {brideName} Wedding Premiere
          </p>
        </div>

        {/* QR Code Container */}
        <div className="relative w-44 h-44 mx-auto bg-white p-3 rounded-2xl shadow-inner border-2 border-zinc-300 flex items-center justify-center">
          {/* Standard HTML img tag to avoid Next.js unconfigured host error */}
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
              `YOUTUBE-PREMIERE-PASS:${guestName}:${groomName}-${brideName}`
            )}`}
            alt="VIP Ticket QR Code"
            className="w-full h-full object-contain p-1"
          />
        </div>

        <div className="border-t border-zinc-800 pt-3 space-y-1 text-xs text-zinc-400">
          <p className="font-bold text-white">{venueName}</p>
          <p className="font-mono text-[11px] text-zinc-400">{eventDate}</p>
          <p className="text-[10px] text-zinc-500 font-mono pt-1">
            Tunjukkan kode QR ini kepada penerima tamu di lokasi resepsi.
          </p>
        </div>
      </div>
    </div>
  );
}

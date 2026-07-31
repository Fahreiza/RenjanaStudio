'use client';

import { motion } from 'framer-motion';
import { QrCode, CheckCircle2, Ticket, Share2, Download } from 'lucide-react';

interface SpotifyQrTicketProps {
  groomName: string;
  brideName: string;
  eventDate: string;
  venueName: string;
  guestName: string;
}

export default function SpotifyQrTicket({
  groomName,
  brideName,
  eventDate,
  venueName,
  guestName,
}: SpotifyQrTicketProps) {
  const ticketId = `SPT-WED-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <section className="py-12 px-4 md:px-12 max-w-4xl mx-auto text-white">
      <div className="bg-[#181818] border border-zinc-800 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
        {/* Background Radial Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1DB954]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header Badge */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <Ticket className="w-5 h-5 text-[#1DB954]" />
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#1DB954]">
              SPOTIFY VIP PASS &bull; CHECK-IN TICKET
            </span>
          </div>

          <span className="text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-full">
            {ticketId}
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Ticket Information */}
          <div className="space-y-4 text-center md:text-left flex-1">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
                EXCLUSIVE INVITATION FOR:
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                {guestName}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-sans border-y border-zinc-800/80 py-4">
              <div>
                <p className="text-zinc-400 font-medium">WEDDING EVENT</p>
                <p className="font-bold text-white text-sm">{brideName} &amp; {groomName}</p>
              </div>
              <div>
                <p className="text-zinc-400 font-medium">ACCESS TIER</p>
                <p className="font-bold text-[#1DB954] text-sm flex items-center justify-center md:justify-start gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>VIP Guest</span>
                </p>
              </div>
              <div>
                <p className="text-zinc-400 font-medium">DATE &amp; TIME</p>
                <p className="font-bold text-white">{eventDate}</p>
              </div>
              <div>
                <p className="text-zinc-400 font-medium">VENUE</p>
                <p className="font-bold text-white truncate">{venueName}</p>
              </div>
            </div>

            {/* Spotify Code Soundwave Simulation */}
            <div className="pt-2 flex items-center justify-center md:justify-start gap-1.5 bg-black/40 p-3 rounded-xl border border-zinc-800">
              <span className="text-[10px] text-[#1DB954] font-mono font-bold mr-2">SPOTIFY CODE:</span>
              {[3, 7, 4, 9, 6, 2, 8, 5, 9, 3, 7, 4, 8, 5, 2, 6, 9].map((val, idx) => (
                <span
                  key={idx}
                  className="w-1 bg-[#1DB954] rounded-full inline-block"
                  style={{ height: `${val * 3}px` }}
                />
              ))}
            </div>
          </div>

          {/* QR Code Container */}
          <div className="flex flex-col items-center gap-3 shrink-0 bg-white p-4 rounded-2xl shadow-2xl text-black border-4 border-[#1DB954]">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=SPOTIFY-VIP-${encodeURIComponent(
                guestName
              )}`}
              alt="VIP Guest QR Ticket"
              className="w-36 h-36 object-contain"
            />
            <span className="text-[10px] font-mono font-bold text-zinc-600">
              SCAN UNTUK PRESENSI TAMU
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

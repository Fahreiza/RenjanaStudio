'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket, QrCode, Download, Check, Sparkles, MapPin, Calendar } from 'lucide-react';
import { GroomBrideInfo, EventDetail } from '@/types/invitation';

interface NetflixVipTicketProps {
  groomName: string;
  brideName: string;
  eventDate: string;
  venueName: string;
  guestName: string;
}

export default function NetflixVipTicket({
  groomName,
  brideName,
  eventDate,
  venueName,
  guestName,
}: NetflixVipTicketProps) {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownloadTicket = () => {
    setIsDownloaded(true);
    setTimeout(() => setIsDownloaded(false), 3000);

    // Create a downloadable text representation of the VIP Ticket
    const ticketText = `=== TIKET VIP UNDANGAN N-PASS ===\n\nPasangan: ${groomName} & ${brideName}\nKepada Yth: ${guestName}\nKode Tiket: NFX-2026-FA-${Math.floor(
      100 + Math.random() * 900
    )}\nTanggal: ${eventDate}\nLokasi: ${venueName}\nAkses: VIP Entry Pass (Akad & Resepsi)\n\nHarap tunjukkan tiket digital ini kepada penerima tamu di lokasi acara.\nTerima kasih — RenjanaFlix Series`;

    const element = document.createElement('a');
    const file = new Blob([ticketText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `Tiket-VIP-${guestName.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section className="py-4 md:py-6 px-4 md:px-8 max-w-4xl mx-auto text-white select-none">
      <div className="text-center mb-8 space-y-2">
        <span className="text-xs uppercase tracking-[0.3em] text-[#E50914] font-bold">
          VIP Entry Pass
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold font-sans">Tiket Masuk Anda</h2>
        <p className="text-xs text-zinc-400 max-w-sm mx-auto">
          Unduh &amp; simpan Tiket VIP N-Pass ini untuk ditunjukkan kepada petugas di lokasi resepsi.
        </p>
      </div>

      {/* VIP Ticket Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-2 border-[#E50914] rounded-3xl p-6 md:p-8 shadow-2xl space-y-6 overflow-hidden"
      >
        {/* Ticket Top Banner */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="font-black text-2xl text-[#E50914]">N</span>
            <span className="text-xs font-bold tracking-widest text-zinc-200">
              VIP TICKET N-PASS
            </span>
          </div>
          <span className="bg-[#E50914] text-white text-[9px] uppercase font-black px-2.5 py-1 rounded shadow">
            ADMIT ONE VIP
          </span>
        </div>

        {/* Ticket Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2 space-y-3">
            <div>
              <span className="text-[10px] text-zinc-400 uppercase font-mono">Tamu VIP:</span>
              <h3 className="text-2xl font-bold text-white tracking-wide">{guestName}</h3>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-[10px] text-zinc-400 uppercase font-mono">Acara:</span>
                <p className="font-bold text-zinc-200">{groomName} &amp; {brideName}</p>
              </div>

              <div>
                <span className="text-[10px] text-zinc-400 uppercase font-mono">Kode Tiket:</span>
                <p className="font-bold font-mono text-[#E50914]">NFX-2026-FA-889</p>
              </div>
            </div>

            <div className="text-xs text-zinc-400 space-y-0.5">
              <p className="flex items-center gap-1.5 text-zinc-300">
                <Calendar className="w-3.5 h-3.5 text-[#E50914]" />
                {eventDate}
              </p>
              <p className="flex items-center gap-1.5 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-[#E50914]" />
                {venueName}
              </p>
            </div>
          </div>

          {/* QR Code Barcode Box */}
          <div className="bg-white rounded-2xl p-4 text-center text-black space-y-2 shadow-inner shrink-0">
            <QrCode className="w-28 h-28 mx-auto text-black" />
            <span className="block text-[9px] font-mono font-bold tracking-widest uppercase">
              SCAN VIP ENTRY
            </span>
          </div>
        </div>

        {/* Download Action Button */}
        <div className="pt-2">
          <button
            onClick={handleDownloadTicket}
            className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs shadow-xl transition-all duration-300 ${
              isDownloaded
                ? 'bg-emerald-600 text-white'
                : 'bg-[#E50914] hover:bg-red-700 text-white transform hover:scale-[1.01]'
            }`}
          >
            {isDownloaded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Tiket Berhasil Diunduh!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Unduh Tiket Anda (Download VIP Ticket)</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </section>
  );
}

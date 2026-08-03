'use client';

import { motion } from 'framer-motion';
import { QrCode, Sparkles } from 'lucide-react';

interface MinimalistQrTicketProps {
  guestName: string;
  coupleNames: string;
  weddingDate: string;
  venueName: string;
}

export default function MinimalistQrTicket({
  guestName,
  coupleNames,
  weddingDate,
  venueName,
}: MinimalistQrTicketProps) {
  return (
    <section className="space-y-6 overflow-hidden w-full max-w-xl mx-auto px-4 py-8">
      {/* Title */}
      <div className="text-center space-y-1.5">
        <span className="text-xs uppercase tracking-[0.35em] text-[#7F9481] font-bold block">
          Akses Masuk Acara
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#C48B96] font-bold">
          Tiket VIP QR Code
        </h2>
        <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto opacity-70 mt-2" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-white/95 border-2 border-[#D4AF37]/50 rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-4 max-w-sm mx-auto backdrop-blur-md relative overflow-hidden"
      >
        <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-3">
          <span className="text-[10px] font-extrabold text-[#7F9481] uppercase tracking-widest flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            VIP PASS TICKET
          </span>
          <span className="text-[10px] text-zinc-400 font-mono font-bold">#VIP-2026</span>
        </div>

        <div className="space-y-1">
          <p className="text-xs text-zinc-400 font-mono uppercase tracking-wider">Nama Tamu VIP:</p>
          <h3 className="font-serif text-2xl text-[#2D3748] font-bold capitalize">{guestName}</h3>
        </div>

        {/* QR Code Vector Simulation */}
        <div className="w-44 h-44 mx-auto rounded-2xl bg-[#F9F6F0] border-2 border-[#7F9481]/30 p-3 shadow-inner flex flex-col items-center justify-center space-y-2">
          <QrCode className="w-28 h-28 text-[#2D3748]" />
          <span className="text-[9px] font-mono text-zinc-400 tracking-widest uppercase">SCAN FOR CHECK-IN</span>
        </div>

        <div className="text-[11px] text-zinc-500 font-serif italic pt-1 border-t border-[#D4AF37]/30">
          Tunjukkan QR Code ini kepada penerima tamu saat memasuki area acara {coupleNames}.
        </div>
      </motion.div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Copy, Check, QrCode, MapPin, Sparkles, CreditCard } from 'lucide-react';
import { BankAccount } from '@/types/invitation';
import ThreeDCardTilt from './ThreeDCardTilt';

interface ThreeDDigitalGiftProps {
  bankAccounts: BankAccount[];
  qrisUrl?: string;
  giftAddress: string;
}

export default function ThreeDDigitalGift({
  bankAccounts,
  qrisUrl,
  giftAddress,
}: ThreeDDigitalGiftProps) {
  const [copiedBank, setCopiedBank] = useState<string | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [showQrisModal, setShowQrisModal] = useState(false);

  const handleCopy = (text: string, identifier: string) => {
    navigator.clipboard.writeText(text);
    if (identifier === 'address') {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2500);
    } else {
      setCopiedBank(identifier);
      setTimeout(() => setCopiedBank(null), 2500);
    }
  };

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto space-y-12 select-none relative z-10">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 text-[10px] uppercase font-bold tracking-[0.3em]">
          <Gift className="w-3 h-3 text-[#D4AF37]" />
          Tanda Kasih &amp; Kado Digital
        </span>
        <h2 className="font-serif-cormorant text-4xl sm:text-5xl text-[#2D3748] font-bold tracking-tight">
          Amplop Digital &amp; Hadiah
        </h2>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto pt-1 leading-relaxed">
          Doa restu Anda merupakan karunia terindah bagi kami. Namun jika Anda ingin memberikan tanda kasih secara digital, Anda dapat menggunakan opsi di bawah ini.
        </p>
      </div>

      {/* 3D Realistic Bank Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {bankAccounts.map((account, index) => {
          const isGold = index % 2 === 0;

          return (
            <ThreeDCardTilt key={index} maxTilt={15} className="h-full">
              <div
                className={`h-full rounded-3xl p-6 sm:p-7 shadow-[0_20px_45px_-12px_rgba(212,175,55,0.35)] border-2 flex flex-col justify-between text-white relative overflow-hidden group ${
                  isGold
                    ? 'bg-gradient-to-br from-[#3B2912] via-[#24170A] to-[#140D05] border-[#D4AF37]'
                    : 'bg-gradient-to-br from-[#2D1B22] via-[#1E1116] to-[#12090D] border-[#B76E79]'
                }`}
              >
                {/* 3D Metallic Foil Sheen */}
                <div className="absolute -right-12 -top-12 w-44 h-44 rounded-full bg-white/5 blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                {/* Card Top: Chip & Bank Name */}
                <div className="flex items-center justify-between pb-6">
                  {/* EMV 3D Metallic Chip */}
                  <div className="w-12 h-9 rounded-lg bg-gradient-to-br from-[#FDE68A] via-[#D4AF37] to-[#8C6D1F] p-0.5 shadow-md flex items-center justify-center">
                    <div className="w-full h-full border border-amber-900/30 rounded flex flex-col justify-around py-1 px-1">
                      <div className="w-full h-[1px] bg-amber-900/40" />
                      <div className="w-full h-[1px] bg-amber-900/40" />
                    </div>
                  </div>

                  <span className="font-mono text-sm font-black tracking-widest text-[#FDE68A] uppercase">
                    {account.bankName}
                  </span>
                </div>

                {/* Card Center: Account Number */}
                <div className="py-4 space-y-1">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-400 font-sans">
                    NOMOR REKENING RESMI
                  </span>
                  <p className="font-mono text-xl sm:text-2xl font-black tracking-widest text-amber-100">
                    {account.accountNumber}
                  </p>
                  <p className="text-xs text-zinc-300 font-sans tracking-wide">
                    a.n. <strong className="text-white">{account.accountName}</strong>
                  </p>
                </div>

                {/* Card Bottom: Copy Button */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] text-zinc-400 font-mono">RENJANA 3D LUXE</span>
                  <button
                    onClick={() => handleCopy(account.accountNumber, account.bankName)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B98929] text-[#241303] text-xs font-bold uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-md cursor-pointer"
                  >
                    {copiedBank === account.bankName ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#241303]" />
                        <span>Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#241303]" />
                        <span>Salin Rekening</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </ThreeDCardTilt>
          );
        })}
      </div>

      {/* QRIS & Physical Gift Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {/* QRIS Quick Showcase */}
        {qrisUrl && (
          <ThreeDCardTilt maxTilt={10}>
            <div className="rounded-3xl bg-white/85 backdrop-blur-xl border border-[#D4AF37]/40 p-6 shadow-md flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-bold">
                  E-WALLET INSTAN
                </span>
                <h4 className="font-serif-cormorant text-xl font-bold text-[#2D3748]">
                  Scan QRIS Pembayaran
                </h4>
                <p className="text-xs text-zinc-500">Mendukung GoPay, OVO, ShopeePay, Dana, &amp; BCA Mobile</p>
              </div>

              <button
                onClick={() => setShowQrisModal(true)}
                className="shrink-0 p-3.5 rounded-2xl bg-gradient-to-br from-[#FAF7F2] to-[#F4E3E3] border border-[#D4AF37]/50 shadow hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <QrCode className="w-6 h-6 text-[#D4AF37]" />
              </button>
            </div>
          </ThreeDCardTilt>
        )}

        {/* Physical Gift Address */}
        <ThreeDCardTilt maxTilt={10}>
          <div className="rounded-3xl bg-white/85 backdrop-blur-xl border border-[#D4AF37]/40 p-6 shadow-md space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-wider text-[#B76E79] font-bold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B76E79]" />
                KIRIM KADO FISIK
              </span>
              <button
                onClick={() => handleCopy(giftAddress, 'address')}
                className="text-xs font-bold text-[#D4AF37] hover:underline flex items-center gap-1 cursor-pointer"
              >
                {copiedAddress ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedAddress ? 'Tersalin' : 'Salin Alamat'}</span>
              </button>
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed font-sans">{giftAddress}</p>
          </div>
        </ThreeDCardTilt>
      </div>

      {/* QRIS Modal Popup */}
      <AnimatePresence>
        {showQrisModal && qrisUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-sm rounded-3xl bg-white p-7 text-center space-y-4 shadow-2xl border-2 border-[#D4AF37]">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
                SCAN DENGAN APLIKASI PEMBAYARAN
              </span>
              <h3 className="font-serif-cormorant text-2xl font-bold text-[#2D3748]">
                QRIS Pembayaran Digital
              </h3>

              <div className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden border-2 border-zinc-200">
                <Image src={qrisUrl} alt="QRIS Code" fill className="object-contain p-2" />
              </div>

              <button
                onClick={() => setShowQrisModal(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B98929] text-[#241303] text-xs font-bold uppercase tracking-wider shadow cursor-pointer"
              >
                Tutup QRIS
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

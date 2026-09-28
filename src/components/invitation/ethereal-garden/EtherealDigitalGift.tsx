'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Copy, Check, QrCode, MapPin } from 'lucide-react';
import { BankAccount } from '@/types/invitation';

interface EtherealDigitalGiftProps {
  bankAccounts: BankAccount[];
  qrisUrl?: string;
  giftAddress: string;
}

export default function EtherealDigitalGift({
  bankAccounts,
  qrisUrl,
  giftAddress,
}: EtherealDigitalGiftProps) {
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
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#A7B09A]/15 text-[#3F493D] border border-[#A7B09A]/30 text-[9px] uppercase font-bold tracking-[0.35em]">
          WEDDING REGISTRY
        </span>
        <h2 className="font-serif-cormorant text-4xl sm:text-5xl text-[#3F493D] font-normal tracking-wide">
          Tanda Kasih &amp; Kado
        </h2>
        <div className="w-12 h-[1px] bg-[#C7A76C] mx-auto mt-2" />
        <p className="text-xs text-[#3F493D]/70 max-w-md mx-auto pt-1 leading-relaxed font-serif">
          Kehadiran dan doa restu Anda adalah karunia terindah bagi kami. Namun jika hendak memberikan tanda kasih, Anda dapat menyalurkannya melalui opsi di bawah ini.
        </p>
      </div>

      {/* Realistic Champagne Bank Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {bankAccounts.map((account, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="h-full rounded-[28px] p-6 sm:p-7 shadow-[0_20px_45px_-12px_rgba(184,173,160,0.45)] border-2 border-[#C7A76C]/60 bg-gradient-to-br from-[#FAF7F2] via-[#F6F0E6] to-[#EFE7D8] flex flex-col justify-between text-[#3F493D] relative overflow-hidden group"
          >
            {/* Top: Chip & Bank Name */}
            <div className="flex items-center justify-between pb-6">
              {/* EMV Champagne Chip */}
              <div className="w-11 h-8 rounded-md bg-gradient-to-br from-[#E4D1AC] via-[#C7A76C] to-[#8E7036] p-0.5 shadow-sm flex items-center justify-center">
                <div className="w-full h-full border border-amber-900/30 rounded flex flex-col justify-around py-0.5 px-1">
                  <div className="w-full h-[1px] bg-amber-900/30" />
                  <div className="w-full h-[1px] bg-amber-900/30" />
                </div>
              </div>

              <span className="font-mono text-sm font-bold tracking-widest text-[#3F493D] uppercase">
                {account.bankName}
              </span>
            </div>

            {/* Center: Number & Holder */}
            <div className="py-4 space-y-1">
              <span className="text-[8px] uppercase tracking-[0.25em] text-[#A7B09A] font-bold block">
                NOMOR REKENING
              </span>
              <p className="font-mono text-xl sm:text-2xl font-bold tracking-widest text-[#3F493D]">
                {account.accountNumber}
              </p>
              <p className="text-xs text-[#3F493D]/80 font-sans">
                a.n. <strong className="text-[#3F493D]">{account.accountName}</strong>
              </p>
            </div>

            {/* Bottom: Copy Button */}
            <div className="pt-4 border-t border-[#C7A76C]/25 flex items-center justify-between">
              <span className="text-[9px] text-[#A7B09A] font-mono tracking-wider">ETHEREAL 3D ARCH</span>
              <button
                onClick={() => handleCopy(account.accountNumber, account.bankName)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#3F493D] text-[#FAF7F2] hover:bg-[#323B30] text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer border border-[#C7A76C]/40"
              >
                {copiedBank === account.bankName ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#C7A76C]" />
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#C7A76C]" />
                    <span>Salin No. Rek</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* QRIS & Physical Address */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {/* QRIS */}
        {qrisUrl && (
          <div className="rounded-3xl bg-[#FAF7F2] border border-[#C7A76C]/35 p-6 shadow-sm flex items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[9px] uppercase tracking-wider text-[#A7B09A] font-bold">
                E-WALLET INSTAN
              </span>
              <h4 className="font-serif-cormorant text-xl font-normal text-[#3F493D]">
                Scan QRIS Donasi
              </h4>
              <p className="text-xs text-[#3F493D]/65">GoPay, OVO, ShopeePay, Dana, &amp; Mobile Banking</p>
            </div>

            <button
              onClick={() => setShowQrisModal(true)}
              className="shrink-0 p-3 rounded-2xl bg-[#F6F0E6] border border-[#C7A76C]/40 shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <QrCode className="w-6 h-6 text-[#C7A76C]" />
            </button>
          </div>
        )}

        {/* Physical Gift Address */}
        <div className="rounded-3xl bg-[#FAF7F2] border border-[#C7A76C]/35 p-6 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[9px] uppercase tracking-wider text-[#A7B09A] font-bold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C7A76C]" />
              KIRIM KADO FISIK
            </span>
            <button
              onClick={() => handleCopy(giftAddress, 'address')}
              className="text-xs font-bold text-[#C7A76C] hover:underline flex items-center gap-1 cursor-pointer"
            >
              {copiedAddress ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedAddress ? 'Tersalin' : 'Salin Alamat'}</span>
            </button>
          </div>
          <p className="text-xs text-[#3F493D]/70 leading-relaxed font-sans">{giftAddress}</p>
        </div>
      </div>

      {/* QRIS Modal */}
      <AnimatePresence>
        {showQrisModal && qrisUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-sm rounded-[32px] bg-[#FAF7F2] p-7 text-center space-y-4 shadow-2xl border border-[#C7A76C]/50">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#A7B09A] font-bold">
                SCAN QR CODE PEMBAYARAN
              </span>
              <h3 className="font-serif-cormorant text-2xl font-normal text-[#3F493D]">
                QRIS Tanda Kasih Digital
              </h3>

              <div className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden border border-[#C7A76C]/30 bg-white">
                <Image src={qrisUrl} alt="QRIS Code" fill className="object-contain p-2" />
              </div>

              <button
                onClick={() => setShowQrisModal(false)}
                className="w-full py-2.5 rounded-xl bg-[#3F493D] text-[#FAF7F2] text-xs font-bold uppercase tracking-wider shadow cursor-pointer border border-[#C7A76C]/30"
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

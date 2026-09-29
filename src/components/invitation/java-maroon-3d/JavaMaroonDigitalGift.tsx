'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Gift, QrCode, MapPin } from 'lucide-react';
import { GununganWayangSvg } from './JavaMaroonOrnaments';

import JavaMaroon3DCard from './JavaMaroon3DCard';

interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountName?: string;
  accountHolder?: string;
}

interface GiftAddress {
  recipient: string;
  address: string;
  phone: string;
}

interface JavaMaroonDigitalGiftProps {
  bankAccounts: BankAccount[];
  qrisUrl?: string;
  giftAddress: GiftAddress;
}

export default function JavaMaroonDigitalGift({
  bankAccounts,
  qrisUrl,
  giftAddress,
}: JavaMaroonDigitalGiftProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [showQrisModal, setShowQrisModal] = useState(false);

  const handleCopyBank = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleCopyAddress = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section className="relative w-full py-10 px-4 text-[#FFF2A3] z-10">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs text-[#E2B755] uppercase tracking-[0.3em] font-serif font-bold">
          <GununganWayangSvg className="w-4 h-6 text-[#E2B755]" />
          <span>Tali Asih</span>
          <GununganWayangSvg className="w-4 h-6 text-[#E2B755]" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-[#FFE29F] tracking-wide">
          Amplop Digital &amp; Kado
        </h2>
        <p className="text-xs text-[#FFE29F]/80 max-w-sm mx-auto font-serif italic">
          Bagi Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih dan restu, dapat melalui sarana berikut:
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        {/* BANK ACCOUNTS (3D ATM EMBOSSED CARDS) */}
        {bankAccounts.map((bank, index) => (
          <JavaMaroon3DCard key={index} maxTilt={14} className="p-6 relative overflow-hidden">
            {/* Corner Gold Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,242,163,0.25)_0%,_transparent_70%)] pointer-events-none" />

            <div style={{ transform: 'translateZ(30px)' }} className="flex items-center justify-between mb-4">
              <span className="text-xs font-serif font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#1A0205] border border-[#FFE29F]/50 text-[#FFF2A3] shadow-md">
                {bank.bankName}
              </span>
              <Gift className="w-4 h-4 text-[#FFF2A3]" />
            </div>

            <div style={{ transform: 'translateZ(45px)' }} className="space-y-1 mb-5">
              <p className="text-[11px] font-serif uppercase tracking-wider text-[#E2B755]">
                Nomer Rekening
              </p>
              <p className="text-2xl sm:text-3xl font-mono font-black tracking-widest text-[#FFF2A3] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {bank.accountNumber}
              </p>
              <p className="text-xs font-serif text-[#FFE29F]/90 pt-1">
                a.n. <span className="font-bold text-[#FFF2A3]">{bank.accountName || bank.accountHolder}</span>
              </p>
            </div>

            <div style={{ transform: 'translateZ(35px)' }}>
              <button
                onClick={() => handleCopyBank(bank.accountNumber, index)}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#1A0205] via-[#2E050B] to-[#1A0205] border border-[#FFE29F]/50 hover:from-[#D4AF37] hover:to-[#B38728] hover:text-[#1A0205] text-[#FFF2A3] text-xs font-serif font-bold uppercase tracking-wider transition-all shadow-[0_4px_12px_rgba(0,0,0,0.5)] flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                {copiedIndex === index ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-green-300">Nomer Kasil Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#FFE29F]" />
                    <span>Salin Nomer Rekening</span>
                  </>
                )}
              </button>
            </div>
          </JavaMaroon3DCard>
        ))}

        {/* QRIS OPTION (IF AVAILABLE) */}
        {qrisUrl && (
          <JavaMaroon3DCard maxTilt={10} className="p-6 text-center space-y-4">
            <div style={{ transform: 'translateZ(30px)' }} className="flex items-center justify-center gap-2 text-xs font-serif font-bold uppercase tracking-wider text-[#FFE29F]">
              <QrCode className="w-4 h-4 text-[#FFF2A3]" />
              <span>QRIS Pembayaran Digital</span>
            </div>

            <p style={{ transform: 'translateZ(20px)' }} className="text-xs text-[#FFE29F]/80 font-serif">
              Mendukung semua aplikasi e-wallet &amp; mobile banking (GoPay, OVO, Dana, BCA, Mandiri, dll).
            </p>

            <div style={{ transform: 'translateZ(35px)' }}>
              <button
                onClick={() => setShowQrisModal(true)}
                className="py-2.5 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#FFF2A3] to-[#B8860B] text-[#3B070D] font-serif font-bold text-xs uppercase tracking-wider shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                Tampilkan Barcode QRIS
              </button>
            </div>
          </JavaMaroon3DCard>
        )}

        {/* PHYSICAL GIFT DELIVERY ADDRESS */}
        <JavaMaroon3DCard maxTilt={10} className="p-6 space-y-3">
          <div style={{ transform: 'translateZ(25px)' }} className="flex items-center gap-2 border-b border-[#D4AF37]/30 pb-3">
            <div className="p-2 rounded-xl bg-[#1A0205] border border-[#FFE29F]/40 text-[#FFF2A3]">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-serif font-bold uppercase tracking-wider text-[#FFE29F]">
                Kirim Kado Fisik
              </span>
              <p className="text-[10px] text-[#E2B755]/90 font-serif">Alamat Kediaman Mempelai</p>
            </div>
          </div>

          <div style={{ transform: 'translateZ(35px)' }} className="space-y-1 text-left">
            <p className="text-xs font-serif font-bold text-[#FFF2A3]">
              Penerima: {giftAddress.recipient}
            </p>
            <p className="text-xs font-serif text-[#FFE29F]/90 leading-relaxed">
              {giftAddress.address}
            </p>
            <p className="text-xs font-serif text-[#E2B755]/80 pt-1">Telp: {giftAddress.phone}</p>
          </div>

          <div style={{ transform: 'translateZ(30px)' }}>
            <button
              onClick={() => handleCopyAddress(`${giftAddress.recipient} - ${giftAddress.address} (Telp: ${giftAddress.phone})`)}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#1A0205] via-[#2E050B] to-[#1A0205] border border-[#FFE29F]/50 hover:from-[#D4AF37] hover:to-[#B38728] hover:text-[#1A0205] text-[#FFF2A3] text-xs font-serif font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm hover:scale-[1.02]"
            >
              {copiedAddress ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-green-300">Alamat Kasil Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#FFE29F]" />
                  <span>Salin Alamat Lengkap</span>
                </>
              )}
            </button>
          </div>
        </JavaMaroon3DCard>
      </div>

      {/* QRIS MODAL */}
      <AnimatePresence>
        {showQrisModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQrisModal(false)}
            className="fixed inset-0 z-50 bg-[#120103]/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xs rounded-3xl bg-[#1A0205] border-2 border-[#D4AF37] p-6 text-center space-y-4 shadow-2xl"
            >
              <h3 className="font-serif font-bold text-lg text-[#FFF2A3]">QRIS Amplop Digital</h3>
              <div className="relative w-56 h-56 mx-auto bg-white rounded-2xl p-3 border-2 border-[#D4AF37]">
                <Image
                  src={qrisUrl || '/assets/images/gallery-1.webp'}
                  alt="QRIS Barcode"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <p className="text-xs text-[#E2B755]/90 font-serif">
                Pindai menggunakan aplikasi pembayaran apa saja
              </p>
              <button
                onClick={() => setShowQrisModal(false)}
                className="w-full py-2.5 rounded-xl bg-[#2A050A] border border-[#D4AF37]/50 text-[#FFF2A3] text-xs font-serif uppercase tracking-wider"
              >
                Tutup
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

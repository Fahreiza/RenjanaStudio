'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Gift, QrCode, MapPin } from 'lucide-react';

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

interface VogueDigitalGiftProps {
  bankAccounts: BankAccount[];
  qrisUrl?: string;
  giftAddress: GiftAddress;
}

export default function VogueDigitalGift({
  bankAccounts,
  qrisUrl,
  giftAddress,
}: VogueDigitalGiftProps) {
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
    <section className="relative w-full py-12 px-4 text-[#FAFAF8] z-10 font-sans">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-10">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#B39871] font-mono block">
          THE REGISTRY // DIGITAL ENVELOPE
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-[#FAFAF8] uppercase">
          Wedding Gift
        </h2>
        <div className="w-12 h-px bg-[#B39871] mx-auto my-2" />
        <p className="text-xs text-[#FAFAF8]/70 font-sans max-w-sm mx-auto italic">
          Bagi Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih dan restu, dapat melalui sarana berikut:
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        {/* BANK ACCOUNTS (MODERN BLACK CARD STYLE) */}
        {bankAccounts.map((bank, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="rounded-3xl bg-gradient-to-br from-[#1C1C1C] via-[#141414] to-[#0E0E0E] border border-white/15 p-6 sm:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.6)] space-y-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#FAFAF8]">
                {bank.bankName} &bull; PRIORITY
              </span>
              <Gift className="w-4 h-4 text-[#B39871]" />
            </div>

            <div className="space-y-1">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#B39871]">
                ACCOUNT NUMBER
              </p>
              <p className="text-2xl sm:text-3xl font-mono font-bold tracking-widest text-[#FAFAF8]">
                {bank.accountNumber}
              </p>
              <p className="text-xs font-sans text-[#FAFAF8]/70 pt-1">
                a.n. <span className="font-semibold text-[#FAFAF8]">{bank.accountName || bank.accountHolder}</span>
              </p>
            </div>

            <button
              onClick={() => handleCopyBank(bank.accountNumber, index)}
              className="w-full py-2.5 px-4 rounded-xl bg-white/5 border border-white/15 hover:bg-[#FAFAF8] hover:text-[#0E0E0E] text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              {copiedIndex === index ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Nomor Berhasil Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#B39871]" />
                  <span>Salin Nomor Rekening</span>
                </>
              )}
            </button>
          </motion.div>
        ))}

        {/* QRIS OPTION (IF AVAILABLE) */}
        {qrisUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-[#141414] border border-white/10 p-6 shadow-lg text-center space-y-4"
          >
            <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FAFAF8]">
              <QrCode className="w-4 h-4 text-[#B39871]" />
              <span>QRIS Digital Payment</span>
            </div>

            <p className="text-xs text-[#FAFAF8]/70 font-sans">
              Mendukung semua aplikasi e-wallet &amp; mobile banking (GoPay, OVO, Dana, BCA, Mandiri, dll).
            </p>

            <button
              onClick={() => setShowQrisModal(true)}
              className="py-2.5 px-6 rounded-xl bg-[#FAFAF8] text-[#0E0E0E] hover:bg-[#B39871] hover:text-[#FAFAF8] font-mono font-bold text-xs uppercase tracking-wider shadow-md transition-all"
            >
              Tampilkan Barcode QRIS
            </button>
          </motion.div>
        )}

        {/* PHYSICAL REGISTRY ADDRESS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-[#141414] border border-white/10 p-6 shadow-lg space-y-3"
        >
          <div className="flex items-center gap-2.5 border-b border-white/10 pb-3">
            <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#B39871]">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FAFAF8]">
                Kirim Kado Fisik
              </span>
              <p className="text-[10px] text-[#B39871] font-mono">Alamat Pengiriman Hadiah</p>
            </div>
          </div>

          <div className="space-y-1 text-left text-xs font-sans">
            <p className="font-bold text-[#FAFAF8]">Penerima: {giftAddress.recipient}</p>
            <p className="text-[#FAFAF8]/75 leading-relaxed">{giftAddress.address}</p>
            <p className="text-[#FAFAF8]/60 pt-1 font-mono">Telp: {giftAddress.phone}</p>
          </div>

          <button
            onClick={() => handleCopyAddress(`${giftAddress.recipient} - ${giftAddress.address} (Telp: ${giftAddress.phone})`)}
            className="w-full py-2.5 px-4 rounded-xl bg-white/5 border border-white/15 hover:bg-[#FAFAF8] hover:text-[#0E0E0E] text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
          >
            {copiedAddress ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Alamat Berhasil Disalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#B39871]" />
                <span>Salin Alamat Lengkap</span>
              </>
            )}
          </button>
        </motion.div>
      </div>

      {/* QRIS MODAL */}
      <AnimatePresence>
        {showQrisModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQrisModal(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xs rounded-3xl bg-[#141414] border border-white/20 p-6 text-center space-y-4 shadow-2xl"
            >
              <h3 className="font-serif font-bold text-lg text-[#FAFAF8]">QRIS Payment</h3>
              <div className="relative w-56 h-56 mx-auto bg-white rounded-2xl p-3 border border-white/20">
                <Image
                  src={qrisUrl || '/assets/images/gallery-1.webp'}
                  alt="QRIS Barcode"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <p className="text-xs text-[#FAFAF8]/70 font-sans">
                Pindai dengan aplikasi perbankan atau dompet digital Anda
              </p>
              <button
                onClick={() => setShowQrisModal(false)}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FAFAF8] text-xs font-mono uppercase tracking-wider"
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

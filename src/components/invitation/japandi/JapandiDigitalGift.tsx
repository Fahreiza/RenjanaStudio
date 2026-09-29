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

interface JapandiDigitalGiftProps {
  bankAccounts: BankAccount[];
  qrisUrl?: string;
  giftAddress: GiftAddress;
}

export default function JapandiDigitalGift({
  bankAccounts,
  qrisUrl,
  giftAddress,
}: JapandiDigitalGiftProps) {
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
    <section className="relative w-full py-12 px-4 text-[#2D2F2E] z-10 font-sans">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-10">
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#637061] font-mono block">
          TANDA KASIH // ENVELOPE
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-normal tracking-wide text-[#2D2F2E]">
          Amplop Digital &amp; Kado
        </h2>
        <div className="w-10 h-px bg-[#637061]/40 mx-auto my-2" />
        <p className="text-xs text-[#2D2F2E]/70 font-serif max-w-sm mx-auto italic">
          Bagi Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih dan restu, dapat melalui sarana berikut:
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        {/* BANK ACCOUNTS (JAPANDI CERAMIC CARD STYLE) */}
        {bankAccounts.map((bank, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="rounded-3xl bg-white/80 border border-[#2D2F2E]/10 p-6 sm:p-7 shadow-sm space-y-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-medium uppercase tracking-wider px-3 py-1 rounded-full bg-[#F4F0EA] border border-[#2D2F2E]/10 text-[#2D2F2E]">
                {bank.bankName}
              </span>
              <Gift className="w-4 h-4 text-[#637061]" />
            </div>

            <div className="space-y-1">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#637061]">
                NOMOR REKENING
              </p>
              <p className="text-2xl sm:text-3xl font-mono font-semibold tracking-wider text-[#2D2F2E]">
                {bank.accountNumber}
              </p>
              <p className="text-xs font-serif text-[#2D2F2E]/75 pt-1">
                a.n. <span className="font-semibold text-[#2D2F2E]">{bank.accountName || bank.accountHolder}</span>
              </p>
            </div>

            <button
              onClick={() => handleCopyBank(bank.accountNumber, index)}
              className="w-full py-2.5 px-4 rounded-full bg-[#F4F0EA] border border-[#2D2F2E]/10 hover:bg-[#637061] hover:text-white text-xs font-mono font-medium uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              {copiedIndex === index ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Nomor Berhasil Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#637061]" />
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
            className="rounded-3xl bg-white/80 border border-[#2D2F2E]/10 p-6 shadow-xs text-center space-y-4"
          >
            <div className="flex items-center justify-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-[#2D2F2E]">
              <QrCode className="w-4 h-4 text-[#637061]" />
              <span>QRIS Pembayaran Digital</span>
            </div>

            <p className="text-xs text-[#2D2F2E]/70 font-serif">
              Mendukung semua aplikasi e-wallet &amp; mobile banking (GoPay, OVO, Dana, BCA, Mandiri, dll).
            </p>

            <button
              onClick={() => setShowQrisModal(true)}
              className="py-2.5 px-6 rounded-full bg-[#2D2F2E] text-white hover:bg-[#637061] font-mono font-medium text-xs uppercase tracking-wider shadow-xs transition-all"
            >
              Tampilkan Barcode QRIS
            </button>
          </motion.div>
        )}

        {/* PHYSICAL GIFT DELIVERY ADDRESS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white/80 border border-[#2D2F2E]/10 p-6 shadow-xs space-y-3"
        >
          <div className="flex items-center gap-2.5 border-b border-[#2D2F2E]/10 pb-3">
            <div className="p-2 rounded-xl bg-[#F4F0EA] border border-[#2D2F2E]/10 text-[#637061]">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-[#2D2F2E]">
                Kirim Kado Fisik
              </span>
              <p className="text-[10px] text-[#637061] font-mono">Alamat Pengiriman Hadiah</p>
            </div>
          </div>

          <div className="space-y-1 text-left text-xs font-serif">
            <p className="font-semibold text-[#2D2F2E]">Penerima: {giftAddress.recipient}</p>
            <p className="text-[#2D2F2E]/75 leading-relaxed">{giftAddress.address}</p>
            <p className="text-[#2D2F2E]/60 pt-1 font-mono">Telp: {giftAddress.phone}</p>
          </div>

          <button
            onClick={() => handleCopyAddress(`${giftAddress.recipient} - ${giftAddress.address} (Telp: ${giftAddress.phone})`)}
            className="w-full py-2.5 px-4 rounded-full bg-[#F4F0EA] border border-[#2D2F2E]/10 hover:bg-[#637061] hover:text-white text-xs font-mono font-medium uppercase tracking-wider transition-all flex items-center justify-center gap-2"
          >
            {copiedAddress ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Alamat Berhasil Disalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#637061]" />
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
            className="fixed inset-0 z-50 bg-[#2D2F2E]/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xs rounded-3xl bg-white border border-[#2D2F2E]/10 p-6 text-center space-y-4 shadow-xl"
            >
              <h3 className="font-serif font-medium text-lg text-[#2D2F2E]">QRIS Pembayaran Digital</h3>
              <div className="relative w-56 h-56 mx-auto bg-white rounded-2xl p-3 border border-[#2D2F2E]/10">
                <Image
                  src={qrisUrl || '/assets/images/gallery-1.webp'}
                  alt="QRIS Barcode"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <p className="text-xs text-[#2D2F2E]/70 font-serif">
                Pindai dengan aplikasi dompet digital atau mobile banking
              </p>
              <button
                onClick={() => setShowQrisModal(false)}
                className="w-full py-2.5 rounded-full bg-[#F4F0EA] hover:bg-[#2D2F2E] hover:text-white text-[#2D2F2E] text-xs font-mono uppercase tracking-wider"
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

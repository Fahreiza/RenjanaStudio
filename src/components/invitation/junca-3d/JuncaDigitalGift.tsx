'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, QrCode, CreditCard, Gift, MapPin } from 'lucide-react';
import { BankAccount } from '@/types/invitation';

interface JuncaDigitalGiftProps {
  bankAccounts?: BankAccount[];
  qrisUrl?: string;
}

const DEFAULT_BANK_ACCOUNTS: BankAccount[] = [
  {
    bankName: 'BCA',
    accountNumber: '8735029182',
    accountName: 'Fahreiza Amanda',
  },
  {
    bankName: 'Bank Mandiri',
    accountNumber: '1370019283741',
    accountName: 'Amanda Putri',
  },
];

/**
 * Editorial Digital Gift Envelope & Cashless Barcode Transfer Component.
 */
export default function JuncaDigitalGift({
  bankAccounts = DEFAULT_BANK_ACCOUNTS,
  qrisUrl = '/assets/images/qris-dummy.webp',
}: JuncaDigitalGiftProps) {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [selectedQr, setSelectedQr] = useState<string | null>(null);

  const physicalAddress =
    'Jl. Dago Asri No. 42, Coblong, Kota Bandung, Jawa Barat 40135 (Penerima: Fahreiza & Amanda)';

  const handleCopy = (text: string, identifier: string) => {
    navigator.clipboard.writeText(text);
    if (identifier === 'address') {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2500);
    } else {
      setCopiedAccount(identifier);
      setTimeout(() => setCopiedAccount(null), 2500);
    }
  };

  return (
    <section className="relative w-full py-20 px-4 sm:px-8 bg-[#080808] text-[#FBFBFB] select-none overflow-hidden">
      <div className="max-w-6xl mx-auto border-t border-white/10 pt-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ED3327] font-semibold block">
              06 // TRIBUTE &bull; WEDDING GIFT
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-none">
              Tanda Kasih &amp; Hadiah
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-400 max-w-sm tracking-wider uppercase leading-relaxed">
            Doa restu Anda adalah karunia paling bermakna bagi kami. Namun jika Anda bermaksud memberi tanda kasih, kami sediakan amplop digital berikut.
          </p>
        </div>

        {/* Bank Accounts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {bankAccounts.map((bank, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="bg-[#121212] border border-white/15 hover:border-[#ED3327]/60 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group transition-all"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-mono text-xs text-[#ED3327] font-bold tracking-widest uppercase">
                  BANK TRANSFER &bull; {bank.bankName}
                </span>
                <CreditCard className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
              </div>

              <div className="my-6 space-y-2">
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block">
                  NOMOR REKENING:
                </span>
                <p className="font-mono text-2xl sm:text-3xl font-bold tracking-wider text-white">
                  {bank.accountNumber}
                </p>
                <p className="font-sans text-xs text-neutral-400">
                  Atas Nama: <span className="text-white font-medium">{bank.accountName}</span>
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => handleCopy(bank.accountNumber, bank.accountNumber)}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#ED3327] hover:bg-[#d6261c] text-white font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  {copiedAccount === bank.accountNumber ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>TERSALIN!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>SALIN NO. REKENING</span>
                    </>
                  )}
                </button>

                {qrisUrl && (
                  <button
                    onClick={() => setSelectedQr(qrisUrl)}
                    className="p-3 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black transition-colors"
                    title="Lihat QRIS"
                  >
                    <QrCode className="w-5 h-5" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Physical Gift Parcel Address */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#121212] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-[#ED3327]">
              <Gift className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-widest font-bold">
                KIRIM KADO FISIK KE ALAMAT
              </span>
            </div>
            <p className="font-sans text-sm text-neutral-300 leading-relaxed">
              {physicalAddress}
            </p>
          </div>

          <button
            onClick={() => handleCopy(physicalAddress, 'address')}
            className="py-3 px-6 rounded-full bg-white/10 hover:bg-white text-white hover:text-black font-mono text-xs uppercase tracking-wider font-semibold transition-all shrink-0 flex items-center justify-center gap-2"
          >
            {copiedAddress ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>ALAMAT TERSALIN</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>SALIN ALAMAT</span>
              </>
            )}
          </button>
        </motion.div>
      </div>

      {/* QRIS Modal */}
      <AnimatePresence>
        {selectedQr && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedQr(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#121212] border border-white/20 rounded-3xl p-8 max-w-xs w-full text-center space-y-4 shadow-2xl"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-[#ED3327] font-bold block">
                QRIS DIGITAL ENVELOPE
              </span>
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white p-4">
                <Image
                  src={selectedQr}
                  alt="QRIS Barcode"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <button
                onClick={() => setSelectedQr(null)}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black font-mono text-xs uppercase tracking-wider transition-colors"
              >
                TUTUP
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

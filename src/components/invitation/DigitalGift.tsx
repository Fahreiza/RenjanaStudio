'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Copy, Check, Gift, QrCode } from 'lucide-react';
import { BankAccount } from '@/types/invitation';

interface DigitalGiftProps {
  bankAccounts: BankAccount[];
  qrisUrl?: string;
  giftAddress: string;
}

export default function DigitalGift({ bankAccounts, qrisUrl, giftAddress }: DigitalGiftProps) {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const [showQrisModal, setShowQrisModal] = useState(false);

  const handleCopy = (accountNumber: string) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedAccount(accountNumber);
    setTimeout(() => setCopiedAccount(null), 2500);
  };

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-2">
        <span className="text-xs uppercase tracking-[0.3em] text-[#8A9A86] font-semibold">
          Tanda Kasih
        </span>
        <h2 className="font-serif-cormorant text-4xl md:text-5xl text-[#2D3748] font-bold">
          Amplop Digital & Kado
        </h2>
        <div className="w-16 h-[2px] bg-[#B76E79] mx-auto mt-3"></div>
        <p className="text-xs md:text-sm text-zinc-600 max-w-md mx-auto leading-relaxed pt-2">
          Doa restu Anda merupakan karunia terindah bagi kami. Namun jika Anda ingin memberikan hadiah, Anda dapat menggunakan fitur amplop digital di bawah ini:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bank Account Cards */}
        {bankAccounts.map((account, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-[#8A9A86]/20 flex flex-col justify-between space-y-4 relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-[#B76E79]" />
                <span className="font-bold text-lg text-[#2D3748]">{account.bankName}</span>
              </div>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#8A9A86] bg-[#EEF2ED] px-2.5 py-1 rounded-full">
                Transfer Bank
              </span>
            </div>

            <div className="space-y-1 py-2">
              <span className="text-xs text-zinc-500 font-mono">No. Rekening:</span>
              <p className="font-mono text-2xl font-bold text-[#B76E79] tracking-wider">
                {account.accountNumber}
              </p>
              <p className="text-xs text-zinc-600">a.n. {account.accountName}</p>
            </div>

            <button
              onClick={() => handleCopy(account.accountNumber)}
              className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold transition-all duration-300 ${
                copiedAccount === account.accountNumber
                  ? 'bg-[#8A9A86] text-white'
                  : 'bg-[#FAF7F2] border border-[#8A9A86]/30 text-[#586955] hover:bg-[#B76E79] hover:text-white hover:border-[#B76E79]'
              }`}
            >
              {copiedAccount === account.accountNumber ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Berhasil Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Salin No. Rekening</span>
                </>
              )}
            </button>
          </motion.div>
        ))}
      </div>

      {/* QRIS & Physical Gift Address Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* QRIS Option */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#EEF2ED]/70 rounded-3xl p-6 border border-[#8A9A86]/30 shadow-md flex flex-col justify-between items-center text-center space-y-4"
        >
          <div className="space-y-2">
            <QrCode className="w-8 h-8 text-[#B76E79] mx-auto" />
            <h3 className="font-serif-cormorant text-2xl font-bold text-[#2D3748]">
              Cashless / QRIS
            </h3>
            <p className="text-xs text-zinc-600">
              Pindai QRIS menggunakan Gopay, OVO, Dana, ShopeePay, atau Mobile Banking pilihan Anda.
            </p>
          </div>

          <button
            onClick={() => setShowQrisModal(true)}
            className="w-full bg-[#8A9A86] hover:bg-[#586955] text-white text-xs font-semibold py-3 px-4 rounded-xl transition-colors shadow"
          >
            Lihat Kode QRIS
          </button>
        </motion.div>

        {/* Physical Gift Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-[#F4E3E3]/60 rounded-3xl p-6 border border-[#B76E79]/30 shadow-md flex flex-col justify-between items-center text-center space-y-4"
        >
          <div className="space-y-2">
            <Gift className="w-8 h-8 text-[#B76E79] mx-auto" />
            <h3 className="font-serif-cormorant text-2xl font-bold text-[#2D3748]">
              Kirim Kado Fisik
            </h3>
            <p className="text-xs text-zinc-600 max-w-xs mx-auto leading-relaxed">
              {giftAddress}
            </p>
          </div>

          <button
            onClick={() => handleCopy(giftAddress)}
            className="w-full bg-[#B76E79] hover:bg-[#8A9A86] text-white text-xs font-semibold py-3 px-4 rounded-xl transition-colors shadow"
          >
            {copiedAccount === giftAddress ? 'Alamat Disalin!' : 'Salin Alamat Pengiriman'}
          </button>
        </motion.div>
      </div>

      {/* QRIS Modal Preview */}
      <AnimatePresence>
        {showQrisModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-6 max-w-sm w-full text-center space-y-4 relative shadow-2xl"
            >
              <h3 className="font-serif-cormorant text-2xl font-bold text-[#2D3748]">
                QRIS Pembayaran
              </h3>
              <div className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden border-2 border-zinc-200">
                <Image
                  src={qrisUrl || '/assets/images/BAHAN-TEMA-1-1-2.webp'}
                  alt="QRIS Code"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-zinc-500">
                Scan via Gopay, OVO, Dana, BCA Mobile, Livin, DLL.
              </p>
              <button
                onClick={() => setShowQrisModal(false)}
                className="w-full bg-[#2D3748] text-white text-xs font-semibold py-3 rounded-xl hover:bg-black transition-colors"
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

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Copy, Check, Gift, QrCode, MapPin, CheckCheck } from 'lucide-react';

interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountName: string;
}

interface WhatsappDigitalGiftProps {
  bankAccounts: BankAccount[];
  qrisUrl?: string;
  giftAddress?: {
    recipient: string;
    address: string;
    phone: string;
  };
}

export default function WhatsappDigitalGift({ bankAccounts, qrisUrl, giftAddress }: WhatsappDigitalGiftProps) {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [showQrisModal, setShowQrisModal] = useState(false);

  const handleCopyAccount = (accNum: string) => {
    navigator.clipboard.writeText(accNum);
    setCopiedAccount(accNum);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  const handleCopyAddress = (addrStr: string) => {
    navigator.clipboard.writeText(addrStr);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2">
          <Gift className="w-5 h-5 text-[#25D366]" />
          <h2 className="text-base font-bold text-white tracking-wide uppercase">
            Amplop Digital / WA Pay Card
          </h2>
        </div>
        <span className="text-xs text-zinc-400 font-mono">Transfer Card</span>
      </div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#111B21] border border-zinc-800 rounded-3xl p-5 space-y-6 shadow-xl relative overflow-hidden"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#25D366] uppercase tracking-wider flex items-center gap-1.5">
            <CheckCheck className="w-4 h-4 text-sky-400" />
            WHATSAPP PAY &amp; GIFT
          </span>
          <span className="text-[10px] bg-[#25D366]/20 text-[#25D366] font-mono px-2.5 py-0.5 rounded border border-[#25D366]/40">
            Verified Transfer
          </span>
        </div>

        <p className="text-xs text-zinc-300 leading-relaxed font-sans bg-[#202C33] p-4 rounded-2xl border border-zinc-800">
          Doa restu Anda adalah karunia terindah bagi kami. Namun jika hendak memberi hadiah / tanda kasih, Anda dapat menyalurkannya melalui rekening bank atau QRIS di bawah ini:
        </p>

        {/* Bank Account Cards Grid */}
        <div className="space-y-3">
          {bankAccounts.map((bank, idx) => (
            <div
              key={idx}
              className="bg-[#202C33] border border-zinc-800 rounded-2xl p-4 flex items-center justify-between gap-3 shadow-md"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#25D366]" />
                  <span className="font-bold text-sm text-white">{bank.bankName}</span>
                </div>
                <p className="font-mono text-base font-extrabold text-[#25D366] tracking-wider">
                  {bank.accountNumber}
                </p>
                <p className="text-xs text-zinc-400">a.n. {bank.accountName}</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleCopyAccount(bank.accountNumber)}
                className={`py-2.5 px-4 rounded-full text-xs font-extrabold transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0 shadow-md ${
                  copiedAccount === bank.accountNumber
                    ? 'bg-emerald-500 text-black'
                    : 'bg-[#25D366] hover:bg-emerald-400 text-black shadow-[#25D366]/30'
                }`}
              >
                {copiedAccount === bank.accountNumber ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Salin Rekening</span>
                  </>
                )}
              </motion.button>
            </div>
          ))}
        </div>

        {/* QRIS Showcase */}
        {qrisUrl && (
          <div className="pt-2">
            <div className="bg-[#202C33] border border-zinc-800 rounded-2xl p-4 text-center space-y-3">
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-white uppercase">
                <QrCode className="w-4 h-4 text-[#25D366]" />
                <span>QRIS Payment Barcode</span>
              </div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                onClick={() => setShowQrisModal(true)}
                className="relative w-48 h-48 mx-auto bg-white p-2 rounded-2xl border-2 border-[#25D366] shadow-md cursor-pointer group"
              >
                <Image src={qrisUrl} alt="QRIS Code" fill className="object-contain p-1" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center text-white text-xs font-bold">
                  Klik Perbesar QRIS
                </div>
              </motion.div>

              <p className="text-[11px] text-zinc-400">
                Scan barcode di atas via GoPay, OVO, Dana, ShopeePay, atau Mobile Banking.
              </p>
            </div>
          </div>
        )}

        {/* Gift Address Card */}
        {giftAddress && (
          <div className="pt-2">
            <div className="bg-[#202C33] border border-zinc-800 rounded-2xl p-4 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <MapPin className="w-4 h-4 text-[#25D366]" />
                <span>Alamat Pengiriman Kado Fisik</span>
              </div>

              <div className="text-xs text-zinc-200 space-y-1 bg-[#111B21] p-3 rounded-xl border border-zinc-800">
                <p className="font-bold text-white">Penerima: {giftAddress.recipient}</p>
                <p className="text-zinc-300 leading-relaxed">{giftAddress.address}</p>
                <p className="text-zinc-400 font-mono">No. Telp: {giftAddress.phone}</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCopyAddress(`${giftAddress.recipient} - ${giftAddress.address} (${giftAddress.phone})`)}
                className={`w-full py-2.5 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  copiedAddress
                    ? 'bg-emerald-500 text-black'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200'
                }`}
              >
                {copiedAddress ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Alamat Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Salin Alamat Lengkap Kado</span>
                  </>
                )}
              </motion.button>
            </div>
          </div>
        )}
      </motion.div>

      {/* QRIS Modal Lightbox */}
      <AnimatePresence>
        {showQrisModal && qrisUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 select-none"
            onClick={() => setShowQrisModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111B21] border border-zinc-800 rounded-3xl p-6 max-w-sm w-full text-center space-y-4 shadow-2xl relative"
            >
              <h4 className="text-sm font-bold text-white">Scan QRIS Code</h4>
              <div className="relative w-64 h-64 mx-auto bg-white p-2 rounded-2xl border-4 border-[#25D366] shadow-md">
                <Image src={qrisUrl} alt="QRIS Large" fill className="object-contain" />
              </div>
              <button
                onClick={() => setShowQrisModal(false)}
                className="w-full py-2.5 bg-[#25D366] text-black font-extrabold text-xs rounded-full shadow-md"
              >
                Tutup QRIS
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

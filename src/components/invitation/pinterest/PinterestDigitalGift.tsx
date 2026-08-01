'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Copy, Check, Gift, QrCode, MapPin, Pin } from 'lucide-react';

interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountName: string;
}

interface PinterestDigitalGiftProps {
  bankAccounts: BankAccount[];
  qrisUrl?: string;
  giftAddress?: {
    recipient: string;
    address: string;
    phone: string;
  };
}

export default function PinterestDigitalGift({ bankAccounts, qrisUrl, giftAddress }: PinterestDigitalGiftProps) {
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
    <section className="space-y-4 overflow-hidden w-full max-w-xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
        <div className="flex items-center gap-1.5">
          <Gift className="w-4 h-4 text-[#E60023]" />
          <h2 className="text-xs sm:text-sm font-extrabold text-[#111111] tracking-wide uppercase">
            Amplop Digital / Tanda Kasih Pin
          </h2>
        </div>
        <span className="text-[10px] text-zinc-500 font-mono font-bold">Gift Board</span>
      </div>

      {/* Main Compact Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white border border-zinc-200/90 rounded-2xl p-3.5 sm:p-4 space-y-3.5 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
      >
        {/* Top Card Badge */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-extrabold text-[#E60023] uppercase tracking-wider flex items-center gap-1">
            <Pin className="w-3 h-3 fill-current" />
            DIGITAL GIFT BOARD
          </span>
          <span className="text-[9px] bg-[#E60023]/10 text-[#E60023] font-bold px-2.5 py-0.5 rounded-full border border-[#E60023]/30">
            Amplop Online
          </span>
        </div>

        {/* Compact Intro Header Box */}
        <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#FAFAFA] border border-zinc-200/70">
          <div className="w-7 h-7 rounded-xl bg-[#E60023] text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0">
            🎁
          </div>
          <div className="space-y-0.5">
            <h3 className="font-extrabold text-xs text-[#111111]">Tanda Kasih Pernikahan</h3>
            <p className="text-[10px] text-zinc-500 leading-relaxed font-medium">
              Kehadiran &amp; doa restu Anda adalah karunia terindah. Apabila hendak memberi tanda kasih:
            </p>
          </div>
        </div>

        {/* Compact Bank Account Cards */}
        <div className="space-y-2.5">
          {bankAccounts.map((bank, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAFA] border border-zinc-200/80 rounded-xl p-2.5 sm:p-3 flex items-center justify-between gap-2 shadow-xs"
            >
              <div className="space-y-0.5 truncate">
                <div className="flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-[#E60023] shrink-0" />
                  <span className="font-extrabold text-xs text-[#111111]">{bank.bankName}</span>
                </div>
                <p className="font-mono text-xs sm:text-sm font-black text-[#E60023] tracking-wider pl-5">
                  {bank.accountNumber}
                </p>
                <p className="text-[10px] text-zinc-500 font-medium pl-5 truncate">a.n. {bank.accountName}</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCopyAccount(bank.accountNumber)}
                className={`py-1.5 px-3 rounded-full text-[10px] sm:text-[11px] font-extrabold transition-all flex items-center justify-center gap-1 cursor-pointer shrink-0 shadow-xs ${
                  copiedAccount === bank.accountNumber
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#E60023] hover:bg-[#B6001A] text-white'
                }`}
              >
                {copiedAccount === bank.accountNumber ? (
                  <>
                    <Check className="w-3 h-3" />
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Salin</span>
                  </>
                )}
              </motion.button>
            </div>
          ))}
        </div>

        {/* Compact QRIS Showcase */}
        {qrisUrl && (
          <div className="pt-0.5">
            <div className="bg-[#FAFAFA] border border-zinc-200/80 rounded-xl p-3 text-center space-y-2">
              <div className="flex items-center justify-center gap-1 text-[10px] font-extrabold text-[#111111] uppercase tracking-wider">
                <QrCode className="w-3.5 h-3.5 text-[#E60023]" />
                <span>QRIS Payment Code</span>
              </div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                onClick={() => setShowQrisModal(true)}
                className="relative w-32 h-32 mx-auto bg-white p-1.5 rounded-xl border border-[#E60023] shadow-xs cursor-pointer group"
              >
                <Image src={qrisUrl} alt="QRIS Code" fill className="object-contain p-0.5" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center text-white text-[9px] font-bold">
                  Perbesar
                </div>
              </motion.div>

              <p className="text-[9.5px] text-zinc-500">
                Scan via GoPay, OVO, Dana, ShopeePay, M-Banking.
              </p>
            </div>
          </div>
        )}

        {/* Compact Physical Gift Address Card */}
        {giftAddress && (
          <div className="pt-0.5">
            <div className="bg-[#FAFAFA] border border-zinc-200/80 rounded-xl p-3 space-y-2">
              <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-[#111111]">
                <MapPin className="w-3.5 h-3.5 text-[#E60023]" />
                <span>Alamat Pengiriman Kado Fisik</span>
              </div>

              <div className="text-[10px] text-[#111111] space-y-0.5 bg-white p-2.5 rounded-lg border border-zinc-200/80">
                <p className="font-extrabold text-[#111111]">Penerima: {giftAddress.recipient}</p>
                <p className="text-zinc-600 leading-relaxed font-medium">{giftAddress.address}</p>
                <p className="text-zinc-500 font-mono font-bold">No. Telp: {giftAddress.phone}</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCopyAddress(`${giftAddress.recipient} - ${giftAddress.address} (${giftAddress.phone})`)}
                className={`w-full py-1.5 rounded-full text-[10px] font-extrabold transition-all flex items-center justify-center gap-1 cursor-pointer ${
                  copiedAddress
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#E9E9E9] hover:bg-[#D8D8D8] text-[#111111]'
                }`}
              >
                {copiedAddress ? (
                  <>
                    <Check className="w-3 h-3" />
                    <span>Alamat Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Salin Alamat Kirim Kado</span>
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
              className="bg-white rounded-2xl p-5 max-w-xs w-full text-center space-y-3 shadow-2xl relative"
            >
              <h4 className="text-xs font-black text-[#111111]">Scan QRIS Code</h4>
              <div className="relative w-56 h-56 mx-auto bg-white p-2 rounded-xl border-2 border-[#E60023]">
                <Image src={qrisUrl} alt="QRIS Large" fill className="object-contain" />
              </div>
              <button
                onClick={() => setShowQrisModal(false)}
                className="w-full py-2 bg-[#E60023] text-white font-extrabold text-xs rounded-full shadow-xs"
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

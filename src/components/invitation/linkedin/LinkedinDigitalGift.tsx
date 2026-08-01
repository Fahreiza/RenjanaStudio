'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Gift, QrCode, MapPin, X } from 'lucide-react';

interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountName: string;
}

interface LinkedinDigitalGiftProps {
  bankAccounts: BankAccount[];
  qrisUrl?: string;
  giftAddress?: {
    recipient: string;
    address: string;
    phone: string;
  };
}

export default function LinkedinDigitalGift({
  bankAccounts,
  qrisUrl,
  giftAddress,
}: LinkedinDigitalGiftProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [showQrisModal, setShowQrisModal] = useState(false);

  const handleCopyBank = (accNum: string, idx: number) => {
    navigator.clipboard.writeText(accNum);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleCopyAddress = (addrStr: string) => {
    navigator.clipboard.writeText(addrStr);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section className="space-y-4 font-sans linkedin-theme">
      {/* Header Card */}
      <div className="space-y-0.5">
        <h2 className="text-lg font-semibold text-[#000000e6] tracking-tight">
          Amplop Digital &amp; Hadiah Pernikahan
        </h2>
        <p className="text-xs text-[#00000099] font-normal">Kirim Hadiah &amp; Transfer Bank</p>
      </div>

      {/* Main Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white border border-zinc-200 rounded-xl p-4 sm:p-5 space-y-4 shadow-xs"
      >
        <p className="text-xs text-[#000000e6] leading-relaxed font-normal">
          Doa restu Anda merupakan karunia terindah bagi kami. Bagi yang ingin memberikan tanda kasih berupa hadiah tunai atau fisik, Anda dapat menyalurkannya melalui rekening bank di bawah ini:
        </p>

        {/* Bank Accounts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {bankAccounts.map((acc, idx) => (
            <div
              key={idx}
              className="bg-[#EDF3F8] border border-blue-100 rounded-xl p-3.5 space-y-2 relative"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0A66C2] tracking-wider uppercase">
                  {acc.bankName}
                </span>
                <span className="text-[10px] text-[#00000099] font-normal">Transfer Bank</span>
              </div>

              <div className="space-y-0.5">
                <span className="text-base font-bold text-[#000000e6] block tracking-wide">
                  {acc.accountNumber}
                </span>
                <span className="text-xs text-[#00000099] block font-normal">
                  a.n. {acc.accountName}
                </span>
              </div>

              <button
                onClick={() => handleCopyBank(acc.accountNumber, idx)}
                className="w-full mt-2 py-1.5 bg-white border border-[#0A66C2] text-[#0A66C2] hover:bg-blue-50 text-xs font-semibold rounded-full flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs"
              >
                {copiedIndex === idx ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600">Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin Nomor Rekening</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* QRIS Button (if available) */}
        {qrisUrl && (
          <div className="pt-2">
            <button
              onClick={() => setShowQrisModal(true)}
              className="w-full py-2.5 bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold text-xs rounded-full flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
            >
              <QrCode className="w-4 h-4" />
              <span>Tampilkan Kode QRIS Pembayaran</span>
            </button>
          </div>
        )}

        {/* Physical Gift Address Card */}
        {giftAddress && (
          <div className="pt-3 border-t border-zinc-100 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#000000e6]">
              <MapPin className="w-4 h-4 text-[#0A66C2]" />
              <span>Alamat Pengiriman Hadiah Fisik</span>
            </div>

            <p className="text-xs text-[#00000099] leading-relaxed font-normal">
              <strong>{giftAddress.recipient}</strong>
              <br />
              {giftAddress.address}
              <br />
              <span className="text-[11px]">No. HP: {giftAddress.phone}</span>
            </p>

            <button
              onClick={() => handleCopyAddress(`${giftAddress.recipient} - ${giftAddress.address} (${giftAddress.phone})`)}
              className="py-1.5 px-4 border border-[#0A66C2] text-[#0A66C2] hover:bg-blue-50 text-xs font-semibold rounded-full flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
            >
              {copiedAddress ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600">Alamat Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Alamat Lengkap</span>
                </>
              )}
            </button>
          </div>
        )}
      </motion.div>

      {/* QRIS Lightbox Modal */}
      <AnimatePresence>
        {showQrisModal && qrisUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQrisModal(false)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-5 max-w-sm w-full space-y-4 text-center shadow-2xl relative"
            >
              <button
                onClick={() => setShowQrisModal(false)}
                className="absolute top-3 right-3 text-zinc-500 hover:text-zinc-800 p-1"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1 pt-1">
                <h3 className="font-bold text-base text-[#000000e6]">Scan Kode QRIS</h3>
                <p className="text-xs text-[#00000099]">Mendukung seluruh e-wallet &amp; m-banking</p>
              </div>

              <div className="relative w-64 h-64 mx-auto rounded-xl overflow-hidden border border-zinc-200 bg-white p-2">
                <Image
                  src={qrisUrl}
                  alt="QRIS Barcode"
                  fill
                  sizes="256px"
                  className="object-contain"
                />
              </div>

              <button
                onClick={() => setShowQrisModal(false)}
                className="w-full py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-semibold rounded-full"
              >
                Tutup Modal
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

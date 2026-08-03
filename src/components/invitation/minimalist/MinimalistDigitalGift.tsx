'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CreditCard, Copy, Check, Gift, MapPin, Sparkles } from 'lucide-react';
import { BankAccount } from '@/types/invitation';

interface GiftAddress {
  recipient: string;
  address: string;
  phone: string;
}

interface MinimalistDigitalGiftProps {
  bankAccounts: BankAccount[];
  qrisUrl?: string;
  giftAddress: GiftAddress;
}

export default function MinimalistDigitalGift({
  bankAccounts,
  qrisUrl,
  giftAddress,
}: MinimalistDigitalGiftProps) {
  const [copiedBank, setCopiedBank] = useState<string | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyBank = (number: string) => {
    navigator.clipboard.writeText(number);
    setCopiedBank(number);
    setTimeout(() => setCopiedBank(null), 2000);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${giftAddress.recipient}\n${giftAddress.address}\n${giftAddress.phone}`);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section className="space-y-10 overflow-hidden w-full max-w-xl mx-auto px-4 py-8">
      {/* Title */}
      <div className="text-center space-y-1.5">
        <span className="text-xs uppercase tracking-[0.35em] text-[#7F9481] font-bold block">
          Tanda Kasih
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#C48B96] font-bold">
          Amplop Digital &amp; Hadiah
        </h2>
        <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto opacity-70 mt-2" />
        <p className="text-xs text-zinc-500 max-w-xs mx-auto pt-2 font-serif italic">
          Doa restu Anda merupakan karunia terindah bagi kami. Namun jika ingin memberi hadiah, dapat melalui:
        </p>
      </div>

      <div className="space-y-6">
        {/* BANK CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {bankAccounts.map((acc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/90 border border-[#D4AF37]/40 rounded-3xl p-5 space-y-3 shadow-xl relative backdrop-blur-md overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-sm text-[#7F9481] tracking-wider uppercase font-mono">
                  {acc.bankName}
                </span>
                <CreditCard className="w-5 h-5 text-[#D4AF37]" />
              </div>

              <div className="space-y-0.5">
                <p className="font-mono font-black text-lg text-[#2D3748] tracking-widest">{acc.accountNumber}</p>
                <p className="text-xs text-zinc-500 font-serif">a.n {acc.accountName}</p>
              </div>

              <button
                onClick={() => handleCopyBank(acc.accountNumber)}
                className="w-full py-2.5 bg-[#F9F6F0] hover:bg-[#7F9481] hover:text-white border border-[#7F9481]/30 text-[#7F9481] font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs"
              >
                {copiedBank === acc.accountNumber ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin No. Rekening</span>
                  </>
                )}
              </button>
            </motion.div>
          ))}
        </div>

        {/* QRIS BARCODE */}
        {qrisUrl && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/90 border border-[#D4AF37]/40 rounded-3xl p-6 shadow-xl text-center space-y-3 max-w-xs mx-auto backdrop-blur-md"
          >
            <span className="text-xs font-extrabold text-[#7F9481] uppercase tracking-widest block">
              QRIS Transfer Digital
            </span>
            <div className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden border-2 border-zinc-200 p-2 bg-white shadow-inner">
              <Image src={qrisUrl} alt="QRIS Barcode" fill sizes="192px" className="object-contain" />
            </div>
            <p className="text-[11px] text-zinc-400 font-serif italic">Scan menggunakan aplikasi GoPay, OVO, Dana, BCA, dll.</p>
          </motion.div>
        )}

        {/* PHYSICAL GIFT ADDRESS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/90 border border-[#D4AF37]/40 rounded-3xl p-6 shadow-xl text-center space-y-3 backdrop-blur-md"
        >
          <Gift className="w-6 h-6 text-[#C48B96] mx-auto" />
          <h3 className="font-serif text-lg text-[#2D3748] font-bold">Kirim Hadiah Fisik</h3>
          <p className="text-xs text-zinc-600 leading-relaxed max-w-sm mx-auto">
            <strong>Penerima:</strong> {giftAddress.recipient}<br />
            {giftAddress.address}<br />
            <strong>No. Telp:</strong> {giftAddress.phone}
          </p>

          <button
            onClick={handleCopyAddress}
            className="py-3 px-6 bg-[#C48B96] hover:bg-[#b37a85] text-white font-bold text-xs uppercase tracking-widest rounded-full inline-flex items-center gap-1.5 transition-all shadow-md shadow-[#C48B96]/20 cursor-pointer"
          >
            {copiedAddress ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Alamat Tersalin</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Salin Alamat Kado</span>
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

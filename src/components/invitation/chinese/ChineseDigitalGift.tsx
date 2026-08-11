'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CreditCard, Copy, Check, Gift } from 'lucide-react';
import { BankAccount } from '@/types/invitation';

interface GiftAddress {
  recipient: string;
  address: string;
  phone: string;
}

interface ChineseDigitalGiftProps {
  bankAccounts: BankAccount[];
  qrisUrl?: string;
  giftAddress: GiftAddress;
}

export default function ChineseDigitalGift({
  bankAccounts,
  qrisUrl,
  giftAddress,
}: ChineseDigitalGiftProps) {
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
    <section className="relative overflow-hidden bg-transparent px-4 py-6">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-16 h-16 mx-auto opacity-70 mb-4 relative"
          >
            <span className="text-[#FDFBF7] font-bold text-4xl leading-none flex items-center justify-center">囍</span>
          </motion.div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#FDFBF7] font-medium block">
            Tanda Kasih
          </span>
          <h2 className="text-3xl md:text-4xl text-[#D4AF37] mb-2 font-serif uppercase tracking-widest font-bold">
            Hadiah Digital
          </h2>
          <p className="text-xs text-[#FDFBF7] max-w-sm mx-auto pt-4 font-serif italic">
            Doa restu Anda merupakan karunia terindah bagi kami. Namun jika Anda ingin memberikan tanda kasih, dapat melalui:
          </p>
        </div>

        <div className="space-y-8">
          {/* BANK CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {bankAccounts.map((acc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="bg-[#4A0A0E]/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border-2 border-[#D4AF37]/30 relative overflow-hidden group"
              >
                {/* Ornate border inside card */}
                <div className="absolute inset-2 border border-[#D4AF37]/30 rounded-lg pointer-events-none" />
                
                <div className="relative z-10 space-y-8 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-sans font-bold text-sm text-[#FDFBF7] tracking-wider uppercase">
                      {acc.bankName}
                    </span>
                    <CreditCard className="w-5 h-5 text-[#FDFBF7]" strokeWidth={1.5} />
                  </div>

                  <div className="space-y-1">
                    <p className="font-serif text-2xl text-[#FDFBF7] tracking-widest">{acc.accountNumber}</p>
                    <p className="text-[10px] text-[#a69785] uppercase tracking-widest">A.N. {acc.accountName}</p>
                  </div>

                  <button
                    onClick={() => handleCopyBank(acc.accountNumber)}
                    className="w-full py-3.5 bg-white hover:bg-[#4A0A0E]/80 backdrop-blur-sm text-[#FDFBF7] font-bold text-[9px] uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 transition-colors border border-[#D4AF37]/30 shadow-inner"
                  >
                    {copiedBank === acc.accountNumber ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#FDFBF7]" strokeWidth={2} />
                        <span className="text-[#FDFBF7]">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-[#FDFBF7]" strokeWidth={2} />
                        <span>Salin No. Rekening</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* QRIS BARCODE */}
          {qrisUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#4A0A0E]/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border-2 border-[#D4AF37]/30 text-center space-y-6 max-w-sm mx-auto relative overflow-hidden"
            >
              {/* Ornate border inside card */}
              <div className="absolute inset-2 border border-[#D4AF37]/30 rounded-lg pointer-events-none" />
              
              <div className="relative z-10 pt-4">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#FDFBF7] font-bold block mb-6">
                  QRIS Transfer Digital
                </span>
                <div className="relative w-48 h-48 mx-auto rounded-xl overflow-hidden border-2 border-[#D4AF37]/30 bg-white p-4 mb-4 shadow-inner">
                  <Image src={qrisUrl} alt="QRIS Barcode" fill sizes="192px" className="object-contain p-2" />
                </div>
                <p className="text-[9px] text-[#a69785] uppercase tracking-widest leading-relaxed max-w-[200px] mx-auto font-medium">
                  Scan menggunakan aplikasi e-wallet Anda
                </p>
              </div>
            </motion.div>
          )}

          {/* PHYSICAL GIFT ADDRESS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#4A0A0E]/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border-2 border-[#D4AF37]/30 text-center relative overflow-hidden group"
          >
            {/* Ornate border inside card */}
            <div className="absolute inset-2 border border-[#D4AF37]/30 rounded-lg pointer-events-none" />
            
            <div className="relative z-10 pt-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-[#D4AF37]/30 shadow-inner">
                <Gift className="w-5 h-5 text-[#FDFBF7]" strokeWidth={1.5} />
              </div>

              <h3 className="font-serif text-3xl text-[#FDFBF7] mb-4 italic">Kirim Hadiah Fisik</h3>
              
              <div className="text-xs text-[#FDFBF7] leading-relaxed max-w-md mx-auto mb-8 space-y-2">
                <p className="uppercase tracking-widest text-[9px] font-bold text-[#a69785]">Penerima</p>
                <p className="font-serif text-lg text-[#FDFBF7]">{giftAddress.recipient}</p>
                <p className="pt-2 font-sans tracking-wide">{giftAddress.address}</p>
                <p className="pt-1 font-sans">{giftAddress.phone}</p>
              </div>

              <button
                onClick={handleCopyAddress}
                className="py-3.5 px-8 bg-[#D4AF37] hover:bg-[#6c5b43] text-white font-bold text-[9px] uppercase tracking-widest rounded-lg inline-flex items-center justify-center gap-2 transition-all w-full sm:w-auto relative overflow-hidden group/btn shadow-md"
              >
                {copiedAddress ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white relative z-10" />
                    <span className="relative z-10">Alamat Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-white relative z-10" strokeWidth={2} />
                    <span className="relative z-10">Salin Alamat</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

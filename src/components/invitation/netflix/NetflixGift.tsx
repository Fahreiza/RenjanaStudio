'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CreditCard, Copy, Check, Gift, QrCode } from 'lucide-react';
import { BankAccount } from '@/types/invitation';

interface NetflixGiftProps {
  bankAccounts: BankAccount[];
  qrisUrl?: string;
  giftAddress?: string;
}

export default function NetflixGift({
  bankAccounts,
  qrisUrl,
  giftAddress,
}: NetflixGiftProps) {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const handleCopy = (accountNumber: string) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedAccount(accountNumber);
    setTimeout(() => setCopiedAccount(null), 3000);
  };

  return (
    <section id="gift" className="py-4 md:py-6 px-4 md:px-12 max-w-4xl mx-auto text-white select-none space-y-6 bg-[#141414]">
      {/* Header Tag */}
      <div>
        <span className="text-xs uppercase tracking-widest text-[#E50914] font-bold block mb-1">
          TANDA KASIH
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold font-sans text-white tracking-tight">
          Amplop Digital &amp; Hadiah
        </h2>
        <p className="text-xs text-zinc-400 font-sans mt-1">
          Doa restu Anda adalah karunia terindah bagi kami. Namun jika ingin memberi tanda kasih, Anda dapat menggunakannya di bawah ini.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Bank Cards */}
        {bankAccounts.map((bank, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#181818] border border-zinc-800 rounded-2xl p-6 shadow-xl space-y-4 flex flex-col justify-between hover:border-[#E50914]/60 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-[#E50914] font-extrabold font-mono text-xl tracking-wider">
                {bank.bankName}
              </span>
              <CreditCard className="w-6 h-6 text-zinc-400" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] text-zinc-400 uppercase font-mono">Nomor Rekening:</span>
              <p className="font-mono text-xl font-bold text-white tracking-wider">
                {bank.accountNumber}
              </p>
              <p className="text-xs text-zinc-300 font-medium">a.n. {bank.accountName}</p>
            </div>

            <button
              onClick={() => handleCopy(bank.accountNumber)}
              className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs shadow transition-all ${
                copiedAccount === bank.accountNumber
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#E50914] hover:bg-red-700 text-white'
              }`}
            >
              {copiedAccount === bank.accountNumber ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Nomor Rekening Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Nomor Rekening</span>
                </>
              )}
            </button>
          </motion.div>
        ))}

        {/* Physical Gift Shipping Address Card */}
        {giftAddress && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#181818] border border-zinc-800 rounded-2xl p-6 shadow-xl space-y-4 flex flex-col justify-between hover:border-[#E50914]/60 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-[#E50914] font-bold text-sm uppercase">Kado Fisik</span>
              <Gift className="w-6 h-6 text-zinc-400" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] text-zinc-400 uppercase font-mono">Alamat Pengiriman:</span>
              <p className="text-xs text-zinc-200 leading-relaxed">{giftAddress}</p>
            </div>

            <button
              onClick={() => handleCopy(giftAddress)}
              className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs shadow transition-all ${
                copiedAccount === giftAddress
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#E50914] hover:bg-red-700 text-white'
              }`}
            >
              {copiedAccount === giftAddress ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Alamat Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Alamat Kado</span>
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

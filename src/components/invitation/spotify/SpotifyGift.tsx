'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Gift, Copy, Check, QrCode, MapPin, Wifi } from 'lucide-react';
import { BankAccount } from '@/types/invitation';

interface SpotifyGiftProps {
  bankAccounts: BankAccount[];
  qrisUrl?: string;
  giftAddress?: string;
}

export default function SpotifyGift({ bankAccounts, qrisUrl, giftAddress }: SpotifyGiftProps) {
  const [copiedBankIndex, setCopiedBankIndex] = useState<number | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAccount = (accountNumber: string, index: number) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedBankIndex(index);
    setTimeout(() => setCopiedBankIndex(null), 2500);
  };

  const handleCopyAddress = () => {
    if (!giftAddress) return;
    navigator.clipboard.writeText(giftAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section className="py-6 px-4 max-w-3xl mx-auto text-white select-none">
      {/* Section Header */}
      <div className="space-y-1 mb-4">
        <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#1DB954] uppercase font-sans block">
          AMPLOP DIGITAL &amp; HADIAH
        </span>
        <h2 className="text-lg md:text-xl font-extrabold text-white font-sans tracking-tight flex items-center gap-2">
          <Gift className="w-5 h-5 text-[#1DB954]" />
          <span>Spotify Cashless Gift &amp; Envelope</span>
        </h2>
      </div>

      <div className="space-y-4">
        {/* Bank Accounts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {bankAccounts.map((acc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="bg-gradient-to-br from-[#0a2614] via-[#161616] to-[#09120c] border border-[#1DB954]/30 rounded-xl p-3.5 sm:p-4 shadow-lg relative overflow-hidden group hover:border-[#1DB954] transition-all flex flex-col justify-between"
            >
              {/* Card Top: Bank Name Badge */}
              <div className="flex items-center justify-between border-b border-emerald-900/40 pb-2 mb-2.5 relative z-10">
                <span className="bg-[#1DB954] text-black font-extrabold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {acc.bankName}
                </span>
                <div className="flex items-center gap-1 text-emerald-400">
                  <Wifi className="w-3.5 h-3.5 rotate-90" />
                  <span className="text-[8px] font-mono text-zinc-400 uppercase">
                    SPOTIFY PAY
                  </span>
                </div>
              </div>

              {/* Metallic Chip Simulation & Card Number */}
              <div className="space-y-1.5 my-1 relative z-10">
                <div className="w-7 h-4 rounded bg-amber-400/80 border border-amber-300 flex items-center justify-center">
                  <div className="w-4 h-2.5 border border-amber-600/60 rounded-xs" />
                </div>

                <div className="space-y-0.5">
                  <span className="text-[8px] font-mono text-emerald-400/80 uppercase tracking-widest block">
                    NOMOR REKENING:
                  </span>
                  <h4 className="text-base sm:text-lg font-bold font-mono text-white tracking-wider">
                    {acc.accountNumber.replace(/(.{4})/g, '$1 ').trim()}
                  </h4>
                </div>

                <p className="text-[10px] text-zinc-300 font-semibold font-sans uppercase">
                  a.n. <span className="text-white font-extrabold">{acc.accountName}</span>
                </p>
              </div>

              {/* Copy Account Button */}
              <div className="pt-2.5 relative z-10">
                <button
                  onClick={() => handleCopyAccount(acc.accountNumber, idx)}
                  className="w-full bg-[#121212] hover:bg-[#1DB954] text-white hover:text-black border border-emerald-700/50 hover:border-[#1DB954] text-[11px] font-bold py-1.5 rounded-full flex items-center justify-center gap-1.5 transition-all shadow-sm"
                >
                  {copiedBankIndex === idx ? (
                    <>
                      <Check className="w-3 h-3 text-black" />
                      <span>Berhasil Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Salin Rekening {acc.bankName}</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* QRIS & Gift Address Compact Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* Compact QRIS Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="bg-[#161616] border border-zinc-800 rounded-xl p-3.5 shadow-lg flex flex-col items-center text-center space-y-2 relative overflow-hidden"
          >
            <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-[#1DB954] uppercase tracking-wider">
              <QrCode className="w-4 h-4" />
              <span>QRIS All Payment</span>
            </div>

            {/* Official QRIS Box */}
            <div className="bg-white p-3 rounded-xl shadow-lg border-2 border-[#1DB954] flex flex-col items-center space-y-1.5">
              {/* QRIS Red Header Badge */}
              <div className="flex items-center justify-between w-full border-b border-zinc-200 pb-1 px-1">
                <span className="font-extrabold text-[11px] text-[#ED1C24] tracking-tight">
                  QRIS
                </span>
                <span className="text-[8px] font-mono text-zinc-500 uppercase font-bold">
                  Standar Pembayaran Nasional
                </span>
              </div>

              {/* QR Code Image */}
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=QRIS-FAHREIZA-AMANDA-WEDDING-DONATION"
                alt="QRIS Barcode Pembayaran"
                className="w-28 h-28 object-contain"
              />

              <span className="text-[9px] font-mono font-bold text-zinc-700 uppercase">
                Fahreiza &amp; Amanda Wedding
              </span>
            </div>

            <p className="text-[10px] text-zinc-400 font-sans leading-tight">
              Gopay &bull; OVO &bull; DANA &bull; ShopeePay &bull; BCA &bull; Mandiri
            </p>
          </motion.div>

          {/* Compact Shipping Address Card */}
          {giftAddress && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-[#161616] border border-zinc-800 rounded-xl p-3.5 shadow-lg flex flex-col justify-between space-y-2.5"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-1 text-[11px] font-bold text-[#1DB954] uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Alamat Kado Fisik</span>
                </div>

                <div className="bg-[#121212] p-2.5 rounded-lg border border-zinc-800">
                  <p className="text-[10px] text-zinc-300 font-sans leading-tight">
                    {giftAddress}
                  </p>
                </div>
              </div>

              <button
                onClick={handleCopyAddress}
                className="w-full bg-[#121212] hover:bg-[#1DB954] text-white hover:text-black border border-emerald-700/50 hover:border-[#1DB954] text-[11px] font-bold py-1.5 rounded-full flex items-center justify-center gap-1.5 transition-all shadow-sm"
              >
                {copiedAddress ? (
                  <>
                    <Check className="w-3 h-3 text-black" />
                    <span>Alamat Berhasil Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Salin Alamat Kado</span>
                  </>
                )}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

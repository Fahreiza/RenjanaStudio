'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CreditCard, Copy, Check, Gift, QrCode, MapPin, Sparkles } from 'lucide-react';

interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountName: string;
}

interface TwitterDigitalGiftProps {
  bankAccounts: BankAccount[];
  qrisUrl?: string;
  giftAddress?: {
    recipient: string;
    address: string;
    phone: string;
  };
}

export default function TwitterDigitalGift({ bankAccounts, qrisUrl, giftAddress }: TwitterDigitalGiftProps) {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);

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
          <Gift className="w-5 h-5 text-[#1DA1F2]" />
          <h2 className="text-base font-bold text-white tracking-wide uppercase">
            Amplop Digital / Twitter Tip Jar
          </h2>
        </div>
        <span className="text-xs text-zinc-400 font-mono">Tip Jar Enabled</span>
      </div>

      {/* Intro Box */}
      <div className="bg-[#15202B] border border-zinc-800 rounded-2xl p-5 space-y-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1DA1F2]/20 border border-[#1DA1F2]/40 flex items-center justify-center text-[#1DA1F2] font-bold text-sm">
            🎁
          </div>
          <div>
            <h3 className="font-bold text-sm text-white">Tanda Kasih / Digital Envelope</h3>
            <p className="text-xs text-zinc-400">Doa restu Anda adalah hadiah terindah bagi kami.</p>
          </div>
        </div>

        {/* Bank Accounts Grid */}
        <div className="space-y-3 pt-2">
          {bankAccounts.map((bank, idx) => (
            <div
              key={idx}
              className="bg-black/50 border border-zinc-800 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#1DA1F2]" />
                  <span className="font-extrabold text-sm text-white">{bank.bankName}</span>
                </div>
                <p className="font-mono text-base font-bold text-sky-400 tracking-wider">
                  {bank.accountNumber}
                </p>
                <p className="text-xs text-zinc-400">a.n. {bank.accountName}</p>
              </div>

              <button
                onClick={() => handleCopyAccount(bank.accountNumber)}
                className={`py-2 px-4 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0 ${
                  copiedAccount === bank.accountNumber
                    ? 'bg-green-500 text-white'
                    : 'bg-[#1DA1F2] hover:bg-sky-500 text-white shadow-md shadow-[#1DA1F2]/20'
                }`}
              >
                {copiedAccount === bank.accountNumber ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin Rekening</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* QRIS Code Showcase */}
        {qrisUrl && (
          <div className="pt-2">
            <div className="bg-black/50 border border-zinc-800 rounded-xl p-4 text-center space-y-3">
              <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-white uppercase">
                <QrCode className="w-4 h-4 text-[#1DA1F2]" />
                <span>QRIS Payment Code</span>
              </div>

              <div className="relative w-44 h-44 mx-auto bg-white p-2 rounded-xl border-2 border-[#1DA1F2] shadow-lg">
                <Image src={qrisUrl} alt="QRIS Code" fill className="object-contain" />
              </div>
              <p className="text-[11px] text-zinc-400">
                Scan QRIS di atas menggunakan GoPay, OVO, Dana, ShopeePay, atau Mobile Banking.
              </p>
            </div>
          </div>
        )}

        {/* Physical Gift Address */}
        {giftAddress && (
          <div className="pt-2">
            <div className="bg-black/50 border border-zinc-800 rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <MapPin className="w-4 h-4 text-[#1DA1F2]" />
                <span>Kirim Hadiah Fisik (Kado Pernikahan)</span>
              </div>

              <div className="text-xs text-zinc-300 space-y-1 bg-zinc-900/80 p-3 rounded-lg border border-zinc-800">
                <p className="font-bold text-white">Penerima: {giftAddress.recipient}</p>
                <p className="text-zinc-400 leading-relaxed">{giftAddress.address}</p>
                <p className="text-zinc-400 font-mono">No. HP: {giftAddress.phone}</p>
              </div>

              <button
                onClick={() => handleCopyAddress(`${giftAddress.recipient} - ${giftAddress.address} (${giftAddress.phone})`)}
                className={`w-full py-2.5 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  copiedAddress
                    ? 'bg-green-500 text-white'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
                }`}
              >
                {copiedAddress ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Alamat Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin Alamat Kirim Kado</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

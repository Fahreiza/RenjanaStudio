'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Copy, Check, Heart, QrCode, Gift } from 'lucide-react';
import { BankAccount } from '@/types/invitation';

interface YouTubeGiftMembershipProps {
  bankAccounts: BankAccount[];
  qrisUrl?: string;
  giftAddress?: string;
}

export default function YouTubeGiftMembership({
  bankAccounts,
  qrisUrl,
  giftAddress,
}: YouTubeGiftMembershipProps) {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(id);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  const handleCopyAddress = () => {
    if (!giftAddress) return;
    navigator.clipboard.writeText(giftAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <div id="sec-gift" className="space-y-6 select-none pt-4 max-w-4xl mx-auto">
      {/* Title Header Bar */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#FF0000] text-white flex items-center justify-center shadow-lg">
            <Heart className="w-5 h-5 fill-current" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-white font-sans tracking-tight flex items-center gap-2">
              Super Thanks &amp; Amplop Digital <span className="text-xs bg-[#FF0000]/20 text-[#FF0000] font-mono px-2 py-0.5 rounded border border-[#FF0000]/30 font-bold">MEMBERSHIP</span>
            </h3>
            <p className="text-xs text-zinc-400">Tanda kasih &amp; kado pernikahan untuk kedua mempelai</p>
          </div>
        </div>
      </div>

      {/* Grid: Bank Metallic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {bankAccounts.map((account, idx) => (
          <div
            key={idx}
            className="relative bg-gradient-to-br from-[#212121] via-[#181818] to-black rounded-2xl p-5 border border-zinc-800 shadow-xl space-y-4 overflow-hidden group hover:border-[#FF0000] transition-colors"
          >
            {/* Top Metallic Card Header */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold tracking-widest text-[#FF0000] font-mono">
                {account.bankName.toUpperCase()} CARD
              </span>
              <div className="w-8 h-5 rounded bg-amber-400/20 border border-amber-400/40 flex items-center justify-center">
                <span className="text-[9px] font-mono text-amber-300 font-bold">CHIP</span>
              </div>
            </div>

            {/* Account Number */}
            <div className="space-y-1 pt-2">
              <span className="text-[10px] text-zinc-400 font-mono uppercase">NO. REKENING:</span>
              <p className="text-xl font-mono font-extrabold text-white tracking-wider">
                {account.accountNumber}
              </p>
              <p className="text-xs text-zinc-300 font-bold">a.n {account.accountName}</p>
            </div>

            {/* Copy Action Button */}
            <button
              onClick={() => handleCopy(account.accountNumber, account.bankName)}
              className="w-full bg-[#FF0000] hover:bg-red-700 text-white font-extrabold text-xs py-2.5 rounded-xl shadow transition-all flex items-center justify-center gap-2"
            >
              {copiedAccount === account.bankName ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>BERHASIL DISALIN!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>SALIN REKENING</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* QRIS Barcode Card & Physical Address Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        {/* QRIS Card */}
        {qrisUrl && (
          <div className="bg-[#212121] rounded-2xl p-5 border border-zinc-800 shadow-xl text-center space-y-3 flex flex-col items-center justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 bg-[#FF0000] text-white text-[11px] font-extrabold px-3 py-1 rounded-md tracking-wider">
                <QrCode className="w-3.5 h-3.5" />
                <span>QRIS SUPER THANKS</span>
              </div>
              <h4 className="text-xs font-bold text-white pt-1">Scan Pakai Aplikasi E-Wallet / Mobile Banking</h4>
            </div>

            {/* Official Barcode Container */}
            <div className="relative w-48 h-48 bg-white p-3 rounded-xl shadow-inner border border-zinc-300 flex items-center justify-center">
              <Image
                src={qrisUrl}
                alt="QRIS Barcode"
                fill
                className="object-contain p-2"
              />
            </div>

            <p className="text-[10px] text-zinc-400 font-mono">
              Mendukung BCA Mobile, Mandiri Livin, GoPay, OVO, Dana, ShopeePay
            </p>
          </div>
        )}

        {/* Physical Gift Delivery Address Card */}
        {giftAddress && (
          <div className="bg-[#212121] rounded-2xl p-5 border border-zinc-800 shadow-xl space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-zinc-800 text-[#FF0000] text-[11px] font-extrabold px-3 py-1 rounded-md border border-zinc-700">
                <Gift className="w-3.5 h-3.5" />
                <span>ALAMAT KIRIM KADO</span>
              </div>

              <div className="space-y-1 pt-1">
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">{giftAddress}</p>
              </div>
            </div>

            <button
              onClick={handleCopyAddress}
              className="w-full bg-zinc-800 hover:bg-[#FF0000] text-white font-extrabold text-xs py-2.5 rounded-xl border border-zinc-700 transition-all flex items-center justify-center gap-2"
            >
              {copiedAddress ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>ALAMAT BERHASIL DISALIN!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>SALIN ALAMAT KADO</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

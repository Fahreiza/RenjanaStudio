'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShoppingBag, Copy, Check, QrCode, Gift, Heart } from 'lucide-react';
import { BankAccount } from '@/types/invitation';

interface TikTokShopGiftProps {
  bankAccounts: BankAccount[];
  qrisUrl?: string;
  giftAddress?: string;
}

export default function TikTokShopGift({
  bankAccounts,
  qrisUrl,
  giftAddress,
}: TikTokShopGiftProps) {
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
    <div id="sec-gift" className="space-y-6 select-none max-w-4xl mx-auto px-4 py-4">
      {/* Title Header Bar */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#FE2C55] to-[#00F2FE] text-white flex items-center justify-center shadow-lg">
            <ShoppingBag className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-white font-sans tracking-tight flex items-center gap-2">
              TikTok Shop Gift Showcase <span className="text-xs bg-[#FE2C55] text-white font-mono px-2 py-0.5 rounded font-bold uppercase">SHOP</span>
            </h3>
            <p className="text-xs text-zinc-400">Kado digital &amp; amplop pernikahan untuk kedua mempelai</p>
          </div>
        </div>
      </div>

      {/* Grid: TikTok Shop Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {bankAccounts.map((account, idx) => (
          <div
            key={idx}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 shadow-xl space-y-4 relative overflow-hidden group hover:border-[#00F2FE] transition-colors"
          >
            {/* Shop Showcase Item Badge */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold tracking-widest text-[#00F2FE] font-mono uppercase bg-[#00F2FE]/10 px-2.5 py-1 rounded-full border border-[#00F2FE]/30">
                TIKTOK SHOP SHOWCASE ITEM #{idx + 1}
              </span>
              <Heart className="w-4 h-4 text-[#FE2C55] fill-current" />
            </div>

            {/* Account Info */}
            <div className="space-y-1 pt-1">
              <span className="text-xs font-bold text-zinc-300 font-sans uppercase">
                {account.bankName} DIGITAL ENVELOPE
              </span>
              <p className="text-2xl font-mono font-extrabold text-white tracking-wider">
                {account.accountNumber}
              </p>
              <p className="text-xs text-zinc-400 font-bold">a.n {account.accountName}</p>
            </div>

            {/* Copy Button */}
            <button
              onClick={() => handleCopy(account.accountNumber, account.bankName)}
              className="w-full bg-gradient-to-r from-[#FE2C55] to-[#00F2FE] hover:opacity-95 text-white font-extrabold text-xs py-3 rounded-2xl shadow transition-all flex items-center justify-center gap-2"
            >
              {copiedAccount === account.bankName ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>BERHASIL DISALIN!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>SALIN REKENING (COPY CARD)</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* QRIS & Physical Address Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* QRIS Card */}
        {qrisUrl && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 shadow-xl text-center space-y-3 flex flex-col items-center justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 bg-[#FE2C55] text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow tracking-wider font-mono">
                <QrCode className="w-3.5 h-3.5" />
                <span>QRIS GIFT PAY</span>
              </div>
              <h4 className="text-xs font-bold text-white pt-1">Scan E-Wallet / Mobile Banking</h4>
            </div>

            <div className="relative w-44 h-44 bg-white p-3 rounded-2xl shadow-inner border border-zinc-300 flex items-center justify-center">
              <Image
                src={qrisUrl}
                alt="QRIS Barcode"
                fill
                sizes="176px"
                className="object-contain p-2"
              />
            </div>

            <p className="text-[10px] text-zinc-400 font-mono">BCA Mobile, GoPay, OVO, Dana, ShopeePay</p>
          </div>
        )}

        {/* Physical Gift Delivery Address */}
        {giftAddress && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 shadow-xl space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-zinc-800 text-[#00F2FE] text-[11px] font-extrabold px-3 py-1 rounded-full border border-zinc-700 font-mono">
                <Gift className="w-3.5 h-3.5" />
                <span>ALAMAT KIRIM KADO</span>
              </div>

              <div className="space-y-1 pt-1">
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">{giftAddress}</p>
              </div>
            </div>

            <button
              onClick={handleCopyAddress}
              className="w-full bg-zinc-800 hover:bg-[#FE2C55] text-white font-extrabold text-xs py-3 rounded-2xl border border-zinc-700 transition-all flex items-center justify-center gap-2"
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

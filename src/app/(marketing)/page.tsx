import React from 'react';
import Link from 'next/link';
import { PRICING_PACKAGES } from '@/constants/pricing-packages';
import { THEMES_LIST } from '@/constants/themes-list';

export default function MarketingLandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Navbar */}
      <nav className="border-b border-slate-800 px-8 py-4 flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-xl font-bold font-serif text-amber-400 flex items-center gap-2">
          <span>💍</span> NikahDigital
        </div>
        <div className="flex gap-6 text-sm items-center">
          <Link href="#katalog" className="hover:text-amber-300">Katalog Tema</Link>
          <Link href="#harga" className="hover:text-amber-300">Paket Harga</Link>
          <Link href="/login" className="py-2 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition">
            Masuk / Buat Undangan
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-8 max-w-4xl mx-auto text-center space-y-6">
        <span className="py-1 px-3 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider">
          Platform Undangan Nikah Digital No. 1
        </span>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-100 leading-tight">
          Buat Undangan Nikah Online Momen Spesialmu dalam Hitungan Menit
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Tampilan elegan, banyak pilihan tema, fitur amplop digital, hitung mundur, audio musik, dan generator sebar undangan WhatsApp otomatis.
        </p>
        <div className="pt-4 flex justify-center gap-4">
          <Link
            href="/dashboard"
            className="py-3 px-8 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 font-bold text-lg hover:brightness-110 shadow-lg shadow-amber-500/20 transition"
          >
            Coba Gratis Sekarang
          </Link>
        </div>
      </section>

      {/* Katalog Tema Preview */}
      <section id="katalog" className="py-16 px-8 max-w-6xl mx-auto space-y-8 border-t border-slate-800">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-serif font-bold text-amber-200">Pilihan Tema Undangan Elegan</h2>
          <p className="text-slate-400 text-sm">Desain responsif yang sangat menawan di smartphone tamu undangan.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {THEMES_LIST.map((theme) => (
            <div key={theme.id} className="rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-4 hover:border-amber-500/40 transition">
              <div className="h-40 rounded-xl bg-slate-800 flex items-center justify-center text-slate-500 text-sm font-semibold">
                Preview {theme.name}
              </div>
              <div>
                <h3 className="text-lg font-bold text-amber-200">{theme.name}</h3>
                <span className="text-xs text-amber-400/80 font-mono">{theme.category}</span>
              </div>
              <Link
                href="/romeo-juliet"
                target="_blank"
                className="block text-center py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-amber-300 border border-amber-500/20"
              >
                Lihat Demo Undangan
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Paket Harga */}
      <section id="harga" className="py-16 px-8 max-w-6xl mx-auto space-y-8 border-t border-slate-800">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-serif font-bold text-amber-200">Paket & Harga Hemat</h2>
          <p className="text-slate-400 text-sm">Tanpa biaya tersembunyi. Sekali bayar untuk hari bahagia Anda.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl bg-slate-900 border p-8 space-y-6 flex flex-col justify-between ${
                pkg.isPopular ? 'border-amber-500 shadow-xl shadow-amber-500/10 relative' : 'border-slate-800'
              }`}
            >
              {pkg.isPopular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 font-bold text-xs uppercase px-3 py-1 rounded-full">
                  Paling Laris
                </span>
              )}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-amber-200">{pkg.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-white">Rp {pkg.price.toLocaleString('id-ID')}</span>
                  {pkg.originalPrice && (
                    <span className="text-xs text-slate-500 line-through">
                      Rp {pkg.originalPrice.toLocaleString('id-ID')}
                    </span>
                  )}
                </div>
                <ul className="space-y-2 text-sm text-slate-300 pt-4 border-t border-slate-800">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-amber-400">✓</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/dashboard"
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-center block transition text-sm"
              >
                Pilih Paket Ini
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

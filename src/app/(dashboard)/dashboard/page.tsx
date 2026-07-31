import React from 'react';
import Link from 'next/link';

export default function DashboardOverviewPage() {
  const stats = [
    { label: 'Total Tamu Undangan', value: '124 Tamu', color: 'text-amber-400' },
    { label: 'Konfirmasi Hadir', value: '86 Tamu', color: 'text-emerald-400' },
    { label: 'Konfirmasi Ragu / Tidak', value: '12 Tamu', color: 'text-rose-400' },
    { label: 'Total Ucapan Masuk', value: '45 Ucapan', color: 'text-sky-400' },
  ];

  return (
    <div className="p-8 space-y-8 bg-slate-950 min-h-screen text-slate-100">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-bold font-serif text-amber-200">Dashboard Pengantin</h1>
          <p className="text-slate-400 text-sm">Kelola data acara, daftar tamu, dan tampilan undangan digital Anda.</p>
        </div>
        <Link
          href="/romeo-juliet"
          target="_blank"
          className="py-2.5 px-5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition text-sm flex items-center gap-2"
        >
          <span>👁️</span> Lihat Undangan Saya
        </Link>
      </header>

      {/* Ringkasan Statistik */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <p className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </section>

      {/* Menu Navigasi Cepat */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-200">Pengaturan Undangan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/dashboard/invitation"
            className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition group"
          >
            <div className="text-3xl mb-3">💑</div>
            <h3 className="text-lg font-bold text-amber-200 group-hover:text-amber-400">Data Mempelai & Acara</h3>
            <p className="text-xs text-slate-400 mt-1">Edit data pengantin pria, wanita, lokasi akad & resepsi.</p>
          </Link>

          <Link
            href="/dashboard/guests"
            className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition group"
          >
            <div className="text-3xl mb-3">👥</div>
            <h3 className="text-lg font-bold text-amber-200 group-hover:text-amber-400">Kelola Daftar Tamu</h3>
            <p className="text-xs text-slate-400 mt-1">Tambah tamu & buat link sebar undangan otomatis WhatsApp.</p>
          </Link>

          <Link
            href="/dashboard/theme"
            className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition group"
          >
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="text-lg font-bold text-amber-200 group-hover:text-amber-400">Pilih & Kustomisasi Tema</h3>
            <p className="text-xs text-slate-400 mt-1">Ganti desain tema, font, dan musik latar belakang.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

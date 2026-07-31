'use client';

import React, { useState } from 'react';
import CoverEnvelope from '@/components/themes/shared/CoverEnvelope';
import AudioPlayer from '@/components/themes/shared/AudioPlayer';

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ to?: string }>;
}

export default function PublicInvitationPage({ params, searchParams }: PageProps) {
  const [isOpened, setIsOpened] = useState(false);

  // Unwrapping Next.js 15 async params & searchParams
  const resolvedParams = React.use(params);
  const resolvedSearchParams = React.use(searchParams);

  const namaTamu = resolvedSearchParams.to || 'Tamu Undangan';
  const slug = resolvedParams.slug;

  // Mock data untuk demonstrasi tema
  const data = {
    pria: { namaLengkap: 'Budi Santoso', namaPanggilan: 'Budi' },
    wanita: { namaLengkap: 'Siti Rahmawati', namaPanggilan: 'Siti' },
    akad: {
      tanggal: 'Sabtu, 12 Desember 2026',
      waktu: '08.00 - 10.00 WIB',
      tempat: 'Masjid Agung Kota',
    },
    resepsi: {
      tanggal: 'Sabtu, 12 Desember 2026',
      waktu: '11.00 - 14.00 WIB',
      tempat: 'Grand Ballroom Hotel Imperium',
    },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Cover Buka Amplop */}
      {!isOpened && (
        <CoverEnvelope
          namaPria={data.pria.namaPanggilan}
          namaWanita={data.wanita.namaPanggilan}
          namaTamu={namaTamu}
          onOpen={() => setIsOpened(true)}
        />
      )}

      {/* Background Audio */}
      <AudioPlayer autoPlay={isOpened} />

      {/* Main Content Undangan */}
      <div className="max-w-lg mx-auto bg-slate-900 min-h-screen shadow-2xl border-x border-amber-500/20 pb-20">
        {/* Header Hero */}
        <section className="relative h-[80vh] flex flex-col justify-end p-8 text-center bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent">
          <p className="text-amber-400 uppercase tracking-widest text-sm mb-2">The Wedding Of</p>
          <h1 className="text-5xl font-serif font-bold text-amber-200 mb-4">
            {data.pria.namaPanggilan} & {data.wanita.namaPanggilan}
          </h1>
          <p className="text-slate-300 text-sm">{data.akad.tanggal}</p>
        </section>

        {/* Pasangan Mempelai */}
        <section className="p-8 text-center space-y-8 border-t border-amber-500/10">
          <h2 className="text-2xl font-serif text-amber-300">Pasangan Mempelai</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-3xl font-serif font-bold text-amber-100">{data.pria.namaLengkap}</h3>
              <p className="text-xs text-slate-400">Putra dari Bapak Fulan & Ibu Fulanah</p>
            </div>
            <div className="text-amber-500 text-2xl font-serif">&</div>
            <div>
              <h3 className="text-3xl font-serif font-bold text-amber-100">{data.wanita.namaLengkap}</h3>
              <p className="text-xs text-slate-400">Putri dari Bapak Fulan & Ibu Fulanah</p>
            </div>
          </div>
        </section>

        {/* Acara */}
        <section className="p-8 space-y-6 bg-slate-950/50 my-6 border-y border-amber-500/10">
          <h2 className="text-2xl font-serif text-amber-300 text-center">Rangkaian Acara</h2>

          <div className="p-6 rounded-xl bg-slate-800/50 border border-amber-500/20 space-y-2">
            <h3 className="text-xl font-bold text-amber-200">Akad Nikah</h3>
            <p className="text-sm text-slate-300">📅 {data.akad.tanggal}</p>
            <p className="text-sm text-slate-300">⏰ {data.akad.waktu}</p>
            <p className="text-sm text-slate-300">📍 {data.akad.tempat}</p>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/50 border border-amber-500/20 space-y-2">
            <h3 className="text-xl font-bold text-amber-200">Resepsi Nikah</h3>
            <p className="text-sm text-slate-300">📅 {data.resepsi.tanggal}</p>
            <p className="text-sm text-slate-300">⏰ {data.resepsi.waktu}</p>
            <p className="text-sm text-slate-300">📍 {data.resepsi.tempat}</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="p-8 text-center text-xs text-slate-500">
          <p>Dibuat dengan ❤️ oleh Jasa Undangan Nikah Online</p>
        </footer>
      </div>
    </main>
  );
}

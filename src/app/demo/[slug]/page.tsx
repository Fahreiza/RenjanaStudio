'use client';

import { use, Suspense } from 'react';
import Link from 'next/link';
import { CATALOG_ITEMS } from '@/data/catalogData';
import { ArrowLeft, Sparkles } from 'lucide-react';
import CoverEnvelope from '@/components/invitation/CoverEnvelope';
import HeaderBismillah from '@/components/invitation/HeaderBismillah';
import CoupleSection from '@/components/invitation/CoupleSection';
import CountdownTimer from '@/components/invitation/CountdownTimer';
import EventDetails from '@/components/invitation/EventDetails';
import PhotoGallery from '@/components/invitation/PhotoGallery';
import RsvpForm from '@/components/invitation/RsvpForm';
import DigitalGift from '@/components/invitation/DigitalGift';
import ClosingSection from '@/components/invitation/ClosingSection';
import { FAHREIZA_AMANDA_DATA } from '@/data/demoData';

interface DemoPageProps {
  params: Promise<{ slug: string }>;
}

export default function GenericDemoPage({ params }: DemoPageProps) {
  const { slug } = use(params);
  const catalogItem = CATALOG_ITEMS.find((item) => item.slug === slug);

  const title = catalogItem ? catalogItem.title : 'Demo Undangan';
  const hasPhoto = catalogItem ? catalogItem.hasPhoto : true;

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
        <p className="text-sm font-semibold text-[#8A9A86] animate-pulse">Memuat Undangan...</p>
      </div>
    }>
      <div className="min-h-screen bg-[#FAF7F2] text-[#2D3748]">
        {/* Floating Back Header */}
        <div className="fixed top-4 left-4 z-40">
          <Link
            href="/"
            className="flex items-center gap-2 bg-white/90 backdrop-blur-md text-[#586955] border border-[#8A9A86]/30 text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg hover:bg-[#B76E79] hover:text-white transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Katalog ({title})</span>
          </Link>
        </div>

        <HeaderBismillah />

        <CoupleSection
          groom={FAHREIZA_AMANDA_DATA.groom}
          bride={FAHREIZA_AMANDA_DATA.bride}
        />

        <CountdownTimer targetDateISO={FAHREIZA_AMANDA_DATA.eventDateISO} />

        <EventDetails
          akad={FAHREIZA_AMANDA_DATA.akad}
          resepsi={FAHREIZA_AMANDA_DATA.resepsi}
        />

        {hasPhoto && (
          <PhotoGallery photos={FAHREIZA_AMANDA_DATA.galleryPhotos} />
        )}

        <RsvpForm />

        <DigitalGift
          bankAccounts={FAHREIZA_AMANDA_DATA.bankAccounts}
          qrisUrl={FAHREIZA_AMANDA_DATA.qrisUrl}
          giftAddress={FAHREIZA_AMANDA_DATA.giftAddress}
        />

        <ClosingSection
          groomName={FAHREIZA_AMANDA_DATA.groom.name}
          brideName={FAHREIZA_AMANDA_DATA.bride.name}
        />
      </div>
    </Suspense>
  );
}

'use client';

import { useState } from 'react';
import Navbar from '@/components/catalog/Navbar';
import HeroSection from '@/components/catalog/HeroSection';
import CatalogCard from '@/components/catalog/CatalogCard';
import CatalogFilter from '@/components/catalog/CatalogFilter';
import PricingSection from '@/components/catalog/PricingSection';
import FeatureHighlights from '@/components/catalog/FeatureHighlights';
import Footer from '@/components/catalog/Footer';
import { CATALOG_ITEMS } from '@/data/catalogData';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = CATALOG_ITEMS.filter((item) => {
    return activeCategory === 'all' || item.category === activeCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Navbar />

      <main className="flex-1">
        <HeroSection />

        {/* Catalog Showcase Section */}
        <section id="katalog" className="py-16 px-4 max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-[0.3em] text-[#8A9A86] font-semibold">
              Koleksi Undangan Digital
            </span>
            <h2 className="font-serif-cormorant text-4xl md:text-5xl text-[#2D3748] font-bold">
              Katalog Undangan Nikah Exklusif
            </h2>
            <div className="w-16 h-[2px] bg-[#B76E79] mx-auto mt-3"></div>
            <p className="text-xs md:text-sm text-zinc-600 max-w-lg mx-auto leading-relaxed pt-2">
              Jelajahi koleksi tema pilihan kami — setiap tema dirancang unik, interaktif, dan memberikan kesan mendalam bagi para tamu.
            </p>
          </div>

          <CatalogFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {filteredItems.map((item) => (
              <CatalogCard key={item.id} item={item} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16 bg-white/60 rounded-3xl border border-dashed border-[#8A9A86]/30">
              <p className="text-sm text-zinc-500 font-medium">
                Tidak ada tema yang cocok dengan kategori yang dipilih.
              </p>
            </div>
          )}
        </section>

        <PricingSection />

        <FeatureHighlights />
      </main>

      <Footer />
    </div>
  );
}

'use client';

interface CatalogFilterProps {
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
}

export default function CatalogFilter({
  activeCategory,
  onSelectCategory,
}: CatalogFilterProps) {
  const categories = [
    { id: 'all', label: 'Semua Tema' },
    { id: 'sosial', label: '📱 1. Sosial' },
    { id: 'minimalist', label: '🌿 2. Minimalist' },
    { id: 'lumina', label: '✨ 3. 3D Lumina' },
    { id: 'popup', label: '📦 4. 3D Pop Up' },
  ];

  return (
    <div className="flex items-center justify-center bg-white/70 backdrop-blur-md rounded-2xl p-4 border border-[#8A9A86]/20 shadow-sm">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 ${
              activeCategory === cat.id
                ? 'bg-[#B76E79] text-white shadow-md scale-105'
                : 'bg-[#FAF7F2] text-[#586955] hover:bg-[#EEF2ED]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}

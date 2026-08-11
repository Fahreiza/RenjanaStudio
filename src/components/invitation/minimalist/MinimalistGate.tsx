'use client';

import Image from 'next/image';

/**
 * MinimalistGate – a decorative floral gate that appears after the intro.
 * It creates a curvy arch at the top and vertical side arches filled with
 * flower images, giving the impression of entering through a lush garden
 * gate. The component is purely visual; it does not handle any interaction.
 */
export default function MinimalistGate() {
  // List of flower assets – you can add more images in the assets folder.
  const flowerAssets = [
    '/assets/images/TEMA-01-BUNGA-01-co-1-2.png',
    '/assets/images/TEMA-01-BUNGA-02-co-1-2.png',
    '/assets/images/TEMA-01-BUNGA-03-co-1-2.png',
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {/* Top horizontal arch */}
      <div className="absolute top-0 left-0 w-full h-32 flex justify-center items-end overflow-hidden">
        <svg viewBox="0 0 200 50" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,50 Q100,0 200,50" fill="none" stroke="#c1a784" strokeWidth="8" />
        </svg>
        {/* Flowers evenly spaced along the top arch */}
        {flowerAssets.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt="Flower"
            width={80}
            height={80}
            className={`absolute top-0 transform -translate-y-1/2 ${idx % 2 === 0 ? 'left-1/4' : 'right-1/4'}`}
          />
        ))}
      </div>

      {/* Left vertical arch */}
      <div className="absolute top-0 left-0 w-24 h-full flex flex-col justify-center items-start overflow-hidden">
        <svg viewBox="0 0 50 200" className="w-full h-full" preserveAspectRatio="none">
          <path d="M50,0 Q0,100 50,200" fill="none" stroke="#c1a784" strokeWidth="8" />
        </svg>
        {flowerAssets.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt="Flower"
            width={60}
            height={60}
            className="absolute left-0 transform -translate-x-1/2" style={{ top: `${idx * 20}%` }}
          />
        ))}
      </div>

      {/* Right vertical arch */}
      <div className="absolute top-0 right-0 w-24 h-full flex flex-col justify-center items-end overflow-hidden">
        <svg viewBox="0 0 50 200" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,0 Q50,100 0,200" fill="none" stroke="#c1a784" strokeWidth="8" />
        </svg>
        {flowerAssets.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt="Flower"
            width={60}
            height={60}
            className="absolute right-0 transform translate-x-1/2" style={{ top: `${idx * 20}%` }}
          />
        ))}
      </div>
    </div>
  );
}

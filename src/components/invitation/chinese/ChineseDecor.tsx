import React from 'react';

export const Lantern = ({ className = "w-16 h-20 text-[#FDFBF7]" }) => (
  <svg className={className} viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="1">
    {/* String */}
    <line x1="12" y1="0" x2="12" y2="4" strokeWidth="1.5"/>
    {/* Top Cap */}
    <path d="M8 4h8v2H8z" fill="currentColor"/>
    {/* Body */}
    <path d="M5 6h14v10c0 3.3-3.1 6-7 6s-7-2.7-7-6V6z" fill="#8A151B" stroke="currentColor"/>
    <path d="M9 6v10c0 2 1.3 3 3 3s3-1 3-3V6" stroke="currentColor" strokeOpacity="0.3"/>
    <path d="M5 11h14" stroke="currentColor" strokeOpacity="0.3"/>
    <path d="M5 16h14" stroke="currentColor" strokeOpacity="0.3"/>
    {/* Bottom Cap */}
    <path d="M9 22h6v2H9z" fill="currentColor"/>
    {/* Tassel */}
    <path d="M12 24v6M10 25v4M14 25v4" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

export const CornerDecor = ({ className = "w-16 h-16 text-[#FDFBF7]", position = "tl" }) => {
  const rotation = {
    tl: "rotate-0",
    tr: "rotate-90",
    br: "rotate-180",
    bl: "-rotate-90"
  }[position];

  return (
    <svg className={`${className} ${rotation}`} viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Outer corner */}
      <path d="M2 2h56 M2 2v56" strokeWidth="2"/>
      {/* Inner geometric lattice */}
      <path d="M10 10h40 M10 10v40"/>
      <path d="M18 18h24 M18 18v24"/>
      <path d="M2 18h16 M18 2v16"/>
      <path d="M10 26h8 M26 10v8"/>
    </svg>
  );
};

export const ShuangXi = ({ className = "w-20 h-20 text-[#FDFBF7]" }) => (
  <div className={`flex items-center justify-center font-sans font-bold leading-none ${className}`}>
    囍
  </div>
);

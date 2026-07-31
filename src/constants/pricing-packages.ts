export interface PackageOption {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  isPopular?: boolean;
  features: string[];
}

export const PRICING_PACKAGES: PackageOption[] = [
  {
    id: 'basic',
    name: 'Paket Bronze',
    price: 99000,
    originalPrice: 150000,
    features: [
      'Aktif 6 Bulan',
      'Maksimal 100 Tamu',
      'Pilihan Tema Basic',
      'Galeri 5 Foto',
      'Form RSVP & Ucapan',
      'Navigasi Lokasi (Google Maps)',
    ],
  },
  {
    id: 'premium',
    name: 'Paket Silver (Populer)',
    price: 149000,
    originalPrice: 250000,
    isPopular: true,
    features: [
      'Aktif 1 Tahun',
      'Tamu Tanpa Batas',
      'Semua Tema Premium',
      'Galeri 15 Foto + Video',
      'Background Music Custom',
      'Digital Angpao & QRIS',
      'Countdown Timer & Calendar',
      'Generator WhatsApp Link Tamu',
    ],
  },
  {
    id: 'exclusive',
    name: 'Paket Gold (Custom)',
    price: 249000,
    originalPrice: 400000,
    features: [
      'Aktif Selamanya',
      'Custom Domain (.com / .id)',
      'Semua Fitur Paket Silver',
      'Bantu Input Data Tamu',
      'Support Prioritas 24/7',
    ],
  },
];

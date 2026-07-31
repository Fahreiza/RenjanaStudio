import { ThemeConfig } from '@/types/theme';

export const THEMES_LIST: ThemeConfig[] = [
  {
    id: 'elegant-gold',
    name: 'Royal Gold & Navy',
    category: 'ELEGANT',
    thumbnailUrl: '/themes-preview/elegant-gold.jpg',
    previewUrl: '/catalog/preview/elegant-gold',
    isPremium: false,
    colors: {
      primary: '#d4af37',
      secondary: '#0a192f',
      background: '#0a192f',
      accent: '#f3e5ab',
    },
  },
  {
    id: 'rustic-blossom',
    name: 'Rustic Botanical Blossom',
    category: 'RUSTIC',
    thumbnailUrl: '/themes-preview/rustic-blossom.jpg',
    previewUrl: '/catalog/preview/rustic-blossom',
    isPremium: true,
    colors: {
      primary: '#8b5a2b',
      secondary: '#faf6f0',
      background: '#faf6f0',
      accent: '#c99a6b',
    },
  },
  {
    id: 'java-cultural',
    name: 'Adat Jawa Classic Batik',
    category: 'TRADITIONAL',
    thumbnailUrl: '/themes-preview/java-cultural.jpg',
    previewUrl: '/catalog/preview/java-cultural',
    isPremium: true,
    colors: {
      primary: '#6a1b9a',
      secondary: '#fff8e1',
      background: '#fff8e1',
      accent: '#ab47bc',
    },
  },
];

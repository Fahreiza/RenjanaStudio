export interface ThemeConfig {
  id: string;
  name: string;
  category: 'ELEGANT' | 'RUSTIC' | 'TRADITIONAL' | 'ISLAMIC' | 'MINIMALIST';
  thumbnailUrl: string;
  previewUrl: string;
  isPremium: boolean;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    accent: string;
  };
}

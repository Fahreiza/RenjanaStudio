import type { Metadata } from 'next';
import { Cormorant_Garamond, Great_Vibes, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
});

const greatVibes = Great_Vibes({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-great-vibes',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'Renjana Studio - Undangan Nikah Online Premium & Modern',
  description: 'Platform pembuatan undangan nikah online elegan, interaktif dengan musik, RSVP, hitung mundur, galeri foto, dan amplop digital.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${greatVibes.variable} ${plusJakarta.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FAF7F2] text-[#2D3748] selection:bg-[#B76E79] selection:text-white">
        {children}
      </body>
    </html>
  );
}

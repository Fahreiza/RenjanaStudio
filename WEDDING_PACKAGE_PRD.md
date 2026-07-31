# 📋 PRD & Standard Spesifikasi Paket Undangan Pernikahan Theme-Pure

Dokumen ini adalah **Panduan Standar & PRD Wajib (Product Requirement Document)** untuk pembuatan seluruh paket tema undangan pernikahan (Instagram, YouTube, Spotify, TikTok, WhatsApp, Twitter, Pinterest, LinkedIn, Minimalis, Modern 3D, Popup Book, dll.) di aplikasi **Undangan Nikah App**.

---

## 🎯 PRINSIP UTAMA (NON-NEGOTIABLE RULES)

1. **100% Theme Purity (Kemurnian Tema)**:
   - Setiap paket tema WAJIB 100% otentik mengikuti antarmuka (UI/UX), tata warna (*accent color*), font khas, dan elemen visual platform bersangkutan.
   - DILARANG KERAS mencampur elemen visual, ikon, atau nama dari platform lain (misalnya: tidak boleh ada ikon Spotify di paket TikTok/Instagram, tidak boleh ada Youtube Shorts di paket Instagram).

2. **Wajah Pengantin Bebas Halangan**:
   - Lencana penanda (seperti `THE GROOM`, `THE BRIDE`, `VERIFIED`, dll.) DILARANG MENUTUPI WAJAH pengantin pada bingkai foto. Wajah harus selalu tampil utuh dan jelas.

3. **Struktur Kelengkapan Komponen (MANDATORY CHECKLIST)**:
   Setiap paket tema BARU yang dibuat WAJIB langsung mencakup 10 komponen inti berikut tanpa terkecuali:

---

## 🧩 CHECKLIST 10 KOMPONEN INTI SETIAP PAKET TEMA

### 1. Gate Cover Screen (`[Theme]ProfileIntro.tsx`)
- Tampilan sampul awal ketika undangan dibuka.
- Menampilkan foto pasangan, nama pengantin, tanggal pernikahan, sapaan nama tamu khusus (`Special Invitation For: [Nama Tamu]`), dan tombol utama `BUKA UNDANGAN`.

### 2. Splash Intro Animation (`[Theme]IntroAnimation.tsx`)
- Transisi animasi splash logo resmi platform (durasi ~2.2 detik) dengan efek animasi khas (glowing, 3D glitch, atau pop bounce).
- Dilengkapi efek suara audio chime / fanfare saat dibuka.

### 3. Mempelai Pria & Wanita (`[Theme]GroomBride.tsx`)
- Kartu profil pengantin Pria & Wanita.
- Menampilkan foto profil jernih, nama lengkap dengan gelar, nama kedua orang tua, username/handle media sosial, dan tombol tautan profil.

### 4. Rangkaian Acara / Jadwal (`[Theme]EventSchedule.tsx`)
- Kartu jadwal **Akad Nikah** & **Resepsi Pernikahan**.
- Menampilkan hari & tanggal, waktu pelaksanaan, nama gedung/venue, alamat lengkap, dan tombol navigasi **Google Maps**.

### 5. Countdown Timer Menyamping (`[Theme]Countdown.tsx`)
- Format hitung mundur menyamping (Horizontal Countdown).
- Memiliki 4 segmen garis indikator cerita di bagian atas.
- Angka hitung mundur (HARI | JAM | MENIT | DETIK) dipisahkan oleh garis vertikal halus.
- Dilengkapi 3 tombol ekspor kalender: **`[ Google ]`**, **`[ Apple ]`**, dan **`[ Outlook ]`**.

### 6. Kutipan Suci & Kisah Cinta (`[Theme]LoveStoryQuote.tsx`)
- Kutipan ayat suci Al-Qur'an (QS. Ar-Rum: 21) / kata mutiara pernikahan.
- *Timeline* kisah cinta (Pertama Bertemu, Komitmen, Lamaran, Menuju Akad) yang disesuaikan dengan gaya visual tema.

### 7. Galeri Foto & Video (`[Theme]PhotoGallery.tsx`)
- Kisi-kisi galeri foto & video dengan rasio aspek khas platform (misal 9:16 vertikal untuk TikTok/Shorts, 1:1 square untuk Instagram, 16:9 untuk YouTube).
- Dilengkapi modal lightbox layar penuh interaktif (misal: *vertical snap-scroll* untuk TikTok, *lightbox modal* untuk Instagram).

### 8. Form RSVP & Buku Tamu (`[Theme]RsvpForm.tsx` / `[Theme]CommentRsvp.tsx`)
- Form konfirmasi Kehadiran (Hadir / Ragu / Tidak Hadir), jumlah tamu, dan pesan doa restu.
- Disesuaikan dengan antarmuka platform (misal: simulasi DM Chat untuk IG/WA, Live Comment Drawer untuk TikTok, Tweet Thread untuk Twitter).

### 9. Amplop Digital & Hadiah (`[Theme]DigitalGift.tsx` / `[Theme]ShopGift.tsx`)
- Kartu rekening bank (BCA, Mandiri, dll.) dengan tombol salin nomor rekening instan.
- Gambar QRIS untuk scan e-wallet.
- Alamat fisik pengiriman kado pernikahan dengan tombol salin alamat.

### 10. Tiket VIP Presensi QR Code (`[Theme]QrTicket.tsx`)
- Tiket presensi tamu VIP lengkap dengan QR Code unik untuk pemindaian saat tamu tiba di lokasi acara.

---

## 🎨 IDENTITAS TEMA PLATFORM

| Platform | Brand Name | Accent Color | Fitur Khusus UX |
| :--- | :--- | :--- | :--- |
| **Instagram** | `RenjanaGram` | `#E1306C` (Magenta/Pink) | Story Highlights, Feed Grid 3-Kolom, Lightbox Modal, DM Chat RSVP, Shop Gift |
| **YouTube** | `RenjanaTube` | `#FF0000` (Red) | Channel Header, Shorts Carousel, Live Stream Comment RSVP, Store Gift |
| **Spotify** | `Spotify Edition` | `#1DB954` (Spotify Green) | Tracklist Player, Lyrics Love Story, Code Ticket |
| **TikTok** | `WeddingTok` | `#00F2FE` (Cyan) & `#FE2C55` (Magenta) | FYP 9:16 Vertical Video Feed, Vertical Snap-Scroll Lightbox, Live Comment RSVP, Shop Showcase |
| **WhatsApp** | `WhatsApp Edition` | `#25D366` (WA Green) | Chat Interface Simulation, Voice Note Player, Status Story, Share Location |
| **Twitter (X)** | `WeddingThread` | `#1DA1F2` (Twitter Blue) | Tweet Thread Timeline, Retweet/Like Counts, Poll RSVP |
| **Pinterest** | `WeddingBoard` | `#E60023` (Pinterest Red) | Masonry Pin Grid, Pin Boards, Idea Pins |
| **LinkedIn** | `WeddingConnect` | `#0A66C2` (LinkedIn Blue) | Professional Connection Card, Endorsements, Event Registration |

---
*Dokumen PRD ini dijadikan acuan otomatis untuk setiap pengembangan paket tema baru.*

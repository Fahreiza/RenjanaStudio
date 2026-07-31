<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 📌 MANDATORY WEDDING INVITATION PACKAGE RULES & PRD SPECIFICATION

When creating, updating, or working on ANY wedding invitation theme package in this repository (e.g. WhatsApp, Twitter, Pinterest, LinkedIn, Instagram, YouTube, Spotify, TikTok):

---

## 1. 🎯 STRICT THEME PURITY (100% BRAND AUTHENTICITY)
- Every package MUST be **100% theme-pure** to its target platform (branding, accent colors, typography, and UX interaction patterns).
- **NEVER CROSS-MIX**: Do NOT put YouTube Shorts in Instagram, do NOT put Spotify tracks in TikTok, do NOT put Instagram icons in WhatsApp, etc.
- Each theme MUST use its designated brand name and accent color:
  - **Instagram**: `RenjanaGram` (`#E1306C` Pink/Magenta)
  - **YouTube**: `RenjanaTube` (`#FF0000` Red)
  - **Spotify**: `Spotify Edition` (`#1DB954` Spotify Green)
  - **TikTok**: `WeddingTok` (`#00F2FE` Cyan & `#FE2C55` Magenta)
  - **WhatsApp**: `WhatsApp Edition` (`#25D366` WA Green)
  - **Twitter**: `WeddingThread` (`#1DA1F2` Twitter Blue)
  - **Pinterest**: `WeddingBoard` (`#E60023` Pinterest Red)
  - **LinkedIn**: `WeddingConnect` (`#0A66C2` LinkedIn Blue)

---

## 2. 🚫 NO FACE OVERLAYS RULE (CRITICAL VISUAL QUALITY)
- **STRICT Banning of `top-2 left-2` Badges inside photo frames**:
  - Badges such as `THE GROOM`, `THE BRIDE`, `VERIFIED`, etc. MUST NEVER cover the groom or bride's face in photo containers.
  - Place badges **inside text headers** above/below the photo or outside the image container completely.

---

## 3. 🧩 MANDATORY 10-COMPONENT CHECKLIST (MUST ALL EXIST IN EVERY PACKAGE)

For any theme package `[theme]`, you MUST build and assemble the following 10 components in `src/components/invitation/[theme]/`:

1. **`[Theme]ProfileIntro.tsx`**: Gate cover screen with guest greeting (`Special Invitation For: [Guest]`), couple names, date, and `BUKA UNDANGAN` button.
2. **`[Theme]IntroAnimation.tsx`**: 2.2-second logo splash intro animation with animated platform logo vector, brand title, and fanfare chime sound.
3. **`[Theme]GroomBride.tsx`**: Groom & Bride profile cards with full names, titles, parents' names, social links, and clean photo frames (no badges covering faces!).
4. **`[Theme]EventSchedule.tsx`**: Akad Nikah & Resepsi event cards with dates, times, venue names, addresses, and Google Maps direction buttons.
5. **`[Theme]Countdown.tsx`**: Compact horizontal countdown timer matching user's exact reference:
   - 4 top story segment progress lines (`flex-1 h-0.5 rounded-full`)
   - Horizontal numbers `78 HARI | 10 JAM | 21 MENIT | 50 DETIK` with vertical dividers
   - 3 Calendar export buttons: `[ 🗓️ Google ]`, `[ 🗓️ Apple ]`, `[ 🗓️ Outlook ]`
6. **`[Theme]LoveStoryQuote.tsx`**: Quranic quote (QS. Ar-Rum: 21) & Love story timeline.
7. **`[Theme]PhotoGallery.tsx`**: Photo & video gallery grid with theme-tailored fullscreen lightbox viewer (e.g. vertical snap-scroll for TikTok, post lightbox for IG, shorts viewer for YT).
8. **`[Theme]RsvpForm.tsx` / `[Theme]CommentRsvp.tsx`**: Platform-tailored RSVP & guest message form (e.g. DM simulation for IG/WA, Live comment drawer for TikTok, Tweet thread for Twitter).
9. **`[Theme]DigitalGift.tsx` / `[Theme]ShopGift.tsx`**: Digital envelope, bank accounts with copy buttons, QRIS barcode, and physical gift address with copy button.
10. **`[Theme]QrTicket.tsx`**: VIP guest check-in pass QR code ticket.
11. **`ClosingSection.tsx`**: Closing thank you section with matching theme accent color & watermark.

---

## 4. 🛠️ FILE NAMING & DIRECTORY CONVENTION
- Theme components folder: `src/components/invitation/[theme]/`
- Demo page route: `src/app/demo/[theme]/page.tsx`
- Always verify build with `npm run build` after editing or creating any package.

See `WEDDING_PACKAGE_PRD.md` for full PRD documentation.

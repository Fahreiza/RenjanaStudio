---
name: wedding-package-standard
description: Automatic standard checklist and rules for building complete social media wedding invitation packages (WhatsApp, Twitter, Pinterest, LinkedIn, etc.)
---

# Wedding Invitation Package Standard (PRD)

Whenever the user requests to create or work on a wedding invitation theme package:

## Mandatory 10-Component Checklist

Every theme package MUST automatically implement all 10 core components:
1. `[Theme]ProfileIntro.tsx` - Gate cover screen
2. `[Theme]IntroAnimation.tsx` - 2.2s Splash logo intro
3. `[Theme]GroomBride.tsx` - Groom & Bride cards (face badges MUST NOT cover face!)
4. `[Theme]EventSchedule.tsx` - Akad & Resepsi cards with Google Maps
5. `[Theme]Countdown.tsx` - Horizontal countdown + 4 segment lines + Google/Apple/Outlook buttons
6. `[Theme]LoveStoryQuote.tsx` - QS. Ar-Rum 21 & Love story timeline
7. `[Theme]PhotoGallery.tsx` - Gallery grid + platform lightbox
8. `[Theme]RsvpForm.tsx` - Theme-tailored RSVP form
9. `[Theme]DigitalGift.tsx` - Digital envelope & QRIS showcase
10. `[Theme]QrTicket.tsx` - VIP guest pass QR code ticket

## Strict Quality Rules
- 100% theme purity (no cross-mixing elements from other platforms).
- Photo badges placed safely outside face image boundaries.
- Build test verification (`npm run build`) before completing turn.

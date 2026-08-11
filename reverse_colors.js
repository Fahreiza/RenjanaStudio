const fs = require('fs');
const path = require('path');

const dir = 'src/components/invitation/chinese';
const exclude = ['ChineseProfileIntro.tsx', 'ChineseIntroAnimation.tsx', 'ChineseAnimatedBackground.tsx'];

const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx') && !exclude.includes(f));

files.forEach(f => {
  const p = path.join(dir, f);
  let c = fs.readFileSync(p, 'utf8');
  
  // Flip text back to light colors for a Dark Red background
  c = c.replace(/text-\[\#8A151B\] mb-2 font-serif/g, 'text-[#D4AF37] mb-2 font-serif'); // Headers to Gold
  c = c.replace(/text-\[\#8A151B\]/g, 'text-[#FDFBF7]'); // General red text to Ivory
  
  // Cards that had ivory backgrounds (bg-[#FDFBF7]) should now be dark translucent red
  c = c.replace(/bg-\[\#FDFBF7\]/g, 'bg-[#4A0A0E]/80 backdrop-blur-sm'); // Dark translucent red for cards
  
  // Borders
  c = c.replace(/border-\[\#8A151B\]\/20/g, 'border-[#D4AF37]/30');
  
  fs.writeFileSync(p, c);
  console.log('Fixed ' + f);
});

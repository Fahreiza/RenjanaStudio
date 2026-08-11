const fs = require('fs');
const path = require('path');

const dir = 'src/components/invitation/chinese';
const exclude = ['ChineseHero.tsx', 'ChineseProfileIntro.tsx', 'ChineseAnimatedBackground.tsx'];

const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx') && !exclude.includes(f));

files.forEach(f => {
  const p = path.join(dir, f);
  let c = fs.readFileSync(p, 'utf8');
  
  // Base replacements
  c = c.replace(/bg-\[\#8A151B\]/g, 'bg-[#FDFBF7]'); // Red backgrounds become Ivory
  c = c.replace(/text-\[\#FDFBF7\]/g, 'text-[#8A151B]'); // White text becomes Red
  
  // Specific tweaks
  // Red text is too harsh for small paragraphs, maybe we can use zinc-800 or 8A151B/80.
  // We'll leave it as #8A151B for now since it's the theme color.
  
  // Replace the heavy border color #D4AF37 to a thinner ruby border
  c = c.replace(/border-\[\#D4AF37\]/g, 'border-[#8A151B]/20');
  
  // If there are any drop-shadows on ivory backgrounds, they might look weird. We'll leave them for now.
  fs.writeFileSync(p, c);
  console.log('Fixed ' + f);
});

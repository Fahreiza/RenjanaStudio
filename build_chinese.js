const fs = require('fs');
const path = require('path');

const minDir = 'src/components/invitation/minimalist';
const chiDir = 'src/components/invitation/chinese';
const components = ['ProfileIntro', 'IntroAnimation', 'Hero', 'GroomBride', 'EventSchedule', 'Countdown', 'LoveStoryQuote', 'PhotoGallery', 'RsvpForm', 'DigitalGift'];

components.forEach(c => {
    let src = path.join(minDir, 'Minimalist' + c + '.tsx');
    let dest = path.join(chiDir, 'Chinese' + c + '.tsx');
    let content = fs.readFileSync(src, 'utf8');
    
    // Replace names
    content = content.replace(/Minimalist/g, 'Chinese');
    
    // Replace colors (Vintage Floral to Chinese Classic Red)
    content = content.replace(/#FDFBF7/g, '#8A151B')
                     .replace(/#e8e2d8/g, '#8A151B')
                     .replace(/#f4efe8/g, '#8A151B')
                     .replace(/#4A4036/g, '#D4AF37')
                     .replace(/#c1a784/g, '#D4AF37')
                     .replace(/#8c7b68/g, '#FDFBF7')
                     .replace(/#857053/g, '#D4AF37')
                     .replace(/#a68e68/g, '#D4AF37')
                     .replace(/#7a6b5a/g, '#C19B2E');
                     
    // Replace TEMA-01-BUNGA images with SVG Double Happiness
    const svgStr = '<span className="text-[#D4AF37] font-bold text-4xl leading-none flex items-center justify-center">囍</span>';
    content = content.replace(/<Image src="\/assets\/images\/TEMA-01-BUNGA-[^"]*" alt="[^"]*" fill className="[^"]*" \/>/g, svgStr);
    
    fs.writeFileSync(dest, content);
    console.log('Processed', dest);
});

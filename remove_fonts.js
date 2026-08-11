const fs = require('fs');
const path = require('path');
const dir = 'src/components/invitation/chinese';

fs.readdirSync(dir).filter(f => f.endsWith('.tsx')).forEach(f => {
    let p = path.join(dir, f);
    let c = fs.readFileSync(p, 'utf8');
    
    // Remove the style attribute
    c = c.replace(/style=\{\{\s*fontFamily:\s*'var\(--font-great-vibes\)'\s*\}\}/g, 'className="font-serif uppercase tracking-widest font-bold"');
    
    // Clean up if className is now duplicated
    c = c.replace(/className="([^"]*)"\s+className="([^"]*)"/g, 'className="$1 $2"');
    
    fs.writeFileSync(p, c);
    console.log('Updated ' + f);
});

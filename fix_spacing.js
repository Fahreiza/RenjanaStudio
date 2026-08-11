const fs = require('fs');
const path = require('path');

const dir = 'src/components/invitation/chinese';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(f => {
  const p = path.join(dir, f);
  let c = fs.readFileSync(p, 'utf8');
  
  // Replace the excessively padded section wrappers
  c = c.replace(/className="py-16 mx-4 my-8 rounded-3xl relative overflow-hidden bg-transparent py-8"/g, 'className="relative overflow-hidden bg-transparent px-4 py-6"');
  
  // Also check page.tsx gap
  
  fs.writeFileSync(p, c);
  console.log('Fixed spacing in ' + f);
});

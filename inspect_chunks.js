const fs = require('fs');

function inspectChunk(filename) {
  if (!fs.existsSync(filename)) return;
  const content = fs.readFileSync(filename, 'utf8');
  console.log('--- File:', filename, 'Length:', content.length);
  
  // Extract all strings that look like Arabic or event details
  const textMatches = content.match(/"[^"\\]*(?:\\.[^"\\]*)*"/g) || [];
  const interesting = new Set();
  
  for (const str of textMatches) {
    try {
      const decoded = JSON.parse(str);
      if (typeof decoded === 'string') {
        if (/[\u0600-\u06FF]/.test(decoded) || 
            decoded.includes('Zanaty') || 
            decoded.includes('Fatema') || 
            decoded.includes('wedding') || 
            decoded.includes('dress') ||
            decoded.includes('maps') ||
            decoded.includes('http') && decoded.includes('cloudinary') ||
            decoded.includes('http') && decoded.includes('chungdoi') ||
            decoded.includes('#') && decoded.length <= 9) {
          interesting.add(decoded);
        }
      }
    } catch (e) {}
  }
  
  console.log('Found interesting strings:', interesting.size);
  fs.writeFileSync(filename + '.extracted.json', JSON.stringify(Array.from(interesting), null, 2));
}

inspectChunk('chungdoi_data_97.txt');
inspectChunk('chungdoi_data_102.txt');

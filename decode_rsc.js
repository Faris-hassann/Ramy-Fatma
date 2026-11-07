const fs = require('fs');

const html = fs.readFileSync('chungdoi.html', 'utf8');
const rscMatches = html.matchAll(/self\.__next_f\.push\(\[1,"([\s\S]*?)"\]\)/g);

let fullDecoded = '';
for (const match of rscMatches) {
  try {
    const raw = match[1];
    // unescape quotes and backslashes
    const decoded = JSON.parse('"' + raw + '"');
    fullDecoded += decoded + '\n';
  } catch (e) {
    fullDecoded += match[1] + '\n';
  }
}

fs.writeFileSync('chungdoi_full_decoded.txt', fullDecoded);
console.log('Total decoded size:', fullDecoded.length);

// Let's find image URLs, locations, colors, dates, etc.
const urls = fullDecoded.match(/https?:\/\/[^\s"',;\\]+/g) || [];
console.log('Found URLs:', [...new Set(urls)].filter(u => !u.includes('w3.org') && !u.includes('schema.org')));

// Let's search for dress code or colors
const colors = fullDecoded.match(/#(?:[0-9a-fA-F]{3,8})/g) || [];
console.log('Found Hex Colors:', [...new Set(colors)]);

// Let's find sections mentioning dress, venue, details
const lines = fullDecoded.split('\n');
lines.forEach((line, i) => {
  if (line.includes('Dress') || line.includes('الزي') || line.includes('ألوان') || line.includes('اسماععليه') || line.includes('Google') || line.includes('maps')) {
    console.log(`Line ${i}:`, line.slice(0, 300));
  }
});

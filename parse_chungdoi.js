const fs = require('fs');
const html = fs.readFileSync('chungdoi.html', 'utf8');

console.log('Includes Zanaty:', html.includes('Zanaty'));
console.log('Includes Fatema:', html.includes('Fatema'));
console.log('Includes رامي:', html.includes('رامي'));

// Find occurrences of text
const regex = /(?:Zanaty|Fatema|رامي|فاطمة|حفل|Wedding|Dress|venue|location|date|November|December|October|يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/gi;
let m;
let count = 0;
while ((m = regex.exec(html)) !== null && count < 20) {
  const start = Math.max(0, m.index - 50);
  const end = Math.min(html.length, m.index + 100);
  console.log('--- MATCH:', m[0]);
  console.log(html.slice(start, end).replace(/\s+/g, ' '));
  count++;
}

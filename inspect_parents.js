const fs = require('fs');
const content = fs.readFileSync('chungdoi_full_decoded.txt', 'utf8');

const idx = content.indexOf('عمرو زناتي');
if (idx !== -1) {
  console.log(content.slice(Math.max(0, idx - 400), Math.min(content.length, idx + 800)));
}

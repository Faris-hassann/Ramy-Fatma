const fs = require('fs');
const content = fs.readFileSync('chungdoi_full_decoded.txt', 'utf8');

// Let's find sections around "veJJdXhNd8zaiqjA6", "800020", "c9254bfe", etc.
['veJJdXhNd8zaiqjA6', '800020', 'c9254bfe', 'أبنائنا', 'أعظم هدية'].forEach(term => {
  let idx = 0;
  console.log(`\n=================== SEARCH: ${term} ===================`);
  while ((idx = content.indexOf(term, idx)) !== -1) {
    const start = Math.max(0, idx - 400);
    const end = Math.min(content.length, idx + 400);
    console.log(content.slice(start, end));
    console.log('----------------------------------------------------');
    idx += term.length;
  }
});

const fs = require('fs');
const content = fs.readFileSync('chungdoi_full_decoded.txt', 'utf8');

const startStr = '"initialData":';
const idx = content.indexOf(startStr);
if (idx !== -1) {
  const jsonStart = idx + startStr.length;
  // let's grab the JSON object
  let depth = 0;
  let end = jsonStart;
  for (let i = jsonStart; i < content.length; i++) {
    if (content[i] === '{') depth++;
    else if (content[i] === '}') {
      depth--;
      if (depth === 0) {
        end = i + 1;
        break;
      }
    }
  }
  const jsonStr = content.slice(jsonStart, end);
  fs.writeFileSync('chungdoi_initialData.json', jsonStr);
  console.log('Saved chungdoi_initialData.json');
} else {
  console.log('initialData not found');
}

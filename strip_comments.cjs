const fs = require('fs');
const path = require('path');

function stripComments(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Strip JSX comments: {/* ... */} and optionally the following newline
  content = content.replace(/[ \t]*\{\/\*[\s\S]*?\*\/\}\r?\n?/g, '');
  
  // Strip single-line comments: // ... but NOT http:// or https://
  // We remove leading whitespace on that line if it's just a comment line
  content = content.replace(/^[ \t]*\/\/.*(?:\r?\n|$)/gm, ''); // Matches lines that are purely comments
  content = content.replace(/(?<!:)\/\/.*$/gm, ''); // Matches inline comments (e.g. code // comment)

  fs.writeFileSync(filePath, content, 'utf8');
}

function walkSync(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkSync(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      stripComments(fullPath);
    }
  }
}

walkSync(path.join(__dirname, 'src'));
console.log('Comments stripped successfully.');

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = __dirname;
const outputFile = path.join(rootDir, 'project_context.md');
const ignoreMap = ['node_modules', 'dist', '.git', '.vscode', 'public', '.npm', 'package-lock.json', 'export_context.mjs', 'project_context.md'];

let output = '# Frontend Architecture Context\n\nEste documento contiene todo el código relevante del proyecto de React.\n\n';

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (ignoreMap.includes(file) || file.startsWith('.')) continue; // ignore hidden files like .env or .gitignore if not needed, but wait .env might be useful? We can ignore startsWith '.' for now except if we want them. Let's just exclude git and vscode.
    
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      traverse(fullPath);
    } else {
      const ext = path.extname(file);
      const allowExts = ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.html', '.md'];
      if (!allowExts.includes(ext) && ext !== '') continue;
      
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        const relPath = path.relative(rootDir, fullPath);
        // Skip package-lock.json just in case
        if (relPath === 'package-lock.json') continue;
        
        let mdLang = ext.replace('.', '');
        if (mdLang === 'tsx' || mdLang === 'ts') mdLang = 'typescript';
        if (mdLang === 'jsx' || mdLang === 'js') mdLang = 'javascript';
        
        output += `## Archivo: ${relPath}\n\`\`\`${mdLang}\n${content}\n\`\`\`\n\n`;
      } catch (err) {
        console.error(`Could not read ${fullPath}`);
      }
    }
  }
}

traverse(rootDir);
fs.writeFileSync(outputFile, output);
console.log(`Contexto exportado exitosamente a ${outputFile}`);

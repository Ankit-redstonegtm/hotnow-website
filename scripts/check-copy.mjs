import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const roots = process.argv.slice(2);
const scanRoots = roots.length > 0 ? roots : ['src', 'README.md', 'public', '.env.example'];

const bannedPhrases = [
  'ai-powered prospecting',
  'revolutionary platform',
  'supercharge your pipeline',
  'unlock growth',
  'seamless integration',
  'cutting-edge technology',
  'intelligent lead generation',
  'hyper-personalized outreach',
  'leverage intent signals',
  'next-generation gtm',
  'transform your sales process',
  'actionable insights',
  'data-driven growth',
  'intent signals',
  'clay workflows',
  'gtm engineering',
  'agentic research',
  'technographics',
];

const bannedWords = ['\\bICP\\b', '\\bTAM\\b', '\\benrichment\\b', '\\bAI\\b'];

const extraFlags = [
  '\\u2014',
  '\\u2013',
  '&mdash;',
  '&ndash;',
  '&#8211;',
  '&#8212;',
  '\\bguarantee\\b',
  '\\bdiscount\\b',
  '\\btestimonial\\b',
  '\\bday trial\\b',
  '\\bfree for \\d',
];

function filesUnder(path) {
  const info = statSync(path);
  if (info.isFile()) return [path];
  const out = [];
  for (const entry of readdirSync(path)) {
    if (entry === 'node_modules' || entry === 'dist' || entry === '.git') continue;
    out.push(...filesUnder(join(path, entry)));
  }
  return out;
}

const textExt = new Set(['.ts', '.astro', '.css', '.md', '.mjs', '.svg', '.txt', '.example', '.html']);
const files = scanRoots.flatMap(filesUnder).filter((file) => {
  if (file.endsWith('.png') || file.endsWith('.woff2')) return false;
  const ext = extname(file);
  if (ext === '.example' || file.endsWith('.env.example')) return true;
  return textExt.has(ext) || ext === '';
});

const problems = [];

for (const file of files) {
  const text = readFileSync(file, 'utf8');
  const lower = text.toLowerCase();
  if (text.includes('—') || text.includes('–')) {
    problems.push(`${file}: em dash or en dash`);
  }
  for (const phrase of bannedPhrases) {
    if (lower.includes(phrase)) problems.push(`${file}: banned phrase "${phrase}"`);
  }
  for (const pattern of [...bannedWords, ...extraFlags]) {
    const match = text.match(new RegExp(pattern, 'i'));
    if (match) problems.push(`${file}: flagged "${match[0]}"`);
  }
}

if (problems.length) {
  console.error(problems.join('\n'));
  process.exit(1);
}

console.log(`Copy check passed (${files.length} files).`);

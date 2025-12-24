import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://iog26.humanjuan.com';
const BASE_URL_SERVER = 'https://golyn.humanjuan.com';

// Only include canonical paths in sitemap (hash fragments are ignored by crawlers)
const routes = [
  '/',
  '/privacy/iog26/en/v1',
  '/privacy/iog26/es/v1',
  '/privacy/iog26/it/v1',
];

const today = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
routes.map((route) =>
  `  <url>\n` +
  `    <loc>${BASE_URL}${route}</loc>\n` +
  `    <lastmod>${today}</lastmod>\n` +
  `    <changefreq>monthly</changefreq>\n` +
  `    <priority>${route === '/' ? '1.0' : '0.7'}</priority>\n` +
  `  </url>`
).join('\n') +
`\n</urlset>\n`;

// Expanded robots.txt to explicitly allow search engines and AI crawlers
const robotsContent = `# robots.txt generated at build time\n` +
`# Primary crawl policy\n` +
`User-agent: *\n` +
`Allow: /\n` +
`\n` +
`# Sitemaps\n` +
`Sitemap: ${BASE_URL}/sitemap.xml\n` +
`\n` +
`# Preferred host\n` +
`Host: iog26.humanjuan.com\n` +
`\n` +
`# AI/LLM crawlers – explicitly allowed for indexing/training\n` +
`User-agent: GPTBot\n` +
`Allow: /\n` +
`\n` +
`User-agent: Google-Extended\n` +
`Allow: /\n` +
`\n` +
`User-agent: CCBot\n` +
`Allow: /\n` +
`\n` +
`User-agent: ClaudeBot\n` +
`Allow: /\n` +
`\n` +
`User-agent: anthropic-ai\n` +
`Allow: /\n` +
`\n` +
`User-agent: PerplexityBot\n` +
`Allow: /\n` +
`\n` +
`User-agent: Applebot-Extended\n` +
`Allow: /\n` +
`\n` +
`# You can disallow any path below if needed, e.g. APIs or private areas\n` +
`# Disallow: /api/\n`;

const humansContent = `/* TEAM */\n` +
`Developer: Juan Alejandro\n` +
`GitHub: https://github.com/humanjuan\n` +
`LinkedIn: https://www.linkedin.com/in/japc27\n` +
`X (Twitter): https://x.com/humanjuan_dev\n` +
`Website: ${BASE_URL}\n` +
`Server: ${BASE_URL_SERVER}\n` +
`Location: Chile\n` +
`\n` +
`/* SITE */\n` +
`Last update: ${today}\n` +
`Technology: JavaScript, TypeScript, HTML, CSS, Tailwind CSS, Gin, Golang, Python, Kotlin, Android, Docker, React, Vite, HTTPS, SSL (Let's Encrypt), Framer Motion, JWT, Web Workers, Responsive Design, SEO Optimization\n`;

// ai.txt – emerging standard for AI crawlers (complements robots.txt)
const aiTxtContent = `# ai.txt – machine-readable policy for AI crawlers\n` +
`# See: https://ai.txt (community draft)\n` +
`Owner: Juan Alejandro <juan.alejandro@humanjuan.com>\n` +
`Policies: training=allow; indexing=allow; caching=allow\n` +
`\n` +
`User-agent: *\n` +
`Allow: /\n` +
`\n` +
`User-agent: GPTBot\n` +
`Allow: /\n` +
`\n` +
`User-agent: Google-Extended\n` +
`Allow: /\n` +
`\n` +
`User-agent: CCBot\n` +
`Allow: /\n` +
`\n` +
`User-agent: ClaudeBot\n` +
`Allow: /\n` +
`\n` +
`User-agent: anthropic-ai\n` +
`Allow: /\n` +
`\n` +
`User-agent: PerplexityBot\n` +
`Allow: /\n` +
`\n` +
`User-agent: Applebot-Extended\n` +
`Allow: /\n`;

const outDir = path.join(__dirname, 'dist');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const sitemapOutputPath = path.join(outDir, 'sitemap.xml');
const robotsOutputPath = path.join(outDir, 'robots.txt');
const humansOutputPath = path.join(outDir, 'humans.txt');
const aiTxtOutputPath = path.join(outDir, 'ai.txt');

fs.writeFileSync(sitemapOutputPath, sitemap, 'utf8');
fs.writeFileSync(robotsOutputPath, robotsContent, 'utf8');
fs.writeFileSync(humansOutputPath, humansContent, 'utf8');
fs.writeFileSync(aiTxtOutputPath, aiTxtContent, 'utf8');

console.log('sitemap.xml -->', sitemapOutputPath);
console.log('robots.txt -->', robotsOutputPath);
console.log('humans.txt -->', humansOutputPath);
console.log('ai.txt -->', aiTxtOutputPath);
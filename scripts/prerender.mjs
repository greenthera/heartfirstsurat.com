import { readFileSync, writeFileSync, mkdirSync, cpSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'

const CLIENT = 'dist/client'
const OUT = 'dist'
const SITE = 'https://heartfirstsurat.com'

const template = readFileSync(join(CLIENT, 'index.html'), 'utf8')

const mod = await import(pathToFileURL(join(process.cwd(), 'dist/server/entry-server.js')).href)
const { render, prerenderPaths, legacyRedirectMap } = mod
const paths = prerenderPaths

// Promote the client build to the dist root (assets + index.html).
cpSync(CLIENT, OUT, { recursive: true })

function pageHtml(head, html) {
  return template
    .replace(/<title>[\s\S]*?<\/title>\s*/, '')
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', html)
}

// Which clean routes own a "<name>.html" URL (so we must NOT put a redirect stub there).
const ownedHtml = new Set(
  paths.filter(p => p !== '/').map(p => p.slice(1) + '.html'),
)

// 1. Prerender each canonical clean route to BOTH dist/<seg>.html and dist/<seg>/index.html
//    so `/about`, `/about/` and `/about.html` all serve the real page on any static host.
for (const path of paths) {
  const { html, head } = await render(path)
  const body = pageHtml(head, html)
  if (path === '/') {
    writeFileSync(join(OUT, 'index.html'), body)
    console.log('prerendered', join(OUT, 'index.html'))
    continue
  }
  const seg = path.slice(1)
  for (const file of [join(OUT, seg + '.html'), join(OUT, seg, 'index.html')]) {
    mkdirSync(dirname(file), { recursive: true })
    writeFileSync(file, body)
    console.log('prerendered', file)
  }
}

// 2. 404 page.
{
  const { html, head } = await render('/__not_found__')
  writeFileSync(join(OUT, '404.html'), pageHtml(head, html))
  console.log('prerendered', join(OUT, '404.html'))
}

// 3. Redirect stubs for OLD paths that differ from a clean route's own .html.
for (const [from, to] of Object.entries(legacyRedirectMap)) {
  const name = from.slice(1)
  if (name === 'index.html') continue // dist/index.html IS the site root — never a stub
  if (ownedHtml.has(name)) continue // e.g. /about.html already serves the real /about page
  const stub = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>Redirecting…</title>
<link rel="canonical" href="${SITE}${to}">
<meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0; url=${to}">
</head><body>Redirecting to <a href="${to}">${to}</a>…
<script>location.replace(${JSON.stringify(to)})</script></body></html>\n`
  const file = join(OUT, name)
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, stub)
  console.log('redirect stub', file, '->', to)
}

// 4. sitemap.xml with clean URLs.
const urls = paths
  .map(p => `  <url><loc>${SITE}${p === '/' ? '/' : p}</loc></url>`)
  .join('\n')
writeFileSync(
  join(OUT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)
console.log('wrote sitemap.xml')

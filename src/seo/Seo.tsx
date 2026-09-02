import { createContext, useContext, useEffect, type ReactNode } from 'react'

export type SeoSink = { tags: string[] }
export type SeoProps = {
  title: string
  description: string
  canonical: string
  jsonLd?: object
}

const SeoContext = createContext<SeoSink | null>(null)

export function SeoProvider({ sink, children }: { sink: SeoSink; children: ReactNode }) {
  return <SeoContext.Provider value={sink}>{children}</SeoContext.Provider>
}

const SITE = (import.meta.env.VITE_SITE_URL || 'https://heartfirstsurat.com').replace(/\/$/, '')
const OG_IMAGE = `${SITE}/og-cover.png`

function esc(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function tagsFor({ title, description, canonical, jsonLd }: SeoProps): string[] {
  const url = SITE + canonical
  const t = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}"/>`,
    `<link rel="canonical" href="${url}"/>`,
    `<meta property="og:type" content="website"/>`,
    `<meta property="og:site_name" content="HeartFirst Surat"/>`,
    `<meta property="og:title" content="${esc(title)}"/>`,
    `<meta property="og:description" content="${esc(description)}"/>`,
    `<meta property="og:url" content="${url}"/>`,
    `<meta property="og:image" content="${OG_IMAGE}"/>`,
    `<meta name="twitter:card" content="summary_large_image"/>`,
  ]
  if (jsonLd) {
    t.push(`<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`)
  }
  return t
}

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

function setJsonLd(obj?: object) {
  document.head.querySelector('script[type="application/ld+json"][data-dynamic]')?.remove()
  if (!obj) return
  const s = document.createElement('script')
  s.type = 'application/ld+json'
  s.dataset.dynamic = 'true'
  s.textContent = JSON.stringify(obj)
  document.head.appendChild(s)
}

export function Seo(props: SeoProps) {
  const sink = useContext(SeoContext)
  if (sink) sink.tags.push(...tagsFor(props))

  useEffect(() => {
    document.title = props.title
    setMeta('name', 'description', props.description)
    setLink('canonical', SITE + props.canonical)
    setMeta('property', 'og:title', props.title)
    setMeta('property', 'og:description', props.description)
    setMeta('property', 'og:url', SITE + props.canonical)
    setJsonLd(props.jsonLd)
  }, [props.title, props.description, props.canonical, props.jsonLd])

  return null
}

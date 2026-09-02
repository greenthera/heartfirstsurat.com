// Resolve a public asset path against the deploy base (so images work whether the
// site is served from '/' or a GitHub Pages sub-path like '/heartfirstsurat.com/').
export function asset(path: string): string {
  return import.meta.env.BASE_URL + path.replace(/^\/+/, '')
}

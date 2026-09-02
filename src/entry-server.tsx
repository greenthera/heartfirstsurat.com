import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import { SeoProvider, type SeoSink } from './seo/Seo'

export { routeList, prerenderPaths, legacyRedirectMap } from './routes'

const basename = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')

export async function render(url: string): Promise<{ html: string; head: string }> {
  const sink: SeoSink = { tags: [] }
  // StaticRouter with a basename needs the location to include it.
  const location = basename && !url.startsWith(basename + '/') ? basename + url : url
  const html = renderToString(
    <StrictMode>
      <SeoProvider sink={sink}>
        <StaticRouter basename={basename || undefined} location={location}>
          <App />
        </StaticRouter>
      </SeoProvider>
    </StrictMode>,
  )
  return { html, head: sink.tags.join('\n    ') }
}

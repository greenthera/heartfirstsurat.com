import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import { SeoProvider, type SeoSink } from './seo/Seo'

export { routeList, prerenderPaths, legacyRedirectMap } from './routes'

export async function render(url: string): Promise<{ html: string; head: string }> {
  const sink: SeoSink = { tags: [] }
  const html = renderToString(
    <StrictMode>
      <SeoProvider sink={sink}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </SeoProvider>
    </StrictMode>,
  )
  return { html, head: sink.tags.join('\n    ') }
}

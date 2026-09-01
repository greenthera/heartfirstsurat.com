import type { ReactElement } from 'react'
import { Navigate, Route } from 'react-router'
import Home from '@/routes/Home'
import About from '@/routes/About'
import Career from '@/routes/Career'
import Publications from '@/routes/Publications'
import Facilities from '@/routes/Facilities'
import Services from '@/routes/Services'
import Research from '@/routes/Research'
import ReachUs from '@/routes/ReachUs'

export type AppRoute = { path: string; element: ReactElement }

// Clean, canonical URLs (no .html).
export const routeList: AppRoute[] = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/career-highlights', element: <Career /> },
  { path: '/scientific-publications', element: <Publications /> },
  { path: '/facilities', element: <Facilities /> },
  { path: '/services', element: <Services /> },
  { path: '/research', element: <Research /> },
  { path: '/reach-us', element: <ReachUs /> },
]

// Old .html paths (and merged sub-pages) -> permanent client redirect to the clean URL.
const redirectMap: Record<string, string> = {
  '/index.html': '/',
  '/home.html': '/',
  '/about.html': '/about',
  '/career-Hightlight.html': '/career-highlights',
  '/career-highlight.html': '/career-highlights',
  '/experience.html': '/career-highlights',
  '/trials.html': '/career-highlights',
  '/scientific-publications.html': '/scientific-publications',
  '/facilities.html': '/facilities',
  '/services.html': '/services',
  '/research.html': '/research',
  '/teachings-workshops.html': '/research',
  '/students-dissertations.html': '/research',
  '/reach-us.html': '/reach-us',
}

export const legacyRedirectMap = redirectMap

export const LegacyRedirects: ReactElement[] = Object.entries(redirectMap).map(([from, to]) => (
  <Route key={from} path={from} element={<Navigate to={to} replace />} />
))

export const prerenderPaths = routeList.map(r => r.path)

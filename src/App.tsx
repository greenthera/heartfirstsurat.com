import { Routes, Route } from 'react-router'
import ScrollToTop from '@/components/ScrollToTop'
import Rail from '@/components/Rail'
import ContactBar from '@/components/ContactBar'
import Footer from '@/components/Footer'
import NotFound from '@/routes/NotFound'
import { routeList, LegacyRedirects } from '@/routes'

export default function App() {
  return (
    <div className="site-shell min-h-screen overflow-x-clip lg:pl-[220px]">
      <ScrollToTop />
      <Rail />
      <div className="flex min-h-screen min-w-0 flex-col">
        <main className="min-w-0 flex-1 pt-14 lg:pt-0">
          <Routes>
            {routeList.map(r => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
            {LegacyRedirects}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <ContactBar />
        <Footer />
      </div>
    </div>
  )
}

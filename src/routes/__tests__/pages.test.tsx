import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { SeoProvider } from '@/seo/Seo'
import Home from '@/routes/Home'
import About from '@/routes/About'
import Career from '@/routes/Career'
import Publications from '@/routes/Publications'
import Facilities from '@/routes/Facilities'
import Services from '@/routes/Services'
import Research from '@/routes/Research'
import ReachUs from '@/routes/ReachUs'
import { publications } from '@/content/publications'

function wrap(ui: React.ReactNode) {
  return render(
    <SeoProvider sink={{ tags: [] }}>
      <MemoryRouter>{ui}</MemoryRouter>
    </SeoProvider>,
  )
}

describe('Home', () => {
  it('shows name, credential line, heading, 7 quick links and a stat', () => {
    wrap(<Home />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Dr. Atul D. Abhyankar')
    expect(screen.getByText(/MD, DM, FACC, FSCAI, FAPSIC, FCSI, FISE/)).toBeInTheDocument()
    expect(screen.getByText(/Most Senior & Experienced Interventional Cardiologist/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Know about your Doctor' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Recent Interesting Cases & CMEs/ })).toBeInTheDocument()
    expect(screen.getByText('17,000+')).toBeInTheDocument()
  })
})

describe('About', () => {
  it('renders masthead and the 8 resources', () => {
    wrap(<About />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Know About/i)
    expect(screen.getByText(/Philanthropy & Editorial/)).toBeInTheDocument()
  })
})

describe('Career', () => {
  it('renders highlights, CV rows and both tables', () => {
    wrap(<Career />)
    expect(screen.getByText(/more than 17000 interventions/i)).toBeInTheDocument()
    expect(screen.getByText('Nationality')).toBeInTheDocument()
    expect(screen.getByText('25th September 1961')).toBeInTheDocument()
    const res = screen.getByRole('table', { name: /residency/i })
    expect(within(res).getAllByRole('row')).toHaveLength(7)
    const trials = screen.getByRole('table', { name: /multicentre/i })
    expect(within(trials).getByText('Rivaroxaban')).toBeInTheDocument()
  })
})

describe('Publications', () => {
  it('renders every entry', () => {
    wrap(<Publications />)
    expect(screen.getAllByRole('listitem').length).toBeGreaterThanOrEqual(publications.length)
    expect(screen.getByText(publications[0].text.slice(0, 25), { exact: false })).toBeInTheDocument()
  })
})

describe('Facilities', () => {
  it('shows address, timing, 7 facilities, numbers and map link', () => {
    wrap(<Facilities />)
    expect(screen.getByText(/201 Milestone Leone/)).toBeInTheDocument()
    expect(screen.getByText(/10:00 AM–12:00 Noon/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /261 2472211/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Open clinic location/i })).toBeInTheDocument()
  })
})

describe('Services', () => {
  it('lists 5 attachments and 8 procedure images', () => {
    wrap(<Services />)
    expect(screen.getByText(/Mahavir Heart Institute, Ring Road, Athwagate, Surat/)).toBeInTheDocument()
    expect(screen.getByText(/United Green Hospital/)).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(8)
  })
})

describe('Research', () => {
  it('renders every source heading', () => {
    wrap(<Research />)
    for (const h of [
      'Clinical Research',
      'Academic Activities',
      'Student Dissertations',
      'Teaching Programs & Workshops',
    ]) {
      expect(screen.getByRole('heading', { name: h })).toBeInTheDocument()
    }
  })
})

describe('ReachUs', () => {
  it('shows emergency guidance, both number sets and no form', () => {
    const { container } = wrap(<ReachUs />)
    expect(screen.getByText(/What to do in an Emergency Situation/i)).toBeInTheDocument()
    expect(screen.getByText(/Call 108/i)).toBeInTheDocument()
    expect(screen.getByText(/At Mahavir Heart Institute/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /261-2290003/ })).toBeInTheDocument()
    expect(container.querySelector('form')).toBeNull()
  })
})

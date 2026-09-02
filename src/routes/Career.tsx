import { Link } from 'react-router'
import { Seo } from '@/seo/Seo'
import { metaFor } from '@/seo/siteMeta'
import Masthead from '@/components/Masthead'
import Section from '@/components/Section'
import DefinitionList from '@/components/DefinitionList'
import NumberedList from '@/components/NumberedList'
import TrialsTable from '@/components/TrialsTable'
import { cv, careerHighlights } from '@/content/cv'
import { publications } from '@/content/publications'

export default function Career() {
  return (
    <>
      <Seo {...metaFor('/career-highlights')} />
      <Masthead n="03" eyebrow="Experience & Credentials" title="Career" accent="Highlights" />

      <Section eyebrow="Overview" title="Career highlights">
        <NumberedList items={careerHighlights} />
      </Section>

      <Section eyebrow="Curriculum vitae" title="Personal & professional details">
        <DefinitionList rows={cv.details} />
      </Section>

      <Section title="Academic Achievements">
        <NumberedList items={cv.academicAchievements} />
      </Section>
      <Section title="Best Paper Awards">
        <NumberedList items={cv.bestPaperAwards} />
      </Section>
      <Section title="Other Awards">
        <NumberedList items={cv.otherAwards} />
      </Section>
      <Section title="Scholarships / Fellowships">
        <NumberedList items={cv.scholarships} />
      </Section>
      <Section title="Educational Detail">
        <NumberedList items={cv.educationalDetail} />
      </Section>

      <Section title="Residency Training">
        <div className="max-w-full overflow-x-auto">
          <table
            aria-label="Residency training"
            className="w-full min-w-[560px] border-collapse text-left text-sm"
          >
            <thead>
              <tr className="label border-b border-line text-mute">
                <th className="py-3 pr-4">Position</th>
                <th className="py-3 pr-4">Institution</th>
                <th className="py-3">Dates</th>
              </tr>
            </thead>
            <tbody>
              {cv.residency.map((r, i) => (
                <tr key={i} className="border-b border-line/60">
                  <td className="py-3 pr-4">
                    {r.role}
                    {r.teaching && <span className="text-indigo"> *</span>}
                  </td>
                  <td className="py-3 pr-4 text-mute">{r.institution}</td>
                  <td className="py-3 text-mute">{r.dates}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-mute">* Teaching posts</p>
      </Section>

      {cv.experience.map(x => (
        <Section key={x.heading} eyebrow={x.period} title={x.heading}>
          {x.blocks.length > 0 && (
            <div className="space-y-4">
              {x.blocks.map((b, i) => (
                <p key={i} className="font-serif text-[15px] leading-relaxed">
                  {b.label && <span className="label mr-2 text-indigo">{b.label}</span>}
                  {b.text}
                </p>
              ))}
            </div>
          )}
        </Section>
      ))}

      <Section title="Positions Held">
        <NumberedList items={cv.positionsHeld} />
      </Section>
      <Section title="Fellowships">
        <NumberedList items={cv.fellowships} />
      </Section>
      <Section title="Memberships">
        <NumberedList items={cv.memberships} />
      </Section>
      <Section title="Extracurricular Activities and Organisational Experience">
        <NumberedList items={cv.extracurricular} />
      </Section>

      <Section eyebrow="Scientific Publications" title={`${publications.length} papers, abstracts & chapters`}>
        <p className="font-serif text-[15px] leading-relaxed text-ink">
          The complete list of {publications.length} peer-reviewed publications, abstracts and book
          chapters (1986–2020) is on the{' '}
          <Link to="/scientific-publications" className="text-indigo hover:underline">
            Scientific Publications
          </Link>{' '}
          page.
        </p>
      </Section>

      <Section title="Interventional Experience, Special Skills and Contributions">
        <NumberedList items={cv.interventionalExperience} />
      </Section>

      <Section title="Research Projects and Experience in Clinical Investigations">
        <NumberedList items={cv.researchProjects} />
        <h3 className="label mt-8 text-indigo">Principal Investigator for First-in-Man Stent Trials</h3>
        <NumberedList items={cv.firstInManTrials} />
        <h3 className="label mt-8 text-indigo">
          Principal Investigator for Phase-4 Trials and Stent Registries
        </h3>
        <NumberedList items={cv.phase4Trials} />
      </Section>

      <Section eyebrow="Research leadership" title="Multicentre National & Global Trials">
        <TrialsTable />
      </Section>

      <Section title="Editorial Consultant / Reviewer Positions">
        <NumberedList items={cv.editorialPositions} />
      </Section>
    </>
  )
}

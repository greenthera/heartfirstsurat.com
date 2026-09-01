import { Seo } from '@/seo/Seo'
import { metaFor } from '@/seo/siteMeta'
import Masthead from '@/components/Masthead'
import Section from '@/components/Section'
import Gallery from '@/components/Gallery'
import NumberedList from '@/components/NumberedList'
import { services } from '@/content/services'

export default function Services() {
  return (
    <>
      <Seo {...metaFor('/services')} />
      <Masthead n="06" eyebrow="Hospitals & Procedures" title="Hospital" accent="Attachments" />

      <Section eyebrow="Attachments" title="Where Dr. Abhyankar practises">
        <NumberedList items={services.attachments} />
      </Section>

      <Section eyebrow="Cath lab" title="Procedures Performed">
        <Gallery images={services.procedureSlides} altPrefix="Procedure" />
      </Section>
    </>
  )
}

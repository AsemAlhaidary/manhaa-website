import { useEffect } from 'react'

import { config } from '../data'
import { ProjectsSection } from '../components'
import { SectionHeading } from '../components/elements'

export default function Projects() {
  useEffect(() => {
    document.title = config.pages.projects.title + ' - ' + config.siteName
  }, [])

  return (
    <section className='container projects'>
      <div className='row wrapper'>
        <SectionHeading title={config.pages.projects.title} />
        <ProjectsSection />
      </div>
    </section>
  );
}
import { useEffect } from 'react'

import { config } from '../data'
import { ProjectsSection } from '../components'
import { SectionHeading } from '../components/elements'

export default function Projects({ theme }) {
  useEffect(() => {
    document.title = config.pages.projects.title + ' - ' + config.siteName

    const htmlElement = document.documentElement
    htmlElement.setAttribute('data-theme', theme)

    // Cleanup function to remove the data-theme attribute when the component unmounts
    return () => {
      htmlElement.removeAttribute('data-theme')
    }
  }, [theme])

  return (
    <section className='container projects'>
      <div className='row wrapper'>
        <SectionHeading title={config.pages.projects.title} />
        <ProjectsSection />
      </div>
    </section>
  );
}
import { useEffect } from 'react'

import './projects.scss'
import ProjectsSection from './ProjectsSection'
import { SectionHeading } from '../../components/elements'
import { useConfig } from '../../hooks'

export default function Projects({ theme }) {
  const { config, loading, error } = useConfig()

  useEffect(() => {
    if (!config) return

    document.title = config.pages.projects.title + ' - ' + config.siteName

    const htmlElement = document.documentElement
    htmlElement.setAttribute('data-theme', theme)

    // Cleanup function to remove the data-theme attribute when the component unmounts
    return () => {
      htmlElement.removeAttribute('data-theme')
    }
  }, [theme, config])

  if (loading) return null
  if (error) return <div className='error-screen'>خطأ في تحميل الإعدادات: {error.message}</div>

  return (
    <section className='container projects decorator-top-right decorator-bottom-left'>
      <div className='row wrapper'>
        <SectionHeading title={config.pages.projects.title} />
        <ProjectsSection />
      </div>
    </section>
  );
}
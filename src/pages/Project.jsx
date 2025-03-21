import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Button, CategoriesList } from '../components/elements'
import { useConfig } from '../components/ConfigLoader'

export default function Project({ theme }) {
  const { config, loading, error } = useConfig()
  const { projectId } = useParams()

  const project = useMemo(() =>
    config?.siteContent?.projects?.projects.find(
      p => p.title === decodeURIComponent(projectId)
    ) || null, [config?.siteContent?.projects?.projects, projectId])

  useEffect(() => {
    if (!config) return

    document.title = (project) ? project.title : config.pages.noMatch.title + ' - ' + config.siteName

    const htmlElement = document.documentElement
    htmlElement.setAttribute('data-theme', theme)

    // Cleanup function to remove the data-theme attribute when the component unmounts
    return () => {
      htmlElement.removeAttribute('data-theme')
    }
  }, [theme, project, config])

  if (loading) {
    return null
  }
  if (error) {
    return <div className='error-screen'>خطأ في تحميل الإعدادات: {error.message}</div>
  }

  if (!project) return <div>هذا المشروع غير موجود</div>

  return (
    <section className='container project decorator-top-right decorator-bottom-left'>
      <div className='row wrapper'>
        <div
          data-aos='fade-up'
          data-aos-delay='200'
          className='col project-headlines'
        >
          <div className='project-text'>
            <span role='heading' aria-level='6' className='h6 heading-font'>{project.customer}</span>
            <span role='heading' aria-level='2' className='h2 heading-font'>{project.title}</span>
          </div>
          <CategoriesList categories={project.categories} />
        </div>
        <div
          data-aos='fade-up'
          data-aos-delay='200'
          className='col img-sect'
        >
          <img
            src={project.thumbnail}
            alt={project.title}
            className='project-image'
            loading='lazy'
          />
        </div>
        <div
          data-aos='fade-up'
          data-aos-delay='200'
          className='col details-sect'
        >
          <div className='project-details'>
            <span role='heading' aria-level='6' className='h6 heading-font'>{project.title}</span>
            <span role='heading' aria-level='2' className='h2 heading-font'>{project.title}</span>
          </div>
          <div className='meta'>
            <img
              src={project.logo}
              alt={project.title}
              className='client-logo'
              loading='lazy'
            />
          </div>
        </div>
        <div
          data-aos='fade-up'
          data-aos-delay='200'
          className='col'
        >
          <p className='details-text content-font'>{project.description}</p>
        </div>
        <div
          data-aos='fade-up'
          data-aos-delay='200'
          className='col'
        >
          <Button
            text="رجوع إلى المشاريع"
            variant="primary"
            action={config.pages.projects.link}
          />
        </div>
      </div>
    </section>
  )
}
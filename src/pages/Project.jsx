import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { config } from '../data'
import { Button, CategoriesList } from '../components/elements'

export default function Project({ theme }) {
  const { projectId } = useParams()
  const project = config.siteContent.projects.projects.find(
    p => p.title === decodeURIComponent(projectId)
  )

  useEffect(() => {
    document.title = (project) ? project.title : config.pages.noMatch.title + ' - ' + config.siteName

    const htmlElement = document.documentElement
    htmlElement.setAttribute('data-theme', theme)

    // Cleanup function to remove the data-theme attribute when the component unmounts
    return () => {
      htmlElement.removeAttribute('data-theme')
    }
  }, [theme, project])

  if (!project) return <div>هذا المشروع غير موجود</div>

  return (
    <section className='container project'>
      <div className='row wrapper'>
        <div className='col project-headlines'>
          <div className='project-text'>
            <span role='heading' aria-level='6' className='h6 heading-font'>{project.customer}</span>
            <span role='heading' aria-level='2' className='h2 heading-font'>{project.title}</span>
          </div>
          <CategoriesList categories={project.categories} />
        </div>
        <div className='col img-sect'>
          <img
            src={project.thumbnail}
            alt={project.title}
            className='project-image'
            loading='lazy'
          />
        </div>
        <div className='col details-sect'>
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
        <div className='col'>
          <p className='details-text content-font'>{project.description}</p>
        </div>
        <div className='col'>
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
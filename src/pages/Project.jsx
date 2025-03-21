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
        <div className='col'>
          <div className='project-text'>
            <h4 className='h4'>{project.title}</h4>
          </div>
          <CategoriesList categories={project.categories} />
        </div>
        <div className='col img-col'>
          <img
            src={project.thumbnail}
            alt={project.title}
            className='main-image'
          />
        </div>
        <div className='col details-col'>
          <h1 className='h1'>{project.title}</h1>
          <div className='meta'>
            <img
              src={project.logo}
              alt={project.title}
              className='client-logo'
            />
            <div className='categories'>
              {project.categories.map((category, index) => (
                <span key={index} className='category'>{category}</span>
              ))}
            </div>
          </div>
          <p className='description'>{project.description}</p>
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
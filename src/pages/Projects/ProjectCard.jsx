import { Link } from 'react-router-dom'

import { CategoriesList } from '../../components/elements'
import { useConfig } from '../../hooks'

export default function ProjectCard({ project, className }) {
  const { config, loading, error } = useConfig()
  if (loading) return null
  if (error) return <div className='error-screen'>خطأ في تحميل الإعدادات: {error.message}</div>

  // Create URL-friendly ID
  const projectId = encodeURIComponent(project.title)

  return (
    <div
      data-aos='fade-up'
      data-aos-delay='200'
      className={`card project-card${className}`}
    >
      <div className='details-sect'>
        <img className='logo' src={project.logo} alt={project.title} title={project.title} loading='lazy' />
        <span role='heading' aria-level='4' className='h4 heading-font'>{project.title}</span>
        <CategoriesList categories={project.categories} />
      </div>
      <div className='img-sect'>
        <Link to={`${config.pages.project.link}/${projectId}`}>
          <img 
            className='thumbnail' 
            src={project.thumbnail} 
            alt={project.title} 
            loading='lazy' 
          />
        </Link>
      </div>
    </div>
  )
}
import { Link } from 'react-router-dom'
import { CategoriesList } from '../../components/elements'
import { useConfig } from '../../hooks'

export default function ProjectCard({ project, className }) {
  const { config, loading, error } = useConfig()
  if (loading) return null
  if (error) return <div className='error-screen'>خطأ في تحميل الإعدادات: {error.message}</div>

  const projectId = encodeURIComponent(project.title)

  return (
    <div className={`card project-card${className}`} data-aos='fade-up' data-aos-delay='200'>
      <div className='details-sect'>
        <Link
          to={`${config.pages.project.link}/${projectId}`}
          className='project-card-link'
        >
          <img 
            className='logo' 
            src={project.logo} 
            alt={project.title} 
            title={project.title} 
            loading='lazy' 
          />
          <span role='heading' aria-level='4' className='h4 heading-font'>
            {project.title}
          </span>
        </Link>
        <CategoriesList categories={project.categories} isLink={false} />
      </div>
      <div className='media-sect'>
        <Link
          to={`${config.pages.project.link}/${projectId}`}
          className='media-link'
        >
          {project.mediaType === 'video' ? (
            <iframe className='video' src={project.media} />
          ) : (
            <img className='thumbnail' src={project.media} alt={project.title} loading='lazy' />
          )}
        </Link>
      </div>
    </div>
  )
}
import { Link } from 'react-router-dom'

import { CategoriesList, Video } from '../../components/elements'
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
      <Link
        to={`${config.pages.project.link}/${projectId}`}
        className='details-sect'
      >
        <img className='logo' src={project.logo} alt={project.title} title={project.title} loading='lazy' />
        <span role='heading' aria-level='4' className='h4 heading-font'>{project.title}</span>
        <CategoriesList categories={project.categories} />
      </Link>
      <div className='media-sect'>
        {project.mediaType == 'video' ? (
          <Video
            src={project.media}
            thumbnail={config.generalThumbnail}
          />
        ) : (
          <img
            className='thumbnail'
            src={project.media}
            alt={project.title}
            loading='lazy'
          />
        )}
      </div>
    </div>
  )
}
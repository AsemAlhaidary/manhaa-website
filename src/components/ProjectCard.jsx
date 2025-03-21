import { Link } from 'react-router-dom'

import { CategoriesList } from './elements'
import { config } from '../data'

export default function ProjectCard({ project, className }) {
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
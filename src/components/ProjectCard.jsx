import { CategoriesList } from './elements'

export default function ProjectCard({ project, className }) {
  return (
    <div className={`card project-card${className}`}>
      <div className='details-sect'>
        <img className='logo' src={project.logo} alt={project.title} title={project.title} loading='lazy' />
        <span role='heading' aria-level='4' className='h4 heading-font'>{project.title}</span>
        <CategoriesList categories={project.categories} />
      </div>
      <div className='img-sect'>
        <a href='#'>
          <img className='thumbnail' src={project.thumbnail} alt={project.title} loading='lazy' />
        </a>
      </div>
    </div>
  )
}
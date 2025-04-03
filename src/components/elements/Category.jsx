import { Link } from 'react-router-dom'

import { useConfig } from '../../hooks'

export default function Category({ category, isLink = true }) {
  const { config, loading, error } = useConfig()

  if (loading) return null
  if (error) return <div className='error-screen'>خطأ في تحميل الإعدادات: {error.message}</div>

  return (
    <li className='category'>
      {isLink ? (
        <Link 
          to={`${config.pages.projects.link}?category=${encodeURIComponent(category)}`}
          className='heading-font'
          onClick={(e) => e.stopPropagation()}
        >
          {category}
        </Link>
      ) : (
        <span className='heading-font'>{category}</span>
      )}
    </li>
  )
}
import { Link } from 'react-router-dom'

import { useConfig } from '../../hooks'

export default function Category({ category }) {
  const { config, loading, error } = useConfig()
  if (loading) return null
  if (error) return <div className='error-screen'>خطأ في تحميل الإعدادات: {error.message}</div>

  return (
    <li className='category'>
      <Link 
        to={`${config.pages.projects.link}?category=${encodeURIComponent(category)}`}
        className='heading-font'
      >
        {category}
      </Link>
    </li>
  )
}
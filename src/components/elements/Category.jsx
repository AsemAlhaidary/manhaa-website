import { Link } from 'react-router-dom'

import { config } from '../../data'

export default function Category({ category }) {
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
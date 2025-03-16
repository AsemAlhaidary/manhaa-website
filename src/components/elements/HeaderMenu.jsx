import { NavLink } from 'react-router-dom'
import { config } from '../../data'

const MENU = config.headerMenu

export default function HeaderMenu() {
  return (
    <nav className='header-menu-container'>
      <ul className='header-menu-list'>
        {Object.keys(MENU).map((key, index) => (
          <li key={index} className='header-menu-item'>
            <NavLink
              to={MENU[key].link()}
              className={({ isActive }) =>
                `header-menu-link${isActive ? ' active' : ''}`
              }
            >
              {MENU[key].title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
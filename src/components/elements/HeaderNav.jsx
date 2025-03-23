import { NavLink } from 'react-router-dom'

import { useConfig } from '../../hooks'

export default function HeaderNav() {
  const { config, loading, error } = useConfig()
  if (loading) return null
  if (error) return <div className='error-screen'>خطأ في تحميل الإعدادات: {error.message}</div>

  const MENU = config.headerMenu

  return (
    <nav className='header-menu-container order-0 mb'>
      <input type='checkbox' name='open-navbar' id='open-navbar' className='controller' />
      <label htmlFor='open-navbar' className='navbar-toggle flex mb'>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className='header-navbar-container'>
        <ul className='header-navbar-list'>
          {Object.keys(MENU).map((key, index) => (
            <li key={index} className='header-navbar-item'>
              <NavLink
                to={MENU[key].link()}
                className={({ isActive }) =>
                  `header-navbar-link active-effect${isActive ? ' active' : ''}`
                }
              >
                <span className='navbar-link-text'>{MENU[key].title()}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
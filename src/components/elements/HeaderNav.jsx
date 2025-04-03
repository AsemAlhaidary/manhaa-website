import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { useConfig } from '../../hooks'

export default function HeaderNav() {
  const { config, loading, error } = useConfig()
  const [isNavOpen, setIsNavOpen] = useState(false)

  if (loading) return null
  if (error) return <div className='error-screen'>خطأ في تحميل الإعدادات: {error.message}</div>

  const MENU = config.headerMenu

  return (
    <nav className='header-menu-container order-0 mb'>
    <input 
      type='checkbox' 
      name='open-navbar' 
      id='open-navbar' 
      className='controller'
      checked={isNavOpen}
      onChange={(e) => setIsNavOpen(e.target.checked)}
    />
      <span
        htmlFor='open-navbar'
        className='navbar-toggle flex mb'
        onClick={() => setIsNavOpen(current => !current)}
      >
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div className='header-navbar-container'>
        <ul className='header-navbar-list'>
          {Object.keys(MENU).map((key, index) => (
            <li key={index} className='header-navbar-item'>
              <NavLink
                to={MENU[key].link()}
                onClick={() => setIsNavOpen(false)}
                className={({ isActive }) =>
                  `header-navbar-link active-effect${isActive ? ' active' : ''}`
                }
              >
                <span className='navbar-link-text heading-font'>{MENU[key].title()}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
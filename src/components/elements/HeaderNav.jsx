import { NavLink } from 'react-router-dom'
import { config } from '../../data'

const MENU = config.headerMenu

export default function HeaderNav() {
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
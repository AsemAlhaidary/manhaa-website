import { NavLink } from 'react-router-dom'
import { config } from '../../data'

export default function Logo() {
  return (
    <NavLink
      to={config.pages.home.link}
      className='logo-link'
    >
      <img src={config.logoPath} alt={config.siteName} className='logo' />
    </NavLink>
  )
}
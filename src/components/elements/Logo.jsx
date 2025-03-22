import { Link } from 'react-router-dom'

import { useConfig } from '../ConfigLoader'
// import { config } from '../../data'

export default function Logo() {
  const { config, loading, error } = useConfig()
  if (loading) {
    return null
  }
  if (error) {
    return <div className='error-screen'>خطأ في تحميل الإعدادات: {error.message}</div>
  }

  return (
    <Link
      to={config.pages.home.link}
      className='logo-link order-1 mb'
    >
      <img src={config.logoPath} alt={config.siteName} className='logo' />
    </Link>
  )
}
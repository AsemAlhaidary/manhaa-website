import { useEffect } from 'react'

import '../../assets/styles/pages/home.scss'
import { useConfig } from '../../hooks'
import AboutUs from './AboutUs'
import Hero from './Hero'

export default function Home({ theme }) {
  const { config, loading, error } = useConfig()

  useEffect(() => {
    if (!config) return

    document.title = config.pages.home.title + ' - ' + config.siteName

    const htmlElement = document.documentElement
    htmlElement.setAttribute('data-theme', theme)

    // Cleanup function to remove the data-theme attribute when the component unmounts
    return () => {
      htmlElement.removeAttribute('data-theme')
    }
  }, [theme, config])

  if (loading) return null
  if (error) return <div className='error-screen'>خطأ في تحميل الإعدادات: {error.message}</div>

  return (
    <>
      <Hero />
      <AboutUs />
    </>
  );
}
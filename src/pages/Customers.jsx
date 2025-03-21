import { useEffect } from 'react'

// import { config } from '../data'
import { SectionHeading } from '../components/elements'
import { CustomersSlider } from '../components/elements'
import { useConfig } from '../components/ConfigLoader'

export default function Customers({ theme }) {
  const { config, loading, error } = useConfig()

  useEffect(() => {
    if (!config) return

    document.title = config.pages.customers.title + ' - ' + config.siteName

    const htmlElement = document.documentElement
    htmlElement.setAttribute('data-theme', theme)

    // Cleanup function to remove the data-theme attribute when the component unmounts
    return () => {
      htmlElement.removeAttribute('data-theme')
    }
  }, [theme, config])

  if (loading) {
    return null
  }
  if (error) {
    return <div className='error-screen'>خطأ في تحميل الإعدادات: {error.message}</div>
  }

  return (
    <section className='container customers'>
      <div className='row wrapper'>
        <SectionHeading title={config.pages.customers.title} />
        <CustomersSlider />
      </div>
    </section>
  );
}
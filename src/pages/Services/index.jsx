import { useEffect, useState, useMemo } from 'react'

import './services.scss'
import { SectionHeading } from '../../components/elements'
import { useConfig } from '../../hooks'

export default function Services({ theme }) {
  const { config, loading, error } = useConfig()
  const [selectedService, setSelectedService] = useState(null)

  // Memoize services array to prevent unnecessary recalculations
  const services = useMemo(() =>
    config?.siteContent?.services?.services || [],
    [config?.siteContent?.services?.services] // Only update when services data changes
  )

  // Service selection effect
  useEffect(() => {
    if (services.length > 0) {
      setSelectedService(services[0].id)
    }
  }, [services])

  useEffect(() => {
    if (!config) return

    document.title = config.pages.services.title + ' - ' + config.siteName

    const htmlElement = document.documentElement
    htmlElement.setAttribute('data-theme', theme)

    // Cleanup function to remove the data-theme attribute when the component unmounts
    return () => {
      htmlElement.removeAttribute('data-theme')
    }
  }, [theme, config])

  if (loading) return null
  if (error) return <div className='error-screen'>خطأ في تحميل الإعدادات: {error.message}</div>

  const handleServiceClick = (serviceId) => {
    setSelectedService(serviceId)
  }

  return (
    <section className='container services decorator-top-right decorator-bottom-left'>
      <div className='row wrapper'>
        <SectionHeading title={config.pages.services.title} />
        <div
          data-aos='fade-up'
          data-aos-delay='200'
          className='col card card-active'
        >
          <ul className='services-list'>
            {services.map((service) => (
              <li
                key={service.id}
                className={`service-item active-effect${selectedService === service.id ? ' active' : ''}`}
                onClick={() => handleServiceClick(service.id)}
              >
                <div className='service-icon'>
                  <img src={service.icon} alt={service.title} title={service.title} />
                </div>
                <div className='service-title'>
                  <span role='heading' aria-level='2' className='h2 content-font'>{service.title}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='row wrapper fatha-right'>
        {services.map((service) => (
          <div
            key={service.id}
            className={`col service-details${selectedService === service.id ? ' active' : ''}`}
          >
            <SectionHeading title={service.title} />
            <p
              data-aos='fade-up'
              data-aos-delay='200'
              className='description content-font'
            >{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
import { useEffect, useState } from 'react'

import { config } from '../data'
import { SectionHeading } from '../components/elements'

export default function Services({ theme }) {
  const [selectedService, setSelectedService] = useState(null)
  const services = config.siteContent.services.services

  useEffect(() => {
    document.title = config.pages.services.title + ' - ' + config.siteName

    // Set initial selected service
    if (services.length > 0) {
      setSelectedService(services[0].id)
    }

    const htmlElement = document.documentElement
    htmlElement.setAttribute('data-theme', theme)

    // Cleanup function to remove the data-theme attribute when the component unmounts
    return () => {
      htmlElement.removeAttribute('data-theme')
    }
  }, [theme, services])

  const handleServiceClick = (serviceId) => {
    setSelectedService(serviceId)
  }

  return (
    <section className='container services'>
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
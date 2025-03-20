import { useEffect, useState } from 'react'

import { config } from '../data'
import { SectionHeading } from '../components/elements'

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)
  const services = config.siteContent.services.services

  useEffect(() => {
    document.title = config.pages.services.title + ' - ' + config.siteName

    // Set initial selected service
    if (services.length > 0) {
      setSelectedService(services[0].id)
    }
  }, [services])

  const handleServiceClick = (serviceId) => {
    setSelectedService(serviceId)
  }

  return (
    <section className='container services'>
      <div className='row wrapper'>
        <SectionHeading title={config.pages.services.title} />
        <div className='col card card-active'>
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
            <span role='heading' aria-level='1' className='h1 heading-font'>{service.title}</span>
            <p className='description content-font'>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
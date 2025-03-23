import { useEffect } from 'react'

import './contact.scss'
import { SectionHeading } from '../../components/elements'
import { ContactForm } from '../../components/elements'
import { useConfig } from '../../hooks'

export default function Contact({ theme }) {
  const { config, loading, error } = useConfig()

  useEffect(() => {
    if (!config) return

    document.title = config.pages.contact.title + ' - ' + config.siteName

    const htmlElement = document.documentElement
    htmlElement.setAttribute('data-theme', theme)

    // Cleanup function to remove the data-theme attribute when the component unmounts
    return () => {
      htmlElement.removeAttribute('data-theme')
    }
  }, [theme, config])

  if (loading) return null
  if (error) return <div className='error-screen'>خطأ في تحميل الإعدادات: {error.message}</div>
  const socialMedia = config.siteContent.contact.socialMedia

  return (
    <section className='container contact decorator-top-right'>
      <div
        data-aos='fade-up'
        data-aos-delay='200'
        className='row wrapper'
      >
        <SectionHeading title={config.pages.contact.title} />
        <div className='col'>
          <div className='contact-container flex'>
            <div className='contact-info'>
              <span className='social-username'>{socialMedia.username}</span>
              <div className='social-media-list'>
                {socialMedia.social.map((social, index) => (
                  <a key={index} className='social-link' href={social.url} title={social.name}>
                    <span className={social.icon}></span>
                  </a>
                ))}
              </div>
            </div>
            <div className='contact-form'>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
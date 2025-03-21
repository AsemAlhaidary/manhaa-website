import { SectionHeading } from '../components/elements'
import { ContactForm } from '../components/elements'
import { useConfig } from '../components/ConfigLoader'

export default function Contact() {
  const { config, loading, error } = useConfig()

  if (loading) {
    return null
  }
  if (error) {
    return <div className='error-screen'>خطأ في تحميل الإعدادات: {error.message}</div>
  }
  const socialMedia = config.siteContent.contact.socialMedia

  return (
    <section id='contact-us' className='container contact decorator-top-right'>
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
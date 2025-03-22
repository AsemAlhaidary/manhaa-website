import { Logo } from './elements'
import { useConfig } from '../hooks'

export default function Footer() {
  const { config, loading, error } = useConfig()
  if (loading) {
    return null
  }
  if (error) {
    return <div className='error-screen'>خطأ في تحميل الإعدادات: {error.message}</div>
  }

  const socialMedia = config.siteContent.contact.socialMedia

  return (
    <footer>
      <div className='row wrapper'>
        <div className='col'>
          <span className='heading-font'>تواصل معنا</span>
          <div className='social-media-list'>
            {socialMedia.social.map((social, index) => (
              <a key={index} className='social-link' href={social.url} title={social.name}>
                <span className={social.icon}></span>
              </a>
            ))}
          </div>
        </div>
        <div className='col'>
          <Logo />
        </div>
      </div>
      <div className='row wrapper footer-copy'>
        <div className='col'>
          <p className='heading-font footer-text'>{config.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
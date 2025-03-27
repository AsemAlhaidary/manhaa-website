import { useConfig } from '../../hooks'
import { Video } from '../../components/elements'

export default function Hero() {
  const { config, loading, error } = useConfig()

  if (loading) return null
  if (error) return <div className='error-screen'>خطأ في تحميل الإعدادات: {error.message}</div>

  return (
    <section className='container home screen-height decorator-top-left'>
      <div className='row wrapper'>
        <div className='col'>
          <img
            src='/imgs/نأخذك لمنحى أخـــــــــــــــــــر.png'
            title='نأخذك لمنحى أخـــــــــــــــــــر'
            className='hero-title'
          />
          {/* <span
            data-aos='fade-up'
            data-aos-delay='200'
            role='heading'
            aria-level='1'
            className='h1 text-right heading-font'
          >
            نأخذك لمنحى<br />
            آخــــــــــــــــر
          </span> */}
        </div>
        <div className='col video-section'>
          <div className='video-container'>
            <Video
              src={config.siteContent.home.heroVideoSrc}
              thumbnail={config.siteContent.home.heroVideoThumbnail}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
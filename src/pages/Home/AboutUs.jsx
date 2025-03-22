import { useConfig } from '../../hooks/useConfig'

export default function AboutUs() {
  const { config, loading, error } = useConfig()
  if (loading) {
    return null
  }
  if (error) {
    return <div className='error-screen'>خطأ في تحميل الإعدادات: {error.message}</div>
  }

  const aboutUs = config.siteContent.home.aboutUs

  return (
    <section className='container aboutus decorator-bottom-right'>
      <div
        data-aos='fade-up'
        data-aos-delay='200'
        className='row wrapper'
      >
        {aboutUs.map((item, index) => (
          <div key={index} className='col'>
            <div className='card shadow-top'>
              <span role='heading' aria-level='4' className='h3 heading-font'>{item.title}</span>
              <p className='desc content-font'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
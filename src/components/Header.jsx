import { Logo, HeaderNav, Button } from './elements'
import { useConfig } from './ConfigLoader'
// import config from '../data/config'

export default function Header() {
  const { config, loading, error } = useConfig()
  if (loading) {
    return null
  }
  if (error) {
    return <div className='error-screen'>خطأ في تحميل الإعدادات: {error.message}</div>
  }

  return (
    <header>
      <div className='row wrapper'>
        <Logo />
        <HeaderNav />
        <div className='buttons-group order-2 mb'>
          <Button text={config.pages.contact.title} variant="primary" action={config.pages.contact.link} />
        </div>
      </div>
    </header>
  )
}
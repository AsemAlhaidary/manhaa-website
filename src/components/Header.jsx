import { useEffect, useRef, useState } from 'react'
import { Logo, HeaderNav, Button } from './elements'
import { useConfig } from './ConfigLoader'

export default function Header() {
  const { config, loading, error } = useConfig()
  const headerRef = useRef(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop
      if (scrollPosition > 50) {
        headerRef.current.classList.add('scroll')
        setIsScrolled(true)
      } else {
        headerRef.current.classList.remove('scroll')
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (loading) return null
  if (error) return <div className='error-screen'>خطأ في تحميل الإعدادات: {error.message}</div>

  return (
    <header ref={headerRef} className={isScrolled ? 'scroll' : ''}>
      <div className='row wrapper'>
        <Logo />
        <HeaderNav />
        <div className='buttons-group order-2 mb'>
          <Button 
            text={config.pages.contact.title} 
            variant="primary" 
            action={config.pages.contact.link} 
          />
        </div>
      </div>
    </header>
  )
}
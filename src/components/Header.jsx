import { Logo, HeaderNav, Button } from './elements'
import config from '../data/config'

export default function Header() {
  return (
    <header>
      <div className='row wrapper'>
        <div className='header-group'>
          <Logo />
          <HeaderNav />
        </div>
        <div className='buttons-group'>
          <Button text={config.pages.contact.title} variant="primary" action={config.pages.contact.link} />
        </div>
      </div>
    </header>
  )
}
import { Logo, HeaderNav, Button } from './elements'
import config from '../data/config'

export default function Header() {
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
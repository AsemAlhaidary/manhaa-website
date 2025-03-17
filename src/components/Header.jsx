import { Logo, HeaderMenu, Button } from './elements'
import config from '../data/config'

export default function Header() {
  return (
    <header>
      <Logo />
      <HeaderMenu />
      <Button text={config.pages.contact.title} variant="primary" action={config.pages.contact.link} />
    </header>
  )
}
import { Logo, HeaderMenu, Button } from './elements'
import config from '../data/config'

export default function Header() {
  return (
    <header>
      <Logo />
      <HeaderMenu />
      <Button text="تواصل معنا" variant="primary" action={config.pages.contact} />
    </header>
  )
}
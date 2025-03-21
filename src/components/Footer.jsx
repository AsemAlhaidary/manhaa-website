import React from 'react'

import { config } from '../data'
import { Logo } from './elements'

export default function Footer() {
  const socialMedia = config.siteContent.contact.socialMedia

  return (
    <footer>
      <div className='row wrapper'>
        <div className='col order-0 mb'>
          <Logo />
        </div>
        <div className='col order-1 mb'>
          <div className='social-media-list'>
            {socialMedia.social.map((social, index) => (
              <a key={index} className='social-link' href={social.url} title={social.name}>
                <span className={social.icon}></span>
              </a>
            ))}
          </div>
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
import React from 'react'
import { config } from '../../data'

const MENU = config.headerMenu

export default function HeaderMenu() {
  return (
    <nav className='header-menu-container'>
      <ul className='header-menu-list'>
        {Object.keys(MENU).map((key, index) => (
          <li key={index} className='header-menu-item'>
            <a href={MENU[key].link()} className='header-menu-link'>{MENU[key].title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
import React from 'react'
import { config } from '../../data'

export default function Logo() {
  return (
    <img src={config.logoPath} alt={config.siteName} className='logo' />
  )
}
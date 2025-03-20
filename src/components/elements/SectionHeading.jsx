import React from 'react'

export default function SectionHeading({ title }) {
  return (
    <div className='col'>
      <span role='heading' aria-level='1' className='h1'>{title}</span>
    </div>
  )
}
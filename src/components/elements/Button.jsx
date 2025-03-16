import React from 'react'

export default function Button({ text, variant, action }) {
  return (
    <a href={action} className={`btn btn-${variant}`}>{text}</a>
  )
}
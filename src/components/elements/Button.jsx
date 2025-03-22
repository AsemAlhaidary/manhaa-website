import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ text, variant, action }) {
  return (
    <Link to={action} className={`btn btn-${variant}`}>{text}</Link>
  )
}
import { useState } from 'react'

import Swal from 'sweetalert2'
import { useConfig } from '../../hooks'

export default function ContactForm() {
  const { config, loading, error } = useConfig()

  const [result, setResult] = useState('')

  if (loading) {
    return null
  }
  if (error) {
    return <div className='error-screen'>خطأ في تحميل الإعدادات: {error.message}</div>
  }
  const form = config.siteContent.contact.form

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending....')
    const formData = new FormData(event.target)

    formData.append('access_key', form.apiAccessKey)

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      setResult('Form Submitted Successfully')
      Swal.fire({
        title: form.onSuccess.title,
        text: form.onSuccess.text,
        icon: form.onSuccess.icon
      })
      event.target.reset()
    } else {
      Swal.fire({
        title: form.onError.title,
        text: form.onError.text,
        icon: form.onError.icon
      })
      setResult(data.message)
      console.log('Error', result)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <input className='heading-font field' type='text' name='name' placeholder={form.name} required />
        <input className='heading-font field' type='tel' name='phone' placeholder={form.phone} required />
      </div>
      <div className='form-group'>
        <input className='heading-font field' type='email' name='email' placeholder={form.email} required />
      </div>
      <div className='form-group'>
        <textarea className='heading-font field message' name='message' placeholder={form.message} required></textarea>
      </div>
      <button type='submit' className='heading-font btn btn-primary'>{form.submit}</button>
    </form>
  )
}
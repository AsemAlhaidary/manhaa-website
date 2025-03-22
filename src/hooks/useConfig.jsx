import { useState, useEffect } from 'react'

export const useConfig = () => {
  const [config, setConfig] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/config/config.js'
    script.async = true

    script.onload = () => {
      if (window.clientConfig) {
        setConfig(window.clientConfig)
        setLoading(false)
      } else {
        setError(new Error('ملف الإعدادات غير موجود'))
      }
    }

    script.onerror = () => {
      setError(new Error('خطأ في تحميل الإعدادات'))
    }

    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return { config, loading, error }
}
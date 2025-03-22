import { useState, useRef } from 'react'

import { useConfig } from '../../hooks'

export default function Hero() {
  const { config, loading, error } = useConfig()
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  if (loading) return null
  if (error) return <div className='error-screen'>خطأ في تحميل الإعدادات: {error.message}</div>

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <section className='container home screen-height decorator-top-left'>
      <div className='row wrapper'>
        <div className='col'>
          <span
            data-aos='fade-up'
            data-aos-delay='200'
            role='heading'
            aria-level='1'
            className='h1 text-right'
          >
            نأخذك لمنحى<br />
            آخــــــــــــــــر
          </span>
        </div>
        <div className='col video-section'>
          <div className='video-container'>
            <video ref={videoRef} className='video' onClick={togglePlay} poster={config.siteContent.home.heroVideoThumbnail}>
              <source src={config.siteContent.home.heroVideoSrc} type='video/mp4' />
            </video>
            {!isPlaying && (
              <button className='play-button' onClick={togglePlay}></button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
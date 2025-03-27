import { useState, useRef } from 'react'

export default function Video({ src, thumbnail }) {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef(null)

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
    <>
      <video
        ref={videoRef}
        className='video'
        onClick={togglePlay}
        poster={thumbnail}
        autoPlay
        muted
      >
        <source src={src} type='video/mp4' />
      </video>
      {
        !isPlaying && (
          <button className='play-button' onClick={togglePlay}></button>
        )
      }
    </>
  )
}
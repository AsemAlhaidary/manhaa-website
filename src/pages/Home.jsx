import { useEffect, useState, useRef } from 'react'
import { config } from '../data'

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    document.title = config.pages.home.title + ' - ' + config.siteName
  }, [])

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className='container home screen-height'>
      <div className='row wrapper'>
        <div className='col'>
          <span role='heading' aria-level='1' className='h1 text-right'>
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
  );
}
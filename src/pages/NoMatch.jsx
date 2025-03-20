import { useEffect } from 'react'
import { config } from '../data'

export default function NoMatch({ theme }) {
  useEffect(() => {
    document.title = config.pages.noMatch.title + ' - ' + config.siteName

    const htmlElement = document.documentElement
    htmlElement.setAttribute('data-theme', theme)

    // Cleanup function to remove the data-theme attribute when the component unmounts
    return () => {
      htmlElement.removeAttribute('data-theme')
    }
  }, [theme])

  return (
    <h1>NoMatch</h1>
  );
}
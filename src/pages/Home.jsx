import { useEffect } from 'react'
import { config } from '../data'

export default function Home() {
    useEffect(() => {
        document.title = config.pages.home.title + ' - ' + config.siteName
    }, [])

    return (
        <h1>Home</h1>
    );
}
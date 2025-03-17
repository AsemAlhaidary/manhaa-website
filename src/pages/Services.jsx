import { useEffect } from 'react'
import { config } from '../data'

export default function Services() {
    useEffect(() => {
        document.title = config.pages.services.title + ' - ' + config.siteName
    }, [])

    return (
        <h1>Services</h1>
    );
}
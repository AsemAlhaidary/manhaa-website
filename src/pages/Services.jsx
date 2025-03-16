import { useEffect } from 'react'
import { config } from '../data'

export default function Services() {
    useEffect(() => {
        document.title = 'خدماتنا - ' + config.siteName
    }, [])

    return (
        <h1>Services</h1>
    );
}
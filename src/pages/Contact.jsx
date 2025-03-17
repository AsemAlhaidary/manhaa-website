import { useEffect } from 'react'
import { config } from '../data'

export default function Contact() {
    useEffect(() => {
        document.title = config.pages.contact.title + ' - ' + config.siteName
    }, [])

    return (
        <h1>Contact</h1>
    );
}
import { useEffect } from 'react'
import { config } from '../data'

export default function Contact() {
    useEffect(() => {
        document.title = 'تواصل معنا - ' + config.siteName
    }, [])

    return (
        <h1>Contact</h1>
    );
}
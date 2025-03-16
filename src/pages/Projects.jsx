import { useEffect } from 'react'
import { config } from '../data'

export default function Projects() {
    useEffect(() => {
        document.title = 'أعمالنا - ' + config.siteName
    }, [])

    return (
        <h1>Projects</h1>
    );
}
import { useEffect } from 'react'
import { config } from '../data'

export default function Projects() {
    useEffect(() => {
        document.title = config.pages.projects.title + ' - ' + config.siteName
    }, [])

    return (
        <h1>Projects</h1>
    );
}
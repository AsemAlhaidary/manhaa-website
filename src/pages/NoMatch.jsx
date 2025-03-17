import { useEffect } from 'react'
import { config } from '../data'

export default function NoMatch() {
    useEffect(() => {
        document.title = config.pages.noMatch.title + ' - ' + config.siteName
    }, [])

    return (
        <h1>NoMatch</h1>
    );
}
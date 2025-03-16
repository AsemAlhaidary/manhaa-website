import { useEffect } from 'react'
import { config } from '../data'

export default function NoMatch() {
    useEffect(() => {
        document.title = 'غير موجود - ' + config.siteName
    }, [])

    return (
        <h1>NoMatch</h1>
    );
}
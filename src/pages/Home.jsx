import { useEffect } from 'react'
import { config } from '../data'

export default function Home() {
    useEffect(() => {
        document.title = 'الرئيسية - ' + config.siteName
    }, [])

    return (
        <h1>Home</h1>
    );
}
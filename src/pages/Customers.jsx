import { useEffect } from 'react'
import { config } from '../data'

export default function Customers() {
    useEffect(() => {
        document.title = config.pages.customers.title + ' - ' + config.siteName
    }, [])

    return (
        <h1>Customers</h1>
    );
}
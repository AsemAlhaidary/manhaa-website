import './assets/styles/App.scss'

import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from
  'react-router-dom'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { Home, Services, Projects, Project, Customers, Contact, NoMatch } from './pages'
import { Header, Footer } from './components'
import { useConfig } from './hooks'

function App() {
  const { config, loading, error } = useConfig()

  useEffect(() => {
    if (config) { // Only initialize AOS when config is loaded
      AOS.init({
        duration: 1000,
        once: true,
        offset: 200,
        easing: 'ease-in-out',
      });
    }

    console.log(`
                                                          
 _____                  _____ _ _       _   _             
|  _  |___ ___ _____   |  _  | | |_ ___|_|_| |___ ___ _ _ 
|     |_ -| -_|     |  |     | |   | .'| | . | .'|  _| | |
|__|__|___|___|_|_|_|  |__|__|_|_|_|__,|_|___|__,|_| |_  |
                                                     |___|
`)
      console.log('This site was developed by: Asem Alhaidary\nInstagram: (https://www.instagram.com/asemwebdeveloper/)\nLinked In: (https://www.linkedin.com/in/asemalhaidary/)')
  }, [config]); // Add config as dependency

  if (loading) return null
  if (error) return <div className='error-screen'>خطأ في تحميل الإعدادات: {error.message}</div>

  const PAGES = config.pages

  return (
    <Router>
      <Header />
      <Routes>
        <Route path={PAGES.home.link} element={<Home theme='dark' />} />
        <Route path={PAGES.services.link} element={<Services theme='dark' />} />
        <Route path={PAGES.projects.link} element={<Projects theme='dark' />} />
        <Route path={`${PAGES.project.link}/:projectId`} element={<Project theme='light' />} />
        <Route path={PAGES.customers.link} element={<Customers theme='light' />} />
        <Route path={PAGES.contact.link} element={<Contact theme='dark' />} />
        <Route path={PAGES.noMatch.link} element={<NoMatch theme='dark' />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
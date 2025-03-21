import './assets/styles/App.scss'

import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from
  'react-router-dom'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { Home, Services, Projects, Project, Customers, Contact, NoMatch } from './pages'
import { Container, Header, Footer, SiteDecorator } from './components'
import { config } from './data'

const PAGES = config.pages

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Animation only once
      offset: 200, // Start animation when element is 200px below viewport
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <Router>
      <Container>
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
      </Container>
      <SiteDecorator />
    </Router>
  )
}

export default App
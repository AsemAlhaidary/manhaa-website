import './assets/styles/App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Services, Projects, Project, Customers, Contact, NoMatch } from './pages'
import { Container, Header, Footer, SiteDecorator } from './components'
import { config } from './data'

const PAGES = config.pages

function App() {
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
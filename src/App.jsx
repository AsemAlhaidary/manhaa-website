import './assets/styles/App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Services, Projects, Customers, Contact, NoMatch } from './pages'
import { Footer, Header } from './components'
import { config } from './data'

const PAGES = config.pages

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={PAGES.home.link} element={<Home />} />
        <Route path={PAGES.services.link} element={<Services />} />
        <Route path={PAGES.projects.link} element={<Projects />} />
        <Route path={PAGES.customers.link} element={<Customers />} />
        <Route path={PAGES.contact.link} element={<Contact />} />
        <Route path={PAGES.noMatch.link} element={<NoMatch />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
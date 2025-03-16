import './assets/styles/App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Services, Projects, Customers, Contact, NoMatch } from './pages'
import { Footer, Header } from './components'
import { config } from './data'

const PAGES = config.pages

function App() {
  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route path={PAGES.home} element={<Home />} />
        <Route path={PAGES.services} element={<Services />} />
        <Route path={PAGES.projects} element={<Projects />} />
        <Route path={PAGES.customers} element={<Customers />} />
        <Route path={PAGES.contact} element={<Contact />} />
        <Route path={PAGES.noMatch} element={<NoMatch />} />
      </Routes>
    </Router>
    <Footer />
    </>
  )
}

export default App
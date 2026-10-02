import { Navbar, Footer } from './components/layout'
import Hero from './sections/Hero'
import Specialities from './sections/Specialities'
import Projects from './sections/Projects'
import Journey from './sections/Journey'
import Certifications from './sections/Certifications'
import Languages from './sections/Languages'
import About from './sections/About'
import Scraper from './sections/Scraper'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-bg-0 text-text-0">
      <Navbar />
      <main>
        <Hero />
        <Specialities />
        <Projects />
        <Journey />
        <Certifications />
        <Languages />
        <About />
        <Scraper />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
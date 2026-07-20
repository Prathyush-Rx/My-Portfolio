import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import StatsBar from './components/StatsBar.jsx'
import About from './components/About.jsx'
import EducationProjects from './components/EducationProjects.jsx'
import Skills from './components/Skills.jsx'
import Resume from './components/Resume.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import useScrollReveal from './useScrollReveal.js'

export default function App() {
  useScrollReveal()

  return (
    <>
      <div className="grid-overlay"></div>

      <Navbar />
      <Hero />
      <StatsBar />

      <div className="section-sep" style={{ marginTop: 60 }}></div>
      <About />

      <div className="section-sep"></div>
      <EducationProjects />

      <div className="section-sep"></div>
      <Skills />

      <div className="section-sep"></div>
      <Resume />

      <div className="section-sep"></div>
      <Contact />

      <Footer />
    </>
  )
}

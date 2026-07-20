import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { href: '#home', label: '🏠 Home', id: 'home' },
  { href: '#about', label: '👤 About', id: 'about' },
  { href: '#education', label: '🎓 Education', id: 'education' },
  { href: '#projects', label: '🚀 Projects', id: 'projects' },
  { href: '#skills', label: '⚡ Skills', id: 'skills' },
  { href: '#resume', label: '📄 Resume', id: 'resume' },
  { href: '#contact', label: '📬 Contact', id: 'contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const handleScroll = () => {
      let current = 'home'
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id
      })
      setActiveId(current)
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav id="navbar" style={{ boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none' }}>
      <div className="nav-brand"></div>
      <div className="hamburger" id="hamburger" onClick={() => setMenuOpen((v) => !v)}>
        <span></span><span></span><span></span>
      </div>
      <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className={activeId === item.id ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

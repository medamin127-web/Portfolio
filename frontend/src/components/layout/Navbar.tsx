// src/components/layout/Navbar.tsx
import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Journey', href: '#journey' },
  { label: 'About', href: '#about' },
] as const

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [soundOn, setSoundOn] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
        px-6 py-6 md:px-12 transition-colors duration-300
        ${isScrolled ? 'bg-bg-0/90 backdrop-blur-md' : 'bg-transparent'}`}
    >
      <a href="#" className="font-mono text-sm tracking-wide">
        MOHAMED<span className="text-purple">.</span>
      </a>

      <nav className="hidden md:flex items-center gap-9">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-text-1 transition-colors hover:text-text-0"
          >
            {link.label}
          </a>
        ))}

        <button
          type="button"
          onClick={() => setSoundOn((prev) => !prev)}
          className="font-mono text-[11px] text-text-2 tracking-wide"
        >
          ⌨ SOUND {soundOn ? 'ON' : 'OFF'}
        </button>

        <a
          href="#contact"
          className="rounded-full border border-line px-5 py-2.5 text-[13px]
            transition-colors hover:border-purple hover:bg-purple/10"
        >
          Let's talk
        </a>
      </nav>
    </header>
  )
}
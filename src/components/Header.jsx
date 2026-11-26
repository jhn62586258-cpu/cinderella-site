import { useEffect, useState } from 'react'
import { NAV, } from '../data'
import { useApply } from '../ApplyContext'
import logoTile from '../assets/logo-tile.png'

export default function Header({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const { openApply } = useApply()

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen)
    return () => document.body.classList.remove('no-scroll')
  }, [menuOpen])

  return (
    <header className={`hd ${scrolled || menuOpen ? 'is-solid' : ''}`}>
      <div className="hd-in">
        <a href="#top" className="hd-logo" aria-label="신데렐라 세탁 홈" onClick={() => setMenuOpen(false)}>
          <img src={logoTile} alt="Cinderella 신데렐라 세탁" />
        </a>
        <nav className={`hd-nav ${menuOpen ? 'open' : ''}`} aria-label="주 메뉴">
          {NAV.map((n, i) => (
            <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} style={{ '--i': i }}>
              {n.label}
            </a>
          ))}
          <button
            className="btn btn-solid btn-sm hd-cta"
            onClick={() => {
              setMenuOpen(false)
              openApply()
            }}
          >
            수거 신청
          </button>
        </nav>
        <button
          className={`burger ${menuOpen ? 'open' : ''}`}
          aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i />
          <i />
        </button>
      </div>
    </header>
  )
}

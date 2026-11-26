import { COMPANY } from '../config'
import { NAV } from '../data'
import logoWhite from '../assets/logo-white.png'

export default function Footer() {
  return (
    <footer className="ft">
      <div className="wrap ft-in">
        <div className="ft-brand">
          <img src={logoWhite} alt="Cinderella 신데렐라 세탁" />
          <p>CONCIERGE LAUNDRY SERVICE</p>
        </div>
        <nav className="ft-nav" aria-label="푸터 메뉴">
          {NAV.map((n) => (<a key={n.href} href={n.href}>{n.label}</a>))}
        </nav>
        <ul className="ft-info">
          <li>대표 {COMPANY.ceo}</li>
          <li>사업자등록번호 {COMPANY.bizNo}</li>
          <li>{COMPANY.address}</li>
          <li>{COMPANY.email} · {COMPANY.phone}</li>
          <li>{COMPANY.hours}</li>
        </ul>
        <p className="ft-copy">© {new Date().getFullYear()} Cinderella Laundry. All rights reserved.</p>
      </div>
    </footer>
  )
}

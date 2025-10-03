import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isMyanmar, setIsMyanmar] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  const toggleLanguage = () => {
    setIsMyanmar(!isMyanmar)
  }

  const toggleMobile = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" className="logo-text">eSIM Myanmar</Link>
        </div>
        <ul className={`nav-menu ${isMobileOpen ? 'active' : ''}`}>
          <li><Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link></li>
          <li><Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link></li>
          <li><Link to="/compatibility" className={`nav-link ${isActive('/compatibility') ? 'active' : ''}`}>Compatibility</Link></li>
          <li><Link to="/how-it-works" className={`nav-link ${isActive('/how-it-works') ? 'active' : ''}`}>How It Works</Link></li>
          <li><Link to="/faq" className={`nav-link ${isActive('/faq') ? 'active' : ''}`}>FAQ</Link></li>
          <li><Link to="/partners" className={`nav-link ${isActive('/partners') ? 'active' : ''}`}>Partners</Link></li>
          <li><Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link></li>
        </ul>
        <div className="nav-actions">
          <button className="lang-toggle" onClick={toggleLanguage}>
            {isMyanmar ? 'English' : 'မြန်မာ'}
          </button>
          <Link to="/contact" className="cta-btn">Get Started</Link>
        </div>
        <div className={`mobile-toggle ${isMobileOpen ? 'active' : ''}`} onClick={toggleMobile}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
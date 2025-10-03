import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isMyanmar, setIsMyanmar] = useState(false)

  const toggleLanguage = () => {
    setIsMyanmar(!isMyanmar)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">eSIM Myanmar</span>
        </div>
        <ul className="nav-menu">
          <li><a href="#home" className="nav-link active">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#compatibility" className="nav-link">Compatibility</a></li>
          <li><a href="#how-it-works" className="nav-link">How It Works</a></li>
          <li><a href="#faq" className="nav-link">FAQ</a></li>
          <li><a href="#partners" className="nav-link">Partners</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        <div className="nav-actions">
          <button className="lang-toggle" onClick={toggleLanguage}>
            {isMyanmar ? 'English' : 'မြန်မာ'}
          </button>
          <button className="cta-btn">Get Started</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
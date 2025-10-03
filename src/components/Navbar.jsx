import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [language, setLanguage] = useState('EN')
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: { EN: 'Home', MM: 'ပင်မ' } },
    { path: '/about', label: { EN: 'About', MM: 'အကြောင်း' } },
    { path: '/compatibility', label: { EN: 'Compatibility', MM: 'လိုက်ဖက်မှု' } },
    { path: '/how-it-works', label: { EN: 'How It Works', MM: 'အလုပ်လုပ်ပုံ' } },
    { path: '/faq', label: { EN: 'FAQ', MM: 'မေးခွန်းများ' } },
    { path: '/partners', label: { EN: 'Partners', MM: 'လုပ်ဖော်ကိုင်ဖက်များ' } },
    { path: '/contact', label: { EN: 'Contact', MM: 'ဆက်သွယ်ရန်' } }
  ]

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <span className="logo-text">eSIM Myanmar</span>
          </Link>
          
          <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label[language]}
              </Link>
            ))}
          </div>

          <div className="nav-actions">
            <button 
              className="language-toggle"
              onClick={() => setLanguage(language === 'EN' ? 'MM' : 'EN')}
            >
              {language === 'EN' ? 'မြန်မာ' : 'English'}
            </button>
            
            <div 
              className={`hamburger ${isOpen ? 'active' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Apple Business Messaging Button */}
      <div className="apple-business-messaging">
        <button className="abm-button" title="Message us on Apple Business Chat">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.04 1.05 4.35L2 22l5.65-1.05C9.96 21.64 11.46 22 13 22h7c1.1 0 2-.9 2-2V12c0-5.52-4.48-10-10-10zm0 18c-1.21 0-2.4-.25-3.52-.74L7 20l.74-1.48C7.25 17.4 7 16.21 7 15c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5z"/>
          </svg>
        </button>
      </div>
    </>
  )
}

export default Navbar
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'eSIM Plans', path: '/' },
      { name: 'IoT Solutions', path: '/how-it-works' },
      { name: 'Enterprise', path: '/partners' },
      { name: 'Roaming', path: '/compatibility' }
    ],
    support: [
      { name: 'Help Center', path: '/faq' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Device Setup', path: '/how-it-works' },
      { name: 'Network Status', path: '/' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Partners', path: '/partners' },
      { name: 'Careers', path: '/about' },
      { name: 'News', path: '/about' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/privacy' },
      { name: 'Compliance', path: '/privacy' }
    ]
  }

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com/eSIMMyanmar' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/eSIMMyanmar' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/eSIMMyanmar' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/company/esim-myanmar' },
    { name: 'YouTube', icon: '📺', url: 'https://youtube.com/@eSIMMyanmar' }
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <h3 className="logo-text">eSIM Myanmar</h3>
                <p className="logo-tagline">Connecting Myanmar to the Future</p>
              </div>
              <p className="company-description">
                Leading provider of eSIM technology in Myanmar, offering seamless connectivity 
                solutions for smartphones, IoT devices, and enterprise applications.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>info@esim.com.mm</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+95 9650000172</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Parami Road, No-70/A, Ward (16), Hlaing Township, Yangon</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4 className="footer-title">Services</h4>
              <ul className="footer-links">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="footer-section">
              <h4 className="footer-title">Support</h4>
              <ul className="footer-links">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="footer-section">
              <h4 className="footer-title">Company</h4>
              <ul className="footer-links">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="footer-section">
              <h4 className="footer-title">Legal</h4>
              <ul className="footer-links">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="newsletter-section glass-panel">
            <div className="newsletter-content">
              <h4>Stay Connected</h4>
              <p>Get the latest updates on eSIM technology and special offers</p>
            </div>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button className="btn-primary newsletter-btn">Subscribe</button>
            </div>
          </div>

          {/* Social Links & Payment Methods */}
          <div className="footer-bottom">
            <div className="social-links">
              <h5>Follow Us</h5>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="payment-methods">
              <h5>We Accept</h5>
              <div className="payment-icons">
                <span className="payment-icon" title="Apple Pay">🍎</span>
                <span className="payment-icon" title="Visa">💳</span>
                <span className="payment-icon" title="Mastercard">💰</span>
                <span className="payment-icon" title="PayPal">💸</span>
                <span className="payment-icon" title="Cryptocurrency">₿</span>
                <span className="payment-icon" title="NFC">📱</span>
              </div>
            </div>

            <div className="certifications">
              <h5>Certified & Secure</h5>
              <div className="cert-icons">
                <span className="cert-icon" title="ISO 27001">🔒</span>
                <span className="cert-icon" title="GSMA Certified">📡</span>
                <span className="cert-icon" title="PCI DSS">🛡️</span>
                <span className="cert-icon" title="SOC 2">✅</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer-copyright">
            <div className="copyright-text">
              <p>&copy; {currentYear} eSIM Myanmar. All rights reserved.</p>
              <p>Powered by cutting-edge eSIM technology</p>
            </div>
            <div className="footer-badges">
              <span className="badge">🌟 5G Ready</span>
              <span className="badge">🔐 Enterprise Security</span>
              <span className="badge">🌍 Global Roaming</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
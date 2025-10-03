import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>eSIM Myanmar</h3>
            <p>Leading Myanmar's digital connectivity revolution with advanced eSIM technology solutions.</p>
          </div>
          
          <div className="footer-section">
            <h4>Contact Information</h4>
            <div className="contact-info">
              <p>Email: info@esim.com.mm</p>
              <p>Phone: +95 965 0000172</p>
              <p>Social: @eSIMMyanmar</p>
              <p>Address: Parami Road, No-70/A, Ward (16)</p>
              <p>Hlaing Township, Yangon, Myanmar</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Legal</h4>
            <div className="footer-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 eSIM Myanmar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
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
              <p>Phone: 09650000172</p>
              <p>Social: @eSIMMyanmarr</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Legal</h4>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
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
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import './Pages.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const heroRef = useRef()
  const formRef = useRef()

  useEffect(() => {
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )

    gsap.fromTo(formRef.current,
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        delay: 0.3,
        ease: "power3.out" 
      }
    )
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
  }

  const handleAppleBusinessChat = () => {
    // Apple Business Chat integration
    if (window.AppleBusinessChat) {
      window.AppleBusinessChat.open('eSIM Myanmar')
    } else {
      alert('Apple Business Chat not available on this device')
    }
  }

  return (
    <div className="page-container">
      <section className="page-hero" ref={heroRef}>
        <div className="container">
          <div className="hero-content glass-panel">
            <h1 className="page-title">
              Contact <span className="gradient-text">eSIM Myanmar</span>
            </h1>
            <p className="page-subtitle">
              Get in touch with our team for support, partnerships, or inquiries
            </p>
          </div>
        </div>
      </section>

      <section className="page-content section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section" ref={formRef}>
              <div className="contact-form glass-panel">
                <h2>Send us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="billing">Billing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary">Send Message</button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <div className="contact-info glass-panel">
                <h2>Get in Touch</h2>
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="method-icon">📧</div>
                    <div className="method-info">
                      <h3>Email</h3>
                      <p>info@esim.com.mm</p>
                    </div>
                  </div>
                  <div className="contact-method">
                    <div className="method-icon">📞</div>
                    <div className="method-info">
                      <h3>Phone</h3>
                      <p>+95 9650000172</p>
                    </div>
                  </div>
                  <div className="contact-method">
                    <div className="method-icon">📍</div>
                    <div className="method-info">
                      <h3>Address</h3>
                      <p>Parami Road, No-70/A, Ward (16)<br />Hlaing Township, Yangon, Myanmar</p>
                    </div>
                  </div>
                  <div className="contact-method">
                    <div className="method-icon">📱</div>
                    <div className="method-info">
                      <h3>Social Media</h3>
                      <p>@eSIMMyanmar</p>
                    </div>
                  </div>
                </div>

                <div className="business-chat">
                  <button 
                    className="btn-secondary"
                    onClick={handleAppleBusinessChat}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.04 1.05 4.35L2 22l5.65-1.05C9.96 21.64 11.46 22 13 22h7c1.1 0 2-.9 2-2V12c0-5.52-4.48-10-10-10z"/>
                    </svg>
                    Apple Business Chat
                  </button>
                </div>
              </div>

              {/* Apple Map Integration */}
              <div className="map-section glass-panel">
                <h3>Find Us</h3>
                <div className="apple-map">
                  <iframe
                    src="https://maps.apple.com/embed?ll=16.8409,96.1735&z=15&t=m"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: '10px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="eSIM Myanmar Location"
                  ></iframe>
                </div>
                <button className="btn-secondary map-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Open in Apple Maps
                </button>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="office-hours glass-panel">
            <h2>Office Hours</h2>
            <div className="hours-grid">
              <div className="hours-item">
                <span className="day">Monday - Friday</span>
                <span className="time">9:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="day">Saturday</span>
                <span className="time">10:00 AM - 4:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="day">Sunday</span>
                <span className="time">Closed</span>
              </div>
              <div className="hours-item">
                <span className="day">24/7 Support</span>
                <span className="time">Online Chat & Email</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
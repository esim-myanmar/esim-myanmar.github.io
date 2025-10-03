import { motion } from 'framer-motion'
import './Pages.css'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted')
  }

  return (
    <div className="page">
      <motion.section 
        className="page-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="glass-panel hero-panel">
            <h1>Contact Our Team</h1>
            <p>Get in touch with Myanmar's leading eSIM technology experts</p>
          </div>
        </div>
      </motion.section>

      <section className="page-content">
        <div className="container">
          <div className="contact-layout">
            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass-panel contact-form-panel">
                <h2>Send Us a Message</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input type="text" id="firstName" name="firstName" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input type="text" id="lastName" name="lastName" required />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="company">Company (Optional)</label>
                    <input type="text" id="company" name="company" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="inquiry">Inquiry Type</label>
                    <select id="inquiry" name="inquiry" required>
                      <option value="">Select an option</option>
                      <option value="general">General Information</option>
                      <option value="technical">Technical Support</option>
                      <option value="business">Business Partnership</option>
                      <option value="enterprise">Enterprise Solutions</option>
                      <option value="billing">Billing & Accounts</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" required placeholder="Please describe your inquiry in detail..."></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary form-submit">Send Message</button>
                </form>
              </div>
            </motion.div>

            <div className="contact-info-container">
              <motion.div 
                className="glass-panel contact-info-panel"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3>Get In Touch</h3>
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="method-icon">Email</div>
                    <div className="method-details">
                      <h4>Email Support</h4>
                      <p>info@esim.com.mm</p>
                      <span className="response-time">Response within 2 hours</span>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <div className="method-icon">Phone</div>
                    <div className="method-details">
                      <h4>Phone Support</h4>
                      <p>+95 965 0000172</p>
                      <span className="response-time">Available 24/7</span>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <div className="method-icon">Social</div>
                    <div className="method-details">
                      <h4>Social Media</h4>
                      <p>@eSIMMyanmar</p>
                      <span className="response-time">Follow for updates</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="glass-panel business-hours-panel"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3>Business Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span className="day">Monday - Friday</span>
                    <span className="time">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Saturday</span>
                    <span className="time">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Sunday</span>
                    <span className="time">Emergency Support Only</span>
                  </div>
                </div>
                
                <div className="emergency-note">
                  <h4>Emergency Support</h4>
                  <p>For critical technical issues, our emergency support team is available 24/7 via phone and email.</p>
                </div>
              </motion.div>

              <motion.div 
                className="glass-panel location-panel"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3>Office Location</h3>
                <div className="location-info">
                  <p>eSIM Myanmar Headquarters</p>
                  <p>Parami Road, No-70/A, Ward (16)</p>
                  <p>Hlaing Township, Yangon</p>
                  <p>Myanmar</p>
                </div>
                
                <div className="map-placeholder">
                  <div className="map-content">
                    <h4>Visit Our Office</h4>
                    <p>Schedule an appointment for in-person consultations and technical demonstrations</p>
                    <button className="btn-secondary map-btn">Get Directions</button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
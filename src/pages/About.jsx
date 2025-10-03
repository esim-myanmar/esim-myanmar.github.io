import { motion } from 'framer-motion'
import './Pages.css'

const About = () => {
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
            <h1>About eSIM Myanmar</h1>
            <p>Pioneering Myanmar's digital transformation through advanced connectivity solutions</p>
          </div>
        </div>
      </motion.section>

      <section className="page-content">
        <div className="container">
          <div className="content-grid">
            <motion.div 
              className="glass-panel content-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Our Mission</h2>
              <p>To revolutionize Myanmar's telecommunications landscape by delivering cutting-edge eSIM technology that enables instant, secure, and seamless digital connectivity for individuals, businesses, and enterprises across the nation.</p>
            </motion.div>

            <motion.div 
              className="glass-panel content-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2>Our Vision</h2>
              <p>To establish Myanmar as a regional leader in digital connectivity innovation, bridging traditional telecommunications with next-generation embedded SIM technology for a fully connected future.</p>
            </motion.div>

            <motion.div 
              className="glass-panel content-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2>Core Values</h2>
              <div className="values-list">
                <div className="value-item">
                  <h4>Innovation Excellence</h4>
                  <p>Continuously advancing technology to meet evolving connectivity needs</p>
                </div>
                <div className="value-item">
                  <h4>Security First</h4>
                  <p>Implementing enterprise-grade security protocols for all communications</p>
                </div>
                <div className="value-item">
                  <h4>Customer Centricity</h4>
                  <p>Delivering exceptional service experiences tailored to Myanmar's unique requirements</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="glass-panel content-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2>Technology Leadership</h2>
              <p>Our platform leverages the latest in embedded SIM technology, featuring advanced encryption, multi-profile management, and seamless carrier switching capabilities.</p>
              
              <div className="tech-highlights">
                <div className="highlight-item">
                  <span className="highlight-label">Network Coverage</span>
                  <span className="highlight-value">Nationwide 5G/4G</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-label">Security Standard</span>
                  <span className="highlight-value">Military Grade</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-label">Activation Speed</span>
                  <span className="highlight-value">Under 60 Seconds</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
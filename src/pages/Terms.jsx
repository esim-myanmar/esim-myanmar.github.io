import { motion } from 'framer-motion'
import './Pages.css'

const Terms = () => {
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
            <h1>Terms of Service</h1>
            <p>Terms and conditions governing the use of our eSIM services</p>
            <div className="policy-meta">
              <span>Last updated: December 2024</span>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="page-content">
        <div className="container">
          <div className="policy-content">
            <motion.div 
              className="glass-panel policy-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Acceptance of Terms</h2>
              <div className="policy-text">
                <p>By accessing and using eSIM Myanmar services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                <p>These terms apply to all users of the service, including without limitation users who are browsers, vendors, customers, merchants, and contributors of content.</p>
              </div>
            </motion.div>

            <motion.div 
              className="glass-panel policy-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2>Service Description</h2>
              <div className="policy-text">
                <p>eSIM Myanmar provides embedded SIM (eSIM) services including:</p>
                <ul>
                  <li>Digital SIM profile provisioning and management</li>
                  <li>Mobile network connectivity services</li>
                  <li>Customer support and technical assistance</li>
                  <li>Account management and billing services</li>
                  <li>Device compatibility verification</li>
                </ul>
                <p>Services are subject to network availability and device compatibility.</p>
              </div>
            </motion.div>

            <motion.div 
              className="glass-panel policy-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2>User Obligations</h2>
              <div className="policy-text">
                <p>As a user of our services, you agree to:</p>
                <ul>
                  <li>Provide accurate and complete information during registration</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use services in compliance with applicable laws and regulations</li>
                  <li>Not engage in fraudulent or unauthorized activities</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not interfere with or disrupt the service or servers</li>
                  <li>Pay all applicable fees and charges on time</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="glass-panel policy-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2>Payment and Billing</h2>
              <div className="policy-text">
                <p>Payment terms and conditions:</p>
                <ul>
                  <li>All fees are due and payable in advance unless otherwise specified</li>
                  <li>Prices are subject to change with 30 days notice</li>
                  <li>Refunds are provided according to our refund policy</li>
                  <li>Late payment may result in service suspension</li>
                  <li>You are responsible for all taxes and fees</li>
                  <li>Disputed charges must be reported within 60 days</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="glass-panel policy-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2>Service Availability</h2>
              <div className="policy-text">
                <p>While we strive to provide reliable service, we cannot guarantee:</p>
                <ul>
                  <li>Uninterrupted or error-free service operation</li>
                  <li>Compatibility with all devices or software</li>
                  <li>Service availability in all geographic areas</li>
                  <li>Specific data speeds or network performance</li>
                </ul>
                <p>We reserve the right to modify, suspend, or discontinue services with reasonable notice.</p>
              </div>
            </motion.div>

            <motion.div 
              className="glass-panel policy-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h2>Limitation of Liability</h2>
              <div className="policy-text">
                <p>To the maximum extent permitted by law, eSIM Myanmar shall not be liable for:</p>
                <ul>
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Service interruptions or network outages</li>
                  <li>Third-party actions or content</li>
                  <li>Device damage or compatibility issues</li>
                </ul>
                <p>Our total liability shall not exceed the amount paid for services in the preceding 12 months.</p>
              </div>
            </motion.div>

            <motion.div 
              className="glass-panel policy-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Termination</h2>
              <div className="policy-text">
                <p>Either party may terminate this agreement:</p>
                <ul>
                  <li>With 30 days written notice for convenience</li>
                  <li>Immediately for material breach of terms</li>
                  <li>Upon insolvency or bankruptcy</li>
                </ul>
                <p>Upon termination, your access to services will cease, and you remain liable for all accrued charges.</p>
              </div>
            </motion.div>

            <motion.div 
              className="glass-panel policy-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h2>Contact Information</h2>
              <div className="policy-text">
                <p>For questions about these Terms of Service, please contact us:</p>
                <div className="contact-details">
                  <p><strong>Email:</strong> legal@esim.com.mm</p>
                  <p><strong>Phone:</strong> +95 965 0000172</p>
                  <p><strong>Address:</strong> Parami Road, No-70/A, Ward (16), Hlaing Township, Yangon, Myanmar</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Terms
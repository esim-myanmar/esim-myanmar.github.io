import { motion } from 'framer-motion'
import './Pages.css'

const Privacy = () => {
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
            <h1>Privacy Policy</h1>
            <p>How we collect, use, and protect your personal information</p>
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
              <h2>Information We Collect</h2>
              <div className="policy-text">
                <h3>Personal Information</h3>
                <p>We collect information you provide directly to us, such as when you create an account, purchase our services, or contact us for support. This may include:</p>
                <ul>
                  <li>Name, email address, and phone number</li>
                  <li>Billing and payment information</li>
                  <li>Device information and identifiers</li>
                  <li>Communication preferences</li>
                </ul>

                <h3>Usage Information</h3>
                <p>We automatically collect certain information about your use of our services, including:</p>
                <ul>
                  <li>Network usage data and connection logs</li>
                  <li>Device performance and diagnostic information</li>
                  <li>Location data (when permitted)</li>
                  <li>Service usage patterns and preferences</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="glass-panel policy-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2>How We Use Your Information</h2>
              <div className="policy-text">
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide, maintain, and improve our eSIM services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, investigate, and prevent fraudulent transactions</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="glass-panel policy-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2>Information Sharing</h2>
              <div className="policy-text">
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>
                <ul>
                  <li>With your explicit consent</li>
                  <li>To our trusted service providers who assist in operating our services</li>
                  <li>To comply with legal obligations or protect our rights</li>
                  <li>In connection with a business transfer or acquisition</li>
                  <li>To network operators for service provisioning</li>
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
              <h2>Data Security</h2>
              <div className="policy-text">
                <p>We implement appropriate technical and organizational measures to protect your personal information, including:</p>
                <ul>
                  <li>End-to-end encryption for data transmission</li>
                  <li>Secure data storage with access controls</li>
                  <li>Regular security audits and assessments</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response and breach notification procedures</li>
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
              <h2>Your Rights</h2>
              <div className="policy-text">
                <p>You have the following rights regarding your personal information:</p>
                <ul>
                  <li>Access and review your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Delete your personal information (subject to legal requirements)</li>
                  <li>Restrict or object to certain processing activities</li>
                  <li>Data portability for information you provided</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="glass-panel policy-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h2>Contact Us</h2>
              <div className="policy-text">
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="contact-details">
                  <p><strong>Email:</strong> privacy@esim.com.mm</p>
                  <p><strong>Phone:</strong> +95 9650000172</p>
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

export default Privacy
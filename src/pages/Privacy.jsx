import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Pages.css'

const Privacy = () => {
  const heroRef = useRef()

  useEffect(() => {
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
  }, [])

  return (
    <div className="page-container">
      <section className="page-hero" ref={heroRef}>
        <div className="container">
          <div className="hero-content glass-panel">
            <h1 className="page-title">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="page-subtitle">
              Your privacy and data security are our top priorities
            </p>
            <p className="last-updated">Last updated: December 2024</p>
          </div>
        </div>
      </section>

      <section className="page-content section">
        <div className="container">
          <div className="legal-content glass-panel">
            <div className="section-item">
              <h2>Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you create an account, purchase our services, or contact us for support.</p>
              <ul>
                <li>Personal identification information (name, email, phone number)</li>
                <li>Payment information (processed securely through our payment partners)</li>
                <li>Device information (IMEI, device model, operating system)</li>
                <li>Usage data (data consumption, connection logs, service usage)</li>
                <li>Location data (for network optimization and fraud prevention)</li>
              </ul>
            </div>

            <div className="section-item">
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services:</p>
              <ul>
                <li>Provision and activate eSIM services</li>
                <li>Process payments and manage billing</li>
                <li>Provide customer support and technical assistance</li>
                <li>Improve network performance and service quality</li>
                <li>Prevent fraud and ensure service security</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </div>

            <div className="section-item">
              <h2>Data Security</h2>
              <p>We implement industry-standard security measures to protect your personal information:</p>
              <ul>
                <li>End-to-end encryption for all data transmission</li>
                <li>Secure data centers with 24/7 monitoring</li>
                <li>Regular security audits and penetration testing</li>
                <li>Multi-factor authentication for account access</li>
                <li>Compliance with international data protection standards</li>
              </ul>
            </div>

            <div className="section-item">
              <h2>Information Sharing</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share information in the following circumstances:</p>
              <ul>
                <li>With network operators to provide connectivity services</li>
                <li>With payment processors to handle transactions</li>
                <li>With service providers who assist in our operations</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </div>

            <div className="section-item">
              <h2>Your Rights</h2>
              <p>You have the following rights regarding your personal information:</p>
              <ul>
                <li>Access: Request a copy of your personal data</li>
                <li>Correction: Update or correct inaccurate information</li>
                <li>Deletion: Request deletion of your personal data</li>
                <li>Portability: Request transfer of your data</li>
                <li>Objection: Object to certain processing activities</li>
                <li>Restriction: Request limitation of processing</li>
              </ul>
            </div>

            <div className="section-item">
              <h2>Cookies and Tracking</h2>
              <p>We use cookies and similar technologies to enhance your experience:</p>
              <ul>
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand usage patterns</li>
                <li>Preference cookies to remember your settings</li>
                <li>Marketing cookies for personalized content</li>
              </ul>
            </div>

            <div className="section-item">
              <h2>International Transfers</h2>
              <p>Your information may be transferred to and processed in countries other than Myanmar. We ensure appropriate safeguards are in place for such transfers.</p>
            </div>

            <div className="section-item">
              <h2>Data Retention</h2>
              <p>We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Specific retention periods vary by data type.</p>
            </div>

            <div className="section-item">
              <h2>Children's Privacy</h2>
              <p>Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>
            </div>

            <div className="section-item">
              <h2>Changes to This Policy</h2>
              <p>We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on our website.</p>
            </div>

            <div className="contact-section">
              <h2>Contact Us</h2>
              <p>If you have any questions about this privacy policy, please contact us:</p>
              <div className="contact-info">
                <p><strong>Email:</strong> privacy@esim.com.mm</p>
                <p><strong>Phone:</strong> +95 9650000172</p>
                <p><strong>Address:</strong> Parami Road, No-70/A, Ward (16), Hlaing Township, Yangon, Myanmar</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Pages.css'

const Terms = () => {
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
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="page-subtitle">
              Please read these terms carefully before using our services
            </p>
            <p className="last-updated">Last updated: December 2024</p>
          </div>
        </div>
      </section>

      <section className="page-content section">
        <div className="container">
          <div className="legal-content glass-panel">
            <div className="section-item">
              <h2>Acceptance of Terms</h2>
              <p>By accessing and using eSIM Myanmar services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
            </div>

            <div className="section-item">
              <h2>Service Description</h2>
              <p>eSIM Myanmar provides embedded SIM (eSIM) services including:</p>
              <ul>
                <li>Mobile connectivity services in Myanmar and internationally</li>
                <li>Data plans for smartphones, tablets, and IoT devices</li>
                <li>Voice and messaging services where applicable</li>
                <li>Network roaming services through partner operators</li>
                <li>Customer support and technical assistance</li>
              </ul>
            </div>

            <div className="section-item">
              <h2>Eligibility</h2>
              <p>To use our services, you must:</p>
              <ul>
                <li>Be at least 18 years old or have parental consent</li>
                <li>Have a compatible eSIM-enabled device</li>
                <li>Provide accurate and complete registration information</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use the service for illegal or unauthorized purposes</li>
              </ul>
            </div>

            <div className="section-item">
              <h2>Account Registration</h2>
              <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding your account credentials and for all activities that occur under your account.</p>
            </div>

            <div className="section-item">
              <h2>Payment Terms</h2>
              <p>Payment for services is due in advance. We accept various payment methods including:</p>
              <ul>
                <li>Apple Pay and other mobile payment systems</li>
                <li>Credit and debit cards</li>
                <li>Bank transfers</li>
                <li>Cryptocurrency payments</li>
                <li>NFC and QR code payments</li>
              </ul>
              <p>All fees are non-refundable unless otherwise stated or required by law.</p>
            </div>

            <div className="section-item">
              <h2>Service Usage</h2>
              <p>You agree to use our services responsibly and in accordance with:</p>
              <ul>
                <li>Fair usage policies for data consumption</li>
                <li>Network optimization requirements</li>
                <li>Applicable laws and regulations</li>
                <li>Respect for other users' rights</li>
                <li>Security and fraud prevention measures</li>
              </ul>
            </div>

            <div className="section-item">
              <h2>Prohibited Uses</h2>
              <p>You may not use our services for:</p>
              <ul>
                <li>Illegal activities or violation of laws</li>
                <li>Harassment, abuse, or harm to others</li>
                <li>Spam, fraud, or deceptive practices</li>
                <li>Network abuse or excessive usage</li>
                <li>Circumventing security measures</li>
                <li>Reselling services without authorization</li>
              </ul>
            </div>

            <div className="section-item">
              <h2>Service Availability</h2>
              <p>While we strive to provide continuous service, we cannot guarantee 100% uptime. Service may be interrupted due to:</p>
              <ul>
                <li>Scheduled maintenance</li>
                <li>Network operator issues</li>
                <li>Technical difficulties</li>
                <li>Force majeure events</li>
                <li>Regulatory requirements</li>
              </ul>
            </div>

            <div className="section-item">
              <h2>Limitation of Liability</h2>
              <p>eSIM Myanmar shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
            </div>

            <div className="section-item">
              <h2>Termination</h2>
              <p>We may terminate or suspend your account and access to services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
            </div>

            <div className="section-item">
              <h2>Intellectual Property</h2>
              <p>The service and its original content, features, and functionality are and will remain the exclusive property of eSIM Myanmar and its licensors. The service is protected by copyright, trademark, and other laws.</p>
            </div>

            <div className="section-item">
              <h2>Privacy Policy</h2>
              <p>Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.</p>
            </div>

            <div className="section-item">
              <h2>Governing Law</h2>
              <p>These Terms shall be interpreted and governed by the laws of Myanmar, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Myanmar.</p>
            </div>

            <div className="section-item">
              <h2>Changes to Terms</h2>
              <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.</p>
            </div>

            <div className="contact-section">
              <h2>Contact Information</h2>
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <div className="contact-info">
                <p><strong>Email:</strong> legal@esim.com.mm</p>
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

export default Terms
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Pages.css'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const heroRef = useRef()
  const contentRef = useRef()

  useEffect(() => {
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )

    gsap.fromTo(contentRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%"
        }
      }
    )
  }, [])

  return (
    <div className="page-container">
      <section className="page-hero" ref={heroRef}>
        <div className="container">
          <div className="hero-content glass-panel">
            <h1 className="page-title">
              About <span className="gradient-text">eSIM Myanmar</span>
            </h1>
            <p className="page-subtitle">
              Pioneering the future of connectivity in Myanmar with cutting-edge eSIM technology
            </p>
          </div>
        </div>
      </section>

      <section className="page-content section" ref={contentRef}>
        <div className="container">
          <div className="content-grid">
            <div className="content-card glass-panel">
              <h2>Our Mission</h2>
              <p>
                At eSIM Myanmar, we're revolutionizing telecommunications by providing seamless, 
                secure, and instant connectivity solutions. Our mission is to eliminate the barriers 
                of traditional SIM cards and empower Myanmar with the freedom of digital connectivity.
              </p>
            </div>

            <div className="content-card glass-panel">
              <h2>Innovation First</h2>
              <p>
                We leverage the latest in IoT technology, 5G networks, and smart device integration 
                to deliver unparalleled connectivity experiences. Our platform supports everything 
                from smartphones to industrial IoT devices.
              </p>
            </div>

            <div className="content-card glass-panel">
              <h2>Global Reach</h2>
              <p>
                With partnerships across 190+ countries, we ensure Myanmar stays connected to the world. 
                Our extensive roaming agreements and local partnerships provide seamless international 
                connectivity.
              </p>
            </div>

            <div className="content-card glass-panel">
              <h2>Security & Trust</h2>
              <p>
                Built on enterprise-grade security protocols with end-to-end encryption, biometric 
                authentication, and secure element technology. Your data and communications are 
                protected by bank-level security.
              </p>
            </div>
          </div>

          <div className="company-info glass-panel">
            <h2>Company Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <strong>Founded:</strong> 2023
              </div>
              <div className="info-item">
                <strong>Headquarters:</strong> Yangon, Myanmar
              </div>
              <div className="info-item">
                <strong>Address:</strong> Parami Road, No-70/A, Ward (16), Hlaing Township, Yangon, Myanmar
              </div>
              <div className="info-item">
                <strong>Email:</strong> info@esim.com.mm
              </div>
              <div className="info-item">
                <strong>Phone:</strong> +95 9650000172
              </div>
              <div className="info-item">
                <strong>Social:</strong> @eSIMMyanmar
              </div>
            </div>
          </div>

          <div className="values-section">
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-item glass-panel">
                <div className="value-icon">🚀</div>
                <h3>Innovation</h3>
                <p>Constantly pushing the boundaries of what's possible in telecommunications</p>
              </div>
              <div className="value-item glass-panel">
                <div className="value-icon">🤝</div>
                <h3>Trust</h3>
                <p>Building lasting relationships through transparency and reliability</p>
              </div>
              <div className="value-item glass-panel">
                <div className="value-icon">🌍</div>
                <h3>Accessibility</h3>
                <p>Making advanced connectivity available to everyone in Myanmar</p>
              </div>
              <div className="value-item glass-panel">
                <div className="value-icon">🔒</div>
                <h3>Security</h3>
                <p>Protecting our customers' data with the highest security standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
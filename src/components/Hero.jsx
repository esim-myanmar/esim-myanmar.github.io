import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef()
  const titleRef = useRef()
  const subtitleRef = useRef()
  const ctaRef = useRef()

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 })
    
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.3"
    )

    // Floating animation for CTA buttons
    gsap.to(ctaRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })
  }, [])

  const handleApplePay = () => {
    // Apple Pay integration placeholder
    if (window.ApplePaySession && ApplePaySession.canMakePayments()) {
      console.log('Apple Pay available')
      // Initialize Apple Pay session
    } else {
      alert('Apple Pay not available on this device')
    }
  }

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-content glass-panel">
        <h1 ref={titleRef} className="hero-title">
          Connect Myanmar with
          <span className="gradient-text"> eSIM Technology</span>
        </h1>
        
        <p ref={subtitleRef} className="hero-subtitle">
          Experience seamless connectivity across Myanmar with our cutting-edge eSIM solutions. 
          No physical SIM cards, instant activation, and global roaming capabilities.
        </p>
        
        <div ref={ctaRef} className="hero-cta">
          <button className="btn-primary hero-btn">
            Get Your eSIM Now
          </button>
          <button className="btn-secondary hero-btn" onClick={handleApplePay}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Pay with Apple Pay
          </button>
        </div>

        <div className="hero-features">
          <div className="feature-item">
            <div className="feature-icon">📱</div>
            <span>Instant Activation</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🌐</div>
            <span>Global Roaming</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔒</div>
            <span>Secure & Reliable</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📡</div>
            <span>5G Ready</span>
          </div>
        </div>
      </div>

      {/* NFC Integration Indicator */}
      <div className="nfc-indicator">
        <div className="nfc-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20,2H4A2,2 0 0,0 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4A2,2 0 0,0 20,2M20,20H4V4H20V20M18,6H16.5A2.5,2.5 0 0,0 14,8.5V15.5A2.5,2.5 0 0,0 16.5,18H18V6M16.5,16.5A1,1 0 0,1 15.5,15.5V8.5A1,1 0 0,1 16.5,7.5A1,1 0 0,1 17.5,8.5V15.5A1,1 0 0,1 16.5,16.5M6,6V18H7.5V14.5H9.5V18H11V6H9.5V13H7.5V6H6Z"/>
          </svg>
        </div>
        <span>NFC Enabled</span>
      </div>
    </section>
  )
}

export default Hero
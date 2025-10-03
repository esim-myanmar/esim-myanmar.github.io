import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Pages.css'

gsap.registerPlugin(ScrollTrigger)

const HowItWorks = () => {
  const heroRef = useRef()
  const stepsRef = useRef([])

  useEffect(() => {
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )

    stepsRef.current.forEach((step, index) => {
      gsap.fromTo(step,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })
  }, [])

  const steps = [
    {
      number: "01",
      title: "Choose Your Plan",
      description: "Select from our flexible data plans designed for Myanmar and international use. Compare features and pricing to find the perfect fit.",
      icon: "📋",
      details: ["Local and international plans", "Flexible data allowances", "No contract required", "Instant plan changes"]
    },
    {
      number: "02", 
      title: "Complete Payment",
      description: "Pay securely using Apple Pay, NFC, credit card, or cryptocurrency. Our payment system supports multiple methods for your convenience.",
      icon: "💳",
      details: ["Apple Pay integration", "NFC payments", "Crypto wallet support", "Secure transactions"]
    },
    {
      number: "03",
      title: "Receive QR Code",
      description: "Get your unique eSIM activation QR code instantly via email or SMS. The code contains all necessary network configuration.",
      icon: "📱",
      details: ["Instant delivery", "Email and SMS options", "Secure QR generation", "Manual setup available"]
    },
    {
      number: "04",
      title: "Scan & Activate",
      description: "Open your device's eSIM settings and scan the QR code. Your eSIM will be activated automatically within minutes.",
      icon: "📡",
      details: ["Quick QR scan", "Automatic configuration", "Network optimization", "Instant connectivity"]
    }
  ]

  const features = [
    {
      title: "IoT Device Setup",
      description: "Connect your smart devices using our IoT-specific eSIM profiles",
      icon: "🏠",
      steps: ["API integration", "Device provisioning", "Remote management", "Bulk activation"]
    },
    {
      title: "Business Solutions",
      description: "Enterprise-grade eSIM management for your organization",
      icon: "🏢", 
      steps: ["Bulk management", "Custom billing", "Admin dashboard", "24/7 support"]
    },
    {
      title: "Travel Plans",
      description: "Stay connected while traveling with our global roaming plans",
      icon: "✈️",
      steps: ["190+ countries", "Local rates", "No roaming fees", "Instant activation"]
    }
  ]

  return (
    <div className="page-container">
      <section className="page-hero" ref={heroRef}>
        <div className="container">
          <div className="hero-content glass-panel">
            <h1 className="page-title">
              How <span className="gradient-text">eSIM Myanmar</span> Works
            </h1>
            <p className="page-subtitle">
              Get connected in 4 simple steps - no physical SIM cards, no waiting
            </p>
          </div>
        </div>
      </section>

      <section className="page-content section">
        <div className="container">
          <div className="steps-container">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="step-item glass-panel"
                ref={el => stepsRef.current[index] = el}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <div className="step-header">
                    <div className="step-icon">{step.icon}</div>
                    <h3 className="step-title">{step.title}</h3>
                  </div>
                  <p className="step-description">{step.description}</p>
                  <ul className="step-details">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="features-section">
            <h2 className="section-title">Advanced Features</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card glass-panel">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  <ul className="feature-steps">
                    {feature.steps.map((step, stepIndex) => (
                      <li key={stepIndex}>{step}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="tech-requirements glass-panel">
            <h2>Technical Requirements</h2>
            <div className="requirements-grid">
              <div className="requirement-item">
                <h4>Device Compatibility</h4>
                <p>eSIM-enabled smartphone, tablet, or IoT device</p>
              </div>
              <div className="requirement-item">
                <h4>Network Support</h4>
                <p>4G/5G compatible device with latest carrier settings</p>
              </div>
              <div className="requirement-item">
                <h4>Software Version</h4>
                <p>Latest iOS/Android version for optimal performance</p>
              </div>
              <div className="requirement-item">
                <h4>Internet Connection</h4>
                <p>WiFi or mobile data for initial eSIM download</p>
              </div>
            </div>
          </div>

          <div className="cta-section glass-panel">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of satisfied customers using eSIM Myanmar</p>
            <div className="cta-buttons">
              <button className="btn-primary">Get Your eSIM Now</button>
              <button className="btn-secondary">Check Compatibility</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
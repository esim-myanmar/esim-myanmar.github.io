import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Features.css'

gsap.registerPlugin(ScrollTrigger)

const Features = () => {
  const sectionRef = useRef()
  const cardsRef = useRef([])

  useEffect(() => {
    const cards = cardsRef.current

    cards.forEach((card, index) => {
      gsap.fromTo(card, 
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })
  }, [])

  const features = [
    {
      icon: "🚀",
      title: "Instant Activation",
      description: "Get connected in seconds with QR code scanning. No waiting, no physical SIM cards needed.",
      tech: "IoT Ready"
    },
    {
      icon: "🌍",
      title: "Global Coverage",
      description: "Stay connected across 190+ countries with our extensive partner network and roaming agreements.",
      tech: "5G Compatible"
    },
    {
      icon: "🔐",
      title: "Enterprise Security",
      description: "Bank-grade encryption and secure authentication protocols protect your data and communications.",
      tech: "End-to-End Encrypted"
    },
    {
      icon: "📱",
      title: "Multi-Device Support",
      description: "Use multiple eSIM profiles on compatible devices. Perfect for business and personal use.",
      tech: "Cross-Platform"
    },
    {
      icon: "⚡",
      title: "Smart IoT Integration",
      description: "Connect your IoT devices seamlessly with our smart connectivity solutions and APIs.",
      tech: "API Enabled"
    },
    {
      icon: "💳",
      title: "Flexible Billing",
      description: "Pay-as-you-go or subscription plans. Apple Pay, NFC payments, and crypto options available.",
      tech: "Multi-Payment"
    }
  ]

  return (
    <section className="features section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Why Choose <span className="gradient-text">eSIM Myanmar</span>
          </h2>
          <p className="section-subtitle">
            Experience the future of connectivity with our cutting-edge eSIM technology
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card glass-panel"
              ref={el => cardsRef.current[index] = el}
            >
              <div className="feature-header">
                <div className="feature-icon">{feature.icon}</div>
                <span className="feature-tech">{feature.tech}</span>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-glow"></div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <div className="cta-content glass-panel">
            <h3>Ready to Experience eSIM Myanmar?</h3>
            <p>Join thousands of satisfied customers who've made the switch to eSIM technology</p>
            <div className="cta-buttons">
              <button className="btn-primary">Get Started Now</button>
              <button className="btn-secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
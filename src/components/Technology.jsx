import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Technology.css'

gsap.registerPlugin(ScrollTrigger)

const Technology = () => {
  const sectionRef = useRef()
  const techItemsRef = useRef([])

  useEffect(() => {
    const items = techItemsRef.current

    items.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })
  }, [])

  const technologies = [
    {
      category: "Connectivity",
      items: [
        { name: "5G Network", status: "Active", icon: "📡" },
        { name: "4G LTE", status: "Active", icon: "📶" },
        { name: "VoLTE", status: "Active", icon: "📞" },
        { name: "WiFi Calling", status: "Active", icon: "📲" }
      ]
    },
    {
      category: "Security",
      items: [
        { name: "End-to-End Encryption", status: "Active", icon: "🔐" },
        { name: "Biometric Auth", status: "Active", icon: "👆" },
        { name: "Secure Element", status: "Active", icon: "🛡️" },
        { name: "Zero Trust", status: "Beta", icon: "🔒" }
      ]
    },
    {
      category: "IoT Integration",
      items: [
        { name: "Smart Home", status: "Active", icon: "🏠" },
        { name: "Automotive", status: "Active", icon: "🚗" },
        { name: "Wearables", status: "Active", icon: "⌚" },
        { name: "Industrial IoT", status: "Coming Soon", icon: "🏭" }
      ]
    },
    {
      category: "Payment Systems",
      items: [
        { name: "Apple Pay", status: "Active", icon: "💳" },
        { name: "NFC Payments", status: "Active", icon: "📱" },
        { name: "Crypto Wallet", status: "Beta", icon: "₿" },
        { name: "QR Payments", status: "Active", icon: "📄" }
      ]
    }
  ]

  return (
    <section className="technology section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Advanced Technology</span> Stack
          </h2>
          <p className="section-subtitle">
            Built on cutting-edge infrastructure with the latest innovations in connectivity and security
          </p>
        </div>

        <div className="tech-grid">
          {technologies.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="tech-category glass-panel"
              ref={el => techItemsRef.current[categoryIndex] = el}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="tech-items">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="tech-item">
                    <div className="tech-icon">{item.icon}</div>
                    <div className="tech-info">
                      <span className="tech-name">{item.name}</span>
                      <span className={`tech-status ${item.status.toLowerCase().replace(' ', '-')}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-stats">
          <div className="stat-item glass-panel">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Uptime</div>
          </div>
          <div className="stat-item glass-panel">
            <div className="stat-number">190+</div>
            <div className="stat-label">Countries</div>
          </div>
          <div className="stat-item glass-panel">
            <div className="stat-number">50ms</div>
            <div className="stat-label">Latency</div>
          </div>
          <div className="stat-item glass-panel">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technology
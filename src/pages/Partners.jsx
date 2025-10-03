import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Pages.css'

gsap.registerPlugin(ScrollTrigger)

const Partners = () => {
  const heroRef = useRef()
  const partnersRef = useRef([])

  useEffect(() => {
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )

    partnersRef.current.forEach((partner, index) => {
      gsap.fromTo(partner,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: partner,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })
  }, [])

  const partnerCategories = [
    {
      title: "Network Operators",
      partners: [
        {
          name: "Telenor Myanmar",
          logo: "📡",
          description: "Leading telecommunications provider with extensive 4G/5G coverage across Myanmar",
          services: ["Voice & Data", "5G Network", "Enterprise Solutions"],
          coverage: "95%"
        },
        {
          name: "Ooredoo Myanmar", 
          logo: "📶",
          description: "International carrier offering premium connectivity and digital services",
          services: ["Mobile Data", "IoT Connectivity", "Business Plans"],
          coverage: "92%"
        },
        {
          name: "MPT (Myanmar Posts and Telecommunications)",
          logo: "📱",
          description: "National telecommunications operator with the widest network coverage",
          services: ["Nationwide Coverage", "Rural Connectivity", "Government Services"],
          coverage: "98%"
        },
        {
          name: "Mytel",
          logo: "📞",
          description: "Modern telecom provider focusing on digital innovation and smart services",
          services: ["Digital Services", "Smart City Solutions", "4G/5G"],
          coverage: "90%"
        }
      ]
    },
    {
      title: "Technology Partners",
      partners: [
        {
          name: "Apple",
          logo: "🍎",
          description: "Strategic partnership for Apple Pay, Business Chat, and device integration",
          services: ["Apple Pay", "Business Messaging", "Device Support"],
          integration: "Full"
        },
        {
          name: "Google Cloud",
          logo: "☁️",
          description: "Cloud infrastructure and AI-powered network optimization services",
          services: ["Cloud Infrastructure", "AI Analytics", "Security"],
          integration: "Enterprise"
        },
        {
          name: "Amazon Web Services",
          logo: "🔧",
          description: "Scalable cloud computing and IoT device management platform",
          services: ["IoT Core", "Lambda Functions", "Global CDN"],
          integration: "Full"
        },
        {
          name: "Microsoft Azure",
          logo: "🔷",
          description: "Enterprise solutions and business intelligence platforms",
          services: ["Enterprise Apps", "Business Intelligence", "Security"],
          integration: "Enterprise"
        }
      ]
    },
    {
      title: "IoT & Smart Device Partners",
      partners: [
        {
          name: "Samsung SmartThings",
          logo: "🏠",
          description: "Smart home ecosystem integration and device connectivity",
          services: ["Smart Home", "Device Management", "Automation"],
          devices: "500+"
        },
        {
          name: "Tesla",
          logo: "🚗",
          description: "Connected vehicle services and automotive IoT solutions",
          services: ["Vehicle Connectivity", "Over-the-Air Updates", "Navigation"],
          devices: "Automotive"
        },
        {
          name: "Garmin",
          logo: "⌚",
          description: "Wearable technology and fitness tracking device connectivity",
          services: ["Fitness Tracking", "GPS Services", "Health Monitoring"],
          devices: "Wearables"
        },
        {
          name: "Bosch IoT",
          logo: "🏭",
          description: "Industrial IoT solutions and smart manufacturing connectivity",
          services: ["Industrial IoT", "Asset Tracking", "Predictive Maintenance"],
          devices: "Industrial"
        }
      ]
    },
    {
      title: "Payment Partners",
      partners: [
        {
          name: "Visa",
          logo: "💳",
          description: "Global payment processing and secure transaction services",
          services: ["Card Processing", "Digital Payments", "Security"],
          regions: "Global"
        },
        {
          name: "Mastercard",
          logo: "💰",
          description: "Worldwide payment solutions and financial technology services",
          services: ["Payment Gateway", "Fraud Protection", "Analytics"],
          regions: "Global"
        },
        {
          name: "PayPal",
          logo: "💸",
          description: "Digital wallet and online payment platform integration",
          services: ["Digital Wallet", "Online Payments", "Buyer Protection"],
          regions: "International"
        },
        {
          name: "Cryptocurrency Exchanges",
          logo: "₿",
          description: "Bitcoin, Ethereum, and other cryptocurrency payment options",
          services: ["Crypto Payments", "Wallet Integration", "Exchange Services"],
          regions: "Global"
        }
      ]
    }
  ]

  return (
    <div className="page-container">
      <section className="page-hero" ref={heroRef}>
        <div className="container">
          <div className="hero-content glass-panel">
            <h1 className="page-title">
              Our <span className="gradient-text">Partners</span>
            </h1>
            <p className="page-subtitle">
              Working with industry leaders to deliver the best eSIM experience in Myanmar
            </p>
          </div>
        </div>
      </section>

      <section className="page-content section">
        <div className="container">
          {partnerCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="partner-category">
              <h2 className="category-title">{category.title}</h2>
              <div className="partners-grid">
                {category.partners.map((partner, partnerIndex) => (
                  <div 
                    key={partnerIndex}
                    className="partner-card glass-panel"
                    ref={el => partnersRef.current[categoryIndex * 4 + partnerIndex] = el}
                  >
                    <div className="partner-header">
                      <div className="partner-logo">{partner.logo}</div>
                      <h3 className="partner-name">{partner.name}</h3>
                    </div>
                    <p className="partner-description">{partner.description}</p>
                    <div className="partner-services">
                      <h4>Services:</h4>
                      <ul>
                        {partner.services.map((service, serviceIndex) => (
                          <li key={serviceIndex}>{service}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="partner-stats">
                      {partner.coverage && (
                        <div className="stat">
                          <span className="stat-label">Coverage:</span>
                          <span className="stat-value">{partner.coverage}</span>
                        </div>
                      )}
                      {partner.integration && (
                        <div className="stat">
                          <span className="stat-label">Integration:</span>
                          <span className="stat-value">{partner.integration}</span>
                        </div>
                      )}
                      {partner.devices && (
                        <div className="stat">
                          <span className="stat-label">Devices:</span>
                          <span className="stat-value">{partner.devices}</span>
                        </div>
                      )}
                      {partner.regions && (
                        <div className="stat">
                          <span className="stat-label">Regions:</span>
                          <span className="stat-value">{partner.regions}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="partnership-benefits glass-panel">
            <h2>Partnership Benefits</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">🌐</div>
                <h3>Global Reach</h3>
                <p>Access to 190+ countries through our extensive partner network</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🔧</div>
                <h3>Technical Excellence</h3>
                <p>Cutting-edge technology integration with industry leaders</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">💡</div>
                <h3>Innovation</h3>
                <p>Continuous development of new features and services</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🤝</div>
                <h3>Reliability</h3>
                <p>Trusted partnerships ensuring consistent service quality</p>
              </div>
            </div>
          </div>

          <div className="become-partner glass-panel">
            <h2>Become a Partner</h2>
            <p>Join our growing ecosystem of technology and service partners</p>
            <div className="partner-cta">
              <button className="btn-primary">Partnership Inquiry</button>
              <button className="btn-secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.04 1.05 4.35L2 22l5.65-1.05C9.96 21.64 11.46 22 13 22h7c1.1 0 2-.9 2-2V12c0-5.52-4.48-10-10-10z"/>
                </svg>
                Apple Business Chat
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Partners
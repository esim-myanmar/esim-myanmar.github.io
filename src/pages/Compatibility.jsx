import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Pages.css'

gsap.registerPlugin(ScrollTrigger)

const Compatibility = () => {
  const [selectedCategory, setSelectedCategory] = useState('smartphones')
  const heroRef = useRef()
  const contentRef = useRef()

  useEffect(() => {
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
  }, [])

  const deviceCategories = {
    smartphones: {
      title: 'Smartphones',
      icon: '📱',
      devices: [
        { brand: 'Apple', models: ['iPhone 14 Pro Max', 'iPhone 14 Pro', 'iPhone 14', 'iPhone 13 Series', 'iPhone 12 Series', 'iPhone SE (3rd gen)'], support: 'Full' },
        { brand: 'Samsung', models: ['Galaxy S23 Ultra', 'Galaxy S23+', 'Galaxy S23', 'Galaxy S22 Series', 'Galaxy Note 20 Series'], support: 'Full' },
        { brand: 'Google', models: ['Pixel 7 Pro', 'Pixel 7', 'Pixel 6 Series', 'Pixel 5'], support: 'Full' },
        { brand: 'Huawei', models: ['P50 Pro', 'Mate 40 Pro', 'P40 Series'], support: 'Partial' },
        { brand: 'Xiaomi', models: ['Mi 13 Pro', 'Mi 12 Series', 'Redmi Note 12 Pro'], support: 'Full' }
      ]
    },
    tablets: {
      title: 'Tablets',
      icon: '📟',
      devices: [
        { brand: 'Apple', models: ['iPad Pro (6th gen)', 'iPad Air (5th gen)', 'iPad (10th gen)', 'iPad mini (6th gen)'], support: 'Full' },
        { brand: 'Samsung', models: ['Galaxy Tab S8 Ultra', 'Galaxy Tab S8+', 'Galaxy Tab S8'], support: 'Full' },
        { brand: 'Microsoft', models: ['Surface Pro 9 (5G)', 'Surface Go 3 (LTE)'], support: 'Full' }
      ]
    },
    wearables: {
      title: 'Wearables',
      icon: '⌚',
      devices: [
        { brand: 'Apple', models: ['Apple Watch Series 8 (GPS + Cellular)', 'Apple Watch SE (2nd gen)', 'Apple Watch Ultra'], support: 'Full' },
        { brand: 'Samsung', models: ['Galaxy Watch5 Pro (LTE)', 'Galaxy Watch5 (LTE)', 'Galaxy Watch4 (LTE)'], support: 'Full' },
        { brand: 'Garmin', models: ['Venu 2 Plus', 'Forerunner 955 LTE'], support: 'Partial' }
      ]
    },
    iot: {
      title: 'IoT Devices',
      icon: '🏠',
      devices: [
        { brand: 'Smart Home', models: ['Security Cameras', 'Smart Doorbells', 'Environmental Sensors'], support: 'Full' },
        { brand: 'Automotive', models: ['Connected Cars', 'Fleet Management', 'Telematics'], support: 'Full' },
        { brand: 'Industrial', models: ['Asset Tracking', 'Remote Monitoring', 'Smart Meters'], support: 'Beta' }
      ]
    }
  }

  const carriers = [
    { name: 'Telenor Myanmar', logo: '📡', coverage: '95%', technology: '4G/5G' },
    { name: 'Ooredoo Myanmar', logo: '📶', coverage: '92%', technology: '4G/5G' },
    { name: 'MPT', logo: '📱', coverage: '98%', technology: '4G/5G' },
    { name: 'Mytel', logo: '📞', coverage: '90%', technology: '4G/5G' }
  ]

  return (
    <div className="page-container">
      <section className="page-hero" ref={heroRef}>
        <div className="container">
          <div className="hero-content glass-panel">
            <h1 className="page-title">
              Device <span className="gradient-text">Compatibility</span>
            </h1>
            <p className="page-subtitle">
              Check if your device supports eSIM technology and works with our network
            </p>
          </div>
        </div>
      </section>

      <section className="page-content section" ref={contentRef}>
        <div className="container">
          {/* Device Categories */}
          <div className="category-selector">
            {Object.entries(deviceCategories).map(([key, category]) => (
              <button
                key={key}
                className={`category-btn ${selectedCategory === key ? 'active' : ''}`}
                onClick={() => setSelectedCategory(key)}
              >
                <span className="category-icon">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>

          <div className="devices-grid">
            {deviceCategories[selectedCategory].devices.map((device, index) => (
              <div key={index} className="device-card glass-panel">
                <div className="device-header">
                  <h3 className="device-brand">{device.brand}</h3>
                  <span className={`support-badge ${device.support.toLowerCase()}`}>
                    {device.support} Support
                  </span>
                </div>
                <div className="device-models">
                  {device.models.map((model, modelIndex) => (
                    <span key={modelIndex} className="model-tag">{model}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Carrier Support */}
          <div className="carriers-section">
            <h2 className="section-title">Supported Carriers</h2>
            <div className="carriers-grid">
              {carriers.map((carrier, index) => (
                <div key={index} className="carrier-card glass-panel">
                  <div className="carrier-logo">{carrier.logo}</div>
                  <h3 className="carrier-name">{carrier.name}</h3>
                  <div className="carrier-stats">
                    <div className="stat">
                      <span className="stat-label">Coverage</span>
                      <span className="stat-value">{carrier.coverage}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">Technology</span>
                      <span className="stat-value">{carrier.technology}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="payment-methods glass-panel">
            <h2>Supported Payment Methods</h2>
            <div className="payment-grid">
              <div className="payment-item">
                <div className="payment-icon">💳</div>
                <span>Apple Pay</span>
              </div>
              <div className="payment-item">
                <div className="payment-icon">📱</div>
                <span>NFC Payments</span>
              </div>
              <div className="payment-item">
                <div className="payment-icon">💰</div>
                <span>Credit/Debit Cards</span>
              </div>
              <div className="payment-item">
                <div className="payment-icon">₿</div>
                <span>Cryptocurrency</span>
              </div>
              <div className="payment-item">
                <div className="payment-icon">🏦</div>
                <span>Bank Transfer</span>
              </div>
              <div className="payment-item">
                <div className="payment-icon">📄</div>
                <span>QR Code</span>
              </div>
            </div>
          </div>

          {/* Compatibility Checker */}
          <div className="compatibility-checker glass-panel">
            <h2>Check Your Device</h2>
            <p>Enter your device model to check eSIM compatibility</p>
            <div className="checker-form">
              <input 
                type="text" 
                placeholder="Enter device model (e.g., iPhone 14 Pro)"
                className="device-input"
              />
              <button className="btn-primary">Check Compatibility</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Compatibility
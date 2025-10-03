import { motion } from 'framer-motion'
import './Pages.css'

const Compatibility = () => {
  const deviceCategories = [
    {
      title: "Apple iPhone",
      badge: "Full Support",
      devices: [
        "iPhone 15 Series", "iPhone 14 Series", "iPhone 13 Series",
        "iPhone 12 Series", "iPhone 11 Series", "iPhone XS / XS Max",
        "iPhone XR", "iPhone SE 2nd Gen"
      ]
    },
    {
      title: "Samsung Galaxy",
      badge: "Full Support", 
      devices: [
        "Galaxy S24 Series", "Galaxy S23 Series", "Galaxy S22 Series",
        "Galaxy S21 Series", "Galaxy S20 Series", "Galaxy Note 20 Series",
        "Galaxy Z Fold 5", "Galaxy Z Flip 5"
      ]
    },
    {
      title: "Google Pixel",
      badge: "Full Support",
      devices: [
        "Pixel 8 Pro", "Pixel 7 Pro", "Pixel 6 Pro",
        "Pixel 5", "Pixel 4 XL", "Pixel 3 XL", "Pixel Fold"
      ]
    },
    {
      title: "Premium Brands",
      badge: "Selective Support",
      devices: [
        "Huawei P50 Pro", "Huawei Mate 50 Pro", "OnePlus 11 Pro",
        "OnePlus 10 Pro", "Xiaomi 13 Pro", "Xiaomi 12 Pro",
        "Oppo Find X6 Pro", "Motorola Razr 40"
      ]
    }
  ]

  const verificationSteps = [
    {
      number: "01",
      title: "Check Device Settings",
      description: "Navigate to your device settings and look for 'Cellular' or 'Mobile Network' options"
    },
    {
      number: "02", 
      title: "Locate eSIM Option",
      description: "Look for 'Add Cellular Plan' or 'Add Mobile Plan' in your network settings"
    },
    {
      number: "03",
      title: "Verify EID Number", 
      description: "Dial *#06# to display your device's EID (Embedded Identity Document)"
    },
    {
      number: "04",
      title: "Contact Support",
      description: "If unsure, contact our technical support team for personalized assistance"
    }
  ]

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
            <h1>Device Compatibility</h1>
            <p>Comprehensive support for modern smartphones and connected devices</p>
          </div>
        </div>
      </motion.section>

      <section className="page-content">
        <div className="container">
          <div className="compatibility-grid">
            {deviceCategories.map((category, index) => (
              <motion.div 
                key={index}
                className="glass-panel device-category"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="category-header">
                  <h3>{category.title}</h3>
                  <span className="support-badge">{category.badge}</span>
                </div>
                <div className="device-list">
                  {category.devices.map((device, deviceIndex) => (
                    <div key={deviceIndex} className="device-item">{device}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="verification-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel verification-panel">
              <h2>Device Verification Guide</h2>
              <p>Follow these steps to verify eSIM compatibility on your device</p>
              
              <div className="verification-steps">
                {verificationSteps.map((step, index) => (
                  <motion.div 
                    key={index}
                    className="step-card"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="step-number">{step.number}</div>
                    <div className="step-content">
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="carrier-compatibility"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel carrier-panel">
              <h2>Network Compatibility</h2>
              <div className="carrier-grid">
                <div className="carrier-item">
                  <h4>5G Networks</h4>
                  <p>Full compatibility with Myanmar's 5G infrastructure</p>
                </div>
                <div className="carrier-item">
                  <h4>4G LTE</h4>
                  <p>Seamless integration with all major 4G carriers</p>
                </div>
                <div className="carrier-item">
                  <h4>International Roaming</h4>
                  <p>Global roaming partnerships for worldwide connectivity</p>
                </div>
                <div className="carrier-item">
                  <h4>Enterprise Networks</h4>
                  <p>Dedicated enterprise network solutions available</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Compatibility
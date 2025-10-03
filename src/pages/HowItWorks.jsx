import { motion } from 'framer-motion'
import './Pages.css'

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Check Compatibility",
      description: "Verify your device supports eSIM technology using our compatibility checker",
      details: ["Visit our compatibility page", "Check your device model", "Verify eSIM support in settings"]
    },
    {
      number: "02", 
      title: "Choose Your Plan",
      description: "Select the perfect eSIM plan for your connectivity needs",
      details: ["Browse available plans", "Compare features and pricing", "Select your preferred carrier"]
    },
    {
      number: "03",
      title: "Purchase & Download",
      description: "Complete your purchase and receive your eSIM profile instantly",
      details: ["Secure online payment", "Instant profile generation", "QR code delivery via email"]
    },
    {
      number: "04",
      title: "Scan & Activate",
      description: "Scan the QR code to install and activate your eSIM profile",
      details: ["Open device settings", "Scan the QR code", "Follow activation prompts"]
    },
    {
      number: "05",
      title: "Start Using",
      description: "Your eSIM is ready to use with full network connectivity",
      details: ["Instant network access", "Manage multiple profiles", "24/7 customer support"]
    }
  ]

  const benefits = [
    {
      title: "Instant Activation",
      description: "No waiting for physical SIM cards or store visits"
    },
    {
      title: "Multiple Profiles", 
      description: "Store up to 8 different carrier profiles on one device"
    },
    {
      title: "Global Roaming",
      description: "Seamless connectivity when traveling internationally"
    },
    {
      title: "Enhanced Security",
      description: "Built-in encryption and tamper-resistant technology"
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
            <h1>How eSIM Works</h1>
            <p>Simple steps to activate your digital SIM and start connecting</p>
          </div>
        </div>
      </motion.section>

      <section className="page-content">
        <div className="container">
          <div className="steps-section">
            <h2 className="section-title">Activation Process</h2>
            <div className="steps-grid">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="glass-panel step-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="step-header">
                    <div className="step-number">{step.number}</div>
                    <h3>{step.title}</h3>
                  </div>
                  <p className="step-description">{step.description}</p>
                  <ul className="step-details">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            className="benefits-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel benefits-panel">
              <h2>Why Choose eSIM?</h2>
              <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="benefit-item"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="technical-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel technical-panel">
              <h2>Technical Requirements</h2>
              <div className="requirements-grid">
                <div className="requirement-item">
                  <h4>Device Support</h4>
                  <p>eSIM-compatible smartphone or tablet</p>
                </div>
                <div className="requirement-item">
                  <h4>Network Coverage</h4>
                  <p>4G/5G network availability in your area</p>
                </div>
                <div className="requirement-item">
                  <h4>Internet Connection</h4>
                  <p>Wi-Fi or mobile data for initial setup</p>
                </div>
                <div className="requirement-item">
                  <h4>Account Setup</h4>
                  <p>Valid email address and payment method</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
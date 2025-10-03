import { motion } from 'framer-motion'
import './Pages.css'

const Partners = () => {
  const partnerCategories = [
    {
      title: "Network Operators",
      description: "Leading telecommunications providers ensuring nationwide coverage",
      partners: [
        {
          name: "Telenor Myanmar",
          description: "Premium 4G/5G network coverage across Myanmar with international roaming capabilities"
        },
        {
          name: "Ooredoo Myanmar", 
          description: "Advanced mobile network infrastructure with focus on digital innovation"
        },
        {
          name: "MPT (Myanmar Posts and Telecommunications)",
          description: "National telecommunications provider with extensive rural coverage"
        }
      ]
    },
    {
      title: "Technology Partners",
      description: "Cutting-edge technology providers powering our eSIM platform",
      partners: [
        {
          name: "GSMA",
          description: "Global mobile industry association providing eSIM standards and certification"
        },
        {
          name: "Thales",
          description: "Secure eSIM technology and digital identity solutions provider"
        },
        {
          name: "Giesecke+Devrient",
          description: "Leading provider of eSIM management platforms and security solutions"
        }
      ]
    },
    {
      title: "Device Manufacturers",
      description: "Premium device brands supporting eSIM technology",
      partners: [
        {
          name: "Apple",
          description: "iPhone and iPad devices with built-in eSIM support and seamless activation"
        },
        {
          name: "Samsung",
          description: "Galaxy smartphones and tablets featuring advanced eSIM capabilities"
        },
        {
          name: "Google",
          description: "Pixel devices with native eSIM integration and enhanced user experience"
        }
      ]
    },
    {
      title: "Enterprise Partners",
      description: "Business solution providers for enterprise eSIM deployments",
      partners: [
        {
          name: "Microsoft",
          description: "Cloud-based eSIM management solutions for enterprise customers"
        },
        {
          name: "Cisco",
          description: "Network infrastructure and IoT connectivity solutions"
        },
        {
          name: "IBM",
          description: "AI-powered network analytics and business intelligence platforms"
        }
      ]
    }
  ]

  const benefits = [
    {
      title: "Global Reach",
      description: "Access to international networks and roaming agreements worldwide"
    },
    {
      title: "Technology Innovation",
      description: "Latest eSIM technology and security standards implementation"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and certification processes for all partnerships"
    },
    {
      title: "Customer Support",
      description: "24/7 technical support backed by our partner network"
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
            <h1>Our Partners</h1>
            <p>Collaborating with industry leaders to deliver world-class eSIM solutions</p>
          </div>
        </div>
      </motion.section>

      <section className="page-content">
        <div className="container">
          <div className="partners-content">
            {partnerCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                className="partner-category"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="category-header">
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>
                </div>
                
                <div className="partners-grid">
                  {category.partners.map((partner, partnerIndex) => (
                    <motion.div 
                      key={partnerIndex}
                      className="glass-panel partner-card"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: partnerIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="partner-logo">
                        <h3>{partner.name}</h3>
                      </div>
                      <p className="partner-description">{partner.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="partnership-benefits"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel benefits-panel">
              <h2>Partnership Benefits</h2>
              <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="benefit-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
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
            className="partnership-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel cta-panel">
              <h2>Become a Partner</h2>
              <p>Join our growing network of technology and business partners to expand eSIM adoption across Myanmar and beyond.</p>
              <div className="cta-actions">
                <button className="btn-primary">Partner With Us</button>
                <button className="btn-secondary">Learn More</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Partners
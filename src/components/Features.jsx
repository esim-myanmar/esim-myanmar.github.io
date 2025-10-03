import './Features.css'

const Features = () => {
  const features = [
    {
      title: "Instant Activation",
      description: "Deploy your eSIM profile instantly without physical cards or waiting periods"
    },
    {
      title: "Global Roaming",
      description: "Seamless connectivity across international networks with premium roaming agreements"
    },
    {
      title: "Enterprise Security",
      description: "Military-grade encryption and advanced security protocols for business communications"
    },
    {
      title: "Multi-Profile Support",
      description: "Manage multiple carrier profiles on a single device with intelligent switching"
    },
    {
      title: "Real-time Analytics",
      description: "Comprehensive usage analytics and network performance monitoring dashboard"
    },
    {
      title: "API Integration",
      description: "Developer-friendly APIs for seamless integration with existing business systems"
    }
  ]

  return (
    <section className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Advanced eSIM Solutions</h2>
          <p className="section-subtitle">Cutting-edge technology for modern connectivity needs</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="glass-panel feature-card">
              <div className="feature-header">
                <h3>{feature.title}</h3>
              </div>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
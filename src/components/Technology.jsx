import './Technology.css'

const Technology = () => {
  const specs = [
    { label: "Network Standards", value: "5G/4G/3G/2G" },
    { label: "Security Protocol", value: "RSA-4096 Encryption" },
    { label: "Activation Time", value: "Under 60 seconds" },
    { label: "Profile Capacity", value: "Up to 8 profiles" }
  ]

  return (
    <section className="technology">
      <div className="container">
        <div className="tech-content">
          <div className="glass-panel tech-panel">
            <h2>Revolutionary Technology</h2>
            <p>
              Our eSIM platform leverages cutting-edge embedded SIM technology to deliver 
              unparalleled connectivity solutions for Myanmar's digital transformation.
            </p>
            
            <div className="tech-specs">
              {specs.map((spec, index) => (
                <div key={index} className="spec-item">
                  <span className="spec-label">{spec.label}</span>
                  <span className="spec-value">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technology
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="glass-panel hero-panel">
          <h1 className="hero-title">
            <span className="title-line">Next Generation</span>
            <span className="title-line accent">Digital Connectivity</span>
          </h1>
          <p className="hero-subtitle">
            Experience seamless mobile connectivity with Myanmar's most advanced eSIM technology platform
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Activate eSIM</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
      
      <div className="hero-metrics">
        <div className="glass-panel metric-card">
          <div className="metric-value">99.9%</div>
          <div className="metric-label">Network Reliability</div>
        </div>
        <div className="glass-panel metric-card">
          <div className="metric-value">50+</div>
          <div className="metric-label">Compatible Devices</div>
        </div>
        <div className="glass-panel metric-card">
          <div className="metric-value">24/7</div>
          <div className="metric-label">Premium Support</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
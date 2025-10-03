import { useEffect } from 'react'
import ParticleSystem from './components/ParticleSystem'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Technology from './components/Technology'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <ParticleSystem />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Technology />
      </main>
      <Footer />
    </div>
  )
}

export default App
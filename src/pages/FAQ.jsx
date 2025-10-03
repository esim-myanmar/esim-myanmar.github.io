import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Pages.css'

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set())
  const heroRef = useRef()

  useEffect(() => {
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
  }, [])

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "What is an eSIM?",
          a: "An eSIM (embedded SIM) is a digital SIM card that allows you to activate a cellular plan without using a physical SIM card. It's built into your device and can be programmed remotely."
        },
        {
          q: "How do I activate my eSIM?",
          a: "Simply scan the QR code we provide, or enter the activation details manually in your device settings. The process takes just a few minutes."
        },
        {
          q: "Is my device compatible?",
          a: "Most modern smartphones, tablets, and smartwatches support eSIM. Check our compatibility page for a full list of supported devices."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          q: "Can I use multiple eSIMs on one device?",
          a: "Yes, many devices support multiple eSIM profiles. You can switch between them or use them simultaneously for different purposes."
        },
        {
          q: "What happens if I lose my device?",
          a: "Your eSIM can be remotely deactivated for security. Contact our support team immediately, and we'll help you transfer your service to a new device."
        },
        {
          q: "Does eSIM work with 5G?",
          a: "Yes, our eSIM service is fully compatible with 5G networks where available, providing you with the fastest possible speeds."
        }
      ]
    },
    {
      category: "Billing & Plans",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept Apple Pay, NFC payments, credit/debit cards, bank transfers, cryptocurrency, and QR code payments for maximum convenience."
        },
        {
          q: "Can I change my plan anytime?",
          a: "Yes, you can upgrade, downgrade, or change your plan at any time through our app or website. Changes take effect immediately."
        },
        {
          q: "Are there any roaming charges?",
          a: "Our plans include roaming in 190+ countries. Check your specific plan details for coverage areas and any applicable fair usage policies."
        }
      ]
    },
    {
      category: "IoT & Business",
      questions: [
        {
          q: "Do you support IoT devices?",
          a: "Yes, we provide eSIM solutions for IoT devices including smart home systems, automotive applications, and industrial monitoring equipment."
        },
        {
          q: "Is there an API for developers?",
          a: "Yes, we offer comprehensive APIs for developers to integrate eSIM functionality into their applications and IoT solutions."
        },
        {
          q: "What about enterprise solutions?",
          a: "We provide enterprise-grade eSIM solutions with bulk management, custom billing, and dedicated support for businesses of all sizes."
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
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="page-subtitle">
              Find answers to common questions about eSIM Myanmar services
            </p>
          </div>
        </div>
      </section>

      <section className="page-content section">
        <div className="container">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="faq-category glass-panel">
              <h2 className="category-title">{category.category}</h2>
              <div className="faq-items">
                {category.questions.map((faq, questionIndex) => {
                  const itemIndex = `${categoryIndex}-${questionIndex}`
                  const isOpen = openItems.has(itemIndex)
                  
                  return (
                    <div key={questionIndex} className="faq-item">
                      <button
                        className={`faq-question ${isOpen ? 'open' : ''}`}
                        onClick={() => toggleItem(itemIndex)}
                      >
                        <span>{faq.q}</span>
                        <svg 
                          className={`faq-icon ${isOpen ? 'rotated' : ''}`}
                          width="20" 
                          height="20" 
                          viewBox="0 0 24 24" 
                          fill="currentColor"
                        >
                          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                        </svg>
                      </button>
                      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          <div className="faq-contact glass-panel">
            <h2>Still have questions?</h2>
            <p>Our support team is here to help you 24/7</p>
            <div className="contact-options">
              <button className="btn-primary">Contact Support</button>
              <button className="btn-secondary">Live Chat</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
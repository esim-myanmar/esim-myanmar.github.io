import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Pages.css'

const FAQ = () => {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const faqData = [
    {
      category: "General",
      questions: [
        {
          question: "What is an eSIM?",
          answer: "An eSIM (embedded SIM) is a digital SIM card that's built into your device. It allows you to activate a cellular plan without using a physical SIM card, making it easier to switch carriers and manage multiple phone numbers."
        },
        {
          question: "How is eSIM different from a physical SIM card?",
          answer: "Unlike physical SIM cards, eSIMs are embedded directly into your device's hardware. They can be programmed remotely, allow multiple carrier profiles, and eliminate the need for physical SIM card swapping."
        },
        {
          question: "Is eSIM secure?",
          answer: "Yes, eSIM technology includes advanced security features like RSA-4096 encryption and tamper-resistant hardware, making it more secure than traditional SIM cards."
        }
      ]
    },
    {
      category: "Compatibility",
      questions: [
        {
          question: "Which devices support eSIM?",
          answer: "Most modern smartphones including iPhone XS and newer, Samsung Galaxy S20 and newer, Google Pixel 3 and newer, and many other premium devices support eSIM technology."
        },
        {
          question: "How do I check if my device supports eSIM?",
          answer: "You can check by going to your device settings and looking for 'Add Cellular Plan' or 'Add Mobile Plan' options. You can also dial *#06# to see if an EID number is displayed."
        },
        {
          question: "Can I use eSIM and physical SIM together?",
          answer: "Yes, most eSIM-compatible devices support dual SIM functionality, allowing you to use both an eSIM and a physical SIM card simultaneously."
        }
      ]
    },
    {
      category: "Activation & Setup",
      questions: [
        {
          question: "How long does eSIM activation take?",
          answer: "eSIM activation typically takes less than 60 seconds once you scan the QR code. The entire process from purchase to activation usually takes under 5 minutes."
        },
        {
          question: "What do I need to activate an eSIM?",
          answer: "You need an eSIM-compatible device, a stable internet connection (Wi-Fi or mobile data), and the QR code or activation details provided after purchase."
        },
        {
          question: "Can I transfer my existing number to eSIM?",
          answer: "Yes, you can port your existing phone number to eSIM. The process is similar to traditional number porting and typically takes 24-48 hours to complete."
        }
      ]
    },
    {
      category: "Plans & Pricing",
      questions: [
        {
          question: "What eSIM plans are available?",
          answer: "We offer various plans including prepaid and postpaid options with different data allowances, voice minutes, and SMS packages to suit different needs and budgets."
        },
        {
          question: "Can I change my eSIM plan?",
          answer: "Yes, you can upgrade, downgrade, or change your eSIM plan at any time through our customer portal or by contacting customer support."
        },
        {
          question: "Do you offer international roaming?",
          answer: "Yes, our eSIM plans include international roaming options with competitive rates for voice, SMS, and data usage while traveling abroad."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What if I lose my device with eSIM?",
          answer: "If you lose your device, contact us immediately to suspend your eSIM service. You can then activate a new eSIM profile on your replacement device using the same phone number."
        },
        {
          question: "Can I use eSIM without internet?",
          answer: "While you need internet connectivity for initial eSIM activation and setup, once activated, your eSIM works like a regular SIM card and doesn't require internet for basic cellular functions."
        },
        {
          question: "How do I get technical support?",
          answer: "Our technical support team is available 24/7 via phone (+95 965 0000172), email (info@esim.com.mm), or through our online chat system."
        }
      ]
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
            <h1>Frequently Asked Questions</h1>
            <p>Find answers to common questions about eSIM technology and our services</p>
          </div>
        </div>
      </motion.section>

      <section className="page-content">
        <div className="container">
          <div className="faq-content">
            {faqData.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                className="faq-category"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="category-title">{category.category}</h2>
                <div className="glass-panel faq-panel">
                  {category.questions.map((item, questionIndex) => {
                    const itemKey = `${categoryIndex}-${questionIndex}`
                    const isOpen = openItems[itemKey]
                    
                    return (
                      <div key={questionIndex} className="faq-item">
                        <button 
                          className="faq-question"
                          onClick={() => toggleItem(itemKey)}
                        >
                          <span>{item.question}</span>
                          <span className={`faq-icon ${isOpen ? 'open' : ''}`}>+</span>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              className="faq-answer"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <p>{item.answer}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="contact-support"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel support-panel">
              <h2>Still Have Questions?</h2>
              <p>Our expert support team is here to help you with any questions about eSIM technology or our services.</p>
              <div className="support-actions">
                <button className="btn-primary">Contact Support</button>
                <button className="btn-secondary">Live Chat</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
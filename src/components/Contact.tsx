"use client"

import { useState } from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" style={{background: 'var(--card)'}}>
      <div className="container-professional">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-slate-700 text-slate-200 rounded-full text-sm font-medium mb-8 flex items-center space-x-2">
            <EnvelopeIcon className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="mb-8" style={{color: 'var(--foreground)'}}>
            Let's discuss your project
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
            Ready to transform your digital presence? Get in touch with us to discuss your project requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8" style={{color: 'var(--foreground)'}}>
Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <EnvelopeIcon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Email</h4>
                  <a href="mailto:infozenithglobalsolutions@gmail.com" className="text-gray-600 hover:text-black transition-colors">
                    infozenithglobalsolutions@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Phone</h4>
                  <a href="tel:+94740075696" className="text-gray-600 hover:text-black transition-colors">
                    +94 740 075 696
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Address</h4>
                  <p className="text-gray-600">
                    No 247 Deans Road<br />
                    Colombo 10, Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ClockIcon className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Office Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-black mb-4">Why Choose Us?</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                  5+ years of experience
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                  50+ successful projects
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                  100% client satisfaction
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                  24/7 support available
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-modern">
            <h3 className="text-xl font-bold text-black mb-6">Send us a message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-black mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary inline-flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <PaperAirplaneIcon className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
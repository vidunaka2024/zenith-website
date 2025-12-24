"use client"

import { useState, useEffect } from "react"
import { ChatBubbleLeftRightIcon, StarIcon, ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sirrul Kadheer",
      position: "Founder & CEO",
      company: "Premium Hair Care",
      text: "Zenith Innovations delivered an exceptional e-commerce platform that perfectly showcased our premium hair care products. Their attention to detail and understanding of our brand was remarkable.",
      project: "E-commerce Platform",
      results: "+150% Sales Growth",
      rating: 5
    },
    {
      name: "Victory Team",
      position: "Operations Director",
      company: "Logistics Business",
      text: "Working with Zenith Innovations was a game-changer for our logistics business. They transformed our operations with innovative solutions that improved efficiency and customer satisfaction.",
      project: "Management Dashboard",
      results: "+300% Efficiency",
      rating: 5
    },
    {
      name: "Yash",
      position: "Salon Owner",
      company: "Hair Salon",
      text: "Zenith Innovations transformed our salon's online presence beautifully. The website they created perfectly captures our brand and has significantly increased our online bookings.",
      project: "Booking System",
      results: "+200% Bookings",
      rating: 5
    }
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="relative parallax-bg overflow-hidden" style={{background: 'var(--background)'}}>
      {/* Floating background elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 left-16 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-10 animate-float" style={{animationDelay: '3s'}}></div>

      <div className="container-professional relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 card-glass text-slate-200 rounded-full text-sm font-medium mb-8 flex items-center space-x-2 glow-effect">
            <ChatBubbleLeftRightIcon className="w-5 h-5 animate-pulse" />
            <span className="text-gradient">✨ Client Testimonials</span>
          </div>
          <h2 className="mb-8 text-gradient animate-fade-in-up" style={{color: 'var(--foreground)'}}>
            What our clients say about us
          </h2>
          <p className="text-xl max-w-3xl mx-auto animate-slide-left" style={{color: 'var(--secondary)', animationDelay: '0.2s'}}>
            Don't just take our word for it - hear from our satisfied clients who have experienced exceptional results
          </p>
        </div>

        {/* Enhanced Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16 animate-scale-in" style={{animationDelay: '0.4s'}}>
          <div className="card-glass text-center p-12 hover-lift floating-element shimmer-effect relative overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-500/5 rounded-2xl"></div>

            {/* Enhanced Stars */}
            <div className="flex justify-center mb-8 relative z-10">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <StarIconSolid
                  key={i}
                  className="w-8 h-8 text-yellow-400 mx-1 hover-glow transition-all duration-300 animate-pulse-slow"
                  style={{animationDelay: `${i * 0.1}s`}}
                />
              ))}
            </div>

            {/* Enhanced Quote */}
            <blockquote className="text-2xl mb-8 font-light leading-relaxed relative z-10 text-shadow" style={{color: 'var(--foreground)'}}>
              <span className="text-6xl text-gradient opacity-30 absolute -top-4 -left-4">"</span>
              {testimonials[currentTestimonial].text}
              <span className="text-6xl text-gradient opacity-30 absolute -bottom-8 -right-4">"</span>
            </blockquote>

            {/* Enhanced Client Info */}
            <div className="flex flex-col items-center relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl flex items-center justify-center font-bold text-2xl mb-4 hover-scale shadow-lg border border-gray-700">
                {testimonials[currentTestimonial].name.charAt(0)}
              </div>
              <h4 className="text-xl font-bold mb-1 text-gradient" style={{color: 'var(--foreground)'}}>
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="mb-1 text-lg" style={{color: 'var(--secondary)'}}>
                {testimonials[currentTestimonial].position}
              </p>
              <p className="text-sm mb-8 opacity-80" style={{color: 'var(--secondary)'}}>
                {testimonials[currentTestimonial].company}
              </p>

              <div className="flex gap-6 text-center">
                <div className="card-glass px-6 py-3 rounded-xl hover-lift">
                  <div className="text-xs mb-1 text-gradient font-medium">
                    Project
                  </div>
                  <div className="font-semibold text-sm" style={{color: 'var(--foreground)'}}>
                    {testimonials[currentTestimonial].project}
                  </div>
                </div>
                <div className="card-glass px-6 py-3 rounded-xl hover-lift border-green-400/20">
                  <div className="text-xs mb-1 text-green-400 font-medium">
                    Results
                  </div>
                  <div className="font-semibold text-green-400 text-sm flex items-center justify-center space-x-1">
                    <CheckCircleIcon className="w-4 h-4 animate-pulse" />
                    <span>{testimonials[currentTestimonial].results}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Navigation Dots */}
        <div className="flex justify-center gap-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`rounded-full transition-all duration-300 hover-scale ${
                index === currentTestimonial
                  ? 'w-10 h-4 bg-gradient-to-r from-blue-500 to-purple-600 glow-effect'
                  : 'w-4 h-4 bg-gray-400 hover:bg-gradient-to-r hover:from-gray-500 hover:to-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Enhanced Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-glass hover-lift floating-element shimmer-effect group transition-all duration-500"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-600 to-slate-800 text-slate-200 rounded-xl flex items-center justify-center font-bold mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm group-hover:text-gradient transition-all duration-300" style={{color: 'var(--foreground)'}}>
                    {testimonial.name}
                  </h4>
                  <p className="text-xs group-hover:text-gray-300 transition-colors" style={{color: 'var(--secondary)'}}>
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIconSolid
                    key={i}
                    className="w-5 h-5 text-yellow-400 hover-glow transition-all duration-300"
                    style={{animationDelay: `${i * 0.1}s`}}
                  />
                ))}
              </div>

              <p className="text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors" style={{color: 'var(--secondary)'}}>
                "{testimonial.text.slice(0, 120)}..."
              </p>

              <div className="card-glass px-3 py-2 rounded-lg">
                <div className="text-xs text-green-400 font-semibold flex items-center space-x-1">
                  <CheckCircleIcon className="w-4 h-4 animate-pulse" />
                  <span>{testimonial.results}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <div className="card-glass max-w-2xl mx-auto hover-lift floating-element glow-effect relative overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-2xl"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-gradient animate-fade-in-up">
                Ready to join our success stories?
              </h3>
              <p className="mb-8 text-lg animate-slide-left" style={{color: 'var(--secondary)', animationDelay: '0.2s'}}>
                Let us help you achieve exceptional results like our satisfied clients
              </p>
              <a
                href="#contact"
                className="btn-gradient text-white px-8 py-4 rounded-lg inline-flex items-center space-x-3 hover-scale transition-all duration-300 font-medium text-lg shadow-lg"
              >
                <span>Start Your Success Story</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
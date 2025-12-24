"use client"

import { useEffect, useState } from 'react'
import { ChartBarIcon, ClockIcon, CheckCircleIcon, UserGroupIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative parallax-bg overflow-hidden" style={{background: 'var(--background)'}}>
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse-slow"></div>

      <div className="container-professional text-center relative z-10">
        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Badge with glow effect */}
          <div className="inline-block px-6 py-3 card-glass text-slate-200 rounded-full text-sm font-medium mb-8 glow-effect shimmer-effect">
            <span className="text-gradient">✨ Zenith Innovations</span>
          </div>

          {/* Main Heading with enhanced typography */}
          <h1 style={{color: 'var(--foreground)'}} className="mb-8 max-w-4xl mx-auto animate-fade-in-up font-extrabold tracking-tight">
            Transform Your <span className="text-gradient animate-gradient">Digital Presence</span>
          </h1>

          {/* Subheading with animation */}
          <p className="text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-left" style={{color: 'var(--secondary)', animationDelay: '0.2s'}}>
            Full-service digital agency based in Colombo, Sri Lanka, specializing in custom software development,
            web solutions, and digital marketing strategies with worldwide service capabilities since 2024
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-scale-in" style={{animationDelay: '0.4s'}}>
            <a
              href="#services"
              className="btn-primary hover-lift"
            >
              Our Services
            </a>
            <a
              href="#portfolio"
              className="btn-secondary hover-scale"
            >
              View Work
            </a>
          </div>

          {/* Enhanced Stats with animations and glassmorphism */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-slide-right" style={{animationDelay: '0.6s'}}>
            <div className="text-center card-glass hover-lift floating-element">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 icon-bounce">
                <ChartBarIcon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2 text-gradient">50+</div>
              <div className="text-sm" style={{color: 'var(--secondary)'}}>Projects</div>
            </div>
            <div className="text-center card-glass hover-lift floating-element" style={{animationDelay: '0.1s'}}>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 icon-bounce">
                <ClockIcon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2 text-gradient">1+</div>
              <div className="text-sm" style={{color: 'var(--secondary)'}}>Years</div>
            </div>
            <div className="text-center card-glass hover-lift floating-element" style={{animationDelay: '0.2s'}}>
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4 icon-bounce">
                <CheckCircleIcon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2 text-gradient">100%</div>
              <div className="text-sm" style={{color: 'var(--secondary)'}}>Satisfaction</div>
            </div>
            <div className="text-center card-glass hover-lift floating-element" style={{animationDelay: '0.3s'}}>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4 icon-bounce">
                <UserGroupIcon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2 text-gradient">24/7</div>
              <div className="text-sm" style={{color: 'var(--secondary)'}}>Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
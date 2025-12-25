"use client"

import Link from 'next/link'
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon,
  HeartIcon,
  ShieldCheckIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

export default function Footer() {
  const services = [
    { name: "Software Development", href: "/services" },
    { name: "Web Development", href: "/services" },
    { name: "Content Creation", href: "/services" },
    { name: "Social Media Marketing", href: "/services" },
    { name: "Influencer Marketing", href: "/services" },
    { name: "Marketing Campaigns", href: "/services" }
  ]

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="relative overflow-hidden" style={{background: 'var(--background)'}}>
      {/* Floating background elements */}
      <div className="absolute top-10 right-20 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Gradient border */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

      <div className="container-professional py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Enhanced Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="text-2xl font-bold text-gradient">
                  Zenith Innovations
                </span>
              </div>
            </div>

            <p className="text-base mb-8 leading-relaxed" style={{color: 'var(--secondary)'}}>
              Digital agency transforming businesses through innovative technology and strategic marketing solutions.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm" style={{color: 'var(--secondary)'}}>
                <div className="w-7 h-7 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <EnvelopeIcon className="w-4 h-4 text-white" />
                </div>
                <span>infozenithglobalsolutions@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm" style={{color: 'var(--secondary)'}}>
                <div className="w-7 h-7 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <PhoneIcon className="w-4 h-4 text-white" />
                </div>
                <span>+94 740 075 696</span>
              </div>
              <div className="flex items-center space-x-3 text-sm" style={{color: 'var(--secondary)'}}>
                <div className="w-7 h-7 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg flex items-center justify-center">
                  <MapPinIcon className="w-4 h-4 text-white" />
                </div>
                <span>Colombo 10, Sri Lanka</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h5 className="font-semibold text-gradient text-base mb-4">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white hover-scale transition-all duration-300">
                  <span className="text-sm font-bold">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg flex items-center justify-center text-white hover-scale transition-all duration-300">
                  <span className="text-xs font-bold">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center text-white hover-scale transition-all duration-300">
                  <span className="text-sm font-bold">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-pink-600 to-pink-700 rounded-lg flex items-center justify-center text-white hover-scale transition-all duration-300">
                  <span className="text-xs font-bold">ig</span>
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gradient text-base mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm hover:text-gradient transition-colors duration-300"
                    style={{color: 'var(--secondary)'}}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gradient text-base mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-gradient transition-colors duration-300"
                    style={{color: 'var(--secondary)'}}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <div style={{color: 'var(--secondary)'}}>
              © 2024 Zenith Innovations. All rights reserved.
            </div>

            <div className="flex gap-6">
              <a href="#" className="hover:text-gradient transition-colors" style={{color: 'var(--secondary)'}}>
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gradient transition-colors" style={{color: 'var(--secondary)'}}>
                Terms of Service
              </a>
            </div>

            <div className="flex items-center space-x-1" style={{color: 'var(--secondary)'}}>
              <span>Made with</span>
              <HeartIcon className="w-4 h-4 text-red-500" />
              <span>in Sri Lanka</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
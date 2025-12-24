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
    <footer style={{background: 'var(--background)', borderTop: '1px solid var(--border)'}}>
      <div className="container-professional py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-bold text-black">
                Zenith Innovations
              </span>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Full-service digital agency transforming businesses through innovative technology
              and strategic marketing solutions. Founded in 2024 and based in Colombo, Sri Lanka.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <EnvelopeIcon className="w-4 h-4 text-gray-400" />
                <span>infozenithglobalsolutions@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <PhoneIcon className="w-4 h-4 text-gray-400" />
                <span>+94 740 075 696</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <MapPinIcon className="w-4 h-4 text-gray-400" />
                <span>No 247 Deans Road, Colombo 10, Sri Lanka</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-6">
              <h5 className="font-semibold text-black text-sm mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <span className="text-xs font-bold">f</span>
                </a>
                <a href="#" className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center text-white hover:bg-blue-900 transition-colors">
                  <span className="text-xs font-bold">in</span>
                </a>
                <a href="#" className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                  <span className="text-xs font-bold">t</span>
                </a>
                <a href="#" className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                  <span className="text-xs font-bold">ig</span>
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-black mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="transition-colors text-sm"
                    style={{color: 'var(--secondary)'}}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--foreground)'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--secondary)'}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-black mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition-colors text-sm"
                    style={{color: 'var(--secondary)'}}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--foreground)'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--secondary)'}
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm" style={{color: 'var(--secondary)'}}>
              &copy; 2024 Zenith Innovations. All rights reserved.
            </div>

            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-black transition-colors flex items-center space-x-1">
                <ShieldCheckIcon className="w-3 h-3" />
                <span>Privacy Policy</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors flex items-center space-x-1">
                <DocumentTextIcon className="w-3 h-3" />
                <span>Terms of Service</span>
              </a>
            </div>

            <div className="text-sm flex items-center space-x-1" style={{color: 'var(--secondary)'}}>
              <span>Made with</span>
              <HeartIcon className="w-3 h-3 text-red-500" />
              <span>in Sri Lanka</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
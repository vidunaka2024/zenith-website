"use client"

import { useState, useEffect } from "react"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'backdrop-blur-md border-b'
        : 'bg-transparent'
    }`} style={{background: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent', borderColor: scrolled ? 'var(--border)' : 'transparent'}}>
      <div className="container-professional">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3"
            onClick={handleLinkClick}
          >
            <span className="text-xl font-bold" style={{color: 'var(--foreground)'}}>
              Zenith Innovations
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center" style={{gap: '4rem'}}>
            {menuItems.map((item) => {
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="font-medium transition-colors duration-300"
                  style={{color: isActive ? 'var(--foreground)' : 'var(--secondary)'}}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--foreground)'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = isActive ? 'var(--foreground)' : 'var(--secondary)'}
                >
                  {item.name}
                </Link>
              )
            })}

            {/* CTA Button */}
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="btn-primary"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button with Heroicons */}
          <button
            className="md:hidden p-2 transition-colors"
            style={{color: 'var(--secondary)'}}
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--foreground)'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--secondary)'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t" style={{background: 'var(--card)', borderColor: 'var(--border)'}}>
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => {
                const isActive = pathname === item.href

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="font-medium transition-colors"
                    style={{color: isActive ? 'var(--foreground)' : 'var(--secondary)'}}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--foreground)'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = isActive ? 'var(--foreground)' : 'var(--secondary)'}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="btn-primary inline-block text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
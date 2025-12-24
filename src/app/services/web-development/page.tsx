import Link from 'next/link'
import { ArrowLeftIcon, ComputerDesktopIcon, DevicePhoneMobileIcon, ShoppingCartIcon, PaintBrushIcon, RocketLaunchIcon, CheckCircleIcon, ShieldCheckIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

export default function WebDevelopmentPage() {
  const technologies = {
    frontend: ['React', 'Vue.js', 'Next.js', 'Nuxt.js', 'Svelte'],
    styling: ['Tailwind CSS', 'SCSS/Sass', 'Styled Components', 'Bootstrap', 'Material-UI'],
    backend: ['WordPress', 'Strapi', 'Contentful', 'Shopify', 'WooCommerce'],
    deployment: ['Webpack', 'Vite', 'Netlify', 'Vercel', 'AWS']
  }

  const services = [
    {
      title: 'Responsive Websites',
      description: 'Mobile-first design approach optimized for all devices and screen sizes',
      features: ['Mobile-First Design', 'Cross-Browser Compatibility', 'Flexible Grid Layouts', 'Touch-Friendly Interfaces'],
      icon: ComputerDesktopIcon,
      color: 'blue'
    },
    {
      title: 'E-Commerce Platforms',
      description: 'Secure online stores with comprehensive e-commerce functionality',
      features: ['Secure Payment Processing', 'Inventory Management', 'Order Tracking', 'Customer Accounts'],
      icon: ShoppingCartIcon,
      color: 'green'
    },
    {
      title: 'Content Management',
      description: 'Custom CMS solutions and WordPress development for easy content updates',
      features: ['Custom CMS Development', 'WordPress Solutions', 'User-Friendly Admin', 'Content Scheduling'],
      icon: PaintBrushIcon,
      color: 'purple'
    },
    {
      title: 'Progressive Web Apps',
      description: 'Modern web applications with app-like functionality and offline capabilities',
      features: ['Offline Functionality', 'Push Notifications', 'App-Like Experience', 'Fast Loading'],
      icon: DevicePhoneMobileIcon,
      color: 'pink'
    },
    {
      title: 'Performance Optimization',
      description: 'High-performance websites with optimized loading speeds and efficiency',
      features: ['Lazy Loading', 'Image Compression', 'Code Optimization', 'CDN Integration'],
      icon: RocketLaunchIcon,
      color: 'indigo'
    },
    {
      title: 'Security & Maintenance',
      description: 'Ongoing security updates, backups, and maintenance services',
      features: ['Regular Updates', 'Automated Backups', 'Security Monitoring', 'Bug Fixes'],
      icon: ShieldCheckIcon,
      color: 'orange'
    }
  ]

  const developmentPrinciples = [
    {
      title: 'User-Focused Design',
      description: 'Designing with the end-user experience as the primary focus',
      icon: ComputerDesktopIcon
    },
    {
      title: 'SEO Optimization',
      description: 'Built-in search engine optimization for better visibility',
      icon: GlobeAltIcon
    },
    {
      title: 'Clean Code',
      description: 'Maintainable, scalable, and well-documented code',
      icon: CheckCircleIcon
    },
    {
      title: 'Responsive Design',
      description: 'Optimal viewing experience across all devices',
      icon: DevicePhoneMobileIcon
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Discovery & Planning',
      description: 'Understanding your business goals, target audience, and technical requirements'
    },
    {
      step: '2',
      title: 'Design & Wireframing',
      description: 'Creating user-friendly designs and detailed wireframes for optimal user experience'
    },
    {
      step: '3',
      title: 'Development',
      description: 'Building your website using modern frameworks and best practices'
    },
    {
      step: '4',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing across devices and performance optimization'
    },
    {
      step: '5',
      title: 'Launch & Deployment',
      description: 'Secure deployment with monitoring and post-launch optimization'
    },
    {
      step: '6',
      title: 'Ongoing Support',
      description: 'Continuous maintenance, updates, and feature enhancements'
    }
  ]

  return (
    <main className="relative">
      <section style={{background: 'var(--background)'}}>
        <div className="container-professional py-16">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/services" className="inline-flex items-center text-sm hover:underline" style={{color: 'var(--secondary)'}}>
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <ComputerDesktopIcon className="w-10 h-10 text-purple-600" />
            </div>
            <h1 className="mb-6" style={{color: 'var(--foreground)'}}>
              Web Development Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8" style={{color: 'var(--secondary)'}}>
              Crafting digital experiences that combine beautiful design with robust functionality.
              We create high-performance websites that drive business results and engage your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                View Our Work
              </Link>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Our Web Development Technology Stack</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                We use the latest technologies and frameworks to build modern, scalable web applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card-modern">
                <h3 className="text-lg font-bold mb-4" style={{color: 'var(--foreground)'}}>Frontend Frameworks</h3>
                <ul className="space-y-2">
                  {technologies.frontend.map((tech, index) => (
                    <li key={index} className="flex items-center text-sm" style={{color: 'var(--secondary)'}}>
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-modern">
                <h3 className="text-lg font-bold mb-4" style={{color: 'var(--foreground)'}}>CSS & Styling</h3>
                <ul className="space-y-2">
                  {technologies.styling.map((tech, index) => (
                    <li key={index} className="flex items-center text-sm" style={{color: 'var(--secondary)'}}>
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-modern">
                <h3 className="text-lg font-bold mb-4" style={{color: 'var(--foreground)'}}>Backend & CMS</h3>
                <ul className="space-y-2">
                  {technologies.backend.map((tech, index) => (
                    <li key={index} className="flex items-center text-sm" style={{color: 'var(--secondary)'}}>
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-modern">
                <h3 className="text-lg font-bold mb-4" style={{color: 'var(--foreground)'}}>Deployment Tools</h3>
                <ul className="space-y-2">
                  {technologies.deployment.map((tech, index) => (
                    <li key={index} className="flex items-center text-sm" style={{color: 'var(--secondary)'}}>
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Our Web Development Services</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                Comprehensive web development solutions tailored to your specific business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <div key={index} className="card-modern">
                    <div className={`w-12 h-12 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className={`w-6 h-6 text-${service.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold mb-4" style={{color: 'var(--foreground)'}}>{service.title}</h3>
                    <p className="mb-4" style={{color: 'var(--secondary)'}}>{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm" style={{color: 'var(--secondary)'}}>
                          <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Development Principles */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Our Development Principles</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                Core principles that guide our web development approach
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {developmentPrinciples.map((principle, index) => {
                const IconComponent = principle.icon
                return (
                  <div key={index} className="card-modern text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>{principle.title}</h3>
                    <p className="text-sm" style={{color: 'var(--secondary)'}}>{principle.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Development Process */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Our Web Development Process</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                A proven methodology that ensures successful project delivery from concept to launch
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item, index) => (
                <div key={index} className="card-modern">
                  <div className="flex items-center mb-3">
                    <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {item.step}
                    </span>
                    <h3 className="text-lg font-bold" style={{color: 'var(--foreground)'}}>{item.title}</h3>
                  </div>
                  <p className="text-sm" style={{color: 'var(--secondary)'}}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Why Choose Our Web Development</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-modern text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <RocketLaunchIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>High Performance</h3>
                <p className="text-sm" style={{color: 'var(--secondary)'}}>Optimized for speed, SEO, and user experience</p>
              </div>

              <div className="card-modern text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DevicePhoneMobileIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Mobile-First</h3>
                <p className="text-sm" style={{color: 'var(--secondary)'}}>Responsive design that works perfectly on all devices</p>
              </div>

              <div className="card-modern text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Secure & Reliable</h3>
                <p className="text-sm" style={{color: 'var(--secondary)'}}>Built with security best practices and ongoing maintenance</p>
              </div>

              <div className="card-modern text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <GlobeAltIcon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>SEO Optimized</h3>
                <p className="text-sm" style={{color: 'var(--secondary)'}}>Built-in SEO optimization for better search visibility</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="card-modern max-w-2xl mx-auto">
              <h2 className="mb-4" style={{color: 'var(--foreground)'}}>Ready to Build Your Website?</h2>
              <p className="mb-6" style={{color: 'var(--secondary)'}}>
                Let's create a website that represents your brand and drives results for your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Get Free Consultation
                </Link>
                <Link href="/services" className="btn-secondary">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
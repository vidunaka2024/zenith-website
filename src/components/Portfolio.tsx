"use client"

import { useState } from "react"
import { FolderOpenIcon, ComputerDesktopIcon, DevicePhoneMobileIcon, PaintBrushIcon, ShoppingCartIcon, ArrowTopRightOnSquareIcon, CheckCircleIcon, ClockIcon, TrophyIcon, CogIcon } from '@heroicons/react/24/outline'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Projects", icon: FolderOpenIcon },
    { id: "ecommerce", name: "E-commerce", icon: ShoppingCartIcon },
    { id: "web", name: "Web Development", icon: ComputerDesktopIcon },
    { id: "logistics", name: "Logistics", icon: CogIcon },
    { id: "marketing", name: "Digital Marketing", icon: PaintBrushIcon }
  ]

  const projects = [
    {
      id: 1,
      title: "ASB Logistics Platform",
      category: "logistics",
      client: "ASB Logistics",
      description: "Comprehensive global logistics and supply chain management platform featuring land transportation, freight forwarding, project logistics, and supply chain consultancy services.",
      tags: ["React", "Node.js", "MongoDB", "Real-time Tracking"],
      featured: true,
      results: "Streamlined operations across multiple countries"
    },
    {
      id: 2,
      title: "Hydro Pints E-commerce & Marketing",
      category: "ecommerce",
      client: "Hydro Pints Technologies",
      description: "Complete digital transformation including e-commerce platform for water purification products, PPC campaigns, SEO strategy, and comprehensive content marketing.",
      tags: ["E-commerce", "PPC", "SEO", "Content Marketing"],
      featured: true,
      results: "Increased online sales by 200% in 6 months"
    },
    {
      id: 3,
      title: "Multi-Industry E-commerce Platform",
      category: "ecommerce",
      client: "Sirrul Kadheer Company",
      description: "Sophisticated e-commerce marketplace supporting cosmetics, electronics, and textiles with advanced inventory management and multi-category navigation.",
      tags: ["Next.js", "Stripe", "Inventory Management", "Multi-category"],
      results: "Enhanced user experience across product categories"
    },
    {
      id: 4,
      title: "Victory Containers Logistics System",
      category: "logistics",
      client: "Victory Containers",
      description: "Digital logistics platform optimizing container management, shipment tracking, and supply chain visibility for improved operational efficiency.",
      tags: ["Vue.js", "Real-time Tracking", "Analytics", "Supply Chain"],
      results: "Improved operational efficiency by 40%"
    },
    {
      id: 5,
      title: "Professional Services Website",
      category: "web",
      client: "Blackstone Tax Limited",
      description: "Professional corporate website for tax and financial services with client portal, appointment booking, and secure document management.",
      tags: ["React", "Secure Portal", "Appointment System", "Document Management"],
      results: "Increased client engagement and streamlined operations"
    },
    {
      id: 6,
      title: "Australian Business Digital Solutions",
      category: "web",
      client: "Multiple Australian Clients",
      description: "Comprehensive digital solutions for various Australian businesses including salon services, facility management, and cleaning services with localized features.",
      tags: ["WordPress", "Local SEO", "Booking Systems", "Multi-site Management"],
      results: "Enhanced local market presence and customer acquisition"
    },
    {
      id: 7,
      title: "Direct-to-Consumer E-commerce Launch",
      category: "ecommerce",
      client: "Niche E-commerce Startup",
      description: "Full-stack e-commerce implementation for new product launch including inventory integration, payment gateway setup, and customer acquisition strategies.",
      tags: ["Full-stack Development", "Payment Gateway", "Inventory Integration", "Launch Strategy"],
      results: "Successfully launched with 150% first-month sales target achievement"
    },
    {
      id: 8,
      title: "Integrated Marketing Campaigns",
      category: "marketing",
      client: "Multiple Clients",
      description: "Comprehensive digital marketing campaigns including content creation, social media marketing, influencer partnerships, and multi-channel marketing strategies.",
      tags: ["Content Marketing", "Social Media", "Influencer Marketing", "Multi-channel Campaigns"],
      results: "Average 300% ROI across all campaigns"
    }
  ]

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="portfolio" style={{background: 'var(--background)'}}>
      <div className="container-professional">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-slate-700 text-slate-200 rounded-full text-sm font-medium mb-8">
            Our Portfolio
          </div>
          <h2 className="mb-8" style={{color: 'var(--foreground)'}}>
            Exceptional digital experiences
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
            Discover our portfolio of successful projects that have transformed businesses and delighted clients worldwide
          </p>
        </div>

        {/* Enhanced Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            const isActive = activeCategory === category.id
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 hover-lift ${
                  isActive ? 'card-glass glow-effect' : 'card-modern hover-scale'
                }`}
                style={{
                  background: isActive
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    : 'var(--card)',
                  color: isActive ? 'white' : 'var(--secondary)',
                  border: `1px solid ${isActive ? 'transparent' : 'var(--border)'}`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? 'animate-bounce' : ''}`} />
                <span>{category.name}</span>
              </button>
            )
          })}
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`card-glass hover-lift floating-element shimmer-effect group transition-all duration-500 ${
                project.featured ? 'md:col-span-2 glow-effect' : ''
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Enhanced Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all duration-300" style={{color: 'var(--foreground)'}}>
                    {project.title}
                  </h3>
                  <p className="text-sm group-hover:text-gray-300 transition-colors" style={{color: 'var(--secondary)'}}>
                    for {project.client}
                  </p>
                </div>
                {project.featured && (
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-medium rounded-full flex items-center space-x-1 animate-pulse-slow">
                    <TrophyIcon className="w-3 h-3" />
                    <span>Featured</span>
                  </span>
                )}
              </div>

              <p className="mb-4" style={{color: 'var(--secondary)'}}>
                {project.description}
              </p>

              {/* Results */}
              {project.results && (
                <div className="mb-4 p-3 rounded-lg" style={{background: 'var(--card)', border: '1px solid var(--border)'}}>
                  <div className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium" style={{color: 'var(--foreground)'}}>Results:</span>
                  </div>
                  <p className="text-sm mt-1" style={{color: 'var(--secondary)'}}>{project.results}</p>
                </div>
              )}

              {/* Enhanced Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs rounded-full hover-scale transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:text-white"
                    style={{
                      background: 'var(--card)',
                      color: 'var(--secondary)',
                      border: '1px solid var(--border)',
                      animationDelay: `${tagIndex * 0.05}s`
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Enhanced Action */}
              <button className="btn-gradient text-white px-4 py-2 rounded-lg inline-flex items-center space-x-2 group-hover:scale-105 transition-all duration-300 font-medium">
                <span>View Details</span>
                <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Enhanced Stats with animations */}
        <div className="card-glass glow-effect">
          <h3 className="text-2xl font-bold mb-8 text-center text-gradient" style={{color: 'var(--foreground)'}}>
            Project Success Metrics
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover-lift">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <CheckCircleIcon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2 text-gradient group-hover:animate-pulse" style={{color: 'var(--foreground)'}}>
                10+
              </div>
              <div className="text-sm group-hover:text-gray-300 transition-colors" style={{color: 'var(--secondary)'}}>
                Businesses Served
              </div>
            </div>
            <div className="text-center group hover-lift">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrophyIcon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2 text-gradient group-hover:animate-pulse" style={{color: 'var(--foreground)'}}>
                100%
              </div>
              <div className="text-sm group-hover:text-gray-300 transition-colors" style={{color: 'var(--secondary)'}}>
                Client Satisfaction
              </div>
            </div>
            <div className="text-center group hover-lift">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <CogIcon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2 text-gradient group-hover:animate-pulse" style={{color: 'var(--foreground)'}}>
                24/7
              </div>
              <div className="text-sm group-hover:text-gray-300 transition-colors" style={{color: 'var(--secondary)'}}>
                Support Available
              </div>
            </div>
            <div className="text-center group hover-lift">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <ClockIcon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2 text-gradient group-hover:animate-pulse" style={{color: 'var(--foreground)'}}>
                4+
              </div>
              <div className="text-sm group-hover:text-gray-300 transition-colors" style={{color: 'var(--secondary)'}}>
                Industries Served
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="#contact" className="btn-primary">
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
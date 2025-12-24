import Link from 'next/link'
import { ArrowRightIcon, EyeIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

export default function PortfolioSummary() {
  const featuredProjects = [
    {
      title: "ASB Logistics Platform",
      description: "Global logistics and supply chain management solution",
      category: "Logistics & Web Development",
      client: "ASB Logistics",
      results: "Streamlined operations across multiple countries"
    },
    {
      title: "Hydro Pints Digital Transformation",
      description: "E-commerce platform with integrated marketing campaigns",
      category: "E-commerce & Marketing",
      client: "Hydro Pints Technologies",
      results: "200% increase in online sales within 6 months"
    },
    {
      title: "Multi-Industry E-commerce",
      description: "Sophisticated marketplace for cosmetics, electronics & textiles",
      category: "E-commerce Development",
      client: "Sirrul Kadheer Company",
      results: "Enhanced user experience across product categories"
    }
  ]

  return (
    <section id="portfolio" style={{background: 'var(--background)'}}>
      <div className="container-professional">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-slate-700 text-slate-200 rounded-full text-sm font-medium mb-8">
            Our Work
          </div>
          <h2 className="mb-8" style={{color: 'var(--foreground)'}}>
            Featured Projects
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8" style={{color: 'var(--secondary)'}}>
            Showcasing our expertise across different industries and technologies
          </p>
          <Link href="/portfolio" className="btn-primary inline-flex items-center space-x-2">
            <span>View Full Portfolio</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="card-glass group hover-lift floating-element shimmer-effect transition-all duration-500"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="text-gray-500 text-center relative z-10">
                  <CodeBracketIcon className="w-12 h-12 mx-auto mb-2 group-hover:scale-110 group-hover:text-blue-600 transition-all duration-300" />
                  <p className="text-sm group-hover:text-gray-700 transition-colors">Featured Project</p>
                </div>
              </div>

              <div className="mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-full text-xs font-medium group-hover:scale-105 transition-transform duration-300">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all duration-300" style={{color: 'var(--foreground)'}}>
                {project.title}
              </h3>

              <p className="text-sm mb-3 group-hover:text-gray-300 transition-colors" style={{color: 'var(--secondary)'}}>
                for {project.client}
              </p>

              <p className="mb-4 group-hover:text-gray-300 transition-colors" style={{color: 'var(--secondary)'}}>
                {project.description}
              </p>

              <div className="mb-6 p-3 rounded-lg group-hover:bg-gradient-to-r group-hover:from-green-400/10 group-hover:to-blue-400/10 transition-all duration-300" style={{background: 'var(--card)', border: '1px solid var(--border)'}}>
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-xs font-medium text-green-600">Results:</p>
                </div>
                <p className="text-xs group-hover:text-gray-300 transition-colors" style={{color: 'var(--secondary)'}}>
                  {project.results}
                </p>
              </div>

              <button className="btn-gradient text-white px-4 py-2 rounded-lg inline-flex items-center space-x-2 group-hover:scale-105 transition-all duration-300 font-medium">
                <EyeIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>View Details</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
import Link from 'next/link'
import { ArrowLeftIcon, CodeBracketIcon, CogIcon, ShieldCheckIcon, RocketLaunchIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function SoftwareDevelopmentPage() {
  const technologies = {
    frontend: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Next.js'],
    backend: ['Node.js', 'Python', 'Java', '.NET', 'Go'],
    databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch'],
    cloudDevOps: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD']
  }

  const process = [
    {
      step: '1',
      title: 'Discovery & Planning',
      description: 'Understanding requirements, defining scope, and creating project roadmap',
      icon: CodeBracketIcon,
      color: 'blue'
    },
    {
      step: '2',
      title: 'Design & Architecture',
      description: 'Creating system architecture, UI/UX design, and technical specifications',
      icon: CogIcon,
      color: 'purple'
    },
    {
      step: '3',
      title: 'Development',
      description: 'Agile development with regular sprints and continuous integration',
      icon: RocketLaunchIcon,
      color: 'green'
    },
    {
      step: '4',
      title: 'Testing & QA',
      description: 'Comprehensive testing including unit, integration, and performance tests',
      icon: ShieldCheckIcon,
      color: 'pink'
    },
    {
      step: '5',
      title: 'Deployment',
      description: 'Secure deployment with monitoring and performance optimization',
      icon: CheckCircleIcon,
      color: 'indigo'
    },
    {
      step: '6',
      title: 'Maintenance',
      description: 'Ongoing support, updates, and feature enhancements',
      icon: ClockIcon,
      color: 'orange'
    }
  ]

  const projectTypes = [
    {
      title: 'Web Applications',
      description: 'Modern, responsive web applications built with cutting-edge technologies',
      features: ['Single Page Applications', 'Progressive Web Apps', 'Real-time Applications', 'E-commerce Platforms']
    },
    {
      title: 'Desktop Applications',
      description: 'Cross-platform desktop applications for Windows, macOS, and Linux',
      features: ['Electron Applications', 'Native Desktop Apps', 'Cross-platform Solutions', 'System Integration']
    },
    {
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: ['Native iOS/Android', 'React Native', 'Flutter', 'Hybrid Applications']
    },
    {
      title: 'API Development',
      description: 'Robust APIs and microservices for seamless system integration',
      features: ['RESTful APIs', 'GraphQL', 'Microservices', 'Third-party Integrations']
    },
    {
      title: 'Enterprise Solutions',
      description: 'Large-scale enterprise applications with advanced functionality',
      features: ['CRM Systems', 'ERP Solutions', 'Business Intelligence', 'Workflow Automation']
    },
    {
      title: 'Custom Integrations',
      description: 'Custom software integrations to connect your existing systems',
      features: ['System Connectors', 'Data Migration', 'Legacy System Updates', 'Cloud Migrations']
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
            <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <CodeBracketIcon className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="mb-6" style={{color: 'var(--foreground)'}}>
              Software Development Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8" style={{color: 'var(--secondary)'}}>
              Custom software solutions that drive business growth and innovation. We create scalable, secure,
              and innovative solutions tailored to your unique business needs.
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
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Our Technology Stack</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                We use cutting-edge technologies to build robust and scalable software solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card-modern">
                <h3 className="text-lg font-bold mb-4" style={{color: 'var(--foreground)'}}>Frontend</h3>
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
                <h3 className="text-lg font-bold mb-4" style={{color: 'var(--foreground)'}}>Backend</h3>
                <ul className="space-y-2">
                  {technologies.backend.map((tech, index) => (
                    <li key={index} className="flex items-center text-sm" style={{color: 'var(--secondary)'}}>
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-modern">
                <h3 className="text-lg font-bold mb-4" style={{color: 'var(--foreground)'}}>Databases</h3>
                <ul className="space-y-2">
                  {technologies.databases.map((tech, index) => (
                    <li key={index} className="flex items-center text-sm" style={{color: 'var(--secondary)'}}>
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-modern">
                <h3 className="text-lg font-bold mb-4" style={{color: 'var(--foreground)'}}>Cloud & DevOps</h3>
                <ul className="space-y-2">
                  {technologies.cloudDevOps.map((tech, index) => (
                    <li key={index} className="flex items-center text-sm" style={{color: 'var(--secondary)'}}>
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Development Process */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Our Development Process</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                We follow a proven methodology with agile principles to deliver exceptional software solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={index} className="card-modern">
                    <div className={`w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className={`w-6 h-6 text-${item.color}-600`} />
                    </div>
                    <div className="flex items-center mb-3">
                      <span className={`w-8 h-8 bg-${item.color}-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3`}>
                        {item.step}
                      </span>
                      <h3 className="text-lg font-bold" style={{color: 'var(--foreground)'}}>{item.title}</h3>
                    </div>
                    <p className="text-sm" style={{color: 'var(--secondary)'}}>{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Project Types */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Types of Software We Develop</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                From web applications to enterprise solutions, we build software that meets your specific needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectTypes.map((project, index) => (
                <div key={index} className="card-modern">
                  <h3 className="text-xl font-bold mb-4" style={{color: 'var(--foreground)'}}>{project.title}</h3>
                  <p className="mb-4" style={{color: 'var(--secondary)'}}>{project.description}</p>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm" style={{color: 'var(--secondary)'}}>
                        <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Why Choose Our Software Development</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-modern text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Secure & Scalable</h3>
                <p className="text-sm" style={{color: 'var(--secondary)'}}>Built with security best practices and scalable architecture</p>
              </div>

              <div className="card-modern text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <RocketLaunchIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Agile Development</h3>
                <p className="text-sm" style={{color: 'var(--secondary)'}}>Iterative development with regular feedback and updates</p>
              </div>

              <div className="card-modern text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CogIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Custom Solutions</h3>
                <p className="text-sm" style={{color: 'var(--secondary)'}}>Tailored to your specific business requirements and goals</p>
              </div>

              <div className="card-modern text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ClockIcon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Ongoing Support</h3>
                <p className="text-sm" style={{color: 'var(--secondary)'}}>Continuous maintenance and feature enhancements</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="card-modern max-w-2xl mx-auto">
              <h2 className="mb-4" style={{color: 'var(--foreground)'}}>Ready to Build Your Software Solution?</h2>
              <p className="mb-6" style={{color: 'var(--secondary)'}}>
                Let's discuss your software development needs and create a solution that drives your business forward
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
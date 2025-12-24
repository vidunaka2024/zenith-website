"use client"

import Link from 'next/link'
import { CodeBracketIcon, ComputerDesktopIcon, PaintBrushIcon, MegaphoneIcon, UserGroupIcon, ChartBarIcon, ArrowRightIcon, BoltIcon, ClockIcon, CheckCircleIcon, CogIcon } from '@heroicons/react/24/outline'

export default function Services() {
  const services = [
    {
      title: "Software Development",
      description: "Custom client-based software solutions and proprietary products built with cutting-edge, scalable technologies",
      features: ["React, Vue.js, Angular", "Node.js, Python, Java", "AWS, Azure, Docker", "PostgreSQL, MongoDB", "Mobile & Desktop Apps"],
      icon: CodeBracketIcon,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
      link: "/services/software-development"
    },
    {
      title: "Web Development",
      description: "Professional website design and development with focus on performance, user experience, and conversion optimization",
      features: ["React, Vue.js, Next.js", "Tailwind CSS, SCSS", "WordPress, Strapi", "PWAs & E-commerce", "SEO & Performance"],
      icon: ComputerDesktopIcon,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100",
      link: "/services/web-development"
    },
    {
      title: "Content Creation",
      description: "Compelling content that engages your audience and drives meaningful results through strategic storytelling",
      features: ["Written & Visual Content", "Video & Audio Production", "Brand Storytelling", "SEO-Optimized Blogs", "Social Media Content"],
      icon: PaintBrushIcon,
      iconColor: "text-green-600",
      iconBg: "bg-green-100",
      link: "/services/content-creation"
    },
    {
      title: "Social Media Marketing",
      description: "Strategic social media campaigns across all major platforms that build brand awareness and drive engagement",
      features: ["6 Major Platforms", "150% Engagement Growth", "Paid Ad Campaigns", "Community Management", "Performance Analytics"],
      icon: MegaphoneIcon,
      iconColor: "text-pink-600",
      iconBg: "bg-pink-100",
      link: "/services/social-media-marketing"
    },
    {
      title: "Influencer Marketing",
      description: "Amplify brand message and expand reach through strategic influencer partnerships and collaborations",
      features: ["4 Influencer Categories", "6 Campaign Types", "FTC Compliance", "Advanced Discovery Tools", "ROI Tracking"],
      icon: UserGroupIcon,
      iconColor: "text-indigo-600",
      iconBg: "bg-indigo-100",
      link: "/services/influencer-marketing"
    },
    {
      title: "Marketing Campaigns",
      description: "Data-driven comprehensive marketing strategies with multi-channel execution that deliver measurable results and ROI",
      features: ["300% Average ROI", "6 Campaign Types", "Multi-Channel Execution", "Real-Time Analytics", "Advanced Targeting"],
      icon: ChartBarIcon,
      iconColor: "text-orange-600",
      iconBg: "bg-orange-100",
      link: "/services/marketing-campaigns"
    }
  ]

  return (
    <section id="services" style={{background: 'var(--card)'}}>
      <div className="container-professional">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-slate-700 text-slate-200 rounded-full text-sm font-medium mb-8">
            Our Services
          </div>
          <h2 className="mb-8" style={{color: 'var(--foreground)'}}>
            Comprehensive digital solutions
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
            We offer comprehensive digital solutions to transform your business and accelerate growth
          </p>
        </div>

        {/* Enhanced Services Grid with animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="card-glass group hover-lift floating-element shimmer-effect transition-all duration-500"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className={`w-8 h-8 ${service.iconColor} group-hover:animate-bounce`} />
                </div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-gradient transition-all duration-300" style={{color: 'var(--foreground)'}}>
                  {service.title}
                </h3>

                <p className="mb-6 group-hover:text-gray-300 transition-colors duration-300" style={{color: 'var(--secondary)'}}>
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm group-hover:translate-x-2 transition-transform duration-300"
                      style={{color: 'var(--secondary)', animationDelay: `${featureIndex * 0.05}s`}}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {service.link ? (
                  <Link
                    href={service.link}
                    className="btn-gradient text-white px-4 py-2 rounded-lg inline-flex items-center space-x-2 group-hover:scale-105 transition-all duration-300 font-medium"
                  >
                    <span>Learn More</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <button className="btn-gradient text-white px-4 py-2 rounded-lg inline-flex items-center space-x-2 group-hover:scale-105 transition-all duration-300 font-medium">
                    <span>Learn More</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            )
          })}
        </div>

        {/* Technology Expertise */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-6" style={{color: 'var(--foreground)'}}>Our Technology Expertise</h3>
            <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
              We leverage cutting-edge technologies to deliver innovative and scalable solutions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="card-glass text-center hover-lift group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <CodeBracketIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-3 group-hover:text-gradient transition-all duration-300" style={{color: 'var(--foreground)'}}>Frontend</h4>
              <div className="space-y-1 text-sm" style={{color: 'var(--secondary)'}}>
                <p className="group-hover:text-gray-300 transition-colors">React, Vue.js</p>
                <p className="group-hover:text-gray-300 transition-colors">Angular, Next.js</p>
                <p className="group-hover:text-gray-300 transition-colors">TypeScript</p>
              </div>
            </div>

            <div className="card-glass text-center hover-lift group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <CogIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-3 group-hover:text-gradient transition-all duration-300" style={{color: 'var(--foreground)'}}>Backend</h4>
              <div className="space-y-1 text-sm" style={{color: 'var(--secondary)'}}>
                <p className="group-hover:text-gray-300 transition-colors">Node.js, Python</p>
                <p className="group-hover:text-gray-300 transition-colors">Java, .NET</p>
                <p className="group-hover:text-gray-300 transition-colors">Go</p>
              </div>
            </div>

            <div className="card-glass text-center hover-lift group">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <ChartBarIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-3 group-hover:text-gradient transition-all duration-300" style={{color: 'var(--foreground)'}}>Databases</h4>
              <div className="space-y-1 text-sm" style={{color: 'var(--secondary)'}}>
                <p className="group-hover:text-gray-300 transition-colors">PostgreSQL, MongoDB</p>
                <p className="group-hover:text-gray-300 transition-colors">MySQL, Redis</p>
                <p className="group-hover:text-gray-300 transition-colors">Elasticsearch</p>
              </div>
            </div>

            <div className="card-glass text-center hover-lift group">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <ClockIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-3 group-hover:text-gradient transition-all duration-300" style={{color: 'var(--foreground)'}}>Cloud & DevOps</h4>
              <div className="space-y-1 text-sm" style={{color: 'var(--secondary)'}}>
                <p className="group-hover:text-gray-300 transition-colors">AWS, Azure</p>
                <p className="group-hover:text-gray-300 transition-colors">Docker, Kubernetes</p>
                <p className="group-hover:text-gray-300 transition-colors">CI/CD Pipelines</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Methodology */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-6" style={{color: 'var(--foreground)'}}>Our Service Delivery Approach</h3>
            <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
              We follow a proven methodology to ensure exceptional results for every project
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="card-modern text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">1</span>
              </div>
              <h4 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Discovery</h4>
              <p className="text-sm" style={{color: 'var(--secondary)'}}>Understanding your business needs and objectives</p>
            </div>

            <div className="card-modern text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-lg">2</span>
              </div>
              <h4 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Strategy</h4>
              <p className="text-sm" style={{color: 'var(--secondary)'}}>Developing tailored solutions and project roadmap</p>
            </div>

            <div className="card-modern text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-lg">3</span>
              </div>
              <h4 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Execution</h4>
              <p className="text-sm" style={{color: 'var(--secondary)'}}>Implementing solutions with agile methodology</p>
            </div>

            <div className="card-modern text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-lg">4</span>
              </div>
              <h4 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Support</h4>
              <p className="text-sm" style={{color: 'var(--secondary)'}}>Ongoing maintenance and optimization</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-6" style={{color: 'var(--foreground)'}}>Why Choose Zenith Innovations</h3>
            <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
              Our unique value propositions that set us apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-modern">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BoltIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Proven Expertise</h4>
              <p className="text-sm" style={{color: 'var(--secondary)'}}>Deep technical knowledge across multiple industries and technologies</p>
            </div>

            <div className="card-modern">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <ArrowRightIcon className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Innovation-Driven</h4>
              <p className="text-sm" style={{color: 'var(--secondary)'}}>Cutting-edge solutions using the latest technologies and methodologies</p>
            </div>

            <div className="card-modern">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <UserGroupIcon className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Client-Focused</h4>
              <p className="text-sm" style={{color: 'var(--secondary)'}}>Dedicated to understanding and exceeding your expectations</p>
            </div>

            <div className="card-modern">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <ChartBarIcon className="w-6 h-6 text-pink-600" />
              </div>
              <h4 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Measurable Results</h4>
              <p className="text-sm" style={{color: 'var(--secondary)'}}>Data-driven approach ensuring tangible business outcomes</p>
            </div>

            <div className="card-modern">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <ClockIcon className="w-6 h-6 text-indigo-600" />
              </div>
              <h4 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Fast Delivery</h4>
              <p className="text-sm" style={{color: 'var(--secondary)'}}>Efficient project management ensuring timely completion</p>
            </div>

            <div className="card-modern">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircleIcon className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Ongoing Support</h4>
              <p className="text-sm" style={{color: 'var(--secondary)'}}>Continuous maintenance and optimization post-launch</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="card-modern max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--foreground)'}}>
Ready to transform your business?</h3>
            <p className="mb-6" style={{color: 'var(--secondary)'}}>
              Contact us today for a free consultation and discover how our services can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Get Free Consultation
              </a>
              <a href="/portfolio" className="btn-secondary">
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
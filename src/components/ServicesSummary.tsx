import Link from 'next/link'
import { ArrowRightIcon, CodeBracketIcon, ComputerDesktopIcon, PaintBrushIcon, MegaphoneIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline'

export default function ServicesSummary() {
  const services = [
    {
      title: "Software Development",
      description: "Custom scalable solutions",
      icon: CodeBracketIcon,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
    },
    {
      title: "Web Development",
      description: "Performance-focused websites",
      icon: ComputerDesktopIcon,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100",
    },
    {
      title: "Content Creation",
      description: "Compelling brand storytelling",
      icon: PaintBrushIcon,
      iconColor: "text-green-600",
      iconBg: "bg-green-100",
    },
    {
      title: "Social Media Marketing",
      description: "Strategic social campaigns",
      icon: MegaphoneIcon,
      iconColor: "text-pink-600",
      iconBg: "bg-pink-100",
    },
    {
      title: "Influencer Marketing",
      description: "Brand amplification partnerships",
      icon: UserGroupIcon,
      iconColor: "text-indigo-600",
      iconBg: "bg-indigo-100",
    },
    {
      title: "Marketing Campaigns",
      description: "Data-driven ROI optimization",
      icon: ChartBarIcon,
      iconColor: "text-orange-600",
      iconBg: "bg-orange-100",
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
          <p className="text-xl max-w-3xl mx-auto mb-8" style={{color: 'var(--secondary)'}}>
            We offer 6 core services to transform your business and accelerate growth
          </p>
          <Link href="/services" className="btn-primary inline-flex items-center space-x-2">
            <span>View All Services</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="card-modern text-center">
                <div className={`w-12 h-12 ${service.iconBg} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`w-6 h-6 ${service.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>
                  {service.title}
                </h3>
                <p className="text-sm" style={{color: 'var(--secondary)'}}>
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
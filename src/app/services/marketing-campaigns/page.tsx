import Link from 'next/link'
import { ArrowLeftIcon, ChartBarIcon, RocketLaunchIcon, MagnifyingGlassIcon, UserPlusIcon, HeartIcon, CalendarIcon, CheckCircleIcon, GlobeAltIcon, MegaphoneIcon, PaintBrushIcon, CurrencyDollarIcon, ClockIcon, TrophyIcon } from '@heroicons/react/24/outline'

export default function MarketingCampaignsPage() {
  const campaignTypes = [
    {
      title: 'Brand Awareness',
      description: 'Build recognition and visibility for your brand across target audiences',
      objectives: ['Increase brand recognition', 'Expand market reach', 'Improve brand perception', 'Build thought leadership'],
      icon: MegaphoneIcon,
      color: 'blue'
    },
    {
      title: 'Product Launch',
      description: 'Generate excitement and drive adoption for new products or services',
      objectives: ['Create launch buzz', 'Drive initial sales', 'Build product awareness', 'Generate media coverage'],
      icon: RocketLaunchIcon,
      color: 'green'
    },
    {
      title: 'Lead Generation',
      description: 'Attract and convert qualified prospects into potential customers',
      objectives: ['Generate qualified leads', 'Fill sales pipeline', 'Increase conversion rates', 'Reduce acquisition costs'],
      icon: UserPlusIcon,
      color: 'purple'
    },
    {
      title: 'Customer Retention',
      description: 'Strengthen relationships with existing customers to increase loyalty',
      objectives: ['Improve retention rates', 'Increase customer lifetime value', 'Drive repeat purchases', 'Build brand advocates'],
      icon: HeartIcon,
      color: 'pink'
    },
    {
      title: 'Event Marketing',
      description: 'Promote events and drive attendance through strategic campaigns',
      objectives: ['Maximize attendance', 'Generate event buzz', 'Build community', 'Create networking opportunities'],
      icon: CalendarIcon,
      color: 'indigo'
    },
    {
      title: 'Seasonal Campaigns',
      description: 'Leverage seasonal trends and holidays for timely promotional campaigns',
      objectives: ['Capitalize on trends', 'Drive seasonal sales', 'Create urgency', 'Boost revenue peaks'],
      icon: ClockIcon,
      color: 'orange'
    }
  ]

  const channels = {
    digital: [
      'Google Ads & Search Marketing',
      'Social Media Advertising',
      'LinkedIn Marketing',
      'Display Advertising',
      'Email Marketing',
      'YouTube Advertising',
      'Influencer Partnerships'
    ],
    content: [
      'Blog Content & SEO',
      'Video Marketing',
      'Podcast Advertising',
      'Webinar Marketing',
      'White Papers & Case Studies'
    ],
    traditional: [
      'Public Relations',
      'Print Advertising',
      'Radio Sponsorships',
      'Out-of-Home Advertising',
      'Event Sponsorships'
    ]
  }

  const metrics = [
    {
      value: '300%',
      label: 'Average ROI',
      description: 'Return on investment across all campaign types',
      icon: CurrencyDollarIcon
    },
    {
      value: '85%',
      label: 'Lead Quality Increase',
      description: 'Improvement in qualified lead generation',
      icon: TrophyIcon
    },
    {
      value: '250%',
      label: 'Brand Awareness Lift',
      description: 'Average increase in brand recognition',
      icon: MegaphoneIcon
    },
    {
      value: '60%',
      label: 'Cost Reduction',
      description: 'Decrease in customer acquisition costs',
      icon: ChartBarIcon
    }
  ]

  const services = [
    {
      title: 'Campaign Strategy',
      description: 'Comprehensive campaign planning and strategic development',
      features: ['Market research', 'Audience segmentation', 'Goal setting', 'Budget planning'],
      icon: MagnifyingGlassIcon,
      color: 'blue'
    },
    {
      title: 'Creative Development',
      description: 'Compelling creative assets that resonate with your audience',
      features: ['Creative concepts', 'Visual design', 'Copy writing', 'Asset production'],
      icon: PaintBrushIcon,
      color: 'green'
    },
    {
      title: 'Multi-Channel Execution',
      description: 'Coordinated campaign deployment across all relevant channels',
      features: ['Channel optimization', 'Timeline management', 'Resource allocation', 'Quality control'],
      icon: GlobeAltIcon,
      color: 'purple'
    },
    {
      title: 'Performance Analytics',
      description: 'Real-time tracking and comprehensive performance reporting',
      features: ['KPI monitoring', 'ROI analysis', 'Attribution modeling', 'Custom dashboards'],
      icon: ChartBarIcon,
      color: 'indigo'
    },
    {
      title: 'Campaign Optimization',
      description: 'Continuous optimization based on performance data',
      features: ['A/B testing', 'Performance tuning', 'Budget reallocation', 'Strategy refinement'],
      icon: TrophyIcon,
      color: 'orange'
    },
    {
      title: 'Audience Targeting',
      description: 'Advanced targeting to reach the right audience at the right time',
      features: ['Demographic targeting', 'Behavioral analysis', 'Interest profiling', 'Lookalike audiences'],
      icon: UserPlusIcon,
      color: 'pink'
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Discovery & Research',
      description: 'Understanding your business, market, and competition to identify opportunities'
    },
    {
      step: '2',
      title: 'Strategy Development',
      description: 'Creating comprehensive campaign strategy with clear objectives and KPIs'
    },
    {
      step: '3',
      title: 'Creative Execution',
      description: 'Developing compelling creative assets and messaging for all channels'
    },
    {
      step: '4',
      title: 'Campaign Launch',
      description: 'Coordinated deployment across all selected channels and platforms'
    },
    {
      step: '5',
      title: 'Monitor & Optimize',
      description: 'Real-time monitoring and continuous optimization based on performance'
    },
    {
      step: '6',
      title: 'Analyze & Report',
      description: 'Comprehensive analysis and reporting with actionable insights'
    }
  ]

  const differentiators = [
    {
      title: 'Data-Driven Decisions',
      description: 'Every decision backed by comprehensive data analysis and insights',
      icon: ChartBarIcon
    },
    {
      title: 'Creative Excellence',
      description: 'Award-winning creative that breaks through the noise and drives action',
      icon: PaintBrushIcon
    },
    {
      title: 'Real-Time Optimization',
      description: 'Continuous campaign optimization based on live performance data',
      icon: TrophyIcon
    },
    {
      title: 'Deep Audience Understanding',
      description: 'Comprehensive audience research and behavioral analysis',
      icon: UserPlusIcon
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
            <div className="w-20 h-20 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <ChartBarIcon className="w-10 h-10 text-orange-600" />
            </div>
            <h1 className="mb-6" style={{color: 'var(--foreground)'}}>
              Marketing Campaigns Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8" style={{color: 'var(--secondary)'}}>
              Data-driven comprehensive marketing strategies with multi-channel execution that deliver measurable results and ROI.
              We create integrated campaigns that connect with your audience and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Plan Your Campaign
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                View Our Work
              </Link>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Campaign Performance Results</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                Our data-driven approach consistently delivers exceptional results for our clients
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => {
                const IconComponent = metric.icon
                return (
                  <div key={index} className="card-modern text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-4xl font-bold mb-2" style={{color: 'var(--foreground)'}}>{metric.value}</div>
                    <div className="text-lg font-semibold mb-2" style={{color: 'var(--foreground)'}}>{metric.label}</div>
                    <p className="text-sm" style={{color: 'var(--secondary)'}}>{metric.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Campaign Types */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Campaign Types We Execute</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                Strategic campaigns tailored to achieve your specific business objectives
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {campaignTypes.map((campaign, index) => {
                const IconComponent = campaign.icon
                return (
                  <div key={index} className="card-modern">
                    <div className={`w-12 h-12 bg-${campaign.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className={`w-6 h-6 text-${campaign.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold mb-4" style={{color: 'var(--foreground)'}}>{campaign.title}</h3>
                    <p className="mb-4" style={{color: 'var(--secondary)'}}>{campaign.description}</p>
                    <ul className="space-y-2">
                      {campaign.objectives.map((objective, objectiveIndex) => (
                        <li key={objectiveIndex} className="flex items-center text-sm" style={{color: 'var(--secondary)'}}>
                          <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2" />
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Multi-Channel Execution */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Multi-Channel Execution</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                Integrated campaigns across digital, content, and traditional marketing channels
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-modern">
                <h3 className="text-lg font-bold mb-4" style={{color: 'var(--foreground)'}}>Digital Channels</h3>
                <ul className="space-y-2">
                  {channels.digital.map((channel, index) => (
                    <li key={index} className="flex items-center text-sm" style={{color: 'var(--secondary)'}}>
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {channel}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-modern">
                <h3 className="text-lg font-bold mb-4" style={{color: 'var(--foreground)'}}>Content Marketing</h3>
                <ul className="space-y-2">
                  {channels.content.map((channel, index) => (
                    <li key={index} className="flex items-center text-sm" style={{color: 'var(--secondary)'}}>
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      {channel}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-modern">
                <h3 className="text-lg font-bold mb-4" style={{color: 'var(--foreground)'}}>Traditional Channels</h3>
                <ul className="space-y-2">
                  {channels.traditional.map((channel, index) => (
                    <li key={index} className="flex items-center text-sm" style={{color: 'var(--secondary)'}}>
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      {channel}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Our Campaign Services</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                Comprehensive campaign management from strategy to execution and optimization
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

          {/* Differentiators */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>What Sets Us Apart</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                Our unique approach to marketing campaigns that delivers superior results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map((diff, index) => {
                const IconComponent = diff.icon
                return (
                  <div key={index} className="card-modern text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>{diff.title}</h3>
                    <p className="text-sm" style={{color: 'var(--secondary)'}}>{diff.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Our Campaign Process</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                A proven methodology that ensures successful campaign outcomes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item, index) => (
                <div key={index} className="card-modern">
                  <div className="flex items-center mb-3">
                    <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
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
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Why Choose Our Marketing Campaigns</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-modern text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ChartBarIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Proven ROI</h3>
                <p className="text-sm" style={{color: 'var(--secondary)'}}>300% average return on investment across all campaigns</p>
              </div>

              <div className="card-modern text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <GlobeAltIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Multi-Channel</h3>
                <p className="text-sm" style={{color: 'var(--secondary)'}}>Integrated campaigns across all relevant channels</p>
              </div>

              <div className="card-modern text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrophyIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Optimization</h3>
                <p className="text-sm" style={{color: 'var(--secondary)'}}>Real-time optimization for maximum performance</p>
              </div>

              <div className="card-modern text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MagnifyingGlassIcon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Transparency</h3>
                <p className="text-sm" style={{color: 'var(--secondary)'}}>Transparent reporting with detailed insights</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="card-modern max-w-2xl mx-auto">
              <h2 className="mb-4" style={{color: 'var(--foreground)'}}>Ready to Launch Your Next Campaign?</h2>
              <p className="mb-6" style={{color: 'var(--secondary)'}}>
                Let's create a comprehensive marketing campaign that drives real business results and ROI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Get Campaign Strategy
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
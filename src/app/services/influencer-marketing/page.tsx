import Link from 'next/link'
import { ArrowLeftIcon, UserGroupIcon, MagnifyingGlassIcon, ChatBubbleLeftRightIcon, PaintBrushIcon, RocketLaunchIcon, ChartBarIcon, CheckCircleIcon, CurrencyDollarIcon, ShieldCheckIcon, HeartIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

export default function InfluencerMarketingPage() {
  const influencerTypes = [
    {
      category: 'Nano-Influencers',
      followers: '1K-10K followers',
      description: 'High engagement rates with niche, loyal audiences',
      benefits: ['Authentic connections', 'Cost-effective', 'High engagement', 'Local reach'],
      color: 'blue'
    },
    {
      category: 'Micro-Influencers',
      followers: '10K-100K followers',
      description: 'Strong community engagement with specific expertise',
      benefits: ['Targeted audiences', 'Trusted recommendations', 'Quality content', 'Better ROI'],
      color: 'green'
    },
    {
      category: 'Mid-Tier Influencers',
      followers: '100K-1M followers',
      description: 'Balanced reach and engagement for growing brands',
      benefits: ['Wider reach', 'Professional content', 'Brand credibility', 'Diverse audiences'],
      color: 'purple'
    },
    {
      category: 'Macro-Influencers',
      followers: '1M+ followers',
      description: 'Maximum reach for large-scale brand awareness campaigns',
      benefits: ['Massive reach', 'Celebrity status', 'Viral potential', 'Brand recognition'],
      color: 'orange'
    }
  ]

  const campaignTypes = [
    {
      title: 'Product Launches',
      description: 'Generate buzz and excitement around new product releases',
      features: ['Unboxing videos', 'First impressions', 'Launch events', 'Exclusive previews'],
      icon: RocketLaunchIcon,
      color: 'blue'
    },
    {
      title: 'Brand Awareness',
      description: 'Increase brand visibility and recognition among target audiences',
      features: ['Brand storytelling', 'Lifestyle integration', 'Brand partnerships', 'Awareness campaigns'],
      icon: GlobeAltIcon,
      color: 'green'
    },
    {
      title: 'Content Amplification',
      description: 'Extend the reach of your existing content through influencer networks',
      features: ['Content repurposing', 'Cross-platform sharing', 'Viral potential', 'Audience expansion'],
      icon: PaintBrushIcon,
      color: 'purple'
    },
    {
      title: 'Event Promotion',
      description: 'Drive attendance and engagement for events and activations',
      features: ['Event coverage', 'Live streaming', 'Behind-scenes', 'Post-event content'],
      icon: UserGroupIcon,
      color: 'pink'
    },
    {
      title: 'Reviews & Testimonials',
      description: 'Build trust through authentic product reviews and recommendations',
      features: ['Honest reviews', 'Product demonstrations', 'Comparison content', 'User testimonials'],
      icon: HeartIcon,
      color: 'indigo'
    },
    {
      title: 'Seasonal Campaigns',
      description: 'Leverage seasonal trends and holidays for timely promotions',
      features: ['Holiday campaigns', 'Seasonal trends', 'Limited offers', 'Festive content'],
      icon: CheckCircleIcon,
      color: 'yellow'
    }
  ]

  const services = [
    {
      title: 'Influencer Discovery',
      description: 'Advanced tools and expertise to find the perfect influencers for your brand',
      features: ['Database access', 'Audience analysis', 'Brand alignment', 'Performance history'],
      icon: MagnifyingGlassIcon,
      color: 'blue'
    },
    {
      title: 'Relationship Management',
      description: 'Professional outreach and ongoing relationship building',
      features: ['Initial outreach', 'Contract negotiation', 'Ongoing communication', 'Relationship nurturing'],
      icon: ChatBubbleLeftRightIcon,
      color: 'green'
    },
    {
      title: 'Content Collaboration',
      description: 'Ensuring brand alignment while maintaining authentic influencer voice',
      features: ['Content guidelines', 'Creative briefs', 'Approval process', 'Brand consistency'],
      icon: PaintBrushIcon,
      color: 'purple'
    },
    {
      title: 'Performance Tracking',
      description: 'Detailed analytics and ROI measurement for all campaigns',
      features: ['Engagement metrics', 'Reach analysis', 'ROI calculation', 'Performance reports'],
      icon: ChartBarIcon,
      color: 'indigo'
    },
    {
      title: 'Compliance Management',
      description: 'Ensuring all campaigns adhere to FTC guidelines and regulations',
      features: ['FTC compliance', 'Disclosure requirements', 'Legal guidelines', 'Risk management'],
      icon: ShieldCheckIcon,
      color: 'orange'
    },
    {
      title: 'Campaign Strategy',
      description: 'Comprehensive campaign planning and strategic development',
      features: ['Goal setting', 'Target audience', 'Campaign timeline', 'Budget planning'],
      icon: RocketLaunchIcon,
      color: 'pink'
    }
  ]

  const benefits = [
    {
      title: 'Build Trust',
      description: 'Leverage influencer credibility to build trust with your target audience',
      icon: HeartIcon
    },
    {
      title: 'Targeted Reach',
      description: 'Access specific demographics and niche audiences through relevant influencers',
      icon: UserGroupIcon
    },
    {
      title: 'Authentic Content',
      description: 'Generate genuine, relatable content that resonates with audiences',
      icon: PaintBrushIcon
    },
    {
      title: 'Measurable ROI',
      description: 'Track performance and demonstrate clear return on investment',
      icon: ChartBarIcon
    },
    {
      title: 'Cost-Effective',
      description: 'Achieve better results compared to traditional advertising methods',
      icon: CurrencyDollarIcon
    },
    {
      title: 'Long-term Relationships',
      description: 'Build lasting partnerships that provide ongoing value',
      icon: CheckCircleIcon
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Strategy Development',
      description: 'Define campaign objectives, target audience, and success metrics'
    },
    {
      step: '2',
      title: 'Influencer Research',
      description: 'Identify and evaluate potential influencers based on your criteria'
    },
    {
      step: '3',
      title: 'Outreach & Negotiation',
      description: 'Professional outreach and contract negotiation with selected influencers'
    },
    {
      step: '4',
      title: 'Content Creation',
      description: 'Collaborate on content creation while maintaining brand guidelines'
    },
    {
      step: '5',
      title: 'Campaign Launch',
      description: 'Execute the campaign across all agreed platforms and channels'
    },
    {
      step: '6',
      title: 'Performance Analysis',
      description: 'Monitor, analyze, and report on campaign performance and ROI'
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
            <div className="w-20 h-20 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <UserGroupIcon className="w-10 h-10 text-indigo-600" />
            </div>
            <h1 className="mb-6" style={{color: 'var(--foreground)'}}>
              Influencer Marketing Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8" style={{color: 'var(--secondary)'}}>
              Amplify your brand message and expand reach through strategic influencer partnerships and collaborations.
              We connect you with authentic voices that resonate with your target audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start Your Campaign
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                View Our Work
              </Link>
            </div>
          </div>

          {/* Influencer Categories */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Influencer Categories We Work With</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                We partner with influencers across all follower ranges to match your brand's specific needs and budget
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {influencerTypes.map((type, index) => (
                <div key={index} className="card-modern text-center">
                  <div className={`w-12 h-12 bg-${type.color}-100 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <UserGroupIcon className={`w-6 h-6 text-${type.color}-600`} />
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>{type.category}</h3>
                  <p className="text-sm font-medium mb-3" style={{color: 'var(--secondary)'}}>{type.followers}</p>
                  <p className="text-sm mb-4" style={{color: 'var(--secondary)'}}>{type.description}</p>
                  <ul className="space-y-1 text-xs">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center justify-center" style={{color: 'var(--secondary)'}}>
                        <CheckCircleIcon className="w-3 h-3 text-green-600 mr-1" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Campaign Types */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Campaign Types We Execute</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                Strategic influencer campaigns tailored to achieve your specific marketing objectives
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
                      {campaign.features.map((feature, featureIndex) => (
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

          {/* Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Our Influencer Marketing Services</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                Comprehensive influencer marketing solutions from discovery to performance analysis
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

          {/* Strategic Benefits */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Strategic Benefits</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                Why influencer marketing should be part of your digital marketing strategy
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="card-modern text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>{benefit.title}</h3>
                    <p className="text-sm" style={{color: 'var(--secondary)'}}>{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Our Influencer Marketing Process</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                A systematic approach that ensures successful influencer partnerships and campaign results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item, index) => (
                <div key={index} className="card-modern">
                  <div className="flex items-center mb-3">
                    <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
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
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Why Choose Our Influencer Marketing</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-modern text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MagnifyingGlassIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Expert Vetting</h3>
                <p className="text-sm" style={{color: 'var(--secondary)'}}>Thorough influencer vetting process to ensure brand alignment</p>
              </div>

              <div className="card-modern text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ChatBubbleLeftRightIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Professional Management</h3>
                <p className="text-sm" style={{color: 'var(--secondary)'}}>End-to-end campaign management and relationship building</p>
              </div>

              <div className="card-modern text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ChartBarIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Performance Tracking</h3>
                <p className="text-sm" style={{color: 'var(--secondary)'}}>Detailed analytics and ROI measurement for all campaigns</p>
              </div>

              <div className="card-modern text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>FTC Compliance</h3>
                <p className="text-sm" style={{color: 'var(--secondary)'}}>Ensuring all campaigns meet legal requirements and guidelines</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="card-modern max-w-2xl mx-auto">
              <h2 className="mb-4" style={{color: 'var(--foreground)'}}>Ready to Launch Your Influencer Campaign?</h2>
              <p className="mb-6" style={{color: 'var(--secondary)'}}>
                Let's connect your brand with authentic influencers who will amplify your message and drive real results
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
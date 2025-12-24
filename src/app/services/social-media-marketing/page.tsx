import Link from 'next/link'
import { ArrowLeftIcon, MegaphoneIcon, UserGroupIcon, ChartBarIcon, CurrencyDollarIcon, PaintBrushIcon, CheckCircleIcon, GlobeAltIcon, ChatBubbleLeftRightIcon, TrophyIcon } from '@heroicons/react/24/outline'

export default function SocialMediaMarketingPage() {
  const platforms = [
    {
      name: 'Facebook',
      description: 'Build communities and drive engagement with targeted content',
      features: ['Business Pages', 'Facebook Ads', 'Groups Management', 'Live Streaming'],
      color: 'blue'
    },
    {
      name: 'Instagram',
      description: 'Visual storytelling that showcases your brand personality',
      features: ['Feed Posts', 'Stories & Reels', 'Shopping Tags', 'Influencer Campaigns'],
      color: 'pink'
    },
    {
      name: 'LinkedIn',
      description: 'Professional networking and B2B lead generation',
      features: ['Company Pages', 'Thought Leadership', 'LinkedIn Ads', 'Employee Advocacy'],
      color: 'indigo'
    },
    {
      name: 'Twitter',
      description: 'Real-time engagement and brand voice development',
      features: ['Tweet Strategy', 'Community Building', 'Trending Topics', 'Customer Support'],
      color: 'blue'
    },
    {
      name: 'YouTube',
      description: 'Video content marketing and channel growth',
      features: ['Channel Optimization', 'Video SEO', 'YouTube Ads', 'Content Planning'],
      color: 'red'
    },
    {
      name: 'TikTok',
      description: 'Creative short-form videos for younger demographics',
      features: ['Viral Content', 'Hashtag Challenges', 'TikTok Ads', 'Trend Participation'],
      color: 'purple'
    }
  ]

  const services = [
    {
      title: 'Strategy Development',
      description: 'Data-driven social media strategies tailored to your business goals',
      features: ['Audience Research', 'Competitive Analysis', 'Content Pillars', 'KPI Definition'],
      icon: ChartBarIcon,
      color: 'blue'
    },
    {
      title: 'Content Creation',
      description: 'Engaging visual and written content optimized for each platform',
      features: ['Graphic Design', 'Video Production', 'Copywriting', 'Brand Storytelling'],
      icon: PaintBrushIcon,
      color: 'green'
    },
    {
      title: 'Community Management',
      description: 'Active engagement and relationship building with your audience',
      features: ['Daily Monitoring', 'Response Management', 'Crisis Communication', 'Community Building'],
      icon: UserGroupIcon,
      color: 'purple'
    },
    {
      title: 'Social Advertising',
      description: 'Targeted paid campaigns that maximize ROI and reach',
      features: ['Campaign Setup', 'Audience Targeting', 'Ad Creative', 'Performance Optimization'],
      icon: CurrencyDollarIcon,
      color: 'green'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Comprehensive performance tracking and insights',
      features: ['Performance Metrics', 'ROI Analysis', 'Monthly Reports', 'Strategy Optimization'],
      icon: ChartBarIcon,
      color: 'indigo'
    },
    {
      title: 'Influencer Partnerships',
      description: 'Strategic collaborations with relevant influencers',
      features: ['Influencer Research', 'Partnership Management', 'Campaign Coordination', 'Performance Tracking'],
      icon: TrophyIcon,
      color: 'orange'
    }
  ]

  const metrics = [
    {
      value: '150%',
      label: 'Engagement Increase',
      description: 'Average engagement boost for our clients',
      icon: UserGroupIcon
    },
    {
      value: '300%',
      label: 'Follower Growth',
      description: 'Average follower increase in first 6 months',
      icon: TrophyIcon
    },
    {
      value: '85%',
      label: 'Lead Generation',
      description: 'Increase in qualified leads from social media',
      icon: ChartBarIcon
    },
    {
      value: '200%',
      label: 'Brand Awareness',
      description: 'Improvement in brand recognition and reach',
      icon: GlobeAltIcon
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Strategy & Audit',
      description: 'Comprehensive audit of current social presence and strategy development'
    },
    {
      step: '2',
      title: 'Content Planning',
      description: 'Creating content calendars and developing platform-specific content strategies'
    },
    {
      step: '3',
      title: 'Content Production',
      description: 'Producing high-quality visual and written content for all platforms'
    },
    {
      step: '4',
      title: 'Campaign Launch',
      description: 'Implementing posting schedules and launching paid advertising campaigns'
    },
    {
      step: '5',
      title: 'Community Engagement',
      description: 'Active community management and real-time audience engagement'
    },
    {
      step: '6',
      title: 'Optimization',
      description: 'Continuous monitoring, analysis, and strategy optimization'
    }
  ]

  const approaches = [
    {
      title: 'Authentic Engagement',
      description: 'Building genuine connections with your audience through meaningful interactions',
      icon: ChatBubbleLeftRightIcon
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Using analytics and insights to guide content and strategy decisions',
      icon: ChartBarIcon
    },
    {
      title: 'Brand Personality',
      description: 'Developing a unique and consistent voice that represents your brand',
      icon: MegaphoneIcon
    },
    {
      title: 'Multi-Platform Integration',
      description: 'Coordinated campaigns across all relevant social media platforms',
      icon: GlobeAltIcon
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
            <div className="w-20 h-20 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <MegaphoneIcon className="w-10 h-10 text-pink-600" />
            </div>
            <h1 className="mb-6" style={{color: 'var(--foreground)'}}>
              Social Media Marketing Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8" style={{color: 'var(--secondary)'}}>
              Strategic social media campaigns across all major platforms that build brand awareness,
              drive engagement, and convert followers into customers through authentic storytelling.
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

          {/* Performance Metrics */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Proven Results</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                Our social media marketing campaigns deliver measurable results for our clients
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

          {/* Platforms */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Platforms We Manage</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                Expert management across all major social media platforms
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="card-modern">
                  <h3 className="text-xl font-bold mb-4" style={{color: 'var(--foreground)'}}>{platform.name}</h3>
                  <p className="mb-4" style={{color: 'var(--secondary)'}}>{platform.description}</p>
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
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

          {/* Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Our Social Media Services</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                Comprehensive social media marketing solutions from strategy to execution
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

          {/* Approach */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Our Approach</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                Key principles that guide our social media marketing strategy
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {approaches.map((approach, index) => {
                const IconComponent = approach.icon
                return (
                  <div key={index} className="card-modern text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>{approach.title}</h3>
                    <p className="text-sm" style={{color: 'var(--secondary)'}}>{approach.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Our Social Media Marketing Process</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                A systematic approach that ensures consistent growth and engagement
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item, index) => (
                <div key={index} className="card-modern">
                  <div className="flex items-center mb-3">
                    <span className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
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
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Why Choose Our Social Media Marketing</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-modern text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ChartBarIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Proven Results</h3>
                <p className="text-sm" style={{color: 'var(--secondary)'}}>Track record of delivering measurable social media growth</p>
              </div>

              <div className="card-modern text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <UserGroupIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Authentic Engagement</h3>
                <p className="text-sm" style={{color: 'var(--secondary)'}}>Building genuine connections with your target audience</p>
              </div>

              <div className="card-modern text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <PaintBrushIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Creative Content</h3>
                <p className="text-sm" style={{color: 'var(--secondary)'}}>Eye-catching content that stands out in social feeds</p>
              </div>

              <div className="card-modern text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <GlobeAltIcon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Multi-Platform</h3>
                <p className="text-sm" style={{color: 'var(--secondary)'}}>Coordinated campaigns across all relevant platforms</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="card-modern max-w-2xl mx-auto">
              <h2 className="mb-4" style={{color: 'var(--foreground)'}}>Ready to Grow Your Social Presence?</h2>
              <p className="mb-6" style={{color: 'var(--secondary)'}}>
                Let's create a social media strategy that builds your brand and drives real business results
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Get Free Strategy Session
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
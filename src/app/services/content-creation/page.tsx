import Link from 'next/link'
import { ArrowLeftIcon, PaintBrushIcon, PencilIcon, VideoCameraIcon, SpeakerWaveIcon, PhotoIcon, CheckCircleIcon, ChartBarIcon, UserGroupIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

export default function ContentCreationPage() {
  const contentTypes = [
    {
      title: 'Written Content',
      description: 'Compelling copy that converts readers into customers',
      services: ['Website Copy', 'Blog Articles', 'Email Campaigns', 'Product Descriptions', 'White Papers', 'Case Studies'],
      icon: PencilIcon,
      color: 'blue'
    },
    {
      title: 'Visual Content',
      description: 'Eye-catching designs that communicate your brand message',
      services: ['Infographics', 'Social Media Graphics', 'Brand Assets', 'Illustrations', 'Banner Designs', 'Print Materials'],
      icon: PhotoIcon,
      color: 'purple'
    },
    {
      title: 'Video Content',
      description: 'Engaging videos that tell your story and showcase your products',
      services: ['Promotional Videos', 'Tutorials', 'Testimonials', 'Product Demos', 'Animated Explainers', 'Live Streaming'],
      icon: VideoCameraIcon,
      color: 'green'
    },
    {
      title: 'Audio Content',
      description: 'Professional audio content for podcasts and marketing',
      services: ['Podcast Production', 'Voice-overs', 'Audio Ads', 'Sound Design', 'Music Selection', 'Interview Content'],
      icon: SpeakerWaveIcon,
      color: 'orange'
    }
  ]

  const coreServices = [
    {
      title: 'Copywriting',
      description: 'Persuasive and engaging written content that drives action',
      features: ['Website Copy', 'Sales Pages', 'Email Sequences', 'Product Descriptions'],
      icon: PencilIcon,
      color: 'blue'
    },
    {
      title: 'Video Production',
      description: 'Professional video content from concept to final production',
      features: ['Script Writing', 'Filming & Editing', 'Motion Graphics', 'Post-Production'],
      icon: VideoCameraIcon,
      color: 'green'
    },
    {
      title: 'Graphic Design',
      description: 'Visual designs that enhance your brand identity and messaging',
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'Digital Assets'],
      icon: PaintBrushIcon,
      color: 'purple'
    },
    {
      title: 'Blog Writing',
      description: 'SEO-optimized blog content that establishes thought leadership',
      features: ['Industry Articles', 'How-to Guides', 'News Updates', 'Opinion Pieces'],
      icon: PencilIcon,
      color: 'indigo'
    },
    {
      title: 'Brand Storytelling',
      description: 'Compelling narratives that connect emotionally with your audience',
      features: ['Brand Story Development', 'Customer Success Stories', 'Mission & Vision', 'Company Culture'],
      icon: UserGroupIcon,
      color: 'pink'
    },
    {
      title: 'Social Media Content',
      description: 'Platform-specific content designed to engage and grow your audience',
      features: ['Post Graphics', 'Captions & Copy', 'Stories & Reels', 'Community Content'],
      icon: GlobeAltIcon,
      color: 'yellow'
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Strategy & Research',
      description: 'Understanding your brand, audience, and content goals'
    },
    {
      step: '2',
      title: 'Content Planning',
      description: 'Developing a comprehensive content strategy and calendar'
    },
    {
      step: '3',
      title: 'Creation & Production',
      description: 'Producing high-quality content across all requested formats'
    },
    {
      step: '4',
      title: 'Review & Optimization',
      description: 'Refining content based on feedback and best practices'
    },
    {
      step: '5',
      title: 'Distribution',
      description: 'Strategic deployment across appropriate channels and platforms'
    },
    {
      step: '6',
      title: 'Performance Analysis',
      description: 'Measuring results and optimizing for better performance'
    }
  ]

  const strategicGoals = [
    {
      title: 'Build Brand Authority',
      description: 'Establish your expertise and thought leadership in your industry',
      icon: ChartBarIcon
    },
    {
      title: 'Increase Engagement',
      description: 'Create content that resonates with your audience and drives interaction',
      icon: UserGroupIcon
    },
    {
      title: 'Drive Conversions',
      description: 'Content optimized to guide prospects through your sales funnel',
      icon: CheckCircleIcon
    },
    {
      title: 'Improve SEO',
      description: 'SEO-optimized content that improves your search rankings',
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
            <div className="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <PaintBrushIcon className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="mb-6" style={{color: 'var(--foreground)'}}>
              Content Creation Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8" style={{color: 'var(--secondary)'}}>
              Compelling content that engages your audience and drives meaningful results through strategic storytelling.
              We create content that builds brand authority and converts prospects into customers.
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

          {/* Content Types */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Types of Content We Create</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                Comprehensive content solutions across all formats and platforms
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contentTypes.map((type, index) => {
                const IconComponent = type.icon
                return (
                  <div key={index} className="card-modern">
                    <div className={`w-12 h-12 bg-${type.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className={`w-6 h-6 text-${type.color}-600`} />
                    </div>
                    <h3 className="text-lg font-bold mb-4" style={{color: 'var(--foreground)'}}>{type.title}</h3>
                    <p className="mb-4 text-sm" style={{color: 'var(--secondary)'}}>{type.description}</p>
                    <ul className="space-y-1">
                      {type.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="text-xs" style={{color: 'var(--secondary)'}}>
                          • {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Core Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Our Core Content Services</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                Specialized content creation services tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreServices.map((service, index) => {
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

          {/* Content Creation Process */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Our Content Creation Process</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                A strategic approach that ensures every piece of content serves your business goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item, index) => (
                <div key={index} className="card-modern">
                  <div className="flex items-center mb-3">
                    <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {item.step}
                    </span>
                    <h3 className="text-lg font-bold" style={{color: 'var(--foreground)'}}>{item.title}</h3>
                  </div>
                  <p className="text-sm" style={{color: 'var(--secondary)'}}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Goals */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Strategic Content Goals</h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
                Every piece of content we create is designed to achieve specific business objectives
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {strategicGoals.map((goal, index) => {
                const IconComponent = goal.icon
                return (
                  <div key={index} className="card-modern text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>{goal.title}</h3>
                    <p className="text-sm" style={{color: 'var(--secondary)'}}>{goal.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="mb-6" style={{color: 'var(--foreground)'}}>Why Choose Our Content Creation</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-modern text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <PaintBrushIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Creative Excellence</h3>
                <p className="text-sm" style={{color: 'var(--secondary)'}}>Award-winning creative team with proven track record</p>
              </div>

              <div className="card-modern text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ChartBarIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Data-Driven</h3>
                <p className="text-sm" style={{color: 'var(--secondary)'}}>Content strategy based on analytics and performance data</p>
              </div>

              <div className="card-modern text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <UserGroupIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Audience-Focused</h3>
                <p className="text-sm" style={{color: 'var(--secondary)'}}>Content tailored to your specific target audience</p>
              </div>

              <div className="card-modern text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <GlobeAltIcon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Multi-Platform</h3>
                <p className="text-sm" style={{color: 'var(--secondary)'}}>Content optimized for all digital platforms and channels</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="card-modern max-w-2xl mx-auto">
              <h2 className="mb-4" style={{color: 'var(--foreground)'}}>Ready to Create Compelling Content?</h2>
              <p className="mb-6" style={{color: 'var(--secondary)'}}>
                Let's develop a content strategy that engages your audience and drives business results
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
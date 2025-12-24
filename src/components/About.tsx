import { BoltIcon, UserGroupIcon, ChartBarIcon, GlobeAltIcon, CheckCircleIcon, ClockIcon, CogIcon, TrophyIcon } from '@heroicons/react/24/outline'

export default function About() {
  return (
    <section id="about" style={{background: 'var(--background)'}}>
      <div className="container-professional">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-slate-700 text-slate-200 rounded-full text-sm font-medium mb-8">
            About Us
          </div>
          <h2 className="mb-8" style={{color: 'var(--foreground)'}}>
            Zenith Innovations - Transforming businesses since 2024
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
            Located at No 247 Deans Road, Colombo 10, Sri Lanka, we are Zenith Innovations -
            a full-service digital agency bridging the gap between cutting-edge technology and business success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{color: 'var(--foreground)'}}>
Our Story</h3>
            <p className="mb-6">
              Since 2024, Zenith Innovations started as a small team of passionate developers and marketers with a vision
              to empower businesses with innovative digital solutions. We have successfully served over 10 businesses
              across technology, retail, healthcare, and finance industries.
            </p>
            <p>
              We focus on digital transformation, combining technical expertise with creative strategy to deliver
              solutions that exceed client expectations. Our approach drives growth, enhances customer engagement,
              and creates lasting value in the digital economy.
            </p>

            {/* Key Features with Heroicons */}
            <div className="grid grid-cols-1 gap-6 mt-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BoltIcon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{color: 'var(--foreground)'}}>
Excellence & Innovation</h4>
                  <p style={{color: 'var(--secondary)'}}>
Cutting-edge technology solutions that push boundaries and deliver exceptional results</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UserGroupIcon className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{color: 'var(--foreground)'}}>
Collaboration & Integrity</h4>
                  <p style={{color: 'var(--secondary)'}}>
Building lasting partnerships through transparent collaboration and honest communication</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ChartBarIcon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{color: 'var(--foreground)'}}>
Results-Driven & Learning</h4>
                  <p style={{color: 'var(--secondary)'}}>
Measurable outcomes through continuous improvement and data-driven strategies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="card-modern">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <GlobeAltIcon className="w-8 h-8 text-gray-600" />
              </div>
              <h4 className="text-xl font-bold mb-4" style={{color: 'var(--foreground)'}}>
Our Mission</h4>
              <p className="mb-6" style={{color: 'var(--secondary)'}}>
                To empower businesses with innovative digital solutions that drive growth, enhance customer engagement,
                and create lasting value in the digital economy.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-lg font-bold" style={{color: 'var(--foreground)'}}>
Innovation</div>
                  <div className="text-sm" style={{color: 'var(--secondary)'}}>
Always Forward</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold" style={{color: 'var(--foreground)'}}>
Quality</div>
                  <div className="text-sm" style={{color: 'var(--secondary)'}}>
Excellence First</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold" style={{color: 'var(--foreground)'}}>
Growth</div>
                  <div className="text-sm" style={{color: 'var(--secondary)'}}>
Mutual Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-6" style={{color: 'var(--foreground)'}}>Our Vision</h3>
          <p className="text-lg max-w-4xl mx-auto mb-8" style={{color: 'var(--secondary)'}}>
            To be the leading digital transformation partner, recognized for innovative solutions,
            exceptional service, and commitment to driving meaningful business outcomes.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-6" style={{color: 'var(--foreground)'}}>Leadership Team</h3>
            <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
              Meet the visionary leaders driving Zenith Innovations forward
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-modern text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="w-10 h-10 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold mb-2" style={{color: 'var(--foreground)'}}>Tavina</h4>
              <p className="text-sm font-medium mb-3" style={{color: 'var(--secondary)'}}>CEO & Founder</p>
              <p className="text-sm" style={{color: 'var(--secondary)'}}>
                Visionary leader in tech innovation, driving the company's strategic direction and growth
              </p>
            </div>

            <div className="card-modern text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CogIcon className="w-10 h-10 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold mb-2" style={{color: 'var(--foreground)'}}>Imeth</h4>
              <p className="text-sm font-medium mb-3" style={{color: 'var(--secondary)'}}>Chief Technology Officer</p>
              <p className="text-sm" style={{color: 'var(--secondary)'}}>
                Technical architect ensuring our solutions meet the highest standards of innovation
              </p>
            </div>

            <div className="card-modern text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="w-10 h-10 text-green-600" />
              </div>
              <h4 className="text-xl font-bold mb-2" style={{color: 'var(--foreground)'}}>Minai</h4>
              <p className="text-sm font-medium mb-3" style={{color: 'var(--secondary)'}}>Project Manager</p>
              <p className="text-sm" style={{color: 'var(--secondary)'}}>
                Strategic project leader ensuring seamless delivery and client satisfaction
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-6" style={{color: 'var(--foreground)'}}>Core Values</h3>
            <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--secondary)'}}>
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-modern text-center">
              <h4 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Excellence</h4>
              <p className="text-sm" style={{color: 'var(--secondary)'}}>Delivering outstanding quality in every project</p>
            </div>
            <div className="card-modern text-center">
              <h4 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Innovation</h4>
              <p className="text-sm" style={{color: 'var(--secondary)'}}>Embracing cutting-edge technologies and creative solutions</p>
            </div>
            <div className="card-modern text-center">
              <h4 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Collaboration</h4>
              <p className="text-sm" style={{color: 'var(--secondary)'}}>Working together to achieve extraordinary results</p>
            </div>
            <div className="card-modern text-center">
              <h4 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Integrity</h4>
              <p className="text-sm" style={{color: 'var(--secondary)'}}>Building trust through honest and transparent communication</p>
            </div>
            <div className="card-modern text-center">
              <h4 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Results-Driven</h4>
              <p className="text-sm" style={{color: 'var(--secondary)'}}>Focusing on measurable outcomes and business impact</p>
            </div>
            <div className="card-modern text-center">
              <h4 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Continuous Learning</h4>
              <p className="text-sm" style={{color: 'var(--secondary)'}}>Constantly evolving and improving our capabilities</p>
            </div>
          </div>
        </div>

        {/* Stats with Heroicons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="card-modern text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CheckCircleIcon className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-4xl font-bold mb-2" style={{color: 'var(--foreground)'}}>
10+</div>
            <div style={{color: 'var(--secondary)'}}>
Businesses Served</div>
          </div>
          <div className="card-modern text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <ClockIcon className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-4xl font-bold mb-2" style={{color: 'var(--foreground)'}}>
4+</div>
            <div style={{color: 'var(--secondary)'}}>
Industries Covered</div>
          </div>
          <div className="card-modern text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrophyIcon className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-4xl font-bold mb-2" style={{color: 'var(--foreground)'}}>
100%</div>
            <div style={{color: 'var(--secondary)'}}>
Client Satisfaction</div>
          </div>
          <div className="card-modern text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CogIcon className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-4xl font-bold mb-2" style={{color: 'var(--foreground)'}}>
24/7</div>
            <div style={{color: 'var(--secondary)'}}>
Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}
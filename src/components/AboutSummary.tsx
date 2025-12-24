import Link from 'next/link'
import { ArrowRightIcon, BoltIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline'

export default function AboutSummary() {
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
          <p className="text-xl max-w-3xl mx-auto mb-8" style={{color: 'var(--secondary)'}}>
            Located in Colombo, Sri Lanka, we are a full-service digital agency providing worldwide service
            with agile project management and multilingual support in English and Sinhala.
          </p>
          <Link href="/about" className="btn-primary inline-flex items-center space-x-2">
            <span>Learn More About Us</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BoltIcon className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-4" style={{color: 'var(--foreground)'}}>Innovation First</h3>
            <p style={{color: 'var(--secondary)'}}>Cutting-edge technology solutions that push boundaries</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <UserGroupIcon className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-4" style={{color: 'var(--foreground)'}}>Client-Centric</h3>
            <p style={{color: 'var(--secondary)'}}>Building lasting partnerships through exceptional service</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <ChartBarIcon className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-4" style={{color: 'var(--foreground)'}}>Measurable Results</h3>
            <p style={{color: 'var(--secondary)'}}>ROI-focused solutions with proven track record</p>
          </div>
        </div>
      </div>
    </section>
  )
}
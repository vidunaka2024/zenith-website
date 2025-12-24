import Link from 'next/link'
import { ArrowRightIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function ContactSummary() {
  return (
    <section id="contact" style={{background: 'var(--card)'}}>
      <div className="container-professional">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-slate-700 text-slate-200 rounded-full text-sm font-medium mb-8">
            Get In Touch
          </div>
          <h2 className="mb-8" style={{color: 'var(--foreground)'}}>
            Ready to start your project?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8" style={{color: 'var(--secondary)'}}>
            Contact us today to discuss your requirements and get a free consultation
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Get Started Today</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <EnvelopeIcon className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Email Us</h3>
            <p className="text-sm" style={{color: 'var(--secondary)'}}>infozenithglobalsolutions@gmail.com</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <PhoneIcon className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Call Us</h3>
            <p className="text-sm" style={{color: 'var(--secondary)'}}>+94 740 075 696</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPinIcon className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold mb-2" style={{color: 'var(--foreground)'}}>Visit Us</h3>
            <p className="text-sm" style={{color: 'var(--secondary)'}}>Colombo 10, Sri Lanka</p>
          </div>
        </div>
      </div>
    </section>
  )
}
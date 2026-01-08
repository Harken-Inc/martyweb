import Link from 'next/link'
import { getProjectConfig } from '../../../shared/utils/markdown'

export default function DefaultHome() {
  const config = getProjectConfig()

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
              {config.name}
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              {config.navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: 'var(--color-secondary)' }}>
            {config.tagline || config.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            {config.subheadline || config.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#contact"
              className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg text-white transition-colors"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              {config.cta?.primary || 'Get Started'}
            </Link>
            <Link
              href="#about"
              className="btn-secondary px-8 py-4 rounded-lg font-semibold text-lg border-2 transition-colors"
              style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="about" className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-secondary)' }}>
            About {config.name}
          </h2>
          <p className="text-lg text-gray-600">
            {config.description}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-secondary)' }}>
            {config.contact?.heading || 'Get in Touch'}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {config.contact?.description || 'We\'d love to hear from you.'}
          </p>
          {config.contact?.email && (
            <a
              href={`mailto:${config.contact.email}`}
              className="text-lg font-medium hover:underline"
              style={{ color: 'var(--color-primary)' }}
            >
              {config.contact.email}
            </a>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-bold" style={{ color: 'var(--color-primary)' }}>{config.name}</span>
          <nav className="flex items-center gap-6">
            {config.navigation.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <span className="text-sm text-gray-500">© 2024 {config.name}</span>
        </div>
      </footer>
    </div>
  )
}

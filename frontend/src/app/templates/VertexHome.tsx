import Link from 'next/link'
import { JSX } from 'react'
import { getProjectConfig } from '../../../shared/utils/markdown'

// Arrow icon component
const ArrowUpRight = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7,7 17,7 17,17" />
  </svg>
)

// Service icons
const StrategyIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
  </svg>
)

const AnalyticsIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 3v18h18" />
    <path d="M7 16l4-4 4 4 5-6" />
  </svg>
)

const OperationsIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
    <path d="M12 2l10 5-10 5-10-5 10-5z" />
  </svg>
)

const TransformationIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 12a9 9 0 11-9-9" />
    <path d="M21 3v9h-9" />
  </svg>
)

const SearchIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
)

const iconMap: { [key: string]: () => JSX.Element } = {
  strategy: StrategyIcon,
  analytics: AnalyticsIcon,
  operations: OperationsIcon,
  transformation: TransformationIcon,
}

export default function VertexHome() {
  const config = getProjectConfig()

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold tracking-tight text-black">
              {config.name.toUpperCase()}
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {config.navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <Link
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 bg-black text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
            >
              {config.cta?.primary || 'Get Started'}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="hero-section py-20 lg:py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 mb-8">
                <SearchIcon />
                <span className="text-sm text-gray-600">Strategic Consulting</span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-[1.1] mb-6">
                {config.tagline?.split(' ').slice(0, -1).join(' ')}<br />
                {config.tagline?.split(' ').slice(-1)}{' '}
                <span className="inline-block align-middle">
                  <ArrowUpRight className="w-12 h-12 md:w-16 md:h-16" />
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-600 max-w-xl mb-10">
                {config.subheadline}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#contact"
                  className="btn-primary inline-flex items-center gap-2 bg-black text-white font-medium px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                  {config.cta?.secondary || 'Start a Project'}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#services"
                  className="btn-secondary inline-flex items-center gap-2 border border-gray-300 text-black font-medium px-6 py-3 rounded-full hover:border-gray-400 transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 lg:py-32 px-6 lg:px-8 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">What We Do</p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
                  Core Services
                </h2>
              </div>
              <div className="lg:flex lg:items-end">
                <p className="text-gray-600 max-w-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
                </p>
              </div>
            </div>

            {/* Service Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {config.services?.map((service, index) => {
                const IconComponent = iconMap[service.icon] || StrategyIcon
                return (
                  <div
                    key={index}
                    className="card service-card group p-8 border border-gray-200 rounded-2xl hover:border-gray-300 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-8">
                      <IconComponent />
                      <span className="service-id text-sm text-gray-400">{service.id}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-3 flex items-center gap-2">
                      {service.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 lg:py-24 px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {config.stats?.map((stat, index) => (
                <div key={index} className="stat-item text-center">
                  <div className="stat-value text-4xl md:text-5xl font-bold text-black mb-2">{stat.value}</div>
                  <div className="stat-label text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section id="approach" className="py-20 lg:py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left Column */}
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">Our Approach</p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight mb-6">
                  {config.approach?.title.split(' ')[0]}<br />
                  {config.approach?.title.split(' ').slice(1).join(' ')}
                </h2>
                <p className="text-gray-600 max-w-md">
                  {config.approach?.description}
                </p>
              </div>

              {/* Right Column - Steps */}
              <div className="space-y-8">
                {config.approach?.steps.map((step, index) => (
                  <div
                    key={index}
                    className={index < (config.approach?.steps.length || 0) - 1 ? "border-b border-gray-200 pb-8" : ""}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-medium text-gray-400">{step.id}</span>
                      {index < 2 && <ArrowUpRight className="w-4 h-4 text-gray-400" />}
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="py-20 lg:py-32 px-6 lg:px-8 bg-black text-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">
                {config.contact?.subheading}
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                {config.contact?.heading.split(' ').slice(0, 2).join(' ')}<br />
                {config.contact?.heading.split(' ').slice(2).join(' ')}{' '}
                <span className="inline-block align-middle">
                  <ArrowUpRight className="w-10 h-10 md:w-12 md:h-12" />
                </span>
              </h2>
              <p className="text-gray-400 max-w-xl mb-10">
                {config.contact?.description}
              </p>
              <Link
                href={`mailto:${config.contact?.email}`}
                className="inline-flex items-center gap-2 text-white text-lg font-medium hover:text-gray-300 transition-colors"
              >
                {config.contact?.email}
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-8 bg-black text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <span className="text-lg font-bold tracking-tight">{config.name.toUpperCase()}</span>

            {/* Footer Navigation */}
            <nav className="flex items-center gap-8">
              {config.navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Copyright */}
            <span className="text-sm text-gray-500">© 2024 {config.name}</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import { getProjectConfig } from '../utils/markdown'

export default function Navigation() {
  const config = getProjectConfig()

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/ai-color.png" 
              alt="Hightail Logo" 
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-2xl font-bold text-gray-900">{config.name}</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {config.navigation.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  href={item.path}
                  className="text-gray-700 hover:text-purple-900 font-medium transition-colors"
                >
                  {item.label}
                </Link>
                
                {/* Dropdown for Resources */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-purple-900 transition-colors"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/trial"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              {config.cta.primary}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
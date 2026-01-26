import { getProjectConfig } from '../../shared/utils/markdown'

export default function StructuredData() {
  const config = getProjectConfig()
  const siteUrl = `https://${config.domain}`

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.name,
    description: config.description,
    url: siteUrl,
    logo: `${siteUrl}/projects/${process.env.PROJECT_NAME || 'default'}/cakewalk-white.png`,
    sameAs: [
      config.social?.twitter ? `https://twitter.com/${config.social.twitter.replace('@', '')}` : null,
      config.social?.linkedin ? `https://linkedin.com/company/${config.social.linkedin}` : null,
    ].filter(Boolean),
  }

  // WebSite Schema for sitelinks search
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: config.name,
    url: siteUrl,
  }

  // Note: Site-wide FAQ schema removed - FAQPage should only be included on
  // pages where the FAQ content actually appears (homepage, blog posts with FAQs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}

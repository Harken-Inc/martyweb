import { getProjectConfig } from '../../shared/utils/markdown'

interface FAQItem {
  question: string
  answer: string
}

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

  // FAQ Schema (if FAQ exists in config)
  const faqSchema = config.faq && config.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: config.faq.map((item: FAQItem) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  } : null

  // WebSite Schema for sitelinks search
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: config.name,
    url: siteUrl,
  }

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
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  )
}

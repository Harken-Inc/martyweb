import { Metadata } from 'next'
import { getPostBySlug, getAllPosts, getProjectName, getProjectConfig } from '../../../../../shared/utils/markdown'
import { notFound } from 'next/navigation'
import { BlogPostPage as CakewalkBlogPostPage } from '@projects/cakewalk/components/BlogPostPage'

export const dynamic = 'force-dynamic'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  const config = getProjectConfig()
  const siteUrl = `https://${config.domain}`

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const title = post.metaTitle || post.title
  const description = post.metaDescription || post.excerpt
  const canonicalUrl = `${siteUrl}/blog/${slug}`
  const ogImage = post.featuredImage || `${siteUrl}/projects/${getProjectName()}/og-image.png`

  return {
    title: `${title} | ${config.name}`,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'article',
      title,
      description,
      url: canonicalUrl,
      siteName: config.name,
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: config.social?.twitter,
    },
  }
}

export async function generateStaticParams() {
  // Skip static generation for cakewalk (uses API)
  if (getProjectName() === 'cakewalk') {
    return []
  }

  const posts = await getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  const projectName = getProjectName()
  const config = getProjectConfig()
  const siteUrl = `https://${config.domain}`

  if (!post) {
    notFound()
  }

  const canonicalUrl = `${siteUrl}/blog/${slug}`
  const imageUrl = post.featuredImage || `${siteUrl}/projects/${projectName}/og-image.png`

  // BreadcrumbList structured data for navigation
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${siteUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.metaTitle || post.title,
        item: canonicalUrl,
      },
    ],
  }

  // BlogPosting structured data for SEO
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: post.author ? {
      '@type': 'Person',
      name: post.author,
      ...(post.authorLink && { url: post.authorLink }),
      ...(post.authorPhoto && { image: post.authorPhoto }),
      ...(post.authorTitle && { jobTitle: post.authorTitle }),
    } : {
      '@type': 'Organization',
      name: config.name,
    },
    publisher: {
      '@type': 'Organization',
      name: config.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/projects/${projectName}/favicon.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    keywords: post.tags?.join(', '),
  }

  // FAQPage structured data (only if post has complete Q&A pairs)
  const completeFaqs = post.faqQuestions?.filter(faq => faq.question && faq.answer) || []
  const faqJsonLd = completeFaqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: completeFaqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null

  // Speakable structured data (marks content suitable for text-to-speech)
  const speakableJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.cakewalk-prose', 'article header h1'],
    },
    url: canonicalUrl,
  }

  // Use project-specific blog post template if available
  if (projectName === 'cakewalk') {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        {faqJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
        />
        <CakewalkBlogPostPage post={post} />
      </>
    )
  }

  // Default blog post template
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-600 mb-4">
            {typeof post.date === 'string' ? post.date : new Date(post.date).toLocaleDateString()} • {post.author}
          </div>
          <div className="flex gap-2 mb-6">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  )
}
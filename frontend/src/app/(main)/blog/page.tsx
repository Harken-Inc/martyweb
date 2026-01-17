import { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, getProjectName, getProjectConfig } from '../../../../shared/utils/markdown'
import { BlogPage as CakewalkBlogPage } from '@projects/cakewalk/components/BlogPage'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  const config = getProjectConfig()
  const siteUrl = `https://${config.domain}`
  const projectName = getProjectName()

  const title = `Blog | ${config.name}`
  const description = `Latest articles and insights from ${config.name} on AI search optimization, content strategy, and growing organic traffic.`

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/blog`,
    },
    openGraph: {
      type: 'website',
      title,
      description,
      url: `${siteUrl}/blog`,
      siteName: config.name,
      images: [
        {
          url: `${siteUrl}/projects/${projectName}/og-image.png`,
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
      images: [`${siteUrl}/projects/${projectName}/og-image.png`],
      creator: config.social?.twitter,
    },
  }
}

export default async function BlogPage() {
  const posts = await getAllPosts()
  const projectName = getProjectName()

  // Use project-specific blog template if available
  if (projectName === 'cakewalk') {
    return <CakewalkBlogPage posts={posts} />
  }

  // Default blog template
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                {post.title}
              </Link>
            </h2>
            <div className="text-gray-600 text-sm mb-4">
              {typeof post.date === 'string' ? post.date : new Date(post.date).toLocaleDateString()} • {post.author}
            </div>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
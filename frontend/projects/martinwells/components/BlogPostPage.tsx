'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight, Calendar, User, Clock, ArrowRight, ArrowLeft } from "lucide-react"
import "../styles.css"

interface Post {
  slug: string
  title: string
  date: string
  author: string
  authorTitle?: string | null
  authorByline?: string | null
  authorLink?: string | null
  authorPhoto?: string | null
  authorBio?: string | null
  excerpt: string
  tags: string[]
  content: string
  faqQuestions?: Array<{ question: string; answer: string }>
  featuredImage?: string | null
  schemaData?: {
    articleType?: string
    wordCount?: number
    readingTimeMinutes?: number
    lastModified?: string
    breadcrumbs?: Array<{ name: string; url: string }>
    howToSteps?: Array<{ name: string; text: string; image?: string }>
    relatedArticles?: Array<{ title: string; url: string }>
  }
}

interface RelatedPost {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
}

interface BlogPostPageProps {
  post: Post
  relatedPosts?: RelatedPost[]
}

export function BlogPostPage({ post, relatedPosts = [] }: BlogPostPageProps) {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--mw-sans)' }}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold text-[#0f172a]">
            martin<span className="text-[#3b82f6]">wells</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#services" className="text-sm text-[#64748b] hover:text-[#0f172a] transition-colors">Services</Link>
            <Link href="/blog" className="text-sm text-[#3b82f6] font-medium">Blog</Link>
            <Link href="/#contact" className="text-sm text-[#64748b] hover:text-[#0f172a] transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <ol className="flex items-center gap-1 text-sm text-[#94a3b8]">
              <li><Link href="/" className="hover:text-[#0f172a] transition-colors">Home</Link></li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1" />
                <Link href="/blog" className="hover:text-[#0f172a] transition-colors">Blog</Link>
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1" />
                <span className="text-[#0f172a] truncate max-w-[200px] md:max-w-[400px]">{post.title}</span>
              </li>
            </ol>
          </motion.nav>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 4).map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 border border-[#e2e8f0] text-[#94a3b8] rounded"
                    style={{ fontFamily: 'var(--mw-mono)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-[#94a3b8]" style={{ fontFamily: 'var(--mw-mono)' }}>
              <time dateTime={post.date} className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              {post.author && (
                <span className="flex items-center gap-1.5">
                  {post.authorPhoto ? (
                    <img src={post.authorPhoto} alt={post.author} className="w-5 h-5 rounded-full object-cover" />
                  ) : (
                    <User className="w-3.5 h-3.5" />
                  )}
                  {post.authorLink ? (
                    <a href={post.authorLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#3b82f6] transition-colors">
                      {post.author}
                    </a>
                  ) : (
                    post.author
                  )}
                </span>
              )}
              {post.schemaData?.readingTimeMinutes && (
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.schemaData.readingTimeMinutes} min read
                </span>
              )}
            </div>
          </motion.header>

          {/* Featured Image */}
          {post.featuredImage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-10"
            >
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full rounded-lg"
              />
            </motion.div>
          )}

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="mw-prose"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>

          {/* FAQ Section */}
          {post.faqQuestions && post.faqQuestions.filter(faq => faq.question && faq.answer).length > 0 && (
            <motion.section
              aria-label="Frequently asked questions"
              className="mt-12 pt-12 border-t border-[#e2e8f0]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-[#0f172a] mb-6">Frequently Asked Questions</h2>
              <dl className="space-y-6">
                {post.faqQuestions
                  .filter(faq => faq.question && faq.answer)
                  .map((faq, index) => (
                    <div key={index} className="border border-[#e2e8f0] rounded-lg p-6">
                      <dt className="text-base font-semibold text-[#0f172a] mb-2">{faq.question}</dt>
                      <dd className="text-sm text-[#64748b] leading-relaxed">{faq.answer}</dd>
                    </div>
                  ))}
              </dl>
            </motion.section>
          )}

          {/* Author Bio */}
          {post.authorBio && (
            <motion.div
              className="mt-12 pt-8 border-t border-[#e2e8f0] flex gap-4 items-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {post.authorPhoto && (
                <img src={post.authorPhoto} alt={post.author} className="w-12 h-12 rounded-full object-cover shrink-0" />
              )}
              <div>
                <p className="font-semibold text-[#0f172a]">{post.author}</p>
                {post.authorTitle && <p className="text-sm text-[#94a3b8] mb-2">{post.authorTitle}</p>}
                <p className="text-sm text-[#64748b] leading-relaxed">{post.authorBio}</p>
              </div>
            </motion.div>
          )}

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-12 pt-8 border-t border-[#e2e8f0]">
              <h2 className="text-xl font-bold text-[#0f172a] mb-6">Read Next</h2>
              <div className="space-y-4">
                {relatedPosts.map(rp => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="block group border border-[#e2e8f0] rounded-lg p-5 hover:border-[#3b82f6]/30 transition-colors"
                  >
                    <h3 className="font-semibold text-[#0f172a] group-hover:text-[#3b82f6] transition-colors mb-1">
                      {rp.title}
                    </h3>
                    <p className="text-sm text-[#64748b] line-clamp-2 mb-2">{rp.excerpt}</p>
                    <span className="text-[#3b82f6] text-sm font-medium flex items-center gap-1">
                      Read more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Back to blog */}
          <div className="mt-12 pt-8 border-t border-[#e2e8f0]">
            <Link
              href="/blog"
              className="text-sm text-[#64748b] hover:text-[#0f172a] flex items-center gap-1 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to all posts
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e2e8f0] py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-sm text-[#94a3b8]" style={{ fontFamily: 'var(--mw-mono)' }}>
            &copy; {new Date().getFullYear()} Martin Wells
          </span>
        </div>
      </footer>
    </div>
  )
}

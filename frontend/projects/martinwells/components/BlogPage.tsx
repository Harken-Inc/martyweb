'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Calendar, User, ChevronRight, ChevronLeft } from "lucide-react"
import "../styles.css"

const POSTS_PER_PAGE = 10

interface Post {
  slug: string
  title: string
  date: string
  author: string
  authorTitle?: string | null
  authorByline?: string | null
  authorLink?: string | null
  authorPhoto?: string | null
  excerpt: string
  tags: string[]
}

interface BlogPageProps {
  posts: Post[]
}

export function BlogPage({ posts }: BlogPageProps) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = posts.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
            <Link href="/blog" className="text-sm text-[#0f172a] font-medium">Blog</Link>
            <Link href="/#contact" className="text-sm text-[#64748b] hover:text-[#0f172a] transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-1 text-sm text-[#94a3b8]">
              <li><Link href="/" className="hover:text-[#0f172a] transition-colors">Home</Link></li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1" />
                <span className="text-[#0f172a]">Blog</span>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p
              className="text-sm tracking-widest uppercase text-[#3b82f6] mb-4"
              style={{ fontFamily: 'var(--mw-mono)' }}
            >
              Writing
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">Blog</h1>
            <p className="text-[#64748b] text-lg">
              Thoughts on AI, technical leadership, and building companies.
            </p>
          </motion.div>

          {/* Posts */}
          <div className="space-y-0">
            {currentPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border-b border-[#e2e8f0] py-8 first:pt-0"
              >
                <Link href={`/blog/${post.slug}`} className="group">
                  <h2 className="text-xl font-semibold text-[#0f172a] group-hover:text-[#3b82f6] transition-colors mb-2">
                    {post.title}
                  </h2>
                </Link>

                <div className="flex items-center gap-4 text-sm text-[#94a3b8] mb-3" style={{ fontFamily: 'var(--mw-mono)' }}>
                  <time dateTime={post.date} className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </time>
                  {post.author && (
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                  )}
                </div>

                <p className="text-[#64748b] text-sm leading-relaxed mb-3">
                  {post.excerpt}
                </p>

                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
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

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#3b82f6] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-3 py-2 text-sm border border-[#e2e8f0] rounded hover:border-[#3b82f6]/30 transition-colors disabled:opacity-40"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
              <span className="text-sm text-[#94a3b8] px-4" style={{ fontFamily: 'var(--mw-mono)' }}>
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 px-3 py-2 text-sm border border-[#e2e8f0] rounded hover:border-[#3b82f6]/30 transition-colors disabled:opacity-40"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#94a3b8] text-lg">No posts yet. Check back soon!</p>
            </div>
          )}
        </div>
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

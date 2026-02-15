'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { AnimatedGrid } from "./AnimatedGrid"
import { ArrowRight, Calendar, User, ChevronRight, ChevronLeft, Home } from "lucide-react"
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
    // Scroll to top of posts
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Generate page numbers to show
  const getPageNumbers = () => {
    const pages: (number | 'ellipsis')[] = []

    if (totalPages <= 7) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always show first page
      pages.push(1)

      if (currentPage > 3) {
        pages.push('ellipsis')
      }

      // Show pages around current
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      if (currentPage < totalPages - 2) {
        pages.push('ellipsis')
      }

      // Always show last page
      pages.push(totalPages)
    }

    return pages
  }

  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: 'hsl(220 20% 4%)' }}>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="relative">
          <AnimatedGrid />

          <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            {/* Breadcrumb navigation */}
            <motion.nav
              aria-label="Breadcrumb"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto mb-8"
            >
              <ol className="flex items-center gap-1 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-1 hover:text-primary transition-colors"
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span>Home</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mx-1 text-muted-foreground/50" />
                  <span className="text-foreground/80" aria-current="page">Blog</span>
                </li>
              </ol>
            </motion.nav>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text glow-text">Blog</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Insights on AI search optimization, content strategy, and growing organic traffic.
              </p>
            </motion.div>

            {/* Posts Grid */}
            <div className="max-w-4xl mx-auto space-y-8">
              {currentPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-6 md:p-8 border border-primary/20 hover:border-primary/40 transition-all group"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                      {post.title}
                    </h2>
                  </Link>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    {post.author && (
                      <span className="flex items-center gap-1.5">
                        {post.authorPhoto ? (
                          <img
                            src={post.authorPhoto}
                            alt={post.author}
                            className="w-4 h-4 rounded-full object-cover"
                          />
                        ) : (
                          <User className="w-4 h-4" />
                        )}
                        {post.authorLink ? (
                          <a
                            href={post.authorLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {post.author}
                          </a>
                        ) : (
                          post.author
                        )}
                      </span>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-5 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-end">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.nav
                aria-label="Blog pagination"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-4xl mx-auto mt-12"
              >
                <div className="flex items-center justify-center gap-2">
                  {/* Previous button */}
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg border border-primary/20 hover:border-primary/40 hover:text-primary transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-primary/20 disabled:hover:text-current"
                    aria-label="Go to previous page"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Previous</span>
                  </button>

                  {/* Page numbers */}
                  <div className="flex items-center gap-1">
                    {getPageNumbers().map((page, index) =>
                      page === 'ellipsis' ? (
                        <span
                          key={`ellipsis-${index}`}
                          className="px-2 py-2 text-muted-foreground"
                        >
                          ...
                        </span>
                      ) : (
                        <button
                          key={page}
                          onClick={() => goToPage(page)}
                          className={`min-w-[40px] px-3 py-2 text-sm font-medium rounded-lg border transition-all ${
                            currentPage === page
                              ? 'bg-primary text-primary-foreground border-primary'
                              : 'border-primary/20 hover:border-primary/40 hover:text-primary'
                          }`}
                          aria-label={`Go to page ${page}`}
                          aria-current={currentPage === page ? 'page' : undefined}
                        >
                          {page}
                        </button>
                      )
                    )}
                  </div>

                  {/* Next button */}
                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg border border-primary/20 hover:border-primary/40 hover:text-primary transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-primary/20 disabled:hover:text-current"
                    aria-label="Go to next page"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Page info */}
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Showing {startIndex + 1}–{Math.min(endIndex, posts.length)} of {posts.length} posts
                </p>
              </motion.nav>
            )}

            {posts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-muted-foreground text-lg">No posts yet. Check back soon!</p>
              </motion.div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

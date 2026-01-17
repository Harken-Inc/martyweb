'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { AnimatedGrid } from "./AnimatedGrid"
import { ArrowRight, Calendar, User } from "lucide-react"
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
  excerpt: string
  tags: string[]
}

interface BlogPageProps {
  posts: Post[]
}

export function BlogPage({ posts }: BlogPageProps) {
  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: 'hsl(220 20% 4%)' }}>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="relative">
          <AnimatedGrid />

          <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
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
              {posts.map((post, index) => (
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

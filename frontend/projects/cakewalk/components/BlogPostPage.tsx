'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { AnimatedGrid } from "./AnimatedGrid"
import { CTAButton } from "./CTAButton"
import { ChevronRight, Calendar, User, Clock, Home, ArrowRight } from "lucide-react"
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
  // Note: Schema markup (BlogPosting, BreadcrumbList, FAQPage, Speakable) is now
  // handled by the parent page.tsx to avoid duplication

  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: 'hsl(220 20% 4%)' }}>
      <Navbar />
      <main className="pt-20 pb-20">
        <div className="relative">
          <AnimatedGrid />

          <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            <article className="max-w-3xl mx-auto">
              {/* Breadcrumb navigation */}
              <motion.nav
                aria-label="Breadcrumb"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-6"
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
                    <Link
                      href="/blog"
                      className="hover:text-primary transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mx-1 text-muted-foreground/50" />
                    <span className="text-foreground/80 truncate max-w-[200px] md:max-w-[300px]" aria-current="page">
                      {post.title}
                    </span>
                  </li>
                </ol>
              </motion.nav>

              {/* Header */}
              <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  <span className="gradient-text">{post.title}</span>
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <time dateTime={post.date} className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  {post.author && (
                    <span className="flex items-center gap-1.5">
                      {post.authorPhoto ? (
                        <img
                          src={post.authorPhoto}
                          alt={post.author}
                          className="w-5 h-5 rounded-full object-cover"
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
                        >
                          {post.author}
                        </a>
                      ) : (
                        post.author
                      )}
                      {post.authorTitle && (
                        <span className="text-muted-foreground/60">• {post.authorTitle}</span>
                      )}
                    </span>
                  )}
                  {post.schemaData?.readingTimeMinutes && (
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {post.schemaData.readingTimeMinutes} min read
                    </span>
                  )}
                </div>
              </motion.header>

              {/* Content Section */}
              <section aria-label="Article content">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="glass-card rounded-xl p-6 md:p-8 border border-primary/20"
                >
                  <div
                    className="cakewalk-prose"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    ref={(el) => {
                      if (el) {
                        // Add FAQ styling classes ONLY to paragraphs with bold questions (ending with ?)
                        const paragraphs = el.querySelectorAll('p');
                        paragraphs.forEach((p) => {
                          const firstChild = p.firstElementChild;
                          if (firstChild && firstChild.tagName === 'STRONG') {
                            const strongText = firstChild.textContent || '';
                            // Only apply FAQ styling if it's a question
                            if (strongText.trim().endsWith('?')) {
                              p.classList.add('faq-item');
                            }
                          }
                        });
                      }
                    }}
                  />
                </motion.div>
              </section>

              {/* FAQ Section - only show if we have complete Q&A pairs */}
              {post.faqQuestions && post.faqQuestions.filter(faq => faq.question && faq.answer).length > 0 && (
                <section aria-label="Frequently asked questions" className="mt-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      Frequently Asked Questions
                    </h2>
                    <dl className="space-y-6">
                      {post.faqQuestions
                        .filter(faq => faq.question && faq.answer)
                        .map((faq, index) => (
                          <div key={index} className="glass-card rounded-xl p-6 border border-primary/20">
                            <dt className="text-lg font-semibold text-foreground mb-3">
                              {faq.question}
                            </dt>
                            <dd className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </dd>
                          </div>
                        ))}
                    </dl>
                  </motion.div>
                </section>
              )}

              {/* Read Next Section */}
              {relatedPosts.length > 0 && (
                <section aria-label="Read next" className="mt-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      Read Next
                    </h2>
                    <div className="grid gap-4">
                      {relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.slug}
                          href={`/blog/${relatedPost.slug}`}
                          className="glass-card rounded-xl p-5 border border-primary/20 hover:border-primary/40 transition-all group"
                        >
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                            {relatedPost.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <time className="text-xs text-muted-foreground/70">
                              {new Date(relatedPost.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </time>
                            <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                              Read more
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </section>
              )}

              {/* CTA Section */}
              <section aria-label="Call to action" className="mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="glass-card rounded-xl p-8 border border-primary/20 text-center"
                >
                  <h2 className="text-xl font-bold text-foreground mb-3">
                    Ready to grow your traffic on autopilot?
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    See how Cakewalk can get your content cited by AI search engines.
                  </p>
                  <CTAButton />
                </motion.div>
              </section>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

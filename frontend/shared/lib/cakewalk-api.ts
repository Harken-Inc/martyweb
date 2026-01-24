/**
 * Cakewalk AEO Blog API Client
 * Based on https://github.com/Cakewalk-ai/api
 */

export interface Author {
  name: string | null
  title: string | null
  photo_url: string | null
  bio: string | null
  byline: string | null
  url: string | null
}

export interface Post {
  id: number
  title: string
  slug: string
  status: string
  post_type: 'pillar' | 'cluster' | 'standalone'
  post_format: string
  primary_keyword: string
  secondary_keywords: string[]
  excerpt: string | null
  body_markdown: string | null
  body_html: string | null
  meta_title: string | null
  meta_description: string | null
  featured_image_url: string | null
  ai_summary: string | null
  faq_questions: Array<{ question: string; answer: string }> | string[]
  published_at: string | null
  created_at: string | null
  updated_at: string | null
  // Author object
  author: Author | null
  // Structured data for schema markup
  schema_data?: {
    article_type?: string
    word_count?: number
    reading_time_minutes?: number
    last_modified?: string
    breadcrumbs?: Array<{ name: string; url: string }>
    how_to_steps?: Array<{ name: string; text: string; image?: string }>
    related_articles?: Array<{ title: string; url: string }>
  }
}

export interface PostsResponse {
  posts: Post[]
  pagination: {
    total: number
    limit: number
    offset: number
    has_more: boolean
  }
}

export interface BlogClientConfig {
  apiKey: string
  projectId: string
  options?: {
    cacheTtl?: number
    baseUrl?: string
  }
}

type PostStatus = 'published' | 'planned' | 'writing' | 'review' | 'all'

interface GetPostsOptions {
  status?: PostStatus
  limit?: number
  offset?: number
}

// Simple in-memory cache
interface CacheEntry<T> {
  data: T
  expiry: number
}

export class BlogClient {
  private apiKey: string
  private projectId: string
  private baseUrl: string
  private cacheTtl: number
  private cache: Map<string, CacheEntry<unknown>> = new Map()

  constructor(config: BlogClientConfig) {
    this.apiKey = config.apiKey
    this.projectId = config.projectId
    this.baseUrl = config.options?.baseUrl ?? 'https://api.cakewalk.ai'
    this.cacheTtl = (config.options?.cacheTtl ?? 300) * 1000 // Convert to ms
  }

  private getCached<T>(key: string): T | null {
    const entry = this.cache.get(key) as CacheEntry<T> | undefined
    if (entry && entry.expiry > Date.now()) {
      return entry.data
    }
    this.cache.delete(key)
    return null
  }

  private setCache<T>(key: string, data: T): void {
    this.cache.set(key, {
      data,
      expiry: Date.now() + this.cacheTtl,
    })
  }

  private async fetch<T>(endpoint: string): Promise<T> {
    const cacheKey = endpoint
    const cached = this.getCached<T>(cacheKey)
    if (cached) {
      return cached
    }

    const url = `${this.baseUrl}${endpoint}`
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        'X-Project-ID': this.projectId,
      },
    })

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`)
    }

    const data = await response.json() as T
    this.setCache(cacheKey, data)
    return data
  }

  async getPosts(options?: GetPostsOptions): Promise<PostsResponse> {
    const params = new URLSearchParams()
    if (options?.status && options.status !== 'all') {
      params.set('status', options.status)
    }
    if (options?.limit) {
      params.set('limit', String(Math.min(options.limit, 100)))
    }
    if (options?.offset) {
      params.set('offset', String(options.offset))
    }

    const queryString = params.toString()
    const endpoint = `/posts${queryString ? `?${queryString}` : ''}`
    return this.fetch<PostsResponse>(endpoint)
  }

  async getPostBySlug(slug: string): Promise<Post | null> {
    try {
      const response = await this.fetch<{ post: Post }>(`/posts/slug/${slug}`)
      return response.post
    } catch {
      return null
    }
  }

  async getPostById(id: number): Promise<Post | null> {
    try {
      const response = await this.fetch<{ post: Post }>(`/posts/${id}`)
      return response.post
    } catch {
      return null
    }
  }

  clearCache(): void {
    this.cache.clear()
  }

  getCacheSize(): number {
    return this.cache.size
  }

  getCacheKeys(): string[] {
    return Array.from(this.cache.keys())
  }
}

// Singleton instance for cakewalk project
let clientInstance: BlogClient | null = null

export function getCakewalkBlogClient(): BlogClient {
  if (!clientInstance) {
    const apiKey = process.env.CAKEWALK_API_KEY
    const projectId = process.env.CAKEWALK_PROJECT_ID
    const baseUrl = process.env.CAKEWALK_API_URL
    const isDevelopment = process.env.NODE_ENV === 'development'

    if (!apiKey || !projectId) {
      throw new Error('CAKEWALK_API_KEY and CAKEWALK_PROJECT_ID environment variables are required')
    }

    clientInstance = new BlogClient({
      apiKey,
      projectId,
      options: {
        baseUrl: baseUrl || 'https://api.cakewalk.ai',
        // Shorter cache in development for faster iteration
        cacheTtl: isDevelopment ? 10 : 300,
      },
    })
  }
  return clientInstance
}

// Helper to reset the client instance (useful for development/testing)
export function resetCakewalkBlogClient(): void {
  if (clientInstance) {
    clientInstance.clearCache()
    clientInstance = null
  }
}

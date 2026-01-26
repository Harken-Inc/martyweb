import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { getCakewalkBlogClient, Post as CakewalkPost } from '../lib/cakewalk-api'

// Convert asterisk-based lists to proper HTML lists
function convertAsterisksToLists(html: string): string {
  // Match patterns like "* Item text" or "* **Bold**: description"
  // This regex looks for asterisks at the start of lines (after any HTML tags)
  const listItemPattern = /(<[^>]+>)*\s*\*\s+([^*\n][^\n]*)/g

  let processed = html
  let matches: RegExpMatchArray | null

  // Find all list patterns
  const lines = processed.split('\n')
  let inList = false
  let result: string[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()

    // Check if this line starts with an asterisk list marker
    if (/^\*\s+/.test(trimmed)) {
      if (!inList) {
        result.push('<ul>')
        inList = true
      }
      // Extract the content after the asterisk
      const content = trimmed.replace(/^\*\s+/, '')
      result.push(`<li>${content}</li>`)
    } else {
      if (inList) {
        result.push('</ul>')
        inList = false
      }
      result.push(line)
    }
  }

  // Close any open list
  if (inList) {
    result.push('</ul>')
  }

  return result.join('\n')
}

// Convert inline numbered lists to proper HTML ordered lists
// Matches patterns like "1. First item 2. Second item 3. Third item"
function convertInlineNumberedLists(html: string): string {
  // Pattern to find inline numbered lists: "1. Text 2. Text 3. Text"
  // Look for sequences of "number. text" that appear inline (not at line start)
  const inlineListPattern = /(\d+)\.\s+([^0-9]+?)(?=\s+\d+\.\s|$)/g

  // Process each paragraph that might contain inline numbered lists
  return html.replace(/<p>([^<]*\d+\.\s+[^<]+)<\/p>/g, (match, content) => {
    // Check if this looks like an inline numbered list (has multiple numbered items)
    const items: string[] = []
    let lastIndex = 0
    let foundItems = 0

    // Match numbered items like "1. Day 1: content" or "2. Day 2: content"
    const itemPattern = /(\d+)\.\s+/g
    let itemMatch
    const positions: { index: number; number: string }[] = []

    while ((itemMatch = itemPattern.exec(content)) !== null) {
      positions.push({ index: itemMatch.index, number: itemMatch[1] })
    }

    // Need at least 2 numbered items to consider it a list
    if (positions.length < 2) {
      return match
    }

    // Extract text between numbered markers
    for (let i = 0; i < positions.length; i++) {
      const start = positions[i].index + positions[i].number.length + 2 // Skip "N. "
      const end = i < positions.length - 1 ? positions[i + 1].index : content.length
      const itemText = content.substring(start, end).trim()
      if (itemText) {
        items.push(itemText)
      }
    }

    if (items.length >= 2) {
      // Get any text before the first number
      const prefixText = content.substring(0, positions[0].index).trim()
      const prefix = prefixText ? `<p>${prefixText}</p>\n` : ''

      const listItems = items.map(item => `<li>${item}</li>`).join('\n')
      return `${prefix}<ol>\n${listItems}\n</ol>`
    }

    return match
  })
}

// Add /blog/ prefix to internal links in HTML content
function prefixInternalLinks(html: string): string {
  // Match href attributes that are relative slugs (not starting with /, http, https, mailto, #, or tel)
  // These are likely blog post slugs that need the /blog/ prefix
  return html.replace(
    /href="([^"]+)"/g,
    (match, url) => {
      // Skip external URLs, absolute paths, anchors, mailto, and tel links
      if (
        url.startsWith('http://') ||
        url.startsWith('https://') ||
        url.startsWith('/') ||
        url.startsWith('#') ||
        url.startsWith('mailto:') ||
        url.startsWith('tel:')
      ) {
        return match
      }
      // Add /blog/ prefix to relative slugs
      return `href="/blog/${url}"`
    }
  )
}

// Enhance FAQ sections with better markup
function enhanceFAQSections(html: string): string {
  let processed = html

  // Step 1: Wrap entire FAQ sections
  processed = processed.replace(
    /(<h2[^>]*>(?:Frequently Asked Questions|FAQ)(?:\s*\([^)]+\))?<\/h2>)([\s\S]*?)(?=<h[12]|$)/gi,
    (match, heading, content) => {
      return `${heading}<div class="faq-section">${content}</div>`
    }
  )

  // Step 2: Within FAQ sections, wrap individual Q&A pairs
  // Pattern: <p><strong>Question?</strong> Answer...</p>
  processed = processed.replace(
    /(<div class="faq-section">[\s\S]*?)<p><strong>([^<]*?\?)<\/strong>\s*([^]*?)<\/p>([\s\S]*?<\/div>)/gi,
    (match, before, question, answer, after) => {
      const wrappedQA = `<div class="faq-item"><p class="faq-question">${question}</p><p class="faq-answer">${answer}</p></div>`
      return before + wrappedQA + after
    }
  )

  return processed
}

export interface Post {
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
  featured?: boolean
  content: string
  // Extended fields from Cakewalk API
  featuredImage?: string | null
  metaTitle?: string | null
  metaDescription?: string | null
  faqQuestions?: Array<{ question: string; answer: string }>
  // Structured data for schema markup
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

export interface Page {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

export interface ProjectConfig {
  name: string
  domain: string
  description: string
  tagline?: string
  subheadline?: string
  hero?: {
    headline?: string
    subheadline?: string
  }
  theme: {
    primaryColor: string
    secondaryColor: string
    accentColor?: string
    fontFamily: string
  }
  navigation: Array<{
    label: string
    path: string
    dropdown?: Array<{
      label: string
      path: string
    }>
  }>
  services?: Array<{
    id: string
    title: string
    description: string
    icon: string
  }>
  stats?: Array<{
    value: string
    label: string
  }>
  approach?: {
    title: string
    description: string
    steps: Array<{
      id: string
      title: string
      description: string
    }>
  }
  contact?: {
    heading: string
    subheading: string
    description: string
    email: string
  }
  cta?: {
    primary: string
    secondary: string
  }
  social: {
    [key: string]: string
  }
  // Allow arbitrary project-specific properties
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export function getProjectName(): string {
  return process.env.PROJECT_NAME || 'hightail'
}

// Convert Cakewalk API post to local Post format
function convertCakewalkPost(post: CakewalkPost): Post {
  // Normalize FAQ questions - API may return strings or objects
  let faqQuestions: Array<{ question: string; answer: string }> | undefined

  if (post.faq_questions && post.faq_questions.length > 0) {
    const firstItem = post.faq_questions[0]
    if (typeof firstItem === 'string') {
      // API returned array of strings (questions only, no answers)
      faqQuestions = (post.faq_questions as string[]).map(q => ({
        question: q,
        answer: '', // No answer data available
      }))
    } else {
      // API returned array of {question, answer} objects
      faqQuestions = post.faq_questions as Array<{ question: string; answer: string }>
    }
  }

  // Process the HTML content to convert lists to proper HTML
  let processedContent = convertAsterisksToLists(post.body_html || '')
  processedContent = convertInlineNumberedLists(processedContent)
  // Add /blog/ prefix to internal links (API returns relative slugs)
  processedContent = prefixInternalLinks(processedContent)
  // Note: FAQ styling is now handled purely via CSS, no HTML transformation needed

  // Helper to prefix relative URLs with /blog/
  const prefixUrl = (url: string): string => {
    if (
      url.startsWith('http://') ||
      url.startsWith('https://') ||
      url.startsWith('/') ||
      url.startsWith('#')
    ) {
      return url
    }
    return `/blog/${url}`
  }

  // Map schema_data if available
  const schemaData = post.schema_data ? {
    articleType: post.schema_data.article_type,
    wordCount: post.schema_data.word_count,
    readingTimeMinutes: post.schema_data.reading_time_minutes,
    lastModified: post.schema_data.last_modified,
    breadcrumbs: post.schema_data.breadcrumbs,
    howToSteps: post.schema_data.how_to_steps,
    relatedArticles: post.schema_data.related_articles?.map(article => ({
      ...article,
      url: prefixUrl(article.url),
    })),
  } : undefined

  return {
    slug: post.slug,
    title: post.title,
    date: post.published_at || post.created_at || '',
    author: post.author?.name || '',
    authorTitle: post.author?.title,
    authorByline: post.author?.byline,
    authorLink: post.author?.url,
    authorPhoto: post.author?.photo_url,
    authorBio: post.author?.bio,
    excerpt: post.excerpt || post.ai_summary || '',
    tags: post.secondary_keywords || [],
    featured: post.post_type === 'pillar',
    content: processedContent,
    featuredImage: post.featured_image_url,
    metaTitle: post.meta_title,
    metaDescription: post.meta_description,
    faqQuestions,
    schemaData,
  }
}

export function getProjectConfig(projectName?: string): ProjectConfig {
  const name = projectName || getProjectName()
  const configPath = path.join(process.cwd(), 'projects', name, 'config.json')
  const configContent = fs.readFileSync(configPath, 'utf8')
  return JSON.parse(configContent)
}

export function getProjectStylesPath(projectName?: string): string {
  const name = projectName || getProjectName()
  return path.join(process.cwd(), 'projects', name, 'styles.css')
}

export async function getAllPosts(projectName?: string): Promise<Post[]> {
  const name = projectName || getProjectName()

  // Use Cakewalk API for cakewalk project
  if (name === 'cakewalk') {
    try {
      const client = getCakewalkBlogClient()
      const response = await client.getPosts({ status: 'published', limit: 100 })

      // Log in development for debugging
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Cakewalk API] Fetched ${response.posts.length} posts (total: ${response.pagination.total})`)
      }

      const posts = response.posts.map(convertCakewalkPost)
      // Sort by date, newest first
      return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
    } catch (error) {
      console.error('Failed to fetch posts from Cakewalk API:', error)
      return []
    }
  }

  // Use filesystem for other projects
  const postsDirectory = path.join(process.cwd(), 'projects', name, 'content', 'posts')

  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: data.date,
        author: data.author,
        excerpt: data.excerpt,
        tags: data.tags || [],
        featured: data.featured || false,
        content
      }
    })

  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug: string, projectName?: string): Promise<Post | null> {
  const name = projectName || getProjectName()

  // Use Cakewalk API for cakewalk project
  if (name === 'cakewalk') {
    try {
      const client = getCakewalkBlogClient()
      const post = await client.getPostBySlug(slug)
      if (!post) return null
      return convertCakewalkPost(post)
    } catch (error) {
      console.error('Failed to fetch post from Cakewalk API:', error)
      return null
    }
  }

  // Use filesystem for other projects
  try {
    const fullPath = path.join(process.cwd(), 'projects', name, 'content', 'posts', `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const processedContent = await remark()
      .use(html)
      .process(content)

    return {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      excerpt: data.excerpt,
      tags: data.tags || [],
      featured: data.featured || false,
      content: processedContent.toString()
    }
  } catch {
    return null
  }
}

export async function getPageBySlug(slug: string, projectName?: string): Promise<Page | null> {
  try {
    const name = projectName || getProjectName()
    const fullPath = path.join(process.cwd(), 'projects', name, 'content', 'pages', `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const processedContent = await remark()
      .use(html)
      .process(content)

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      content: processedContent.toString()
    }
  } catch (error) {
    return null
  }
}

export function getAllProjects(): string[] {
  const projectsDir = path.join(process.cwd(), 'projects')
  if (!fs.existsSync(projectsDir)) {
    return []
  }
  return fs.readdirSync(projectsDir).filter(name => {
    const configPath = path.join(projectsDir, name, 'config.json')
    return fs.existsSync(configPath)
  })
}
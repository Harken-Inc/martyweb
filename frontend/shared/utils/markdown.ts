import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { getCakewalkBlogClient, Post as CakewalkPost } from '../lib/cakewalk-api'

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
    content: post.body_html || '',
    featuredImage: post.featured_image_url,
    metaTitle: post.meta_title,
    metaDescription: post.meta_description,
    faqQuestions,
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
      return response.posts.map(convertCakewalkPost)
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
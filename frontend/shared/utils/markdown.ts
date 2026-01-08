import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export interface Post {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  tags: string[]
  featured?: boolean
  content: string
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
}

export function getProjectName(): string {
  return process.env.PROJECT_NAME || 'hightail'
}

export function getProjectConfig(projectName?: string): ProjectConfig {
  const name = projectName || getProjectName()
  const configPath = path.join(process.cwd(), '..', 'projects', name, 'config.json')
  const configContent = fs.readFileSync(configPath, 'utf8')
  return JSON.parse(configContent)
}

export function getProjectStylesPath(projectName?: string): string {
  const name = projectName || getProjectName()
  return path.join(process.cwd(), '..', 'projects', name, 'styles.css')
}

export function getAllPosts(projectName?: string): Post[] {
  const name = projectName || getProjectName()
  const postsDirectory = path.join(process.cwd(), '..', 'projects', name, 'content', 'posts')

  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = fileNames
    .filter(name => name.endsWith('.md'))
    .map((name) => {
      const slug = name.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, name)
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
  try {
    const name = projectName || getProjectName()
    const fullPath = path.join(process.cwd(), '..', 'projects', name, 'content', 'posts', `${slug}.md`)
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
  } catch (error) {
    return null
  }
}

export async function getPageBySlug(slug: string, projectName?: string): Promise<Page | null> {
  try {
    const name = projectName || getProjectName()
    const fullPath = path.join(process.cwd(), '..', 'projects', name, 'content', 'pages', `${slug}.md`)
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
  const projectsDir = path.join(process.cwd(), '..', 'projects')
  if (!fs.existsSync(projectsDir)) {
    return []
  }
  return fs.readdirSync(projectsDir).filter(name => {
    const configPath = path.join(projectsDir, name, 'config.json')
    return fs.existsSync(configPath)
  })
}
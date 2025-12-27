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
  theme: {
    primaryColor: string
    secondaryColor: string
    fontFamily: string
  }
  navigation: Array<{
    label: string
    path: string
  }>
  social: {
    [key: string]: string
  }
}

export function getProjectConfig(): ProjectConfig {
  const configPath = path.join(process.cwd(), 'projects', 'hightail', 'config.json')
  const configContent = fs.readFileSync(configPath, 'utf8')
  return JSON.parse(configContent)
}

export function getAllPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), 'projects', 'hightail', 'content', 'posts')
  
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

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(process.cwd(), 'projects', 'hightail', 'content', 'posts', `${slug}.md`)
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

export async function getPageBySlug(slug: string): Promise<Page | null> {
  try {
    const fullPath = path.join(process.cwd(), 'projects', 'hightail', 'content', 'pages', `${slug}.md`)
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
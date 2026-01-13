import { MetadataRoute } from 'next'
import { getProjectConfig, getAllPosts } from '../../shared/utils/markdown'
import fs from 'fs'
import path from 'path'

function getProjectName(): string {
  return process.env.PROJECT_NAME || 'hightail'
}

function getAllPages(projectName: string): string[] {
  const pagesDir = path.join(process.cwd(), 'projects', projectName, 'content', 'pages')
  if (!fs.existsSync(pagesDir)) {
    return []
  }
  return fs.readdirSync(pagesDir)
    .filter(name => name.endsWith('.md'))
    .map(name => name.replace(/\.md$/, ''))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const projectName = getProjectName()
  const config = getProjectConfig(projectName)
  const baseUrl = `https://${config.domain}`

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ]

  const posts = getAllPosts(projectName)
  const blogPages: MetadataRoute.Sitemap = posts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const contentPages = getAllPages(projectName)
  const dynamicPages: MetadataRoute.Sitemap = contentPages.map(slug => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages, ...dynamicPages]
}

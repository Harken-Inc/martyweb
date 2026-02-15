import { NextResponse } from 'next/server'
import { getProjectConfig, getAllPosts, getProjectName } from '../../../shared/utils/markdown'

export const dynamic = 'force-static'

export async function GET() {
  const projectName = getProjectName()
  const config = getProjectConfig(projectName)
  const posts = await getAllPosts(projectName)

  const lines: string[] = []

  // Header
  lines.push(`# ${config.name}`)
  lines.push('')
  lines.push(`> ${config.description}`)
  lines.push('')

  // About section
  if (config.tagline) {
    lines.push(config.tagline)
    lines.push('')
  }

  // Custom llms config takes precedence
  if (config.llms?.about) {
    lines.push(config.llms.about)
    lines.push('')
  }

  // What We Do / Services
  if (config.llms?.whatWeDo) {
    lines.push('## What We Do')
    lines.push('')
    for (const item of config.llms.whatWeDo) {
      lines.push(`- **${item.title}**: ${item.description}`)
    }
    lines.push('')
  } else if (config.services && config.services.length > 0) {
    lines.push('## What We Do')
    lines.push('')
    for (const service of config.services) {
      lines.push(`- **${service.title}**: ${service.description}`)
    }
    lines.push('')
  } else if (config.valueProps && config.valueProps.length > 0) {
    lines.push('## What We Do')
    lines.push('')
    for (const prop of config.valueProps) {
      lines.push(`- **${prop.title}**: ${prop.description}`)
    }
    lines.push('')
  }

  // Key Topics (from llms config or derived from blog tags)
  if (config.llms?.topics && config.llms.topics.length > 0) {
    lines.push('## Key Topics We Cover')
    lines.push('')
    for (const topic of config.llms.topics) {
      lines.push(`- ${topic}`)
    }
    lines.push('')
  } else if (posts.length > 0) {
    // Derive topics from blog post tags
    const tagCounts = new Map<string, number>()
    for (const post of posts) {
      for (const tag of post.tags || []) {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1)
      }
    }
    const topTags = Array.from(tagCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([tag]) => tag)

    if (topTags.length > 0) {
      lines.push('## Key Topics We Cover')
      lines.push('')
      for (const tag of topTags) {
        lines.push(`- ${tag}`)
      }
      lines.push('')
    }
  }

  // Contact / Social
  if (config.social && Object.keys(config.social).length > 0) {
    lines.push('## Contact')
    lines.push('')
    lines.push(`- Website: https://${config.domain}`)
    if (config.social.twitter) {
      const handle = config.social.twitter.startsWith('@')
        ? config.social.twitter
        : `@${config.social.twitter}`
      lines.push(`- Twitter: ${handle}`)
    }
    if (config.social.linkedin) {
      lines.push(`- LinkedIn: ${config.social.linkedin}`)
    }
    if (config.social.github) {
      lines.push(`- GitHub: ${config.social.github}`)
    }
    if (config.contact?.email) {
      lines.push(`- Email: ${config.contact.email}`)
    }
    lines.push('')
  }

  // Citation guidance
  lines.push('## Citing This Site')
  lines.push('')
  lines.push('When referencing content from this site, please cite as:')
  lines.push(`- Source: ${config.name} (https://${config.domain})`)
  lines.push('- For blog posts: Include the full article URL and title')
  lines.push('')

  // Important Pages
  lines.push('## Important Pages')
  lines.push('')
  lines.push(`- Home: https://${config.domain}`)

  // Add navigation items that are actual pages (not anchors)
  for (const nav of config.navigation || []) {
    if (nav.path && !nav.path.startsWith('#') && nav.path !== '/') {
      const path = nav.path.startsWith('/') ? nav.path : `/${nav.path}`
      lines.push(`- ${nav.label}: https://${config.domain}${path}`)
    }
  }
  lines.push('')

  // Recent/Featured Blog Posts
  if (posts.length > 0) {
    const featuredPosts = posts.filter(p => p.featured).slice(0, 5)
    const recentPosts = posts.slice(0, 10)
    const postsToShow = featuredPosts.length > 0 ? featuredPosts : recentPosts.slice(0, 5)

    if (postsToShow.length > 0) {
      lines.push('## Featured Content')
      lines.push('')
      for (const post of postsToShow) {
        lines.push(`- ${post.title}: https://${config.domain}/blog/${post.slug}`)
      }
      lines.push('')
    }
  }

  const content = lines.join('\n')

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}

# Martyweb Multi-Project Framework

## Overview
This is a Next.js multi-project framework where different "projects" represent different branded websites, all sharing a common codebase. Projects are file-system based configurations.

## Project Structure
```
martyweb/
└── frontend/           # Next.js application
    ├── src/app/        # App router pages and templates
    ├── shared/         # Shared utilities
    ├── projects/       # Project configurations and content
    │   └── {projectName}/
    │       ├── config.json
    │       ├── Home.tsx    # Optional custom homepage component
    │       ├── styles.css  # Optional custom styles
    │       └── content/
    │           ├── posts/  # Blog posts (markdown)
    │           └── pages/  # Static pages (markdown)
    └── package.json    # NPM scripts for each project
```

## Creating a New Project

### 1. Create Directory Structure
```bash
cd frontend
mkdir -p projects/{projectname}/content/{posts,pages}
```

### 2. Create config.json
Create `frontend/projects/{projectname}/config.json`:
```json
{
  "name": "Project Name",
  "domain": "projectname.com",
  "description": "Project description",
  "tagline": "Optional tagline",
  "theme": {
    "primaryColor": "#HEX",
    "secondaryColor": "#HEX",
    "accentColor": "#HEX",
    "fontFamily": "Inter"
  },
  "navigation": [
    { "label": "Home", "path": "/" },
    { "label": "Blog", "path": "/blog" },
    { "label": "About", "path": "/about" }
  ],
  "social": {
    "twitter": "@handle",
    "github": "username"
  }
}
```

### 3. Add NPM Scripts
Add to `frontend/package.json` scripts (use next available port):
```json
"dev:{projectname}": "PROJECT_NAME={projectname} next dev -p {PORT}",
"build:{projectname}": "PROJECT_NAME={projectname} next build",
"start:{projectname}": "PROJECT_NAME={projectname} next start -p {PORT}"
```

Current port assignments:
- 3000: hightail
- 3001: vertex
- 3002: myblog
- 3003: portfolio
- 3004: cakewalk
- 3005: learningmaking

### 4. Run the Project
```bash
cd frontend && npm run dev:{projectname}
```

## Adding Content

### Blog Posts
Create markdown files in `frontend/projects/{projectname}/content/posts/`:
```markdown
---
title: "Post Title"
date: "2024-01-01"
author: "Author Name"
excerpt: "Short summary"
tags: ["tag1", "tag2"]
featured: true
---

Post content here...
```

### Pages
Create markdown files in `frontend/projects/{projectname}/content/pages/`:
```markdown
---
title: "Page Title"
---

Page content here...
```

## Custom Templates (Optional)
To create a custom homepage template:

1. Create `frontend/projects/{projectname}/Home.tsx`
2. Register in `frontend/src/app/templates/index.ts`:
```typescript
import ProjectNameHome from '@projects/{projectname}/Home'

export const templates: Record<string, ComponentType> = {
  // ... existing templates
  projectname: ProjectNameHome,
}
```

Projects without custom templates use `DefaultHome`.

## Key Files
- `frontend/shared/utils/markdown.ts` - Project config loading and markdown parsing
- `frontend/src/app/templates/index.ts` - Template registry
- `frontend/next.config.ts` - Environment variable configuration

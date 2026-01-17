import { getPageBySlug, getProjectName } from '../../../../shared/utils/markdown'
import { notFound } from 'next/navigation'
import { LegalPage as CakewalkLegalPage } from '@projects/cakewalk/components/LegalPage'

interface Props {
  params: Promise<{ page: string[] }>
}

export default async function DynamicPage({ params }: Props) {
  const { page } = await params
  const slug = page[0] // Get first segment as page slug

  if (!slug) {
    notFound()
  }

  const pageContent = await getPageBySlug(slug)

  if (!pageContent) {
    notFound()
  }

  const projectName = getProjectName()

  // Use project-specific page template if available
  if (projectName === 'cakewalk') {
    return <CakewalkLegalPage title={pageContent.title} content={pageContent.content} />
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{pageContent.title}</h1>
          <div className="text-gray-600 mb-6">{pageContent.date}</div>
        </header>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: pageContent.content }}
        />
      </article>
    </div>
  )
}
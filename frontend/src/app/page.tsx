import { getProjectName } from '../../shared/utils/markdown'
import { templates } from './templates'

export default function Home() {
  const projectName = getProjectName()
  const Template = templates[projectName] || templates.default

  return <Template />
}

import fs from 'fs'
import { getProjectStylesPath } from '../../shared/utils/markdown'

export default function ProjectStyles() {
  const cssPath = getProjectStylesPath()

  let customCSS = ''
  try {
    if (fs.existsSync(cssPath)) {
      customCSS = fs.readFileSync(cssPath, 'utf8')
    }
  } catch {
    // No custom CSS for this project
  }

  if (!customCSS) return null

  return <style dangerouslySetInnerHTML={{ __html: customCSS }} />
}

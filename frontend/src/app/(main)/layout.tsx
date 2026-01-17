import Navigation from "../../../shared/components/Navigation"
import { getProjectName } from "../../../shared/utils/markdown"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const projectName = getProjectName()

  // Cakewalk uses its own navigation in page components
  if (projectName === 'cakewalk') {
    return <>{children}</>
  }

  return (
    <>
      <Navigation />
      {children}
    </>
  )
}

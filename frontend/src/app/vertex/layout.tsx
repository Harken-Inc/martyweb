import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vertex - Strategic Consulting",
  description: "Accelerate your growth with strategic consulting, analytics, operations, and transformation services.",
}

export default function VertexLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}

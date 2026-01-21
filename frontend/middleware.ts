import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  const url = request.nextUrl.clone()

  // Redirect www to non-www with 301 permanent redirect
  if (host.startsWith('www.')) {
    const newHost = host.replace('www.', '')
    url.host = newHost
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  // Match all paths except static files and api routes
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}

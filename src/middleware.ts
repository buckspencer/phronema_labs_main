import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl.pathname
  if (['/about', '/blog', '/process', '/work'].includes(url)) {
    return NextResponse.rewrite(new URL('/404', req.nextUrl))
  }
}

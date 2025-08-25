import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getIronSession } from 'iron-session/edge';
import { SessionData, sessionOptions } from '@/lib/session';

export async function middleware(request: NextRequest) {
  const session = await getIronSession<SessionData>(request.cookies, sessionOptions);
  const { pathname } = request.nextUrl;

  // If user is trying to access admin routes without a session, redirect to login
  if (!session.isLoggedIn && pathname.startsWith('/admin') && pathname !== '/admin/login') {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // If user is logged in and tries to access login page, redirect to dashboard
  if (session.isLoggedIn && pathname === '/admin/login') {
    return NextResponse.redirect(new URL('/admin/blogs', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};

import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

const protectedRoutes = ['/dashboard'];
const publicRoutes = ['/login', '/signup'];

export async function updateSession(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some((route) =>
    path.startsWith(route)
  );
  const isPublicRoute = publicRoutes.includes(path);

  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (isPublicRoute && user && !path.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
  }

  if (isProtectedRoute && !user) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

  return supabaseResponse;
}

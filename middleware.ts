import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl
    const token = req.nextauth.token

    // Admin routes
    if (pathname.startsWith("/admin") && token?.role !== "admin") {
      return NextResponse.redirect(new URL("/auth/login", req.url))
    }

    // Agent/Dashboard routes
    if (pathname.startsWith("/dashboard") && !["agent", "admin"].includes(token?.role as string)) {
      return NextResponse.redirect(new URL("/auth/login", req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl

        // Public routes that don't require authentication
        const publicRoutes = [
          "/",
          "/properties",
          "/agents",
          "/about",
          "/contact",
          "/blog",
          "/auth/login",
          "/auth/register",
        ]

        // Check if the route is public or matches public patterns
        const isPublicRoute = publicRoutes.some(
          (route) =>
            pathname === route ||
            pathname.startsWith(route + "/") ||
            pathname.startsWith("/api/auth/") ||
            pathname.match(/^\/properties\/[^/]+$/), // Allow individual property pages
        )

        // Allow public routes
        if (isPublicRoute) {
          return true
        }
        // Require authentication for all other routes
        if (!token) {
          return false
        }

        // Admin routes
        if (pathname.startsWith("/admin")) {
          return token.role === "admin"
        }

        // Agent/Admin routes
        if (pathname.startsWith("/dashboard")) {
          return token.role === "agent" || token.role === "admin"
        }

        // Protected API routes
        if (pathname.startsWith("/api/protected")) {
          return !!token
        }

        return true
      },
    },
  },
)

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/admin/:path*",
    "/dashboard/:path*",
    "/api/protected/:path*",
  ],
}

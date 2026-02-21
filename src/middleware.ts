import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { v4 as uuidv4 } from "uuid";

export function middleware(request: NextRequest) {
  let response = NextResponse.next();

  // Check if we already have a distinct ID for the user
  let distinctId = request.cookies.get("ph_distinct_id")?.value;

  if (!distinctId) {
    // Generate a new distinct ID
    distinctId = uuidv4();

    // Set the cookie on the response
    // Using a very long expiration (e.g., 1 year)
    response.cookies.set("ph_distinct_id", distinctId || "", {
      expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
      path: "/",
      sameSite: "lax",
    });
  }

  // Next.js convention to apply headers down the route
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|images|og).*)",
  ],
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - icon.svg (favicon)
     * - favicon.ico
     */
    '/((?!api|_next/static|_next/image|favicon.ico|icon.svg).*)',
  ],
};

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  // Get hostname (e.g. 'amobear.aisoftwarestudio.co', 'localhost:3000')
  const hostname = request.headers.get("host") || "";
  
  // Exclude static assets that might bypass the matcher somehow
  // but ALLOW /app-ads.txt to pass through so we can serve it dynamically per partner
  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/api") ||
    (url.pathname.includes(".") && url.pathname !== "/app-ads.txt")
  ) {
    return NextResponse.next();
  }

  const isLocalhost = hostname.includes("localhost") || hostname.includes("127.0.0.1");
  
  let subdomain = "";
  if (!isLocalhost) {
    // Expected formats: 
    // aisoftwarestudio.co (no subdomain)
    // www.aisoftwarestudio.co (www subdomain - treat as root)
    // amobear.aisoftwarestudio.co (partner subdomain)
    const parts = hostname.split(".");
    if (parts.length >= 3) {
      // E.g. amobear.aisoftwarestudio.co -> parts[0] is 'amobear'
      subdomain = parts[0];
    }
  }

  // If there is a valid subdomain that isn't 'www', rewrite to /partner/[subdomain]
  if (subdomain && subdomain !== "www") {
    // Rewrite the URL to the dynamic partner route
    url.pathname = `/partner/${subdomain}${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { siteConfig } from './app/config/site';

export function middleware(request: NextRequest) {
  // Check if maintenance mode is enabled
  if (siteConfig.maintenance.enabled) {
    const requestPath = request.nextUrl.pathname;
    
    // Don't redirect if already on maintenance page
    if (requestPath === '/maintenance') {
      return NextResponse.next();
    }
    
    // Check for allowed IPs if specified
    if (siteConfig.maintenance.allowedIPs.length > 0) {
      const ip = request.ip || '';
      if (siteConfig.maintenance.allowedIPs.includes(ip)) {
        // Allow access for whitelisted IPs
        return NextResponse.next();
      }
    }
    
    // Redirect to maintenance page
    const maintenanceUrl = new URL('/maintenance', request.url);
    return NextResponse.redirect(maintenanceUrl);
  }
  
  return NextResponse.next();
}

// Only run middleware on specific paths
export const config = {
  matcher: [
    /*
     * Match all paths except:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /icons, /images (static files)
     * 4. /maintenance (the maintenance page itself)
     * 5. favicon.ico, manifest.json (browser files)
     */
    '/((?!api|_next|icons|images|maintenance|favicon.ico|manifest.json).*)',
  ],
}; 
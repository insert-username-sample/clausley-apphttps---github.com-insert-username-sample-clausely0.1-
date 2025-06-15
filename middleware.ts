import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
    '/',
    '/login(.*)',
    '/signup(.*)',
    '/legal(.*)',
    '/tech-docs(.*)',
  ]);
  
  export default clerkMiddleware((auth, req) => {
    if (!isPublicRoute(req)) {
      auth().protect();
    }
  });

export const config = {
  matcher: [
    "/((?!_next|.*\..*|favicon.ico).*)",
    "/(api|trpc)(.*)",
  ],
};
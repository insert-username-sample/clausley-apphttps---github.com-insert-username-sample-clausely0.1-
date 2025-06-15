import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: [
    '/',
    '/login(.*)',
    '/signup(.*)',
  ],
});

export const config = {
  matcher: [
    "/((?!_next|.*\..*|favicon.ico).*)",
    "/(api|trpc)(.*)",
  ],
};
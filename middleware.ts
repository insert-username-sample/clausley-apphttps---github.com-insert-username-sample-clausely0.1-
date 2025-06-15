import { clerkMiddleware } from "@clerk/nextjs/server";
 
export default clerkMiddleware({
  publicRoutes: [
    "/",
    "/login(.*)",
    "/signup(.*)",
    "/legal(.*)",
    "/tech-docs(.*)",
  ]
});

export const config = {
  matcher: [
    "/((?!_next|.*\..*|favicon.ico).*)",
    "/(api|trpc)(.*)",
  ],
};
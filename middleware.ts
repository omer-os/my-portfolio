import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/((?!protected).*)"], // This regular expression matches all routes except '/protected'
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

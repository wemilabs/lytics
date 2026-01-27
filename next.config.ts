import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    typedEnv: true,
    viewTransition: true,
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "hsl8jk540a.ufs.sh" }],
  },
  reactCompiler: true,
  typedRoutes: true,
};

export default nextConfig;

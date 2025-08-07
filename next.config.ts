import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "base.mossport.info",
        port: "",
        pathname: "/api/files/**",
      },
    ],
  },
};

export default nextConfig;

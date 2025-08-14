import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [process.env.NEXT_PUBLIC_IMAGE_DOMAIN || ""],
    unoptimized: true,
  },
  output: "export",
  basePath: "",
  assetPrefix: "",
};
export default nextConfig;

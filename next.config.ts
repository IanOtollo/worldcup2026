import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "upload.wikimedia.org" },
      { hostname: "img.youtube.com" },
      { hostname: "crests.football-data.org" },
    ],
  },
};

export default nextConfig;

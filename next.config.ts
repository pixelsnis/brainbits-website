import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/download",
        destination:
          "https://apps.apple.com/app/apple-store/id6753618169?pt=124081099&ct=website&mt=8",
        permanent: false,
      },
      {
        source: "/threads",
        destination: "/?utm_campaign=threads",
        permanent: false,
      },
      {
        source: "/reddit",
        destination: "/?utm_campaign=reddit",
        permanent: false,
      },
      {
        source: "/discord",
        destination: "/?utm_campaign=discord",
        permanent: false,
      },
      {
        source: "/producthunt",
        destination: "/?utm_campaign=producthunt",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

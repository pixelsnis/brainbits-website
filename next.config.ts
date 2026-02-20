import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/download",
        destination:
          "https://apps.apple.com/in/app/brainbits-capture-recall/id6753618169",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/threads",
        destination:
          "https://apps.apple.com/in/app/brainbits-notes-memory/id6753618169?utm_source=Organic&utm_medium=Threads&utm_campaign=Brainbits",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

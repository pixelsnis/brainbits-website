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
      {
        source: "/threads",
        destination:
          "https://apps.apple.com/app/apple-store/id6753618169?pt=124081099&ct=Threads&mt=8",
        permanent: false,
      },
      {
        source: "/reddit",
        destination:
          "https://apps.apple.com/app/apple-store/id6753618169?pt=124081099&ct=Reddit&mt=8",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

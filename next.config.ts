/* @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: ["localhost"],
    dangerouslyAllowSVG: true,
  },
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
};

export default nextConfig;

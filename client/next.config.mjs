/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-i.s3.us-east-2.amazonaws.com/assets",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

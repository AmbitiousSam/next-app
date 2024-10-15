/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/beta-home",
  basePath: "/beta-home",
  images: {
    domains: ["utfs.io", "img.clerk.com", "subdomain"],
  },
  reactStrictMode: false,

};


export default nextConfig;

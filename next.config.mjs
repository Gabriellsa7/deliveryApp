/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8888/api/:path*", // Proxy para o backend
      },
    ];
  },
};

export default nextConfig;

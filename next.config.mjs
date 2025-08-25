/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/whatsup",
        destination: "https://www.youtube.com/watch?v=Ga0KBHmSLns",
        permanent: false,
      },
      {
        source: "/whatsapp",
        destination: "https://www.youtube.com/watch?v=Ga0KBHmSLns",
        permanent: false,
      },
      {
        source: "/informal",
        destination: "https://www.youtube.com/watch?v=Ga0KBHmSLns",
        permanent: false,
      },
    ];
  },

  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;

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
      {
        source: "/brochure",

        destination: "/Brochure.pdf",

        permanent: false,
      },
      {
        source: "/cookoff",
        destination: "https://gravitas.vit.ac.in/events/bdfcebea-c141-4a61-ac73-61dec96c08f4",
        permanent: false
      },
      {
        source: "/clueminati",
        destination: "https://gravitas.vit.ac.in/events/4bb51469-3e67-4275-8f88-fcf56b2e05d4",
        permanent: false
      }
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/sheets",
        destination: `${process.env.SHEETS_API_URL}`,
      },
    ];
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;

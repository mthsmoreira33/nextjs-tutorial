/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'wembleypark.com', 'www.visiteosusa.com.br', 'live.staticflickr.com', 'scontent.fgyn11-1.fna.fbcdn.net', 'hydeparkwinterwonderland.com'],
  },
};

module.exports = nextConfig;

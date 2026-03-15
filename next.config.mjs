/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      // Cross-region 404 fixes
      { source: '/suffolk/bethpage', destination: '/nassau/bethpage', permanent: true },
      { source: '/nassau/little-neck', destination: '/queens/little-neck', permanent: true },
      { source: '/queens/inwood', destination: '/nassau/inwood', permanent: true },
      { source: '/queens/lawrence', destination: '/nassau/lawrence', permanent: true },
      { source: '/nassau/melville', destination: '/suffolk/melville', permanent: true },
      // St. town 404 fixes
      { source: '/suffolk/st.-james', destination: '/suffolk/saint-james', permanent: true },
      { source: '/queens/st.-albans', destination: '/queens/st-albans', permanent: true },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },
};
export default nextConfig;

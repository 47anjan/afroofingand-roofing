import { NextConfig } from 'next';
// import withExportImages from 'next-export-optimize-images';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  compress: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    unoptimized: true,
  },
};

// export default withExportImages(nextConfig);

export default nextConfig;

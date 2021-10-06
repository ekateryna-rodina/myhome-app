/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    domains: ["res.cloudinary.com", "images.unsplash.com"],
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    // if (!isServer) {
    //   config.resolve.fallback = {
    //     tls: false,
    //     net: false,
    //     crypto: false,
    //     os: false,
    //     zlib: false,
    //     fs: false,
    //     stream: false,
    //     path: false,
    //     http: false,
    //     https: false,
    //   };
    // }
    return config;
  },
};

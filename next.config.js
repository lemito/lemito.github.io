const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  reactStrictMode: true,
  images: {
    domains: [
      'https://png.pngtree.com',
    ],
  },
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: { esmExternals: true }
});

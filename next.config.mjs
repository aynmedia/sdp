/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  rules: {
    '@next/next/no-img-element': 'off',
    '@next/next/no-sync-scripts': 'off',
    '@next/next/no-document-import-in-page': 'off',
    '@next/next/no-script-in-document': 'off',
    '@next/next/no-html-link-for-pages': 'off',
  },
};

export default nextConfig;

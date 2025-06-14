/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configuración para deployment estático
  distDir: 'out',
  // Configuración para GitHub Pages si decides usarlo después
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig

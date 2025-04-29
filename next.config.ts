/** @type {import('next').NextConfig} */
const nextConfig = {
  // Désactive l'optimisation des images si vous avez des problèmes
  images: {
    unoptimized: true,
  },
  
  // Configuration pour les fichiers statiques (comme vos images)
  experimental: {
    outputFileTracingIncludes: {
      '/*': ['./public/images/**/*'],
    },
  },
  
  // Optionnel : Active le SWC minifier pour de meilleures performances
  swcMinify: true,
  
  // Optionnel : Configuration pour les redirections/rewrites si nécessaire
  async redirects() {
    return [
      {
        source: '/old-experience',
        destination: '/experience',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
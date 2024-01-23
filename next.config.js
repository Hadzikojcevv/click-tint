/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['drive.google.com', "i.imgur.com"]
    },
    publicRuntimeConfig: {
        STATIC_FOLDER: '/static',
      },
        
    
}

module.exports = nextConfig

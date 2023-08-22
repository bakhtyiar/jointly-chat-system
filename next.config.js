/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HOSTNAME: process.env.HOSTNAME,
    PORT: process.env.PORT,
    API_HOST: process.env.API_HOST,
    HOST_URL: process.env.HOST_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    PORT_DB: process.env.PORT_DB,
    DB_URL: process.env.DB_URL,
    PAGE_LIMIT: process.env.PAGE_LIMIT,
  }
}

module.exports = nextConfig

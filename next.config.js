/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "fakestoreapi.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "images.tokopedia.net",
                port: "",
                pathname: "/**",
            },
        ]
    }
}

module.exports = nextConfig
